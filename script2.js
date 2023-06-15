const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)
const initialColors = {
    corFundo: getStyle(html, "--cor-fundo"),
    corTexto: getStyle(html, "--cor-texto"),
    corTitulo: getStyle(html, "--cor-titulo"),
}
const darkMode ={
    corFundo: "#f6f6f6",
    corTexto: "#222831",
    corTitulo: "#2A2F4F",
}
const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]) 
    )
}


checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})