import service from "../../API";



export const getHome = () => {
    return dispatch => {
        dispatch({ type: 'GET_HOME_DATA' });

        return service.get('/health')
            .then(res => {
                dispatch({ type: 'GET_HOME_DATA', payload: res.data });
            })
            .catch(error => {
                dispatch({ type: 'CHECK_DATA_FAILURE', payload: error });
            });
    }
};
