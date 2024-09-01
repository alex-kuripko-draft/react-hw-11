import {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';

import routes from './routes';

const Router = () => (
        <Suspense fallback={<p>Loading...</p>}>
            <Routes>
                {routes.map(({path, Component}, index) => (
                    <Route key={index} path={path} Component={Component}/>
                ))}
            </Routes>
        </Suspense>
);

export default Router;
