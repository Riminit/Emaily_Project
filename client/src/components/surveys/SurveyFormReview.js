import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
	const reviewFields = _.map(formFields, ({ name, label }) => {
		return (
			<div key={name} style={{ marginBottom: '20px' }}>
				<label>{label}</label>
				<div>{formValues[name]}</div>
			</div>
		);
	});

	return (
		<div style={{ marginTop: '20px' }}>
			<h4 className="center">Please confirm your entries</h4>
			<div className="container white" style={{width:"40%", margin:"20px auto", padding:"20px"}}>
				{reviewFields}
				<div className="row">
					<a
						className="yellow darken-3 white-text btn-flat"
						onClick={onCancel}
					>
						Back
						<i className="material-icons left">arrow_back</i>
					</a>
					<button
						onClick={() => submitSurvey(formValues, history)}
						className="green btn-flat right white-text"
					>
						Send Survey
						<i className="material-icons right">email</i>
					</button>
				</div>
			</div>
		</div>
	);
};

function mapStateToProps(state) {
	return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
