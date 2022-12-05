window.smoothScroll = function (target) {
    let scrollContainer = target;
    do { //Otsib sihtkoha containeri
        scrollContainer = scrollContainer.parentNode;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    let targetY = 0;
    do { //Leiab sihtkoha ülemise ääre
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function (c, a, b, i) {// Kerimise funktsioon
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function () { scroll(c, a, b, i); }, 7);
    }
    // Kerimise alustamine
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

//https://stackoverflow.com/questions/18071046/smooth-scroll-to-specific-div-on-click