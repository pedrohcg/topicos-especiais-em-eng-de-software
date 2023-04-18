class NegociacaoController {
    constructor() {
        this.preencheBerries();
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._inputBerry = $('#berry');
        this._listaNegociacao = new ListaNegociacoes();
        this._negociacoesView = new NegociacoesView($('#negociacoes-view'));
        this._negociacoesView.update(this._listaNegociacao);
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagem-view'));
        this._mensagemView.update(this._mensagem);
    }

    adiciona(event) {
        event.preventDefault();
        this._listaNegociacao.adiciona(this._criaNegociacao());
        this._negociacoesView.update(this._listaNegociacao);
        this._mensagem.texto = "Negociação adicionada com sucesso!";
        this._mensagemView.update(this._mensagem);
        this._limpaFormulario();
    }

    remove(index) {
        this._listaNegociacao.remove(index);
        this._negociacoesView.update(this._listaNegociacao);
        this._mensagem.texto = "Negociação removida com sucesso!";
        this._mensagemView.update(this._mensagem);
    }

    _criaNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value,
            this._inputBerry.value
        );
    }

    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0;
        this._inputData.focus();
    }

    preencheBerries() {
        fetch('https://pokeapi.co/api/v2/berry/')
            .then(response => response.json())
            .then(data => {
                const select = document.querySelector('#berry');
                select.innerHTML = '<option value="">Selecione uma berry</option>';
                data.results.forEach(berry => {
                    const option = document.createElement('option');
                    option.value = berry.name.charAt(0).toUpperCase() + berry.name.slice(1);
                    option.textContent = berry.name.charAt(0).toUpperCase() + berry.name.slice(1);
                    select.appendChild(option);
                });
            })
            .catch(error => {
                console.error('Erro ao buscar berries:', error);
            });
    }
}