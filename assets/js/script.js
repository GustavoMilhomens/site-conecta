
//* ============== linguagem ==============
document.documentElement.lang = "pt-BR"; //? Altera a lingua de todas as paginas para portugues BR

//* ============== adicionar elementos ==============  
async function add_element() {
    //? coloca o arquivo css nas paginas
    const css = document.createElement('link'); //? cria uma variavel que recebe o elemento link
    css.rel = 'stylesheet'; //? configura 
    css.href = 'assets/css/style.css'; //? referencia o css
    document.head.append(css); //? adiciona o elemento 

    const icon = document.createElement('link');
    icon.rel = 'icon';
    icon.href = 'assets/imgs/logo/logo.svg';
    document.head.append(icon);
    
};

//* ============== Mudar tema ==============
const theme_button = document.getElementById("theme-button");
const var_theme = localStorage.getItem("theme");

//? verifica se o local storage atribui o tema como escuro ou claro e atribui se for escuro 
if (var_theme === "dark"){
    document.body.classList.add('dark-theme');
}

theme_button.addEventListener("click", async function()
{ 
    //? alterna entre ter ou não o tema escuro
    document.body.classList.toggle('dark-theme');

    //? ve se o atual é dark e salva a preferencia
    let theme = 'light';
    if (document.body.classList.contains("dark-theme")){
        theme = "dark";
    }
    //? salva o tema
    localStorage.setItem('theme', theme); 

    

} );


//* ============== menu_hamburguer ==============
const btn_hamburg_open = document.getElementById("btn-hamburg-open");
const btn_hamburg_close = document.getElementById("btn-hamburg-close");
const main_nav = document.querySelector(".main-nav");
const menu_overlay = document.getElementById("menu-overlay");

function abrir_menu() {
    main_nav.classList.add("ativo");
    menu_overlay.classList.add("ativo");
}

function fechar_menu() {
    main_nav.classList.remove("ativo");
    menu_overlay.classList.remove("ativo");
}

if (btn_hamburg_open && btn_hamburg_close && main_nav && menu_overlay) {
    btn_hamburg_open.addEventListener("click", abrir_menu);
    btn_hamburg_close.addEventListener("click", fechar_menu);

    // clicar fora (no fundo escurecido) fecha
    menu_overlay.addEventListener("click", fechar_menu);

    // clicar em qualquer link do menu fecha
    main_nav.querySelectorAll(".nav-link").forEach(function (link) {
        link.addEventListener("click", fechar_menu);
    });

    // tecla Esc fecha
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") fechar_menu();
    });

    // se a tela virar desktop com o menu aberto, fecha
    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) fechar_menu();
    });
}  

// //* ============== menu_hamburguer ==============  

// const btn_hamburg_open = document.getElementById("btn-hamburg-open");
// const btn_hamburg_close = document.getElementById("btn-hamburg-close");
// const menu_overlay = document.getElementById("menu-overlay");
// const main_nav = document.querySelector(".main-nav");

// // se tiver os elementos ele executa o comando  
// if (btn_hamburg_open && btn_hamburg_close && main_nav){
//     btn_hamburg_open.addEventListener("click", function () { main_nav.classList.add("ativo"); });
    
//     btn_hamburg_close.addEventListener("click", function () { main_nav.classList.remove("ativo"); });
// }



//* ============== ativar funções ==============
add_element();
