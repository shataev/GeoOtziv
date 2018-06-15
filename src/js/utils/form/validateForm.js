const validateForm = form => {
	let invalidFields = [];

	for (const el of form.elements) {
		if ((el.type === 'text' || el.type === 'textarea') && el.value.trim() === '') {
			invalidFields.push(el);
		}
	}

	return invalidFields;
};

export default validateForm;