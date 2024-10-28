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

const inputNombreEvento = document.getElementById("Nombre_Evento");
const inputFechaInicio = document.getElementById("fecha_inicio");
const inputFechaFin = document.getElementById("fecha_fin");
const inputHabilitado = document.getElementById("Habilitado");

/**
 * Function to search for events.
 *
 * @param {number} [page=1] - The page number to retrieve. Default is 1.
 * @returns {void}
 */
function buscar(page = 1) {
  apiClient
    .get(`${generalDate}/api/Evento/?page=${page}`)
    .then((response) => {
      const { data, limit, next, prev, page, total } = response.data;
      renderResultados(data);
      drawLinks({ total, limit, next, prev, page });
    })
    .catch((error) => {
      console.error("Error al buscar eventos:", error);
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

/**
 * Function to search for an event by its ID.
 *
 * @function buscarId
 * @returns {void}
 */
function buscarId() {
  /**
   * Get the value of the search input field.
   *
   * @type {string}
   */
  const searchInput = document.getElementById("searchInput").value;

  /**
   * Construct the URL for the API endpoint to search for the event by ID.
   *
   * @type {string}
   */
  const url = `${generalDate}/api/Evento/${searchInput}`;

  /**
   * Make a GET request to the API endpoint.
   */
  apiClient
    .get(url)
    .then((response) => {
      /**
       * Extract the event data from the response.
       *
       * @type {Object}
       */
      const result = response.data;

      /**
       * If the event is found, render it in the results section.
       * If not, display a message indicating no results were found.
       */
      if (result) {
        renderResultados([result]); // Convertimos el resultado a un array para reutilizar la función
      } else {
        mostrarMensaje(
          "No se encontró ningún resultado para el ID proporcionado."
        );
      }
    })
    .catch((error) => {
      /**
       * Log the error to the console.
       * Display a message to the user indicating an error occurred while searching for the event.
       */
      console.error("Error al buscar evento:", error);
      mostrarMensaje("Error al buscar evento. Por favor, intente de nuevo.");
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
        <div class="row">
          <div class="col-3 card-title fs-6 text-warning-emphasis text-center border-bottom border-success mb-2">Nombre</div>
          <div class="col-3 card-title fs-6 text-warning-emphasis text-center border-bottom border-danger mb-2">Fecha Inicio</div>
          <div class="col-3 card-title fs-6 text-warning-emphasis text-center border-bottom border-warning mb-2">Fecha Fin</div>
          <div class="col-3 card-title fs-6 text-warning-emphasis text-center border-bottom border-primary mb-2">Disponible</div>
        </div>
        <div class="row">
          <div class="col-3 text-center mb-2">${result.Nombre_Evento}</div>
          <div class="col-3 text-center mb-2">${formatDate(
            result.fecha_inicio
          )}</div>
          <div class="col-3 text-center mb-2">${formatDate(
            result.fecha_fin
          )}</div>
          <div class="col-3 text-center mb-2">${
            result.Habilitado ? "Sí" : "No"
          }</div>
        </div>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop-${index}">Editar</button>
        <button type="button" onclick="eliminar(${
          result.IdEvento
        })" class="btn btn-danger">Eliminar</button>

        <div class="modal fade" id="staticBackdrop-${index}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header bg-primary-subtle">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">Evento: </h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <label>Nombre del Evento</label>
                <input type="text" id="nombre-${index}" class="form-control" placeholder="NombreEvento" value="${
      result.Nombre_Evento
    }">
                <label>Fecha Inicio</label>
                <input type="date" id="fechaInicio-${index}" class="form-control" value="${formatDate(
      result.fecha_inicio
    )}">
                <label>Fecha Fin</label>
                <input type="date" id="fechaFin-${index}" class="form-control" value="${formatDate(
      result.fecha_fin
    )}">
                <label>Disponible</label>
                <div>
                <input type="checkbox" id="habilitado-${index}" ${
      result.Habilitado ? "checked" : ""
    }>
                <label for="habilitado-${index}">Habilitado</label>

                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-primary" onclick="actualizar(${
                  result.IdEvento
                }, 'nombre-${index}', 'fechaInicio-${index}', 'fechaFin-${index}', 'habilitado-${index}')">Actualizar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    resultadosDiv.appendChild(resultDiv);
  });
}

/**
 * Function to update an event.
 *
 * @function actualizar
 * @param {number} idEvento - The ID of the event to update.
 * @param {string} nombreId - The ID of the input field for the event name.
 * @param {string} fechaInicioId - The ID of the input field for the start date.
 * @param {string} fechaFinId - The ID of the input field for the end date.
 * @param {string} habilitadoId - The ID of the checkbox for the event availability.
 * @returns {void}
 */
function actualizar(
  idEvento,
  nombreId,
  fechaInicioId,
  fechaFinId,
  habilitadoId
) {
  // Get the values from the input fields
  const nombreEvento = document.getElementById(nombreId).value;
  const fechaInicio = new Date(
    document.getElementById(fechaInicioId).value
  ).toISOString();
  const fechaFin = new Date(
    document.getElementById(fechaFinId).value
  ).toISOString();
  const habilitado = document.getElementById(habilitadoId).checked;

  // Validate the input fields
  if (!nombreEvento || !fechaInicio || !fechaFin) {
    alert("Todos los campos son obligatorios.");
    return;
  }

  // Create an object with the updated event data
  const datosActualizados = {
    IdEvento: idEvento,
    Nombre_Evento: nombreEvento,
    fecha_inicio: fechaInicio,
    fecha_fin: fechaFin,
    Habilitado: habilitado,
  };

  // Make a PUT request to the API endpoint to update the event
  apiClient({
    method: "put",
    url: `${generalDate}/api/Evento/${idEvento}`,
    data: datosActualizados,
  })
    .then((res) => {
      // Remove the modal backdrop and refresh the event list
      document.querySelector("div.modal-backdrop.fade.show")?.remove();
      buscar();
      alert("Actualización exitosa");
    })
    .catch((err) => {
      // Handle errors
      alert("Error al actualizar el evento");
      console.error("Error al actualizar evento:", err);
      if (err.response) {
        console.error("Error data:", err.response.data);
      }
    });
}

/**
 * Function to format a date string into a YYYY-MM-DD format.
 *
 * @function formatDate
 * @param {string} dateString - The date string to format.
 * @returns {string} The formatted date string in YYYY-MM-DD format.
 */
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toISOString().split("T")[0];
}

/**
 * Function to display a message in the results section.
 *
 * @function mostrarMensaje
 * @param {string} mensaje - The message to display.
 * @returns {void}
 */
function mostrarMensaje(mensaje) {
  // Get the results section element
  const resultadosDiv = document.getElementById("resultados");

  // Clear any existing content in the results section
  resultadosDiv.innerHTML = "";

  // Create a new paragraph element with the provided message
  const p = document.createElement("p");
  p.textContent = mensaje;

  // Append the paragraph element to the results section
  resultadosDiv.appendChild(p);
}

/**
 * Function to delete an event.
 *
 * @function eliminar
 * @param {number} id - The ID of the event to delete.
 * @returns {void}
 */
function eliminar(id) {
  // Confirmation prompt to ensure the user wants to delete the event
  if (confirm("¿Estás seguro de que quieres eliminar este Evento?")) {
    // Make a DELETE request to the API endpoint to delete the event
    apiClient
      .delete(`${generalDate}/api/Evento/${id}`)
      .then((res) => {
        // Display success message and refresh the event list
        alert("Evento eliminado correctamente");
        buscar(); // Refrescar la lista de eventos después de eliminar
      })
      .catch((err) => {
        // Display error message and log the error
        alert("Error al eliminar el Evento");
        console.log(err);
      });
  }
}

/**
 * Function to create a new event.
 *
 * @function crear
 * @returns {void}
 */
function crear() {
  // Get the values from the input fields
  const nombreEvento = inputNombreEvento.value;
  const fechaInicio = new Date(inputFechaInicio.value).toISOString();
  const fechaFin = new Date(inputFechaFin.value).toISOString();
  const habilitado = inputHabilitado.checked ? true : false;

  // Basic validations
  if (!nombreEvento || !fechaInicio || !fechaFin) {
    alert("Todos los campos son obligatorios.");
    return;
  }

  // Make a POST request to the API endpoint to create a new event
  apiClient({
    method: "post",
    url: `${generalDate}/api/Evento/`,
    data: {
      Nombre_Evento: nombreEvento,
      fecha_inicio: fechaInicio,
      fecha_fin: fechaFin,
      Habilitado: habilitado,
    },
  })
    .then((res) => {
      // Refresh the event list and display success message
      buscar();
      alert("Evento creado exitosamente");

      // Hide the modal
      const modal = bootstrap.Modal.getInstance(
        document.getElementById("CrtEvento")
      );
      modal.hide();
    })
    .catch((err) => {
      // Handle errors and display appropriate messages
      if (err.response && err.response.data && err.response.data.message) {
        if (err.response.data.message.code === "P2002") {
          alert("El IdEvento ya existe. Por favor, use otro IdEvento.");
        } else {
          alert("Error al crear el evento: " + err.response.data.message);
        }
      } else {
        alert("Error al crear el evento");
      }
      console.error(err);
    });
}

// Llamar a la función buscar() para mostrar los eventos al cargar la página
window.onload = function () {
  buscar();
};
