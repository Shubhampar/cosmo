document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('dynamic-form');
    const formFields = document.getElementById('form-fields');
    const addFieldBtn = document.getElementById('add-field');

    // Function to add new input field
    function addInputField() {
      const newField = document.createElement('div');
      newField.classList.add('form-group');
      newField.innerHTML = `
        <input type="text" name="inputField[]" placeholder="Enter value">
        <button type="button" class="remove-field">Remove</button>
      `;
      formFields.appendChild(newField);
    }

    // Function to remove input field
    function removeInputField(event) {
      if (event.target.classList.contains('remove-field')) {
        event.target.parentElement.remove();
      }
    }

    // Event listener for adding field
    addFieldBtn.addEventListener('click', addInputField);

    // Event listener for removing field (delegated to parent)
    formFields.addEventListener('click', removeInputField);

    // Form submission handling
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const formData = Array.from(form.querySelectorAll('input[name="inputField[]"]')).map(input => input.value);
      console.log(formData);
    });
  });