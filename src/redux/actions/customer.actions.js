import axios from 'axios';
import { url } from '../../utils';
import { GET_ERRORS, GET_CUSTOMERS, GET_SINGLE_CUSTOMER } from '../types';
import store from '../store';
const { dispatch } = store;

export async function getCustomers() {
    try {
        const res = await axios.get(url('/users'))
        dispatch({
            type: GET_CUSTOMERS,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error
        });
    }
}

export async function getSingleCustomer(id) {
    try {
        const res = await axios.get(url('/users/' + id));
        dispatch({
            type: GET_SINGLE_CUSTOMER,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error
        })
    }
}
