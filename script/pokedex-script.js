const pokedex = document.getElementById("pokedex");

function criarTiposHTML(tipos) {
  return tipos
    .map(
      (tipo) =>
        `<a class="botao-elemento ${tipo.classe}" href="${tipo.link}">${tipo.nome}</a>`
    )
    .join("");
}

function criarCardPokemon(pokemon) {
  return `
    <article class="pokemon ${pokemon.classe}" data-numero="${pokemon.numero}" data-tipo="${pokemon.dataTipo}">
      <h2 class="titulo-pokemon">
        <span class="numero">${pokemon.numero}</span>
        <span class="nome">${pokemon.nome}</span>
      </h2>

      <img
        class="imagem-do-pokemon"
        src="${pokemon.imagem}"
        alt="${pokemon.alt}"
      >

      <div class="icone-elemento">
        ${criarTiposHTML(pokemon.tipos)}
      </div>

      <p class="texto-pokemon">
        ${pokemon.descricao}
      </p>
    </article>
  `;
}

pokedex.innerHTML = pokemons.map(criarCardPokemon).join("");
