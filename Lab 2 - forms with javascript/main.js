window.onload = start;
function start(){
	document.querySelector("#addToDo").addEventListener("click", addToDo, false);
	document.querySelector("#clearList").addEventListener("click", clearList, false);
}

function addToDo(){
	var item = document.querySelector("#toDo").value;
	console.log(item);

	var li = document.createElement("li");

	var text = document.createTextNode(item);
	li.appendChild(text);

	document.querySelector("#todoList").appendChild(li);
}

function clearList(){
	var itemList = document.querySelector("#todoList");
	while(itemList.hasChildNodes()){
		itemList.removeChild(itemList.firstChild);
	}
}
