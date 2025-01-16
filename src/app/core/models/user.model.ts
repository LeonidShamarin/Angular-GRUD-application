export interface User {
    firstName: string;
    lastName: string;
    email: string;
    createdAt: string;
    description?: string;
    tags?: string[];
  }
  
  export interface UserFormData extends Omit<User, 'createdAt'> {
    id?: string;
  }