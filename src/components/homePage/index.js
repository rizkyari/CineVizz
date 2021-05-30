import React, {lazy, Suspense} from 'react';
import Header from '../header';
import './index.css';
import Loading from '../loading';


function HomePage(){
const ListItem = lazy(() => import('../listContent'));
    return(
        <div>
            <Header/>
            <div className="body-content">
                <Suspense fallback={<div className="body-loading"><Loading/></div>}>
                    <ListItem/>
                </Suspense>
            </div>
        </div>
    )
}

export default HomePage;