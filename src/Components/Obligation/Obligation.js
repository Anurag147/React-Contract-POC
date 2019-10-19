import React from 'react';
import './Obligation.css';

const obligation = (props) => {

    return (
            <div className="ObligationData">
                <label style={{color:"white",marginTop:'10px'}}><strong>{props.contractTitle}</strong></label>
                <br />
                <font style={{color:"black"}}>{props.obligationTitle}</font>
                <br />
                <font style={{color:"black"}}>{props.taskSummary}</font>
                <br />
                <font style={{color:"black"}}>{props.owner}</font>
                <br />
                <font style={{color:"black"}}>{props.ownerEmail}</font>
                <br />
                <font style={{color:"black"}}>{props.criticality}</font>
            </div>
    );
}

export default obligation;