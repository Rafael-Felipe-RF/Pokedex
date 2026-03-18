const pokedex = document.getElementById("pokedex");

function criarTipos(tipos) {
  return tipos.map(tipo => {
    return `
      <a class="botao-elemento ${tipo.classe}" href="${tipo.link}">
        ${tipo.nome}
      </a>
    `;
  }).join("");
}

function criarCard(pokemon) {
  return `
    <article class="pokemon ${pokemon.classe}"
      data-numero="${pokemon.numero}"
      data-tipo="${pokemon.dataTipo}">
      
      <h2 class="titulo-pokemon">
        <span class="numero">${pokemon.numero}</span>
        <span class="nome">${pokemon.nome}</span>
      </h2>

      <img class="imagem-do-pokemon"
        src="${pokemon.imagem}"
        alt="${pokemon.alt}">

      <div class="icone-elemento">
        ${criarTipos(pokemon.tipos)}
      </div>

      <p class="texto-pokemon">
        ${pokemon.descricao}
      </p>
    </article>
  `;
}

function renderizarPokedex(listaPokemons) {
  pokedex.innerHTML = "";

  let geracaoAtual = "";
  let containerAtual = null;

  listaPokemons.forEach(pokemon => {
    if (pokemon.geracao !== geracaoAtual) {
      geracaoAtual = pokemon.geracao;

      const secao = document.createElement("section");
      secao.className = "secao-geracao";

      secao.innerHTML = `
        <h1>${pokemon.geracao}</h1>
        <div class="primeira-geracao"></div>
      `;

      pokedex.appendChild(secao);
      containerAtual = secao.querySelector(".primeira-geracao");
    }

    containerAtual.innerHTML += criarCard(pokemon);
  });
}


renderizarPokedex(pokemons);

const btnTopo = document.getElementById("btn-topo");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btnTopo.style.opacity = "1";
    btnTopo.style.pointerEvents = "auto";
  } else {
    btnTopo.style.opacity = "0";
    btnTopo.style.pointerEvents = "none";
  }
});

btnTopo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});