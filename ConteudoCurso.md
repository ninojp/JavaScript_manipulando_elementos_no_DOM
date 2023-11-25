# Curso Alura de JavaScript: manipulando elementos no DOM

## Aula 01 - Iniciando o Projeto Fokus

### Aula 01 - Apresentação - Video 1

Nesta aula do curso de JavaScript: manipulando elementos no DOM, foi apresentado o projeto Fokus, inspirado na técnica Pomodoro. O objetivo do curso é aprender a manipular o DOM, que é uma representação em memória de um documento HTML. Durante o projeto, são feitas alterações nos elementos da página ao clicar no botão "Descanso curto" e ao escolher "Começar" ou "Pausar" no cronômetro. É necessário ter conhecimentos prévios de HTML, CSS, funções e métodos do JavaScript para acompanhar o curso.

### Aula 01 - Conhecendo métodos do DOM - Video 2

Nesta aula, o instrutor introduziu o conceito de manipulação de elementos no DOM (Document Object Model) e apresentou alguns métodos para capturar elementos HTML na tela. Ele mostrou como identificar e capturar botões no projeto usando os métodos querySelector(), querySelectorAll(), getElementsByClassName() e getElementById(). Além disso, explicou o que é o DOM e como ele organiza os elementos em uma hierarquia de nós. O objetivo do curso é utilizar JavaScript puro para manipular os elementos no DOM.

### Aula 01 - Alterando data attributes - Video 3

Nesta aula, o instrutor aborda a implementação de um projeto relacionado à alteração de elementos na tela com base em diferentes cenários de temporizadores. O vídeo começa explicando como alterar os atributos de dados (data attributes) em um arquivo HTML e CSS para modificar a cor de fundo da página. Em seguida, é mostrado como adicionar interatividade à página usando JavaScript, através do uso de eventos de clique e do método setAttribute(). O instrutor também menciona a importância do uso do atributo defer ao carregar arquivos JavaScript na página. Por fim, é proposto um desafio para o espectador implementar a mudança de cor de fundo ao clicar em um botão específico. O vídeo termina com a promessa de que no próximo vídeo serão abordadas alterações de imagens.

### Aula 01 - Para saber mais: EventListeners

O que é DOM? DOM é a sigla para Document Object Model (Modelo de Objeto de Documento) e é uma forma padronizada de representar e interagir com objetos em documentos HTML e XML. O DOM representa a estrutura de um documento através de uma árvore de objetos, onde cada objeto representa uma parte do documento.  
O que é um Evento no DOM?
Pense nisso como sinais que o navegador envia quando algo acontece - como um usuário que clica em um botão em sua página web.  
O Método addEventListener.  
Ele é um método disponível para todos os elementos HTML e permite que registremos funções (callbacks) que serão chamadas quando um evento específico ocorrer.  
A sintaxe básica é a seguinte:  
elemento.addEventListener(evento, callback);  

- elemento: É o elemento HTML ao qual queremos associar o evento.
- evento: É uma string que representa o tipo de evento que desejamos capturar.
- callback: É a função que será chamada quando o evento ocorrer.

### Aula 01 Conclusão - Nessa aula, você aprendeu como

Iniciar a manipulação no DOM: Entendemos o que é o DOM (Document Object Model) e como ele representa a árvore de nós e objetos;

Trabalhar com Elementos no DOM: Aprendemos a manipular elementos no DOM usando JavaScript, especificamente nos concentrando na manipulação de botões;

Usar Seletores: Dominamos o uso de vários seletores e métodos, como querySelector, querySelectorAll, getElementsByClassName e getElementById, para selecionar elementos no DOM;

Diferenciar o DOM vs Document: Compreendemos as diferenças entre o Document e o DOM; o Document é um objeto global que representa o HTML, enquanto o DOM é uma representação conjunta de vários elementos;

Criar variáveis para elementos HTML: Aprendemos como criar uma variável para representar um elemento HTML em JavaScript.

## Aula 02 - Manipulando Elementos da tela

### Aula 02 - Alterando imagens - Video 1

Nesta aula, o instrutor ensina como alterar imagens no DOM. Ele mostra como referenciar a tag <img> no HTML e alterar o caminho da imagem usando JavaScript. Ele utiliza o método document.querySelector() para selecionar a tag <img> pela classe app__image e cria uma nova variável chamada banner. Em seguida, ele mostra como alterar a imagem dentro do evento de clique usando o método setAttribute(). Ele utiliza o evento de clique para alterar a imagem para a imagem verde quando o botão "Foco" é clicado, para a imagem azul quando o botão "Descanso curto" é clicado e para a imagem azul quando o botão "Descanso longo" é clicado. O instrutor também menciona que os addEventListener() estão começando a ter códigos repetidos e que isso será refatorado na próxima aula.

### Aula 02 - Para saber mais: trabalhando com atributos

getAttribute:  
O método getAttribute é usado para obter o valor de um atributo específico de um elemento HTML. Ele recebe um argumento, que é o nome do atributo que desejamos recuperar o valor.

setAttribute:
O método setAttribute é usado para definir ou modificar o valor de um atributo em um elemento HTML. Ele aceita dois argumentos: o primeiro é o nome do atributo que queremos definir ou modificar, e o segundo é o valor que queremos atribuir a esse atributo. Se o atributo já existir, o método setAttribute irá sobrescrevê-lo; caso contrário, ele criará um novo atributo.

hasAttribute:
O método hasAttribute é usado para verificar se um elemento possui um atributo específico. Ele recebe um argumento, que é o nome do atributo que queremos verificar. O método retornará true se o atributo existir e false se o atributo não estiver presente.

removeAttribute:
O método removeAttribute é usado para remover um atributo específico de um elemento HTML. Ele recebe um argumento, que é o nome do atributo que desejamos remover.

### Aula 02 - Separando funções e métodos - Video 2

Nesta aula, o instrutor continua o projeto Fokus, que consiste em alterar imagens e cores de fundo de uma página web. Ele percebe que há linhas de código repetidas dentro de cada addEventListener(), o que torna o código menos eficiente. Para resolver esse problema, o instrutor propõe separar as funções e métodos em uma função chamada alterarContexto(). A função alterarContexto() é criada na linha 22 do arquivo script.js e recebe a variável html com o método setAttribute() para definir os parâmetros data-contexto e contexto. Em seguida, a variável banner também é chamada com o método setAttribute() para definir o atributo src e o contexto. Por fim, o instrutor ajusta os métodos addEventListener() para passar o contexto para a função alterarContexto().

### Aula 02 - Alterando texto da página - Video 3

Nesta aula, o instrutor continua o projeto Fokus, que consiste em alterar o texto exibido na tela principal da página. Ele mostra como encontrar a tag <h1> no código HTML usando o VS Code e como criar uma variável para referenciá-la no JavaScript. A mudança de texto é feita quando houver um evento de clique nos botões "Descanso curto" e "Descanso longo" do temporizador. O instrutor explica como usar o método innerHTML para alterar o texto da tag <h1>. Ele também mostra como adicionar as tags <strong> para destacar partes do texto. O próximo passo do projeto será alterar o estilo dos botões de acordo com o contexto selecionado.

### Aula 02 - Você finalizou a segunda aula. E nela você aprendeu como

Alterar textos HTML com innerHTML: Aprendemos a alterar estrutura de conteúdo HTML com textos, tags e classes;
Utilizar o método switch: Aplicamos o método switch para alternar contextos e alterar a exibição de textos de acordo com o contexto;
Refatorar o código: Identificamos linhas de código repetidas e refatoramos o código criando a primeira função do projeto alterarContexto.

## Aula 03 - Aplicando áudios e estilos

### Aula 03 - Adicionando e removendo classes - Video 1

Nesta aula, o instrutor ensina como alterar o estilo dos botões em um projeto utilizando HTML, CSS e JavaScript. É mostrado como adicionar a classe "active" aos botões quando são clicados, utilizando o método ".classList.add('active')". Também é explicado como remover a classe "active" dos outros botões quando um deles é clicado, para que apenas um botão fique ativo por vez, utilizando o método ".classList.remove('active')". O instrutor menciona que o método ".classList" possui outras funcionalidades, como ".toggle()" e ".contains()", que serão abordadas em um próximo vídeo.

### Aula 03 - Para saber mais: manipulando classes com ClassList

O classList  
O classList é uma propriedade do JavaScript que representa uma lista de classes CSS. Ele fornece métodos que facilitam a adição, remoção e verificação de classes, tornando a manipulação de classes CSS mais eficiente e menos suscetível a erros de programação.

Adicionando uma classe.add()  
Para adicionar uma classe a um elemento HTML, podemos usar o método add() do classList. Este método aceita o nome da classe como argumento e adiciona a classe ao elemento, se ela ainda não estiver presente.

Removendo uma classe.remove()  
Para remover uma classe de um elemento HTML, podemos utilizar o método remove() do classList. Este método aceita o nome da classe como argumento e remove a classe do elemento, se ela estiver presente.  

Alternando uma classe.toggle()  
O método toggle() do classList permite alternar uma classe em um elemento. Se a classe já estiver presente no elemento, o método a remove; caso contrário, ele a adiciona

Verificando se uma classe.contains() está presente  
Para verificar se uma classe específica está associada a um elemento, podemos usar o método contains() do classList

Manipulando várias classes simultaneamente  
É possível adicionar ou remover várias classes de uma vez usando o método add() ou remove() passando vários argumentos separados por vírgula.

### Aula 03 - Inserindo objeto de áudio - Video 2

Nesta aula, aprendemos a inserir e manipular um arquivo de áudio em uma página web. O objetivo é reproduzir o áudio quando o usuário clicar em um input específico. Utilizamos o método document.querySelector('#alternar-musica') para acessar o input de música e a classe Audio para criar o objeto de áudio. Criamos um evento change para controlar o input e reproduzir ou pausar a música. Também aprendemos a utilizar a propriedade loop para reproduzir a música em looping.

### Aula 03 - Para saber mais: utilizando áudio em páginas da web

O objeto ‘Audio’ é uma parte do HTML5 e fornece uma interface fácil e poderosa para reproduzir e controlar arquivos de áudio em tempo real. Que tal explorar o uso, entendendo como criar, controlar, reproduzir e estilizar áudio em uma página da web?

Criando um Objeto ‘Audio’
Para criar um novo objeto ‘Audio’, podemos simplesmente usar a seguinte sintaxe:  
const audioElement = new Audio('caminho/do/arquivo-de-audio.mp3');

Controles básicos de áudio
Após criar um objeto ‘Audio’, podemos controlar sua reprodução e outras propriedades usando métodos e propriedades disponíveis.

- play(): inicia a reprodução do áudio;
- pause(): pausa a reprodução do áudio;
- currentTime: propriedade que retorna ou define a posição atual de reprodução do áudio, em segundos;
- volume: propriedade que retorna ou define o nível de volume do áudio, variando de 0 a 1.

### Aula 03 Conclusão - E nela você aprendeu como

Ativar e desativar áudio com input Checkbox: Entendemos como podemos ativar e desativar um arquivo de áudio na nossa página com a ajuda do input Checkbox;
Criar um objeto de áudio: Aprendemos a criar uma instância da classe de áudio usando a palavra-chave 'new';
Usar propriedades e métodos de áudio: Usamos a propriedade 'paused' e os métodos 'play()' e 'pause()' para controlar a reprodução do áudio;
Configurar áudio para loop: Fizemos com que o áudio fique em loop contínuo ao definir a propriedade "loop" para "true".

## Aula 04 - Desenvolvendo o Temporizador

### Aula 04 - Iniciando o temporizador (setInterval) - Video 1
