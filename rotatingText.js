document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector(".rotating-text");
    const words = wrapper.querySelectorAll("span");
    let currentIndex = 0;

    setInterval(() => {
        words[currentIndex].classList.remove("current");
        currentIndex = (currentIndex + 1) % words.length; 
        words[currentIndex].classList.add("current");
    }, 1500);
});