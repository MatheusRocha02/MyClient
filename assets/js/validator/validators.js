// função para validar CPF 
export function isValidCPF(cpf) {
  cpf = cpf.replace(/\D/g, '');

  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;
  let soma = 0;
  
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }

  let resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.charAt(9))) return false;

  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i);
  }

  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.charAt(10))) return false;

  return true;
}

// valida os campos obrigatórios e o CPF
export function validateClientForm(formData) {
  const errors = {};

  // Validar nome
  if (!formData.name || formData.name.trim() === '') {
    errors.name = 'Nome é obrigatório';
  }

  // Validar email
  if (!formData.email || formData.email.trim() === '') {
    errors.email = 'Email é obrigatório';
  }

  // Validar CPF
  if (!formData.cpf || formData.cpf.trim() === '') {
    errors.cpf = 'CPF é obrigatório';
  } else if (!isValidCPF(formData.cpf)) {
    errors.cpf = 'CPF inválido';
  }

  // Validar telefone
  if (!formData.phone || formData.phone.trim() === '') {
    errors.phone = 'Telefone é obrigatório';
  }

  return errors; // objeto com erros, vazio se não tiver erro
}
