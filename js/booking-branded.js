const osInstances = OverlayScrollbars(document.querySelectorAll('body'), {});

document.addEventListener('DOMContentLoaded', function () {
    let lastScrollTop = 0;
    const aside = document.querySelectorAll('.booking-branded__content');

    const checkPosition = () => {
        if (!aside) return;
        aside.forEach(image => {
            const rect = image.getBoundingClientRect();
            let attr = image.getAttribute('data-value');
            let el = document.querySelector(`[data-id="${attr}"]`);
            if (rect.top <= 400) {
                el.classList.add('show');
            } else if (rect.top >= window.innerHeight / 2 + 120) {
                el.classList.remove('show');
            }
        });
    };

    const animationHeader = () => {
        const header = document.querySelector('header');
        let buttonLogin = document.querySelector('.header-action-login');
        let buttonSign = document.querySelector('.header-action-sign');
        let scrollPosition = 0;
        if (Array.isArray(osInstances)) {
            osInstances.forEach(instance => {
                scrollPosition = instance.scroll().position.y;
            });
        } else {
            scrollPosition = osInstances.scroll().position.y;
        }

        if (scrollPosition > lastScrollTop) {
            header.classList.add('header-scroll-down');
            header.classList.remove('header-scroll-up');
        } else {
            header.classList.add('header-scroll-up');
            header.classList.remove('header-scroll-down');
        }

        lastScrollTop = scrollPosition <= 0 ? 0 : scrollPosition;
    };

    if (Array.isArray(osInstances)) {
        osInstances.forEach(instance => {
            instance.options({
                callbacks: {
                    onScroll: () => {
                        checkPosition();
                        animationHeader();
                    },
                },
            });
        });
    } else {
        osInstances.options({
            callbacks: {
                onScroll: () => {
                    checkPosition();
                    animationHeader();
                },
            },
        });
    }
});

function setElementHeight() {
    const element = document.getElementById('booking-benefits__img');
    if (!element) return;
    const aspectRatio = window.innerWidth < 768 ? 0.67 : 1.55;

    const width = element.offsetWidth;
    const height = width / aspectRatio;
    element.style.height = `${height}px`;

    const images = document.querySelectorAll('.booking-branded__image img');
    images.forEach(image => {
        if (window.innerWidth < 1024) {
            let aspectRatioImg = 0.75;
            let widthImg = image.offsetWidth;
            let heightImg = widthImg / aspectRatioImg;
            image.style.height = `${heightImg}px`;
        } else {
            image.style.height = 'calc(100vh - 48px)';
        }
    });
}

window.addEventListener('resize', setElementHeight);
window.addEventListener('load', setElementHeight);
window.addEventListener('orientationchange', setElementHeight);
