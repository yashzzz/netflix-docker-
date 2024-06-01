import { createSlice } from "@reduxjs/toolkit";
// import { Now_Playing_Movie } from "../utils/constant";


const movieSlice = createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        topMovies:null,
        upcomingMovies:null,
        toggle:false,
        trailerMovie:null, 
        open:false,
        id:"",
    },
    reducers:{
        getNowPlayingMovies:(state,action) =>{
            state.nowPlayingMovies = action.payload;
        }  ,
        getPopularMovies:(state,action) =>{
            state.popularMovies= action.payload;
        } , 
         getTopRatedMovies:(state,action) =>{
            state.topMovies= action.payload;
        }  
        ,
        getupcomingMovies:(state,action) =>{
            state.upcomingMovies= action.payload;
        },
        setToggle:(state)=>{
            state.toggle = !state.toggle;
        },
        getTrailerMovie:(state,action)=>{
            state.trailerMovie = action.payload;
        },
        setOpen:(state,action)=>{
            state.open = action.payload;
        },
        getId:(state,action)=>{
            state.id = action.payload;
        }
        
    
    }

});

export const {getNowPlayingMovies,getPopularMovies,getTopRatedMovies,getupcomingMovies,setToggle,getTrailerMovie,setOpen,getId}= movieSlice.actions;

export default movieSlice.reducer;