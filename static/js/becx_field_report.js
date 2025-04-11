document.addEventListener("DOMContentLoaded", () => {
    const photoInput = document.getElementById("photo-upload");
    const preview = document.getElementById("preview");
  
    photoInput.addEventListener("change", () => {
      preview.innerHTML = ""; 
  
      const files = photoInput.files;
      if (files.length > 0) {
        Array.from(files).forEach(file => {
          const reader = new FileReader();
          reader.onload = e => {
            const img = document.createElement("img");
            img.src = e.target.result;
            preview.appendChild(img);
          };
          reader.readAsDataURL(file);
        });
      }
    });
  
    const form = document.getElementById("becx-report-form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const formData = new FormData(form);
  
      fetch("/api/generate-becx-report", {
        method: "POST",
        body: formData
      })
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "BECx_Field_Report.docx";
        link.click();
      })
      .catch(err => {
        alert("Something went wrong. Please try again.");
        console.error(err);
      });
    });
  });
  