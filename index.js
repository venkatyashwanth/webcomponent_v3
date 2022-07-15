import React, { useState } from "react";
import ReactDOM from "react-dom";
import reactToWebcomponent from "react-to-webcomponent";
import PropTypes from 'prop-types';
import './src/styles.css';



const App = (props) => {
    const [count, setCount] = useState(0);

    const doInc = () => {
        setCount(prev => prev.count = count+1)
    }

    const doDec = () => {
        setCount(prev => prev.count = count-1)
    }

    return (
        <>
            <h1>Your Name Here - {props.name}</h1>
            <button className="btnStyle" onClick={() => doInc()}>+</button>
            <span className="counterDisplay">{count}</span>
            <button className="btnStyle" onClick={() => doDec()}>-</button>
        </>
    )
}

App.propTypes = {
    name: PropTypes.string
}



customElements.define('my-counter', reactToWebcomponent(App, React, ReactDOM))

// ReactDOM.render(<App />, document.getElementById('root'));