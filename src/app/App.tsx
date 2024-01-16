import React, { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Sidebar } from 'widgets/Sidebar';
import { NavBarr } from 'widgets/NavBarr';
import { getUserInit, userActions } from 'entities/User';
import { useDispatch, useSelector } from 'react-redux';

function App() {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const _inited = useSelector(getUserInit);
    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <NavBarr />

                <div className="content-page">
                    <Sidebar />
                    {_inited
                        && <AppRouter />}
                </div>
            </Suspense>
        </div>

    );
}

export default App;
