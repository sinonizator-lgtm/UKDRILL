document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.player-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Как только карточка заходит в поле зрения
            if (entry.isIntersecting) {
                // Мгновенно убираем класс скрытия, давая волю резкой CSS-анимации
                entry.target.classList.remove('scroll-hide');
                observer.unobserve(entry.target); // Убираем слежку, чтобы не анимировать повторно
            }
        });
    }, {
        // Срабатывает, когда 15% карточки показалось снизу экрана
        threshold: 0.15 
    });

    cards.forEach(card => observer.observe(card));
});