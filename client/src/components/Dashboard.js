import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

const Dashboard = () => {
	return (
		<div className="container">
			<h4 className="center">Created Surveys</h4>
			<div className="row">
				<SurveyList />
			</div>
			<div className="fixed-action-btn">
				<Link to="/surveys/new" className="btn-floating btn-large teal">
					<i className="material-icons">add</i>
				</Link>
			</div>
		</div>
	);
};

export default Dashboard;
