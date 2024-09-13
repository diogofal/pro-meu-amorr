let musicas = [
    {titulo:'Cheia de Vida', artista:'Charlie Brown Jr', source:'Cheia de Vida.mp3', img:'Cheia de Vida.png'},
    {titulo:'Out of My League', artista:'Tibz and The Tantrums', source:'Out of My League.mp3', img:'Out of My League.png'},
    {titulo:'Dona do Meu Pensamento', artista:'Charlie Brown Jr', source:'Dona do Meu Pensamento.mp3', img:'Dona do Meu Pensamento.png'},
    {titulo:'Just the Way You Are', artista:'Bruno Mars', source:'Just the Way You Are.mp3', img:'Just the Way You Are.png'},
    {titulo:'Vem Ser Minha', artista:'Charlie Brown Jr', source:'Vem Ser Minha.mp3', img:'Cheia de Vida.png'},
    {titulo:'My Kind of Woman', artista:'Mac DeMarco', source:'My Kind of Woman.mp3', img:'My Kind of Woman.png'},
    {titulo:'I Feel So Good Today', artista:'Charlie Brown Jr', source:'I Feel So Good Today.mp3', img:'I Feel So Good Today.png'},
    {titulo:'Que Sorte A Nossa', artista:'Matheus & Kauan', source:'Que Sorte A Nossa.mp3', img:'Que Sorte A Nossa.png'},
    {titulo:'Uma Criança Com Seu Olhar', artista:'Charlie Brown Jr', source:'Uma Criança Com Seu Olhar.mp3', img:'Uma Criança Com Seu Olhar.png'},
    {titulo:'Something About You', artista:'Eyedress, Dent May', source:'Something About You.mp3', img:'Something About You.png'},
    {titulo:'20191009 I Like Her', artista:'Mac DeMarco', source:'I Like Her.mp3', img:'I Like Her.png'},
    {titulo:'Longe De Você', artista:'Charlie Brown Jr', source:'Longe De Você.mp3', img:'Longe De Você.png'},
    {titulo:'Princesinha Mandona', artista:'Zé Neto & Cristiano', source:'Princesinha Mandona.mp3', img:'Princesinha Mandona.png'},
    {titulo:'Body Dysmorphia', artista:'Eyedress', source:'Body Dysmorphia.mp3', img:'Body Dysmorphia.png'},

];

// INICIO
let musica = document.querySelector('audio');
let musicaIndex = 0;

let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');
let imagem = document.querySelector('img');
let tempoDecorrido = document.querySelector('.tempo .inicio');
let duracaoMusica = document.querySelector('.tempo .fim');

nomeMusica.textContent = musicas[musicaIndex].titulo;
nomeArtista.textContent = musicas[musicaIndex].artista;
imagem.setAttribute('src', musicas[musicaIndex].img);


// EVENTOS
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    musicaIndex--; 
    if (musicaIndex < 0){ // QUANTIDADE DE MÚSICA
        musicaIndex = 13;
    }
    renderizarMusica(musicaIndex);
});

document.querySelector('.proximo').addEventListener('click', () => {
    musicaIndex++;
    if (musicaIndex > 13){ // QUANTIDADE DE MÚSICA
        musicaIndex = 0;
    }
    renderizarMusica(musicaIndex);
});

// FUNÇÕES

function renderizarMusica(musicaIndex){
    musica.setAttribute('src', musicas[musicaIndex].source);

    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[musicaIndex].titulo;
        nomeArtista.textContent = musicas[musicaIndex].artista;
        imagem.src = musicas[musicaIndex].img;
    
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });

    document.body.append(musica);
}

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-play').style.display = 'none';
    document.querySelector('.botao-pause').style.display = 'block';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-play').style.display = 'block';
    document.querySelector('.botao-pause').style.display = 'none';
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;

    if (campoSegundos < 10){
        campoSegundos = '0'+ campoSegundos;
    }
    return `${campoMinutos}:${campoSegundos}`;
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration)*100) + '%';
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}
