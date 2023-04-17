import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Input from '../../inputs/Input'
import Select from '../../inputs/Select'
import Password from '../../inputs/Password'
import FullDate from '../../inputs/FullDate'
import Email from '../../inputs/Email'


function CustomerForm(props){
    const selectOp = [{
        value:"Create",
        text:"Create Customer",
    },
    {
        value:"Update",
        text:"Update Customer",
    },
    {
        value:"Delete",
        text:"Delete Customer",
    },
    {
        value:"Find",
        text:"Find Customer",
    }]

    return(
        <Form 
            noValidate validated={props.validated} 
            onSubmit={(event) => props.handleSubmit(event)}>
            <Select
                options={selectOp}
                name="op"
                value={props.option}
                onChange={props.changeOption}
                label="Please select operation:"
            />
            {props.option !== "Create" && <Input
                required
                key={`CustomerID`}
                label="Customer ID"
                type="number"
                letterTracker={props.letterTracker}
                name="id"
                formData={props.formData.id}
                format="digits only"
            />}
            {props.option !== "Delete" && props.option !== "Find" &&
                <Container>
                    <Row>
                        <Input
                            required = {props.option==="Create"}
                            label="First Name"
                            letterTracker={props.letterTracker}
                            name="firstName"
                            formData={props.formData.firstName}
                            pattern="^[a-zA-Z]+$"
                        />
                        <Input
                            required = {props.option==="Create"}
                            label="Last Name"
                            letterTracker={props.letterTracker}
                            name="lastName"
                            formData={props.formData.lastName}
                            pattern="^[a-zA-Z]+$"
                        />
                    </Row>
                    <Row>
                        <Email
                            required = {props.option==="Create"}
                            label="Email"
                            letterTracker={props.letterTracker}
                            name="email"
                            formData={props.formData.email}
                        />
                        <Password
                            label="Password"
                            name="password"
                            required = {props.option==="Create"}
                            letterTracker={props.letterTracker}
                            formData={props.formData.password}
                        />
                    </Row>
                    <Row>
                        <FullDate
                            required = {props.option==="Create"}
                            label="Date of Birth"
                            letterTracker={props.letterTracker}
                            name="dob"
                            formData={props.formData.dob}
                        />
                        <Input
                            required = {props.option==="Create"}
                            label="Address"
                            letterTracker={props.letterTracker}
                            name="address"
                            formData={props.formData.address}
                        />
                    </Row>
                </Container>
            }
            <button>Submit</button>
        </Form>
    )
}

export default CustomerForm;