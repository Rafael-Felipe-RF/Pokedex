const campoNome = document.getElementById("busca-nome");
const campoElemento1 = document.getElementById("busca-elemento-1");
const campoElemento2 = document.getElementById("busca-elemento-2");
const campoGeracao = document.getElementById("busca-geracao");
const btnBuscar = document.getElementById("btn-buscar");
const btnLimpar = document.getElementById("btn-limpar");

function normalizarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function filtrarPokemons() {
  const nome = normalizarTexto(campoNome.value.trim());
  const elemento1 = campoElemento1.value;
  const elemento2 = campoElemento2.value;
  const geracao = campoGeracao.value;

  const resultado = pokemons.filter((pokemon) => {
    const nomePokemon = normalizarTexto(pokemon.nome);
    const tiposPokemon = pokemon.dataTipo.split(" ").map(tipo => tipo.toLowerCase());
    const geracaoPokemon = pokemon.geracao;

    const correspondeNome = !nome || nomePokemon.includes(nome);
    const correspondeElemento1 = !elemento1 || tiposPokemon.includes(elemento1);
    const correspondeElemento2 = !elemento2 || tiposPokemon.includes(elemento2);
    const correspondeGeracao = !geracao || geracaoPokemon === geracao;

    return (
      correspondeNome &&
      correspondeElemento1 &&
      correspondeElemento2 &&
      correspondeGeracao
    );
  });

  renderizarPokedex(resultado);
}

function limparBusca() {
  campoNome.value = "";
  campoElemento1.value = "";
  campoElemento2.value = "";
  campoGeracao.value = "";

  renderizarPokedex(pokemons);
}

btnBuscar.addEventListener("click", filtrarPokemons);
btnLimpar.addEventListener("click", limparBusca);

campoNome.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    filtrarPokemons();
  }
});