import React, { FormEventHandler } from 'react'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import styles from '../Input.module.css'

type Props = {
    label: string,
    name:string,
    required: boolean,
    formData: string,
    letterTracker: FormEventHandler,
}

function FullDate(props: Props){
    const currentYear = ((new Date()).getFullYear())%100
    const decade= Math.floor(currentYear/10)
    const singleDigit=currentYear%10
    const defaultValues = {
        type:"text",
        placeholder:"MM/YY",
        pattern:`((0[1-9])|(1[0-2]))\/${decade}[${singleDigit}-9]|[${decade+1}-9][0-9]`,
        format:" MM/YY"
    }

    return(
        <Form.Group as={Col} controlId={props.name} className={styles.input}>
            <Form.Label>{props.label}:</Form.Label>
            <Form.Control
                className={styles.inputField}
                required={props.required}
                onChange={(event)=> props.letterTracker(event)}
                name={props.name}
                value={props.formData || ""}
                type={defaultValues.type}
                placeholder={defaultValues.placeholder}
                pattern={defaultValues.pattern}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
                {props.label} should be a valid date in {defaultValues.format} format!
            </Form.Control.Feedback>
        </Form.Group>
    )
}

export default FullDate;