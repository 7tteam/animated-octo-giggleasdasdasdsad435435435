document.addEventListener("DOMContentLoaded", function () {
    let adBlockEnabled = false;
    let testAd = document.createElement("div");
    testAd.innerHTML = "&nbsp;";
    testAd.className = "adsbox";
    document.body.appendChild(testAd);
    
    window.setTimeout(function () {
        if (testAd.offsetHeight === 0) {
            adBlockEnabled = true;
        }
        testAd.remove();

        if (adBlockEnabled) {
            alert("يرجى تعطيل AdBlock لدعم موقعنا!");
        }
    }, 100);
});
