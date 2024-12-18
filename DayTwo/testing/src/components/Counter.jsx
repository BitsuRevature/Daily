import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    return (
        <>
            <h1 data-testid="num">{count}</h1>
            <button data-testid="inc" onClick={() => setCount((count) => count + 1)}>
                Increase
            </button>
            <button data-testid="dec" onClick={() => setCount((count) => count - 1)}>
                Decrease
            </button>
        </>
    );
}

export default Counter;