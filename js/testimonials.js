function duplicateTestimonials() {
    if (window.innerWidth < 1440) {
        return;
    }
    const testimonialsContentTop = document.getElementById('testimonialsScrollTop');
    const testimonialsItemsTop = testimonialsContentTop.innerHTML;
    if (!testimonialsContentTop.classList.contains('duplicated')) {
        testimonialsContentTop.innerHTML += testimonialsItemsTop;
        testimonialsContentTop.classList.add('duplicated');
    }

    const testimonialsContentBottom = document.getElementById('testimonialsScrollBottom');
    const testimonialsItemsBottom = testimonialsContentBottom.innerHTML;
    if (!testimonialsContentBottom.classList.contains('duplicated')) {
        testimonialsContentBottom.innerHTML += testimonialsItemsBottom;
        testimonialsContentBottom.classList.add('duplicated');
    }
}

window.addEventListener('resize', duplicateTestimonials);
window.addEventListener('load', duplicateTestimonials);
