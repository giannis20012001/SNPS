/**
 * Created by Rafa on 5/17/2016.
 */

readFacebookSettings = [
    {
        name: "Who can see your future posts?",
        url: "https://www.facebook.com/settings?tab=privacy",
        jquery_selector: ".fbSettingsList:eq(0) .fbSettingsListItem:eq(0) ._nlm",

    },
    {
        name: "Who cand send you friend requests?",
        url: "https://www.facebook.com/settings?tab=privacy",
        jquery_selector: ".fbSettingsList:eq(1) .fbSettingsListItem:eq(0) ._nlm"

    },
    {
        name: "Who can look you up using the email address you provided?",
        url: "https://www.facebook.com/settings?tab=privacy",
        jquery_selector: ".fbSettingsList:eq(2) .fbSettingsListItem:eq(0) ._nlm"
    },
    {
        name: "Who can look you up using the phone number you provided?",
        url: "https://www.facebook.com/settings?tab=privacy",
        jquery_selector: ".fbSettingsList:eq(2) .fbSettingsListItem:eq(1) ._nlm"

    },
    {
        name: "Do you want search engines outside of Facebook to link to your profile",
        url: "https://www.facebook.com/settings?tab=privacy",
        jquery_selector: ".fbSettingsList:eq(2) .fbSettingsListItem:eq(2) ._nlm"
    },
    {
        name: "Who can post on your timeline",
        url: "https://www.facebook.com/settings?tab=timeline",
        jquery_selector: ".fbSettingsList:eq(0) .fbSettingsListItem:eq(0) ._nlm"
    },
    {
        name: "Review posts friends tag you in before they appear on your timeline?",
        url: "https://www.facebook.com/settings?tab=timeline",
        jquery_selector: ".fbSettingsList:eq(0) .fbSettingsListItem:eq(1) ._nlm"
    }
];

var currentSetting;
var currentTab;
var currentCallback;

(function () {
    chrome.runtime.onConnect.addListener(function (port) {

        if (port.name == "SNPS") {

            var sequence = Promise.resolve();
            readFacebookSettings.forEach(function (setting) {
                sequence = sequence.then(function () {
                    return queryPage(setting);
                }).then(function (result) {
                    console.log(result);
                }).catch(function (err) {
                    console.log(err)
                });

            });
        }
        else {

            if (port.name == "getSNSettings") {
                port.onMessage.addListener(function (msg) {
                    if (msg.status == "waitingCommand") {
                        if(currentSetting!== undefined){
                            port.postMessage({command: "scan", setting: currentSetting});
                        }
                    }
                    else {
                        if (msg.status == "finishedCommand") {
                            chrome.tabs.remove(currentTab.id);
                            console.log({name: currentSetting.name, result: msg.result});
                            currentCallback();
                        }
                    }
                })

            }
        }
    });
})();

function queryPage(setting) {

    return new Promise(function (resolve, reject) {

        chrome.tabs.create({url: setting.url}, function (tab) {
            currentSetting = setting;
            currentTab = tab;

            insertJavascriptFile(tab.id, "util/jquery-1.12.3.min.js", function () {
                insertJavascriptFile(tab.id, "execute_script.js", function () {


                    currentCallback = function () {
                        resolve("finishedCommand");
                    }

                });
            });

        });
    });


}


function insertJavascriptFile(id, file, callback) {
    chrome.tabs.executeScript(id, {
        file: file
    }, function () {
        if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError.message);
        }
        else if (callback) {
            callback();
        }
    });
}
