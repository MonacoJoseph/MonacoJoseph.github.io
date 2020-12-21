
changeDisp = (event) => {
    const first = event.getAttribute('parent');
    const next  = event.getAttribute('next');

    const mainElem = document.getElementById(first);
    const secondElem = document.getElementById(next);

    mainElem.style.display = 'none';
    secondElem.style.display = 'inline';
}

yes = (event) => {
    if (event.innerText === 'Okay') {
        changeDisp(event);
        return;
    }
    event.innerText = 'Okay';
}
