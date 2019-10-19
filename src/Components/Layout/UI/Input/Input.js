import React from 'react';
import './Input.css';

const input = (props) => {
    let inputElement=null;
    let classCss='';
        if(props.isValid){
            classCss = "InputElement"
        }
        else{
            classCss= "InputElementError"
        }

    switch(props.elementtype){

            case ('input'):
            inputElement= <input className={classCss} 
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}/>
            break;

            case ('textarea'):
            inputElement=<textarea className={classCss} 
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}/>
            break;

            case ('select'):
                    inputElement=<select className="InputElement"
                    style={{cursor:'pointer'}}
                    value={props.value}
                    onChange={props.changed}>
                        {props.elementConfig.options.map(option=>(
                            <option key={option.value} value={option.value}>
                                {option.displayValue}
                            </option>
                        ))}                    
                    </select>
                    break;
            
            default:
            inputElement= <input className="InputElement"
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}/>
            break;
    }

    return(
        <div className="Input">
            <label className="Label">{props.label}</label>
            {inputElement}
        </div>
    );
}

export default input;