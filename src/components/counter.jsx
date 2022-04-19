import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

  function   handleClick () {
        setCount(count + 1);
    }

    return (

        <button  className="glyphicon glyphicon-heart fs-4 btn btn-lg btn-danger btn-change btn-change:hover " onClick={handleClick} >{count}k </button>

    );
}

export default Counter;