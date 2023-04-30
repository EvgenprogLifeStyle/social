import React, { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { NavBar } from 'widgets/NavBar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';
import './styles/index.scss';

const App = () => {
    const { theme } = useTheme();
    useEffect(() => {
        // if (Math.random() < 0.8) throw new Error();
    }, []);

    return (
        <div className={classNames('app', { hoverd: true, active: false }, [theme])}>

            <Suspense fallback="">
                <NavBar />

                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
