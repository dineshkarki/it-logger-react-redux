import { GET_LOGS, ADD_LOG, SET_LOADING, LOGS_ERROR, DELETE_LOG, SET_CURRENT, CLEAR_CURRENT, UPDATE_LOG, SEARCH_LOGS } from "./types";
import axios from "axios";

// Get Logs
export const getLogs = () => async dispatch => {
  try {

    setLoading();

    const res = await axios.get(`http://localhost:5000/logs`);
    console.log(res.data);

    dispatch({
      type: GET_LOGS,
      payload: res.data
    })
  }
  catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.res.data
    })
  }
}

// Add Logs

export const addLog = (log) => async dispatch => {
  try {

    setLoading();

    const res = await axios.post(`http://localhost:5000/logs`, log);
    console.log(res.data)

    dispatch({
      type: ADD_LOG,
      payload: res.data
    })
  }

  catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.res.data
    })
  }
}

// Delete Logs
export const deleteLog = (id) => async dispatch => {

  try {
    setLoading();

    const res = await axios.delete(`http://localhost:5000/logs/${id}`);
    console.log(res.data)

    dispatch({
      type: DELETE_LOG,
      payload: id
    })
  }

  catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.res.data
    })
  }
}



// Update Logs
export const updateLog = (log) => async dispatch => {

  try {
    setLoading();

    const res = await axios.put(`http://localhost:5000/logs/${log.id}`, log);
    console.log(res.data)

    dispatch({
      type: UPDATE_LOG,
      payload: res.data
    })
  }

  catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.res.data
    })
  }
}



// Search Logs from Server

export const searchLogs = (text) => async dispatch => {

  try {

    setLoading();

    const res = await axios.get(`http://localhost:5000/logs?q=${text}`);
    console.log(res.data)

    dispatch({
      type: SEARCH_LOGS,
      payload: res.data
    })
  }

  catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.res.data
    })
  }
}



//Set Current Log

export const setCurrent = log => {
  return {
    type: SET_CURRENT,
    payload: log
  }
}



//Set Clear Log

export const clearCurrent = log => {
  return {
    type: CLEAR_CURRENT,
    payload: log
  }
}

//Set Loading
export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}