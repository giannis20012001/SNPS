var readFacebookPrivacySettings = function(){

    var port = chrome.runtime.connect({name: "SNPS"});
    port.postMessage({insertScript: true});

    port.onMessage.addListener(function(msg) {
        console.log(msg);
    });

}


document.addEventListener("DOMContentLoaded", function() {

    var button = document.getElementById("readPSButton");
    button.addEventListener("click",readFacebookPrivacySettings);

});