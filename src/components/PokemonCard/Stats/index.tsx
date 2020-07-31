import React, {FC} from 'react';

import { Progress, Typography } from 'antd';
import { Stat } from '../../../react-app-env';

const { Title } = Typography;


const Stats: FC<{ stats: Array<Stat> }> = ({ stats}) => (
    <div>
        <Title level={2}>Base Stats</Title>
        {stats.map((stat) =>
            <Progress
                percent={stat.base_stat}
                format={percent => `${percent} ${stat.stat.name}`}
                status="active"
                strokeColor={stat.base_stat < 50 ? 'red' : 'green'}
            />)
        }
    </div>
);

export default Stats;