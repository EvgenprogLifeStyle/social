import React, { Suspense, useEffect, useState } from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Sidebar } from 'widgets/Sidebar';
import { NavBarr } from 'widgets/NavBarr';
import { Modal } from 'shared/ui/Modal/Modal';

function App() {
    const { theme } = useTheme();

    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <NavBarr />
                <button
                    onClick={() => setIsOpen(true)}
                >
                    toggle
                </button>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>

                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.

                </Modal>
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>

    );
}

export default App;
