import styles from '../Input.module.css'
import React, { FormEventHandler } from 'react'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'

type Props = {
    label: string,
    name:string,
    required: boolean,
    formData: string,
    letterTracker: FormEventHandler,
}

function Email(props: Props): JSX.Element{
    const defaultValues = {
        maxlength:100,
        type:"email",
        pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}",
        format:"example@email.com"
    }

    return(
        <Form.Group className={styles.input} controlId={props.name} as={Col}>
            <Form.Label>{props.label}:</Form.Label>
            <Form.Control
                className={styles.inputField}
                onChange={(event)=> props.letterTracker(event)}
                required={props.required}
                placeholder={props.label}
                name={props.name}
                value={props.formData || ""}
                maxLength={defaultValues.maxlength}
                type={defaultValues.type}
                pattern={defaultValues.pattern}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
                {props.label} should be formatted correctly: {defaultValues.format}!
            </Form.Control.Feedback>
        </Form.Group>
    )
}

export default Email;