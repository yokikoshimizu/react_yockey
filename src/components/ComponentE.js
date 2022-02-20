import React, { useContext } from 'react';
import { Store } from '../store/index';
import { Table } from 'react-bootstrap';
import { INCREMENT, DECREMENT, RESET, NABEATSU } from '../actions/index';

const ComponentE = () => {
    const { globalState, setGlobalState } = useContext(Store);
    const handleClick = () => {
        setGlobalState({
            type: INCREMENT
        });
    };

    const handleClick2 = () => {
        setGlobalState({
            type: DECREMENT
        });
    };

    const handleClick3 = () => {
        setGlobalState({
            type: RESET
        });
    };

    const handleClick4 = () => {
        setGlobalState({
            type: NABEATSU
        });
    };

    console.log(globalState);
    return (
        <div>
            <h1>ComponentE.js</h1>
            <h2>Extra課題</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>
                            userId
                        </th>
                        <th>
                            id
                        </th>
                        <th>
                            title
                        </th>
                        <th>
                            completed
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {globalState && globalState.data.map((d, index) => {
                        return (
                            <tr key={index}>
                                <td>{d.userId}</td>
                                <td>{d.id}</td>
                                <td>{d.title}</td>
                                <td>{d.completed.toString()}</td>
                            </tr>
                        )
                    })}
                </tbody>
        
            </Table>
            <button onClick={handleClick}>+1</button>
            <button onClick={handleClick2}>-1</button>
            <button onClick={handleClick3}>reset</button>
            <button onClick={handleClick4}>ナベアツ</button>
        </div>
    );
};

export default ComponentE;