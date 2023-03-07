import { configureStore } from '@reduxjs/toolkit';
import useReducer from './features/userSlice';
import boardReducer from './features/boardSlice';
import favouriteReducer from './features/favouriteSlice';


export const store = configureStore({
    reducer: {
        user: useReducer,
        board: boardReducer,
        favourites: favouriteReducer
    }
});