import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {
	renderFields() {
		return _.map(formFields, ({ label, name, placeholder }) => {
			return (
				<Field
					key={name}
					component={SurveyField}
					type="text"
					label={label}
					name={name}
					placeholder={placeholder}
				/>
			);
		});
	}

	render() {
		return (
			<div className="container">
				<h4 className="center">Create New Survey</h4>
				<form
					onSubmit={this.props.handleSubmit(
						this.props.onSurveySubmit
					)}

					className="white"

					style={{margin:"20px auto", padding:"20px"}}
				>
						{this.renderFields()}

					<div className="row">
						<Link to="/surveys" className="red btn-flat white-text">
							Cancel
						</Link>
						<button
							type="submit"
							className="teal btn-flat right white-text"
						>
							Next
							<i className="material-icons right">arrow_forward</i>
						</button>
					</div>
				</form>
			</div>
		);
	}
}

function validate(values) {
	const errors = {};

	errors.recipients = validateEmails(values.recipients || '');

	_.each(formFields, ({ name, noValueError }) => {
		if (!values[name]) {
			errors[name] = 'You must provide ' + noValueError + '.';
		}
	});

	return errors;
}

export default reduxForm({
	validate, // same as validate: validate,
	form: 'surveyForm',
	destroyOnUnmount: false
})(SurveyForm);
