// Enable built-in google font library
import { Inter, Lusitana } from 'next/font/google';


// Usually needs to use 'latin' for subsets
export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});


