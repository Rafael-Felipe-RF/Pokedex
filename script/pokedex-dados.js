const pokemons = [
  {
    numero: "0001",
    nome: "Bulbasaur",
    classe: "pokemon-planta",
    dataTipo: "planta venenoso",
    imagem: "../imagens/pokemons/001-Bulbasauro.png",
    alt: "Pokémon Bulbasaur",
    tipos: [
      { nome: "Planta", classe: "but-planta", link: "../pokemons/planta.html" },
      { nome: "Venenoso", classe: "but-veneno", link: "../pokemons/venenoso.html" }
    ],
    descricao: "Por algum tempo após o nascimento, ele usa os nutrientes contidos na semente em suas costas para crescer."
  },
  {
    numero: "0002",
    nome: "Ivysaur",
    classe: "pokemon-planta",
    dataTipo: "planta venenoso",
    imagem: "../imagens/pokemons/002-Ivissauro.png",
    alt: "Pokémon Ivysaur",
    tipos: [
      { nome: "Planta", classe: "but-planta", link: "../pokemons/planta.html" },
      { nome: "Venenoso", classe: "but-veneno", link: "../pokemons/venenoso.html" }
    ],
    descricao: "Quanto mais luz solar Ivysaur recebe, mais força surge dentro dele, permitindo que o broto em suas costas cresça."
  },
  {
    numero: "0003",
    nome: "Venusaur",
    classe: "pokemon-planta",
    dataTipo: "planta venenoso",
    imagem: "../imagens/pokemons/003-Venassauro.png",
    alt: "Pokémon Venusaur",
    tipos: [
      { nome: "Planta", classe: "but-planta", link: "../pokemons/planta.html" },
      { nome: "Venenoso", classe: "but-veneno", link: "../pokemons/venenoso.html" }
    ],
    descricao: "Enquanto se banha ao sol, consegue converter a luz em energia. Consequentemente, é mais potente no verão."
  },
  {
    numero: "0004",
    nome: "Charmander",
    classe: "pokemon-fogo",
    dataTipo: "fogo",
    imagem: "../imagens/pokemons/004-Charmander.png",
    alt: "Pokémon Charmander",
    tipos: [
      { nome: "Fogo", classe: "but-fogo", link: "../pokemons/fogo.html" }
    ],
    descricao: "A chama em sua cauda demonstra a força de sua energia vital. Se Charmander estiver fraco, a chama também arderá fracamente."
  },
  {
    numero: "0005",
    nome: "Charmeleon",
    classe: "pokemon-fogo",
    dataTipo: "fogo",
    imagem: "../imagens/pokemons/005-Charmeleon.png",
    alt: "Pokémon Charmeleon",
    tipos: [
      { nome: "Fogo", classe: "but-fogo", link: "../pokemons/fogo.html" }
    ],
    descricao: "Quando balança sua cauda flamejante, a temperatura ao seu redor sobe cada vez mais, atormentando seus oponentes."
  },
  {
    numero: "0006",
    nome: "Charizard",
    classe: "pokemon-fogo",
    dataTipo: "fogo voador",
    imagem: "../imagens/pokemons/006-Charizard.png",
    alt: "Pokémon Charizard",
    tipos: [
      { nome: "Fogo", classe: "but-fogo", link: "../pokemons/fogo.html" },
      { nome: "Voador", classe: "but-voador", link: "../pokemons/voador.html" }
    ],
    descricao: "Se Charizard ficar realmente irritado, a chama na ponta de sua cauda queima em um tom azul claro."
  },
  {
    numero: "0007",
    nome: "Squirtle",
    classe: "pokemon-agua",
    dataTipo: "agua",
    imagem: "../imagens/pokemons/007-Squirtle.png",
    alt: "Pokémon Squirtle",
    tipos: [
      { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" }
    ],
    descricao: "Após o nascimento, suas costas incham e endurecem, formando uma carapaça. Ela expele uma espuma potente pela boca."
  },
  {
    numero: "0008",
    nome: "Wartortle",
    classe: "pokemon-agua",
    dataTipo: "agua",
    imagem: "../imagens/pokemons/008-Wartotle.png",
    alt: "Pokémon Wartortle",
    tipos: [
      { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" }
    ],
    descricao: "A longa cauda peluda de Wartortle é um símbolo de longevidade, por isso este Pokémon é bastante popular entre as pessoas mais velhas."
  },
  {
    numero: "0009",
    nome: "Blastoise",
    classe: "pokemon-agua",
    dataTipo: "agua",
    imagem: "../imagens/pokemons/009-Blastoise.png",
    alt: "Pokémon Blastoise",
    tipos: [
      { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" }
    ],
    descricao: "Ela aumenta deliberadamente seu peso corporal para poder suportar o recuo dos jatos de água que dispara."
  },
  {
    numero: "0010",
    nome: "Caterpie",
    classe: "pokemon-inseto",
    dataTipo: "inseto",
    imagem: "../imagens/pokemons/010-Caterpie.png",
    alt: "Pokémon Caterpie",
    tipos: [
      { nome: "Inseto", classe: "but-inseto", link: "../pokemons/inseto.html" }
    ],
    descricao: "Para se proteger, libera um odor horrível pela antena em sua cabeça para afastar os inimigos."
  },
  {
    numero: "0011",
    nome: "Metapod",
    classe: "pokemon-inseto",
    dataTipo: "inseto",
    imagem: "../imagens/pokemons/011-Metapod.png",
    alt: "Pokémon Metapod",
    tipos: [
      { nome: "Inseto", classe: "but-inseto", link: "../pokemons/inseto.html" }
    ],
    descricao: "Está aguardando o momento certo para evoluir. Por isso permanece imóvel para evitar ataques."
  },
  {
    numero: "0012",
    nome: "Butterfree",
    classe: "pokemon-inseto",
    dataTipo: "inseto voador",
    imagem: "../imagens/pokemons/012-Buterfree.png",
    alt: "Pokémon Butterfree",
    tipos: [
      { nome: "Inseto", classe: "but-inseto", link: "../pokemons/inseto.html" },
      { nome: "Voador", classe: "but-voador", link: "../pokemons/voador.html" }
    ],
    descricao: "Ele adora o néctar das flores e consegue localizar áreas floridas que contenham até mesmo quantidades mínimas de pólen."
  },
  {
    numero: "0013",
    nome: "Weedle",
    classe: "pokemon-inseto",
    dataTipo: "inseto veneno",
    imagem: "../imagens/pokemons/013-Weddle.png",
    alt: "Pokémon Weedle",
    tipos: [
      { nome: "Inseto", classe: "but-inseto", link: "../pokemons/inseto.html" },
      { nome: "Veneno", classe: "but-veneno", link: "../pokemons/venenoso.html" }
    ],
    descricao: "Cuidado com o ferrão afiado em sua cabeça. Ele se esconde na grama e nos arbustos, onde se alimenta de folhas."
  },
  {
    numero: "0014",
    nome: "Kakuna",
    classe: "pokemon-inseto",
    dataTipo: "inseto veneno",
    imagem: "../imagens/pokemons/014-Kakuna.png",
    alt: "Pokémon Kakuna",
    tipos: [
      { nome: "Inseto", classe: "but-inseto", link: "../pokemons/inseto.html" },
      { nome: "Veneno", classe: "but-veneno", link: "../pokemons/venenoso.html" }
    ],
    descricao: "Capaz de se mover apenas ligeiramente. Quando ameaçado, pode estender seu ferrão e envenenar seu inimigo."
  },
  {
    numero: "0015",
    nome: "Beedrill",
    classe: "pokemon-inseto",
    dataTipo: "inseto veneno",
    imagem: "../imagens/pokemons/015-Beedril.png",
    alt: "Pokémon Beedrill",
    tipos: [
      { nome: "Inseto", classe: "but-inseto", link: "../pokemons/inseto.html" },
      { nome: "Veneno", classe: "but-veneno", link: "../pokemons/venenoso.html" }
    ],
    descricao: "Possui três ferrões venenosos nas patas dianteiras e na cauda. São usados para golpear repetidamente o inimigo."
  },
  {
    numero: "0016",
    nome: "Pidgey",
    classe: "pokemon-normal",
    dataTipo: "normal voador",
    imagem: "../imagens/pokemons/016-Pidgey.png",
    alt: "Pokémon Pidgey",
    tipos: [
      { nome: "Normal", classe: "but-normal", link: "../pokemons/normal.html" },
      { nome: "Voador", classe: "but-voador", link: "../pokemons/voador.html" }
    ],
    descricao: "Muito dócil. Se atacado, costuma levantar areia para se proteger em vez de revidar."
  },
  {
    numero: "0017",
    nome: "Pidgeotto",
    classe: "pokemon-normal",
    dataTipo: "normal voador",
    imagem: "../imagens/pokemons/017-Pidgeot.png",
    alt: "Pokémon Pidgeotto",
    tipos: [
      { nome: "Normal", classe: "but-normal", link: "../pokemons/normal.html" },
      { nome: "Voador", classe: "but-voador", link: "../pokemons/voador.html" }
    ],
    descricao: "Este Pokémon é cheio de vitalidade. Ele voa constantemente por seu vasto território em busca de presas."
  },
  {
    numero: "0018",
    nome: "Pidgeot",
    classe: "pokemon-normal",
    dataTipo: "normal voador",
    imagem: "../imagens/pokemons/018-Pidgeoto.png",
    alt: "Pokémon Pidgeot",
    tipos: [
      { nome: "Normal", classe: "but-normal", link: "../pokemons/normal.html" },
      { nome: "Voador", classe: "but-voador", link: "../pokemons/voador.html" }
    ],
    descricao: "Este Pokémon voa à velocidade de Mach 2, em busca de presas. Suas grandes garras são temidas como armas cruéis."
  },
  {
    numero: "0019",
    nome: "Rattata",
    classe: "pokemon-normal",
    dataTipo: "normal",
    imagem: "../imagens/pokemons/019-Rattata.png",
    alt: "Pokémon Rattata",
    tipos: [
      { nome: "Normal", classe: "but-normal", link: "../pokemons/normal.html" }
    ],
    descricao: "Mastiga qualquer coisa com suas presas. Se você vir um, pode ter certeza de que outros 40 vivem na área."
  },
  {
    numero: "0020",
    nome: "Raticate",
    classe: "pokemon-normal",
    dataTipo: "normal",
    imagem: "../imagens/pokemons/020-Raticate.png",
    alt: "Pokémon Raticate",
    tipos: [
      { nome: "Normal", classe: "but-normal", link: "../pokemons/normal.html" }
    ],
    descricao: "Suas patas traseiras são palmadas. Elas funcionam como nadadeiras, permitindo que ele nade em rios e cace presas."
  },
  {
  numero: "0021",
  nome: "Spearow",
  classe: "pokemon-normal",
  dataTipo: "normal voador",
  imagem: "../imagens/pokemons/021-Spearow.png",
  alt: "Pokémon Spearow",
  tipos: [
    { nome: "Normal", classe: "but-normal", link: "../pokemons/normal.html" },
    { nome: "Voador", classe: "but-voador", link: "../pokemons/voador.html" }
  ],
  descricao: "Inábil para voar alto. No entanto, consegue voar muito rápido para proteger seu território."
},
{
  numero: "0022",
  nome: "Fearow",
  classe: "pokemon-normal",
  dataTipo: "normal voador",
  imagem: "../imagens/pokemons/022-Fearow.png",
  alt: "Pokémon Fearow",
  tipos: [
    { nome: "Normal", classe: "but-normal", link: "../pokemons/normal.html" },
    { nome: "Voador", classe: "but-voador", link: "../pokemons/voador.html" }
  ],
  descricao: "Um Pokémon que existe há muitos anos. Se pressentir perigo, ele voa alto e para longe instantaneamente."
},
{
  numero: "0023",
  nome: "Ekans",
  classe: "pokemon-venenoso",
  dataTipo: "veneno",
  imagem: "../imagens/pokemons/023-Ekans.png",
  alt: "Pokémon Ekans",
  tipos: [
    { nome: "Veneno", classe: "but-veneno", link: "../pokemons/venenoso.html" }
  ],
  descricao: "Ela consegue destacar livremente a mandíbula para engolir presas grandes inteiras. No entanto, pode ficar pesada demais para se mover."
},
{
  numero: "0024",
  nome: "Arbok",
  classe: "pokemon-venenoso",
  dataTipo: "veneno",
  imagem: "../imagens/pokemons/024-Arbok.png",
  alt: "Pokémon Arbok",
  tipos: [
    { nome: "Veneno", classe: "but-veneno", link: "../pokemons/venenoso.html" }
  ],
  descricao: "O padrão em sua barriga parece ser um rosto assustador. Inimigos fracos fugirão só de ver o padrão."
},
{
  numero: "0025",
  nome: "Pikachu",
  classe: "pokemon-eletrico",
  dataTipo: "eletrico",
  imagem: "../imagens/pokemons/025-Pikachu.png",
  alt: "Pokémon Pikachu",
  tipos: [
    { nome: "Elétrico", classe: "but-eletrico", link: "../pokemons/eletrico.html" }
  ],
  descricao: "Quando se irrita, descarrega imediatamente a energia armazenada nas bolsas em suas bochechas."
},
{
  numero: "0026",
  nome: "Raichu",
  classe: "pokemon-eletrico",
  dataTipo: "eletrico",
  imagem: "../imagens/pokemons/026-Raichu.png",
  alt: "Pokémon Raichu",
  tipos: [
    { nome: "Elétrico", classe: "but-eletrico", link: "../pokemons/eletrico.html" }
  ],
  descricao: "Quando sua eletricidade aumenta, seus músculos são estimulados e ele se torna mais agressivo do que o normal."
},
{
  numero: "0027",
  nome: "Sandshrew",
  classe: "pokemon-terra",
  dataTipo: "terra",
  imagem: "../imagens/pokemons/027-Sandsherew.png",
  alt: "Pokémon Sandshrew",
  tipos: [
    { nome: "Terra", classe: "but-terra", link: "../pokemons/terra.html" }
  ],
  descricao: "Ele cava tocas profundas para viver. Quando em perigo, enrola o corpo para resistir a ataques."
},
{
  numero: "0028",
  nome: "Sandslash",
  classe: "pokemon-terra",
  dataTipo: "terra",
  imagem: "../imagens/pokemons/028-Sandslash.png",
  alt: "Pokémon Sandslash",
  tipos: [
    { nome: "Terra", classe: "but-terra", link: "../pokemons/terra.html" }
  ],
  descricao: "É hábil em atacar com os espinhos nas costas e com suas garras afiadas, enquanto se move rapidamente."
},
{
  numero: "0029",
  nome: "Nidoran♀",
  classe: "pokemon-venenoso",
  dataTipo: "veneno",
  imagem: "../imagens/pokemons/029-Nidoran.png",
  alt: "Pokémon Nidoran",
  tipos: [
    { nome: "Veneno", classe: "but-veneno", link: "../pokemons/venenoso.html" }
  ],
  descricao: "As fêmeas são mais sensíveis aos odores do que os machos. Ao procurar alimento, elas usam seus bigodes para verificar a direção do vento e se manter a favor do vento, evitando predadores."
},
{
  numero: "0030",
  nome: "Nidorina",
  classe: "pokemon-venenoso",
  dataTipo: "veneno",
  imagem: "../imagens/pokemons/030-Nidorina.png",
  alt: "Pokémon Nidorina",
  tipos: [
    { nome: "Veneno", classe: "but-veneno", link: "../pokemons/venenoso.html" }
  ],
  descricao: "O chifre em sua cabeça atrofiou. Acredita-se que isso aconteça para que os filhotes de Nidorina não sejam espetados enquanto a mãe os alimenta."
},
{
  numero: "0031",
  nome: "Nidoqueen",
  classe: "pokemon-venenoso",
  dataTipo: "veneno terra",
  imagem: "../imagens/pokemons/031-Nidoqueen.png",
  alt: "Pokémon Nidorina",
  tipos: [
    { nome: "Veneno", classe: "but-veneno", link: "../pokemons/venenoso.html" },
    { nome: "Terra", classe: "but-terra", link: "../pokemons/terra.html" }
  ],
  descricao: "O chifre em sua cabeça atrofiou. Acredita-se que isso aconteça para que os filhotes de Nidorina não sejam espetados enquanto a mãe os alimenta."
},
{
  numero: "0032",
  nome: "Nidoran♂",
  classe: "pokemon-venenoso",
  dataTipo: "veneno",
  imagem: "../imagens/pokemons/032-Nidoran.png",
  alt: "Pokémon Nidoran",
  tipos: [
    { nome: "Veneno", classe: "but-veneno", link: "../pokemons/venenoso.html" }
  ],
  descricao: "O chifre na testa de um Nidoran macho contém um veneno poderoso. Este é um Pokémon muito cauteloso, sempre atento às suas grandes orelhas."
},
{
  numero: "0033",
  nome: "Nidorino",
  classe: "pokemon-venenoso",
  dataTipo: "veneno",
  imagem: "../imagens/pokemons/033-Nidorino.png",
  alt: "Pokémon Nidorino",
  tipos: [
    { nome: "Veneno", classe: "but-veneno", link: "../pokemons/venenoso.html" }
  ],
  descricao: "Com um chifre mais duro que diamante, este Pokémon anda por aí quebrando pedregulhos em busca de uma pedra da lua."
},
{
  numero: "0034",
  nome: "Nidoking",
  classe: "pokemon-venenoso",
  dataTipo: "veneno terra",
  imagem: "../imagens/pokemons/034-Nidoking.png",
  alt: "Pokémon Nidoking",
  tipos: [
    { nome: "Veneno", classe: "but-veneno", link: "../pokemons/venenoso.html" },
    { nome: "Terra", classe: "but-terra", link: "../pokemons/terra.html" }
  ],
  descricao: "Quando entra em fúria, é impossível controlá-lo. Mas na presença de uma Nidoqueen com quem convive há muito tempo, Nidoking se acalma."
},
{
  numero: "0035",
  nome: "Clefairy",
  classe: "pokemon-fada",
  dataTipo: "fada",
  imagem: "../imagens/pokemons/035-Clefary.png",
  alt: "Pokémon Clefairy",
  tipos: [
    { nome: "Fada", classe: "but-fada", link: "../pokemons/fada.html" }
  ],
  descricao: "Nas noites de lua cheia, os Clefairy se reúnem de todos os lugares e dançam. Banhar-se ao luar os faz flutuar."
},
{
  numero: "0036",
  nome: "Clefable",
  classe: "pokemon-fada",
  dataTipo: "fada",
  imagem: "../imagens/pokemons/036-Clefable.png",
  alt: "Pokémon Clefable",
  tipos: [
    { nome: "Fada", classe: "but-fada", link: "../pokemons/fada.html" }
  ],
  descricao: "Um Pokémon fada tímido e raramente visto, que foge e se esconde assim que percebe a presença de pessoas."
},
{
  numero: "0037",
  nome: "Vulpix",
  classe: "pokemon-fogo",
  dataTipo: "fogo",
  imagem: "../imagens/pokemons/037-Vulpix.png",
  alt: "Pokémon Vulpix",
  tipos: [
    { nome: "Fogo", classe: "but-fogo", link: "../pokemons/fogo.html" }
  ],
  descricao: "Se for atacado por um inimigo mais forte do que ele, finge estar ferido para enganá-lo e foge."
},
{
  numero: "0038",
  nome: "Ninetales",
  classe: "pokemon-fogo",
  dataTipo: "fogo",
  imagem: "../imagens/pokemons/038-Ninetales.png",
  alt: "Pokémon Ninetales",
  tipos: [
    { nome: "Fogo", classe: "but-fogo", link: "../pokemons/fogo.html" }
  ],
  descricao: "Algumas lendas afirmam que cada uma de suas nove caudas possui um tipo único de poder místico especial."
},
{
  numero: "0039",
  nome: "Jigglypuff",
  classe: "pokemon-fada",
  dataTipo: "fada normal",
  imagem: "../imagens/pokemons/039-Jigglypuff.png",
  alt: "Pokémon Jigglypuff",
  tipos: [
    { nome: "Normal", classe: "but-normal", link: "../pokemons/normal.html" },
    { nome: "Fada", classe: "but-fada", link: "../pokemons/fada.html" }
  ],
  descricao: "Quando seus enormes olhos vacilam, ela canta uma melodia misteriosamente suave que embala seus inimigos para dormir."
},
{
  numero: "0040",
  nome: "Wigglytuff",
  classe: "pokemon-fada",
  dataTipo: "fada normal",
  imagem: "../imagens/pokemons/040-Wigglytuff.png",
  alt: "Pokémon Wigglytuff",
  tipos: [
    { nome: "Normal", classe: "but-normal", link: "../pokemons/normal.html" },
    { nome: "Fada", classe: "but-fada", link: "../pokemons/fada.html" }
  ],
  descricao: "Possui uma pelagem muito fina. Tome cuidado para não irritá-lo, ou ele pode inflar constantemente e desferir um golpe de corpo."
},
{
  numero: "0041",
  nome: "Zubat",
  classe: "pokemon-venenoso",
  dataTipo: "veneno voador",
  imagem: "../imagens/pokemons/041-Zubat.png",
  alt: "Pokémon Zubat",
  tipos: [
    { nome: "Veneno", classe: "but-veneno", link: "../pokemons/venenoso.html" },
    { nome: "Voador", classe: "but-voador", link: "../pokemons/voador.html" }
  ],
  descricao: "Ele emite ondas ultrassônicas pela boca para verificar o ambiente ao redor. Mesmo em cavernas apertadas, Zubat voa com destreza."
},
{
  numero: "0042",
  nome: "Golbat",
  classe: "pokemon-venenoso",
  dataTipo: "veneno voador",
  imagem: "../imagens/pokemons/042-Golbat.png",
  alt: "Pokémon Golbat",
  tipos: [
    { nome: "Veneno", classe: "but-veneno", link: "../pokemons/venenoso.html" },
    { nome: "Voador", classe: "but-voador", link: "../pokemons/voador.html" }
  ],
  descricao: "Adora beber o sangue de outras criaturas. Diz-se que, se encontra outros da sua espécie com fome, por vezes partilha o sangue que recolheu."
},
{
  numero: "0043",
  nome: "Oddish",
  classe: "pokemon-planta",
  dataTipo: "planta veneno",
  imagem: "../imagens/pokemons/043-Oddysh.png",
  alt: "Pokémon Oddish",
  tipos: [
    { nome: "Planta", classe: "but-planta", link: "../pokemons/planta.html" },
    { nome: "Veneno", classe: "but-veneno", link: "../pokemons/venenoso.html" }
  ],
  descricao: "Seu nome científico é Oddium wanderus. Diz-se que, ao cair da noite, ela consegue percorrer distâncias de até 300 metros, caminhando sobre suas duas raízes."
},
{
  numero: "0044",
  nome: "Gloom",
  classe: "pokemon-planta",
  dataTipo: "planta veneno",
  imagem: "../imagens/pokemons/044-Gloom.png",
  alt: "Pokémon Gloom",
  tipos: [
    { nome: "Planta", classe: "but-planta", link: "../pokemons/planta.html" },
    { nome: "Veneno", classe: "but-veneno", link: "../pokemons/venenoso.html" }
  ],
  descricao: "O fluido que escorre de sua boca não é baba. É um néctar usado para atrair presas."
},
{
  numero: "0045",
  nome: "Vileplume",
  classe: "pokemon-planta",
  dataTipo: "planta veneno",
  imagem: "../imagens/pokemons/045-Vileplume.png",
  alt: "Pokémon Vileplume",
  tipos: [
    { nome: "Planta", classe: "but-planta", link: "../pokemons/planta.html" },
    { nome: "Veneno", classe: "but-veneno", link: "../pokemons/venenoso.html" }
  ],
  descricao: "O botão desabrocha com um estrondo. Em seguida, começa a espalhar pólen alergênico e venenoso."
},
{
  numero: "0046",
  nome: "Paras",
  classe: "pokemon-inseto",
  dataTipo: "inseto planta",
  imagem: "../imagens/pokemons/046-Paras.png",
  alt: "Pokémon Paras",
  tipos: [
    { nome: "Planta", classe: "but-planta", link: "../pokemons/planta.html" },
    { nome: "Inseto", classe: "but-inseto", link: "../pokemons/inseto.html" }
  ],
  descricao: "Escava tocas no solo para roer as raízes das árvores. Os cogumelos em suas costas absorvem a maior parte dos nutrientes."
},
{
  numero: "0047",
  nome: "Parasect",
  classe: "pokemon-inseto",
  dataTipo: "inseto planta",
  imagem: "../imagens/pokemons/047-Parasect.png",
  alt: "Pokémon Parasect",
  tipos: [
    { nome: "Planta", classe: "but-planta", link: "../pokemons/planta.html" },
    { nome: "Inseto", classe: "but-inseto", link: "../pokemons/inseto.html" }
  ],
  descricao: "O inseto hospedeiro tem sua energia drenada pelo cogumelo em suas costas. O cogumelo parece ser o responsável por todo o processo mental."
},
{
  numero: "0048",
  nome: "Venonat",
  classe: "pokemon-inseto",
  dataTipo: "inseto veneno",
  imagem: "../imagens/pokemons/048-Venonat.png",
  alt: "Pokémon Venonat",
  tipos: [
    { nome: "Inseto", classe: "but-inseto", link: "../pokemons/inseto.html" },
    { nome: "Veneno", classe: "but-veneno", link: "../pokemons/venenoso.html" }
  ],
  descricao: "O veneno escorre por todo o seu corpo. Ele captura pequenos Pokémon insetos à noite, atraídos pela luz."
},
{
  numero: "0049",
  nome: "Venomoth",
  classe: "pokemon-inseto",
  dataTipo: "inseto veneno",
  imagem: "../imagens/pokemons/049-Venomoth.png",
  alt: "Pokémon Venomoth",
  tipos: [
    { nome: "Inseto", classe: "but-inseto", link: "../pokemons/inseto.html" },
    { nome: "Veneno", classe: "but-veneno", link: "../pokemons/venenoso.html" }
  ],
  descricao: "As asas são cobertas por escamas semelhantes a poeira. Cada vez que bate as asas, libera uma poeira altamente tóxica."
},
{
  numero: "0050",
  nome: "Diglett",
  classe: "pokemon-terra",
  dataTipo: "terra",
  imagem: "../imagens/pokemons/050-Diglett.png",
  alt: "Pokémon Diglett",
  tipos: [
    { nome: "Terra", classe: "but-terra", link: "../pokemons/terra.html" }
  ],
  descricao: "Vive a cerca de um metro de profundidade, onde se alimenta de raízes de plantas. Às vezes, aparece na superfície."
},
{
  numero: "0051",
  nome: "Dugtrio",
  classe: "pokemon-terra",
  dataTipo: "terra",
  imagem: "../imagens/pokemons/051-Dugtrio.png",
  alt: "Pokémon Dugtrio",
  tipos: [
    { nome: "Terra", classe: "but-terra", link: "../pokemons/terra.html" }
  ],
  descricao: "Suas três cabeças se movem separadamente para cima e para baixo, soltando o solo próximo e facilitando a escavação."
},
{
  numero: "0052",
  nome: "Meowth",
  classe: "pokemon-normal",
  dataTipo: "normal",
  imagem: "../imagens/pokemons/052-Meowth.png",
  alt: "Pokémon Meowth",
  tipos: [
    { nome: "Normal", classe: "but-normal", link: "../pokemons/normal.html" }
  ],
  descricao: "Durante o dia, apenas dorme. À noite, patrulha seu território com os olhos brilhando."
},
{
  numero: "0053",
  nome: "Persian",
  classe: "pokemon-normal",
  dataTipo: "normal",
  imagem: "../imagens/pokemons/053-Persian.png",
  alt: "Pokémon Persian",
  tipos: [
    { nome: "Normal", classe: "but-normal", link: "../pokemons/normal.html" }
  ],
  descricao: "Apesar de sua pelagem ter muitos admiradores, é difícil criá-lo como animal de estimação devido ao seu temperamento imprevisível e agressivo."
},
{
  numero: "0054",
  nome: "Psyduck",
  classe: "pokemon-agua",
  dataTipo: "agua",
  imagem: "../imagens/pokemons/054-Psyduck.png",
  alt: "Pokémon Psyduck",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" }
  ],
  descricao: "É constantemente atormentado por dores de cabeça. Quando a dor de cabeça se intensifica, começa a usar poderes misteriosos."
},
{
  numero: "0055",
  nome: "Golduck",
  classe: "pokemon-agua",
  dataTipo: "agua",
  imagem: "../imagens/pokemons/055-Golduck.png",
  alt: "Pokémon Golduck",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" }
  ],
  descricao: "Quando nada a toda velocidade usando seus longos membros palmados, sua testa começa a brilhar de alguma forma."
},
{
  numero: "0056",
  nome: "Mankey",
  classe: "pokemon-lutador",
  dataTipo: "lutador",
  imagem: "../imagens/pokemons/056-Mankey.png",
  alt: "Pokémon Mankey",
  tipos: [
    { nome: "Lutador", classe: "but-lutador", link: "../pokemons/lutador.html" }
  ],
  descricao: "Vive em grupos no topo das árvores. Se perde o seu grupo de vista, fica furioso com a solidão."
},
{
  numero: "0057",
  nome: "Primeape",
  classe: "pokemon-lutador",
  dataTipo: "lutador",
  imagem: "../imagens/pokemons/057-Primape.png",
  alt: "Pokémon Primeape",
  tipos: [
    { nome: "Lutador", classe: "but-lutador", link: "../pokemons/lutador.html" }
  ],
  descricao: "Ele fica furioso se sequer pressentir que alguém está olhando. Persegue qualquer um que cruze seu olhar."
},
{
  numero: "0058",
  nome: "Growlithe",
  classe: "pokemon-fogo",
  dataTipo: "fogo",
  imagem: "../imagens/pokemons/058-Growlithe.png",
  alt: "Pokémon Growlithe",
  tipos: [
    { nome: "Fogo", classe: "but-fogo", link: "../pokemons/fogo.html" }
  ],
  descricao: "Possui uma natureza corajosa e confiável. Enfrenta destemidamente inimigos maiores e mais fortes."
},
{
  numero: "0059",
  nome: "Arcanine",
  classe: "pokemon-fogo",
  dataTipo: "fogo",
  imagem: "../imagens/pokemons/059-Arcanane.png",
  alt: "Pokémon Arcanine",
  tipos: [
    { nome: "Fogo", classe: "but-fogo", link: "../pokemons/fogo.html" }
  ],
  descricao: "Um antigo pergaminho ilustrado mostra que as pessoas ficavam fascinadas com seu movimento enquanto percorria as pradarias."
},
{
  numero: "0060",
  nome: "Poliwag",
  classe: "pokemon-agua",
  dataTipo: "agua",
  imagem: "../imagens/pokemons/060-Poliwag.png",
  alt: "Pokémon Poliwag",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" }
  ],
  descricao: "O redemoinho na barriga é o interior do animal aparecendo através da pele. Ele fica mais visível depois que Poliwag come."
},
{
  numero: "0061",
  nome: "Poliwhirl",
  classe: "pokemon-agua",
  dataTipo: "agua",
  imagem: "../imagens/pokemons/061-Poliwhirl.png",
  alt: "Pokémon Poliwhirl",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" }
  ],
  descricao: "Suas duas patas são bem desenvolvidas. Embora possa viver em terra, prefere viver na água."
},
{
  numero: "0062",
  nome: "Poliwrath",
  classe: "pokemon-agua",
  dataTipo: "agua lutador",
  imagem: "../imagens/pokemons/062-Poliwrat.png",
  alt: "Pokémon Poliwrath",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" },
    { nome: "Lutador", classe: "but-lutador", link: "../pokemons/lutador.html" }
  ],
  descricao: "Apesar de ser habilidoso em um estilo de natação dinâmica que utiliza todos os seus músculos, por algum motivo vive em terra firme."
},
{
  numero: "0063",
  nome: "Abra",
  classe: "pokemon-psiquico",
  dataTipo: "psiquico",
  imagem: "../imagens/pokemons/063-Abra.png",
  alt: "Pokémon Abra",
  tipos: [
    { nome: "Psíquico", classe: "but-psiquico", link: "../pokemons/psiquico.html" }
  ],
  descricao: "Este Pokémon usa seus poderes psíquicos enquanto dorme. O conteúdo dos sonhos de Abra afeta os poderes que o Pokémon utiliza."
},
{
  numero: "0064",
  nome: "Kadabra",
  classe: "pokemon-psiquico",
  dataTipo: "psiquico",
  imagem: "../imagens/pokemons/064-Kadabra.png",
  alt: "Pokémon Kadabra",
  tipos: [
    { nome: "Psíquico", classe: "but-psiquico", link: "../pokemons/psiquico.html" }
  ],
  descricao: "Usando seu poder psíquico, Kadabra levita enquanto dorme. Ele usa sua cauda elástica como travesseiro."
},
{
  numero: "0065",
  nome: "Alakazam",
  classe: "pokemon-psiquico",
  dataTipo: "psiquico",
  imagem: "../imagens/pokemons/065-Alakazam.png",
  alt: "Pokémon Alakazam",
  tipos: [
    { nome: "Psíquico", classe: "but-psiquico", link: "../pokemons/psiquico.html" }
  ],
  descricao: "Possui um nível de inteligência incrivelmente alto. Alguns dizem que Alakazam se lembra de tudo o que lhe acontece, do nascimento à morte."
},
{
  numero: "0066",
  nome: "Machop",
  classe: "pokemon-lutador",
  dataTipo: "lutador",
  imagem: "../imagens/pokemons/066-Machop.png",
  alt: "Pokémon Machop",
  tipos: [
    { nome: "Lutador", classe: "but-lutador", link: "../pokemons/lutador.html" }
  ],
  descricao: "Seu corpo inteiro é composto de músculos. Apesar de ter o tamanho de uma criança humana, consegue arremessar 100 adultos."
},
{
  numero: "0067",
  nome: "Machoke",
  classe: "pokemon-lutador",
  dataTipo: "lutador",
  imagem: "../imagens/pokemons/067-Machoke.png",
  alt: "Pokémon Machoke",
  tipos: [
    { nome: "Lutador", classe: "but-lutador", link: "../pokemons/lutador.html" }
  ],
  descricao: "Seu corpo musculoso é tão poderoso que precisa usar um cinto de economia de energia para conseguir regular seus movimentos."
},
{
  numero: "0068",
  nome: "Machamp",
  classe: "pokemon-lutador",
  dataTipo: "lutador",
  imagem: "../imagens/pokemons/068-Machamp.png",
  alt: "Pokémon Machamp",
  tipos: [
    { nome: "Lutador", classe: "but-lutador", link: "../pokemons/lutador.html" }
  ],
  descricao: "Ele desfere socos com seus quatro braços a uma velocidade estonteante. Consegue lançar 1.000 socos em dois segundos."
},
{
  numero: "0069",
  nome: "Bellsprout",
  classe: "pokemon-planta",
  dataTipo: "planta veneno",
  imagem: "../imagens/pokemons/069-Bellsprout.png",
  alt: "Pokémon Bellsprout",
  tipos: [
    { nome: "Planta", classe: "but-planta", link: "../pokemons/planta.html" },
    { nome: "Veneno", classe: "but-veneno", link: "../pokemons/venenoso.html" }
  ],
  descricao: "Independentemente do que Bellsprout esteja fazendo, se detectar movimento por perto, reagirá imediatamente estendendo seus finos cipós."
},
{
  numero: "0070",
  nome: "Weepinbell",
  classe: "pokemon-planta",
  dataTipo: "planta veneno",
  imagem: "../imagens/pokemons/070-Weepinbel.png",
  alt: "Pokémon Weepinbell",
  tipos: [
    { nome: "Planta", classe: "but-planta", link: "../pokemons/planta.html" },
    { nome: "Veneno", classe: "but-veneno", link: "../pokemons/venenoso.html" }
  ],
  descricao: "Embora esteja cheio de ácido, não derrete porque também exala um fluido protetor."
},
{
  numero: "0071",
  nome: "Victreebel",
  classe: "pokemon-planta",
  dataTipo: "planta veneno",
  imagem: "../imagens/pokemons/071-Victreebel.png",
  alt: "Pokémon Victreebel",
  tipos: [
    { nome: "Planta", classe: "but-planta", link: "../pokemons/planta.html" },
    { nome: "Veneno", classe: "but-veneno", link: "../pokemons/venenoso.html" }
  ],
  descricao: "Uma vez dentro do corpo de Victreebel, até mesmo o objeto mais duro será derretido pelo ácido do Pokémon."
},
{
  numero: "0072",
  nome: "Tentacool",
  classe: "pokemon-agua",
  dataTipo: "agua veneno",
  imagem: "../imagens/pokemons/072-Tentacool.png",
  alt: "Pokémon Tentacool",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" },
    { nome: "Veneno", classe: "but-veneno", link: "../pokemons/venenoso.html" }
  ],
  descricao: "Quando a maré baixa, exemplares de Tentacool desidratados podem ser encontrados na costa."
},
{
  numero: "0073",
  nome: "Tentacruel",
  classe: "pokemon-agua",
  dataTipo: "agua veneno",
  imagem: "../imagens/pokemons/073-Tentacruel.png",
  alt: "Pokémon Tentacruel",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" },
    { nome: "Veneno", classe: "but-veneno", link: "../pokemons/venenoso.html" }
  ],
  descricao: "Nas raras ocasiões em que ocorrem grandes surtos de Tentacruel, todos os Pokémon peixes desaparecem do mar circundante."
},
{
  numero: "0074",
  nome: "Geodude",
  classe: "pokemon-rocha",
  dataTipo: "rocha terra",
  imagem: "../imagens/pokemons/074-Geodude.png",
  alt: "Pokémon Geodude",
  tipos: [
    { nome: "Rocha", classe: "but-rocha", link: "../pokemons/rocha.html" },
    { nome: "Terra", classe: "but-terra", link: "../pokemons/terra.html" }
  ],
  descricao: "Em repouso, parece apenas uma pedra. Mas se você pisar nela sem cuidado, ela vai agitar os punhos furiosamente."
},
{
  numero: "0075",
  nome: "Graveler",
  classe: "pokemon-rocha",
  dataTipo: "rocha terra",
  imagem: "../imagens/pokemons/075-Graveler.png",
  alt: "Pokémon Graveler",
  tipos: [
    { nome: "Rocha", classe: "but-rocha", link: "../pokemons/rocha.html" },
    { nome: "Terra", classe: "but-terra", link: "../pokemons/terra.html" }
  ],
  descricao: "Anda devagar e rola para se mover. Não presta atenção a nenhum objeto que esteja em seu caminho."
},
{
  numero: "0076",
  nome: "Golem",
  classe: "pokemon-rocha",
  dataTipo: "rocha terra",
  imagem: "../imagens/pokemons/076-Golem.png",
  alt: "Pokémon Golem",
  tipos: [
    { nome: "Rocha", classe: "but-rocha", link: "../pokemons/rocha.html" },
    { nome: "Terra", classe: "but-terra", link: "../pokemons/terra.html" }
  ],
  descricao: "Está envolto por uma carapaça dura, tão resistente quanto lajes de rocha. Troca de pele uma vez por ano para crescer."
},
{
  numero: "0077",
  nome: "Ponyta",
  classe: "pokemon-fogo",
  dataTipo: "fogo",
  imagem: "../imagens/pokemons/077-Ponita.png",
  alt: "Pokémon Ponyta",
  tipos: [
    { nome: "Fogo", classe: "but-fogo", link: "../pokemons/fogo.html" }
  ],
  descricao: "Aproximadamente uma hora após o nascimento, a crina e a cauda flamejantes de Ponyta crescem, dando ao Pokémon uma aparência impressionante."
},
{
  numero: "0078",
  nome: "Rapidash",
  classe: "pokemon-fogo",
  dataTipo: "fogo",
  imagem: "../imagens/pokemons/078-Rapidash.png",
  alt: "Pokémon Rapidash",
  tipos: [
    { nome: "Fogo", classe: "but-fogo", link: "../pokemons/fogo.html" }
  ],
  descricao: "Ele galopa a quase 240 km/h. Com a crina flamejando ferozmente, corre como se fosse uma flecha."
},
{
  numero: "0079",
  nome: "Slowpoke",
  classe: "pokemon-agua",
  dataTipo: "agua psiquico",
  imagem: "../imagens/pokemons/079-Slowpoke.png",
  alt: "Pokémon Slowpoke",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" },
    { nome: "Psíquico", classe: "but-psiquico", link: "../pokemons/psiquico.html" }
  ],
  descricao: "É incrivelmente lento e desajeitado. Leva cinco segundos para sentir dor quando atacado."
},
{
  numero: "0080",
  nome: "Slowbro",
  classe: "pokemon-agua",
  dataTipo: "agua psiquico",
  imagem: "../imagens/pokemons/080-Slowbro.png",
  alt: "Pokémon Slowbro",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" },
    { nome: "Psíquico", classe: "but-psiquico", link: "../pokemons/psiquico.html" }
  ],
  descricao: "Quando um Slowpoke foi caçar no mar, sua cauda foi mordida por um Shellder. Isso o fez evoluir para Slowbro."
},
{
  numero: "0081",
  nome: "Magnemite",
  classe: "pokemon-eletrico",
  dataTipo: "eletrico aco",
  imagem: "../imagens/pokemons/081-Magnemite.png",
  alt: "Pokémon Magnemite",
  tipos: [
    { nome: "Elétrico", classe: "but-eletrico", link: "../pokemons/eletrico.html" },
    { nome: "Aço", classe: "but-steel", link: "../pokemons/aco.html" }
  ],
  descricao: "As ondas eletromagnéticas emitidas pelas unidades nas laterais de sua cabeça expelem a antigravidade, o que lhe permite flutuar."
},
{
  numero: "0082",
  nome: "Magneton",
  classe: "pokemon-eletrico",
  dataTipo: "eletrico aco",
  imagem: "../imagens/pokemons/082-Magneton.png",
  alt: "Pokémon Magneton",
  tipos: [
    { nome: "Elétrico", classe: "but-eletrico", link: "../pokemons/eletrico.html" },
    { nome: "Aço", classe: "but-steel", link: "../pokemons/aco.html" }
  ],
  descricao: "Três ímãs Magnemite estão ligados por uma forte força magnética. Se você se aproximar demais, poderá sentir dor de ouvido."
},
{
  numero: "0083",
  nome: "Farfetch’d",
  classe: "pokemon-normal",
  dataTipo: "normal voador",
  imagem: "../imagens/pokemons/083-Farfetch'd.png",
  alt: "Pokémon Farfetch’d",
  tipos: [
    { nome: "Normal", classe: "but-normal", link: "../pokemons/normal.html" },
    { nome: "Voador", classe: "but-voador", link: "../pokemons/voador.html" }
  ],
  descricao: "Ele não consegue viver sem o caule que sustenta. Por isso, defende o caule dos atacantes com a própria vida."
},
{
  numero: "0084",
  nome: "Doduo",
  classe: "pokemon-normal",
  dataTipo: "normal voador",
  imagem: "../imagens/pokemons/084-Duoduo.png",
  alt: "Pokémon Doduo",
  tipos: [
    { nome: "Normal", classe: "but-normal", link: "../pokemons/normal.html" },
    { nome: "Voador", classe: "but-voador", link: "../pokemons/voador.html" }
  ],
  descricao: "Suas duas cabeças gêmeas possuem exatamente os mesmos genes e lutam em perfeita sincronia."
},
{
  numero: "0085",
  nome: "Dodrio",
  classe: "pokemon-normal",
  dataTipo: "normal voador",
  imagem: "../imagens/pokemons/085-Dodrio.png",
  alt: "Pokémon Dodrio",
  tipos: [
    { nome: "Normal", classe: "but-normal", link: "../pokemons/normal.html" },
    { nome: "Voador", classe: "but-voador", link: "../pokemons/voador.html" }
  ],
  descricao: "Agora ele tem três corações e três pares de pulmões. Embora não consiga correr tão rápido quanto Doduo, Dodrio pode continuar correndo por períodos mais longos."
},
{
  numero: "0086",
  nome: "Seel",
  classe: "pokemon-agua",
  dataTipo: "agua",
  imagem: "../imagens/pokemons/086-Seel.png",
  alt: "Pokémon Seel",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" }
  ],
  descricao: "A protuberância em sua cabeça é muito dura. Ela é usada para quebrar gelo espesso."
},
{
  numero: "0087",
  nome: "Dewgong",
  classe: "pokemon-agua",
  dataTipo: "agua gelo",
  imagem: "../imagens/pokemons/087-Dewgong.png",
  alt: "Pokémon Dewgong",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" },
    { nome: "Gelo", classe: "but-gelo", link: "../pokemons/gelo.html" }
  ],
  descricao: "Durante o dia, dorme em águas oceânicas rasas e, à noite, quando a temperatura está mais baixa, procura alimento."
},
{
  numero: "0088",
  nome: "Grimer",
  classe: "pokemon-venenoso",
  dataTipo: "veneno",
  imagem: "../imagens/pokemons/088-Grimer.png",
  alt: "Pokémon Grimer",
  tipos: [
    { nome: "Veneno", classe: "but-veneno", link: "../pokemons/venenoso.html" }
  ],
  descricao: "Nascidos da lama, esses Pokémon agora se reúnem em locais poluídos e aumentam a quantidade de bactérias em seus corpos."
},
{
  numero: "0089",
  nome: "Muk",
  classe: "pokemon-venenoso",
  dataTipo: "veneno",
  imagem: "../imagens/pokemons/089-Muk.png",
  alt: "Pokémon Muk",
  tipos: [
    { nome: "Veneno", classe: "but-veneno", link: "../pokemons/venenoso.html" }
  ],
  descricao: "Está densamente coberto por uma lama imunda e repugnante. É tão tóxico que até suas pegadas contêm veneno."
},
{
  numero: "0090",
  nome: "Shellder",
  classe: "pokemon-agua",
  dataTipo: "agua",
  imagem: "../imagens/pokemons/090-Shelder.png",
  alt: "Pokémon Shellder",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" }
  ],
  descricao: "Está envolto numa casca mais dura que o diamante. Por dentro, porém, é surpreendentemente macio."
},
{
  numero: "0091",
  nome: "Cloyster",
  classe: "pokemon-agua",
  dataTipo: "agua gelo",
  imagem: "../imagens/pokemons/091-Cloister.png",
  alt: "Pokémon Cloyster",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" },
    { nome: "Gelo", classe: "but-gelo", link: "../pokemons/gelo.html" }
  ],
  descricao: "Os cloisteres que vivem em mares com fortes correntes de maré desenvolvem espinhos grandes e afiados em suas conchas."
},
{
  numero: "0092",
  nome: "Gastly",
  classe: "pokemon-fantasma",
  dataTipo: "fantasma veneno",
  imagem: "../imagens/pokemons/092-Gastly.png",
  alt: "Pokémon Gastly",
  tipos: [
    { nome: "Fantasma", classe: "but-fantasma", link: "../pokemons/fantasma.html" },
    { nome: "Veneno", classe: "but-veneno", link: "../pokemons/venenoso.html" }
  ],
  descricao: "Envolve o oponente em seu corpo semelhante a gás, enfraquecendo lentamente a presa ao envenená-la através da pele."
},
{
  numero: "0093",
  nome: "Haunter",
  classe: "pokemon-fantasma",
  dataTipo: "fantasma veneno",
  imagem: "../imagens/pokemons/093-Haunter.png",
  alt: "Pokémon Haunter",
  tipos: [
    { nome: "Fantasma", classe: "but-fantasma", link: "../pokemons/fantasma.html" },
    { nome: "Veneno", classe: "but-veneno", link: "../pokemons/venenoso.html" }
  ],
  descricao: "Gosta de espreitar na escuridão e tocar nos ombros com uma mão gasosa. Seu toque causa tremores intermináveis."
},
{
  numero: "0094",
  nome: "Gengar",
  classe: "pokemon-fantasma",
  dataTipo: "fantasma veneno",
  imagem: "../imagens/pokemons/094-Gengar.png",
  alt: "Pokémon Gengar",
  tipos: [
    { nome: "Fantasma", classe: "but-fantasma", link: "../pokemons/fantasma.html" },
    { nome: "Veneno", classe: "but-veneno", link: "../pokemons/venenoso.html" }
  ],
  descricao: "Para roubar a vida de sua presa, ele se esgueira para as sombras da vítima e aguarda silenciosamente uma oportunidade."
},
{
  numero: "0095",
  nome: "Onix",
  classe: "pokemon-rocha",
  dataTipo: "rocha terra",
  imagem: "../imagens/pokemons/095-Onix.png",
  alt: "Pokémon Onix",
  tipos: [
    { nome: "Rocha", classe: "but-rocha", link: "../pokemons/rocha.html" },
    { nome: "Terra", classe: "but-terra", link: "../pokemons/terra.html" }
  ],
  descricao: "Ao escavar o solo, absorve muitos objetos duros. É isso que torna seu corpo tão sólido."
},
{
  numero: "0096",
  nome: "Drowzee",
  classe: "pokemon-psiquico",
  dataTipo: "psiquico",
  imagem: "../imagens/pokemons/096-Drowze.png",
  alt: "Pokémon Drowzee",
  tipos: [
    { nome: "Psíquico", classe: "but-psiquico", link: "../pokemons/psiquico.html" }
  ],
  descricao: "Ela se lembra de todos os sonhos que devora. Raramente devora os sonhos dos adultos, pois os das crianças são muito mais saborosos."
},
{
  numero: "0097",
  nome: "Hypno",
  classe: "pokemon-psiquico",
  dataTipo: "psiquico",
  imagem: "../imagens/pokemons/097-Hypno.png",
  alt: "Pokémon Hypno",
  tipos: [
    { nome: "Psíquico", classe: "but-psiquico", link: "../pokemons/psiquico.html" }
  ],
  descricao: "Quando fixar o olhar em um inimigo, usará uma combinação de movimentos psiônicos, como Hipnose e Confusão."
},
{
  numero: "0098",
  nome: "Krabby",
  classe: "pokemon-agua",
  dataTipo: "agua",
  imagem: "../imagens/pokemons/098-Krabby.png",
  alt: "Pokémon Krabby",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" }
  ],
  descricao: "Pode ser encontrado perto do mar. As grandes pinças voltam a crescer se forem arrancadas das suas órbitas."
},
{
  numero: "0099",
  nome: "Kingler",
  classe: "pokemon-agua",
  dataTipo: "agua",
  imagem: "../imagens/pokemons/099-Kingler.png",
  alt: "Pokémon Kingler",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" }
  ],
  descricao: "A pinça maior tem uma força equivalente a 10.000 cavalos de potência. No entanto, é tão pesada que é difícil de mirar."
},
{
  numero: "0100",
  nome: "Voltorb",
  classe: "pokemon-eletrico",
  dataTipo: "eletrico",
  imagem: "../imagens/pokemons/100-Voltorb.png",
  alt: "Pokémon Voltorb",
  tipos: [
    { nome: "Elétrico", classe: "but-eletrico", link: "../pokemons/eletrico.html" }
  ],
  descricao: "Ele rola para se mover. Se o terreno for irregular, um solavanco repentino ao passar por uma lombada pode fazê-lo explodir."
},
{
  numero: "0101",
  nome: "Electrode",
  classe: "pokemon-eletrico",
  dataTipo: "eletrico",
  imagem: "../imagens/pokemons/101-Electrode.png",
  alt: "Pokémon Electrode",
  tipos: [
    { nome: "Elétrico", classe: "but-eletrico", link: "../pokemons/eletrico.html" }
  ],
  descricao: "Quanto mais energia acumula, mais rápido acelera. Mas isso também aumenta a probabilidade de explosão."
},
{
  numero: "0102",
  nome: "Exeggcute",
  classe: "pokemon-planta",
  dataTipo: "planta psiquico",
  imagem: "../imagens/pokemons/102-Exeggcute.png",
  alt: "Pokémon Exeggcute",
  tipos: [
    { nome: "Planta", classe: "but-planta", link: "../pokemons/planta.html" },
    { nome: "Psíquico", classe: "but-psiquico", link: "../pokemons/psiquico.html" }
  ],
  descricao: "Se você tocar em uma das cabeças de um Exeggcute, confundindo-a com um ovo, as outras cabeças se reunirão rapidamente e o atacarão em enxame."
},
{
  numero: "0103",
  nome: "Exeggutor",
  classe: "pokemon-planta",
  dataTipo: "planta psiquico",
  imagem: "../imagens/pokemons/103-Exegutor.png",
  alt: "Pokémon Exeggutor",
  tipos: [
    { nome: "Planta", classe: "but-planta", link: "../pokemons/planta.html" },
    { nome: "Psíquico", classe: "but-psiquico", link: "../pokemons/psiquico.html" }
  ],
  descricao: "É chamada de Selva Ambulante. Cada uma das nozes tem um rosto e uma vontade própria."
},
{
  numero: "0104",
  nome: "Cubone",
  classe: "pokemon-terra",
  dataTipo: "terra",
  imagem: "../imagens/pokemons/104-Cubone.png",
  alt: "Pokémon Cubone",
  tipos: [
    { nome: "Terra", classe: "but-terra", link: "../pokemons/terra.html" }
  ],
  descricao: "Quando a lembrança de sua mãe falecida a faz chorar, seus lamentos ecoam tristemente dentro do crânio que usa na cabeça."
},
{
  numero: "0105",
  nome: "Marowak",
  classe: "pokemon-terra",
  dataTipo: "terra",
  imagem: "../imagens/pokemons/105-Marowak.png",
  alt: "Pokémon Marowak",
  tipos: [
    { nome: "Terra", classe: "but-terra", link: "../pokemons/terra.html" }
  ],
  descricao: "Este Pokémon superou sua tristeza para evoluir e desenvolver um novo corpo robusto. Marowak enfrenta seus oponentes bravamente, usando um osso como arma."
},
{
  numero: "0106",
  nome: "Hitmonlee",
  classe: "pokemon-lutador",
  dataTipo: "lutador",
  imagem: "../imagens/pokemons/106-Hitmonlee.png",
  alt: "Pokémon Hitmonlee",
  tipos: [
    { nome: "Lutador", classe: "but-lutador", link: "../pokemons/lutador.html" }
  ],
  descricao: "No exato momento em que acerta um chute em seu alvo, Hitmonlee endurece os músculos da sola do pé, maximizando a potência do chute."
},
{
  numero: "0107",
  nome: "Hitmonchan",
  classe: "pokemon-lutador",
  dataTipo: "lutador",
  imagem: "../imagens/pokemons/107-Hitmonchan.png",
  alt: "Pokémon Hitmonchan",
  tipos: [
    { nome: "Lutador", classe: "but-lutador", link: "../pokemons/lutador.html" }
  ],
  descricao: "Ele encurrala seus inimigos com uma combinação de socos de ambos os lados e, em seguida, finaliza-os com um único soco direto lançado a mais de 480 km/h."
},
{
  numero: "0108",
  nome: "Lickitung",
  classe: "pokemon-normal",
  dataTipo: "normal",
  imagem: "../imagens/pokemons/108-Licktung.png",
  alt: "Pokémon Lickitung",
  tipos: [
    { nome: "Normal", classe: "but-normal", link: "../pokemons/normal.html" }
  ],
  descricao: "Se a saliva pegajosa deste Pokémon entrar em contato com você e você não a limpar, uma coceira intensa começará. E essa coceira não passará."
},
{
  numero: "0109",
  nome: "Koffing",
  classe: "pokemon-venenoso",
  dataTipo: "veneno",
  imagem: "../imagens/pokemons/109-Koffing.png",
  alt: "Pokémon Koffing",
  tipos: [
    { nome: "Veneno", classe: "but-veneno", link: "../pokemons/venenoso.html" }
  ],
  descricao: "O gás tóxico fica retido dentro de seu corpo fino em forma de balão, podendo causar explosões de grandes proporções."
},
{
  numero: "0110",
  nome: "Weezing",
  classe: "pokemon-venenoso",
  dataTipo: "veneno",
  imagem: "../imagens/pokemons/110-Weezing.png",
  alt: "Pokémon Weezing",
  tipos: [
    { nome: "Veneno", classe: "but-veneno", link: "../pokemons/venenoso.html" }
  ],
  descricao: "Perfumes de alta qualidade são feitos utilizando os gases tóxicos presentes em seu interior, diluindo-os ao máximo."
},
{
  numero: "0111",
  nome: "Rhyhorn",
  classe: "pokemon-rocha",
  dataTipo: "rocha terra",
  imagem: "../imagens/pokemons/111-Rhyhorn.png",
  alt: "Pokémon Rhyhorn",
  tipos: [
    { nome: "Rocha", classe: "but-rocha", link: "../pokemons/rocha.html" },
    { nome: "Terra", classe: "but-terra", link: "../pokemons/terra.html" }
  ],
  descricao: "Rhyhorn reivindica uma área com mais de seis milhas de raio como seu território. Aparentemente, porém, ele se esquece de onde fica esse território quando está correndo."
},
{
  numero: "0112",
  nome: "Rhydon",
  classe: "pokemon-rocha",
  dataTipo: "rocha terra",
  imagem: "../imagens/pokemons/112-Rhydon.png",
  alt: "Pokémon Rhydon",
  tipos: [
    { nome: "Rocha", classe: "but-rocha", link: "../pokemons/rocha.html" },
    { nome: "Terra", classe: "but-terra", link: "../pokemons/terra.html" }
  ],
  descricao: "O chifre de um Rhydon é poderoso o suficiente para esmagar diamantes brutos. Esses Pokémon poliam seus chifres batendo-os uns contra os outros."
},
{
  numero: "0113",
  nome: "Chansey",
  classe: "pokemon-normal",
  dataTipo: "normal",
  imagem: "../imagens/pokemons/113-Chansey.png",
  alt: "Pokémon Chansey",
  tipos: [
    { nome: "Normal", classe: "but-normal", link: "../pokemons/normal.html" }
  ],
  descricao: "Este Pokémon bondoso põe ovos altamente nutritivos e os compartilha com Pokémon ou pessoas feridas."
},
{
  numero: "0114",
  nome: "Tangela",
  classe: "pokemon-planta",
  dataTipo: "planta",
  imagem: "../imagens/pokemons/114-Tangela.png",
  alt: "Pokémon Tangela",
  tipos: [
    { nome: "Planta", classe: "but-planta", link: "../pokemons/planta.html" }
  ],
  descricao: "Escondido sob uma densa vegetação de trepadeiras que cresce sem parar, mesmo quando arrancadas, o verdadeiro aspecto deste Pokémon permanece um mistério."
},
{
  numero: "0115",
  nome: "Kangaskhan",
  classe: "pokemon-normal",
  dataTipo: "normal",
  imagem: "../imagens/pokemons/115-Kangaskhan.png",
  alt: "Pokémon Kangaskhan",
  tipos: [
    { nome: "Normal", classe: "but-normal", link: "../pokemons/normal.html" }
  ],
  descricao: "Apesar de carregar seu filhote em uma bolsa na barriga, Kangaskhan é ágil e intimida seus oponentes com golpes rápidos."
},
{
  numero: "0116",
  nome: "Horsea",
  classe: "pokemon-agua",
  dataTipo: "agua",
  imagem: "../imagens/pokemons/116-Horsea.png",
  alt: "Pokémon Horsea",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" }
  ],
  descricao: "Se atacado, mesmo por um inimigo grande, o Horsea nada sem esforço para um local seguro, utilizando sua barbatana dorsal bem desenvolvida."
},
{
  numero: "0117",
  nome: "Seadra",
  classe: "pokemon-agua",
  dataTipo: "agua",
  imagem: "../imagens/pokemons/117-Seadra.png",
  alt: "Pokémon Seadra",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" }
  ],
  descricao: "O macho cria os filhotes. Se for abordado enquanto cuida dos filhotes, usará seus espinhos tóxicos para afastar o intruso."
},
{
  numero: "0118",
  nome: "Goldeen",
  classe: "pokemon-agua",
  dataTipo: "agua",
  imagem: "../imagens/pokemons/118-Goldeen.png",
  alt: "Pokémon Goldeen",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" }
  ],
  descricao: "Suas nadadeiras dorsal, peitoral e caudal ondulam elegantemente na água. É por isso que é conhecida como a Dançarina da Água."
},
{
  numero: "0119",
  nome: "Seaking",
  classe: "pokemon-agua",
  dataTipo: "agua",
  imagem: "../imagens/pokemons/119-Seaking.png",
  alt: "Pokémon Seaking",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" }
  ],
  descricao: "No outono, seu corpo fica mais gorduroso em preparação para o encontro com um parceiro. Adquire cores belíssimas."
},
{
  numero: "0120",
  nome: "Staryu",
  classe: "pokemon-agua",
  dataTipo: "agua",
  imagem: "../imagens/pokemons/120-Staryu.png",
  alt: "Pokémon Staryu",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" }
  ],
  descricao: "Se você visitar uma praia no final do verão, poderá ver grupos de Staryu se iluminando em um ritmo constante."
},
{
  numero: "0121",
  nome: "Starmie",
  classe: "pokemon-agua",
  dataTipo: "agua psiquico",
  imagem: "../imagens/pokemons/121-Starmie.png",
  alt: "Pokémon Starmie",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" },
    { nome: "Psíquico", classe: "but-psiquico", link: "../pokemons/psiquico.html" }
  ],
  descricao: "No centro do seu corpo encontra-se um núcleo vermelho que envia misteriosos sinais de rádio para o céu noturno."
},
{
  numero: "0122",
  nome: "Mr. Mime",
  classe: "pokemon-psiquico",
  dataTipo: "psiquico fada",
  imagem: "../imagens/pokemons/122-Mr-Mime.png",
  alt: "Pokémon Mr-Mime",
  tipos: [
    { nome: "Fada", classe: "but-fada", link: "../pokemons/fada.html" },
    { nome: "Psíquico", classe: "but-psiquico", link: "../pokemons/psiquico.html" }
  ],
  descricao: "É um especialista em pantomima que consegue criar paredes invisíveis, mas sólidas, usando gestos de mímica."
},
{
    numero: "0123",
    nome: "Scyther",
    classe: "pokemon-inseto",
    dataTipo: "inseto voador",
    imagem: "../imagens/pokemons/123-Scyther.png",
    alt: "Pokémon Scyther",
    tipos: [
      { nome: "Inseto", classe: "but-inseto", link: "../pokemons/inseto.html" },
      { nome: "Voador", classe: "but-voador", link: "../pokemons/voador.html" }
    ],
    descricao: "Ele adora o néctar das flores e consegue localizar áreas que contenham até mesmo quantidades mínimas, ele corta a grama com suas foices afiadas, movendo-se rápido demais para o olho humano acompanhar."
  },
  {
  numero: "0124",
  nome: "Jynx",
  classe: "pokemon-psiquico",
  dataTipo: "psiquico fada",
  imagem: "../imagens/pokemons/124-Jinx.png",
  alt: "Pokémon Jynx",
  tipos: [
    { nome: "Gelo", classe: "but-gelo", link: "../pokemons/gelo.html" },
    { nome: "Psíquico", classe: "but-psiquico", link: "../pokemons/psiquico.html" }
  ],
  descricao: "Em certas partes de Galar, Jynx já foi temida e venerada como a Rainha do Gelo."
},
{
  numero: "0125",
  nome: "Electabuzz",
  classe: "pokemon-eletrico",
  dataTipo: "eletrico",
  imagem: "../imagens/pokemons/125-Electabuzz.png",
  alt: "Pokémon Electabuzz",
  tipos: [
    { nome: "Elétrico", classe: "but-eletrico", link: "../pokemons/eletrico.html" }
  ],
  descricao: "Seu corpo descarrega eletricidade constantemente. Chegar perto dele fará seus pelos se arrepiarem."
},
{
  numero: "0126",
  nome: "Magmar",
  classe: "pokemon-fogo",
  dataTipo: "fogo",
  imagem: "../imagens/pokemons/126-Magmar.png",
  alt: "Pokémon Magmar",
  tipos: [
    { nome: "Fogo", classe: "but-fogo", link: "../pokemons/fogo.html" }
  ],
  descricao: "Encontrado perto da cratera de um vulcão. A temperatura corporal deste animal que cospe fogo chega a quase 1200 graus Celsius."
},
{
    numero: "0127",
    nome: "Pinsir",
    classe: "pokemon-inseto",
    dataTipo: "inseto",
    imagem: "../imagens/pokemons/127-Pinsir.png",
    alt: "Pokémon Pinsir",
    tipos: [
      { nome: "Inseto", classe: "but-inseto", link: "../pokemons/inseto.html" },
    ],
    descricao: "Esses Pokémon se avaliam uns aos outros com base em suas pinças. Pinças mais grossas e impressionantes conferem maior popularidade ao sexo oposto."
},
{
  numero: "0128",
  nome: "Tauros",
  classe: "pokemon-normal",
  dataTipo: "normal",
  imagem: "../imagens/pokemons/128-Taurus.png",
  alt: "Pokémon Tauros",
  tipos: [
    { nome: "Normal", classe: "but-normal", link: "../pokemons/normal.html" }
  ],
  descricao: "Ao atacar um inimigo, ele investe furiosamente enquanto chicoteia o próprio corpo com suas longas caudas."
},
{
  numero: "0129",
  nome: "Magikarp",
  classe: "pokemon-agua",
  dataTipo: "agua",
  imagem: "../imagens/pokemons/129-Magikarp.png",
  alt: "Pokémon Magikarp",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" },
  ],
  descricao: "Um Pokémon fraco e patético. Pode até pular alto em raras ocasiões, mas nunca mais de dois metros."
},
{
  numero: "0130",
  nome: "Gyarados",
  classe: "pokemon-agua",
  dataTipo: "agua voador",
  imagem: "../imagens/pokemons/130-Gyarados.png",
  alt: "Pokémon Gyarados",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" },
    { nome: "Voador", classe: "but-voador", link: "../pokemons/voador.html" }    
  ],
  descricao: "Assim que aparece, inicia um frenesi. Permanece enfurecido até demolir tudo ao seu redor."
},
{
  numero: "0131",
  nome: "Lapras",
  classe: "pokemon-agua",
  dataTipo: "agua gelo",
  imagem: "../imagens/pokemons/131-Lapras.png",
  alt: "Pokémon Lapras",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" },
    { nome: "Gelo", classe: "but-gelo", link: "../pokemons/gelo.html" }
  ],
  descricao: "Ela transporta pessoas através do mar em suas costas. Pode até soltar um canto encantador se estiver de bom humor."
},
{
  numero: "0132",
  nome: "Ditto",
  classe: "pokemon-normal",
  dataTipo: "normal",
  imagem: "../imagens/pokemons/132-Ditto.png",
  alt: "Pokémon Ditto",
  tipos: [
    { nome: "Normal", classe: "but-normal", link: "../pokemons/normal.html" }
  ],
  descricao: "Sua capacidade de transformação é perfeita. No entanto, se for provocado a rir, não consegue manter o disfarce."
},
{
  numero: "0133",
  nome: "Eevee",
  classe: "pokemon-normal",
  dataTipo: "normal",
  imagem: "../imagens/pokemons/133-Eevee.png",
  alt: "Pokémon Eevee",
  tipos: [
    { nome: "Normal", classe: "but-normal", link: "../pokemons/normal.html" }
  ],
  descricao: "Sua capacidade de evoluir para diversas formas permite que ela se adapte de maneira suave e perfeita a qualquer ambiente."
},
{
  numero: "0134",
  nome: "Vaporeon",
  classe: "pokemon-agua",
  dataTipo: "agua",
  imagem: "../imagens/pokemons/134-Vaporeon.png",
  alt: "Pokémon Vaporeon",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" },
  ],
  descricao: "Vive perto da água. Sua longa cauda possui uma crista com uma barbatana, que muitas vezes é confundida com a de uma sereia."
},
{
  numero: "0135",
  nome: "Jolteon",
  classe: "pokemon-eletrico",
  dataTipo: "eletrico",
  imagem: "../imagens/pokemons/135-Jolteon.png",
  alt: "Pokémon Jolteon",
  tipos: [
    { nome: "Elétrico", classe: "but-eletrico", link: "../pokemons/eletrico.html" }
  ],
  descricao: "Ele concentra as cargas elétricas fracas emitidas por suas células e lança raios devastadores."
},
{
  numero: "0136",
  nome: "Flareon",
  classe: "pokemon-fogo",
  dataTipo: "fogo",
  imagem: "../imagens/pokemons/136-Flareon.png",
  alt: "Pokémon Flareon",
  tipos: [
    { nome: "Fogo", classe: "but-fogo", link: "../pokemons/fogo.html" }
  ],
  descricao: "O ar inalado é conduzido até o saco de chamas, aquecido e exalado como fogo que atinge mais de 3.000 graus Fahrenheit."
},
{
  numero: "0137",
  nome: "Porygon",
  classe: "pokemon-normal",
  dataTipo: "normal",
  imagem: "../imagens/pokemons/137-Porigon.png",
  alt: "Pokémon Porygon",
  tipos: [
    { nome: "Normal", classe: "but-normal", link: "../pokemons/normal.html" }
  ],
  descricao: "É um Pokémon artificial. Como não respira, as pessoas estão entusiasmadas com seu potencial para ser útil em qualquer ambiente."
},
{
  numero: "0138",
  nome: "Omanyte",
  classe: "pokemon-rocha",
  dataTipo: "rocha agua",
  imagem: "../imagens/pokemons/138-Omanyte.png",
  alt: "Pokémon Omanyte",
  tipos: [
    { nome: "Rocha", classe: "but-rocha", link: "../pokemons/rocha.html" },
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" }
  ],
  descricao: "Como alguns omanitas conseguem escapar após serem reintroduzidos ou são libertados na natureza por pessoas, essa espécie está se tornando um problema."
},
{
  numero: "0139",
  nome: "Omastar",
  classe: "pokemon-rocha",
  dataTipo: "rocha agua",
  imagem: "../imagens/pokemons/139-Omastar.png",
  alt: "Pokémon Omastar",
  tipos: [
    { nome: "Rocha", classe: "but-rocha", link: "../pokemons/rocha.html" },
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" }
  ],
  descricao: "Devido ao peso de sua carapaça grande e pesada, o Omastar não conseguia se mover muito rápido. Alguns dizem que ele foi extinto por ser incapaz de caçar."
},
{
  numero: "0140",
  nome: "Kabuto",
  classe: "pokemon-rocha",
  dataTipo: "rocha agua",
  imagem: "../imagens/pokemons/140-Kabuto.png",
  alt: "Pokémon Kabuto",
  tipos: [
    { nome: "Rocha", classe: "but-rocha", link: "../pokemons/rocha.html" },
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" }
  ],
  descricao: "Essa espécie está praticamente extinta. Os kabutos trocam de carapaça a cada três dias, tornando-as cada vez mais rígidas."
},
{
  numero: "0141",
  nome: "Kabutops",
  classe: "pokemon-rocha",
  dataTipo: "rocha agua",
  imagem: "../imagens/pokemons/141-Kabutops.png",
  alt: "Pokémon Kabutops",
  tipos: [
    { nome: "Rocha", classe: "but-rocha", link: "../pokemons/rocha.html" },
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" }
  ],
  descricao: "Kabutops retalha sua presa e suga seus fluidos. Os restos mortais se tornam alimento para outros Pokémon."
},
{
  numero: "0142",
  nome: "Aerodactyl",
  classe: "pokemon-rocha",
  dataTipo: "rocha voador",
  imagem: "../imagens/pokemons/142-Aerodactyl.png",
  alt: "Pokémon Kabutops",
  tipos: [
    { nome: "Rocha", classe: "but-rocha", link: "../pokemons/rocha.html" },
    { nome: "Voador", classe: "but-voador", link: "../pokemons/voador.html" }
  ],
  descricao: "Este é um Pokémon feroz de tempos antigos. Aparentemente, nem mesmo a tecnologia moderna é capaz de produzir um espécime perfeitamente restaurado."
},
{
  numero: "0143",
  nome: "Snorlax",
  classe: "pokemon-normal",
  dataTipo: "normal",
  imagem: "../imagens/pokemons/143-Snorlax.png",
  alt: "Pokémon Ditto",
  tipos: [
    { nome: "Normal", classe: "but-normal", link: "../pokemons/normal.html" }
  ],
  descricao: "Este Pokémon glutão come constantemente, exceto quando está dormindo. Ele devora quase 400 quilos de comida por dia."
},
{
  numero: "0144",
  nome: "Articuno",
  classe: "pokemon-gelo",
  dataTipo: "gelo voador",
  imagem: "../imagens/pokemons/144-Articuno.png",
  alt: "Pokémon Articuno",
  tipos: [
    { nome: "Gelo", classe: "but-gelo", link: "../pokemons/gelo.html" },
    { nome: "Voador", classe: "but-voador", link: "../pokemons/voador.html" }
  ],
  descricao: "Este Pokémon pássaro lendário pode criar nevascas congelando a umidade do ar."
},
{
  numero: "0145",
  nome: "Articuno",
  classe: "pokemon-eletrico",
  dataTipo: "eletrico voador",
  imagem: "../imagens/pokemons/145-Zapdos.png",
  alt: "Pokémon Zapdos",
  tipos: [
    { nome: "Elétrico", classe: "but-eletrico", link: "../pokemons/eletrico.html" },
    { nome: "Voador", classe: "but-voador", link: "../pokemons/voador.html" }
  ],
  descricao: "Diz-se que este Pokémon lendário vive em nuvens de tempestade. Ele controla livremente os raios."
},
{
  numero: "0146",
  nome: "Moltres",
  classe: "pokemon-fogo",
  dataTipo: "fogo voador",
  imagem: "../imagens/pokemons/146-Moltres.png",
  alt: "Pokémon Moltres",
  tipos: [
    { nome: "Fogo", classe: "but-fogo", link: "../pokemons/fogo.html" },
    { nome: "Voador", classe: "but-voador", link: "../pokemons/voador.html" }
  ],
  descricao: "É um dos Pokémon pássaros lendários. Diz-se que seu aparecimento indica a chegada da primavera."
},
{
  numero: "0147",
  nome: "Dratini",
  classe: "pokemon-dragao",
  dataTipo: "dragao",
  imagem: "../imagens/pokemons/147-Dratini.png",
  alt: "Pokémon Dratini",
  tipos: [
    { nome: "Dragao", classe: "but-dragao", link: "../pokemons/dragao.html" },  
  ],
  descricao: "À medida que cresce, troca várias camadas de pele. Durante esse processo, é protegida por uma cachoeira de correnteza forte."
},
{
  numero: "0148",
  nome: "Dragonair",
  classe: "pokemon-dragao",
  dataTipo: "dragao",
  imagem: "../imagens/pokemons/148-Dragonair.png",
  alt: "Pokémon Dragonair",
  tipos: [
    { nome: "Dragao", classe: "but-dragao", link: "../pokemons/dragao.html" },  
  ],
  descricao: "Dizem que se emitir uma aura de todo o corpo, o tempo começará a mudar instantaneamente."
},
{
  numero: "0149",
  nome: "Dragonite",
  classe: "pokemon-dragao",
  dataTipo: "dragao voador",
  imagem: "../imagens/pokemons/149-Dragonite.png",
  alt: "Pokémon Dragonite",
  tipos: [
    { nome: "Dragao", classe: "but-dragao", link: "../pokemons/dragao.html" }, 
    { nome: "Voador", classe: "but-voador", link: "../pokemons/voador.html" } 
  ],
  descricao: "Diz-se que vive em algum lugar no mar. Guia navios naufragados até a costa."
},
{
  numero: "0150",
  nome: "Mewtwo",
  classe: "pokemon-psiquico",
  dataTipo: "pasiquico",
  imagem: "../imagens/pokemons/150-Mewtwo.png",
  alt: "Pokémon Mewtwo",
  tipos: [
    { nome: "Psiquico", classe: "but-psiquico", link: "../pokemons/psiquico.html" },  
  ],
  descricao: "Seu DNA é quase idêntico ao de Mew. No entanto, seu tamanho e temperamento são muito diferentes."
},
{
  numero: "0151",
  nome: "Mew",
  classe: "pokemon-psiquico",
  dataTipo: "pasiquico",
  imagem: "../imagens/pokemons/151-Mew.png",
  alt: "Pokémon Mew",
  tipos: [
    { nome: "Psiquico", classe: "but-psiquico", link: "../pokemons/psiquico.html" },  
  ],
  descricao: "Quando visto ao microscópio, é possível observar os pelos curtos, finos e delicados deste Pokémon"
},
























];
