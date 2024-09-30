import { UserType } from '@/app';
import { create } from 'zustand';


interface AuthState {
    user: UserType | null;
    isAuthenticated: boolean;
    // Define the types for the actions (functions to mutate state)
    login: (userData: UserType) => void;
    logout: () => void;
  }
// Create a Zustand store for managing authentication state
const useAuthStore = create<AuthState>((set) => ({
  user: null, // initial state for the user
  isAuthenticated: false, // initial authentication status

  // Method to login a user
  login: (userData:UserType) => set(() => ({
    user: userData,
    isAuthenticated: true,
  })),

  // Method to logout the user
  logout: () => set(() => ({
    user: null,
    isAuthenticated: false,
  })),
}));

export default useAuthStore;
