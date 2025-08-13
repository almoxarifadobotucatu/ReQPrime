(function() {
  const paginasProtegidas = [
    "central-de-pedidos",
    "pedidoextra",
    "pedidomensal"
  ];

  const caminhoAtual = window.location.pathname.toLowerCase();

  if (paginasProtegidas.some(p => caminhoAtual.includes("/" + p + "/"))) {
    if (sessionStorage.getItem("logado") !== "true") {
      // Redireciona imediatamente antes de renderizar
      window.stop(); // Interrompe o carregamento da página
      location.replace("../login/index.html"); // Evita que "voltar" retorne à página protegida
    }
  }
})();
