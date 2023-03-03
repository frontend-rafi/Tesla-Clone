import {createSlice} from '@reduxjs/toolkit'

const initialState ={
    cars:['Model 5','Model 3','Model x','Model y','Solar roof','Solar Panels']
};

const CarSlice = createSlice({
   name:"car",
   initialState,
   reducers:{}

})

export const selectCars = state => state.car.cars

export default CarSlice.reducer;