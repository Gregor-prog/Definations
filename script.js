//geting nav
let html = document.querySelector("#html")
let css = document.querySelector("#css")
let javascript = document.querySelector("#javascript")
let node = document.querySelector("#node")
let react = document.querySelector("#react")


//getting div element
let htmld = document.querySelector("#htmldiv")
let cssd = document.querySelector("#cssdiv")
let javascriptd = document.querySelector("#javascriptdiv")
let noded = document.querySelector("#nodediv")
let reactd = document.querySelector("#reactdiv")
htmld.classList.add("visible")
// hidden and visible function
function htmlf(){
    htmld.classList.add("visible")
    html.classList.add("selected")
    cssd.classList.remove("visible")
    css.classList.remove("selected")
    javascriptd.classList.remove("visible")
    javascript.classList.remove("selected")
    noded.classList.remove("visible")
    node.classList.remove("selected")
    reactd.classList.remove("visible")
    react.classList.remove("selected")   
}
function cssf(){
    htmld.classList.remove("visible")
    html.classList.remove("selected")
    cssd.classList.add("visible")
    css.classList.add("selected")
    javascriptd.classList.remove("visible")
    javascript.classList.remove("selected")
    noded.classList.remove("visible")
    node.classList.remove("selected")
    reactd.classList.remove("visible")
    react.classList.remove("selected")   
    console.log(html)
}
function javascriptf(){
    htmld.classList.remove("visible")
    html.classList.remove("selected")
    cssd.classList.remove("visible")
    css.classList.remove("selected")
    javascriptd.classList.add("visible")
    javascript.classList.add("selected")
    noded.classList.remove("visible")
    node.classList.remove("selected")
    reactd.classList.remove("visible")
    react.classList.remove("selected")   
}
function nodef(){
    htmld.classList.remove("visible")
    html.classList.remove("selected")
    cssd.classList.remove("visible")
    css.classList.remove("selected")
    javascriptd.classList.remove("visible")
    javascript.classList.remove("selected")
    noded.classList.add("visible")
    node.classList.add("selected")
    reactd.classList.remove("visible")
    react.classList.remove("selected")   
}
function reactf(){
    htmld.classList.remove("visible")
    html.classList.remove("selected")
    cssd.classList.remove("visible")
    css.classList.remove("selected")
    javascriptd.classList.remove("visible")
    javascript.classList.remove("selected")
    noded.classList.remove("visible")
    node.classList.remove("selected")
    reactd.classList.add("visible")
    react.classList.add("selected")   
}

// adding event listener

html.addEventListener("click", htmlf)
css.addEventListener("click", cssf)
javascript.addEventListener("click", javascriptf)
node.addEventListener("click", nodef)
react.addEventListener("click", reactf)
