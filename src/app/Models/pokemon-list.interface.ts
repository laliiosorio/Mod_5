export interface PokemonList {
    name: string;
    url: string;
}

export interface PokemonAll {
    count: number;
    next: string;
    previous: string;
    results: PokemonList[];
}