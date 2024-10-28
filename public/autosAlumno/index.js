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