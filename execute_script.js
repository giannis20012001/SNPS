var port = chrome.runtime.connect({name: "getSNSettings"});
port.postMessage({status: "waitingCommand"});
port.onMessage.addListener(function (msg) {
    if (msg.command == "scan") {
        console.log(msg);

        var jquery_selector = msg.setting.jquery_selector;
        var setting = null;

        switch (jquery_selector.valueType){
            case "attrValue": setting = jQuery(jquery_selector.element).attr(jquery_selector.attrValue); break;
			case "checkbox": setting = jQuery(jquery_selector.element).attr("checked")?true:false; break;
            case "inner": setting = jQuery(jquery_selector.element).text(); break;
            case "classname": setting = jQuery(jquery_selector.element).hasClass(jquery_selector.attrValue); break;
            case "radio" :setting = jQuery(jquery_selector.element + ":checked").attr("value"); break;
            case "twitteRadio" :setting = jQuery(jquery_selector.element).attr("checked")?true:false; break;
            case "selected": setting = jQuery(jquery_selector.element + ":selected").attr("value");; break;
            default: setting = null;
        }

        port.postMessage({status: "finishedCommand", result: setting});
    }
});


