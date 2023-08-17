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

const Image = () => <h2>image placeholder</h2>;
const Number = () => <h2>Number</h2>;
const Name = () => <h4>Name</h4>;


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Start />);