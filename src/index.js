import React from 'react';
import ReactDOM from 'react-dom/client';

function LegoList() {
    return (
        <div>
            <Set />
            <Set />
            <Set />
            <Set />
        </div>
    );
}

const Set = () => {
    return (
        <article>
            <Image />
            <Number />
            <Name />
        </article>
    );
};

const Image = () => <img src='/assets/images/6341.png'/>;
const Number = () => <h2>6341</h2>;
const Name = () => <h4>Gas and Go Flyer</h4>;


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<LegoList />);