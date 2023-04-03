class NegociacoesView extends View {
    constructor(elemento) {

        super(elemento);
    }

    _template(model) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th class="text-center">DATA</th>
                    <th class="text-center">QUANTIDADE</th>
                    <th class="text-center">VALOR</th>
                    <th class="text-center">VOLUME</th>
                    <th class="text-center">REMOVER</th>
                </tr>
            </thead>
            
            <tbody>
            ${model.negociacoes.map((negociacao, id) =>`
                <tr>
                    <td>${DateHelper.dataParaTexto(negociacao.data)}</td>
                    <td>${negociacao.quantidade}</td>
                    <td>${negociacao.valor}</td>
                    <td>${negociacao.volume}</td>
                    <td>
                        <form onsubmit="negociacaoController._deletaMsg(event, ${id})" class="text-center">
                        <button type="button" class="btn-close btn-danger" aria-label="Close">X</button>
                        </form>
                    </td>
                </tr>
            `).join('')}
            </tbody>
            
            <tfoot>
            </tfoot>
        </table>
        `;
    }

}