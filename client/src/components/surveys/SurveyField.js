// SurveyField contains logic to render a single
// label and text input

import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
	return (
		<div className="container" style={{ marginTop: '20px' }}>
			<label style={{ fontSize: '20px' }}>{label}</label>
			<input {...input} style={{ marginBottom: '5px' }} />
			<div className="red-text" style={{ marginBottom: '20px' }}>
				{touched && error}
			</div>
		</div>
	);
};
