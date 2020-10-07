export default [
	{ label: 'Survey Title',
		name: 'title',
		noValueError: 'a survey title',
		placeholder: 'Survey Title will be used to differentiate your surveys in the Dashboard.'
	},
	{ 
		label: 'Subject Line',
		name: 'subject',
		noValueError: 'a subject line',
		placeholder: 'Subject Line will be used as your email subject.'
	},
	{ 
		label: 'Email Body',
		name: 'body',
		noValueError: 'an email body',
		placeholder: 'Email Body is the question that you would like to ask your recipients.' 
	},
	{
		label: 'Recipient List',
		name: 'recipients',
		noValueError: 'a recipient list',
		placeholder: 'Please separate the email addresses with a comma. (E.g: abc@gmail.com, def@gmail.com)'
	}
];
