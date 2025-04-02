export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
}

export interface Reservation {
  id: number;
  name: string;
  date: string;
  time: string;
  guests: number;
}

export interface User {
  id: number;
  username: string;
  email: string;
  role: 'customer' | 'admin';
}