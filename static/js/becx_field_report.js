document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('becx-report-form');
  const fileInput = document.getElementById('photo-upload');
  const dropZoneLabel = document.getElementById('drop-zone-label'); // Get the label/div
  const preview = document.getElementById('preview');

  // --- Drag and Drop Functionality ---

  // Prevent default drag behaviors
  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropZoneLabel.addEventListener(eventName, preventDefaults, false);
    document.body.addEventListener(eventName, preventDefaults, false); // Prevent browser from opening file
  });

  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  // Highlight drop zone when item is dragged over it
  ['dragenter', 'dragover'].forEach(eventName => {
    dropZoneLabel.addEventListener(eventName, highlight, false);
  });

  ['dragleave', 'drop'].forEach(eventName => {
    dropZoneLabel.addEventListener(eventName, unhighlight, false);
  });

  function highlight(e) {
    dropZoneLabel.classList.add('dragover');
  }

  function unhighlight(e) {
    dropZoneLabel.classList.remove('dragover');
  }

  // Handle dropped files
  dropZoneLabel.addEventListener('drop', handleDrop, false);

  function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;

    // Set the dropped files to the hidden file input
    fileInput.files = files;

    // Trigger the change event manually to update previews etc.
    const event = new Event('change', { bubbles: true });
    fileInput.dispatchEvent(event);
  }

  // --- File Selection & Preview (Combine drop and click) ---

  // Listen for changes on the file input (covers both click and drop)
  fileInput.addEventListener('change', handleFiles);

  function handleFiles() {
    preview.innerHTML = ''; // Clear existing previews
    const files = fileInput.files;
    if (files.length > 0) {
      Array.from(files).forEach(file => {
        if (file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = file.name;
            preview.appendChild(img);
          }
          reader.readAsDataURL(file);
        }
      });
    }
  }

  // --- Form Submission ---
  // Add your form submission logic here (e.g., using Fetch API)
  form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent default page reload
      console.log("Form submitted");

      const formData = new FormData(form);

      // Example: Log form data
      for (let [key, value] of formData.entries()) {
          console.log(`${key}:`, value);
      }

      // Here you would typically send the formData to your server
      // fetch('/your-upload-endpoint', {
      //    method: 'POST',
      //    body: formData,
      // })
      // .then(response => response.json())
      // .then(data => {
      //     console.log('Success:', data);
      //     // Handle success (e.g., show success message, redirect)
      // })
      // .catch((error) => {
      //     console.error('Error:', error);
      //     // Handle error
      // });
  });

});