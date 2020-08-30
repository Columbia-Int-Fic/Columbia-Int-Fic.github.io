//Scripting for splash screen to disappear upon clicking

const splash = document.querySelector('.splash');
splash.onclick = function() {
    setTimeout(()=>{
        splash.classList.add('display-none');
    }, 0);
}