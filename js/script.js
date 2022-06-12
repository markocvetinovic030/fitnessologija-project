let myNav = document.querySelector("header");
let firsta = document.querySelector("#firsta");
let blackhome = document.querySelector("#blackhome");
let whitehome = document.querySelector("#whitehome");
let logo = document.querySelector("#logo")


window.onscroll = function () {
    if (document.body.scrollTop >= 1 || document.documentElement.scrollTop >= 1) {
        myNav.style.backgroundColor = '#F2F2F2';
        myNav.style.boxShadow = 'rgba(0, 0, 0, 0.35) 0px 5px 15px';
        firsta.style.color = 'black';
        seconda.style.color = 'black';
        thirda.style.color = 'black';
        fourtha.style.color = 'black';
        myNav.style.transition = '0.5s all';
        blackhome.style.display = 'block';
        whitehome.style.display = 'none';
        logo.style.backgroundColor = '#00BFFF';
        logo.style.filter = 'none';
    } else {
        myNav.style.backgroundColor = 'transparent';   
        myNav.style.boxShadow = 'none';
        firsta.style.color = 'white';
        seconda.style.color = 'white';
        thirda.style.color = 'white';
        fourtha.style.color = 'white';
        myNav.style.transition = '0.5s all';
        blackhome.style.display = 'none';
        whitehome.style.display = 'block';
        logo.style.background = 'transparent';
        logo.style.filter = 'drop-shadow(2px 2px 2px black)';
    }
};






