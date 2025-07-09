function showForm(formId) {
  document.querySelectorAll('.auth-form').forEach(form => form.classList.add('hidden'));
  document.getElementById(`${formId}-form`).classList.remove('hidden');

  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.querySelector(`.tab[onclick="showForm('${formId}')"]`).classList.add('active');
}
