/**
 * Created by Rafa on 5/17/2016.
 */

readFacebookSettings = [
    {
        name: "Who can see your future posts?",
        url: "https://www.facebook.com/settings?tab=privacy",
        jquery_selector:{
            element:".fbSettingsList:eq(0) .fbSettingsListItem:eq(0) ._nlm",
            valueType: "inner"
        }

    },
    {
        name: "Who cand send you friend requests?",
        url: "https://www.facebook.com/settings?tab=privacy",
        jquery_selector: {
            element :".fbSettingsList:eq(1) .fbSettingsListItem:eq(0) ._nlm",
            valueType: "inner"
        }
    },
    {
        name: "Who can look you up using the email address you provided?",
        url: "https://www.facebook.com/settings?tab=privacy",
        jquery_selector: {
            element: ".fbSettingsList:eq(2) .fbSettingsListItem:eq(0) ._nlm",
            valueType:"inner"
        }
    },
    {
        name: "Who can look you up using the phone number you provided?",
        url: "https://www.facebook.com/settings?tab=privacy",
        jquery_selector:{
            element:".fbSettingsList:eq(2) .fbSettingsListItem:eq(1) ._nlm",
            valueType: "inner"
        }
    },
    {
        name: "Do you want search engines outside of Facebook to link to your profile",
        url: "https://www.facebook.com/settings?tab=privacy",
        jquery_selector:{
            element:".fbSettingsList:eq(2) .fbSettingsListItem:eq(2) ._nlm",
            valueType: "inner"
        }
    },
    {
        name: "Who can post on your timeline",
        url: "https://www.facebook.com/settings?tab=timeline",
        jquery_selector:{
            element: ".fbSettingsList:eq(0) .fbSettingsListItem:eq(0) ._nlm",
            valueType: "inner"
        }
    },
    {
        name: "Review posts friends tag you in before they appear on your timeline?",
        url: "https://www.facebook.com/settings?tab=timeline",
        jquery_selector:{
            element:".fbSettingsList:eq(0) .fbSettingsListItem:eq(1) ._nlm",
            valueType: "inner"
        }
    }
];

readGoogleSettings =
    [
        {
            name: "Turn off (pause) your searches and browsing activity",
            url: "https://myaccount.google.com/privacy#accounthistory",
            jquery_selector: {
                element:"div[data-aid='search'] div",
                valueType:"attrValue", //could be attrValue (the value of attribute), attr(the presence of attribute), inner(inner text of element), classname
                attrValue:"aria-checked"
            }
        },

        {
            name: "Pause location history",
            url: "https://myaccount.google.com/privacy#accounthistory",

            jquery_selector:{
                element:"div[data-aid='location'] div",
                valueType:"attrValue", //could be attrValue (the value of attribute), attr(the presence of attribute), inner(inner text of element), classname
                attrValue:"aria-checked"
            } //return value 0 or 1
        },

        {
            name: "Pause voice searches and commands",
            url: "https://myaccount.google.com/privacy#accounthistory",
            jquery_selector:{
                element:"div[data-aid='audio'] div",
                valueType:"attrValue", //could be attrValue (the value of attribute), attr(the presence of attribute), inner(inner text of element), classname
                attrValue:"aria-checked"
            } //return value 0 or 1
        },

        {
            name: "Pause your YouTube search history",
            url: "https://myaccount.google.com/privacy#accounthistory",
            jquery_selector:{
                element:"div[data-aid='youtubeSearch'] div",
                valueType:"attrValue", //could be attrValue (the value of attribute), attr(the presence of attribute), inner(inner text of element), classname
                attrValue:"aria-checked"
            } //return value 0 or 1

        },

        {
            name: "Pause your YouTube watch history",
            url: "https://myaccount.google.com/privacy#accounthistory",
            jquery_selector:{
                element:"div[data-aid='youtubeWatch'] div",
                valueType:"attrValue", //could be attrValue (the value of attribute), attr(the presence of attribute), inner(inner text of element), classname
                attrValue:"aria-checked"
            } //return value 0 or 1
        },

        {
            name: "Turn off ads based on your interest",
            url: "https://www.google.com/settings/u/0/ads/authenticated",
            jquery_selector:{
                element:"div.Pu > span.iI > div[aria-checked]",
                valueType:"attrValue", //could be attrValue (the value of attribute), attr(the presence of attribute), inner(inner text of element), classname
                attrValue:"aria-checked"
            }  //return value true or false

        }

    ];

readLinkedInSettings =
    [
        {
            name: "Edit your public profile",
            url: "https://www.linkedin.com/profile/public-profile-settings",
            jquery_selector:{
                element:"input[name='visibilityLevel']",
                valueType:"radio"

            }//return checked or nothing

        },

        {
            //TODO:Check if correct
            name: "Who can see your connections",
            url: "https://www.linkedin.com/psettings/connections-visibility",

            jquery_selector:{
                element:"select[id='allow-connections-browse']",
                valueType:"selected"

            }//return selected or nothing

        },

        {
            name: "How You Rank",
            url: "https://www.linkedin.com/psettings/how-you-rank",
            jquery_selector:{
                element:"div[id='setting-how-you-rank-content']",
                valueType:"checked"

            }//return checked or nothing

        },

        {
            name: "Viewers of this profile also viewed",
            url: "https://www.linkedin.com/psettings/browse-map",
            jquery_selector:{
                element:"div[id='setting-browse-map-content']",
                valueType:"checked"

            }//return checked or nothing

        },

        {
            name: "Sharing profile edits",
            url: "https://www.linkedin.com/psettings/activity-broadcast",
            jquery_selector:{
                element:"div[id='setting-activity-broadcast-content']",
                valueType:"checked"

            }//return checked or nothing

        },

        {
            name: "Profile viewing options",
            url: "https://www.linkedin.com/psettings/profile-visibility",
            jquery_selector:{
                element:"div[id='setting-profile-visibility-content']",
                valueType:"checked"

            }//return checked or nothing

        },

        {
            name: "Notifying connections when you’re in the news",
            url: "https://www.linkedin.com/psettings/news-mention-broadcast",
            jquery_selector:{
                element:"div[id='option-news-mention']",
                valueType:"checked"

            }//return checked or nothing

        },


        {
            name: "Followers",
            url: "https://www.linkedin.com/psettings/allow-follow",
            jquery_selector:{
                element:"div[id='setting-allow-follow-content']",
                valueType:"selected"

            }//return selected or nothing

        },

        {
            //TODO: Must check whether we need to read it or not
            name: "Blocking",
            url: "https://www.linkedin.com/psettings/member-blocking",
            jquery_selector:{
                element:"div[id='setting-member-blocking-content']",
                valueType:"attrValue",
                attrValue:"value"

            }//return blocking list or class="not-blocking"

        },

        {
            //TODO: Must check whether we need to read it or not
            name: "Unfollowed",
            url: "https://www.linkedin.com/psettings/customize-stream",
            jquery_selector:{
                element:"div[id='setting-customize-stream-content']",
                valueType:"attrValue",
                attrValue:"value"

            }//return unfollowed list or class="instructions" You are not currently hiding any content

        },

        {
            name: "Suggesting you as a connection based on your email address",
            url: "https://www.linkedin.com/psettings/visibility/email",
            jquery_selector:{
                element:"div[id='setting-visibility-email-content']",
                valueType:"selected"

            }//return selected or nothing

        },

        {
            name: "Suggesting you as a connection based on your phone number",
            url: "https://www.linkedin.com/psettings/visibility/phone",
            jquery_selector:{
                element:"div[id='setting-visibility-phone-content']",
                valueType:"selected"

            }//return selected or nothing

        },

        {
            name: "Representing your organization",
            url: "https://www.linkedin.com/psettings/meet-the-team",
            jquery_selector:{
                element:"div[id='meet-the-team-instructions']",
                valueType:"checked"

            }//return checked or nothing

        },

        {
            name: "Sharing data with third parties",
            url: "https://www.linkedin.com/psettings/data-sharing",
            jquery_selector:{
                element:"div[id='setting-data-sharing-content']",
                valueType:"checked"

            }, //return checked or nothing

            jquery_selector:{
                element:"div[id='setting-data-sharing-content']",
                valueType:"checked"

            }//return checked or nothing

        },

        {
            name: "Advertising preferences",
            url: "https://www.linkedin.com/psettings/enhanced-advertising",
            jquery_selector:{
                element:"div[id='setting-enhanced-advertising-content']",
                valueType:"checked"

            }//return checked or nothing

        },

        {
            name: "Two-step verification",
            url: "https://www.linkedin.com/psettings/two-step-verification",
            jquery_selector:{
                element:"div[id='setting-two-step-verification-content']",
                valueType:"checked"

            } //return checked or nothing

        }

    ];

readInstagramSettings =
    [
        {
            name: "Similar Account Suggestions",
            url: "https://www.instagram.com/accounts/edit",
            jquery_selector:{
                element:"input[id='pepChainingEnabled'] ",
                valueType:"attrValue",
                attrValue:"value" //

            }

        }

    ];

readTwitterSettings =
    [
        {
            name: "Login verification",
            url: "https://twitter.com/settings/security",
            jquery_selector:{
                element:"div[class='controls login-verification-controls']",
                valueType:"checkbox", //could be attrValue (the value of attribute), attr(the presence of attribute), inner(inner text of element), classname

            }

        },

        {
            name: "Password reset",
            url: "https://twitter.com/settings/security",
            jquery_selector:{
                element:"input[id='user_no_username_only_password_reset']",
                valueType:"checkbox", //could be attrValue (the value of attribute), attr(the presence of attribute), inner(inner text of element), classname

            }

        },

        {
            name: "Log in with code",
            url: "https://twitter.com/settings/security",
            jquery_selector:{
                element:"input[id='one_factor_optout_settings_off']",
                valueType:"checkbox", //could be attrValue (the value of attribute), attr(the presence of attribute), inner(inner text of element), classname
            },

            jquery_selector:{
                element:"input[id='one_factor_optout_settings_on']",
                valueType:"checkbox", //could be attrValue (the value of attribute), attr(the presence of attribute), inner(inner text of element), classname

            }

        },

        {
            name: "Photo tagging",
            url: "https://twitter.com/settings/security",
            jquery_selector:{
                element:"fieldset[id='allow_media_tagging_fieldset']",
                valueType:"checkbox", //could be attrValue (the value of attribute), attr(the presence of attribute), inner(inner text of element), classname

            }

        },

        {
            name: "Tweet privacy",
            url: "https://twitter.com/settings/security",
            jquery_selector:{
                element:"input[id='user_protected']",
                valueType:"checkbox", //could be attrValue (the value of attribute), attr(the presence of attribute), inner(inner text of element), classname

            }

        },

        {
            name: "Tweet location",
            url: "https://twitter.com/settings/security",
            jquery_selector:{
                element:"input[id='user_geo_enabled']",
                valueType:"checkbox", //could be attrValue (the value of attribute), attr(the presence of attribute), inner(inner text of element), classname

            }

        },

        {
            name: "Discoverability",
            url: "https://twitter.com/settings/security",
            jquery_selector:{
                element:"input[id='user_discoverable_by_email']",
                valueType:"checkbox", //could be attrValue (the value of attribute), attr(the presence of attribute), inner(inner text of element), classname

            },

            jquery_selector:{
                element:"input[id='user_mobile_discoverable']",
                valueType:"checkbox", //could be attrValue (the value of attribute), attr(the presence of attribute), inner(inner text of element), classname

            }

        },

        {
            name: "Promoted content",
            url: "https://twitter.com/settings/security",
            jquery_selector:{
                element:"input[id='allow_ads_personalization']",
                valueType:"checkbox", //could be attrValue (the value of attribute), attr(the presence of attribute), inner(inner text of element), classname

            }

        },

        {
            name: "Twitter for teams",
            url: "https://twitter.com/settings/security",
            jquery_selector:{
                element:"input[id='allow_contributor_request_all']",
                valueType:"checkbox", //could be attrValue (the value of attribute), attr(the presence of attribute), inner(inner text of element), classname

            },

            jquery_selector:{
                element:"input[id='allow_contributor_request_following']",
                valueType:"checkbox", //could be attrValue (the value of attribute), attr(the presence of attribute), inner(inner text of element), classname

            },

            jquery_selector:{
                element:"input[id='allow_contributor_request_none']",
                valueType:"checkbox", //could be attrValue (the value of attribute), attr(the presence of attribute), inner(inner text of element), classname

            }

        },

        {
            name: "Direct Messages",
            url: "https://twitter.com/settings/security",
            jquery_selector:{
                element:"input[id='allow_dms_from_anyone']",
                valueType:"checkbox", //could be attrValue (the value of attribute), attr(the presence of attribute), inner(inner text of element), classname

            }

        }

    ];

var currentSetting;
var currentTab;
var currentCallback;

(function () {
    chrome.runtime.onConnect.addListener(function (port) {

        if (port.name == "SNPS") {

            var sequence = Promise.resolve();
            privacySettings = readFacebookSettings.concat(readGoogleSettings).concat(readLinkedInSettings).concat(readInstagramSettings).concat(readTwitterSettings);
					
            privacySettings.forEach(function (setting) {
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
                            persistSetting(currentSetting.name, msg.result);
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

        chrome.tabs.create({url: setting.url,active:false}, function (tab) {
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


function persistSetting (settingName, settingValue){
    chrome.storage.local.get('privacy_settings', function(settings){

        if(Object.keys(settings).length === 0){
            settings = [];
        }
        else{
            settings = settings.privacy_settings;
        }

        var isNew = true;
        for(var i = 0; i<settings.length; i++){

            if(settings[i].name == settingName){
                settings[i].value = settingValue;
                isNew = false;
                break;
            }
        }

        if(isNew == true){
            settings.push({'name': settingName, 'value': settingValue});
        }


        chrome.storage.local.set({'privacy_settings': settings}, function() {
            console.log("salvat");
        });

    })
}
