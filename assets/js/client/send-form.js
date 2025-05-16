import { validateClientForm } from '../validator/validators.js';
import { saveClient } from './storage.js';

const form = document.getElementById('client-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    cpf: form.cpf.value.trim(),
    phone: form.phone.value.trim()
  };

  const errors = validateClientForm(formData);

  if (Object.keys(errors).length > 0) {
    // mostra todas as mensagens de erro num alert
    alert(Object.values(errors).join('\n'));
    return;
  }

  saveClient(formData);

  form.reset();
  window.location.href = 'clients_list.html';
});
