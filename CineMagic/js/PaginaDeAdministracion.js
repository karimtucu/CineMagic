// ? Pagina de aministracion
const nameInput = document.getElementById("name-input");
const categoryInput = document.getElementById("category-input"); // Nuevo campo "categoría"
const descriptionInput = document.getElementById("description-input"); // Nuevo campo "descripción"
const addBtn = document.getElementById("add-btn");
const tableBody = document.getElementById("table-body");
const updateNameInput = document.getElementById("update-name-input");
const updateCategoryInput = document.getElementById("update-category-input"); // Nuevo campo "categoría"
const updateDescriptionInput = document.getElementById("update-description-input"); // Nuevo campo "descripción"
const updateBtn = document.getElementById("update-btn");
const cancelBtn = document.getElementById("cancel-btn");
let users = JSON.parse(localStorage.getItem("users")) || [];
let currentUserId = null;
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Functions
function renderTable() {
  tableBody.innerHTML = "";
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const tr = document.createElement("tr");
    const idTd = document.createElement("td");
    const nameTd = document.createElement("td");
    const categoryTd = document.createElement("td"); // Nuevo campo "categoría"
    const descriptionTd = document.createElement("td"); // Nuevo campo "descripción"
    const actionsTd = document.createElement("td");
    const editBtn = document.createElement("button");
    editBtn.className = "edit-btn";
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    idTd.innerText = user.id;
    nameTd.innerText = user.name;
    categoryTd.innerText = user.category; // Nuevo campo "categoría"
    descriptionTd.innerText = user.description; // Nuevo campo "descripción"
    editBtn.innerText = "Edit";
    deleteBtn.innerText = "Delete";
    editBtn.addEventListener("click", () => {
      showUpdateForm(user.id);
    });
    deleteBtn.addEventListener("click", () => {
      deleteUser(user.id);
    });
    actionsTd.appendChild(editBtn);
    actionsTd.appendChild(deleteBtn);
    tr.appendChild(idTd);
    tr.appendChild(nameTd);
    tr.appendChild(categoryTd); // Nuevo campo "categoría"
    tr.appendChild(descriptionTd); // Nuevo campo "descripción"
    tr.appendChild(actionsTd);
    tableBody.appendChild(tr);
  }
}

function addUser() {
  const name = nameInput.value.trim();
  const category = categoryInput.value.trim(); // Nuevo campo "categoría"
  const description = descriptionInput.value.trim(); // Nuevo campo "descripción"
  if (name && category && description) {
    var id = 1;
    var val = users.map(function(x) { return x.id; }).indexOf(id);
    while (val !== -1) {
      id++;
      val = users.map(function(x) { return x.id; }).indexOf(id);
    }
    const user = {
      id: id,
      name: name,
      category: category, // Nuevo campo "categoría"
      description: description, // Nuevo campo "descripción"
    };
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    nameInput.value = "";
    categoryInput.value = ""; // Nuevo campo "categoría"
    descriptionInput.value = ""; // Nuevo campo "descripción"
    renderTable();
  }
  else if(!name || !category || !description)
  {swal({
    title: "¡Error! Campos incompletos.",
    text: "Por favor, verifica y completa los campos obligatorios.",
    icon: "error",
  });
  }
}

function updateUser() {
    const name = updateNameInput.value.trim();
    const category = updateCategoryInput.value.trim(); // Nuevo campo "categoría"
    const description = updateDescriptionInput.value.trim(); // Nuevo campo "descripción"
    if (name && category && description) {
      const index = users.findIndex((user) => user.id === currentUserId);
      if (index !== -1) {
        users[index].name = name;
        users[index].category = category; // Nuevo campo "categoría"
        users[index].description = description; // Nuevo campo "descripción"
        localStorage.setItem("users", JSON.stringify(users));
        hideUpdateForm();
        renderTable();
      }
    }
  }
  
  function showUpdateForm(userId) {
    const user = users.find((user) => user.id === userId);
    if (user) {
      updateNameInput.value = user.name;
      updateCategoryInput.value = user.category; // Nuevo campo "categoría"
      updateDescriptionInput.value = user.description; // Nuevo campo "descripción"
      currentUserId = user.id;
      updateBtn.addEventListener("click", updateUser);
      cancelBtn.addEventListener("click", hideUpdateForm);
      updateBtn.style.display = "inline-block";
      cancelBtn.style.display = "inline-block";
      updateNameInput.style.display = "inline-block";
      updateCategoryInput.style.display = "inline-block"; // Nuevo campo "categoría"
      updateDescriptionInput.style.display = "inline-block"; // Nuevo campo "descripción"
      document.getElementById("update-container").style.display = "block";
    }
  }
  
  function hideUpdateForm() {
    updateNameInput.value = "";
    updateCategoryInput.value = ""; // Nuevo campo "categoría"
    updateDescriptionInput.value = ""; // Nuevo campo "descripción"
    currentUserId = null;
    updateBtn.removeEventListener("click", updateUser);
    cancelBtn.removeEventListener("click", hideUpdateForm);
    updateBtn.style.display = "none";
    cancelBtn.style.display = "none";
    updateNameInput.style.display = "none";
    updateCategoryInput.style.display = "none"; // Nuevo campo "categoría"
    updateDescriptionInput.style.display = "none"; // Nuevo campo "descripción"
    document.getElementById("update-container").style.display = "none";
  }
  
  function deleteUser(userId) {
    users = users.filter((user) => user.id !== userId);
    localStorage.setItem("users", JSON.stringify(users));
    if (users.length == 0) {
      hideUpdateForm();
    }
    renderTable();
  }
  
  // Event listeners
  addBtn.addEventListener("click", addUser);
  
  // Render initial table
  renderTable();
  
