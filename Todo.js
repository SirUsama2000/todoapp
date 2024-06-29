let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function Add(){
   if(inputs.value == ""){
    alert("Please Enter Task")
    return
   }else{
    let newEle = document.createElement("ul");
    var listTodo = document.getElementById('listTodo')

    newEle.id = "listTodo"
    newEle.innerHTML=`<li >${inputs.value} <button onclick="edititem(this)">Edit</button> <button onclick="deleteitem(this)">Delete</button></li>`;
    text.appendChild(newEle);
    inputs.value="";
   }
}
function deleteitem(ele){
    ele.parentNode.parentNode.remove()

}
 function edititem(ele){
    // console.log("ele edit",ele.previousSibling.nodeValue)
    // ele.previousSibling.nodeValue = "HELLO WORLD";
    // var ediVal
    var editVal = prompt("Enter value",ele.previousSibling.nodeValue) 
    // console.log(editVal)
    ele.previousSibling.nodeValue = editVal;
 }
 function deleteAll(){
    var listTodo = document.getElementById('listTodo')
    // listTodo.innerHTML = ""
    console.log(listTodo)
 }