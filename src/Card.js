import React from "react";
import './Card.css';

const Card = (props) => {
    console.log(props)
    return(
        <div className="wrapper">
            <table className="tbody">
                <tbody>
                    <tr>
                        <td><h1>{props.id}</h1></td> 
                        <td><h1>{props.name}</h1></td>
                        <td><h1>{props.date}</h1></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Card;
