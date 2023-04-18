class ListaNegociacoes {
    constructor() {
        this._listaNegociacoes = [];
    }

    adiciona(negociacao) {
        this._listaNegociacoes.push(negociacao);
    }

    remove(index) {
        this._listaNegociacoes.splice(index, 1);
    }

    get negociacoes() {
        return [].concat(this._listaNegociacoes);
    }
}