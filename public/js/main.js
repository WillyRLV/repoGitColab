const btn = document.getElementById("button_click")
const conunt = document.getElementById("contador")

let contador = 0
btn.onclick = () =>{
    contador ++;
    conunt.textContent = contador
}

