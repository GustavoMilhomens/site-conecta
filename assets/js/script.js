
//* ============== linguagem ==============
document.documentElement.lang = "pt-BR"; //? Altera a lingua de todas as paginas para portugues BR

//* ============== adicionar elementos ==============  
async function add_element() {
    //? coloca o arquivo css nas paginas
    const css = document.createElement('link'); //? cria uma variavel que recebe o elemento link
    css.rel = 'stylesheet'; //? configura 
    css.href = 'assets/css/style.css'; //? referencia o css
    document.head.append(css); //? adiciona o elemento 
    
};

//* ============== Mudar tema ==============
const var_theme = localStorage.getItem("theme");

//? verifica se o local storage atribui o tema como escuro ou claro e atribui se for escuro 
if (var_theme === "dark"){
    document.body.classList.add('dark-theme');
}


async function theme_button(){
    
    //? alterna entre ter ou não o tema escuro
    document.body.classList.toggle('dark-theme');

    //? ve se o atual é dark e salva a preferencia
    let theme = 'light';
    if (document.body.classList.contains("dark-theme")){
        theme = "dark";
    }
    //? salva o tema
    localStorage.setItem('theme', theme); 

    

};

//* ============== ativar funções ==============
add_element();
