import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { sets } from './sets';
import Set from './Set';

const LegoList = () => {
    return (
        <>
        <h1>Lego Octan sets</h1>
        <section className='legoList'>
            {sets.map((set, index) => {
                return <Set {...set} key={set.id} index={index} />;
            })}
        </section>
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<LegoList />);