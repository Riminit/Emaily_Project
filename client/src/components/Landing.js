import React from 'react';
import emailSurveyImage from '../images/emailSurveyImage.png'

const Landing = () => {
	return (
		<div style={{ backgroundImage: 'linear-gradient(to right bottom, #80cbc4 , teal)', color:'white'}}>
			<div class="container valign-wrapper">
				<div class="row">
					<div class="col s6">
						<h2>Feedback Collection</h2>
						<p>
						Get to know your customers by getting their feedback.
						<br/>
						<br/>
						Send simple Yes / No surveys to multiple recipients with Emaily within minutes!
						</p>
					</div>
					<div class="col s6">
						<img class="responsive-img" src={emailSurveyImage} alt="Email Survey Image"/>
					</div>
					
				</div>
			</div>
		</div>
	);
};

export default Landing;
