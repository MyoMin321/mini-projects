const icons = document.querySelectorAll('.icon');
// console.log(card);

icons.forEach(icon => {
    icon.addEventListener('click', () => {
        console.log("hello");
        icon.parentNode.classList.toggle('active');
    })
})