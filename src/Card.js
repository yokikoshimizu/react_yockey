import React from "react";
import './Card.css';

const Card = (props) => {
    console.log(props)
    return(
        <div className="wrapper">
            <table>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>date</th>
                </tr>
                <tr>
                    <td><h1>{props.id}</h1></td> 
                    <td><h1>{props.name}</h1></td>
                    <td><h1>{props.date}</h1></td>
                </tr>
            </table>
        </div>
    );
};

export default Card;
