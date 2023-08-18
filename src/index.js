import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

function LegoList() {
    return (
        <section className='legoList'>
            <Set />
            <Set />
            <Set />
            <Set />
        </section>
    );
}

const Set = () => {
    return (
        <article className='set'>
            <Image />
            <Number />
            <Name />
        </article>
    );
};

const Image = () => <img src='/assets/images/6341.png' alt="lego plane with little gas car"/>;
const Number = () => <h2>6341</h2>;
const Name = () => <h4>Gas and Go Flyer</h4>;


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<LegoList />);