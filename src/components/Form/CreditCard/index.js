import Row from 'react-bootstrap/Row'
import Select from '../../inputs/Select'
import Input from '../../inputs/Input'
import ExpDate from '../../inputs/ExpDate'
import Form from 'react-bootstrap/Form'
import NumInput from '../../inputs/NumInput'


function CardForm(props) {
    const selectOp = [{
        value: "Find",
        text: "Find Card by ID",
    },
    {
        value: "Create",
        text: "Create Card",
    },
    {
        value: "Delete",
        text: "Delete Card",
    }]

    return (
        <Form 
            noValidate validated={props.validated} 
            onSubmit={(event) => props.handleSubmit(event)}>
            <Row>
                <Select
                    options={selectOp}
                    name="op"
                    value={props.option}
                    onChange={props.changeOption}
                    label="Please select operation:"
                />
            </Row>
            <Row>
                <NumInput
                    className="form"
                    required
                    key={`CustomerID`}
                    label="Customer ID"
                    type="number"
                    letterTracker={props.letterTracker}
                    name="id"
                    formData={props.formData.id}
                    format="digits only"
                />
                {props.option === "Create" &&
                <Input
                    required={props.option === "Create"}
                    key={"CardType"}
                    label="Card Type"
                    type="text"
                    letterTracker={props.letterTracker}
                    name="type"
                    formData={props.formData.type}
                    pattern="Mastercard|Visa"
                    format="Mastercard or Visa"
                />
                }
            </Row>
            {props.option === "Create" &&
                <Row>
                    <NumInput
                        required={props.option === "Create"}
                        key={"CardNumber"}
                        label="Card Number"
                        type="number"
                        letterTracker={props.letterTracker}
                        name="cardNo"
                        formData={props.formData.cardNo}
                        pattern='\d{16}'
                        format="XXXXXXXXXXXXXXXX"
                    />
                    <ExpDate
                        required={props.option === "Create"}
                        key={"CardExpiration"}
                        label="Expiration Date"
                        type="date"
                        letterTracker={props.letterTracker}
                        name="exp"
                        formData={props.formData.exp}
                    />
                </Row>
            }
            <button>Submit</button>
        </Form>
    )

}

export default CardForm