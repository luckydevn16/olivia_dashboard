import React from 'react';

import Drawer from './Drawer';
import Header from './Header';

interface Props {
    children: React.ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <main className="flex w-full min-h-screen">
            <Drawer />

            <div className="flex flex-col w-full">
                <Header />

                {children}
            </div>
        </main>
    )
}