export interface User {
  username: string;
  email: string;
  token: string;
  id: string;
  createdAt: string;
}

export interface Login {
  login: User;
}
export interface Register {
  register: User;
}

export interface LoginInput {
  username: string;
  email: string;
}

export interface RegisterInput extends LoginInput {
  password: string;
  confirmPassword: string;
}

export interface Register {
  registerInput: RegisterInput;
}
