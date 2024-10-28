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

const inputDescripcion = document.getElementById("Descripcion");
const inputEvento = document.getElementById("IdEvento");

/**
 * Function to search for subjects.
 *
 * @param {number} [page=1] - The page number to retrieve. Default is 1.
 * @returns {void}
 */
function buscar(page = 1) {
  apiClient
    .get(`${generalDate}/api/asuntos/?page=${page}`)
    .then((response) => {
      const { data, limit, next, prev, page, total } = response.data;
      renderResultados(data); // Pass the list of subjects to renderResultados
      drawLinks({ total, limit, next, prev, page });
    })
    .catch((error) => {
      console.error("Error al buscar asuntos:", error);
    });
}

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
 * Function to search for subjects by ID.
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
   * Construct the URL for the API endpoint to search for a subject by ID.
   *
   * @type {string}
   */
  const url = `${generalDate}/api/asuntos/${searchInput}`;

  /**
   * Make a GET request to the API endpoint.
   */
  apiClient
    .get(url)
    .then((response) => {
      /**
       * Extract the result from the API response.
       *
       * @type {Object}
       */
      const result = response.data;

      /**
       * If a result is found, convert it to an array and pass it to the renderResultados function.
       */
      if (result) {
        renderResultados([result]);
      } else {
        /**
         * If no result is found, display an error message.
         */
        mostrarMensaje(
          "No se encontró ningún resultado para el ID proporcionado."
        );
      }
    })
    .catch((error) => {
      /**
       * Log the error to the console and display an error message to the user.
       */
      console.error("Error al buscar asunto:", error);
      mostrarMensaje("Error al buscar asunto. Por favor, intente de nuevo.");
    });
}

async function renderResultados(resultados) {
  const resultadosDiv = document.getElementById("resultados");
  resultadosDiv.innerHTML = ""; // Limpiar resultados anteriores

  for (const [index, result] of resultados.entries()) {
    const nombreEvento = await ObtenerEvento(result.IdEvento);
    const resultDiv = document.createElement("div");
    resultDiv.className = "card mb-3";
    resultDiv.innerHTML = `
      <div class="card-body">
        <div class="row">
          <div class="col-6 card-title fs-6 text-warning-emphasis text-center border-bottom border-danger mb-2">
            Descripcion
          </div>
          <div class="col-6 card-title fs-6 text-warning-emphasis text-center border-bottom border-primary mb-2">
            Evento
          </div>
        </div>
        <div class="row">
          <div class="col-6 text-center mb-2">
            ${result.Descripcion}
          </div>
          <div class="col-6 text-center mb-2">
            ${nombreEvento}
          </div>
        </div>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop-${index}">Editar</button>
        <button type="button" onclick="eliminar(${result.IdAsunto})" class="btn btn-danger">Eliminar</button>

        <div class="modal fade" id="staticBackdrop-${index}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header bg-primary-subtle">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">Asunto: </h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <label>Descripcion</label>
                <input type="text" id="desc-${index}" class="form-control mb-3" placeholder="Descripcion del asunto" value="${result.Descripcion}">
                <label> Evento </label>
                <select name="" id="evento-${index}">
                  <option value=""></option>
                </select>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-primary" onclick="actualizar(${result.IdAsunto}, 'desc-${index}', 'evento-${index}')">Actualizar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    resultadosDiv.appendChild(resultDiv);
    // Llenar select de eventos para cada modal
    await llenarSelectAsuntosById(`evento-${index}`);
  }
}

// Llamar a la función para llenar el select cuando la página se cargue
document.addEventListener("DOMContentLoaded", async () => {
  await llenarSelectAsuntosById("IdEvento");
  buscar(); // Suponiendo que buscar() es la función que inicia la búsqueda de resultados
});

/**
 * Function to update an existing subject.
 *
 * @function actualizar
 * @param {number} idAsunto - The ID of the subject to update.
 * @param {string} descripcionId - The ID of the input field for the subject's description.
 * @param {string} eventoId - The ID of the select field for the subject's event.
 * @returns {void}
 */
function actualizar(idAsunto, descripcionId, eventoId) {
  // Get the values from the input fields
  const descripcionAsunto = document.getElementById(descripcionId).value;
  const eventoAsunto = document.getElementById(eventoId).value;

  // Validate the obtained values
  if (!descripcionAsunto || !eventoAsunto) {
    alert("Todos los campos son obligatorios.");
    return;
  }

  // Create the updated data object
  const datosActualizados = {
    IdAsunto: Number(idAsunto),
    Descripcion: descripcionAsunto,
    IdEvento: Number(eventoAsunto),
  };

  // Make the PUT request to update the subject
  apiClient({
    method: "put",
    url: `${generalDate}/api/asuntos/${idAsunto}`,
    data: datosActualizados,
  })
    .then((res) => {
      // Remove the modal backdrop and refresh the subject list
      document.querySelector("div.modal-backdrop.fade.show")?.remove();
      buscar(); // Assuming buscar() refreshes the subject list
      alert("Actualización exitosa");
    })
    .catch((err) => {
      alert("Error al actualizar el asunto");
      console.error("Error al actualizar asunto:", err);
      if (err.response) {
        console.error("Error data:", err.response.data);
      }
    });
}

/**
 * Function to display a message in the results section.
 *
 * @function mostrarMensaje
 * @param {string} mensaje - The message to be displayed.
 * @returns {void}
 */
function mostrarMensaje(mensaje) {
  const resultadosDiv = document.getElementById("resultados");
  resultadosDiv.innerHTML = `<p>${mensaje}</p>`;
}

/**
 * Function to create a new subject.
 *
 * @function crear
 * @returns {void}
 */
function crear() {
  /**
   * Get the value of the description input field.
   *
   * @type {string}
   */
  const descripcionAsunto = inputDescripcion.value;

  /**
   * Get the value of the event select field.
   *
   * @type {string}
   */
  const IdEvento = inputEvento.value;

  // Basic validations
  if (!descripcionAsunto || !IdEvento) {
    alert("Todos los campos son obligatorios.");
    return;
  }

  apiClient({
    method: "post",
    url: `${generalDate}/api/asuntos/`,
    data: {
      Descripcion: descripcionAsunto,
      IdEvento: Number(IdEvento),
    },
  })
    .then((res) => {
      // Refresh the subject list and hide the modal after successful creation
      buscar();
      alert("Asunto creado exitosamente");
      const modal = bootstrap.Modal.getInstance(
        document.getElementById("CrtAsunto")
      );
      modal.hide();
    })
    .catch((err) => {
      // Handle errors related to creating a subject
      if (err.response && err.response.data && err.response.data.message) {
        if (err.response.data.message.code === "P2002") {
          alert("El Id ya existe. Por favor, use otro Id.");
        } else {
          alert("Error al crear el asunto: " + err.response.data.message);
        }
      } else {
        alert("Error al crear el asunto");
      }
      console.error(err);
    });
}

// Función para eliminar Evento
/**
 * Function to delete a subject.
 *
 * @function eliminar
 * @param {number} id - The ID of the subject to delete.
 * @returns {void}
 */
function eliminar(id) {
  // Confirmation prompt to ensure the user wants to delete the subject
  if (confirm("¿Estás seguro de que quieres eliminar este Asunto?")) {
    // Make a DELETE request to the API endpoint to delete the subject
    apiClient
      .delete(`${generalDate}/api/asuntos/${id}`)
      .then((res) => {
        // Display success message and refresh the subject list
        alert("Asunto eliminado correctamente");
        buscar(); // Assuming buscar() refreshes the subject list
      })
      .catch((err) => {
        // Display error message and log the error to the console
        alert("Error al eliminar el Asunto");
        console.log(err);
      });
  }
}

/**
 * Function to fetch events from the API.
 *
 * @returns {Promise<Object[]>} A promise that resolves to an array of event objects.
 * Each event object has properties: IdEvento, Nombre_Evento, etc.
 * If an error occurs during the fetch, the promise will reject with an error object.
 */
async function obtenerEventos() {
  try {
    // Make a GET request to the API endpoint to fetch events
    const response = await apiClient.get(`${generalDate}/api/Evento/`);

    // Extract the event data from the API response
    const eventos = response.data.data;

    // Return the event data
    return eventos;
  } catch (error) {
    // Log the error to the console
    console.error("Error al obtener los eventos:", error);

    // Return an empty array in case of an error
    return [];
  }
}

/**
 * Function to fetch the name of an event based on its ID.
 *
 * @function ObtenerEvento
 * @param {number} id - The ID of the event to fetch.
 * @returns {Promise<string>} A promise that resolves to the name of the event.
 * If an error occurs during the fetch, the promise will reject with an error message.
 */
async function ObtenerEvento(id) {
  try {
    // Make a GET request to the API endpoint to fetch the event by ID
    const res = await apiClient.get(
      `${generalDate}/api/Evento/evento/${id}`
    );

    // Extract the name of the event from the API response
    const { Nombre_Evento } = res.data;

    // Return the name of the event
    return Nombre_Evento;
  } catch (error) {
    // Log the error to the console
    console.error("Error al obtener el evento:", error);

    // Return a default message in case of an error
    return "Evento no encontrado";
  }
}

/**
 * Function to fill the event select field with event options.
 *
 * @function llenarSelectEventos
 * @returns {Promise<void>} A promise that resolves when the select field is filled.
 */
async function llenarSelectEventos() {
  // Fetch the list of events from the API
  const eventos = await obtenerEventos();

  // Get the select element for the event
  const selectEvento = document.getElementById("IdEvento");

  // Clear existing options in the select element
  selectEvento.innerHTML = '<option value=""></option>';

  // Iterate over the fetched events and add them as options to the select element
  eventos.forEach((evento) => {
    const option = document.createElement("option");
    option.value = evento.IdEvento;
    option.textContent = evento.Nombre_Evento;
    selectEvento.appendChild(option);
  });
}

/**
 * Function to fill the event select field with event options based on the given select element ID.
 *
 * @function llenarSelectAsuntosById
 * @param {string} selectElementId - The ID of the select element to fill with event options.
 * @returns {Promise<void>} A promise that resolves when the select field is filled.
 */
async function llenarSelectAsuntosById(selectElementId) {
  // Fetch the list of events from the API
  const eventos = await obtenerEventos();

  // Get the select element for the event using the provided ID
  const selectEvento = document.getElementById(selectElementId);

  // Check if the select element exists
  if (!selectEvento) {
    // Log an error message and return if the element is not found
    console.error(`Elemento con ID ${selectElementId} no encontrado`);
    return;
  }

  // Clear existing options in the select element
  selectEvento.innerHTML = '<option value=""></option>';

  // Iterate over the fetched events and add them as options to the select element
  eventos.forEach((evento) => {
    const option = document.createElement("option");
    option.value = evento.IdEvento;
    option.textContent = evento.Nombre_Evento;
    selectEvento.appendChild(option);
  });
}

// Llamar a la función para llenar el select cuando la página se cargue
document.addEventListener("DOMContentLoaded", llenarSelectEventos);

// Llamar a la función buscar() para mostrar los asuntos al cargar la página
window.onload = function () {
  buscar();
};
