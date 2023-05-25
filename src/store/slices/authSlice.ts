import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { setLocalState, clearLocalState } from 'store/localStorage';

export interface LoginPayload {
  email: string,
  password: string,
}

export interface AuthState {
  isLoggedin: boolean,
  name: string,
  email: string
}

// Define initial auth state
const initialState: AuthState = {
  isLoggedin: false,
  name: '',
  email: ''
};

// let preloadedState;
// const persistedTodosString = localStorage.getItem('auth');

// if (persistedTodosString) {
//   preloadedState = {
//     auth: JSON.parse(persistedTodosString)
//   }
// }

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginPayload>) => {
      const { email } = action.payload;
      // Update Redux state
      state.isLoggedin = true;
      state.email = email.trim();
      // Update localstorage
      setLocalState('auth', {isLoggedin: true, email: email});
    },
    logout: (state) => {
      // Update Redux state
      state.isLoggedin = false;
      state.name = '';
      state.email = '';
      // Update localstorage
      clearLocalState();
    }
  },
});

export const { login, logout } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
