var readFacebookPrivacySettings = function () {

    var port = chrome.runtime.connect({name: "SNPS"});

    port.onMessage.addListener(function (msg) {
        if (msg.result) {
            console.log(msg.result);
        }
    });

}


document.addEventListener("DOMContentLoaded", function () {

    var button = document.getElementById("readPSButton");
    button.addEventListener("click", readFacebookPrivacySettings);

    var settingsCtn = document.getElementById("settings");

    chrome.storage.local.get('privacy_settings', function (settings) {

        if (Object.keys(settings).length > 0) {
            settings = settings.privacy_settings;
            if (settings.length > 0) {

                document.getElementById("nosettings").style.display = "none";
                settings.forEach(function (setting) {
                    var trElement = document.createElement("tr");
                    var tdNameElement = document.createElement("td");
                    var tdValueElement = document.createElement("td");
                    tdNameElement.innerHTML = setting.name;
                    tdValueElement.innerHTML = setting.value;

                    trElement.appendChild(tdNameElement);
                    trElement.appendChild(tdValueElement);

                    document.getElementById("read_settings").appendChild(trElement);
                })
            }

        } else {
            document.getElementById("settings").style.display = "none";
        }




    });

});