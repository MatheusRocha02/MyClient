//Carrega os clientes e exibe na clients-list usando DOM

export function loadClients() {
  const clientsList = JSON.parse(localStorage.getItem('clientsList')) || [];

  const tableBody = document.getElementById('clients-table-body');
  if (!tableBody) return;

  tableBody.innerHTML = ''; // limpa o conteúdo antes

  clientsList.forEach((client, index) => {
    const row = document.createElement('tr');

    // cria colunas com os dados do cliente
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${client.name}</td>
      <td>${client.email}</td>
      <td>${client.cpf}</td>
      <td>${client.phone}</td>
    `;

    tableBody.appendChild(row);
  });
}