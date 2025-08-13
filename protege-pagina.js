(function() {
  const paginasProtegidas = [
    "central-de-pedidos",
    "pedidoextra",
    "pedidomensal"
  ];

  const caminhoAtual = window.location.pathname.toLowerCase();

  // Detecta se está em alguma das páginas protegidas
  if (paginasProtegidas.some(p => caminhoAtual.includes("/" + p + "/"))) {
    if (!sessionStorage.getItem("logado")) {
      // Volta para a pasta /login relativa ao nível atual
      if (caminhoAtual.endsWith("/")) {
        window.location.href = "../login/index.html";
      } else {
        window.location.href = "../../login/index.html";
      }
    }
  }
})();
