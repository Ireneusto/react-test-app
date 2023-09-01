import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const sets = [
    {
        number: '6341',
        name: 'Gas and Go Flyer',
        img: './assets/images/6341.png',
        id: 1,
    },
    {
        number: '6515',
        name: 'Stunt Copter',
        img: './assets/images/6515.png',
        id: 2,
    }
]

const LegoList = () => {
    const stringValue = 'blocks'
    const displayValue = () => {
        console.log(stringValue);
    }
    return (
        <section className='legoList'>
            {sets.map((set) => {
                return <Set {...set} key={set.id} displayValue={displayValue}/>;
            })}
        </section>
    );
};

const Set = (props) => {
    const {img, name, number, displayValue} = props;
    return (
        <article className='set'>
            <img src={img} alt={name} />
            <h2>{number}</h2>
            <button onClick={displayValue}>click me</button>
            <h4>{name}</h4>
        </article>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<LegoList />);