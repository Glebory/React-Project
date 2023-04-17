const useDelete = () => {
    async function deleteData(api) {
        let success = true
        fetch(api, {
            method: 'DELETE'
        })
            .then(async response => {
                const data = await response.json();

                if (!response.ok) {
                    const error = (data && data.message) || response.status;
                    success = false
                    return Promise.reject(error);
                }
            })
            .catch(error => { console.error('There was an error!', error); });
        return success
    }
    return deleteData
}

export default useDelete;