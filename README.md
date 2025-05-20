# 🚀 MyClient: Sistema de Cadastro e Listagem de Clientes

## Descrição do Projeto

Este projeto é uma aplicação web simples para cadastro e listagem de clientes, desenvolvida como teste técnico. O sistema permite cadastrar clientes com validação de campos e visualizar os clientes cadastrados em uma tabela com funcionalidades de busca e contagem.

---

## O que foi entregue conforme o desafio

- Cadastro de clientes com validação completa (nome, email, CPF, telefone).
- Listagem dos clientes cadastrados com filtro por nome e contagem total.
- Persistência dos dados em LocalStorage.
- Interface simples, limpa e responsiva utilizando Bootstrap.
- Modularização do JavaScript em componentes para validação, armazenamento e renderização.
- README explicando o projeto, instruções para rodar e organização.

- Bônus: página Home responsiva, amigável e contendo links reais da empresa.

---

## Interface e Estilização

- **Interfaces responsivas** e alinhadas com os princípios básicos de UX, proporcionando uma boa experiência ao usuário.
- Uso combinado de **Bootstrap** para agilidade na construção do layout e **CSS personalizado** para refinamento dos detalhes visuais.
- Essa combinação permite rapidez no desenvolvimento sem perder a capacidade de estilização fina.
- Os arquivos CSS são divididos entre:
  - **Classes Bootstrap sobreescritas**, para adaptar comportamentos padrões.
  - **Classes personalizadas (CSS puro)** para estilos específicos do projeto.
- Padrão aplicado nas classes HTML:  
  **primeiro as classes Bootstrap, depois as classes personalizadas** para garantir o comportamento desejado.

---

## Modularização e Boas Práticas

- Utilização de recursos modernos do **ES6+**, como módulos (`import` / `export`) para manter o código organizado e reutilizável.
- Separação clara das responsabilidades:
  - Validação do CPF isolada em módulo próprio.
  - Lógica de armazenamento no LocalStorage em módulo dedicado.
  - Renderização da lista em módulo específico.
- Código estruturado para facilitar manutenção e futuras extensões.

---

## Como Rodar o Projeto

Clone o repositório para sua máquina local:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

Navegue até a pasta do projeto:

```bash
cd seu-repositorio
```

Abra o arquivo `index.html` no navegador.

> **Obs:** Como o projeto é frontend puro, não precisa instalar servidor nem dependências. Você pode abrir os arquivos direto no navegador ou usar um servidor local simples (ex: extensão Live Server do VSCode).

---

## Ideias para Melhorias Futuras

- Implementar backend com Python (Django Rest Framework) ou Node.js para persistência real dos dados em banco (MySQL, SQLite).
- Adicionar autenticação de usuário para proteger o sistema.
- Melhorar a validação do formulário com feedback em tempo real e mensagens customizadas.
- Incluir paginação e ordenação na listagem de clientes.
- Usar frameworks modernos como React para melhor experiência do usuário e escalabilidade.
- Adicionar testes automatizados para garantir qualidade do código.
- Internacionalizar a aplicação para suportar múltiplos idiomas.

---
Em produção em: https://my-client-96pbeh3vi-matheus-rochas-projects-5fedfb81.vercel.app
## Desenvolvido por Matheus Rocha Dev 👨🏿‍💻
