import { createSlice , createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const JSON_PLACEHOLDER_API = 'https://jsonplaceholder.typicode.com/todos/1'