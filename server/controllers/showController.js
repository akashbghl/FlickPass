// import axios from 'axios'
import {dummyShowsData} from '../data/assets.js'
export const getNowPlayingMovies = async (req,res)=>{
        try {
            // const {data} = await axios.get(`${process.env.OMDb_API_KEY}&s=2025&type=movie`)
            const movies = dummyShowsData //data
            return res.json({success: true , movies});
        } catch (error) {
            console.error(error);
            return res.json({success:false, message: error.message});
        }
} 