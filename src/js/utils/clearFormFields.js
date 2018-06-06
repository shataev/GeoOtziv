const clearFormFields = form => {
	for (const el of form.elements) {
		if (el.type === 'text' || el.type === 'textarea') {
			el.value = null;
		}
	}
};

export default clearFormFields;