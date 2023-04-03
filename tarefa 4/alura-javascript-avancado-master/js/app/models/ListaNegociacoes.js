class ListaNegociacoes {
    constructor() {
        this._listaNegociacoes = [];
    }

    adiciona(negociacao) {
        this._listaNegociacoes.push(negociacao);
    }

    removeTopo(){
        this._listaNegociacoes.shift();
    }

    getById(id){
        return this._listaNegociacoes[id];
    }

    removeById(id){
        delete this._listaNegociacoes[id];
    }

    removeAll(){
        this._listaNegociacoes = []
    }

    get negociacoes() {
        return [].concat(this._listaNegociacoes);
    }
}