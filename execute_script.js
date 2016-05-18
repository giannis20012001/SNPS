var port = chrome.runtime.connect({name: "getSNSettings"});
port.postMessage({status: "waitingCommand"});
port.onMessage.addListener(function (msg) {
    if (msg.command == "scan") {
        console.log(msg);
        port.postMessage({status: "finishedCommand", result: jQuery(msg.setting.jquery_selector).text()});
    }
});


