const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        const body = text.querySelector('.accordion');
        body.classlist.toggle('active')
    })
})