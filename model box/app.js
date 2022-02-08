const show = document.getElementById('btn');
const showmodel = document.getElementById('model-box');
const close = document.getElementById('closebtn');

show.addEventListener('click', () => {
    showmodel.classList.toggle('active');
});

close.addEventListener('click', () => {
    showmodel.classList.remove('active');
});