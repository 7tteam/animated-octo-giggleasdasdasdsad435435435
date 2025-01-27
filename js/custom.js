$(document).ready(function() {
    "use strict";

    // حذف تعطيل القوائم المنبثقة (Right-click menu)
    // $("body").on("contextmenu", function(e) {
    //     return false;
    // });

    // حذف تعطيل اختصارات لوحة المفاتيح مثل النسخ واللصق والفحص
    $(document).keydown(function(e) {
        // إزالة هذه السطور لتعطيل اختصارات لوحة المفاتيح
        // if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) {
        //     return false;
        // }
        // if(e.which === 123){
        //     return false;
        // }
        // if(e.metaKey){
        //     return false;
        // }
        // if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
        //     return false;
        // }
        // if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
        //     return false;
        // }
        // if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
        //     return false;
        // }
        // if (e.keyCode == 224 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
        //     return false;
        // }
        // if (e.ctrlKey && e.keyCode == 85) {
        //    return false;
        // }
        // if (event.keyCode == 123) {
        //     return false;
        // }
    });

    // تمكين استخدام Google Analytics (لا تغيير هنا)
    (function(i,s,o,g,r,a,m){
        i['GoogleAnalyticsObject']=r;
        i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)
        },i[r].l=1*new Date();
        a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];
        a.async=1;
        a.src=g;
        m.parentNode.insertBefore(a,m)
    })(window,document,'script','../../../../www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-120909275-1', 'auto');
    ga('send', 'pageview');

    // إضافة التمرير السلس لجميع الروابط
    $(".sidebar-widget .nav-link").on('click', function(event) {
        // تأكد من أن هذا.hash يحتوي على قيمة قبل تعديل السلوك الافتراضي
        if (this.hash !== "") {
            // منع سلوك النقر الافتراضي
            event.preventDefault();

            // تخزين الـ hash
            var hash = this.hash;

            // استخدام jQuery's animate() لإضافة التمرير السلس
            // الرقم الاختياري (800) يحدد عدد الملي ثانية التي يستغرقها التمرير إلى المنطقة المحددة
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                // إضافة الـ hash (#) إلى URL عند الانتهاء من التمرير
                window.location.hash = hash;
            });
        } // نهاية الـ if
    });

});
