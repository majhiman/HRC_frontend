import axios from 'axios';
//import {APISERVER_URL, APIPOJECT_NAME, MLSERVERURL} from '../utils/constants';

export const getData = async () => {
  let response = await axios.get('http://localhost:8080/HRC_B2B/Fetchservlet');
  //console.log(response.data);
  return response.data;
}

export const searchAPI = async (payload) => {
  let response = await axios.post('http://localhost:8080/HRC_B2B/Search',null,{params:payload});
  return response.data;
}

export const addAPI = async(payload) => {
  let response = await axios.post('http://localhost:8080/HRC_B2B/Add',null,{params:payload})
  return response.data;
}

export const advanceSearchAPI = async(payload) => {
  let response = await axios.post('http://localhost:8080/HRC_B2B/AdvanceSearch',null,{params:payload})
  return response.data;
}

export const analyticsAPI = async(payload) => {
  let response = await axios.post('http://localhost:8080/HRC_B2B/Analytics',null,{params:payload})
  return response.data;
}
export const analyticspieAPI = async(payload) => {
  let response = await axios.post('http://localhost:8080/HRC_B2B/Analyticspie',null,{params:payload})
  return response.data;
}

export const deleteAPI = async(sl_no) => {
  let response = await axios.post('http://localhost:8080/HRC_B2B/Delete',null,{params:{sl_no:sl_no}});  
  return response.data;
}

export const editAPI = async(invoiceCurrency,customerPaymentTerms,sl_no) => {
  let response = await axios.post('http://localhost:8080/HRC_B2B/Edit',null,{params:{
    invoice_currency:invoiceCurrency,
    cust_payment_terms:customerPaymentTerms,
    sl_no:sl_no,
  }});  
  return response.data;
}

export const predictAPI = async(data)=>{
  return axios.post('http://localhost:5000/get_prediction',{data:data});
}