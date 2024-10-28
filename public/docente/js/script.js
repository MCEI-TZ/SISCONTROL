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
    .get(`${generalDate}/api/Docente/?page=${page}`)
    .then((response) => {
      const { data, limit, next, prev, page, total } = response.data;
      renderResultados(data);
      drawLinks({ total, limit, next, prev, page });
    })
    .catch((error) => {
      console.error("Error al buscar docentes:", error);
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
  const url = `${generalDate}/api/Docente/${searchInput}`;

  apiClient
    .get(url)
    .then((response) => {
      const result = response.data;
      if (result) {
        renderResultados([result]); // Convertimos el resultado a un array para reutilizar la función
      } else {
        mostrarMensaje(
          "No se encontró ningún resultado para el ID proporcionado."
        );
      }
    })
    .catch((error) => {
      console.error("Error al buscar docente:", error);
      mostrarMensaje("Error al buscar docente. Por favor, intente de nuevo.");
    });
}

async function renderResultados(resultados) {
  const resultadosDiv = document.getElementById("resultados");
  resultadosDiv.innerHTML = ""; // Limpiar resultados anteriores

  for (const result of resultados) {
    const departamentoNombre = await ObtenerDepartamento(result.IdDepa);

    const resultDiv = document.createElement("div");
    resultDiv.className = "card mb-3";
    resultDiv.innerHTML = `
          <div class="card-body card border-primary">
            <div class="row">
                <div class="col-3 card-title fs-7 text-warning-emphasis text-center border-bottom border-primary mb-2">
                    Nombre Completo
                </div>
                <div class="col-1 card-title fs-7 text-warning-emphasis text-center border-bottom border-secondary-subtle mb-2">
                    Genero
                </div>
                <div class="col-1 card-title fs-7 text-warning-emphasis text-center border-bottom border-success mb-2">
                    Grado
                </div>
                <div class="col-1 card-title fs-7 text-warning-emphasis text-center border-bottom border-warning mb-2">
                    Nomina
                </div>
                <div class="col-1 card-title fs-7 text-warning-emphasis text-center border-bottom border-danger-subtle mb-2">
                    Vigente
                </div>
                <div class="col-5 card-title fs-7 text-warning-emphasis text-center border-bottom border-danger mb-2">
                    Departamento
                </div>
            </div>
            <div class="row">
                <div class="col-3 mb-2">
                  ${result.NombreCompleto}
                </div>
                <div class="col-1 text-center mb-2">
                  ${result.Genero}
                </div>
                <div class="col-1 text-center mb-2">
                  ${result.Grado}
                </div>
                <div class="col-1 text-center mb-2">
                  ${result.NumNomina}
                </div>
                <div class="col-1 text-center mb-2">
                  ${(result.Vigente)?"Activo": "Inactivo"}
                </div>
                <div class="col-5 text-center mb-2">
                  ${departamentoNombre}
                </div>
            </div>
        `;
    resultadosDiv.appendChild(resultDiv);
  }
}

async function ObtenerDepartamento(id) {
  try {
    // Make a GET request to the API endpoint to fetch the event by ID
    const res = await apiClient.get(`${generalDate}/api/departamento/${id}`);

    // Extract the name of the event from the API response
    const { Nombre } = res.data;

    // Return the name of the event
    return Nombre;
  } catch (error) {
    // Log the error to the console
    console.error("Error al obtener el departamento:", error);

    // Return a default message in case of an error
    return "departamento no encontrada";
  }
}

function mostrarMensaje(mensaje) {
  const resultadosDiv = document.getElementById("resultados");
  resultadosDiv.innerHTML = `<p>${mensaje}</p>`;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toISOString().split("T")[0];
}

// Llamar a la función buscar() para mostrar los eventos al cargar la página
window.onload = function () {
  buscar();
};
