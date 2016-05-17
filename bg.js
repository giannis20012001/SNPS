/**
 * Created by Rafa on 5/17/2016.
 */

readFacebookSettings =[
    {
        name:"Who can see your future posts?",
        url:"https://www.facebook.com/settings?tab=privacy",
        jquery_selector:"('.fbSettingsList:eq(0) .fbSettingsListItem:eq(0) ._nlm').text()",

    },
    {   name:"Who cand send you friend requests?",
        url:"https://www.facebook.com/settings?tab=privacy",
        jquery_selector:"('.fbSettingsList:eq(1) .fbSettingsListItem:eq(0) ._nlm').text()"

    },
    {   name:"Who can look you up using the email address you provided?",
        url:"https://www.facebook.com/settings?tab=privacy",
        jquery_selector:"('.fbSettingsList:eq(2) .fbSettingsListItem:eq(0) ._nlm').text()"
    },
    {   name:"Who can look you up using the phone number you provided?",
        url:"https://www.facebook.com/settings?tab=privacy",
        jquery_selector:"('.fbSettingsList:eq(2) .fbSettingsListItem:eq(1) ._nlm').text()"

    },
    {   name:"Do you want search engines outside of Facebook to link to your profile",
        url:"https://www.facebook.com/settings?tab=privacy",
        jquery_selector:"('.fbSettingsList:eq(2) .fbSettingsListItem:eq(2) ._nlm').text()"
    }
];


(function(){
    chrome.runtime.onConnect.addListener(function(port) {
        if(port.name == "SNPS"){
            chrome.tabs.query({active:true, currentWindow:true},function (tabs) {
                var firstTab = tabs[0];


                readFacebookSettings.forEach(function(setting){
                    chrome.tabs.update(firstTab.id, {url: setting}, function (tab) {
                        insertJavascriptFile(tab.id, "util/jquery-1.12.3.min.js");
                        insertJavascriptFile(tab.id, "sn_settings/facebook.js");
                        insertJavascriptFile(tab.id, "execute_script.js");
                    });
                });

            });
        }
    });
})();


function insertJavascriptFile(id, file){
    chrome.tabs.executeScript(id, {
        file: file
    }, function () {
        if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError.message);
        }
    });
}
