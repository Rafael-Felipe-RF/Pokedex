const pokemons = [

  //Primeira Geração
  {
    geracao: "Primeira Geração",
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
    geracao: "Primeira Geração",
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
    geracao: "Primeira Geração",
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
    geracao: "Primeira Geração",
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
    geracao: "Primeira Geração",
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
    geracao: "Primeira Geração",
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
    geracao: "Primeira Geração",
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
    geracao: "Primeira Geração",
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
    geracao: "Primeira Geração",
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
    geracao: "Primeira Geração",
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
    geracao: "Primeira Geração",
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
    geracao: "Primeira Geração",
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
    geracao: "Primeira Geração",
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
    geracao: "Primeira Geração",
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
    geracao: "Primeira Geração",
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
    geracao: "Primeira Geração",
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
    geracao: "Primeira Geração",
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
    geracao: "Primeira Geração",
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
    geracao: "Primeira Geração",
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
    geracao: "Primeira Geração",
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
    geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  descricao: "Nidoqueen é melhor na defesa do que no ataque. Com escamas que funcionam como uma armadura, este Pokémon protege seus filhotes de qualquer tipo de ataque."
},
{
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
  numero: "0122",
  nome: "Mr. Mime",
  classe: "pokemon-psiquico",
  dataTipo: "psiquico fada",
  imagem: "../imagens/pokemons/122-Mr-Mime.png",
  alt: "Pokémon Mr-Mime",
  tipos: [
    { nome: "Psíquico", classe: "but-psiquico", link: "../pokemons/psiquico.html" },
    { nome: "Fada", classe: "but-fada", link: "../pokemons/fada.html" }    
  ],
  descricao: "É um especialista em pantomima que consegue criar paredes invisíveis, mas sólidas, usando gestos de mímica."
},
{
  geracao: "Primeira Geração",
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
    geracao: "Primeira Geração",
  numero: "0124",
  nome: "Jynx",
  classe: "pokemon-psiquico",
  dataTipo: "gelo psiquico",
  imagem: "../imagens/pokemons/124-Jinx.png",
  alt: "Pokémon Jynx",
  tipos: [
    { nome: "Gelo", classe: "but-gelo", link: "../pokemons/gelo.html" },
    { nome: "Psíquico", classe: "but-psiquico", link: "../pokemons/psiquico.html" }
  ],
  descricao: "Em certas partes de Galar, Jynx já foi temida e venerada como a Rainha do Gelo."
},
{
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
  numero: "0145",
  nome: "Zapdos",
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
  geracao: "Primeira Geração",
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
  geracao: "Primeira Geração",
  numero: "0147",
  nome: "Dratini",
  classe: "pokemon-dragao",
  dataTipo: "dragao",
  imagem: "../imagens/pokemons/147-Dratini.png",
  alt: "Pokémon Dratini",
  tipos: [
    { nome: "Dragão", classe: "but-dragao", link: "../pokemons/dragao.html" },  
  ],
  descricao: "À medida que cresce, troca várias camadas de pele. Durante esse processo, é protegida por uma cachoeira de correnteza forte."
},
{
  geracao: "Primeira Geração",
  numero: "0148",
  nome: "Dragonair",
  classe: "pokemon-dragao",
  dataTipo: "dragao",
  imagem: "../imagens/pokemons/148-Dragonair.png",
  alt: "Pokémon Dragonair",
  tipos: [
    { nome: "Dragão", classe: "but-dragao", link: "../pokemons/dragao.html" },  
  ],
  descricao: "Dizem que se emitir uma aura de todo o corpo, o tempo começará a mudar instantaneamente."
},
{
  geracao: "Primeira Geração",
  numero: "0149",
  nome: "Dragonite",
  classe: "pokemon-dragao",
  dataTipo: "dragao voador",
  imagem: "../imagens/pokemons/149-Dragonite.png",
  alt: "Pokémon Dragonite",
  tipos: [
    { nome: "Dragão", classe: "but-dragao", link: "../pokemons/dragao.html" }, 
    { nome: "Voador", classe: "but-voador", link: "../pokemons/voador.html" } 
  ],
  descricao: "Diz-se que vive em algum lugar no mar. Guia navios naufragados até a costa."
},
{
  geracao: "Primeira Geração",
  numero: "0150",
  nome: "Mewtwo",
  classe: "pokemon-psiquico",
  dataTipo: "psiquico",
  imagem: "../imagens/pokemons/150-Mewtwo.png",
  alt: "Pokémon Mewtwo",
  tipos: [
    { nome: "Psíquico", classe: "but-psiquico", link: "../pokemons/psiquico.html" },  
  ],
  descricao: "Seu DNA é quase idêntico ao de Mew. No entanto, seu tamanho e temperamento são muito diferentes."
},
{
  geracao: "Primeira Geração",
  numero: "0151",
  nome: "Mew",
  classe: "pokemon-psiquico",
  dataTipo: "psiquico",
  imagem: "../imagens/pokemons/151-mew.png",
  alt: "Pokémon Mew",
  tipos: [
    { nome: "Psíquico", classe: "but-psiquico", link: "../pokemons/psiquico.html" },  
  ],
  descricao: "Quando visto ao microscópio, é possível observar os pelos curtos, finos e delicados deste Pokémon."
},

//=======Segunda Geração
{
  geracao: "Segunda Geração",
  numero: "0152",
  nome: "Chikorita",
  classe: "pokemon-planta",
  dataTipo: "planta",
  imagem: "../imagens/pokemons/152-Chikorita.png",
  alt: "Pokémon Chikorita",
  tipos: [
    { nome: "Planta", classe: "but-planta", link: "../pokemons/planta.html" }    
  ],
  descricao: "Adora ficar ao sol. Usa a folha na cabeça para procurar lugares quentes."
  },
  {
  geracao: "Segunda Geração",
  numero: "0153",
  nome: "Bayleef",
  classe: "pokemon-planta",
  dataTipo: "planta",
  imagem: "../imagens/pokemons/153-Bayleef.png",
  alt: "Pokémon Bayleef",
  tipos: [
    { nome: "Planta", classe: "but-planta", link: "../pokemons/planta.html" }    
  ],
  descricao: "O aroma picante que emana do pescoço de Bayleef, de alguma forma, faz com que aqueles que o sentem queiram lutar."
  },
  {
  geracao: "Segunda Geração",
  numero: "0154",
  nome: "Meganium",
  classe: "pokemon-planta",
  dataTipo: "planta",
  imagem: "../imagens/pokemons/154-Meganium.png",
  alt: "Pokémon Meganium",
  tipos: [
    { nome: "Planta", classe: "but-planta", link: "../pokemons/planta.html" }    
  ],
  descricao: "O aroma que emana de suas pétalas contém uma substância que acalma os sentimentos agressivos."
  },
  {
    geracao: "Segunda Geração",
    numero: "0155",
    nome: "Cyndaquil",
    classe: "pokemon-fogo",
    dataTipo: "fogo",
    imagem: "../imagens/pokemons/155-Cyndaquil.png",
    alt: "Pokémon Cyndaquil",
    tipos: [
      { nome: "Fogo", classe: "but-fogo", link: "../pokemons/fogo.html" }
    ],
    descricao: "Geralmente permanece curvado. Se estiver zangado ou surpreso, cospe chamas pelas costas."
  },
  {
    geracao: "Segunda Geração",
    numero: "0156",
    nome: "Quilava",
    classe: "pokemon-fogo",
    dataTipo: "fogo",
    imagem: "../imagens/pokemons/156-Quilava.png",
    alt: "Pokémon Quilava",
    tipos: [
      { nome: "Fogo", classe: "but-fogo", link: "../pokemons/fogo.html" }
    ],
    descricao: "Antes da batalha, ele vira as costas para o oponente para demonstrar a ferocidade de suas chamas."
  },
  {
    geracao: "Segunda Geração",
    numero: "0157",
    nome: "Quilava",
    classe: "pokemon-fogo",
    dataTipo: "fogo",
    imagem: "../imagens/pokemons/157-Typhlosion.png",
    alt: "Pokémon Typhlosion",
    tipos: [
      { nome: "Fogo", classe: "but-fogo", link: "../pokemons/fogo.html" }
    ],
    descricao: "Possui um movimento secreto e devastador. Esfrega seu pelo em chamas para causar enormes explosões."
  },
  {
    geracao: "Segunda Geração",
    numero: "0158",
    nome: "Totodile",
    classe: "pokemon-agua",
    dataTipo: "agua",
    imagem: "../imagens/pokemons/158-Totodile.png",
    alt: "Pokémon Totodile",
    tipos: [
      { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" }
    ],
    descricao: "Suas mandíbulas poderosas e bem desenvolvidas são capazes de esmagar qualquer coisa. Até mesmo seu Treinador precisa ter cuidado."
  },
  {
    geracao: "Segunda Geração",
    numero: "0159",
    nome: "Croconaw",
    classe: "pokemon-agua",
    dataTipo: "agua",
    imagem: "../imagens/pokemons/159-Croconaw.png",
    alt: "Pokémon Croconaw",
    tipos: [
      { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" }
    ],
    descricao: "As pontas de suas presas são inclinadas para trás. Uma vez que essas presas se fecham, a presa não tem esperança de escapar."
  },
  {
    geracao: "Segunda Geração",
    numero: "0160",
    nome: "Feraligatr",
    classe: "pokemon-agua",
    dataTipo: "agua",
    imagem: "../imagens/pokemons/160-Feraligatr.png",
    alt: "Pokémon Feraligatr",
    tipos: [
      { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" }
    ],
    descricao: "Geralmente se move lentamente, mas atinge uma velocidade estonteante quando ataca e morde a presa."
  },
  {
  geracao: "Segunda Geração",
  numero: "0161",
  nome: "Sentret",
  classe: "pokemon-normal",
  dataTipo: "normal",
  imagem: "../imagens/pokemons/161-Sentret.png",
  alt: "Pokémon Sentret",
  tipos: [
    { nome: "Normal", classe: "but-normal", link: "../pokemons/normal.html" }
  ],
  descricao: "Este Pokémon é extremamente cauteloso. Sua cauda flexível é bem musculosa e firme ao toque."
},
{
  geracao: "Segunda Geração",
  numero: "0162",
  nome: "Furret",
  classe: "pokemon-normal",
  dataTipo: "normal",
  imagem: "../imagens/pokemons/162-Furret.png",
  alt: "Pokémon Furret",
  tipos: [
    { nome: "Normal", classe: "but-normal", link: "../pokemons/normal.html" }
  ],
  descricao: "Ela cria seus filhotes dentro de um ninho longo e estreito. Quando eles crescem o suficiente, ela os leva para fora do ninho para prepará-los para a independência."
},
{
  geracao: "Segunda Geração",
  numero: "0163",
  nome: "Hoothoot",
  classe: "pokemon-normal",
  dataTipo: "normal voador",
  imagem: "../imagens/pokemons/163-Hoothoot.png",
  alt: "Pokémon Hoothoot",
  tipos: [
    { nome: "Normal", classe: "but-normal", link: "../pokemons/normal.html" },
    { nome: "Voador", classe: "but-voador", link: "../pokemons/voador.html" }
  ],
  descricao: "O relógio biológico de Hoothoot é preciso o tempo todo. Ele inclina a cabeça em um ritmo fixo."
},
{
  geracao: "Segunda Geração",
  numero: "0164",
  nome: "Noctowl",
  classe: "pokemon-normal",
  dataTipo: "normal voador",
  imagem: "../imagens/pokemons/164-Noctowl.png",
  alt: "Pokémon Noctowl",
  tipos: [
    { nome: "Normal", classe: "but-normal", link: "../pokemons/normal.html" },
    { nome: "Voador", classe: "but-voador", link: "../pokemons/voador.html" }
  ],
  descricao: "Seus olhos são especialmente adaptados. Eles concentram até mesmo a luz mais fraca e permitem que ele enxergue no escuro."
},
{
  geracao: "Segunda Geração",
  numero: "0165",
  nome: "Ledyba",
  classe: "pokemon-normal",
  dataTipo: "inseto voador",
  imagem: "../imagens/pokemons/165-Ledyba.png",
  alt: "Pokémon Ledyba",
  tipos: [
    { nome: "Inseto", classe: "but-inseto", link: "../pokemons/inseto.html" },
    { nome: "Voador", classe: "but-voador", link: "../pokemons/voador.html" }
  ],
  descricao: "Este Pokémon é muito sensível ao frio. No calor de Alola, ele se mostra bastante ativo."
},
{
  geracao: "Segunda Geração",
  numero: "0166",
  nome: "Ledian",
  classe: "pokemon-normal",
  dataTipo: "inseto voador",
  imagem: "../imagens/pokemons/166-Ledian.png",
  alt: "Pokémon Ledian",
  tipos: [
    { nome: "Inseto", classe: "but-inseto", link: "../pokemons/inseto.html" },
    { nome: "Voador", classe: "but-voador", link: "../pokemons/voador.html" }
  ],
  descricao: "Diz-se que os padrões em suas costas estão relacionados às estrelas do céu noturno, mas os detalhes dessa relação permanecem obscuros."
},
{
  geracao: "Segunda Geração",
  numero: "0167",
  nome: "Spinarak",
  classe: "pokemon-normal",
  dataTipo: "inseto veneno",
  imagem: "../imagens/pokemons/167-Spinarak.png",
  alt: "Pokémon Ledian",
  tipos: [
    { nome: "Inseto", classe: "but-inseto", link: "../pokemons/inseto.html" },
    { nome: "Veneno", classe: "but-veneno", link: "../pokemons/venenoso.html" }
  ],
  descricao: "Mesmo com presas presas em seu ninho de fios, Spinarak aguardará imóvel até o cair da noite."
},
{
  geracao: "Segunda Geração",
  numero: "0168",
  nome: "Ariados",
  classe: "pokemon-normal",
  dataTipo: "inseto veneno",
  imagem: "../imagens/pokemons/168-Ariados.png",
  alt: "Pokémon Ariados",
  tipos: [
    { nome: "Inseto", classe: "but-inseto", link: "../pokemons/inseto.html" },
    { nome: "Veneno", classe: "but-veneno", link: "../pokemons/venenoso.html" }
  ],
  descricao: "Um único fio especial é fiado incessantemente a partir de sua parte traseira. O fio leva de volta ao seu ninho."
},
{
  geracao: "Segunda Geração",
  numero: "0169",
  nome: "Crobat",
  classe: "pokemon-venenoso",
  dataTipo: "veneno voador",
  imagem: "../imagens/pokemons/169-Crobat.png",
  alt: "Pokémon Crobat",
  tipos: [
    { nome: "Veneno", classe: "but-veneno", link: "../pokemons/venenoso.html" },
    { nome: "Voador", classe: "but-voador", link: "../pokemons/voador.html" }
  ],
  descricao: "Ambas as pernas se transformaram em asas. Sem fazer barulho, Crobat voa velozmente em direção à sua presa e crava suas presas na nuca do alvo."
},
{
  geracao: "Segunda Geração",
  numero: "0170",
  nome: "Chinchou",
  classe: "pokemon-agua",
  dataTipo: "agua eletrico",
  imagem: "../imagens/pokemons/170-Chinchou.png",
  alt: "Pokémon Chinchou",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" },
    { nome: "Elétrico", classe: "but-eletrico", link: "../pokemons/eletrico.html" }
  ],
  descricao: "Vive nas profundezas do oceano, fora do alcance da luz solar. Emite luzes em suas antenas para se comunicar com outros de sua espécie."
},
{
  geracao: "Segunda Geração",
  numero: "0171",
  nome: "Lanturn",
  classe: "pokemon-agua",
  dataTipo: "agua eletrico",
  imagem: "../imagens/pokemons/171-Lanturn.png",
  alt: "Pokémon Lanturn",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" },
    { nome: "Elétrico", classe: "but-eletrico", link: "../pokemons/eletrico.html" }
  ],
  descricao: "Partes de sua barbatana dorsal sofreram mutação, tornando-se as partes que brilham intensamente para atrair presas."
},
{
  geracao: "Segunda Geração",
  numero: "0172",
  nome: "Pichu",
  classe: "pokemon-eletrico",
  dataTipo: "eletrico",
  imagem: "../imagens/pokemons/172-Pichu.png",
  alt: "Pokémon Pichu",
  tipos: [    
    { nome: "Elétrico", classe: "but-eletrico", link: "../pokemons/eletrico.html" }
  ],
  descricao: "É ineficiente no armazenamento de energia elétrica. Qualquer tipo de choque faz com que descarregue energia espontaneamente."
},
{
  geracao: "Segunda Geração",
  numero: "173",
  nome: "Cleffa",
  classe: "pokemon-fada",
  dataTipo: "fada",
  imagem: "../imagens/pokemons/173-Cleffa.png",
  alt: "Pokémon Cleffa",
  tipos: [
    { nome: "Fada", classe: "but-fada", link: "../pokemons/fada.html" }
  ],
  descricao: "Em noites iluminadas por estrelas cadentes, ele olha atentamente para o céu, como se estivesse pensando em seu lar."
},
{
  geracao: "Segunda Geração",
  numero: "0174",
  nome: "Igglybuff",
  classe: "pokemon-fada",
  dataTipo: "fada normal",
  imagem: "../imagens/pokemons/174-Igglybuff.png",
  alt: "Pokémon Igglybuff",
  tipos: [
    { nome: "Normal", classe: "but-normal", link: "../pokemons/normal.html" },
    { nome: "Fada", classe: "but-fada", link: "../pokemons/fada.html" }
  ],
  descricao: "Seu corpo tem um aroma levemente adocicado e é macio e flexível. Se ele quica uma vez, não consegue parar."
},
{
  geracao: "Segunda Geração",
  numero: "175",
  nome: "Togepi",
  classe: "pokemon-fada",
  dataTipo: "fada",
  imagem: "../imagens/pokemons/175-Togepi.png",
  alt: "Pokémon Togepi",
  tipos: [
    { nome: "Fada", classe: "but-fada", link: "../pokemons/fada.html" }
  ],
  descricao: "A concha parece estar repleta de alegria. Diz-se que ela trará boa sorte se for tratada com gentileza."
},
{
  geracao: "Segunda Geração",
  numero: "176",
  nome: "Togetic",
  classe: "pokemon-fada",
  dataTipo: "fada",
  imagem: "../imagens/pokemons/176-Togetic.png",
  alt: "Pokémon Togetic",
  tipos: [
    { nome: "Fada", classe: "but-fada", link: "../pokemons/fada.html" },
    { nome: "Voador", classe: "but-voador", link: "../pokemons/voador.html" }
  ],
  descricao: "Dizem que ela aparecerá diante de pessoas bondosas e carinhosas e as cobrirá de felicidade."
},
{
  geracao: "Segunda Geração",
  numero: "177",
  nome: "Natu",
  classe: "pokemon-psiquico",
  dataTipo: "psiquico voador",
  imagem: "../imagens/pokemons/177-Natu.png",
  alt: "Pokémon Natu",
  tipos: [
    { nome: "Psíquico", classe: "but-psiquico", link: "../pokemons/psiquico.html" },
    { nome: "Voador", classe: "but-voador", link: "../pokemons/voador.html" } 
  ],
  descricao: "É extremamente habilidoso em escalar troncos de árvores e gosta de comer os brotos novos que crescem nas árvores."
},
{
  geracao: "Segunda Geração",
  numero: "178",
  nome: "Xatu",
  classe: "pokemon-psiquico",
  dataTipo: "psiquico voador",
  imagem: "../imagens/pokemons/178-Xatu.png",
  alt: "Pokémon Xatu",
  tipos: [
    { nome: "Psíquico", classe: "but-psiquico", link: "../pokemons/psiquico.html" },
    { nome: "Voador", classe: "but-voador", link: "../pokemons/voador.html" } 
  ],
  descricao: "Dizem que permanece imóvel e silencioso porque está vendo o passado e o futuro ao mesmo tempo."
},
{
  geracao: "Segunda Geração",
  numero: "0179",
  nome: "Mareep",
  classe: "pokemon-eletrico",
  dataTipo: "eletrico",
  imagem: "../imagens/pokemons/179-Mareep.png",
  alt: "Pokémon Mareep",
  tipos: [    
    { nome: "Elétrico", classe: "but-eletrico", link: "../pokemons/eletrico.html" }
  ],
  descricao: "Se a eletricidade estática se acumular em seu corpo, sua lã dobrará de volume. Tocá-la lhe dará um choque."
},
{
  geracao: "Segunda Geração",
  numero: "0180",
  nome: "Flaaffy",
  classe: "pokemon-eletrico",
  dataTipo: "eletrico",
  imagem: "../imagens/pokemons/180-Flaaffy.png",
  alt: "Pokémon Flaaffy",
  tipos: [    
    { nome: "Elétrico", classe: "but-eletrico", link: "../pokemons/eletrico.html" }
  ],
  descricao: "Como resultado do armazenamento excessivo de eletricidade, desenvolveram-se manchas onde nem mesmo a lã macia consegue crescer."
},
{
  geracao: "Segunda Geração",
  numero: "0181",
  nome: "Ampharos",
  classe: "pokemon-eletrico",
  dataTipo: "eletrico",
  imagem: "../imagens/pokemons/181-Ampharos.png",
  alt: "Pokémon Ampharos",
  tipos: [    
    { nome: "Elétrico", classe: "but-eletrico", link: "../pokemons/eletrico.html" }
  ],
  descricao: "A luz brilhante em sua cauda pode ser vista de longe. Ela é valorizada desde os tempos antigos como um farol."
},
{
  geracao: "Segunda Geração",
  numero: "182",
  nome: "Bellossom",
  classe: "pokemon-planta",
  dataTipo: "planta",
  imagem: "../imagens/pokemons/182-Bellossom.png",
  alt: "Pokémon Bellossom",
  tipos: [
    { nome: "Planta", classe: "but-planta", link: "../pokemons/planta.html" }
  ],
  descricao: "Quando se banha sob o sol, gira de forma alegre. Dizem que sua dança ajuda as flores ao redor a florescer."
},
{
  geracao: "Segunda Geração",
  numero: "183",
  nome: "Marill",
  classe: "pokemon-agua",
  dataTipo: "agua fada",
  imagem: "../imagens/pokemons/183-Marill.png",
  alt: "Pokémon Marill",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" },
    { nome: "Fada", classe: "but-fada", link: "../pokemons/fada.html" }
  ],
  descricao: "A ponta de sua cauda funciona como um flutuador, ajudando-o a se manter na superfície da água sem esforço."
},
{
  geracao: "Segunda Geração",
  numero: "184",
  nome: "Azumarill",
  classe: "pokemon-agua",
  dataTipo: "agua fada",
  imagem: "../imagens/pokemons/184-Azumarill.png",
  alt: "Pokémon Azumarill",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" },
    { nome: "Fada", classe: "but-fada", link: "../pokemons/fada.html" }
  ],
  descricao: "Suas longas orelhas permitem ouvir sons distantes, até mesmo quando está à beira de rios com correnteza forte."
},
{
  geracao: "Segunda Geração",
  numero: "185",
  nome: "Sudowoodo",
  classe: "pokemon-rocha",
  dataTipo: "rocha",
  imagem: "../imagens/pokemons/185-Sudowoodo.png",
  alt: "Pokémon Sudowoodo",
  tipos: [
    { nome: "Rocha", classe: "but-rocha", link: "../pokemons/rocha.html" }
  ],
  descricao: "Finge ser uma árvore para evitar ataques, mas sua verdadeira natureza aparece assim que alguém tenta regá-lo."
},
{
  geracao: "Segunda Geração",
  numero: "186",
  nome: "Politoed",
  classe: "pokemon-agua",
  dataTipo: "agua",
  imagem: "../imagens/pokemons/186-Politoed.png",
  alt: "Pokémon Politoed",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" }
  ],
  descricao: "Seu canto poderoso ecoa longe. Quando vários se reúnem e coaxam juntos, os Poliwag e Poliwhirl obedecem."
},
{
  geracao: "Segunda Geração",
  numero: "187",
  nome: "Hoppip",
  classe: "pokemon-planta",
  dataTipo: "planta voador",
  imagem: "../imagens/pokemons/187-Hoppip.png",
  alt: "Pokémon Hoppip",
  tipos: [
    { nome: "Planta", classe: "but-planta", link: "../pokemons/planta.html" },
    { nome: "Voador", classe: "but-voador", link: "../pokemons/voador.html" }
  ],
  descricao: "Seu corpo é tão leve que o vento pode carregá-lo para longe. Por isso, às vezes ele se agarra ao solo."
},
{
  geracao: "Segunda Geração",
  numero: "188",
  nome: "Skiploom",
  classe: "pokemon-planta",
  dataTipo: "planta voador",
  imagem: "../imagens/pokemons/188-Skiploom.png",
  alt: "Pokémon Skiploom",
  tipos: [
    { nome: "Planta", classe: "but-planta", link: "../pokemons/planta.html" },
    { nome: "Voador", classe: "but-voador", link: "../pokemons/voador.html" }
  ],
  descricao: "Assim que a temperatura sobe e a primavera chega, ele floresce e passa a flutuar suavemente pelo ar."
},
{
  geracao: "Segunda Geração",
  numero: "189",
  nome: "Jumpluff",
  classe: "pokemon-planta",
  dataTipo: "planta voador",
  imagem: "../imagens/pokemons/189-Jumpluff.png",
  alt: "Pokémon Jumpluff",
  tipos: [
    { nome: "Planta", classe: "but-planta", link: "../pokemons/planta.html" },
    { nome: "Voador", classe: "but-voador", link: "../pokemons/voador.html" }
  ],
  descricao: "Ele se deixa levar pelos ventos do mundo inteiro. Quando encontra um lugar adequado, espalha suas sementes."
},
{
  geracao: "Segunda Geração",
  numero: "190",
  nome: "Aipom",
  classe: "pokemon-normal",
  dataTipo: "normal",
  imagem: "../imagens/pokemons/190-Aipom.png",
  alt: "Pokémon Aipom",
  tipos: [
    { nome: "Normal", classe: "but-normal", link: "../pokemons/normal.html" }
  ],
  descricao: "Usa a cauda com tanta habilidade quanto as mãos. Ela serve para se pendurar e também para pegar objetos."
},
{
  geracao: "Segunda Geração",
  numero: "191",
  nome: "Sunkern",
  classe: "pokemon-planta",
  dataTipo: "planta",
  imagem: "../imagens/pokemons/191-Sunkern.png",
  alt: "Pokémon Sunkern",
  tipos: [
    { nome: "Planta", classe: "but-planta", link: "../pokemons/planta.html" }
  ],
  descricao: "Ele tenta se mover o mínimo possível para guardar nutrientes. Vive à espera do momento de evoluir."
},
{
  geracao: "Segunda Geração",
  numero: "192",
  nome: "Sunflora",
  classe: "pokemon-planta",
  dataTipo: "planta",
  imagem: "../imagens/pokemons/192-Sunflora.png",
  alt: "Pokémon Sunflora",
  tipos: [
    { nome: "Planta", classe: "but-planta", link: "../pokemons/planta.html" }
  ],
  descricao: "Transforma a luz do sol em energia com grande eficiência. Durante o dia, seu corpo fica repleto de vitalidade."
},
{
  geracao: "Segunda Geração",
  numero: "193",
  nome: "Yanma",
  classe: "pokemon-inseto",
  dataTipo: "inseto voador",
  imagem: "../imagens/pokemons/193-Yanma.png",
  alt: "Pokémon Yanma",
  tipos: [
    { nome: "Inseto", classe: "but-inseto", link: "../pokemons/inseto.html" },
    { nome: "Voador", classe: "but-voador", link: "../pokemons/voador.html" }
  ],
  descricao: "Consegue mudar de direção rapidamente enquanto voa. Usa esse talento para perseguir insetos em pleno ar."
},
{
  geracao: "Segunda Geração",
  numero: "194",
  nome: "Wooper",
  classe: "pokemon-agua",
  dataTipo: "agua terra",
  imagem: "../imagens/pokemons/194-Wooper.png",
  alt: "Pokémon Wooper",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" },
    { nome: "Terra", classe: "but-terra", link: "../pokemons/terra.html" }
  ],
  descricao: "Costuma viver em águas frias. À noite, sai para a terra firme em busca de alimento."
},
{
  geracao: "Segunda Geração",
  numero: "195",
  nome: "Quagsire",
  classe: "pokemon-agua",
  dataTipo: "agua terra",
  imagem: "../imagens/pokemons/195-Quagsire.png",
  alt: "Pokémon Quagsire",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" },
    { nome: "Terra", classe: "but-terra", link: "../pokemons/terra.html" }
  ],
  descricao: "É tão tranquilo que às vezes bate a cabeça no fundo do rio sem nem perceber o que aconteceu."
},
{
  geracao: "Segunda Geração",
  numero: "196",
  nome: "Espeon",
  classe: "pokemon-psiquico",
  dataTipo: "psiquico",
  imagem: "../imagens/pokemons/196-Espeon.png",
  alt: "Pokémon Espeon",
  tipos: [
    { nome: "Psíquico", classe: "but-psiquico", link: "../pokemons/psiquico.html" }
  ],
  descricao: "Seu pelo fino sente mudanças no ar, permitindo prever o movimento do inimigo antes mesmo do ataque."
},
{
  geracao: "Segunda Geração",
  numero: "197",
  nome: "Umbreon",
  classe: "pokemon-noturno",
  dataTipo: "sombrio",
  imagem: "../imagens/pokemons/197-Umbreon.png",
  alt: "Pokémon Umbreon",
  tipos: [
    { nome: "Sombrio", classe: "but-sombrio", link: "../pokemons/sombrio.html" }
  ],
  descricao: "Quando a lua brilha, os anéis em seu corpo se iluminam. Ele então espreita silenciosamente na escuridão."
},
{
  geracao: "Segunda Geração",
  numero: "198",
  nome: "Murkrow",
  classe: "pokemon-noturno",
  dataTipo: "sombrio voador",
  imagem: "../imagens/pokemons/198-Murkrow.png",
  alt: "Pokémon Murkrow",
  tipos: [
    { nome: "Sombrio", classe: "but-sombrio", link: "../pokemons/sombrio.html" },
    { nome: "Voador", classe: "but-voador", link: "../pokemons/voador.html" }
  ],
  descricao: "É temido por muitos por surgir à noite. Seu grito repentino costuma assustar quem anda sozinho."
},
{
  geracao: "Segunda Geração",
  numero: "199",
  nome: "Slowking",
  classe: "pokemon-agua",
  dataTipo: "agua psiquico",
  imagem: "../imagens/pokemons/199-Slowking.png",
  alt: "Pokémon Slowking",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" },
    { nome: "Psíquico", classe: "but-psiquico", link: "../pokemons/psiquico.html" }
  ],
  descricao: "Depois de receber a mordida de Shellder, sua inteligência cresceu muito, tornando-o incrivelmente sábio."
},
{
  geracao: "Segunda Geração",
  numero: "200",
  nome: "Misdreavus",
  classe: "pokemon-fantasma",
  dataTipo: "fantasma",
  imagem: "../imagens/pokemons/200-Misdreavus.png",
  alt: "Pokémon Misdreavus",
  tipos: [
    { nome: "Fantasma", classe: "but-fantasma", link: "../pokemons/fantasma.html" }
  ],
  descricao: "Adora assustar as pessoas com choros e gritos inesperados, absorvendo a energia do medo que provoca."
},
{
  geracao: "Segunda Geração",
  numero: "201",
  nome: "Unown",
  classe: "pokemon-psiquico",
  dataTipo: "psiquico",
  imagem: "../imagens/pokemons/201-Unown.png",
  alt: "Pokémon Unown",
  tipos: [
    { nome: "Psíquico", classe: "but-psiquico", link: "../pokemons/psiquico.html" }
  ],
  descricao: "Seu formato lembra antigas letras. Ainda se estuda se esses símbolos escondem algum poder misterioso."
},
{
  geracao: "Segunda Geração",
  numero: "202",
  nome: "Wobbuffet",
  classe: "pokemon-psiquico",
  dataTipo: "psiquico",
  imagem: "../imagens/pokemons/202-Wobbuffet.png",
  alt: "Pokémon Wobbuffet",
  tipos: [
    { nome: "Psíquico", classe: "but-psiquico", link: "../pokemons/psiquico.html" }
  ],
  descricao: "Ele prefere não atacar por conta própria. Aguarda pacientemente até que o adversário golpeie primeiro."
},
{
  geracao: "Segunda Geração",
  numero: "203",
  nome: "Girafarig",
  classe: "pokemon-normal",
  dataTipo: "normal psiquico",
  imagem: "../imagens/pokemons/203-Girafarig.png",
  alt: "Pokémon Girafarig",
  tipos: [
    { nome: "Normal", classe: "but-normal", link: "../pokemons/normal.html" },
    { nome: "Psíquico", classe: "but-psiquico", link: "../pokemons/psiquico.html" }
  ],
  descricao: "A cabeça da cauda possui um pequeno cérebro próprio. Por isso, fica alerta mesmo quando ele dorme."
},
{
  geracao: "Segunda Geração",
  numero: "204",
  nome: "Pineco",
  classe: "pokemon-inseto",
  dataTipo: "inseto",
  imagem: "../imagens/pokemons/204-Pineco.png",
  alt: "Pokémon Pineco",
  tipos: [
    { nome: "Inseto", classe: "but-inseto", link: "../pokemons/inseto.html" }
  ],
  descricao: "Ele se pendura nos galhos e permanece imóvel. Se algo o incomoda, pode explodir sem aviso."
},
{
  geracao: "Segunda Geração",
  numero: "205",
  nome: "Forretress",
  classe: "pokemon-inseto",
  dataTipo: "inseto steel",
  imagem: "../imagens/pokemons/205-Forretress.png",
  alt: "Pokémon Forretress",
  tipos: [
    { nome: "Inseto", classe: "but-inseto", link: "../pokemons/inseto.html" },
    { nome: "Steel", classe: "but-steel", link: "../pokemons/steel.html" }
  ],
  descricao: "Seu interior continua sendo um mistério, pois a grossa carapaça de aço o protege por completo."
},
{
  geracao: "Segunda Geração",
  numero: "206",
  nome: "Dunsparce",
  classe: "pokemon-normal",
  dataTipo: "normal",
  imagem: "../imagens/pokemons/206-Dunsparce.png",
  alt: "Pokémon Dunsparce",
  tipos: [
    { nome: "Normal", classe: "but-normal", link: "../pokemons/normal.html" }
  ],
  descricao: "Ele cava com a cauda e se esconde no subsolo. É raro aparecer em lugares abertos."
},
{
  geracao: "Segunda Geração",
  numero: "207",
  nome: "Gligar",
  classe: "pokemon-terra",
  dataTipo: "terra voador",
  imagem: "../imagens/pokemons/207-Gligar.png",
  alt: "Pokémon Gligar",
  tipos: [
    { nome: "Terra", classe: "but-terra", link: "../pokemons/terra.html" },
    { nome: "Voador", classe: "but-voador", link: "../pokemons/voador.html" }
  ],
  descricao: "Ele abre as asas e desliza pelo ar. Ao se aproximar do alvo, ataca usando as garras traseiras."
},
{
  geracao: "Segunda Geração",
  numero: "208",
  nome: "Steelix",
  classe: "pokemon-steel",
  dataTipo: "aco terra",
  imagem: "../imagens/pokemons/208-Steelix.png",
  alt: "Pokémon Steelix",
  tipos: [
    { nome: "Aço", classe: "but-steel", link: "../pokemons/aco.html" },
    { nome: "Terra", classe: "but-terra", link: "../pokemons/terra.html" }
  ],
  descricao: "Seu corpo foi comprimido e endurecido ao longo de muitos anos sob a terra, tornando-se resistente como aço."
},
{
  geracao: "Segunda Geração",
  numero: "209",
  nome: "Snubbull",
  classe: "pokemon-fada",
  dataTipo: "fada",
  imagem: "../imagens/pokemons/209-Snubbull.png",
  alt: "Pokémon Snubbull",
  tipos: [
    { nome: "Fada", classe: "but-fada", link: "../pokemons/fada.html" }
  ],
  descricao: "Apesar da aparência intimidadora, é carinhoso e brincalhão, o que faz muita gente se apegar a ele."
},
{
  geracao: "Segunda Geração",
  numero: "210",
  nome: "Granbull",
  classe: "pokemon-fada",
  dataTipo: "fada",
  imagem: "../imagens/pokemons/210-Granbull.png",
  alt: "Pokémon Granbull",
  tipos: [
    { nome: "Fada", classe: "but-fada", link: "../pokemons/fada.html" }
  ],
  descricao: "Sua mandíbula é muito poderosa, mas ele costuma preferir resolver tudo com pouca agressividade."
},
{
  geracao: "Segunda Geração",
  numero: "211",
  nome: "Qwilfish",
  classe: "pokemon-agua",
  dataTipo: "agua venenoso",
  imagem: "../imagens/pokemons/211-Qwilfish.png",
  alt: "Pokémon Qwilfish",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" },
    { nome: "Venenoso", classe: "but-veneno", link: "../pokemons/venenoso.html" }
  ],
  descricao: "Ao engolir água rapidamente, seu corpo incha e os espinhos venenosos ficam ainda mais perigosos."
},
{
  geracao: "Segunda Geração",
  numero: "212",
  nome: "Scizor",
  classe: "pokemon-inseto",
  dataTipo: "inseto steel",
  imagem: "../imagens/pokemons/212-Scizor.png",
  alt: "Pokémon Scizor",
  tipos: [
    { nome: "Inseto", classe: "but-inseto", link: "../pokemons/inseto.html" },
    { nome: "Steel", classe: "but-steel", link: "../pokemons/steel.html" }
  ],
  descricao: "Suas pinças parecem pesadas e ameaçadoras, mas servem também para intimidar o adversário antes do combate."
},
{
  geracao: "Segunda Geração",
  numero: "213",
  nome: "Shuckle",
  classe: "pokemon-inseto",
  dataTipo: "inseto rocha",
  imagem: "../imagens/pokemons/213-Shuckle.png",
  alt: "Pokémon Shuckle",
  tipos: [
    { nome: "Inseto", classe: "but-inseto", link: "../pokemons/inseto.html" },
    { nome: "Rocha", classe: "but-rocha", link: "../pokemons/rocha.html" }
  ],
  descricao: "Ele guarda frutas dentro da carapaça e, com o tempo, transforma o líquido em algo parecido com suco."
},
{
  geracao: "Segunda Geração",
  numero: "214",
  nome: "Heracross",
  classe: "pokemon-inseto",
  dataTipo: "inseto lutador",
  imagem: "../imagens/pokemons/214-Heracross.png",
  alt: "Pokémon Heracross",
  tipos: [
    { nome: "Inseto", classe: "but-inseto", link: "../pokemons/inseto.html" },
    { nome: "Lutador", classe: "but-lutador", link: "../pokemons/lutador.html" }
  ],
  descricao: "Usa sua força impressionante para arremessar oponentes maiores que ele, aproveitando o chifre para golpear."
},
{
  geracao: "Segunda Geração",
  numero: "215",
  nome: "Sneasel",
  classe: "pokemon-noturno",
  dataTipo: "sombrio gelo",
  imagem: "../imagens/pokemons/215-Sneasel.png",
  alt: "Pokémon Sneasel",
  tipos: [
    { nome: "Sombrio", classe: "but-sombrio", link: "../pokemons/sombrio.html" },
    { nome: "Gelo", classe: "but-gelo", link: "../pokemons/gelo.html" }
  ],
  descricao: "É ágil e sorrateiro. Ataca de surpresa usando as garras afiadas antes que o inimigo perceba."
},
{
  geracao: "Segunda Geração",
  numero: "216",
  nome: "Teddiursa",
  classe: "pokemon-normal",
  dataTipo: "normal",
  imagem: "../imagens/pokemons/216-Teddiursa.png",
  alt: "Pokémon Teddiursa",
  tipos: [
    { nome: "Normal", classe: "but-normal", link: "../pokemons/normal.html" }
  ],
  descricao: "Ele adora mel e costuma lamber as patas cheias de doçura, guardando um aroma agradável no corpo."
},
{
  geracao: "Segunda Geração",
  numero: "217",
  nome: "Ursaring",
  classe: "pokemon-normal",
  dataTipo: "normal",
  imagem: "../imagens/pokemons/217-Ursaring.png",
  alt: "Pokémon Ursaring",
  tipos: [
    { nome: "Normal", classe: "but-normal", link: "../pokemons/normal.html" }
  ],
  descricao: "Apesar de feroz, é excelente em encontrar comida na floresta, especialmente frutas e mel."
},
{
  geracao: "Segunda Geração",
  numero: "218",
  nome: "Slugma",
  classe: "pokemon-fogo",
  dataTipo: "fogo",
  imagem: "../imagens/pokemons/218-Slugma.png",
  alt: "Pokémon Slugma",
  tipos: [
    { nome: "Fogo", classe: "but-fogo", link: "../pokemons/fogo.html" }
  ],
  descricao: "Seu corpo é composto de magma. Se partes dele se soltam, voltam a se recompor pouco depois."
},
{
  geracao: "Segunda Geração",
  numero: "219",
  nome: "Magcargo",
  classe: "pokemon-fogo",
  dataTipo: "fogo rocha",
  imagem: "../imagens/pokemons/219-Magcargo.png",
  alt: "Pokémon Magcargo",
  tipos: [
    { nome: "Fogo", classe: "but-fogo", link: "../pokemons/fogo.html" },
    { nome: "Rocha", classe: "but-rocha", link: "../pokemons/rocha.html" }
  ],
  descricao: "A carapaça dura em suas costas se formou a partir do resfriamento de sua pele flamejante."
},
{
  geracao: "Segunda Geração",
  numero: "220",
  nome: "Swinub",
  classe: "pokemon-gelo",
  dataTipo: "gelo terra",
  imagem: "../imagens/pokemons/220-Swinub.png",
  alt: "Pokémon Swinub",
  tipos: [
    { nome: "Gelo", classe: "but-gelo", link: "../pokemons/gelo.html" },
    { nome: "Terra", classe: "but-terra", link: "../pokemons/terra.html" }
  ],
  descricao: "Ele esfrega o focinho no chão para encontrar comida escondida sob a neve e o gelo."
},
{
  geracao: "Segunda Geração",
  numero: "221",
  nome: "Piloswine",
  classe: "pokemon-gelo",
  dataTipo: "gelo terra",
  imagem: "../imagens/pokemons/221-Piloswine.png",
  alt: "Pokémon Piloswine",
  tipos: [
    { nome: "Gelo", classe: "but-gelo", link: "../pokemons/gelo.html" },
    { nome: "Terra", classe: "but-terra", link: "../pokemons/terra.html" }
  ],
  descricao: "O pelo espesso o protege do frio extremo, e suas presas são fortes o bastante para escavar superfícies congeladas."
},
{
  geracao: "Segunda Geração",
  numero: "222",
  nome: "Corsola",
  classe: "pokemon-agua",
  dataTipo: "agua rocha",
  imagem: "../imagens/pokemons/222-Corsola.png",
  alt: "Pokémon Corsola",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" },
    { nome: "Rocha", classe: "but-rocha", link: "../pokemons/rocha.html" }
  ],
  descricao: "Os galhos em sua cabeça crescem e se renovam continuamente, dando forma ao belo coral rosa."
},
{
  geracao: "Segunda Geração",
  numero: "223",
  nome: "Remoraid",
  classe: "pokemon-agua",
  dataTipo: "agua",
  imagem: "../imagens/pokemons/223-Remoraid.png",
  alt: "Pokémon Remoraid",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" }
  ],
  descricao: "Ele mira com precisão impressionante e dispara jatos d'água como se estivesse lançando projéteis."
},
{
  geracao: "Segunda Geração",
  numero: "224",
  nome: "Octillery",
  classe: "pokemon-agua",
  dataTipo: "agua",
  imagem: "../imagens/pokemons/224-Octillery.png",
  alt: "Pokémon Octillery",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" }
  ],
  descricao: "Consegue prender o inimigo com os tentáculos e então atacar à curta distância sem dar chance de fuga."
},
{
  geracao: "Segunda Geração",
  numero: "225",
  nome: "Delibird",
  classe: "pokemon-gelo",
  dataTipo: "gelo voador",
  imagem: "../imagens/pokemons/225-Delibird.png",
  alt: "Pokémon Delibird",
  tipos: [
    { nome: "Gelo", classe: "but-gelo", link: "../pokemons/gelo.html" },
    { nome: "Voador", classe: "but-voador", link: "../pokemons/voador.html" }
  ],
  descricao: "Ele carrega comida na cauda enrolada e a distribui em regiões frias e montanhosas."
},
{
  geracao: "Segunda Geração",
  numero: "226",
  nome: "Mantine",
  classe: "pokemon-agua",
  dataTipo: "agua voador",
  imagem: "../imagens/pokemons/226-Mantine.png",
  alt: "Pokémon Mantine",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" },
    { nome: "Voador", classe: "but-voador", link: "../pokemons/voador.html" }
  ],
  descricao: "Nada de forma elegante pelo oceano, às vezes acompanhado por Remoraid presos em seu corpo."
},
{
  geracao: "Segunda Geração",
  numero: "227",
  nome: "Skarmory",
  classe: "pokemon-steel",
  dataTipo: "aco voador",
  imagem: "../imagens/pokemons/227-Skarmory.png",
  alt: "Pokémon Skarmory",
  tipos: [
    { nome: "Aço", classe: "but-steel", link: "../pokemons/aco.html" },
    { nome: "Voador", classe: "but-voador", link: "../pokemons/voador.html" }
  ],
  descricao: "Seu corpo metálico é resistente, e as asas cortantes podem ferir o adversário como lâminas."
},
{
  geracao: "Segunda Geração",
  numero: "228",
  nome: "Houndour",
  classe: "pokemon-noturno",
  dataTipo: "sombrio fogo",
  imagem: "../imagens/pokemons/228-Houndour.png",
  alt: "Pokémon Houndour",
  tipos: [
    { nome: "Sombrio", classe: "but-sombrio", link: "../pokemons/sombrio.html" },
    { nome: "Fogo", classe: "but-fogo", link: "../pokemons/fogo.html" }
  ],
  descricao: "Ele trabalha em grupo para caçar. Seus uivos em conjunto criam um som assustador durante a noite."
},
{
  geracao: "Segunda Geração",
  numero: "229",
  nome: "Houndoom",
  classe: "pokemon-noturno",
  dataTipo: "sombrio fogo",
  imagem: "../imagens/pokemons/229-Houndoom.png",
  alt: "Pokémon Houndoom",
  tipos: [
    { nome: "Sombrio", classe: "but-sombrio", link: "../pokemons/sombrio.html" },
    { nome: "Fogo", classe: "but-fogo", link: "../pokemons/fogo.html" }
  ],
  descricao: "Seu hálito flamejante pode causar dor duradoura. Dizem que a marca da queimadura nunca desaparece."
},
{
  geracao: "Segunda Geração",
  numero: "230",
  nome: "Kingdra",
  classe: "pokemon-agua",
  dataTipo: "agua dragao",
  imagem: "../imagens/pokemons/230-Kingdra.png",
  alt: "Pokémon Kingdra",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" },
    { nome: "Dragão", classe: "but-dragao", link: "../pokemons/dragao.html" }
  ],
  descricao: "Vive em regiões oceânicas profundas. Quando boceja, pode formar redemoinhos ao redor do corpo."
},
{
  geracao: "Segunda Geração",
  numero: "231",
  nome: "Phanpy",
  classe: "pokemon-terra",
  dataTipo: "terra",
  imagem: "../imagens/pokemons/231-Phanpy.png",
  alt: "Pokémon Phanpy",
  tipos: [
    { nome: "Terra", classe: "but-terra", link: "../pokemons/terra.html" }
  ],
  descricao: "É pequeno, mas surpreendentemente forte. Gosta de brincar usando a tromba para erguer coisas."
},
{
  geracao: "Segunda Geração",
  numero: "232",
  nome: "Donphan",
  classe: "pokemon-terra",
  dataTipo: "terra",
  imagem: "../imagens/pokemons/232-Donphan.png",
  alt: "Pokémon Donphan",
  tipos: [
    { nome: "Terra", classe: "but-terra", link: "../pokemons/terra.html" }
  ],
  descricao: "Quando enrola o corpo para atacar, sua investida é tão poderosa que pode derrubar grandes obstáculos."
},
{
  geracao: "Segunda Geração",
  numero: "233",
  nome: "Porygon2",
  classe: "pokemon-normal",
  dataTipo: "normal",
  imagem: "../imagens/pokemons/233-Porygon2.png",
  alt: "Pokémon Porygon2",
  tipos: [
    { nome: "Normal", classe: "but-normal", link: "../pokemons/normal.html" }
  ],
  descricao: "Ele foi desenvolvido por meio de melhorias tecnológicas, tornando-se mais avançado que seu modelo anterior."
},
{
  geracao: "Segunda Geração",
  numero: "234",
  nome: "Stantler",
  classe: "pokemon-normal",
  dataTipo: "normal",
  imagem: "../imagens/pokemons/234-Stantler.png",
  alt: "Pokémon Stantler",
  tipos: [
    { nome: "Normal", classe: "but-normal", link: "../pokemons/normal.html" }
  ],
  descricao: "Os chifres curvos criam uma sensação estranha em quem os observa por muito tempo, quase como hipnose."
},
{
  geracao: "Segunda Geração",
  numero: "235",
  nome: "Smeargle",
  classe: "pokemon-normal",
  dataTipo: "normal",
  imagem: "../imagens/pokemons/235-Smeargle.png",
  alt: "Pokémon Smeargle",
  tipos: [
    { nome: "Normal", classe: "but-normal", link: "../pokemons/normal.html" }
  ],
  descricao: "Ele marca seu território com a tinta liberada pela ponta da cauda, sempre criando padrões únicos."
},
{
  geracao: "Segunda Geração",
  numero: "236",
  nome: "Tyrogue",
  classe: "pokemon-lutador",
  dataTipo: "lutador",
  imagem: "../imagens/pokemons/236-Tyrogue.png",
  alt: "Pokémon Tyrogue",
  tipos: [
    { nome: "Lutador", classe: "but-lutador", link: "../pokemons/lutador.html" }
  ],
  descricao: "Ele desafia qualquer um para treinar. Quanto mais luta, mais rápido fortalece seu corpo."
},
{
  geracao: "Segunda Geração",
  numero: "237",
  nome: "Hitmontop",
  classe: "pokemon-lutador",
  dataTipo: "lutador",
  imagem: "../imagens/pokemons/237-Hitmontop.png",
  alt: "Pokémon Hitmontop",
  tipos: [
    { nome: "Lutador", classe: "but-lutador", link: "../pokemons/lutador.html" }
  ],
  descricao: "Ele gira velozmente sobre a cabeça e ataca com chutes capazes de perfurar o solo."
},
{
  geracao: "Segunda Geração",
  numero: "238",
  nome: "Smoochum",
  classe: "pokemon-gelo",
  dataTipo: "gelo psiquico",
  imagem: "../imagens/pokemons/238-Smoochum.png",
  alt: "Pokémon Smoochum",
  tipos: [
    { nome: "Gelo", classe: "but-gelo", link: "../pokemons/gelo.html" },
    { nome: "Psíquico", classe: "but-psiquico", link: "../pokemons/psiquico.html" }
  ],
  descricao: "Ela testa tudo com os lábios sensíveis, sempre tentando descobrir novas sensações ao seu redor."
},
{
  geracao: "Segunda Geração",
  numero: "239",
  nome: "Elekid",
  classe: "pokemon-eletrico",
  dataTipo: "eletrico",
  imagem: "../imagens/pokemons/239-Elekid.png",
  alt: "Pokémon Elekid",
  tipos: [
    { nome: "Elétrico", classe: "but-eletrico", link: "../pokemons/eletrico.html" }
  ],
  descricao: "Quando gira os braços, produz eletricidade. Durante tempestades, fica especialmente cheio de energia."
},
{
  geracao: "Segunda Geração",
  numero: "240",
  nome: "Magby",
  classe: "pokemon-fogo",
  dataTipo: "fogo",
  imagem: "../imagens/pokemons/240-Magby.png",
  alt: "Pokémon Magby",
  tipos: [
    { nome: "Fogo", classe: "but-fogo", link: "../pokemons/fogo.html" }
  ],
  descricao: "Sua temperatura corporal é muito alta. A fumaça que sai da cabeça mostra o quanto está aquecido."
},
{
  geracao: "Segunda Geração",
  numero: "241",
  nome: "Miltank",
  classe: "pokemon-normal",
  dataTipo: "normal",
  imagem: "../imagens/pokemons/241-Miltank.png",
  alt: "Pokémon Miltank",
  tipos: [
    { nome: "Normal", classe: "but-normal", link: "../pokemons/normal.html" }
  ],
  descricao: "Seu leite é extremamente nutritivo. Por isso, é muito apreciado tanto por crianças quanto por adultos."
},
{
  geracao: "Segunda Geração",
  numero: "242",
  nome: "Blissey",
  classe: "pokemon-normal",
  dataTipo: "normal",
  imagem: "../imagens/pokemons/242-Blissey.png",
  alt: "Pokémon Blissey",
  tipos: [
    { nome: "Normal", classe: "but-normal", link: "../pokemons/normal.html" }
  ],
  descricao: "Ela sente quando alguém está triste ou ferido e corre até essa pessoa para oferecer ajuda."
},
{
  geracao: "Segunda Geração",
  numero: "243",
  nome: "Raikou",
  classe: "pokemon-eletrico",
  dataTipo: "eletrico",
  imagem: "../imagens/pokemons/243-Raikou.png",
  alt: "Pokémon Raikou",
  tipos: [
    { nome: "Elétrico", classe: "but-eletrico", link: "../pokemons/eletrico.html" }
  ],
  descricao: "Ele carrega a velocidade do raio. O rugido que emite lembra o som de trovões ecoando pelo céu."
},
{
  geracao: "Segunda Geração",
  numero: "244",
  nome: "Entei",
  classe: "pokemon-fogo",
  dataTipo: "fogo",
  imagem: "../imagens/pokemons/244-Entei.png",
  alt: "Pokémon Entei",
  tipos: [
    { nome: "Fogo", classe: "but-fogo", link: "../pokemons/fogo.html" }
  ],
  descricao: "Dizem que ele nasce quando um vulcão entra em erupção e carrega a força ardente do magma."
},
{
  geracao: "Segunda Geração",
  numero: "245",
  nome: "Suicune",
  classe: "pokemon-agua",
  dataTipo: "agua",
  imagem: "../imagens/pokemons/245-Suicune.png",
  alt: "Pokémon Suicune",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" }
  ],
  descricao: "Ele percorre o mundo purificando águas poluídas, movendo-se com uma elegância quase impossível."
},
{
  geracao: "Segunda Geração",
  numero: "246",
  nome: "Larvitar",
  classe: "pokemon-rocha",
  dataTipo: "rocha terra",
  imagem: "../imagens/pokemons/246-Larvitar.png",
  alt: "Pokémon Larvitar",
  tipos: [
    { nome: "Rocha", classe: "but-rocha", link: "../pokemons/rocha.html" },
    { nome: "Terra", classe: "but-terra", link: "../pokemons/terra.html" }
  ],
  descricao: "Ele nasce nas profundezas da terra e precisa comer muito solo antes de sair para a superfície."
},
{
  geracao: "Segunda Geração",
  numero: "247",
  nome: "Pupitar",
  classe: "pokemon-rocha",
  dataTipo: "rocha terra",
  imagem: "../imagens/pokemons/247-Pupitar.png",
  alt: "Pokémon Pupitar",
  tipos: [
    { nome: "Rocha", classe: "but-rocha", link: "../pokemons/rocha.html" },
    { nome: "Terra", classe: "but-terra", link: "../pokemons/terra.html" }
  ],
  descricao: "Seu corpo rígido esconde um poder crescente. Ele se move com violência para liberar energia acumulada."
},
{
  geracao: "Segunda Geração",
  numero: "248",
  nome: "Tyranitar",
  classe: "pokemon-rocha",
  dataTipo: "rocha sombrio",
  imagem: "../imagens/pokemons/248-Tyranitar.png",
  alt: "Pokémon Tyranitar",
  tipos: [
    { nome: "Rocha", classe: "but-rocha", link: "../pokemons/rocha.html" },
    { nome: "Sombrio", classe: "but-sombrio", link: "../pokemons/sombrio.html" }
  ],
  descricao: "Quando entra em fúria, derruba montanhas e transforma o terreno ao redor com sua força absurda."
},
{
  geracao: "Segunda Geração",
  numero: "249",
  nome: "Lugia",
  classe: "pokemon-psiquico",
  dataTipo: "psiquico voador",
  imagem: "../imagens/pokemons/249-Lugia.png",
  alt: "Pokémon Lugia",
  tipos: [
    { nome: "Psíquico", classe: "but-psiquico", link: "../pokemons/psiquico.html" },
    { nome: "Voador", classe: "but-voador", link: "../pokemons/voador.html" }
  ],
  descricao: "Seu poder é tão grande que ele prefere viver isolado nas profundezas do mar para evitar destruição."
},
{
  geracao: "Segunda Geração",
  numero: "250",
  nome: "Ho-Oh",
  classe: "pokemon-fogo",
  dataTipo: "fogo voador",
  imagem: "../imagens/pokemons/250-Ho-Oh.png",
  alt: "Pokémon Ho-Oh",
  tipos: [
    { nome: "Fogo", classe: "but-fogo", link: "../pokemons/fogo.html" },
    { nome: "Voador", classe: "but-voador", link: "../pokemons/voador.html" }
  ],
  descricao: "Suas penas brilham em várias cores conforme a luz. Dizem que sua aparição traz felicidade."
},
{
  geracao: "Segunda Geração",
  numero: "251",
  nome: "Celebi",
  classe: "pokemon-psiquico",
  dataTipo: "psiquico planta",
  imagem: "../imagens/pokemons/251-Celebi.png",
  alt: "Pokémon Celebi",
  tipos: [
    { nome: "Psíquico", classe: "but-psiquico", link: "../pokemons/psiquico.html" },
    { nome: "Planta", classe: "but-planta", link: "../pokemons/planta.html" }
  ],
  descricao: "Celebi atravessa o tempo e aparece em florestas cheias de vida. Sua presença é sinal de tempos prósperos."
},

//Terceira Geração
{
  geracao: "Terceira Geração",
  numero: "252",
  nome: "Treecko",
  classe: "pokemon-planta",
  dataTipo: "planta",
  imagem: "../imagens/pokemons/252-Treecko.png",
  alt: "Pokémon Treecko",
  tipos: [
    { nome: "Planta", classe: "but-planta", link: "../pokemons/planta.html" }
  ],
  descricao: "Calmo e ágil, ele escala paredes com facilidade e usa a cauda para manter o equilíbrio."
},
{
  geracao: "Terceira Geração",
  numero: "253",
  nome: "Grovyle",
  classe: "pokemon-planta",
  dataTipo: "planta",
  imagem: "../imagens/pokemons/253-Grovyle.png",
  alt: "Pokémon Grovyle",
  tipos: [
    { nome: "Planta", classe: "but-planta", link: "../pokemons/planta.html" }
  ],
  descricao: "Movimenta-se velozmente entre as árvores e surpreende os inimigos com ataques vindos do alto."
},
{
  geracao: "Terceira Geração",
  numero: "254",
  nome: "Sceptile",
  classe: "pokemon-planta",
  dataTipo: "planta",
  imagem: "../imagens/pokemons/254-Sceptile.png",
  alt: "Pokémon Sceptile",
  tipos: [
    { nome: "Planta", classe: "but-planta", link: "../pokemons/planta.html" }
  ],
  descricao: "As sementes em suas costas parecem cheias de vida, e ele domina as florestas com grande agilidade."
},
{
  geracao: "Terceira Geração",
  numero: "255",
  nome: "Torchic",
  classe: "pokemon-fogo",
  dataTipo: "fogo",
  imagem: "../imagens/pokemons/255-Torchic.png",
  alt: "Pokémon Torchic",
  tipos: [
    { nome: "Fogo", classe: "but-fogo", link: "../pokemons/fogo.html" }
  ],
  descricao: "Seu corpo é quente por dentro, e ele segue seu treinador com passos curtos e alegres."
},
{
  geracao: "Terceira Geração",
  numero: "256",
  nome: "Combusken",
  classe: "pokemon-fogo",
  dataTipo: "fogo lutador",
  imagem: "../imagens/pokemons/256-Combusken.png",
  alt: "Pokémon Combusken",
  tipos: [
    { nome: "Fogo", classe: "but-fogo", link: "../pokemons/fogo.html" },
    { nome: "Lutador", classe: "but-lutador", link: "../pokemons/lutador.html" }
  ],
  descricao: "Ele fortalece as pernas correndo por campos e montanhas, desferindo chutes muito rápidos."
},
{
  geracao: "Terceira Geração",
  numero: "257",
  nome: "Blaziken",
  classe: "pokemon-fogo",
  dataTipo: "fogo lutador",
  imagem: "../imagens/pokemons/257-Blaziken.png",
  alt: "Pokémon Blaziken",
  tipos: [
    { nome: "Fogo", classe: "but-fogo", link: "../pokemons/fogo.html" },
    { nome: "Lutador", classe: "but-lutador", link: "../pokemons/lutador.html" }
  ],
  descricao: "Quando enfrenta um adversário forte, as chamas em seus punhos se intensificam ainda mais."
},
{
  geracao: "Terceira Geração",
  numero: "258",
  nome: "Mudkip",
  classe: "pokemon-agua",
  dataTipo: "agua",
  imagem: "../imagens/pokemons/258-Mudkip.png",
  alt: "Pokémon Mudkip",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" }
  ],
  descricao: "Usa a nadadeira na cabeça para sentir movimentos na água e manter-se atento ao redor."
},
{
  geracao: "Terceira Geração",
  numero: "259",
  nome: "Marshtomp",
  classe: "pokemon-agua",
  dataTipo: "agua terra",
  imagem: "../imagens/pokemons/259-Marshtomp.png",
  alt: "Pokémon Marshtomp",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" },
    { nome: "Terra", classe: "but-terra", link: "../pokemons/terra.html" }
  ],
  descricao: "Vive tanto na água quanto na terra e usa as pernas fortes para atravessar áreas lamacentas."
},
{
  geracao: "Terceira Geração",
  numero: "260",
  nome: "Swampert",
  classe: "pokemon-agua",
  dataTipo: "agua terra",
  imagem: "../imagens/pokemons/260-Swampert.png",
  alt: "Pokémon Swampert",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" },
    { nome: "Terra", classe: "but-terra", link: "../pokemons/terra.html" }
  ],
  descricao: "É muito forte e consegue arrastar grandes pedras. Também prevê tempestades com sensibilidade apurada."
},
{
  geracao: "Terceira Geração",
  numero: "261",
  nome: "Poochyena",
  classe: "pokemon-noturno",
  dataTipo: "sombrio",
  imagem: "../imagens/pokemons/261-Poochyena.png",
  alt: "Pokémon Poochyena",
  tipos: [
    { nome: "Sombrio", classe: "but-sombrio", link: "../pokemons/sombrio.html" }
  ],
  descricao: "Tem um olfato excelente e nunca desiste de seguir o rastro de algo que deseja encontrar."
},
{
  geracao: "Terceira Geração",
  numero: "262",
  nome: "Mightyena",
  classe: "pokemon-noturno",
  dataTipo: "sombrio",
  imagem: "../imagens/pokemons/262-Mightyena.png",
  alt: "Pokémon Mightyena",
  tipos: [
    { nome: "Sombrio", classe: "but-sombrio", link: "../pokemons/sombrio.html" }
  ],
  descricao: "Move-se em grupo e costuma obedecer a um líder, coordenando ataques de maneira eficiente."
},
{
  geracao: "Terceira Geração",
  numero: "263",
  nome: "Zigzagoon",
  classe: "pokemon-normal",
  dataTipo: "normal",
  imagem: "../imagens/pokemons/263-Zigzagoon.png",
  alt: "Pokémon Zigzagoon",
  tipos: [
    { nome: "Normal", classe: "but-normal", link: "../pokemons/normal.html" }
  ],
  descricao: "Anda em zigue-zague o tempo inteiro, sempre curioso para investigar qualquer coisa pelo caminho."
},
{
  geracao: "Terceira Geração",
  numero: "264",
  nome: "Linoone",
  classe: "pokemon-normal",
  dataTipo: "normal",
  imagem: "../imagens/pokemons/264-Linoone.png",
  alt: "Pokémon Linoone",
  tipos: [
    { nome: "Normal", classe: "but-normal", link: "../pokemons/normal.html" }
  ],
  descricao: "Corre em linha reta com grande velocidade, mas tem dificuldade para fazer curvas fechadas."
},
{
  geracao: "Terceira Geração",
  numero: "265",
  nome: "Wurmple",
  classe: "pokemon-inseto",
  dataTipo: "inseto",
  imagem: "../imagens/pokemons/265-Wurmple.png",
  alt: "Pokémon Wurmple",
  tipos: [
    { nome: "Inseto", classe: "but-inseto", link: "../pokemons/inseto.html" }
  ],
  descricao: "Usa os espinhos na parte traseira para se defender e se prende em galhos com muita firmeza."
},
{
  geracao: "Terceira Geração",
  numero: "266",
  nome: "Silcoon",
  classe: "pokemon-inseto",
  dataTipo: "inseto",
  imagem: "../imagens/pokemons/266-Silcoon.png",
  alt: "Pokémon Silcoon",
  tipos: [
    { nome: "Inseto", classe: "but-inseto", link: "../pokemons/inseto.html" }
  ],
  descricao: "Permanece quase imóvel enquanto guarda energia para a evolução dentro do casulo."
},
{
  geracao: "Terceira Geração",
  numero: "267",
  nome: "Beautifly",
  classe: "pokemon-inseto",
  dataTipo: "inseto voador",
  imagem: "../imagens/pokemons/267-Beautifly.png",
  alt: "Pokémon Beautifly",
  tipos: [
    { nome: "Inseto", classe: "but-inseto", link: "../pokemons/inseto.html" },
    { nome: "Voador", classe: "but-voador", link: "../pokemons/voador.html" }
  ],
  descricao: "Ele voa de flor em flor em busca de pólen, movendo-se com elegância pelo ar."
},
{
  geracao: "Terceira Geração",
  numero: "268",
  nome: "Cascoon",
  classe: "pokemon-inseto",
  dataTipo: "inseto",
  imagem: "../imagens/pokemons/268-Cascoon.png",
  alt: "Pokémon Cascoon",
  tipos: [
    { nome: "Inseto", classe: "but-inseto", link: "../pokemons/inseto.html" }
  ],
  descricao: "Seu corpo endurecido protege a evolução, e ele aguenta ataques sem se mover muito."
},
{
  geracao: "Terceira Geração",
  numero: "269",
  nome: "Dustox",
  classe: "pokemon-inseto",
  dataTipo: "inseto venenoso",
  imagem: "../imagens/pokemons/269-Dustox.png",
  alt: "Pokémon Dustox",
  tipos: [
    { nome: "Inseto", classe: "but-inseto", link: "../pokemons/inseto.html" },
    { nome: "Venenoso", classe: "but-veneno", link: "../pokemons/venenoso.html" }
  ],
  descricao: "É atraído por luzes fortes à noite e espalha um pó fino das asas para se defender."
},
{
  geracao: "Terceira Geração",
  numero: "270",
  nome: "Lotad",
  classe: "pokemon-agua",
  dataTipo: "agua planta",
  imagem: "../imagens/pokemons/270-Lotad.png",
  alt: "Pokémon Lotad",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" },
    { nome: "Planta", classe: "but-planta", link: "../pokemons/planta.html" }
  ],
  descricao: "A folha em sua cabeça funciona como apoio para flutuar tranquilamente na superfície da água."
},
{
  geracao: "Terceira Geração",
  numero: "271",
  nome: "Lombre",
  classe: "pokemon-agua",
  dataTipo: "agua planta",
  imagem: "../imagens/pokemons/271-Lombre.png",
  alt: "Pokémon Lombre",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" },
    { nome: "Planta", classe: "but-planta", link: "../pokemons/planta.html" }
  ],
  descricao: "É travesso e costuma se divertir perto da água, aparecendo de repente para assustar pessoas."
},
{
  geracao: "Terceira Geração",
  numero: "272",
  nome: "Ludicolo",
  classe: "pokemon-agua",
  dataTipo: "agua planta",
  imagem: "../imagens/pokemons/272-Ludicolo.png",
  alt: "Pokémon Ludicolo",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" },
    { nome: "Planta", classe: "but-planta", link: "../pokemons/planta.html" }
  ],
  descricao: "Quando escuta música animada, seu corpo reage na hora e ele começa a dançar sem parar."
},
{
  geracao: "Terceira Geração",
  numero: "273",
  nome: "Seedot",
  classe: "pokemon-planta",
  dataTipo: "planta",
  imagem: "../imagens/pokemons/273-Seedot.png",
  alt: "Pokémon Seedot",
  tipos: [
    { nome: "Planta", classe: "but-planta", link: "../pokemons/planta.html" }
  ],
  descricao: "Fica pendurado nos galhos e balança com o vento, parecendo parte natural da árvore."
},
{
  geracao: "Terceira Geração",
  numero: "274",
  nome: "Nuzleaf",
  classe: "pokemon-planta",
  dataTipo: "planta sombrio",
  imagem: "../imagens/pokemons/274-Nuzleaf.png",
  alt: "Pokémon Nuzleaf",
  tipos: [
    { nome: "Planta", classe: "but-planta", link: "../pokemons/planta.html" },
    { nome: "Sombrio", classe: "but-sombrio", link: "../pokemons/sombrio.html" }
  ],
  descricao: "Ele vive em florestas profundas e prega peças usando o som assustador da folha em sua cabeça."
},
{
  geracao: "Terceira Geração",
  numero: "275",
  nome: "Shiftry",
  classe: "pokemon-planta",
  dataTipo: "planta sombrio",
  imagem: "../imagens/pokemons/275-Shiftry.png",
  alt: "Pokémon Shiftry",
  tipos: [
    { nome: "Planta", classe: "but-planta", link: "../pokemons/planta.html" },
    { nome: "Sombrio", classe: "but-sombrio", link: "../pokemons/sombrio.html" }
  ],
  descricao: "É capaz de invocar ventos fortes e desaparecer entre as árvores antes que alguém o perceba."
},
{
  geracao: "Terceira Geração",
  numero: "276",
  nome: "Taillow",
  classe: "pokemon-normal",
  dataTipo: "normal voador",
  imagem: "../imagens/pokemons/276-Taillow.png",
  alt: "Pokémon Taillow",
  tipos: [
    { nome: "Normal", classe: "but-normal", link: "../pokemons/normal.html" },
    { nome: "Voador", classe: "but-voador", link: "../pokemons/voador.html" }
  ],
  descricao: "Mesmo pequeno, é corajoso e enfrenta adversários maiores quando protege seu território."
},
{
  geracao: "Terceira Geração",
  numero: "277",
  nome: "Swellow",
  classe: "pokemon-normal",
  dataTipo: "normal voador",
  imagem: "../imagens/pokemons/277-Swellow.png",
  alt: "Pokémon Swellow",
  tipos: [
    { nome: "Normal", classe: "but-normal", link: "../pokemons/normal.html" },
    { nome: "Voador", classe: "but-voador", link: "../pokemons/voador.html" }
  ],
  descricao: "Voa em alta velocidade e faz curvas rápidas no céu para capturar presas com precisão."
},
{
  geracao: "Terceira Geração",
  numero: "278",
  nome: "Wingull",
  classe: "pokemon-agua",
  dataTipo: "agua voador",
  imagem: "../imagens/pokemons/278-Wingull.png",
  alt: "Pokémon Wingull",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" },
    { nome: "Voador", classe: "but-voador", link: "../pokemons/voador.html" }
  ],
  descricao: "Aproveita as correntes de ar para planar longas distâncias quase sem mover as asas."
},
{
  geracao: "Terceira Geração",
  numero: "279",
  nome: "Pelipper",
  classe: "pokemon-agua",
  dataTipo: "agua voador",
  imagem: "../imagens/pokemons/279-Pelipper.png",
  alt: "Pokémon Pelipper",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" },
    { nome: "Voador", classe: "but-voador", link: "../pokemons/voador.html" }
  ],
  descricao: "Carrega objetos e até pequenos Pokémon no enorme bico enquanto sobrevoa o oceano."
},
{
  geracao: "Terceira Geração",
  numero: "280",
  nome: "Ralts",
  classe: "pokemon-psiquico",
  dataTipo: "psiquico fada",
  imagem: "../imagens/pokemons/280-Ralts.png",
  alt: "Pokémon Ralts",
  tipos: [
    { nome: "Psíquico", classe: "but-psiquico", link: "../pokemons/psiquico.html" },
    { nome: "Fada", classe: "but-fada", link: "../pokemons/fada.html" }
  ],
  descricao: "Percebe emoções intensas das pessoas e se aproxima com delicadeza de quem tem bom coração."
},
{
  geracao: "Terceira Geração",
  numero: "281",
  nome: "Kirlia",
  classe: "pokemon-psiquico",
  dataTipo: "psiquico fada",
  imagem: "../imagens/pokemons/281-Kirlia.png",
  alt: "Pokémon Kirlia",
  tipos: [
    { nome: "Psíquico", classe: "but-psiquico", link: "../pokemons/psiquico.html" },
    { nome: "Fada", classe: "but-fada", link: "../pokemons/fada.html" }
  ],
  descricao: "Seu poder psíquico aumenta quando está feliz, e ele costuma dançar girando com graça."
},
{
  geracao: "Terceira Geração",
  numero: "282",
  nome: "Gardevoir",
  classe: "pokemon-psiquico",
  dataTipo: "psiquico fada",
  imagem: "../imagens/pokemons/282-Gardevoir.png",
  alt: "Pokémon Gardevoir",
  tipos: [
    { nome: "Psíquico", classe: "but-psiquico", link: "../pokemons/psiquico.html" },
    { nome: "Fada", classe: "but-fada", link: "../pokemons/fada.html" }
  ],
  descricao: "É extremamente leal e usa todo o seu poder para proteger quem considera importante."
},
{
  geracao: "Terceira Geração",
  numero: "283",
  nome: "Surskit",
  classe: "pokemon-inseto",
  dataTipo: "inseto agua",
  imagem: "../imagens/pokemons/283-Surskit.png",
  alt: "Pokémon Surskit",
  tipos: [
    { nome: "Inseto", classe: "but-inseto", link: "../pokemons/inseto.html" },
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" }
  ],
  descricao: "Desliza pela superfície da água usando as patas, como se estivesse patinando."
},
{
  geracao: "Terceira Geração",
  numero: "284",
  nome: "Masquerain",
  classe: "pokemon-inseto",
  dataTipo: "inseto voador",
  imagem: "../imagens/pokemons/284-Masquerain.png",
  alt: "Pokémon Masquerain",
  tipos: [
    { nome: "Inseto", classe: "but-inseto", link: "../pokemons/inseto.html" },
    { nome: "Voador", classe: "but-voador", link: "../pokemons/voador.html" }
  ],
  descricao: "As marcas em suas antenas lembram olhos e ajudam a intimidar inimigos."
},
{
  geracao: "Terceira Geração",
  numero: "285",
  nome: "Shroomish",
  classe: "pokemon-planta",
  dataTipo: "planta",
  imagem: "../imagens/pokemons/285-Shroomish.png",
  alt: "Pokémon Shroomish",
  tipos: [
    { nome: "Planta", classe: "but-planta", link: "../pokemons/planta.html" }
  ],
  descricao: "Prefere lugares úmidos e escuros, onde libera esporos ao se sentir ameaçado."
},
{
  geracao: "Terceira Geração",
  numero: "286",
  nome: "Breloom",
  classe: "pokemon-planta",
  dataTipo: "planta lutador",
  imagem: "../imagens/pokemons/286-Breloom.png",
  alt: "Pokémon Breloom",
  tipos: [
    { nome: "Planta", classe: "but-planta", link: "../pokemons/planta.html" },
    { nome: "Lutador", classe: "but-lutador", link: "../pokemons/lutador.html" }
  ],
  descricao: "Estica os braços com rapidez surpreendente e combina isso com golpes muito fortes."
},
{
  geracao: "Terceira Geração",
  numero: "287",
  nome: "Slakoth",
  classe: "pokemon-normal",
  dataTipo: "normal",
  imagem: "../imagens/pokemons/287-Slakoth.png",
  alt: "Pokémon Slakoth",
  tipos: [
    { nome: "Normal", classe: "but-normal", link: "../pokemons/normal.html" }
  ],
  descricao: "Passa boa parte do dia parado, economizando energia ao máximo para quase tudo."
},
{
  geracao: "Terceira Geração",
  numero: "288",
  nome: "Vigoroth",
  classe: "pokemon-normal",
  dataTipo: "normal",
  imagem: "../imagens/pokemons/288-Vigoroth.png",
  alt: "Pokémon Vigoroth",
  tipos: [
    { nome: "Normal", classe: "but-normal", link: "../pokemons/normal.html" }
  ],
  descricao: "Não consegue ficar quieto e vive em movimento, correndo e pulando o tempo inteiro."
},
{
  geracao: "Terceira Geração",
  numero: "289",
  nome: "Slaking",
  classe: "pokemon-normal",
  dataTipo: "normal",
  imagem: "../imagens/pokemons/289-Slaking.png",
  alt: "Pokémon Slaking",
  tipos: [
    { nome: "Normal", classe: "but-normal", link: "../pokemons/normal.html" }
  ],
  descricao: "Mesmo deitado, possui uma força imensa e pode resolver tudo com um único movimento."
},
{
  geracao: "Terceira Geração",
  numero: "290",
  nome: "Nincada",
  classe: "pokemon-inseto",
  dataTipo: "inseto terra",
  imagem: "../imagens/pokemons/290-Nincada.png",
  alt: "Pokémon Nincada",
  tipos: [
    { nome: "Inseto", classe: "but-inseto", link: "../pokemons/inseto.html" },
    { nome: "Terra", classe: "but-terra", link: "../pokemons/terra.html" }
  ],
  descricao: "Vive debaixo da terra por anos, alimentando-se de raízes enquanto se prepara para evoluir."
},
{
  geracao: "Terceira Geração",
  numero: "291",
  nome: "Ninjask",
  classe: "pokemon-inseto",
  dataTipo: "inseto voador",
  imagem: "../imagens/pokemons/291-Ninjask.png",
  alt: "Pokémon Ninjask",
  tipos: [
    { nome: "Inseto", classe: "but-inseto", link: "../pokemons/inseto.html" },
    { nome: "Voador", classe: "but-voador", link: "../pokemons/voador.html" }
  ],
  descricao: "Seu voo é tão rápido que fica difícil enxergá-lo claramente enquanto se move."
},
{
  geracao: "Terceira Geração",
  numero: "292",
  nome: "Shedinja",
  classe: "pokemon-inseto",
  dataTipo: "inseto fantasma",
  imagem: "../imagens/pokemons/292-Shedinja.png",
  alt: "Pokémon Shedinja",
  tipos: [
    { nome: "Inseto", classe: "but-inseto", link: "../pokemons/inseto.html" },
    { nome: "Fantasma", classe: "but-fantasma", link: "../pokemons/fantasma.html" }
  ],
  descricao: "Seu corpo vazio e misterioso desperta curiosidade, e ele permanece imóvel de forma inquietante."
},
{
  geracao: "Terceira Geração",
  numero: "293",
  nome: "Whismur",
  classe: "pokemon-normal",
  dataTipo: "normal",
  imagem: "../imagens/pokemons/293-Whismur.png",
  alt: "Pokémon Whismur",
  tipos: [
    { nome: "Normal", classe: "but-normal", link: "../pokemons/normal.html" }
  ],
  descricao: "Normalmente é tímido, mas quando se assusta pode soltar um grito muito alto."
},
{
  geracao: "Terceira Geração",
  numero: "294",
  nome: "Loudred",
  classe: "pokemon-normal",
  dataTipo: "normal",
  imagem: "../imagens/pokemons/294-Loudred.png",
  alt: "Pokémon Loudred",
  tipos: [
    { nome: "Normal", classe: "but-normal", link: "../pokemons/normal.html" }
  ],
  descricao: "Produz berros poderosos usando os pulmões e as orelhas, espalhando ondas sonoras intensas."
},
{
  geracao: "Terceira Geração",
  numero: "295",
  nome: "Exploud",
  classe: "pokemon-normal",
  dataTipo: "normal",
  imagem: "../imagens/pokemons/295-Exploud.png",
  alt: "Pokémon Exploud",
  tipos: [
    { nome: "Normal", classe: "but-normal", link: "../pokemons/normal.html" }
  ],
  descricao: "Seu rugido é devastador e pode ser ouvido a grandes distâncias quando libera toda a força."
},
{
  geracao: "Terceira Geração",
  numero: "296",
  nome: "Makuhita",
  classe: "pokemon-lutador",
  dataTipo: "lutador",
  imagem: "../imagens/pokemons/296-Makuhita.png",
  alt: "Pokémon Makuhita",
  tipos: [
    { nome: "Lutador", classe: "but-lutador", link: "../pokemons/lutador.html" }
  ],
  descricao: "Treina o corpo todos os dias e valoriza muito a resistência e a disciplina."
},
{
  geracao: "Terceira Geração",
  numero: "297",
  nome: "Hariyama",
  classe: "pokemon-lutador",
  dataTipo: "lutador",
  imagem: "../imagens/pokemons/297-Hariyama.png",
  alt: "Pokémon Hariyama",
  tipos: [
    { nome: "Lutador", classe: "but-lutador", link: "../pokemons/lutador.html" }
  ],
  descricao: "Seus golpes de palma são fortes o bastante para lançar longe adversários enormes."
},
{
  geracao: "Terceira Geração",
  numero: "298",
  nome: "Azurill",
  classe: "pokemon-normal",
  dataTipo: "normal fada",
  imagem: "../imagens/pokemons/298-Azurill.png",
  alt: "Pokémon Azurill",
  tipos: [
    { nome: "Normal", classe: "but-normal", link: "../pokemons/normal.html" },
    { nome: "Fada", classe: "but-fada", link: "../pokemons/fada.html" }
  ],
  descricao: "Usa a grande cauda cheia de ar para se equilibrar e brincar com leves saltos."
},
{
  geracao: "Terceira Geração",
  numero: "299",
  nome: "Nosepass",
  classe: "pokemon-rocha",
  dataTipo: "rocha",
  imagem: "../imagens/pokemons/299-Nosepass.png",
  alt: "Pokémon Nosepass",
  tipos: [
    { nome: "Rocha", classe: "but-rocha", link: "../pokemons/rocha.html" }
  ],
  descricao: "Seu nariz magnético sempre aponta para a mesma direção, mesmo quando ele está dormindo."
},
{
  geracao: "Terceira Geração",
  numero: "300",
  nome: "Skitty",
  classe: "pokemon-normal",
  dataTipo: "normal",
  imagem: "../imagens/pokemons/300-Skitty.png",
  alt: "Pokémon Skitty",
  tipos: [
    { nome: "Normal", classe: "but-normal", link: "../pokemons/normal.html" }
  ],
  descricao: "É brincalhão e costuma perseguir qualquer coisa que se mova, como se tudo fosse um brinquedo."
},
{
  geracao: "Terceira Geração",
  numero: "301",
  nome: "Delcatty",
  classe: "pokemon-normal",
  dataTipo: "normal",
  imagem: "../imagens/pokemons/301-Delcatty.png",
  alt: "Pokémon Delcatty",
  tipos: [
    { nome: "Normal", classe: "but-normal", link: "../pokemons/normal.html" }
  ],
  descricao: "Vive no seu próprio ritmo e prefere lugares confortáveis para descansar sem preocupação."
},
{
  geracao: "Terceira Geração",
  numero: "302",
  nome: "Sableye",
  classe: "pokemon-noturno",
  dataTipo: "sombrio fantasma",
  imagem: "../imagens/pokemons/302-Sableye.png",
  alt: "Pokémon Sableye",
  tipos: [
    { nome: "Sombrio", classe: "but-sombrio", link: "../pokemons/sombrio.html" },
    { nome: "Fantasma", classe: "but-fantasma", link: "../pokemons/fantasma.html" }
  ],
  descricao: "Ele vive em cavernas e adora se alimentar de gemas e minerais brilhantes."
},
{
  geracao: "Terceira Geração",
  numero: "303",
  nome: "Mawile",
  classe: "pokemon-steel",
  dataTipo: "steel fada",
  imagem: "../imagens/pokemons/303-Mawile.png",
  alt: "Pokémon Mawile",
  tipos: [
    { nome: "Steel", classe: "but-steel", link: "../pokemons/steel.html" },
    { nome: "Fada", classe: "but-fada", link: "../pokemons/fada.html" }
  ],
  descricao: "Engana o inimigo com o rosto dócil e depois usa a enorme mandíbula traseira para atacar."
},
{
  geracao: "Terceira Geração",
  numero: "304",
  nome: "Aron",
  classe: "pokemon-steel",
  dataTipo: "steel rocha",
  imagem: "../imagens/pokemons/304-Aron.png",
  alt: "Pokémon Aron",
  tipos: [
    { nome: "Steel", classe: "but-steel", link: "../pokemons/steel.html" },
    { nome: "Rocha", classe: "but-rocha", link: "../pokemons/rocha.html" }
  ],
  descricao: "Seu corpo de aço é resistente, e ele costuma se alimentar de minério de ferro."
},
{
  geracao: "Terceira Geração",
  numero: "305",
  nome: "Lairon",
  classe: "pokemon-steel",
  dataTipo: "steel rocha",
  imagem: "../imagens/pokemons/305-Lairon.png",
  alt: "Pokémon Lairon",
  tipos: [
    { nome: "Steel", classe: "but-steel", link: "../pokemons/steel.html" },
    { nome: "Rocha", classe: "but-rocha", link: "../pokemons/rocha.html" }
  ],
  descricao: "Ele percorre montanhas devorando pedras e deixando marcas evidentes por onde passa."
},
{
  geracao: "Terceira Geração",
  numero: "306",
  nome: "Aggron",
  classe: "pokemon-steel",
  dataTipo: "steel rocha",
  imagem: "../imagens/pokemons/306-Aggron.png",
  alt: "Pokémon Aggron",
  tipos: [
    { nome: "Steel", classe: "but-steel", link: "../pokemons/steel.html" },
    { nome: "Rocha", classe: "but-rocha", link: "../pokemons/rocha.html" }
  ],
  descricao: "Protege o território com grande rigor e reconstrói áreas danificadas de montanhas."
},
{
  geracao: "Terceira Geração",
  numero: "307",
  nome: "Meditite",
  classe: "pokemon-lutador",
  dataTipo: "lutador psiquico",
  imagem: "../imagens/pokemons/307-Meditite.png",
  alt: "Pokémon Meditite",
  tipos: [
    { nome: "Lutador", classe: "but-lutador", link: "../pokemons/lutador.html" },
    { nome: "Psíquico", classe: "but-psiquico", link: "../pokemons/psiquico.html" }
  ],
  descricao: "Treina mente e corpo por meio da meditação, aumentando seu foco e sua energia."
},
{
  geracao: "Terceira Geração",
  numero: "308",
  nome: "Medicham",
  classe: "pokemon-lutador",
  dataTipo: "lutador psiquico",
  imagem: "../imagens/pokemons/308-Medicham.png",
  alt: "Pokémon Medicham",
  tipos: [
    { nome: "Lutador", classe: "but-lutador", link: "../pokemons/lutador.html" },
    { nome: "Psíquico", classe: "but-psiquico", link: "../pokemons/psiquico.html" }
  ],
  descricao: "Após duro treinamento, combina golpes físicos com grande concentração psíquica."
},
{
  geracao: "Terceira Geração",
  numero: "309",
  nome: "Electrike",
  classe: "pokemon-eletrico",
  dataTipo: "eletrico",
  imagem: "../imagens/pokemons/309-Electrike.png",
  alt: "Pokémon Electrike",
  tipos: [
    { nome: "Elétrico", classe: "but-eletrico", link: "../pokemons/eletrico.html" }
  ],
  descricao: "Armazena eletricidade no corpo e fica mais animado quando o clima muda."
},
{
  geracao: "Terceira Geração",
  numero: "310",
  nome: "Manectric",
  classe: "pokemon-eletrico",
  dataTipo: "eletrico",
  imagem: "../imagens/pokemons/310-Manectric.png",
  alt: "Pokémon Manectric",
  tipos: [
    { nome: "Elétrico", classe: "but-eletrico", link: "../pokemons/eletrico.html" }
  ],
  descricao: "Dizem que ele aparece durante tempestades, correndo junto com raios pelo céu."
},
{
  geracao: "Terceira Geração",
  numero: "311",
  nome: "Plusle",
  classe: "pokemon-eletrico",
  dataTipo: "eletrico",
  imagem: "../imagens/pokemons/311-Plusle.png",
  alt: "Pokémon Plusle",
  tipos: [
    { nome: "Elétrico", classe: "but-eletrico", link: "../pokemons/eletrico.html" }
  ],
  descricao: "Ele adora incentivar parceiros e costuma celebrar com pequenas faíscas elétricas."
},
{
  geracao: "Terceira Geração",
  numero: "312",
  nome: "Minun",
  classe: "pokemon-eletrico",
  dataTipo: "eletrico",
  imagem: "../imagens/pokemons/312-Minun.png",
  alt: "Pokémon Minun",
  tipos: [
    { nome: "Elétrico", classe: "but-eletrico", link: "../pokemons/eletrico.html" }
  ],
  descricao: "Apoia seus companheiros com entusiasmo, soltando eletricidade de forma alegre e vibrante."
},
{
  geracao: "Terceira Geração",
  numero: "313",
  nome: "Volbeat",
  classe: "pokemon-inseto",
  dataTipo: "inseto",
  imagem: "../imagens/pokemons/313-Volbeat.png",
  alt: "Pokémon Volbeat",
  tipos: [
    { nome: "Inseto", classe: "but-inseto", link: "../pokemons/inseto.html" }
  ],
  descricao: "Usa a luz da cauda para criar sinais luminosos e se comunicar durante a noite."
},
{
  geracao: "Terceira Geração",
  numero: "314",
  nome: "Illumise",
  classe: "pokemon-inseto",
  dataTipo: "inseto",
  imagem: "../imagens/pokemons/314-Illumise.png",
  alt: "Pokémon Illumise",
  tipos: [
    { nome: "Inseto", classe: "but-inseto", link: "../pokemons/inseto.html" }
  ],
  descricao: "Costuma orientar grupos de Volbeat em belos desenhos de luz pelo céu noturno."
},
{
  geracao: "Terceira Geração",
  numero: "315",
  nome: "Roselia",
  classe: "pokemon-planta",
  dataTipo: "planta venenoso",
  imagem: "../imagens/pokemons/315-Roselia.png",
  alt: "Pokémon Roselia",
  tipos: [
    { nome: "Planta", classe: "but-planta", link: "../pokemons/planta.html" },
    { nome: "Venenoso", classe: "but-veneno", link: "../pokemons/venenoso.html" }
  ],
  descricao: "As flores em suas mãos exalam fragrâncias delicadas, mas também podem conter espinhos perigosos."
},
{
  geracao: "Terceira Geração",
  numero: "316",
  nome: "Gulpin",
  classe: "pokemon-venenoso",
  dataTipo: "venenoso",
  imagem: "../imagens/pokemons/316-Gulpin.png",
  alt: "Pokémon Gulpin",
  tipos: [
    { nome: "Venenoso", classe: "but-veneno", link: "../pokemons/venenoso.html" }
  ],
  descricao: "Seu estômago é tão forte que consegue digerir quase qualquer coisa que engole."
},
{
  geracao: "Terceira Geração",
  numero: "317",
  nome: "Swalot",
  classe: "pokemon-venenoso",
  dataTipo: "venenoso",
  imagem: "../imagens/pokemons/317-Swalot.png",
  alt: "Pokémon Swalot",
  tipos: [
    { nome: "Venenoso", classe: "but-veneno", link: "../pokemons/venenoso.html" }
  ],
  descricao: "Ele envolve a presa com o corpo e a dissolve usando fluidos digestivos extremamente potentes."
},
{
  geracao: "Terceira Geração",
  numero: "318",
  nome: "Carvanha",
  classe: "pokemon-agua",
  dataTipo: "agua sombrio",
  imagem: "../imagens/pokemons/318-Carvanha.png",
  alt: "Pokémon Carvanha",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" },
    { nome: "Sombrio", classe: "but-sombrio", link: "../pokemons/sombrio.html" }
  ],
  descricao: "Age em grupo e avança ferozmente sobre presas quando sente cheiro de alimento na água."
},
{
  geracao: "Terceira Geração",
  numero: "319",
  nome: "Sharpedo",
  classe: "pokemon-agua",
  dataTipo: "agua sombrio",
  imagem: "../imagens/pokemons/319-Sharpedo.png",
  alt: "Pokémon Sharpedo",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" },
    { nome: "Sombrio", classe: "but-sombrio", link: "../pokemons/sombrio.html" }
  ],
  descricao: "Nada em alta velocidade e usa os dentes afiados para abrir caminho com agressividade."
},
{
  geracao: "Terceira Geração",
  numero: "320",
  nome: "Wailmer",
  classe: "pokemon-agua",
  dataTipo: "agua",
  imagem: "../imagens/pokemons/320-Wailmer.png",
  alt: "Pokémon Wailmer",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" }
  ],
  descricao: "Seu corpo enorme acumula muita água, que ele pode liberar em jatos fortes."
},
{
  geracao: "Terceira Geração",
  numero: "321",
  nome: "Wailord",
  classe: "pokemon-agua",
  dataTipo: "agua",
  imagem: "../imagens/pokemons/321-Wailord.png",
  alt: "Pokémon Wailord",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" }
  ],
  descricao: "É gigantesco e se move pelo oceano com calma, apesar do tamanho impressionante."
},
{
  geracao: "Terceira Geração",
  numero: "322",
  nome: "Numel",
  classe: "pokemon-fogo",
  dataTipo: "fogo terra",
  imagem: "../imagens/pokemons/322-Numel.png",
  alt: "Pokémon Numel",
  tipos: [
    { nome: "Fogo", classe: "but-fogo", link: "../pokemons/fogo.html" },
    { nome: "Terra", classe: "but-terra", link: "../pokemons/terra.html" }
  ],
  descricao: "Guarda magma em seu corpo e suporta calor intenso sem se incomodar quase nada."
},
{
  geracao: "Terceira Geração",
  numero: "323",
  nome: "Camerupt",
  classe: "pokemon-fogo",
  dataTipo: "fogo terra",
  imagem: "../imagens/pokemons/323-Camerupt.png",
  alt: "Pokémon Camerupt",
  tipos: [
    { nome: "Fogo", classe: "but-fogo", link: "../pokemons/fogo.html" },
    { nome: "Terra", classe: "but-terra", link: "../pokemons/terra.html" }
  ],
  descricao: "Os vulcões em suas costas podem entrar em atividade quando ele se irrita muito."
},
{
  geracao: "Terceira Geração",
  numero: "324",
  nome: "Torkoal",
  classe: "pokemon-fogo",
  dataTipo: "fogo",
  imagem: "../imagens/pokemons/324-Torkoal.png",
  alt: "Pokémon Torkoal",
  tipos: [
    { nome: "Fogo", classe: "but-fogo", link: "../pokemons/fogo.html" }
  ],
  descricao: "Produz carvão dentro do casco e solta fumaça pelas narinas com bastante força."
},
{
  geracao: "Terceira Geração",
  numero: "325",
  nome: "Spoink",
  classe: "pokemon-psiquico",
  dataTipo: "psiquico",
  imagem: "../imagens/pokemons/325-Spoink.png",
  alt: "Pokémon Spoink",
  tipos: [
    { nome: "Psíquico", classe: "but-psiquico", link: "../pokemons/psiquico.html" }
  ],
  descricao: "Ele precisa saltar sem parar, pois o movimento ajuda a manter seu corpo ativo."
},
{
  geracao: "Terceira Geração",
  numero: "326",
  nome: "Grumpig",
  classe: "pokemon-psiquico",
  dataTipo: "psiquico",
  imagem: "../imagens/pokemons/326-Grumpig.png",
  alt: "Pokémon Grumpig",
  tipos: [
    { nome: "Psíquico", classe: "but-psiquico", link: "../pokemons/psiquico.html" }
  ],
  descricao: "Usa as pérolas negras do corpo para reforçar seus poderes mentais e controlar movimentos."
},
{
  geracao: "Terceira Geração",
  numero: "327",
  nome: "Spinda",
  classe: "pokemon-normal",
  dataTipo: "normal",
  imagem: "../imagens/pokemons/327-Spinda.png",
  alt: "Pokémon Spinda",
  tipos: [
    { nome: "Normal", classe: "but-normal", link: "../pokemons/normal.html" }
  ],
  descricao: "Seu andar cambaleante confunde quem observa, já que parece perder o equilíbrio a todo momento."
},
{
  geracao: "Terceira Geração",
  numero: "328",
  nome: "Trapinch",
  classe: "pokemon-terra",
  dataTipo: "terra",
  imagem: "../imagens/pokemons/328-Trapinch.png",
  alt: "Pokémon Trapinch",
  tipos: [
    { nome: "Terra", classe: "but-terra", link: "../pokemons/terra.html" }
  ],
  descricao: "Cava grandes buracos na areia e espera pacientemente até algo cair em sua armadilha."
},
{
  geracao: "Terceira Geração",
  numero: "329",
  nome: "Vibrava",
  classe: "pokemon-terra",
  dataTipo: "terra dragao",
  imagem: "../imagens/pokemons/329-Vibrava.png",
  alt: "Pokémon Vibrava",
  tipos: [
    { nome: "Terra", classe: "but-terra", link: "../pokemons/terra.html" },
    { nome: "Dragão", classe: "but-dragao", link: "../pokemons/dragao.html" }
  ],
  descricao: "O bater de suas asas gera vibrações e sons estranhos que confundem os oponentes."
},
{
  geracao: "Terceira Geração",
  numero: "330",
  nome: "Flygon",
  classe: "pokemon-terra",
  dataTipo: "terra dragao",
  imagem: "../imagens/pokemons/330-Flygon.png",
  alt: "Pokémon Flygon",
  tipos: [
    { nome: "Terra", classe: "but-terra", link: "../pokemons/terra.html" },
    { nome: "Dragão", classe: "but-dragao", link: "../pokemons/dragao.html" }
  ],
  descricao: "Ao voar no deserto, levanta nuvens de areia e desaparece como se fosse uma miragem."
},
{
  geracao: "Terceira Geração",
  numero: "331",
  nome: "Cacnea",
  classe: "pokemon-planta",
  dataTipo: "planta",
  imagem: "../imagens/pokemons/331-Cacnea.png",
  alt: "Pokémon Cacnea",
  tipos: [
    { nome: "Planta", classe: "but-planta", link: "../pokemons/planta.html" }
  ],
  descricao: "Sobrevive em desertos graças à água que guarda no corpo e usa os espinhos para se proteger."
},
{
  geracao: "Terceira Geração",
  numero: "332",
  nome: "Cacturne",
  classe: "pokemon-planta",
  dataTipo: "planta sombrio",
  imagem: "../imagens/pokemons/332-Cacturne.png",
  alt: "Pokémon Cacturne",
  tipos: [
    { nome: "Planta", classe: "but-planta", link: "../pokemons/planta.html" },
    { nome: "Sombrio", classe: "but-sombrio", link: "../pokemons/sombrio.html" }
  ],
  descricao: "Prefere caminhar à noite pelo deserto, seguindo silenciosamente presas exaustas."
},
{
  geracao: "Terceira Geração",
  numero: "333",
  nome: "Swablu",
  classe: "pokemon-normal",
  dataTipo: "normal voador",
  imagem: "../imagens/pokemons/333-Swablu.png",
  alt: "Pokémon Swablu",
  tipos: [
    { nome: "Normal", classe: "but-normal", link: "../pokemons/normal.html" },
    { nome: "Voador", classe: "but-voador", link: "../pokemons/voador.html" }
  ],
  descricao: "Suas asas parecem nuvens macias, e ele gosta de limpar objetos e lugares com cuidado."
},
{
  geracao: "Terceira Geração",
  numero: "334",
  nome: "Altaria",
  classe: "pokemon-dragao",
  dataTipo: "dragao voador",
  imagem: "../imagens/pokemons/334-Altaria.png",
  alt: "Pokémon Altaria",
  tipos: [
    { nome: "Dragão", classe: "but-dragao", link: "../pokemons/dragao.html" },
    { nome: "Voador", classe: "but-voador", link: "../pokemons/voador.html" }
  ],
  descricao: "Voa entre as nuvens e canta com uma voz melodiosa que acalma quem a escuta."
},
{
  geracao: "Terceira Geração",
  numero: "335",
  nome: "Zangoose",
  classe: "pokemon-normal",
  dataTipo: "normal",
  imagem: "../imagens/pokemons/335-Zangoose.png",
  alt: "Pokémon Zangoose",
  tipos: [
    { nome: "Normal", classe: "but-normal", link: "../pokemons/normal.html" }
  ],
  descricao: "É veloz e combativo, sendo famoso pela rivalidade intensa que possui com Seviper."
},
{
  geracao: "Terceira Geração",
  numero: "336",
  nome: "Seviper",
  classe: "pokemon-venenoso",
  dataTipo: "venenoso",
  imagem: "../imagens/pokemons/336-Seviper.png",
  alt: "Pokémon Seviper",
  tipos: [
    { nome: "Venenoso", classe: "but-veneno", link: "../pokemons/venenoso.html" }
  ],
  descricao: "Afia a lâmina da cauda contra pedras e não esquece facilmente antigos confrontos."
},
{
  geracao: "Terceira Geração",
  numero: "337",
  nome: "Lunatone",
  classe: "pokemon-rocha",
  dataTipo: "rocha psiquico",
  imagem: "../imagens/pokemons/337-Lunatone.png",
  alt: "Pokémon Lunatone",
  tipos: [
    { nome: "Rocha", classe: "but-rocha", link: "../pokemons/rocha.html" },
    { nome: "Psíquico", classe: "but-psiquico", link: "../pokemons/psiquico.html" }
  ],
  descricao: "Sua energia parece aumentar conforme as fases da lua e o brilho noturno."
},
{
  geracao: "Terceira Geração",
  numero: "338",
  nome: "Solrock",
  classe: "pokemon-rocha",
  dataTipo: "rocha psiquico",
  imagem: "../imagens/pokemons/338-Solrock.png",
  alt: "Pokémon Solrock",
  tipos: [
    { nome: "Rocha", classe: "but-rocha", link: "../pokemons/rocha.html" },
    { nome: "Psíquico", classe: "but-psiquico", link: "../pokemons/psiquico.html" }
  ],
  descricao: "Absorve energia solar durante o dia e libera esse poder em batalha."
},
{
  geracao: "Terceira Geração",
  numero: "339",
  nome: "Barboach",
  classe: "pokemon-agua",
  dataTipo: "agua terra",
  imagem: "../imagens/pokemons/339-Barboach.png",
  alt: "Pokémon Barboach",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" },
    { nome: "Terra", classe: "but-terra", link: "../pokemons/terra.html" }
  ],
  descricao: "Vive em águas barrentas e usa os longos bigodes para sentir o terreno ao redor."
},
{
  geracao: "Terceira Geração",
  numero: "340",
  nome: "Whiscash",
  classe: "pokemon-agua",
  dataTipo: "agua terra",
  imagem: "../imagens/pokemons/340-Whiscash.png",
  alt: "Pokémon Whiscash",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" },
    { nome: "Terra", classe: "but-terra", link: "../pokemons/terra.html" }
  ],
  descricao: "Seus bigodes percebem vibrações com grande precisão, mesmo em águas muito turvas."
},
{
  geracao: "Terceira Geração",
  numero: "341",
  nome: "Corphish",
  classe: "pokemon-agua",
  dataTipo: "agua",
  imagem: "../imagens/pokemons/341-Corphish.png",
  alt: "Pokémon Corphish",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" }
  ],
  descricao: "É resistente e se adapta bem a vários ambientes, sempre pronto para uma disputa."
},
{
  geracao: "Terceira Geração",
  numero: "342",
  nome: "Crawdaunt",
  classe: "pokemon-agua",
  dataTipo: "agua sombrio",
  imagem: "../imagens/pokemons/342-Crawdaunt.png",
  alt: "Pokémon Crawdaunt",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" },
    { nome: "Sombrio", classe: "but-sombrio", link: "../pokemons/sombrio.html" }
  ],
  descricao: "É agressivo e territorial, usando as grandes pinças para dominar disputas rapidamente."
},
{
  geracao: "Terceira Geração",
  numero: "343",
  nome: "Baltoy",
  classe: "pokemon-terra",
  dataTipo: "terra psiquico",
  imagem: "../imagens/pokemons/343-Baltoy.png",
  alt: "Pokémon Baltoy",
  tipos: [
    { nome: "Terra", classe: "but-terra", link: "../pokemons/terra.html" },
    { nome: "Psíquico", classe: "but-psiquico", link: "../pokemons/psiquico.html" }
  ],
  descricao: "Ele gira sem parar enquanto se move, lembrando uma antiga figura de barro viva."
},
{
  geracao: "Terceira Geração",
  numero: "344",
  nome: "Claydol",
  classe: "pokemon-terra",
  dataTipo: "terra psiquico",
  imagem: "../imagens/pokemons/344-Claydol.png",
  alt: "Pokémon Claydol",
  tipos: [
    { nome: "Terra", classe: "but-terra", link: "../pokemons/terra.html" },
    { nome: "Psíquico", classe: "but-psiquico", link: "../pokemons/psiquico.html" }
  ],
  descricao: "Seu corpo misterioso parece ligado a civilizações antigas e a poderes enigmáticos."
},
{
  geracao: "Terceira Geração",
  numero: "345",
  nome: "Lileep",
  classe: "pokemon-rocha",
  dataTipo: "rocha planta",
  imagem: "../imagens/pokemons/345-Lileep.png",
  alt: "Pokémon Lileep",
  tipos: [
    { nome: "Rocha", classe: "but-rocha", link: "../pokemons/rocha.html" },
    { nome: "Planta", classe: "but-planta", link: "../pokemons/planta.html" }
  ],
  descricao: "Ele vive preso a rochas e estende os tentáculos para capturar presas que passam perto."
},
{
  geracao: "Terceira Geração",
  numero: "346",
  nome: "Cradily",
  classe: "pokemon-rocha",
  dataTipo: "rocha planta",
  imagem: "../imagens/pokemons/346-Cradily.png",
  alt: "Pokémon Cradily",
  tipos: [
    { nome: "Rocha", classe: "but-rocha", link: "../pokemons/rocha.html" },
    { nome: "Planta", classe: "but-planta", link: "../pokemons/planta.html" }
  ],
  descricao: "Usa os tentáculos flexíveis para prender a presa antes que ela consiga escapar."
},
{
  geracao: "Terceira Geração",
  numero: "347",
  nome: "Anorith",
  classe: "pokemon-rocha",
  dataTipo: "rocha inseto",
  imagem: "../imagens/pokemons/347-Anorith.png",
  alt: "Pokémon Anorith",
  tipos: [
    { nome: "Rocha", classe: "but-rocha", link: "../pokemons/rocha.html" },
    { nome: "Inseto", classe: "but-inseto", link: "../pokemons/inseto.html" }
  ],
  descricao: "Nada com rapidez usando as garras e parece preservar traços de eras muito antigas."
},
{
  geracao: "Terceira Geração",
  numero: "348",
  nome: "Armaldo",
  classe: "pokemon-rocha",
  dataTipo: "rocha inseto",
  imagem: "../imagens/pokemons/348-Armaldo.png",
  alt: "Pokémon Armaldo",
  tipos: [
    { nome: "Rocha", classe: "but-rocha", link: "../pokemons/rocha.html" },
    { nome: "Inseto", classe: "but-inseto", link: "../pokemons/inseto.html" }
  ],
  descricao: "Suas garras robustas são muito eficazes para rasgar e dominar o alvo."
},
{
  geracao: "Terceira Geração",
  numero: "349",
  nome: "Feebas",
  classe: "pokemon-agua",
  dataTipo: "agua",
  imagem: "../imagens/pokemons/349-Feebas.png",
  alt: "Pokémon Feebas",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" }
  ],
  descricao: "Tem aparência simples e vive em águas modestas, mas guarda um potencial surpreendente."
},
{
  geracao: "Terceira Geração",
  numero: "350",
  nome: "Milotic",
  classe: "pokemon-agua",
  dataTipo: "agua",
  imagem: "../imagens/pokemons/350-Milotic.png",
  alt: "Pokémon Milotic",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" }
  ],
  descricao: "Sua beleza é admirada por muitos, e sua presença transmite calma em momentos de tensão."
},
{
  geracao: "Terceira Geração",
  numero: "351",
  nome: "Castform",
  classe: "pokemon-normal",
  dataTipo: "normal",
  imagem: "../imagens/pokemons/351-Castform.png",
  alt: "Pokémon Castform",
  tipos: [
    { nome: "Normal", classe: "but-normal", link: "../pokemons/normal.html" }
  ],
  descricao: "Seu corpo reage ao clima, mudando de forma conforme o tempo ao redor."
},
{
  geracao: "Terceira Geração",
  numero: "352",
  nome: "Kecleon",
  classe: "pokemon-normal",
  dataTipo: "normal",
  imagem: "../imagens/pokemons/352-Kecleon.png",
  alt: "Pokémon Kecleon",
  tipos: [
    { nome: "Normal", classe: "but-normal", link: "../pokemons/normal.html" }
  ],
  descricao: "Ele muda de cor para se camuflar, tornando-se difícil de perceber no ambiente."
},
{
  geracao: "Terceira Geração",
  numero: "353",
  nome: "Shuppet",
  classe: "pokemon-fantasma",
  dataTipo: "fantasma",
  imagem: "../imagens/pokemons/353-Shuppet.png",
  alt: "Pokémon Shuppet",
  tipos: [
    { nome: "Fantasma", classe: "but-fantasma", link: "../pokemons/fantasma.html" }
  ],
  descricao: "É atraído por sentimentos escuros e costuma aparecer onde há inveja ou rancor."
},
{
  geracao: "Terceira Geração",
  numero: "354",
  nome: "Banette",
  classe: "pokemon-fantasma",
  dataTipo: "fantasma",
  imagem: "../imagens/pokemons/354-Banette.png",
  alt: "Pokémon Banette",
  tipos: [
    { nome: "Fantasma", classe: "but-fantasma", link: "../pokemons/fantasma.html" }
  ],
  descricao: "Seu corpo lembra um boneco antigo, e sua energia estranha passa uma sensação inquietante."
},
{
  geracao: "Terceira Geração",
  numero: "355",
  nome: "Duskull",
  classe: "pokemon-fantasma",
  dataTipo: "fantasma",
  imagem: "../imagens/pokemons/355-Duskull.png",
  alt: "Pokémon Duskull",
  tipos: [
    { nome: "Fantasma", classe: "but-fantasma", link: "../pokemons/fantasma.html" }
  ],
  descricao: "Ele vagueia no escuro e observa em silêncio, com um olhar que chama atenção."
},
{
  geracao: "Terceira Geração",
  numero: "356",
  nome: "Dusclops",
  classe: "pokemon-fantasma",
  dataTipo: "fantasma",
  imagem: "../imagens/pokemons/356-Dusclops.png",
  alt: "Pokémon Dusclops",
  tipos: [
    { nome: "Fantasma", classe: "but-fantasma", link: "../pokemons/fantasma.html" }
  ],
  descricao: "Seu corpo oco parece esconder um mistério profundo, e ele resiste muito bem aos ataques."
},
{
  geracao: "Terceira Geração",
  numero: "357",
  nome: "Tropius",
  classe: "pokemon-planta",
  dataTipo: "planta voador",
  imagem: "../imagens/pokemons/357-Tropius.png",
  alt: "Pokémon Tropius",
  tipos: [
    { nome: "Planta", classe: "but-planta", link: "../pokemons/planta.html" },
    { nome: "Voador", classe: "but-voador", link: "../pokemons/voador.html" }
  ],
  descricao: "As frutas que crescem em seu pescoço amadurecem com regularidade e são bastante apreciadas."
},
{
  geracao: "Terceira Geração",
  numero: "358",
  nome: "Chimecho",
  classe: "pokemon-psiquico",
  dataTipo: "psiquico",
  imagem: "../imagens/pokemons/358-Chimecho.png",
  alt: "Pokémon Chimecho",
  tipos: [
    { nome: "Psíquico", classe: "but-psiquico", link: "../pokemons/psiquico.html" }
  ],
  descricao: "Quando o vento sopra, ele emite sons delicados que lembram pequenos sinos."
},
{
  geracao: "Terceira Geração",
  numero: "359",
  nome: "Absol",
  classe: "pokemon-noturno",
  dataTipo: "sombrio",
  imagem: "../imagens/pokemons/359-Absol.png",
  alt: "Pokémon Absol",
  tipos: [
    { nome: "Sombrio", classe: "but-sombrio", link: "../pokemons/sombrio.html" }
  ],
  descricao: "É sensível a mudanças no ambiente e costuma ser associado à percepção de desastres."
},
{
  geracao: "Terceira Geração",
  numero: "360",
  nome: "Wynaut",
  classe: "pokemon-psiquico",
  dataTipo: "psiquico",
  imagem: "../imagens/pokemons/360-Wynaut.png",
  alt: "Pokémon Wynaut",
  tipos: [
    { nome: "Psíquico", classe: "but-psiquico", link: "../pokemons/psiquico.html" }
  ],
  descricao: "Vive em grupo e aprende a se fortalecer observando o comportamento dos outros."
},
{
  geracao: "Terceira Geração",
  numero: "361",
  nome: "Snorunt",
  classe: "pokemon-gelo",
  dataTipo: "gelo",
  imagem: "../imagens/pokemons/361-Snorunt.png",
  alt: "Pokémon Snorunt",
  tipos: [
    { nome: "Gelo", classe: "but-gelo", link: "../pokemons/gelo.html" }
  ],
  descricao: "Ele prefere regiões frias e alegra o ambiente com sua presença leve e agitada."
},
{
  geracao: "Terceira Geração",
  numero: "362",
  nome: "Glalie",
  classe: "pokemon-gelo",
  dataTipo: "gelo",
  imagem: "../imagens/pokemons/362-Glalie.png",
  alt: "Pokémon Glalie",
  tipos: [
    { nome: "Gelo", classe: "but-gelo", link: "../pokemons/gelo.html" }
  ],
  descricao: "Seu corpo congelado é duro como pedra, e ele pode liberar ar gelado com intensidade."
},
{
  geracao: "Terceira Geração",
  numero: "363",
  nome: "Spheal",
  classe: "pokemon-gelo",
  dataTipo: "gelo agua",
  imagem: "../imagens/pokemons/363-Spheal.png",
  alt: "Pokémon Spheal",
  tipos: [
    { nome: "Gelo", classe: "but-gelo", link: "../pokemons/gelo.html" },
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" }
  ],
  descricao: "Seu corpo arredondado o ajuda a rolar com facilidade por superfícies geladas."
},
{
  geracao: "Terceira Geração",
  numero: "364",
  nome: "Sealeo",
  classe: "pokemon-gelo",
  dataTipo: "gelo agua",
  imagem: "../imagens/pokemons/364-Sealeo.png",
  alt: "Pokémon Sealeo",
  tipos: [
    { nome: "Gelo", classe: "but-gelo", link: "../pokemons/gelo.html" },
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" }
  ],
  descricao: "É brincalhão e adora equilibrar objetos na ponta do nariz enquanto descansa."
},
{
  geracao: "Terceira Geração",
  numero: "365",
  nome: "Walrein",
  classe: "pokemon-gelo",
  dataTipo: "gelo agua",
  imagem: "../imagens/pokemons/365-Walrein.png",
  alt: "Pokémon Walrein",
  tipos: [
    { nome: "Gelo", classe: "but-gelo", link: "../pokemons/gelo.html" },
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" }
  ],
  descricao: "As presas grossas quebram gelo com facilidade, ajudando-o a abrir caminho em mares frios."
},
{
  geracao: "Terceira Geração",
  numero: "366",
  nome: "Clamperl",
  classe: "pokemon-agua",
  dataTipo: "agua",
  imagem: "../imagens/pokemons/366-Clamperl.png",
  alt: "Pokémon Clamperl",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" }
  ],
  descricao: "Protege a pérola que carrega com muito cuidado dentro da concha resistente."
},
{
  geracao: "Terceira Geração",
  numero: "367",
  nome: "Huntail",
  classe: "pokemon-agua",
  dataTipo: "agua",
  imagem: "../imagens/pokemons/367-Huntail.png",
  alt: "Pokémon Huntail",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" }
  ],
  descricao: "Vive em regiões profundas e atrai presas com a luz brilhante na ponta da cauda."
},
{
  geracao: "Terceira Geração",
  numero: "368",
  nome: "Gorebyss",
  classe: "pokemon-agua",
  dataTipo: "agua",
  imagem: "../imagens/pokemons/368-Gorebyss.png",
  alt: "Pokémon Gorebyss",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" }
  ],
  descricao: "Nada com graça em águas profundas e tem aparência delicada apesar do modo de ataque."
},
{
  geracao: "Terceira Geração",
  numero: "369",
  nome: "Relicanth",
  classe: "pokemon-agua",
  dataTipo: "agua rocha",
  imagem: "../imagens/pokemons/369-Relicanth.png",
  alt: "Pokémon Relicanth",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" },
    { nome: "Rocha", classe: "but-rocha", link: "../pokemons/rocha.html" }
  ],
  descricao: "Seu aspecto antigo chama atenção, e ele parece pouco mudado ao longo de muito tempo."
},
{
  geracao: "Terceira Geração",
  numero: "370",
  nome: "Luvdisc",
  classe: "pokemon-agua",
  dataTipo: "agua",
  imagem: "../imagens/pokemons/370-Luvdisc.png",
  alt: "Pokémon Luvdisc",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" }
  ],
  descricao: "É conhecido pelo formato em coração e por aparecer em águas claras e quentes."
},
{
  geracao: "Terceira Geração",
  numero: "371",
  nome: "Bagon",
  classe: "pokemon-dragao",
  dataTipo: "dragao",
  imagem: "../imagens/pokemons/371-Bagon.png",
  alt: "Pokémon Bagon",
  tipos: [
    { nome: "Dragão", classe: "but-dragao", link: "../pokemons/dragao.html" }
  ],
  descricao: "Ele sonha em voar e treina com obstinação, mesmo antes de conseguir asas."
},
{
  geracao: "Terceira Geração",
  numero: "372",
  nome: "Shelgon",
  classe: "pokemon-dragao",
  dataTipo: "dragao",
  imagem: "../imagens/pokemons/372-Shelgon.png",
  alt: "Pokémon Shelgon",
  tipos: [
    { nome: "Dragão", classe: "but-dragao", link: "../pokemons/dragao.html" }
  ],
  descricao: "Seu corpo fica envolto por uma carapaça dura enquanto acumula energia para evoluir."
},
{
  geracao: "Terceira Geração",
  numero: "373",
  nome: "Salamence",
  classe: "pokemon-dragao",
  dataTipo: "dragao voador",
  imagem: "../imagens/pokemons/373-Salamence.png",
  alt: "Pokémon Salamence",
  tipos: [
    { nome: "Dragão", classe: "but-dragao", link: "../pokemons/dragao.html" },
    { nome: "Voador", classe: "but-voador", link: "../pokemons/voador.html" }
  ],
  descricao: "Depois de evoluir, realiza seu antigo sonho de voar livremente pelos céus."
},
{
  geracao: "Terceira Geração",
  numero: "374",
  nome: "Beldum",
  classe: "pokemon-steel",
  dataTipo: "steel psiquico",
  imagem: "../imagens/pokemons/374-Beldum.png",
  alt: "Pokémon Beldum",
  tipos: [
    { nome: "Steel", classe: "but-steel", link: "../pokemons/steel.html" },
    { nome: "Psíquico", classe: "but-psiquico", link: "../pokemons/psiquico.html" }
  ],
  descricao: "Seu corpo metálico é sustentado por magnetismo, que também ajuda nos movimentos."
},
{
  geracao: "Terceira Geração",
  numero: "375",
  nome: "Metang",
  classe: "pokemon-steel",
  dataTipo: "steel psiquico",
  imagem: "../imagens/pokemons/375-Metang.png",
  alt: "Pokémon Metang",
  tipos: [
    { nome: "Steel", classe: "but-steel", link: "../pokemons/steel.html" },
    { nome: "Psíquico", classe: "but-psiquico", link: "../pokemons/psiquico.html" }
  ],
  descricao: "Dois cérebros trabalham juntos em perfeita sintonia para coordenar seus movimentos."
},
{
  geracao: "Terceira Geração",
  numero: "376",
  nome: "Metagross",
  classe: "pokemon-steel",
  dataTipo: "steel psiquico",
  imagem: "../imagens/pokemons/376-Metagross.png",
  alt: "Pokémon Metagross",
  tipos: [
    { nome: "Steel", classe: "but-steel", link: "../pokemons/steel.html" },
    { nome: "Psíquico", classe: "but-psiquico", link: "../pokemons/psiquico.html" }
  ],
  descricao: "Possui inteligência impressionante e combina força física com cálculo extremamente rápido."
},
{
  geracao: "Terceira Geração",
  numero: "377",
  nome: "Regirock",
  classe: "pokemon-rocha",
  dataTipo: "rocha",
  imagem: "../imagens/pokemons/377-Regirock.png",
  alt: "Pokémon Regirock",
  tipos: [
    { nome: "Rocha", classe: "but-rocha", link: "../pokemons/rocha.html" }
  ],
  descricao: "Seu corpo é formado por pedras resistentes, e partes danificadas podem ser recompostas."
},
{
  geracao: "Terceira Geração",
  numero: "378",
  nome: "Regice",
  classe: "pokemon-gelo",
  dataTipo: "gelo",
  imagem: "../imagens/pokemons/378-Regice.png",
  alt: "Pokémon Regice",
  tipos: [
    { nome: "Gelo", classe: "but-gelo", link: "../pokemons/gelo.html" }
  ],
  descricao: "Seu corpo gelado mantém temperaturas extremamente baixas e quase não derrete."
},
{
  geracao: "Terceira Geração",
  numero: "379",
  nome: "Registeel",
  classe: "pokemon-steel",
  dataTipo: "steel",
  imagem: "../imagens/pokemons/379-Registeel.png",
  alt: "Pokémon Registeel",
  tipos: [
    { nome: "Steel", classe: "but-steel", link: "../pokemons/steel.html" }
  ],
  descricao: "Sua estrutura metálica é incrivelmente resistente e difícil de ser danificada."
},
{
  geracao: "Terceira Geração",
  numero: "380",
  nome: "Latias",
  classe: "pokemon-dragao",
  dataTipo: "dragao psiquico",
  imagem: "../imagens/pokemons/380-Latias.png",
  alt: "Pokémon Latias",
  tipos: [
    { nome: "Dragão", classe: "but-dragao", link: "../pokemons/dragao.html" },
    { nome: "Psíquico", classe: "but-psiquico", link: "../pokemons/psiquico.html" }
  ],
  descricao: "É inteligente e sensível, demonstrando afeição por pessoas em quem confia."
},
{
  geracao: "Terceira Geração",
  numero: "381",
  nome: "Latios",
  classe: "pokemon-dragao",
  dataTipo: "dragao psiquico",
  imagem: "../imagens/pokemons/381-Latios.png",
  alt: "Pokémon Latios",
  tipos: [
    { nome: "Dragão", classe: "but-dragao", link: "../pokemons/dragao.html" },
    { nome: "Psíquico", classe: "but-psiquico", link: "../pokemons/psiquico.html" }
  ],
  descricao: "Ele voa em alta velocidade e protege o que considera importante com grande determinação."
},
{
  geracao: "Terceira Geração",
  numero: "382",
  nome: "Kyogre",
  classe: "pokemon-agua",
  dataTipo: "agua",
  imagem: "../imagens/pokemons/382-Kyogre.png",
  alt: "Pokémon Kyogre",
  tipos: [
    { nome: "Água", classe: "but-agua", link: "../pokemons/agua.html" }
  ],
  descricao: "Seu poder está ligado ao mar, e sua presença é associada à expansão das águas."
},
{
  geracao: "Terceira Geração",
  numero: "383",
  nome: "Groudon",
  classe: "pokemon-terra",
  dataTipo: "terra",
  imagem: "../imagens/pokemons/383-Groudon.png",
  alt: "Pokémon Groudon",
  tipos: [
    { nome: "Terra", classe: "but-terra", link: "../pokemons/terra.html" }
  ],
  descricao: "É associado à terra firme e ao calor intenso, irradiando poder imponente."
},
{
  geracao: "Terceira Geração",
  numero: "384",
  nome: "Rayquaza",
  classe: "pokemon-dragao",
  dataTipo: "dragao voador",
  imagem: "../imagens/pokemons/384-Rayquaza.png",
  alt: "Pokémon Rayquaza",
  tipos: [
    { nome: "Dragão", classe: "but-dragao", link: "../pokemons/dragao.html" },
    { nome: "Voador", classe: "but-voador", link: "../pokemons/voador.html" }
  ],
  descricao: "Vive nas camadas mais altas do céu e cruza os ares com velocidade impressionante."
},
{
  geracao: "Terceira Geração",
  numero: "385",
  nome: "Jirachi",
  classe: "pokemon-steel",
  dataTipo: "steel psiquico",
  imagem: "../imagens/pokemons/385-Jirachi.png",
  alt: "Pokémon Jirachi",
  tipos: [
    { nome: "Steel", classe: "but-steel", link: "../pokemons/steel.html" },
    { nome: "Psíquico", classe: "but-psiquico", link: "../pokemons/psiquico.html" }
  ],
  descricao: "Seu despertar é envolto em mistério, e sua presença costuma ser vista como algo raro e especial."
},
{
  geracao: "Terceira Geração",
  numero: "386",
  nome: "Deoxys",
  classe: "pokemon-psiquico",
  dataTipo: "psiquico",
  imagem: "../imagens/pokemons/386-Deoxys.png",
  alt: "Pokémon Deoxys",
  tipos: [
    { nome: "Psíquico", classe: "but-psiquico", link: "../pokemons/psiquico.html" }
  ],
  descricao: "Seu corpo tem origem incomum e ele pode mudar de forma para se adaptar ao combate."
}
























];
