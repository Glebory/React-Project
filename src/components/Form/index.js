import './Form.css'
import React from 'react'
import CustomerForm from './Customer'
import Select from '../inputs/Select'
import CardForm from './CreditCard'
import useDelete from '../../hooks/useDelete'
import useCreate from '../../hooks/useCreate'
import useUpdate from '../../hooks/useUpdate'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function Form(props) {
    const deleteData = useDelete()
    const createData = useCreate()
    const updateData = useUpdate()
    const [validated, setValidated] = React.useState(false);
    const [formData, setFormData] = React.useState({})
    const [option, setOption] = React.useState("Create")
    const [table, setTable] = React.useState("Customers")

    const selectTable = [{
        value: "Customers",
        text: "Customer Operations",
    },
    {
        value: "CreditCard",
        text: "Credit Card Operations",
    }]

    function letterTracker(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
        }
        else{
        let success = false
        let bodyData = { ...formData }
        let id = formData.id

        if (option === "Create") {
            if (table !== "CreditCard"){
                let dateArray = formData.dob.split("-")
                let fixedDate = dateArray[1] + "/" + dateArray[2] + "/" + dateArray[0]
                bodyData.dob = fixedDate
            }
            let api = `${props.api}${table}`
            if (table==="CreditCard"){ api = `${api}/${id}`}
            success = createData(api, JSON.stringify(bodyData))
            props.refreshTable(api)
        }
        else if (option === "Update") {
            success = updateData(`${props.api}${table}/${id}`, JSON.stringify(bodyData))
            props.changeApi(`${table}/${id}`)
            props.refreshTable(`${props.api}${table}/${id}`)
        }
        else if (option === "Delete") {
            success = deleteData(`${props.api}${table}/${id}`)
            if (table !== "CreditCard") props.refreshTable(`${props.api}${table}`)
        }
        else if (option === "Find") {
            props.changeApi(`${table}/${id}`)
            props.refreshTable(`${props.api}${table}/${id}`)
        }
        if (success) { setFormData({}) }
        }
        
    }
    
    function changeTable(event){
        setTable(event.target.value)
        setOption("Create")
        setValidated(false);
        setFormData({})
    }

    function changeOption(event) {
        setOption(event.target.value)
        setValidated(false);
        setFormData({})
    }

    //Only gets called when table state changes,
    //to make sure setTable is called first.
    React.useEffect(() => {
        if (table === "CreditCard") { props.changeApi(`${table}/1`) }
        else {
            props.changeApi(`${table}`)
        }
    }, [table])// eslint-disable-line

    return (
        <Container flex="true">
            <Row>
                <Col xs={12} lg={3} xl={12}>
                    <Select
                        className="tableSelector"
                        options={selectTable}
                        name="selectTable"
                        value={table}
                        onChange={changeTable}
                        label="Please select table:"
                    />
                </Col>
                <Col lg={9} xl={12}>
                    {table === "Customers" && <CustomerForm
                        className="form--main"
                        validated={validated}
                        handleSubmit={handleSubmit}
                        option={option}
                        changeOption={changeOption}
                        letterTracker={letterTracker}
                        formData={formData}
                    />}
                    {table === "CreditCard" && <CardForm
                        className="form--main"
                        validated={validated}
                        handleSubmit={handleSubmit}
                        option={option}
                        changeOption={changeOption}
                        letterTracker={letterTracker}
                        formData={formData}
                    />}
                </Col>
            </Row>
        </Container>
    )
}

export default Form;