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
    return (
        <section className='legoList'>
            {sets.map((set) => {
                const {number, name, img, id} = set;
                return <Set number={number} name={name} img={img} key={id} />;
            })}
        </section>
    );
};

const Set = (props) => {
    return (
        <article className='set'>
            <img src={props.img} alt={props.name} />
            <h2>{props.number}</h2>
            <h4>{props.name}</h4>
        </article>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<LegoList />);