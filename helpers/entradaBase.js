const entradaBase = () => {
  return new Promise((resolve) => {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(`Ingresa que tabla quieres: `, (opt) => {
      readline.close();
      resolve(opt);
    });
  });
};

module.exports = {
  entradaBase,
};
