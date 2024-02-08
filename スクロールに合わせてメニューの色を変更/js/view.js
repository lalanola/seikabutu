let lastScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
let lastSection = Math.floor(lastScrollPosition / 1000) + 1;
let allowScroll = true;
// window.scrollTo(0, 0);
const maxSection = 3;
function disableScrollForHalfSecond() {
    lastScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    allowScroll = false; // スクロールを禁止

    setTimeout(() => {
        allowScroll = true; // 0.5秒後にスクロールを許可
    }, 500);
}
document.addEventListener('scroll', function () {
    if (allowScroll) {
        let currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

        var sectionHeight = 1000;
        if (currentScrollPosition > lastScrollPosition) {
            let currentSection;

            if (currentScrollPosition >= 0 && currentScrollPosition <= 699) {
                currentSection = 1;
            }
            else {
                currentSection = Math.floor((currentScrollPosition - 700) / 1000) + 2
            }
            if (lastSection != currentSection) {
                let nextSectionId = "section" + currentSection;
                let nextSection = document.getElementById(nextSectionId);

                if (nextSection) {
                    nextSection.scrollIntoView({ behavior: 'instant' });
                    // disableScrollForHalfSecond();
                }
            }
            lastSection = currentSection;
            console.log(currentSection);
        }
        else if (currentScrollPosition < lastScrollPosition) {
            if (currentScrollPosition >= 0 && currentScrollPosition <= 699) {
                currentSection = 1;
            }
            else if (currentScrollPosition >= 1000 * (maxSection - 1) - 300 && currentScrollPosition <= 1000 * maxSection) {
                currentSection = maxSection;
            }
            else {
                currentSection = Math.floor((currentScrollPosition - 700) / 1000) + 2;
            }
            if (lastSection != currentSection) {
                let nextSectionId = "section" + currentSection;
                let nextSection = document.getElementById(nextSectionId);

                if (nextSection) {
                    nextSection.scrollIntoView({ behavior: 'instant' });
                    // disableScrollForHalfSecond();
                }
            }
            lastSection = currentSection;
            console.log(currentSection);
        }
        lastScrollPosition = currentScrollPosition;
    }
    else{
        window.scrollTo(0, lastScrollPosition);
    }

});