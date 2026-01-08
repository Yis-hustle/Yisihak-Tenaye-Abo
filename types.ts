
export enum CourseCategory {
  TRADING = 'Trading',
  DATA_ANALYSIS = 'Data Analysis',
  FREELANCING = 'Freelancing'
}

export interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  category: CourseCategory;
  image: string;
  lessons: number;
  rating: number;
}

export interface User {
  isLoggedIn: boolean;
  purchasedCourses: string[];
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
