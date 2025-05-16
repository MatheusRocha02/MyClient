// renderiza lista de clientes em tabela

export function renderClientList(filter = '') {
  const tableBody = document.getElementById('clients-table-body');
  const countDisplay = document.getElementById('client-count'); // pega o contador
  const clients = JSON.parse(localStorage.getItem('clientsList')) || [];

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(filter.toLowerCase()) ||
    client.email.toLowerCase().includes(filter.toLowerCase()) ||
    client.cpf.includes(filter) ||
    client.phone.includes(filter)
  );

  tableBody.innerHTML = ''; // limpa a tabela

  filteredClients.forEach((client, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${client.name}</td>
      <td>${client.email}</td>
      <td>${client.cpf}</td>
      <td>${client.phone}</td>
    `;
    tableBody.appendChild(row);
  });

  // Atualiza o contador
  if (countDisplay) {
    countDisplay.textContent = `Total: ${filteredClients.length} cliente${filteredClients.length !== 1 ? 's' : ''}`;
  }
}

export function setupSearch() {
  const searchInput = document.getElementById('search-input');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value;
    renderClientList(query);
  });
}
