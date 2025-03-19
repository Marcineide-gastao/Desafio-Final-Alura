// O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes
let amigos = [];

// Função para adicionar nomes
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim(); // Remove os espaços em branco

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    // Adicionar nome ao array (Array)
    amigos.push(nome);

    // Limpar o input
    input.value = "";

    // Atualizar a lista na tela
    mostrarLista();
}

// Função para mostrar os nomes na lista
function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpar a lista antes de atualizar

    amigos.forEach((nome) => {
        const li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

// Função para sortear um amigo e limpar a lista
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }

    // Escolher um nome aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar o resultado com o texto "Seu amigo secreto é:"
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li><strong>Seu amigo secreto é:</strong> ${amigoSorteado}</li>`;

    // Limpar o array e a lista na tela
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
}
