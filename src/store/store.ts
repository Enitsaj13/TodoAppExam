
import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '@/store/slice'; // reducer slice

const store = configureStore({
    reducer: {
        tasks: tasksReducer, // reducer slice to the root reducer
        // other reducers if you have them
    },
});

export type RootState = ReturnType<typeof store.getState>; // define RootState type

export default store;
