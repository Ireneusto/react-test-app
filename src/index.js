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
            <EventExamples />
            {sets.map((set) => {
                return <Set {...set} key={set.id} />;
            })}
        </section>
    );
};

const EventExamples = () => {
    return <section>
        <form>
            <h2>Typical form</h2>
            <input type="text" name='example' style={{margin: '1rem 0'}}/>
        </form>
        <button>click me</button>
        </section>
}

const Set = (props) => {
    const {img, name, number} = props;
    return (
        <article className='set'>
            <img src={img} alt={name} />
            <h2>{number}</h2>
            <h4>{name}</h4>
        </article>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<LegoList />);