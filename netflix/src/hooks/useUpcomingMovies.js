import { useDispatch } from "react-redux";
import axios from "axios";
import { Upcoming_Movies, options } from "../utils/constant";
import {  getupcomingMovies } from "../redux/movieSlice";

const useUpcomingMovies= async () => {
    const dispatch = useDispatch();
    try {
        const res= await axios.get(Upcoming_Movies,options);
        dispatch(getupcomingMovies(res.data.results));
    } catch (error) {
        console.log(error);
        
    }
  
}

export default useUpcomingMovies;