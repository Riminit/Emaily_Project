import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
	componentDidMount() {
		this.props.fetchSurveys();
	}

	renderSurveys() {
		return this.props.surveys.reverse().map((survey) => {
			return (
				<div className="col s6">
					<div className="card yellow lighten-4" key={survey._id}>
						<div className="card-content">
							<span className="card-title">{survey.title}</span>
							<p>{survey.body}</p>
							<p className="right">
								Sent On :{' '}
								{new Date(survey.dateSent).toLocaleDateString()}
							</p>
						</div>
						<div>
							<div className="card-action">
								<a className="green-text">Yes : {survey.yes}</a>
								<a className="red-text">No : {survey.no}</a>
							</div>
						</div>
					</div>
				</div>
			);
		});
	}

	render() {
		return <div>{this.renderSurveys()}</div>;
	}
}

function mapStateToProps({ surveys }) {
	return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
