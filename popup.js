var readFacebookPrivacySettings = function(){

    var port = chrome.runtime.connect({name: "SNPS"});

    port.onMessage.addListener(function(msg) {
        if(msg.result){
            console.log(msg.result);
        }
    });

}


document.addEventListener("DOMContentLoaded", function() {

    var button = document.getElementById("readPSButton");
    button.addEventListener("click",readFacebookPrivacySettings);

});