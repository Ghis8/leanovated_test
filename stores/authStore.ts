import { UserType } from '@/app';
import { create } from 'zustand';
import { persist, createJSONStorage, PersistStorage } from 'zustand/middleware'


interface AuthState {
    user: UserType | null;
    isAuthenticated: boolean;
    // Define the types for the actions (functions to mutate state)
    login: (userData: UserType) => void;
    logout: () => void;
    addProject:Function
  }

  // serialize storage from/to JSON
  export const customStorage: PersistStorage<AuthState> = {
    getItem: (name) => {
      if (typeof window !== 'undefined') {
        const storedValue = localStorage.getItem(name);
        console.log('Restoring from localStorage:', storedValue)
        if (storedValue) {
          return JSON.parse(storedValue); // Deserialize from JSON
        }
      }
      return null;
    },
    setItem: (name, value) => {
      if (typeof window !== 'undefined') {
        localStorage.setItem(name, JSON.stringify(value));  // Serialize to JSON
        console.log('Saving to localStorage:', value); 
      }
    },
    removeItem: (name) => {
      if (typeof window !== 'undefined') {
        localStorage.removeItem(name);
        console.log('Removing from localStorage:', name);
      }
    },
  };
// Create a Zustand store for managing authentication state
const useAuthStore = create<AuthState>()(
    persist(
      (set, get) => ({
        user: null,
        isAuthenticated: false,
  
        // Method to login a user
        login: (userData: UserType) =>
          set(() => ({
            user: userData,
            isAuthenticated: true,
          })),
  
        // Method to add a project (Example logic - modify to suit your needs)
        addProject: (email: string, item: string) =>
          set((state) => {
            if (state.user?.email === email) {
              // Assuming you want to add a project to the user object
              const updatedUser = {
                ...state.user,
                // Assuming 'projects' is a property of user that holds an array
                projects: [...(state.user?.projects || []), item], // Add project
              };
  
              return {
                user: updatedUser,
              };
            }
            return state; // If email doesn't match, return unchanged state
          }),
  
        // Method to logout the user
        logout: () =>
          set(() => ({
            user: null,
            isAuthenticated: false,
          })),
      }),
      {
        name: 'user-storage', // Key for localStorage
        storage: customStorage, // Use localStorage for persistence
      }
    )
  );

export default useAuthStore;
