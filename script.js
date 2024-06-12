const button = document.querySelector('.button-75');
const header = document.querySelector('.header');
function showElements() {
    const elements = document.querySelectorAll('.card .element');
    button.classList.add('remove');
    header.classList.add('remove');

    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('show');
        }, index * 800);
    });
}

button.addEventListener('click', showElements);