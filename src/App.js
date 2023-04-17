import React from 'react'
import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from './components/Table';
import Form from './components/Form';
import useFetch from './hooks/useFetch';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const defaultApi = "http://localhost:55443/api/"
    const [api, setApi] = React.useState(defaultApi + "Customers")
    const [tableData, refetch] = useFetch(api)
    function changeApi( newApi ) { setApi( defaultApi + [newApi] ) }

    function refreshTable(api){
        refetch(api)
    }

    return (
        <Container className="app">
            <Row>
                <Col>
                    <Form 
                        refreshTable={refreshTable}
                        api={defaultApi}
                        changeApi={changeApi} 
                    />
                </Col>
                <Col xs={12} xl={8}>
                    <Table
                        data={tableData}
                        rowsPerPage={15}
                    />
                </Col>
            </Row>
        </Container>
    );
}
export default App;