
import { Course, CourseCategory } from './types';

export const COURSES: Course[] = [
  {
    id: 'trading-101',
    title: 'Price Action Mastery',
    description: 'Learn the secrets of institutional trading and risk management from a pro trader.',
    price: 49.99,
    category: CourseCategory.TRADING,
    image: 'https://images.unsplash.com/photo-1611974714652-1264b387e74d?q=80&w=800&auto=format&fit=crop',
    lessons: 24,
    rating: 4.9
  },
  {
    id: 'data-viz-202',
    title: 'Modern Data Analysis',
    description: 'Transform raw data into powerful business insights using Pandas, SQL, and AI.',
    price: 59.99,
    category: CourseCategory.DATA_ANALYSIS,
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=800&auto=format&fit=crop',
    lessons: 32,
    rating: 4.8
  },
  {
    id: 'freelance-pro',
    title: 'High-Ticket Scaling',
    description: 'Scale your service business to $10k/month by mastering high-ticket sales.',
    price: 39.99,
    category: CourseCategory.FREELANCING,
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop',
    lessons: 18,
    rating: 5.0
  }
];

export const TESTIMONIALS = [
  {
    name: "Alex Rivera",
    role: "Full-time Trader",
    text: "Yisak's data-driven approach changed how I see charts. I went from gambling to trading math.",
    avatar: "https://i.pravatar.cc/150?u=alex"
  },
  {
    name: "Sarah Chen",
    role: "Data Consultant",
    text: "The Python curriculum is better than my university degree. I landed a $90k job in 4 months.",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "Marcus Thorne",
    role: "Freelance Agency Owner",
    text: "The sales scripts alone are worth 10x the price. Closed my first $5k client last week.",
    avatar: "https://i.pravatar.cc/150?u=marcus"
  }
];

export const PERFORMANCE_DATA = [
  { month: 'Jan', profit: 2400 },
  { month: 'Feb', profit: 3100 },
  { month: 'Mar', profit: 2800 },
  { month: 'Apr', profit: 4500 },
  { month: 'May', profit: 6200 },
  { month: 'Jun', profit: 5800 },
  { month: 'Jul', profit: 8900 },
];
