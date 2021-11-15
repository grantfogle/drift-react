import React, { useEffect, useRef } from 'react';

const PracticeForm = () => {
    const refContainer = useRef(null);
    const divContainer = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(refContainer.current.value);
        console.log(divContainer)
    }

    useEffect(() => {
        console.log(refContainer.current);
        refContainer.current.focus();
    })

    return (
        <>
            <h2>Practice form works!</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" ref={refContainer} />
                    <button type="submit">Submit form</button>
                </div>
                <div ref={divContainer}></div>
            </form>
        </>
    );
}

export default PracticeForm;