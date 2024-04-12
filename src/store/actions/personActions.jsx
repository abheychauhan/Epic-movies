export {removeperson } from "../reducers/personSlice";
import axios from "../../utils/axios";
import { loadperson } from "../reducers/personSlice";

export const asyncloadperson = (id) => async(dispatch , getState) =>{
    try {

        const detail  = await  axios.get(`/person/${id}`);
        const externalid  = await axios.get(`/person/${id}/external_ids`);
        const changes  = await axios.get(`/person/${id}/changes`);

        let alldetail = {

            detail:detail.data,
            externalid:externalid.data,
            changes:changes.data.results ,

        }
        dispatch(loadperson(alldetail));
        
    } catch (error) {
        console.log(error)
        
    }
}