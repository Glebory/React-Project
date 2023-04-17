import React from 'react'

function updateSyntax(data){
    let processedData = []
    if (typeof data[0] !== "undefined"){
        processedData =
            data.map(person => {
                let newDob = person.dob.split(" ")[0]
                return {...person,dob:newDob}
            })

    }
    else if(typeof data.dob !== "undefined"){
        let newDob = data.dob.split(" ")[0]
        processedData =([{...data,dob:newDob}])
    }
    else{
        processedData = ([{...data}])
    }

    return processedData
}

const useFetch = (api) =>{
    const [data, setData] = React.useState([])

    async function refetch(api){
        fetch( api )
            .then( async res => {
                const data = await res.json() 
                setData([...updateSyntax(data)])})
    }

    React.useEffect(() => {
        refetch(api)
    }, [api]) // eslint-disable-line

    return [data, refetch]
}

export default useFetch;
