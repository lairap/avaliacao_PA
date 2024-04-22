// const menuOpen = document.getElementById('menu-open');
// const menuClose = document.getElementById('menu-close');
// const sidebar = document.querySelector('.container .sidebar');

// menuOpen.addEventListener('click', () => sidebar.style.left = '0');

// menuClose.addEventListener('click', () => sidebar.style.left = '-100%'); 

// Função para carregar o JSON e criar os cards

function buscar() {
    const texto = document.getElementById('texto-buscar').value.toLowerCase();
    const cardContainer = document.getElementById('card-container');
  
    // Limpa resultados anteriores
    cardContainer.innerHTML = '';
    
fetch('musicas.json')
    .then(response => response.json())
    .then(data => {
      // Percorre o JSON e verifica se o texto corresponde ao nome da música ou do artista
      for (const key in data) {
        const musica = data[key].musica;
        if (
          musica.nome.toLowerCase().includes(texto) ||
          musica.artista.toLowerCase().includes(texto)
        ) {
          // Cria um novo card
          const card = document.createElement('section');
          card.className = 'card';
          
          // Adiciona a imagem do álbum ao card
          const cardImg = document.createElement('section');
          cardImg.className = 'card-img';
          cardImg.innerHTML = `<img src="${musica.album.imagem}" alt="Capa do álbum">`;
          card.appendChild(cardImg);
          
          // Adiciona o texto da música e do artista ao card
          const cardText = document.createElement('section');
          cardText.className = 'card-text';
          cardText.innerHTML = `<h3 id="titulo">${musica.nome}</h3><p id="artista">${musica.artista}</p>`;
          card.appendChild(cardText);
          
          // Adiciona o player de música ao card
          const musicPlayer = document.createElement('section');
          musicPlayer.className = 'music-player';
          const audioPlayer = document.createElement('audio');
          audioPlayer.className = 'audioPlayer';
          audioPlayer.controls = true;
          const source = document.createElement('source');
          source.src = musica.mp3;
          source.type = 'audio/mpeg';
          audioPlayer.appendChild(source);
          musicPlayer.appendChild(audioPlayer);
          card.appendChild(musicPlayer);
          
          // Adiciona o card ao container de cards
          cardContainer.appendChild(card);
        }
      }
    })
    .catch(error => {
      console.error('Erro ao carregar o JSON:', error);
    });
}

// carrega os dados das músicas do JSON e cria os cards
function loadMusicDataAndCreateRandomCards() {
  // Carregar o arquivo JSON das músicas
  fetch('musicas.json')
      .then(response => response.json())
      .then(data => {
          // Extrair as músicas do arquivo JSON
          const musicas = Object.values(data).map(item => item.musica);

          // faz uma lista com índices aleatórios
          const randomIndexes = getRandomIndexes(musicas.length, 9);
          // Filtra as músicas para pegar apenas as nove correspondentes aos índices aleatórios
          const randomMusicas = randomIndexes.map(index => musicas[index]);

          // cria os cards com musicas aleatorias
          createMusicCards(randomMusicas);
      })
      .catch(error => {
          console.error('Erro ao carregar o JSON de músicas:', error);
      });
}

// Função para adicionar aleatorios de música na página (funcao de criar cards e a mesma da de cima)
function createMusicCards(data) {
  // Selecionar o contêiner onde os cards serão adicionados
  var cardContainer = document.getElementById("card-container");

  data.forEach(musica => {
      // Cria o card
      const card = document.createElement('section');
      card.className = 'card';

      // Adiciona a imagem do álbum ao card
      const cardImg = document.createElement('section');
      cardImg.className = 'card-img';
      cardImg.innerHTML = `<img src="${musica.album.imagem}" alt="Capa do álbum">`;
      card.appendChild(cardImg);

      // Adiciona o nome da música e do artista ao card
      const cardText = document.createElement('section');
      cardText.className = 'card-text';
      cardText.innerHTML = `<h3>${musica.nome}</h3><p>${musica.artista}</p>`;
      card.appendChild(cardText);

      // // Adiciona a informação de favorito ao card
      // const cardFavorite = document.createElement('section');
      // cardFavorite.className = 'card-favorite';
      // cardFavorite.innerHTML = `<span class="material-symbols-outlined ${musica.favorito ? 'favorito' : ''}">star</span>`;
      // // Adicionando evento de clique para marcar/desmarcar como favorito
      // cardFavorite.addEventListener('click', () => toggleFavorite(musica));
      // card.appendChild(cardFavorite);

      // Adiciona o player de música ao card
      const musicPlayer = document.createElement('section');
      musicPlayer.className = 'music-player';
      const audioPlayer = document.createElement('audio');
      audioPlayer.className = 'audioPlayer';
      audioPlayer.controls = true;
      const source = document.createElement('source');
      source.src = musica.mp3;
      source.type = 'audio/mpeg';
      audioPlayer.appendChild(source);
      musicPlayer.appendChild(audioPlayer);
      card.appendChild(musicPlayer);

      // Adiciona o card ao contêiner
      cardContainer.appendChild(card);
  });
}

// Função para obter uma lista de índices aleatórios únicos
function getRandomIndexes(maxIndex, count) {
  const indexes = [];
  while (indexes.length < count) {
      const randomIndex = Math.floor(Math.random() * maxIndex);
      if (!indexes.includes(randomIndex)) {
          indexes.push(randomIndex);
      }
  }
  return indexes;
}

window.onload = loadMusicDataAndCreateRandomCards;