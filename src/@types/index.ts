export interface Pokemon {
  base_experience: number;
  height: number;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  name: string;
  order: number;
  sprites: Sprites;
  stats: Array<Stat>;
  types: Array<PokeType>;
  weight: number;
}

export interface Stat {
  base_stat: number;
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

export interface PokeType {
  type: {
    name: string;
    url: string;
  }
}

export interface EvolutionChain {
  evolution_details: any;
  evolves_to: Array<PokeType>;
  species: Species;
}

export interface Species {
  name: string;
  url: string;
}
