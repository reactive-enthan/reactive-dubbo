var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "120000",
        "ok": "120000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "102",
        "ok": "102",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1168",
        "ok": "1168",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "134",
        "ok": "134",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "52",
        "ok": "52",
        "ko": "-"
    },
    "percentiles1": {
        "total": "116",
        "ok": "116",
        "ko": "-"
    },
    "percentiles2": {
        "total": "136",
        "ok": "136",
        "ko": "-"
    },
    "percentiles3": {
        "total": "227",
        "ok": "227",
        "ko": "-"
    },
    "percentiles4": {
        "total": "361",
        "ok": "361",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 119932,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 68,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1445.783",
        "ok": "1445.783",
        "ko": "-"
    }
},
contents: {
"req_future-da907": {
        type: "REQUEST",
        name: "future",
path: "future",
pathFormatted: "req_future-da907",
stats: {
    "name": "future",
    "numberOfRequests": {
        "total": "120000",
        "ok": "120000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "102",
        "ok": "102",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1168",
        "ok": "1168",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "134",
        "ok": "134",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "52",
        "ok": "52",
        "ko": "-"
    },
    "percentiles1": {
        "total": "116",
        "ok": "116",
        "ko": "-"
    },
    "percentiles2": {
        "total": "136",
        "ok": "136",
        "ko": "-"
    },
    "percentiles3": {
        "total": "227",
        "ok": "227",
        "ko": "-"
    },
    "percentiles4": {
        "total": "361",
        "ok": "361",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 119932,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 68,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1445.783",
        "ok": "1445.783",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
