export {removetv } from "../reducers/tvSlice";
import axios from "../../utils/axios";
import { loadtv } from "../reducers/tvSlice";

export const asyncloadtv = (id) => async(dispatch , getState) =>{
    try {

        const detail  = await  axios.get(`/tv/${id}`);
        const externalid  = await axios.get(`/tv/${id}/external_ids`);
        const videos  = await axios.get(`/tv/${id}/videos`);
        const recommendations  = await axios.get(`/tv/${id}/recommendations`);
        const similar  = await axios.get(`/tv/${id}/similar`);
        const watchproviders  = await axios.get(`/tv/${id}/watch/providers`);

        let alldetail = {

            detail:detail.data,
            externalid:externalid.data,
            videos:videos.data.results,
            recommendations:recommendations.data.results ,
            similar:similar.data.results,
            watchproviders:watchproviders.data.results.IN,

        }
        dispatch(loadtv(alldetail));
        
    } catch (error) {
        console.log(error)
        
    }
}