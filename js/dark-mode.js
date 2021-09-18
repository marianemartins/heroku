// Alterando o tamanho da fonte
function alterarFonte(e) {
    var elemento = $('body');
    var fonte = elemento.css('font-size');

    if (e == 'a')
        elemento.css('font-size', (parseInt(fonte) + 1) + 'px');
    else
        elemento.css('font-size', (parseInt(fonte) - 1) + 'px');
}

// Salvando o tema no localStorage
const darkModeStorage = localStorage.getItem('gmtDarkMode');
const darkMode = document.querySelector('#switch-shadow');

if (darkModeStorage) {
    document.documentElement.classList.add('dark-mode');
    darkMode.checked = true;
}

darkMode.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-mode');

    if (document.documentElement.classList.contains('dark-mode')) {
        localStorage.setItem('gmtDarkMode', true);
        return;
    }

    localStorage.removeItem('gmtDarkMode');
})

// Navegação por atalho
$('nav .menu_acessibilidade > a').on('click', function(){
    if($(this).length > 0){
        // O elemento existe, portanto precisamos dar o scroll em algum elemento.
        function segundos(valor){
            return valor * 1000;
        }

        var elemento = $(this).attr('href');    
        var divScroll = $(elemento).offset().top;    
        $('html,body').animate({scrollTop:divScroll}, segundos(2));
    }
})

// Responsividade do menu de acessibilidade
$('.botao_abrir').on('click', function(){
    $('nav').css('top','40px');
    $('.botao_abrir').css('display','none');
    $('.botao_fechar').css('display','inline');
})

$('.botao_fechar').on('click', function(){
    $('nav').css('top','-210px');
    $('.botao_fechar').css('display','none');
    $('.botao_abrir').css('display','inline');
})