// Ждем, пока загрузится вся страница
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.player-card');

    // Настраиваем "наблюдатель" за экраном
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Если карточка игрока показалась в поле зрения хотя бы на 10%
            if (entry.isIntersecting) {
                // Убираем скрывающий класс, запуская CSS анимацию волны
                entry.target.classList.remove('hidden-card');
                // Перестаем следить за этой карточкой, так как она уже появилась
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Срабатывает, как только край карточки зашел на экран
    });

    // Запускаем слежку за всеми карточками
    cards.forEach(card => observer.observe(card));
});