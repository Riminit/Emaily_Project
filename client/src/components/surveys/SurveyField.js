// SurveyField contains logic to render a single
// label and text input

import React from 'react';

export default ({ input, label, placeholder, meta: { error, touched } }) => {
	return (
		<div style={{ marginTop: '20px' }}>
			<label>{label}</label>
			<input {...input} placeholder={placeholder}/>
			<div className="red-text" style={{ marginBottom: '20px' }}>
				{touched && error}
			</div>
		</div>
	);
};
