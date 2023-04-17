import React from 'react';
import './Table.css';
import useTable from '../../hooks/useTable'
import TablePageController from './TablePageController'

function Table(props){
    const {data, rowsPerPage} = props
    const [page, setPage] = React.useState(1)
    const {slice, numOfPages} = useTable(data, page, rowsPerPage)

    React.useEffect(()=>{
        setPage(1)
    },[data])

    const tableRows = slice.map((object,i) => (
      <tr key={`objectRows${i}`}>{ getTableCells(object) }</tr>
    ))
    
    const tableHeader = <tr>{getTableHeaders( data[0] )}</tr>

    function getTableCells(object){
        let objectKeys = Object.keys(object).filter((key)=>key!== "password")
        
        let objectCells = objectKeys.map((key,i) => (
            <td key={`objectKey${i}`}>{object[key]}</td>
        ))
        return objectCells
    }

    function getTableHeaders(object){
        if (object){
        let objectHeaders = Object.keys(object)
            .filter((key)=>key!== "password").map((key,i) => (
            <th key={`objectHeaders${i}`}>{key}</th>
            ))
        return objectHeaders}
    }

    return(
        <div className="table">
            <table>
                <thead>
                    {tableHeader}
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
            {numOfPages.length > 1 && <TablePageController
                numOfPages={numOfPages}
                slice={slice}
                setPage={setPage}
                page={page}
            />}
        </div>
    )
}

export default Table;