function showForm(formId) {
  document.querySelectorAll('.auth-form').forEach(form => form.classList.add('hidden'));
  document.getElementById(`${formId}-form`).classList.remove('hidden');

  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.querySelector(`.tab[onclick="showForm('${formId}')"]`).classList.add('active');
}

//MDP OEIL
document.addEventListener("DOMContentLoaded", function() {
  const toggleIcons = document.querySelectorAll('.toggle-password');

  toggleIcons.forEach(function(icon) {
    icon.addEventListener('click', function() {
      const inputId = this.getAttribute('data-target');
      const input = document.getElementById(inputId);
      if (input.type === "password") {
        input.type = "text";
        this.classList.remove("fa-eye");
        this.classList.add("fa-eye-slash");
      } else {
        input.type = "password";
        this.classList.remove("fa-eye-slash");
        this.classList.add("fa-eye");
      }
    });
  });
});

