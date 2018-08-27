export class Scout {
    
    sigla: string;
    estatistica: string;
    pontos: number;
    tipo: string;
    quantidade?: number;

    constructor(sigla?: string, estatistica?: string, pontos?: number, tipo?: string, quantidade?: number) {
        this.sigla = sigla;
        this.estatistica = estatistica;
        this.pontos = pontos;
        this.tipo = tipo;
        this.quantidade = quantidade;
    }

    public getTotalScore(): number{
        return this.quantidade * this.pontos;
    }
}
