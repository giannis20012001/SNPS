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
]


