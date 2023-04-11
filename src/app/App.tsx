import {AboutPage} from 'pages/AboutPage';
import {MainPage} from 'pages/MainPage';
import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {classNames} from 'shared/lib/classNames/classNames';
import {NavBar} from 'widgets/NavBar';
import {AppRouter} from './providers/router';
import {useTheme} from './providers/ThemeProvider';
import './styles/index.scss';


const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {hoverd: true, active: false}, [theme])}>
            <NavBar/>


            <AppRouter/>
        </div>
    );
};

export default App;
