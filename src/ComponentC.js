import React from 'react'
import { useNavigate } from 'react-router-dom'

const ComponentC = () => {
    const navigate = useNavigate()
    const backPage = () => {
        navigate("/componentb")
    }
    return (
        <>
            <div><h1>ComponentC</h1></div>
            <button onClick={backPage}>Bへ戻る</button>
        </>
    );
};

export default ComponentC;
