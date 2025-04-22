let elements = document.querySelectorAll('.common-class');

elements.forEach(element => {
    if (element.innerText.includes('here')) { 
        element.style.backgroundColor = 'blue';
        element.style.color = 'white';
    } else {
        element.style.backgroundColor = 'black';
        element.style.color = 'white';
    }

    element.addEventListener('click', () => {
        element.style.backgroundColor = 'green';
        element.style.color = 'white';
    });
});

