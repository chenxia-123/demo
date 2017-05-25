(function(doc, win) {
    var docEl,
        resizeEvt,
        recalc;
        docEl = doc.documentElement;
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
        recalc = function() {
            // var clientWidth = docEl.clientWidth;
            var clientWidth = docEl.getBoundingClientRect().width;
            if (!clientWidth) return;
            // docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
            docEl.style.fontSize = (clientWidth / 10) + 'px';
            // console.log(docEl.style.fontSize);
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
