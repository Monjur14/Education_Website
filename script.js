window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('change', window.scrollY > 0)
});
const faq = document.querySelectorAll('.faq');
faq.forEach(hi => {
    hi.addEventListener('click',() => {
        hi.classList.toggle('open');

        const icon = hi.querySelector('i')

        if(icon.className === "fa-regular fa-plus"){
            icon.className = "fa-solid fa-minus"
        }
        else{
            icon.className = "fa-regular fa-plus"
        }
    })
})
const openbtn = document.querySelector('.menu-open-btn');
const menu = document.querySelector('.ulli');
const closebtn = document.querySelector('.menu-close-btn');
openbtn.addEventListener('click', () => {
    menu.style.display = "block";
    openbtn.style.display = "none";
    closebtn.style.display = "block"
})
closebtn.addEventListener('click', () => {
    menu.style.display = "none";
    openbtn.style.display = "block";
    closebtn.style.display = "none"
})