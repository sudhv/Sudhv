var popupoverlay=document.querySelector(".popupoverlay")
var popupbox=document.querySelector(".popupbox")
var popupbtn=document.getElementById("add-btn-popup")

popupbtn.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

var cancelbtn=document.getElementById("can")
cancelbtn.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})


var container=document.querySelector(".container")
var addbook=document.getElementById("addbtn")
var bookinput=document.getElementById("book-title-input")
var bookauth=document.getElementById("book-auth")
var bookdes=document.getElementById("inputarea")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","bookcon")
    div.innerHTML=`📌<h2>${bookinput.value}</h2>
    <h5>${bookauth.value}</h5>
    <p>${bookdes.value}</p>
    <button onclick="deletebook(event)">❌</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

function deletebook(event){
    event.target.parentElement.remove()
}