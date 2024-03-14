var inputData = document.getElementById("inputData")
var listAdd = document.getElementById("listAdd")
var arr =[]


if(localStorage.getItem("storData") != null){
    arr= JSON.parse(localStorage.getItem("storData"))
    showData()
}

document.addEventListener("keypress" , function(e){
if(e.code == 'Enter'){
    var data = {
        name:inputData.value
    }
arr.push(data)
showData()
localStorage.setItem("storData", JSON.stringify(arr))

}

})
function showData(){
    var paragraph = document.createElement("p")
    paragraph.innerHTML = inputData.value
    listAdd.appendChild(paragraph)
    inputData.value=""
    paragraph.addEventListener("click" , function(){
    paragraph.style.textDecoration="line-through"
    
})
    paragraph.addEventListener("contextmenu" , function(){
        listAdd.removeChild(paragraph)
    })
}



