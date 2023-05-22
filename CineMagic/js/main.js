const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.pelicula');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

// ? ----- ----- Event Listener para la flecha derecha. ----- -----
flechaDerecha.addEventListener('click', () => {
	fila.scrollLeft += fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.nextSibling){
		indicadorActivo.nextSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda.addEventListener('click', () => {
	fila.scrollLeft -= fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.previousSibling){
		indicadorActivo.previousSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Paginacion ----- -----
const numeroPaginas = Math.ceil(peliculas.length / 5);
for(let i = 0; i < numeroPaginas; i++){
	const indicador = document.createElement('button');

	if(i === 0){
		indicador.classList.add('activo');
	}

	document.querySelector('.indicadores').appendChild(indicador);
	indicador.addEventListener('click', (e) => {
		fila.scrollLeft = i * fila.offsetWidth;

		document.querySelector('.indicadores .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}
// ? ----- ----- Carrusel 2 ----- -----
const fila2 = document.querySelector('.contenedor-carousel2');
const peliculas2 = document.querySelectorAll('.pelicula2');

const flechaIzquierda2 = document.getElementById('flecha-izquierda2');
const flechaDerecha2 = document.getElementById('flecha-derecha2');

// ? ----- ----- Event Listener para la flecha derecha. ----- -----
flechaDerecha2.addEventListener('click', () => {
	fila2.scrollLeft += fila2.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores2 .activo');
	if(indicadorActivo.nextSibling){
		indicadorActivo.nextSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda2.addEventListener('click', () => {
	fila2.scrollLeft -= fila2.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores2 .activo');
	if(indicadorActivo.previousSibling){
		indicadorActivo.previousSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Paginacion ----- -----
const numeroPaginas2 = Math.ceil(peliculas2.length / 5);
for(let i = 0; i < numeroPaginas2; i++){
	const indicador = document.createElement('button');

	if(i === 0){
		indicador.classList.add('activo');
	}

	document.querySelector('.indicadores2').appendChild(indicador);
	indicador.addEventListener('click', (e) => {
		fila2.scrollLeft = i * fila2.offsetWidth;

		document.querySelector('.indicadores2 .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}
// ? ----- ----- Carrusel 2 close ----- -----
// ? ----- ----- Carrusel 3 ----- -----
const fila3 = document.querySelector('.contenedor-carousel3');
const peliculas3 = document.querySelectorAll('.pelicula3');

const flechaIzquierda3 = document.getElementById('flecha-izquierda3');
const flechaDerecha3 = document.getElementById('flecha-derecha3');

// ? ----- ----- Event Listener para la flecha derecha. ----- -----
flechaDerecha3.addEventListener('click', () => {
	fila3.scrollLeft += fila3.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores3 .activo');
	if(indicadorActivo.nextSibling){
		indicadorActivo.nextSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda3.addEventListener('click', () => {
	fila3.scrollLeft -= fila3.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores3 .activo');
	if(indicadorActivo.previousSibling){
		indicadorActivo.previousSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Paginacion ----- -----
const numeroPaginas3 = Math.ceil(peliculas3.length / 5);
for(let i = 0; i < numeroPaginas3; i++){
	const indicador = document.createElement('button');

	if(i === 0){
		indicador.classList.add('activo');
	}

	document.querySelector('.indicadores3').appendChild(indicador);
	indicador.addEventListener('click', (e) => {
		fila3.scrollLeft = i * fila3.offsetWidth;

		document.querySelector('.indicadores3 .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}
// ? ----- ----- Carrusel 3 close ----- -----
// ? ----- ----- Carrusel 4 ----- -----
const fila4 = document.querySelector('.contenedor-carousel4');
const peliculas4 = document.querySelectorAll('.pelicula4');

const flechaIzquierda4 = document.getElementById('flecha-izquierda4');
const flechaDerecha4 = document.getElementById('flecha-derecha4');

// ? ----- ----- Event Listener para la flecha derecha. ----- -----
flechaDerecha4.addEventListener('click', () => {
	fila4.scrollLeft += fila4.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores4 .activo');
	if(indicadorActivo.nextSibling){
		indicadorActivo.nextSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda4.addEventListener('click', () => {
	fila4.scrollLeft -= fila4.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores3 .activo');
	if(indicadorActivo.previousSibling){
		indicadorActivo.previousSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Paginacion ----- -----
const numeroPaginas4 = Math.ceil(peliculas4.length / 5);
for(let i = 0; i < numeroPaginas4; i++){
	const indicador = document.createElement('button');

	if(i === 0){
		indicador.classList.add('activo');
	}

	document.querySelector('.indicadores4').appendChild(indicador);
	indicador.addEventListener('click', (e) => {
		fila4.scrollLeft = i * fila4.offsetWidth;

		document.querySelector('.indicadores4 .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}
// ? ----- ----- Carrusel 4 close ----- -----
// ? ----- ----- Hover ----- -----
peliculas.forEach((pelicula) => {
	pelicula.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

fila.addEventListener('mouseleave', () => {
	peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
});
// ? pagina de contacto
function enviarMensaje(event) {
	event.preventDefault(); // Evita el envío predeterminado del formulario

	var email = document.getElementById("email").value;
	var message = document.getElementById("message").value;

	if (!email.trim() || !message.trim()) {
		swal({
			title: "¡Error en el formulario! Campos incompletos.",
			text: "Por favor, verifica y completa los campos obligatorios.",
			icon: "error",
		});
	  return; // Detiene el envío del formulario si faltan campos
	}
	else if(email.trim() && message.trim()){
		fetch("https://formspree.io/f/xzbqwqoj", {
	method: "POST",
	body: new FormData(document.getElementById("myForm"))
    })
    swal({
	title: "¡Formulario enviado exitosamente!",
	text: "¡Gracias por tu participación!",
	icon: "success",
    });
		document.getElementById("myForm").reset();
	}
}
// ? Pagina de aministracion
const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const addBtn = document.getElementById("add-btn");
const tableBody = document.getElementById("table-body");
const updateNameInput = document.getElementById("update-name-input");
const updateEmailInput = document.getElementById("update-email-input");
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
    const emailTd = document.createElement("td");
    const actionsTd = document.createElement("td");
    const editBtn = document.createElement("button");
    editBtn.className = "edit-btn";
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    idTd.innerText = user.id;
    nameTd.innerText = user.name;
    emailTd.innerText = user.email;
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
    tr.appendChild(emailTd);
    tr.appendChild(actionsTd);
    tableBody.appendChild(tr);
  }
}

function addUser() {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  if(email.match(validRegex)){
    if(name && email != null){
      var id = 1;
      var val = users.map(function(x){return x.id; }).indexOf(id);
      while(val != -1){
      id++;
      val = users.map(function(x){return x.id; }).indexOf(id);
  }
      const user = {
        id: id,
        name: name,
        email: email,
      };
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
      nameInput.value = "";
      emailInput.value = "";
      renderTable();
    }else{
      alert("Name is Required");
    }
  }else{
    alert("Invalid email address!");
  }
}

function updateUser() {
  const name = updateNameInput.value;
  const email = updateEmailInput.value;
  if(email.match(validRegex)){
    const index = users.findIndex((user) => user.id === currentUserId);
    if (index !== -1) {
      users[index].name = name;
      users[index].email = email;
      localStorage.setItem("users", JSON.stringify(users));
      hideUpdateForm();
      renderTable();
    }
  }else{
    alert("Invalid email address!");
  }
}

function showUpdateForm(userId) {
  const user = users.find((user) => user.id === userId);
  if (user) {
    updateNameInput.value = user.name;
    updateEmailInput.value = user.email;
    currentUserId = user.id;
    updateBtn.addEventListener("click", updateUser);
    cancelBtn.addEventListener("click", hideUpdateForm);
    updateBtn.style.display = "inline-block";
    cancelBtn.style.display = "inline-block";
    updateNameInput.style.display = "inline-block";
    updateEmailInput.style.display = "inline-block";
    document.getElementById("update-container").style.display = "block";
  }
}

function hideUpdateForm() {
  updateNameInput.value = "";
  updateEmailInput.value = "";
  currentUserId = null;
  updateBtn.removeEventListener("click", updateUser);
  cancelBtn.removeEventListener("click", hideUpdateForm);
  updateBtn.style.display = "none";
  cancelBtn.style.display = "none";
  updateNameInput.style.display = "none";
  updateEmailInput.style.display = "none";
  document.getElementById("update-container").style.display = "none";
}

function deleteUser(userId) {
  users = users.filter((user) => user.id !== userId);
  localStorage.setItem("users", JSON.stringify(users));
  if (users.length == 0){
    hideUpdateForm();
  };
  renderTable();
}

// Event Listeners
addBtn.addEventListener("click", addUser);

// Initialize table
renderTable();
