import React, { FC } from 'react';
import { Tag } from 'antd';
import { PokeType } from '@types';

const TypeList: FC<{ pokeTypes: Array<PokeType> }> = ({ pokeTypes }) => (
  <div>
    {pokeTypes.map((type) => <Tag color="magenta">{type.type.name.toUpperCase()}</Tag>)}
  </div>
);

export default TypeList;
