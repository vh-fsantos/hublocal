import { AppThunk } from '../store';
import api from '../pages/api/api';
import { AxiosResponse } from 'axios';

interface AuthResponse {
    accessToken: string;
}

export function login(email: string, password: string): AppThunk {
  return async (dispatch) => {
   const { data: {accessToken} }: AxiosResponse<AuthResponse> = await api.post<AuthResponse>('/auth/login', { email, password })
   dispatch({
      type: 'LOGIN',
      payload: {
        accessToken
      }
    });
      
  };
}