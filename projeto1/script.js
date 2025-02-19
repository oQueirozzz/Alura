const InputCheck = document.getElementById('modo-noturno')

if (InputCheck) {
    const elemento = document.querySelector('body')

    if (elemento) {
        InputCheck.addEventListener('click', () => {
            const modo = InputCheck.checked ? 'dark' : 'light'
            elemento.setAttribute("data-bs-theme", modo)
        })
    }
}

