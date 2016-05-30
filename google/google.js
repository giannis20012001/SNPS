/**
 * Created by lumi (A.K.A. John Tsantilis) on 16/5/2016.
 */

readGoogleSettings =
    [
        {
            name: "Turn off (pause) your searches and browsing activity",
            url: "https://myaccount.google.com/privacy#accounthistory",
            jquery_selector: $("div[data-aid='search']").attr("data-avail"), //return value 0 or 1

        },

        {
            name: "Pause location history",
            url: "https://myaccount.google.com/privacy#accounthistory",
            jjquery_selector: $("div[data-aid='location']").attr("data-avail"), //return value 0 or 1
        },

        {
            name: "Pause voice searches and commands",
            url: "https://myaccount.google.com/privacy#accounthistory",
            jquery_selector: $("div[data-aid='audio']").attr("data-avail"), //return value 0 or 1

        },

        {
            name: "Pause your YouTube search history",
            url: "https://myaccount.google.com/privacy#accounthistory",
            jquery_selector: $("div[data-aid='youtubeSearch']").attr("data-avail"), //return value 0 or 1

        },

        {
            name: "Pause your YouTube watch history",
            url: "https://myaccount.google.com/privacy#accounthistory",
            jquery_selector: $("div[data-aid='youtubeWatch']").attr("data-avail"), //return value 0 or 1

        },

        {
            name: "Turn off ads based on your interest",
            url: "https://www.google.com/settings/u/0/ads/authenticated",
            jquery_selector: $("div.Pu > span.iL > div[aria-checked]").attr("aria-checked"), //return value true or false

        }

    ];


var currentSetting;
var currentTab;
var currentCallback;

(function () {
    chrome.runtime.onConnect.addListener(function (port) {

        if (port.name == "SNPS") {

            var sequence = Promise.resolve();
            readGoogleSettings.forEach(function (setting) {
                sequence = sequence.then(function () {
                    return queryurl(setting);
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

function queryurl(setting) {

    return new Promise(function (resolve, reject) {

        chrome.tabs.create({jquery_selector: setting.jquery_selector}, function (tab) {
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