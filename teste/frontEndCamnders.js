function abrir_options(){
    const optionsMenu = document.querySelector('.options_menu');
    if(optionsMenu.style.display==='' || optionsMenu.style.display==='none' ){
        optionsMenu.style.display = 'inline'
    }
    else{
        optionsMenu.style.display = 'none'
    }
}