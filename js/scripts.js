renderRestaurantes();

function renderRestaurantes() {
    for (var restaurante of restaurantes) {
        // Pega a div class cards
        var cards = document.querySelector('.cards');

        // Início da criação do card
        var aCard = document.createElement('a');
        aCard.setAttribute('href',include_path + restaurante.url);
        aCard.setAttribute('class','card');

        // Imagem do card
        var imagemCard = document.createElement('img');
        imagemCard.setAttribute('class','image_card');
        imagemCard.setAttribute('src',include_path + restaurante.imgCard);
        imagemCard.setAttribute('alt',restaurante.imgCardAlt);

        // Div class container_card
        var containerCard = document.createElement('div');
        containerCard.setAttribute('class','container_card');
        var nomeRestaurante = document.createElement('h4');
        nomeRestaurante.setAttribute('class','maginbottommedium');
        var textNome = document.createTextNode(restaurante.nome);
        nomeRestaurante.appendChild(textNome);

        // Div class stars
        var stars = document.createElement('div');
        stars.setAttribute('class','stars flex');
        var notaRestaurante = document.createElement('p');
        notaRestaurante.setAttribute('class','marginrigthsmall');
        var textNota = document.createTextNode(restaurante.nota);
        notaRestaurante.appendChild(textNota);
        stars.appendChild(notaRestaurante);
        
        var avaliacao = document.createElement('div');
        
        for (var i = 1; i <= restaurante.nota; i++) {
            var estrela = document.createElement('i');
            estrela.setAttribute('class','fas fa-star');
            avaliacao.appendChild(estrela);
        }
        
        stars.appendChild(avaliacao);

        var quantidadeComentarios = document.createElement('p');
        quantidadeComentarios.setAttribute('class','marginleftsmall');
        var textQtdComent = document.createTextNode('('+ restaurante.qtdComentarios + ')');
        quantidadeComentarios.appendChild(textQtdComent);
        var precoRestaurante = document.createElement('p');
        precoRestaurante.setAttribute('class','preco');
        var textPreco = document.createTextNode(restaurante.preco);
        precoRestaurante.appendChild(textPreco);
        var comidaRestaurante = document.createElement('p');
        comidaRestaurante.setAttribute('class','maginbottommedium');
        var textComida = document.createTextNode(restaurante.tipoComida);
        comidaRestaurante.appendChild(textComida);

        stars.appendChild(quantidadeComentarios);
        stars.appendChild(precoRestaurante);
        stars.appendChild(comidaRestaurante);

        // Acessibilidade
        var divFlex = document.createElement('div');
        divFlex.setAttribute('class','possui flex');

        if (restaurante.acessibilidade.refeicaoLocal == 's') {
            var check = document.createElement('i');
            check.setAttribute('class','fas fa-check');
            var pRefeicao = document.createElement('p');
            pRefeicao.appendChild(check);
            var textRefeicao = document.createTextNode('Refeição no local');
            pRefeicao.appendChild(textRefeicao);
            divFlex.appendChild(pRefeicao);
        }

        if (restaurante.acessibilidade.caoGuia == 's') {
            var check = document.createElement('i');
            check.setAttribute('class','fas fa-check');
            var pCaoGuia = document.createElement('p');
            pCaoGuia.appendChild(check);
            var textCaoGuia = document.createTextNode('Entrada de cães-guias');
            pCaoGuia.appendChild(textCaoGuia);
            divFlex.appendChild(pCaoGuia);
        }

        if (restaurante.acessibilidade.cardapioBraile == 's') {
            var check = document.createElement('i');
            check.setAttribute('class','fas fa-check');
            var pCardapioBraile = document.createElement('p');
            pCardapioBraile.appendChild(check);
            var textCardapio = document.createTextNode('Cardápio em braile');
            pCardapioBraile.appendChild(textCardapio);
            divFlex.appendChild(pCardapioBraile);
        }

        containerCard.appendChild(nomeRestaurante);
        containerCard.appendChild(stars);
        containerCard.appendChild(divFlex);

        aCard.appendChild(imagemCard);
        aCard.appendChild(containerCard);

        cards.appendChild(aCard);
    }
}