console.log('Welcome');

const register = () => {
    setTimeout(() => {
        console.log('Please Register :)');
    }, 1000)
}

register()

const login = () => {
    setTimeout(() => {
        console.log('Please Login :)');
    }, 2000)
}

login()

const welcome = () => {
    setTimeout(() => {
        console.log('Thank you :)');
        
    }, 3000)
}

welcome()

setTimeout(() => {
    console.log('Akhil')
})

const akki = () => {
    console.log('Akhil Matta')
}

akki()

const changer = setTimeout(() => {
    const elmt = document.getElementById('akki')
    elmt.style.color= 'red'
    elmt.style.fontSize= '2rem'
    elmt.style.transition= '1s'
}, 3000)

function stopAction() {
    clearTimeout(changer)
}