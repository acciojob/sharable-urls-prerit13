// your code here
    const button = document.getElementById("button");
    const urlDisplay = document.getElementById("url");

    button.addEventListener("click", () => {
      const name = document.getElementById("name").value.trim();
      const year = document.getElementById("year").value.trim();

      let baseUrl = "https://localhost:8080/";
      let params = [];

      if (name) {
        params.push(`name=${encodeURIComponent(name)}`);
      }
      if (year) {
        params.push(`year=${encodeURIComponent(year)}`);
      }

      if (params.length > 0) {
        baseUrl += "?" + params.join("&");
      }

      urlDisplay.textContent = baseUrl;
    });