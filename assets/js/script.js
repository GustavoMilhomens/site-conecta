
//* Altera a lingua de todas as paginas para portugues BR
document.documentElement.lang = "pt-BR";

//* coloca o arquivo css nas paginas
async function add_element() {
    const css = document.createElement('link'); //? cria uma variavel que recebe o elemento link
    css.rel = 'stylesheet'; //? configura 
    css.href = 'assets/css/style.css'; //? referencia o css
    document.head.append(css); //? adiciona o elemento
};



add_element();
