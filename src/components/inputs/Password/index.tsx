import React, { FormEventHandler } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import styles from '../Input.module.css';

type Props = {
    label: string,
    name:string,
    required: boolean,
    formData: string,
    letterTracker: FormEventHandler,
}
function Password(props:Props){
    const defaultValues = {
        type: "password",
        maxlength: 50,
        minlength: 6,
        format: "6-50 characters",
    }
    return(
        <Form.Group as={Col} controlId={props.name} className={styles.input}>
            <Form.Label>{props.label}:</Form.Label>
            <Form.Control
                className={styles.inputField}
                onChange={(event)=> props.letterTracker(event)}
                required={props.required}
                placeholder={props.label}
                name={props.name}
                value={props.formData || ""}
                type={defaultValues.type}
                maxLength={defaultValues.maxlength}
                minLength={defaultValues.minlength}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
                {props.label} should be formatted correctly: {defaultValues.format}!</Form.Control.Feedback>
        </Form.Group>
    )
}

export default Password;