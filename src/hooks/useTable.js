import React from 'react'

const calculateNumOfPages = (data, rowsPerPage) => {
    const numOfPages = [];
    const num = Math.ceil(data.length / rowsPerPage);
    for (let i = 1; i <= num; i++) {
        numOfPages.push(i);
    }
    return numOfPages;
};

const sliceData = (data, page, rowsPerPage) => {
  
    return data.slice((page-1) * rowsPerPage, page * rowsPerPage);
};

const useTable = (data, page, rowsPerPage) =>{
 
    const [tablePages, setTablePages] = React.useState([])
    const [slice, setSlice] = React.useState([])

    React.useEffect(() => {
        const pages = calculateNumOfPages(data, rowsPerPage);
        setTablePages([...pages])
        const slice = sliceData(data, page, rowsPerPage);
        setSlice([...slice])
    },[data, setTablePages, page, setSlice])
    
    return {slice, numOfPages: tablePages}
};

export default useTable;