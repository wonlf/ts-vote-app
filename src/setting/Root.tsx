import * as React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from '../components/App/App';
import Vote from '../components/Vote/Vote';
import Result from '../components/Result/Result';

class Root extends React.Component {
    public render() {
        return (
            <Router>
                    <Route exact={true} path={'/'} component={App}/>
                    <Route path={'/vote'}  component={Vote}/>
                    <Route path={'/result'} component={Result}/>
            </Router>
        );
    }
}

export default Root;
