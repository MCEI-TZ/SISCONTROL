document.addEventListener("DOMContentLoaded", function () {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "../index.html";
    return;
  }

  axios
    .get(`${generalDate}/api/authAdmin/validate/`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(function (response) {
    })
    .catch(function (error) {
      console.error(error);
      alert("Validation failed: " + error.response.data.error);
      window.location.href = "../index.html";
    });
});

// Función para buscar eventos
function buscar(page = 1) {
  apiClient
    .get(`${generalDate}/api/EspaciosDeClase/?page=${page}`)
    .then((response) => {
      const { data, limit, next, prev, page, total } = response.data;
      const resultados = response.data;
      renderResultados(data);
      drawLinks({ total, limit, next, prev, page });
    })
    .catch((error) => {
      console.error("Error al buscar espacios:", error);
    });
}

/**
 * Function to draw pagination links.
 *
 * @param {Object} paginationData - An object containing pagination data.
 * @param {number} paginationData.total - The total number of items.
 * @param {number} paginationData.limit - The number of items per page.
 * @param {number} paginationData.next - The next page number.
 * @param {number} paginationData.prev - The previous page number.
 * @param {number} paginationData.page - The current page number.
 * @returns {void}
 */
function drawLinks({ total, limit, next, prev, page }) {
  // Calculate total pages
  const totalPages = Math.ceil(total / limit);

  // Determine previous and next page numbers, ensuring they are within valid range
  const prevPage = page > 1 ? prev : 1;
  const nextPage = page < totalPages ? next : totalPages;

  // Generate HTML for pagination links
  const links = `
    <ul class="pagination justify-content-center">
      <li class="page-item ${page === 1 ? "disabled" : ""}">
        <a class="page-link" href="#" onclick="buscar(${prevPage})">Anterior</a>
      </li>
      <li class="page-item ${page === totalPages ? "disabled" : ""}">
        <a class="page-link" href="#" onclick="buscar(${nextPage})">Siguiente</a>
      </li>
    </ul>
  `;

  // Update the HTML in the pagination section
  document.getElementById("nav-pagination").innerHTML = links;
}

function buscarId() {
  const searchInput = document.getElementById("searchInput").value;
  const url = `${generalDate}/api/EspaciosDeClase/${searchInput}`;

  apiClient
    .get(url)
    .then((response) => {
      const result = response.data;
      if (result) {
        renderResultados([result]); // Convertimos el resultado a un array para reutilizar la función
      } else {
        mostrarMensaje(
          "No se encontró ningún resultado para el name proporcionado."
        );
      }
    })
    .catch((error) => {
      console.error("Error al buscar espacio:", error);
      mostrarMensaje("Error al buscar espacio. Por favor, intente de nuevo.");
    });
}

function renderResultados(resultados) {
  const resultadosDiv = document.getElementById("resultados");
  resultadosDiv.innerHTML = ""; // Limpiar resultados anteriores

  resultados.forEach((result, index) => {
    const resultDiv = document.createElement("div");
    resultDiv.className = "card mb-3";
    resultDiv.innerHTML = `
      <div class="card-body">
        <p> ${result.Id} </p>
        <div class="row">
          <div class="col-3 card-title fs-6 text-warning-emphasis text-center border-bottom border-success mb-2">Nombre</div>
          <div class="col-3 card-title fs-6 text-warning-emphasis text-center border-bottom border-danger mb-2">Abreviatura</div>
          <div class="col-3 card-title fs-6 text-warning-emphasis text-center border-bottom border-warning mb-2">Capacidad</div>
          <div class="col-3 card-title fs-6 text-warning-emphasis text-center border-bottom border-primary mb-2">IdSituacion</div>
        </div>
        <div class="row">
          <div class="col-3 text-center mb-2">${result.Nombre}</div>
          <div class="col-3 text-center mb-2">${result.Abreviatura}</div>
          <div class="col-3 text-center mb-2">${result.Capacidad}</div>
          <div class="col-3 text-center mb-2">${
            result.IdSituacion == 1 ? "Vigente" : "Inactivo"
          }</div>
        </div>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop-${index}">Editar</button>
        <button type="button" onclick="eliminar(${
          result.Id
        })" class="btn btn-danger">Eliminar</button>

        <div class="modal fade" id="staticBackdrop-${index}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">Espacio de Clase: </h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <label>Nombre del espacio</label>
                <input type="text" id="nombre-${index}" class="form-control" placeholder="Nombre del Espacio" value="${
      result.Nombre
    }">
                <label>Abreviatura</label>
                <input type="text" id="abreviatura-${index}" class="form-control" value="${
      result.Abreviatura
    }">
                <label>Capacidad</label>
                <input type="number" id="capacidad-${index}" class="form-control" value="${
      result.Capacidad
    }">
                <label>Situacion</label>
                <div class="mb-3">
                  <input type="radio" id="Vigente-${index}" name="situacion-${index}" value="1" ${
      result.IdSituacion == 1 ? "checked" : ""
    }/>
                  <label for="Vigente">Vigente</label>
                  <input type="radio" id="Inactivo-${index}" name="situacion-${index}" value="2" ${
      result.IdSituacion == 2 ? "checked" : ""
    }/>
                  <label for="Inactivo">Inactivo</label>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-primary" onclick="actualizar(${
                  result.Id
                }, 'nombre-${index}', 'abreviatura-${index}', 'capacidad-${index}', ${index})">Actualizar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    resultadosDiv.appendChild(resultDiv);
  });
}

function actualizar(idEspacio, nombreId, abreviaturaId, capacidadId, index) {
  const nombreEspacio = document.getElementById(nombreId).value;
  const abreviaturaEspacio = document.getElementById(abreviaturaId).value;
  const capacidadEspacio = document.getElementById(capacidadId).value;
  const idSituacionEspacio = document.querySelector(
    `input[name="situacion-${index}"]:checked`
  ).value;

  // Validación de los valores obtenidos
  if (
    !nombreEspacio ||
    !abreviaturaEspacio ||
    !capacidadEspacio ||
    !idSituacionEspacio
  ) {
    alert("Todos los campos son obligatorios.");
    return;
  }

  // Crear el objeto de datos actualizados
  const datosActualizados = {
    Id: idEspacio,
    Nombre: nombreEspacio,
    Abreviatura: abreviaturaEspacio,
    Capacidad: Number(capacidadEspacio), // Convertir a número
    IdSituacion: Number(idSituacionEspacio), // Convertir a número
  };

  // Realizar la solicitud de actualización
  apiClient({
    method: "put",
    url: `${generalDate}/api/EspaciosDeClase/${idEspacio}`,
    data: datosActualizados,
  })
    .then((res) => {
      document.querySelector("div.modal-backdrop.fade.show")?.remove();
      document
        .getElementById(`staticBackdrop-${index}`)
        .classList.remove("show");
      document
        .getElementById(`staticBackdrop-${index}`)
        .setAttribute("aria-hidden", true);
      document
        .getElementById(`staticBackdrop-${index}`)
        .setAttribute("style", "display: none");
      buscar(); // Asumo que esta función refresca la lista de espacios
      alert("Actualización exitosa");
    })
    .catch((err) => {
      alert("Error al actualizar el espacio");
      console.error("Error al actualizar espacio:", err);
      if (err.response) {
        console.error("Error data:", err.response.data);
      }
    });
}

function mostrarMensaje(mensaje) {
  const resultadosDiv = document.getElementById("resultados");
  resultadosDiv.innerHTML = `<p>${mensaje}</p>`;
}

// Función para eliminar Evento
function eliminar(id) {
  if (confirm("¿Estás seguro de que quieres eliminar este Espacio?")) {
    apiClient
      .delete(`${generalDate}/api/EspaciosDeClase/${id}`)
      .then((res) => {
        alert("Espacio eliminado correctamente");
        buscar(); // Refrescar la lista de eventos después de eliminar
      })
      .catch((err) => {
        alert("Error al eliminar el Espacio");
        console.log(err);
      });
  }
}

const inputNombre = document.getElementById("Nombre");
const inputAbreviatura = document.getElementById("Abreviatura");
const inputCapacidad = document.getElementById("Capacidad");

function crear() {
  const nombreEspacio = inputNombre.value;
  const abreviaturaEspacio = inputAbreviatura.value;
  const capacidadEspacio = inputCapacidad.value;
  const idSituacionEspacio = document.querySelector(
    'input[name="situacion"]:checked'
  ).value;

  // Validaciones básicas
  if (
    !nombreEspacio ||
    !abreviaturaEspacio ||
    !capacidadEspacio ||
    !idSituacionEspacio
  ) {
    alert("Todos los campos son obligatorios.");
    return;
  }

  apiClient({
    method: "post",
    url: `${generalDate}/api/EspaciosDeClase/`,
    data: {
      Nombre: nombreEspacio,
      Abreviatura: abreviaturaEspacio,
      Capacidad: Number(capacidadEspacio),
      IdSituacion: Number(idSituacionEspacio),
    },
  })
    .then((res) => {
      buscar();
      alert("Espacio creado exitosamente");
      const modal = bootstrap.Modal.getInstance(
        document.getElementById("CrtEspacio")
      );
      modal.hide();
    })
    .catch((err) => {
      if (err.response && err.response.data && err.response.data.message) {
        if (err.response.data.message.code === "P2002") {
          alert("El Id ya existe. Por favor, use otro Id.");
        } else {
          alert("Error al crear el espacio: " + err.response.data.message);
        }
      } else {
        alert("Error al crear el espacio");
      }
      console.error(err);
    });
}

// Llamar a la función buscar() para mostrar los eventos al cargar la página
window.onload = function () {
  buscar();
};
