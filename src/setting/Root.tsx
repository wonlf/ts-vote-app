import * as React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from '../components/App/App';
import Vote from '../components/Vote/Vote';

const Root = () => {
    let url = document.URL;
    console.log(url.substring(23));
    let v_url:string = url.substring(23);
    return (
        <Router>
            <main>
            <Route exact path={'/'} component={App}/>
            <Route path={`/v${v_url}`} component={Vote}/>
            {/*<Route path={`/${v_url}/result`} component={Result}/>*/}
            </main>
        </Router>



    );
}

export default Root;



