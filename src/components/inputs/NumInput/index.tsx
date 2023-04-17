import styles from '../Input.module.css';
import React, {FormEventHandler} from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

type Props = {
    label: string,
    name:string,
    required: boolean,
    formData: string,
    pattern: string, 
    format: string,
    letterTracker: FormEventHandler,
}

function NumInput(props : Props){
    const defaultValues = {
        type:"text",
        pattern:"^[0-9]+$",
    }

    return(
        <Form.Group className={styles.input} as={Col} controlId={props.name}>
            <Form.Label>{props.label}:</Form.Label>
            <Form.Control
                className={styles.inputField}
                onChange={(event)=> props.letterTracker(event)}
                required={props.required}
                placeholder={props.label}
                name={props.name}
                value={props.formData || ""}
                pattern={props.pattern || defaultValues.pattern}
                type={defaultValues.type}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
                {props.label} should be formatted corrrectly: {props.format}
            </Form.Control.Feedback>
        </Form.Group>
    )
}

export default NumInput;