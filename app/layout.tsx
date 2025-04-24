import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Varun Bhat | Portfolio',
  description: 'Personal portfolio and resume of Varun Bhat, Computer Science student from Oregon State University',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-site-bg-light dark:bg-site-bg-dark text-secondary dark:text-gray-100 transition-colors duration-300">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
} 