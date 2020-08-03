import React, { FC } from 'react';
import { Sprites } from '../../../react-app-env';

import { Typography, Space } from 'antd';

const { Title, Text } = Typography;


interface Info {
    name: string;
    height: number;
    weight: number;
    sprites: Sprites;
    id: number;
}

const Info: FC<{ info: Info }> = ({ info }) => (
    <Space size="small" >
        <img
            src={info.sprites.front_shiny || undefined}
            alt="Pokemon image"
            width="300"
            height="300"
        />
        <Space direction="vertical">
            <Title level={2}>{info.name}</Title>
            <Text>Id: {info.id}</Text>
            <Text>Height: {info.height}</Text>
            <Text>Weight: {info.height}</Text>
        </Space>
    </Space>
);

export default Info;