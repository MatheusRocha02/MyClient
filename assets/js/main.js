// arquivo principal de js

import { initMobileMenu } from './ui/menu.js';
import { loadClients } from './client/load-clients.js';
import { renderClientList, setupSearch } from '../js/client/render-clients-list.js';

document.addEventListener('DOMContentLoaded', () => {

    initMobileMenu(); // funcionamento do menu mobile
    loadClients(); // carregar clientes do localStorage
    renderClientList(); // renderiza todos os clientes (inicialmente)
    setupSearch(); // ativa o filtro em tempo real

});

