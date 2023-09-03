import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { sets } from './sets';
import Set from './Set';

const LegoList = () => {
    return (
        <section className='legoList'>
            {sets.map((set) => {
                return <Set {...set} key={set.id} />;
            })}
        </section>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<LegoList />);