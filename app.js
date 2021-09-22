const { entradaBase } = require('./helpers/entradaBase');
const { tablaMultiplicar } = require('./helpers/tablaMultiplicar');

const main = async () => {
  console.clear();

  let base = await entradaBase();

  tablaMultiplicar(base);
};

main();
