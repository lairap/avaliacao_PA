// Carregar as músicas ao carregar a página
window.addEventListener('load', carregarMusicas);

// Função para filtrar as músicas de acordo com o texto digitado
function filtrarMusicas() {
    const textoBusca = document.getElementById('texto-buscar').value.toLowerCase();
    const resultadoBusca = document.getElementById('resultado-busca');
    const cardContainer = document.getElementById('card-container');

    // Limpar o conteúdo anterior
    resultadoBusca.innerHTML = '';

    // Filtrar as músicas
    const musicasFiltradas = musicas.filter(musica => {
        return musica.nome.toLowerCase().includes(textoBusca) || musica.artista.toLowerCase().includes(textoBusca);
    });

    // Mostrar as músicas filtradas
    musicasFiltradas.forEach(musica => {
        const musicaHTML = `
            <div class="music-item" onclick="selecionarMusica('${musica.nome}', '${musica.mp3}')">
                <p>${musica.nome} - ${musica.artista}</p>
            </div>
        `;
        resultadoBusca.innerHTML += musicaHTML;
    });

    // Esconder ou mostrar a seção de busca de acordo com o resultado
    if (textoBusca === '') {
        resultadoBusca.style.display = 'none';
        cardContainer.style.display = 'block';
    } else {
        resultadoBusca.style.display = 'block';
        cardContainer.style.display = 'none';
    }
}

// Função para selecionar uma música e carregar no player
function selecionarMusica(nome, mp3) {
    const audioPlayer = document.getElementById('audioPlayer');
    const source = document.createElement('source');
    source.src = mp3;
    audioPlayer.innerHTML = '';
    audioPlayer.appendChild(source);
    audioPlayer.load();
}

// Exemplo de lista de músicas (substitua isso pelo seu JSON)
const musicas = [
    {
        nome: "Meditação Guiada 5 Minutos",
        artista: "Yoga Mudra Raissa Zoccal",
        mp3: "musicas/MEDITAÇÃOGUIADA5MINUTOS_RÁPIDOEEFICAZBOMDEMAIS-YogaMudraRaissaZoccal.mp3"
    },
    {
        nome: "Autoconfiança, Autoestima e Perseverança",
        artista: "Yoga Mudra Raissa Zoccal",
        mp3: "musicas/AUTOCONFIANÇAAUTOESTIMAEPERSEVERANÇA-YogaMudraRaissaZoccal.mp3"
    }
];
