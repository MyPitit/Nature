function updateItemStatus() {
  var cbId = this.id.replace("cb_", "");
  var itemText = document.getElementById("item_" + cbId);
  
  if (this.checked) {
    itemText.className = "checked";
    } else {
      itemText.className = "";
      
    }
}


function addNewItem(list, itemText) { 
  totalItems++;
  
  var listItem = document.createElement("li");
  
  var checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.id = "cb_" + totalItems;  
  checkBox.onclick = updateItemStatus;
  
  var span = document.createElement("span");
  span.id = "item_" + totalItems;
  span.innerText = itemText;
  
  listItem.appendChild(checkBox);
  listItem.appendChild(span);
  
  list.appendChild(listItem); 
}

var totalItems = 0;


var inItemText = document.getElementById("inItemText");
inItemText.focus();
inItemText.onkeyup = function(event) {
 
 //Event.which (13) -> ENTER
 //Only proceed if key press is ENTER key
if (event.which == 13) {
 var itemText = inItemText.value;

 if (itemText == "" || itemText == " ") {
    return false;
  }
  
   addNewItem(document.getElementById("todoList"), itemText);
   
   inItemText.focus();
   inItemText.select();
   }
};