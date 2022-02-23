import React, { useContext } from 'react';
import { Store } from '../store/index';

const ComponentF = () => {
    const value = useContext(Store);
    return (
        <section>
            {/* htmlのタグですが、sectionとかmainとかもあるので、色々勉強してみてくださいね！ */}
            <h1>ComponentF.js</h1>
            <h2>{value}</h2>
        </section>
    );
};

export default ComponentF;