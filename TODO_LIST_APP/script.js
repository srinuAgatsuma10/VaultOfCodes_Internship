const $inputElement = document.getElementById("input");
const $tasks = document.getElementById("tasks");
let $warning = document.getElementById("warning");

function add(event) {
  event.preventDefault();
  let $input = $inputElement.value;
  if (!$input) {
    $warning.innerText = "Please enter the Task";
  } else {
    $warning.innerText = "";
    const newItem = document.createElement("li");
    const selectButton = document.createElement("input");
    const deleteButton = document.createElement("span"); 
    deleteButton.classList.add("delete"); 
    deleteButton.innerHTML = "&#x2716;";
    deleteButton.addEventListener("click", deleteTask);
    newItem.textContent = $input;
    newItem.appendChild(selectButton);
    newItem.prepend(deleteButton); 
    newItem.appendChild(selectButton);
    $tasks.appendChild(newItem);
    selectButton.type = "checkbox"; 
    selectButton.style.borderColor = "green";
    selectButton.onclick = updateCheckboxes; 
    $inputElement.value = "";
    storeData();
  }
}

function deleteTask(event) {
  const taskItem = event.target.parentElement;
  $tasks.removeChild(taskItem);
  storeData();
}

function deleteMultiple() {
  const checkedItems = document.querySelectorAll('input[type="checkbox"]:checked');
  checkedItems.forEach(item => {
    const taskItem = item.parentElement;
    $tasks.removeChild(taskItem);
  });
  storeData();
}

function storeData() {
  localStorage.setItem("tasks", $tasks.innerHTML);
}

function getItem() {
  $tasks.innerHTML = localStorage.getItem("tasks");
  const deleteButtons = document.querySelectorAll("#tasks span.delete");
  deleteButtons.forEach((button) => (button.onclick = deleteTask));
  const checkboxes = document.querySelectorAll("#tasks input[type=checkbox]");
  checkboxes.forEach((checkbox) => (checkbox.onclick = updateCheckboxes));
}
getItem();

function updateCheckboxes(event) {
  event.stopPropagation(); 
}

document.getElementById("add").addEventListener("click", add);

document.getElementById("input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        add(event);
    }
});
