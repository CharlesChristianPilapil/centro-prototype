'use client';

import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const poppins = Poppins({
    subsets: ['latin'],
    weight: '400',
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`${poppins.className} bg-base`}>
                <ProgressBar
                    height='6px'
                    color='#2563eb'
                    options={{ showSpinner: false }}
                    shallowRouting
                />
                <Navbar />
                {children}
                <Newsletter />
                <Footer />
            </body>
        </html>
    );
}
