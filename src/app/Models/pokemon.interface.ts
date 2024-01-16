
interface Ability {
    is_hidden: boolean;
    slot: number;
    ability: {
        name: string;
        url: string;
    }
}

interface Form {
    name: string;
    url: string;
}

interface GameIndex {
    game_index: number;
    version: {
        name: string;
        url: string;
    }
}

interface HeldItem {
    item: {
        name: string;
        url: string;
    }
    version_details: {
        rarity: number;
        version: {
            name: string;
            url: string;
        }
    }
}

interface Move {
    move: {
        name: string;
        url: string;
    }
    version_group_details: {
        level_learned_at: number;
        version_group: {
            name: string;
            url: string;
        }
        move_learn_method: {
            name: string;
            url: string;
        }
    }
}

interface Species {
    name: string;
    url: string;
}

interface Sprites {
    front_default: string;
    front_shiny: string;
    front_female: string;
    front_shiny_female: string;
    back_default: string;
    back_shiny: string;
    back_Female: string;
    back_shiny_female: string;
}

interface Stat {
    stat: {
        name: string;
        url: string;
    }
    effort: number;
    base_stat: number;
}

interface Type {
    slot: number;
    type: {
        name: string;
        url: string;
    }
}


export interface Pokemon {
    id: number
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: Ability[];
    forms: Form[];
    game_indices: GameIndex[];
    held_items: HeldItem[];
    location_area_encounters: string;
    moves: Move[];
    species: Species;
    sprites: Sprites;
    stats: Stat[];
    types: Type[];

}