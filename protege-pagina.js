// protege-pagina.js
(function() {
  const paginasProtegidas = [
    "/central-de-pedidos/",
    "/pedidoextra/",
    "/pedidomensal/"
  ];

  const caminhoAtual = window.location.pathname;

  // Se a URL atual for de uma página protegida
  if (paginasProtegidas.some(p => caminhoAtual.startsWith(p))) {
    if (!sessionStorage.getItem("logado")) {
      window.location.href = "/login/index.html";
    }
  }
})();
