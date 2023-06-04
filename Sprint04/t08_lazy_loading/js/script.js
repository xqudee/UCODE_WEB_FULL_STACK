const images = document.querySelectorAll('img[data-src]');
const messageDiv = document.getElementById('message');

let loadedCount = 0;
option = {
    threshold: 0.0
}

function lazyLoadImage(image) {
    const imageSrc = image.getAttribute('data-src');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const image = entry.target;
                image.src = image.getAttribute('data-src');
                observer.unobserve(image);

                loadedCount++;
                message.innerHTML = loadedCount + ' images loaded from 20';

                if (loadedCount == 20) {
                    message.style.background = 'green';
                    setTimeout(() => {
                        message.style.display = 'none';
                    }, 3000);
                }
            }
        })
    }, option)

    observer.observe(image);
}

images.forEach((image) => {
    lazyLoadImage(image);
});

