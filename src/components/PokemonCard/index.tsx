import React, { FC } from 'react';
import { Space } from 'antd';

import { Pokemon } from '../../react-app-env';

import Stats from './Stats';
import Info from './Info';


const PokemonCard: FC<{ info: Pokemon }> = ({ info }) => {
    const pokemonInfo = {
        weight: info.weight,
        height: info.weight,
        sprites: info.sprites,
        name: info.name,
        id: info.id,
    };

    console.log(info);
    return (
        <Space size="small" direction="vertical">
            <Info info={pokemonInfo} />
            <Stats stats={info.stats} />
        </Space>
    )
};

export default PokemonCard;