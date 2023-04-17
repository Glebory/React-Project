import React, { FormEventHandler } from "react";

type Option = {value:string, text: string}
type Props = {
    label: string,
    name:string,
    value: string,
    onChange: FormEventHandler,
    className: string,
    options: Array<Option>
}


function Select(props: Props){
    const options = props.options.map((option,i) => (
        <option 
            value={option.value}
            key={`option${i+1}`}
        >
            {option.text}
        </option>
    ))
    return(
        <div className={props.className ? `select ${props.className}`: 'select'}>
            <label htmlFor={props.name}>{props.label}</label>
            <select 
                name={props.name}
                value={props.value}
                onChange={(event) => props.onChange(event)}
            >
                {options}
            </select>
            
        </div>
        
    )

}

export default Select;