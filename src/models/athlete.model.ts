export interface Athlete {
    nome: string;
    slug: string;
    apelido: string;
    foto: string;
    atleta_id: number;
    rodada_id: number;
    clube_id: number;
    clube_escudo?: string;
    posicao_id: number;
    posicao_nome?: string;
    status_id: number;
    status_nome?: string;
    pontos_num: number;
    preco_num: number;
    variacao_num: number;
    media_num: number;
    jogos_num: number;
    scout: number[] | any;
    pontuacao_total: number;

}