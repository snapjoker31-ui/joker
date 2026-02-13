document.addEventListener('DOMContentLoaded', () => {
    const sliderContainers = document.querySelectorAll('.slider-container');

    sliderContainers.forEach(container => {
        const slides = container.querySelectorAll('.slide');
        const indicators = container.querySelectorAll('.indicator');
        const thumbnailsContainer = container.closest('.project-showcase').nextElementSibling;
        const thumbnails = thumbnailsContainer ? thumbnailsContainer.querySelectorAll('.thumbnail') : [];
        const prevBtn = container.querySelector('.prev-btn');
        const nextBtn = container.querySelector('.next-btn');
        const currentSlideText = container.querySelector('.current-slide');
        const totalSlidesText = container.querySelector('.total-slides');

        let currentIndex = 0;
        const totalSlides = slides.length;

        if (totalSlides === 0) return;

        // Initialize total slides count
        if (totalSlidesText) {
            totalSlidesText.textContent = totalSlides;
        }

        function updateSlider(index) {
            // Remove active class from everything
            slides.forEach(slide => slide.classList.remove('active'));
            indicators.forEach(ind => ind.classList.remove('active'));

            if (thumbnails.length > 0) {
                thumbnails.forEach(thumb => thumb.classList.remove('active'));
            }

            // Add active class to current
            if (slides[index]) slides[index].classList.add('active');
            if (indicators[index]) indicators[index].classList.add('active');

            if (thumbnails.length > 0 && thumbnails[index]) {
                thumbnails[index].classList.add('active');
            }

            // Update counter
            if (currentSlideText) {
                currentSlideText.textContent = index + 1;
            }

            currentIndex = index;
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                let nextIndex = (currentIndex + 1) % totalSlides;
                updateSlider(nextIndex);
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                let prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
                updateSlider(prevIndex);
            });
        }

        // Indicators click
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                updateSlider(index);
            });
        });

        // Thumbnails click
        if (thumbnails.length > 0) {
            thumbnails.forEach((thumbnail, index) => {
                thumbnail.addEventListener('click', () => {
                    updateSlider(index);
                });
            });
        }

        // Auto slide
        let autoSlideInterval = setInterval(() => {
            let nextIndex = (currentIndex + 1) % totalSlides;
            updateSlider(nextIndex);
        }, 5000);

        // Pause auto slide on hover
        container.addEventListener('mouseenter', () => {
            clearInterval(autoSlideInterval);
        });

        container.addEventListener('mouseleave', () => {
            autoSlideInterval = setInterval(() => {
                let nextIndex = (currentIndex + 1) % totalSlides;
                updateSlider(nextIndex);
            }, 5000);
        });
    });
});
