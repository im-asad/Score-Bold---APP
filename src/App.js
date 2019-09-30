import React from 'react';
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import {BrowserRouter, Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ReactGA from 'react-ga';

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";

import {authenticate} from "./actions/login.actions";

import './App.css';

export const history = createHistory();

ReactGA.initialize("UA-146058633-1");
history.listen(location => {
    ReactGA.set({ page: location.pathname }); // Update the user's current page
    ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

class App extends React.Component {

    componentDidMount = () => {
        const pathname = window.location.pathname;
        ReactGA.set({ page: pathname });
        this.props.authenticate(pathname);
    };

    render() {
        const {isAuthenticated, user} = this.props;
        return (
            <div className="App">
                <BrowserRouter>
                    <Router history={history}>
                        <Switch>
                            <Route exact path="/register" component={Register} />
                            <Route exact path="/login" component={Login} />
                            <Route path="/" component={isAuthenticated ? Dashboard : Home} />
                        </Switch>
                    </Router>
                </BrowserRouter>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        authenticate
    }, dispatch);
}

function mapStateToProps({auth})
{
    return {
        user: auth.user,
        isAuthenticated: auth.isAuthenticated,
        message: auth.message
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
