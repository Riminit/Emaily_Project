import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<BrowserRouter>
			<html className="teal lighten-5" style={{minHeight:"100vh", paddingBottom:"10px"}}>
				<Header />
				<Route exact path="/" component={Landing} />
				<Route exact path="/surveys" component={Dashboard} />
				<Route path="/surveys/new" component={SurveyNew} />
			</html>
			</BrowserRouter>
		);
	}
}

export default connect(null, actions)(App);
