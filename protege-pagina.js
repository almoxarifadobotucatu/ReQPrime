<!DOCTYPE html>
<html lang="pt-BR">
<head>

<!-- Proteção instantânea -->
<script src="/protege-pagina.js"></script>

<script>
if (sessionStorage.getItem("logado") !== "true") {
    window.location.href = "/";
}
</script>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Central de Pedidos</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>
    /* Seu CSS original aqui */
</style>
</head>
<body oncontextmenu="return false;">
  <div class="container">
    <h2>Central de Pedidos</h2>
    <div class="buttons">
      <button type="button" onclick="window.location.href='/pedidoextra/'">Pedido Extra</button>
      <button type="button" onclick="window.location.href='/pedidomensal/'">Pedido Mensal</button>
      <button type="button" onclick="window.location.href='/calculadora/'">Calculadora</button>
    </div>
  </div>

  <footer>
    © 2025. Todos os direitos reservados.
  </footer>

<script>
/* Seus scripts de bloqueio de teclas e mouse */
</script>
</body>
</html>
