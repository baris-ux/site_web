document.addEventListener("DOMContentLoaded", () => {
    CurrentDay();
})

function CurrentDay(){
    let day = new Date().getDay();
    if (day === 0) day = 7;

    const element = document.getElementById(String(day));
    if (element) {
    element.classList.add("couleur");  // coloration du jour courant
  }
}