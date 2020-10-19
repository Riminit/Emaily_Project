// SurveyField contains logic to render a single
// label and text input

import React from 'react';

export default ({ input, label, placeholder, meta: { error, touched } }) => {
	return (
		<div>
			<label>{label}</label>
			<input {...input} placeholder={placeholder}/>
			<div className="red-text">
				{touched && error}
			</div>
		</div>
	);
};
