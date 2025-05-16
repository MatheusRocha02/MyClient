// adiciona e salva cliente no localStorage

export function saveClient(client) {
  // pega a lista atual do localStorage, ou cria uma nova se não tiver
  const clientsList = JSON.parse(localStorage.getItem('clientsList')) || [];

  // adiciona o novo cliente na lista
  clientsList.push(client);

  // salva a lista atualizada no localStorage (transforma em string JSON)
  localStorage.setItem('clientsList', JSON.stringify(clientsList));
}