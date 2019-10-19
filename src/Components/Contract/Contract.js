import React from 'react';
import './Contract.css';

const contract = (props) => {

    return (
            <div className="ContractData">
                <label style={{color:"white",marginTop:'10px'}}><strong>{props.name}</strong></label>
                <br />
                <font style={{color:"black"}}>{props.country}</font>
                <br />
                <font style={{color:"black"}}>{props.owner}</font>
                <br />
                <font style={{color:"black"}}>{props.ownerEmail}</font>
                <br />
                <font style={{color:"black"}}>{props.category}</font>
            </div>
    );
}

export default contract;