import React from 'react';
import ReactDOM from 'react-dom/client';

function Start() {
    return (
        <div>
            <div>
                <h2>My first component</h2>
                <h2>My second component</h2>
            </div>
            <div>
                <h2>My first component</h2>
                <h2>My second component</h2>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Start />);