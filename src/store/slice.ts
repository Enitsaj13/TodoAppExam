// tasksSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TodoItem {
    id: string;
    text: string;
    isFinished: boolean;
}

interface TasksState {
    tasks: TodoItem[];
}

const initialState: TasksState = {
    tasks: [],
};

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<TodoItem>) => {
            state.tasks.push(action.payload);
        },
        removeTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        },
        toggleTask: (state, action: PayloadAction<string>) => {
            const task = state.tasks.find((task) => task.id === action.payload);
            if (task) {
                task.isFinished = !task.isFinished;
            }
        },
    },
});

export const { addTask, removeTask, toggleTask } = tasksSlice.actions;

export default tasksSlice.reducer;
