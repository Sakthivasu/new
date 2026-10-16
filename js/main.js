document.addEventListener('DOMContentLoaded', () => {

    /* 1. PRELOADER ANIMATION (0% TO 100%) */
    let currentProgress = 0;
    const loadingFill = document.getElementById('loadingFill');
    const loadingText = document.getElementById('loadingText');
    const preloader = document.getElementById('preloader');

    if (preloader && loadingFill && loadingText) {
        const loadingInterval = setInterval(() => {
            currentProgress += Math.floor(Math.random() * 15) + 5;

            if (currentProgress >= 100) {
                currentProgress = 100;
                clearInterval(loadingInterval);

                setTimeout(() => {
                    preloader.style.opacity = '0';
                    setTimeout(() => {
                        preloader.style.display = 'none';
                    }, 400);
                }, 200);
            }

            loadingFill.style.width = `${currentProgress}%`;
            loadingText.innerText = `${currentProgress}%`;
        }, 80);
    }

    /* 2. FAQ ACCORDION INTERACTION */
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('open');
                }
            });
            item.classList.toggle('open');
        });
    });

    /* 3. MOBILE HAMBURGER MENU TOGGLE */
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

});