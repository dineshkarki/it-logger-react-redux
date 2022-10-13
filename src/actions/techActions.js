import { GET_TECHS, ADD_TECH, DELETE_TECH, SET_LOADING, TECHS_ERROR } from "./types";
import axios from "axios";

 //Get techs from server
export const getTechs = () => async dispatch => {
    try {
        setLoading();

        const res = await axios.get(`http://localhost:5000/techs`);
        console.log(res.data);

        dispatch({
            type:GET_TECHS,
            payload:res.data
        })
    }

    catch(err) {
        dispatch({
            type:TECHS_ERROR,
            payload:err.res.data
        })
    }
}

 

//Add techs to server
export const addTechs = (tech) => async dispatch => {

    try {
        setLoading();
        const res = await axios.post(`http://localhost:5000/techs`, tech);
    
        dispatch({
            type:ADD_TECH,
            payload:res.data
        })
    }

    catch(err) {
        dispatch({
            type:TECHS_ERROR,
            payload:err.res.data
        })
    }
}

 

// Delete Techs from Server
export const deleteTech = (id) => async dispatch => {
    try {
        setLoading();

        const res = await axios.delete(`http://localhost:5000/techs/${id}`);
        console.log(res.data)

        dispatch({
            type:DELETE_TECH,
            payload: id
        })
    }

    catch(err) {
        dispatch({
            type:TECHS_ERROR,
            payload:err.res.data
        })
    }
}

 

//Set Loading

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}