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
  const nomeBusca = normalizarTexto(campoNome.value.trim());
  const elemento1 = campoElemento1.value;
  const elemento2 = campoElemento2.value;
  const geracao = campoGeracao.value;

  const filtrados = pokemons.filter((pokemon) => {
    const nomePokemon = normalizarTexto(pokemon.nome);
    const tiposPokemon = pokemon.dataTipo.toLowerCase().split(" ");
    const geracaoPokemon = pokemon.geracao;

    const filtroNome = nomeBusca === "" || nomePokemon.includes(nomeBusca);
    const filtroElemento1 = elemento1 === "" || tiposPokemon.includes(elemento1);
    const filtroElemento2 = elemento2 === "" || tiposPokemon.includes(elemento2);
    const filtroGeracao = geracao === "" || geracaoPokemon === geracao;

    return filtroNome && filtroElemento1 && filtroElemento2 && filtroGeracao;
  });

  renderizarPokedex(filtrados);
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

campoNome.addEventListener("input", filtrarPokemons);
campoElemento1.addEventListener("change", filtrarPokemons);
campoElemento2.addEventListener("change", filtrarPokemons);
campoGeracao.addEventListener("change", filtrarPokemons);