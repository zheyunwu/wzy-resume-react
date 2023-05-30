import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { setLocalState, clearLocalState } from 'store/localStorage';

import * as Realm from "realm-web";
import { realm_app } from "api";

export interface LoginPayload {
  email: string,
  password: string,
}

export const loginEmailPassword = createAsyncThunk(
  'auth/login',
  async (payload: LoginPayload) => {
    const { email, password } = payload;
    // Create an email/password credential
    const credentials = Realm.Credentials.emailPassword(email, password);
    // Authenticate the user
    const user = await realm_app.logIn(credentials);
    // `App.currentUser` updates to match the logged in user
    console.assert(user.id === realm_app.currentUser?.id);
    return user;
  }
);

export interface AuthState {
  // Realm User object
  user: {
    id: string,
    email: string | undefined,
    accessToken: string | null,
    refreshToken: string | null,
  }
  status: 'guest' | 'loading' | 'loggedIn' | 'failed',
  error: string | null,
}

// Define initial auth state
const initialState: AuthState = {
  user: {
    id: '',
    email: '',
    accessToken: '',
    refreshToken: '',
  },
  status: 'guest',
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // login: (state, action: PayloadAction<LoginPayload>) => {
    //   const { email } = action.payload;
    //   // Update Redux state
    //   state.user = {
    //     id: '123',
    //     email: email.trim(),
    //     accessToken: '123',
    //     refreshToken: ''
    //   }
    //   state.status = 'loggedIn';
    //   state.error = null;
    //   // Update localstorage
    //   setLocalState('auth', state);
    // },
    logout: (state) => {
      // Update Redux state
      state.user = initialState.user;
      state.status = 'guest';
      state.error = null;
      // Update localstorage
      clearLocalState();
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginEmailPassword.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(loginEmailPassword.fulfilled, (state, { payload }) => {
        state.status = 'loggedIn';
        state.error = null;
        state.user = {
          id: payload.id,
          email: payload.profile.email,
          accessToken: payload.accessToken,
          refreshToken: payload.refreshToken,
        }
        setLocalState('auth', state);
      })
      .addCase(loginEmailPassword.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      })
  }
});

// Export Actions
export const { logout } = authSlice.actions;

// Export Reducer
export default authSlice.reducer;

// Export Selectors
export const selectAuth = (state: RootState) => state.auth;