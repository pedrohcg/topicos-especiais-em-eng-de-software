class NegociacoesView extends View {
    constructor(elemento) {
        super(elemento);
    }

    _template(model) {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>BERRY</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                        <th>AÇÃO</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.negociacoes.map(negociacao => `
                        <tr>
                            <td>${DateHelper.dataParaTexto(negociacao.data)}</td>
                            <td>${negociacao.berry}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                            <td>${negociacao.volume}</td>
                            <td><button class="btn btn-danger btn-sm" onclick="negociacaoController.remove(${model.negociacoes.indexOf(negociacao)})">Remover</button></td>
                        </tr>
                    `).join('')}
                </tbody>
                <tfoot>
                </tfoot>
            </table>
        `;
    }
}