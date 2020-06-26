const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default (emails) => {
	const invalidEmails = emails
		.split(',')
		.map((email) => email.trim())
		.filter((email) => re.test(email) === false);

	const validEmails = emails
		.split(',')
		.map((email) => email.trim())
		.filter((email) => re.test(email) === true);

	let containEmptyStrings = true;
	while (containEmptyStrings) {
		if (invalidEmails[invalidEmails.length - 1] === '') {
			invalidEmails.pop();
		} else {
			containEmptyStrings = false;
		}
	}

	if (invalidEmails.length) {
		return `These emails are invalid: ${invalidEmails}`;
	} else if (validEmails.length === 0) {
		return 'You must provide a recipient list.';
	}

	return;
};
