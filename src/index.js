import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const number = '6341';
const name = 'Gas and Go Flyer';
const img = './assets/images/6341.png';

const LegoList = () => {
    return (
        <section className='legoList'>
            <Set number={number} name={name} img={img}/>
            <Set number={number} name={name} img={img}/>
        </section>
    );
}

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