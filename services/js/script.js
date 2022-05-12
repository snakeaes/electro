menu.onclick = function myFunction() {
    let x = document.getElementById('myTopnav');
    let y = document.querySelector('.mainPage');
    y.style.cssText = 'top: 100%';

    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
