const useUpdate = () => {
    async function updateData(api, body){
        let success = true
        fetch(api, {
            method: 'PUT',
            mode: 'cors',
            headers: { "content-type": "application/json" },
            body: body
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
    return updateData
}
export default useUpdate;