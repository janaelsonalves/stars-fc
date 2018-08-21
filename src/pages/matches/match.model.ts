export interface Match {
    
    partida_id: number;
    clube_casa_id: number;
    clube_casa_posicao: number;
    clube_visitante_id: number;
    aproveitamento_mandante: Array<string>;
    aproveitamento_visitante: Array<string>;
    clube_visitante_posicao: number;
    partida_data: any;
    local: string;
    valida: boolean;
    placar_oficial_mandante: number;
    placar_oficial_visitante: number;
    url_confronto: string;
    url_transmissao: string;
}