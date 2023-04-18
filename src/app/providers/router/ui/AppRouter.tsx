import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter = () => (
    <div className="page-wrapper">
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routeConfig).map(({ element, path }) => (
                    <Routes
                        key={path}
                        path={path}
                        element={element}
                    />
                ))}

            </Routes>
        </Suspense>
    </div>
);

export default AppRouter;
