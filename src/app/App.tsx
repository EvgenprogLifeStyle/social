import React, { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Sidebar } from 'widgets/Sidebar';
import { NavBarr } from 'widgets/NavBarr';
import { userActions } from 'entities/User';
import { useDispatch } from 'react-redux';

function App() {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <NavBarr />

                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>

    );
}

export default App;
