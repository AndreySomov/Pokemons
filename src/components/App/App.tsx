import React, { FC, useEffect, useState } from 'react';

import PokemonCard from '../PokemonCard';

const App: FC = () => {
    const [state, setState] = useState();
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/1/")
            .then((resp) => {
               return resp.json();
            })
            .then((data) => {
                setState(data);
            })
    }, []);

    return (
        <div className="App">
            {state && <PokemonCard info={state} />}
        </div>
    )
};

export default App;