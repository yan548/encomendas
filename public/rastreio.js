const { rastrearEncomendas } = require('correios-brasil');

let codRastreio = ['QK060969199BR']; // array de códigos de rastreios

rastrearEncomendas(codRastreio).then((response) => {
  console.log(response);
});