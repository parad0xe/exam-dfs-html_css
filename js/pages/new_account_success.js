document.addEventListener('DOMContentLoaded', () => {
    let seconds = 6

    setInterval(() => {
        if(--seconds === 0) window.location.href = "/"
        else document.querySelector(".js-remaining").textContent = seconds.toString()
    }, 1000)
})