export {removemovie } from "../reducers/movieSlice";
import axios from "../../utils/axios";
import { loadmovie } from "../reducers/movieSlice";

export const asyncloadmovie = (id) => async(dispatch , getState) =>{
    try {

        const detail  = await  axios.get(`/movie/${id}`);
        const externalid  = await axios.get(`/movie/${id}/external_ids`);
        const videos  = await axios.get(`/movie/${id}/videos`);
        const recommendations  = await axios.get(`/movie/${id}/recommendations`);
        const similar  = await axios.get(`/movie/${id}/similar`);
        const watchproviders  = await axios.get(`/movie/${id}/watch/providers`);

        let alldetail = {

            detail:detail.data,
            externalid:externalid.data,
            videos:videos.data.results.find((m)=>m.type === "Trailer"),
            recommendations:recommendations.data.results ,
            similar:similar.data.results,
            watchproviders:watchproviders.data.results.IN,

        }
        dispatch(loadmovie(alldetail));
        
    } catch (error) {
        console.log(error)
        
    }
}