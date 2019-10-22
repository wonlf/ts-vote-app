import * as React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from '../components/App/App';
import Vote from '../components/Vote/Vote';
import Result from '../components/Result/Result'

const Root = () => {
    let url = document.URL;
    let v_url:string = url.substring(23);
    const a = v_url.replace(/[^0-9]/g,"");
    console.log(a)
    return (
        <Router>
            <main>
            <Route exact path={'/'} component={App}/>
            <Route exact path={`/v${a}`} component={Vote}/>
            <Route exact path={`/v${a}/result`} component={Result}/>
            </main>
        </Router>



    );
}

export default Root;



