require('colors');

const tablaMultiplicar = (base) => {
  console.clear();
  let salida = '';

  for (let i = 1; i <= 12; i++) {
    salida += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
  }

  console.log('\n============================='.green);
  console.log(` Tabla de multiplicar del ${base}`.green);
  console.log('============================='.green);

  console.log(salida);
};

module.exports = {
  tablaMultiplicar,
};
