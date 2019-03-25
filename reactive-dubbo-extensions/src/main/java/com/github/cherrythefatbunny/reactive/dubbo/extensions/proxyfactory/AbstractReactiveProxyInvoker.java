package com.github.cherrythefatbunny.reactive.dubbo.extensions.proxyfactory;

import org.apache.dubbo.common.URL;
import org.apache.dubbo.common.logger.Logger;
import org.apache.dubbo.common.logger.LoggerFactory;
import org.apache.dubbo.common.utils.StringUtils;
import org.apache.dubbo.rpc.*;
import org.apache.dubbo.rpc.proxy.AbstractProxyInvoker;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.lang.reflect.InvocationTargetException;
import java.util.ArrayList;
import java.util.concurrent.CompletableFuture;
import java.util.function.Consumer;

public abstract class AbstractReactiveProxyInvoker<T> extends AbstractProxyInvoker<T> {

    private static final Logger LOGGER = LoggerFactory.getLogger(AbstractReactiveProxyInvoker.class);
    protected final T proxy;
    private final Class<T> type;
    private final URL url;

    public AbstractReactiveProxyInvoker(T proxy, Class<T> type, URL url) {
        super(proxy, type, url);
        this.proxy = proxy;
        this.type = type;
        this.url = url;
    }

    @Override
    public Result invoke(Invocation invocation) throws RpcException {
        String publisher = invocation.getAttachment("Publisher");
        if(StringUtils.isBlank(publisher)) {
            return super.invoke(invocation);
        }
        RpcContext rpcContext = RpcContext.getContext();
        try {
            Object obj = doInvoke(proxy, invocation.getMethodName(), invocation.getParameterTypes(), invocation.getArguments());
            Mono mono;
            if(publisher.equals("mono")) {
                mono = (Mono) obj;
            } else {
                Flux<Object> flux = (Flux<Object>) obj;
                mono = flux.collect(ArrayList::new,ArrayList::add);
            }
            CompletableFuture future = new CompletableFuture();
            Consumer<? extends Throwable> errorHandler = future::completeExceptionally;
            mono.doOnError(errorHandler)
                .doOnCancel(() -> future.cancel(true))
                .doOnSuccess(future::complete)
                .subscribe();
            return new AsyncRpcResult(future);
        } catch (InvocationTargetException e) {
            // TODO async throw exception before async thread write back, should stop asyncContext
            if (rpcContext.isAsyncStarted() && !rpcContext.stopAsync()) {
                LOGGER.error("Provider async started, but got an exception from the original method, cannot write the exception back to consumer because an async result may have returned the new thread.", e);
            }
            return new RpcResult(e.getTargetException());
        } catch (Throwable e) {
            throw new RpcException("Failed to invoke remote proxy method " + invocation.getMethodName() + " to " + getUrl() + ", cause: " + e.getMessage(), e);
        }
    }
}