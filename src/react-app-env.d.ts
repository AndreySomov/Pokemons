/// <reference types="react-scripts" />
export interface Pokemon {
    abilities: any;
    base_experience: number;
    forms: any;
    game_indices: any;
    height: number;
    held_items: any;
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: any;
    name: string;
    order: number;
    species: any;
    sprites: Sprites;
    stats: Array<Stat>;
    types: any;
    weight: number;
}

export interface Stat {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    }
}

export interface Sprites {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
}
