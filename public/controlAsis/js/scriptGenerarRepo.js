
async function getEspacios() {
  try {
    const response = await apiClient.get(
      `${generalDate}/api/EspaciosDeClase/`
    );
    return response.data.data;
  } catch (error) {
    console.error("Error al obtener los espacios:", error);
    return [];
  }
}

async function ObtenerEspacio(id) {
  try {
    const res = await apiClient.get(
      `${generalDate}/api/EspaciosDeClase/id/${id}`
    );
    const { Nombre } = res.data;
    return Nombre;
  } catch (error) {
    console.error(`Error al obtener el espacio con ID ${id}:`, error);
    return "Desconocido";
  }
}

document
  .getElementById("generateExcel")
  .addEventListener("click", async function () {
    try {
      // Obtener valores de los campos de entrada
      let NumControl = document.getElementById("NumControl").value;
      let fechaInicio = document.getElementById("fechaInicio").value;
      let fechaFin = document.getElementById("fechaFin").value;

      // Obtener espacios
      const espacios = await getEspacios();
      const espaciosMap = new Map(
        espacios.map((espacio) => [espacio.Id, espacio.Nombre])
      );

      // Realizar solicitud GET
      const response = await apiClient.get(
        `${generalDate}/api/ControlAsis/report`,
        {
          params: { NumControl, fechaInicio, fechaFin },
        }
      );
      const data = response.data;

      // Crear un nuevo libro de Excel
      var workbook = new ExcelJS.Workbook();
      var worksheet = workbook.addWorksheet("Reporte");

      // Agregar encabezados a las columnas
      worksheet.columns = [
        { header: "NumControl", key: "NumControl", width: 15 },
        { header: "Lugar", key: "Lugar", width: 25 },
        { header: "Fecha", key: "Fecha", width: 20 },
        { header: "HoraEntrada", key: "HoraEntrada", width: 15 },
        { header: "HoraSalida", key: "HoraSalida", width: 15 },
      ];

      // Aplicar estilos a los encabezados
      ["A1", "B1", "C1", "D1", "E1"].forEach((cell) => {
        worksheet.getCell(cell).font = {
          name: "nomospace",
          family: 4,
          size: 14,
          bold: true,
        };
        worksheet.getCell(cell).alignment = {
          vertical: "middle",
          horizontal: "center",
        };
        worksheet.getCell(cell).border = {
          top: { style: "thin", color: { argb: "FF00FF00" } },
          left: { style: "thin", color: { argb: "FF00FF00" } },
          bottom: { style: "thin", color: { argb: "FF00FF00" } },
          right: { style: "thin", color: { argb: "FF00FF00" } },
        };
      });

      // Agregar datos a la hoja de trabajo
      for (let alumno of data) {
        const lugar = await ObtenerEspacio(alumno.IdEspacio);
        worksheet.addRow({
          NumControl: alumno.NumControl,
          Lugar: lugar,
          Fecha: new Date(alumno.HoraEntrada).toLocaleDateString(),
          HoraEntrada: new Date(alumno.HoraEntrada).toLocaleTimeString(),
          HoraSalida: alumno.HoraSalida
            ? new Date(alumno.HoraSalida).toLocaleTimeString()
            : "No Registrado", // Manejar HoraSalida null
        });
      }

      // Escribir el libro de Excel en un buffer
      const buffer = await workbook.xlsx.writeBuffer();

      // Convertir el buffer en un blob
      const blob = new Blob([buffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });

      // Crear un enlace para descargar el archivo
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Reporte_"+NumControl+".xlsx";
      document.body.appendChild(a);
      a.click();

      // Liberar el objeto URL
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error al generar el reporte:", error);
    }
  });
