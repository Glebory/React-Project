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
    const today = new Date().toISOString().slice(0, 10)
    const defaultValues ={
        type: "date",
        min: "1907-03-04",
        max: today,
        pattern: "\d{4}-\d{2}-\d{2}",
        format:"dd/mm/yyyy"
    }
    return(
        <Form.Group as={Col} controlId={props.name} className={styles.input}>
            <Form.Label>{props.label}:</Form.Label>
            <Form.Control
                className={styles.inputField}
                onChange={(event)=> props.letterTracker(event)}
                required={props.required}
                name={props.name}
                value={props.formData || ""}
                type={defaultValues.type}
                min={defaultValues.min}
                max={defaultValues.max}
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