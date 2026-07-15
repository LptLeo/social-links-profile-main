const hoursContainer = document.getElementById('hours');
const minutesContainer = document.getElementById('minutes');
const secondsContainer = document.getElementById('seconds');

function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    if (!secondsContainer.textContent) {
        secondsContainer.textContent = seconds;
        minutesContainer.textContent = minutes;
        hoursContainer.textContent = hours;

        secondsContainer.classList.add('new-value');
        minutesContainer.classList.add('new-value');
        hoursContainer.classList.add('new-value');

        return;
    }

    updateAndAnimate(secondsContainer, seconds);
    updateAndAnimate(minutesContainer, minutes);
    updateAndAnimate(hoursContainer, hours);
}

function updateAndAnimate(container, value) {
    if (container.textContent !== value) {

        container.classList.remove('new-value');
        container.classList.add('last-value');

        setTimeout(() => {
            container.textContent = value;
            container.classList.remove('last-value');
            void container.offsetWidth;
            container.classList.add('new-value');
        }, 200);
    }
}

setInterval(updateTime, 1000);