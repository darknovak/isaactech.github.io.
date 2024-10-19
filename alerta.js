// Função para verificar o status da conexão
function verificarConexao() {
    if (navigator.onLine) {
        alert("Você está online.");
    } else {
        alert("Você está offline.");
    }
}

// Verificar a conexão ao carregar a página
window.addEventListener('load', verificarConexao);

// Adicionar ouvintes de eventos para alterações de status
window.addEventListener('online', () => {
    alert("Você voltou a estar online.");
});

window.addEventListener('offline', () => {
    alert("Você está offline.");
});

