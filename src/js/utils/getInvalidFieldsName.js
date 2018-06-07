const getInvalidFieldsName = invalidFields => {

	let invalidFieldsNameArr = invalidFields.map((field) => {
		return field.dataset.heading;
	});

	return invalidFieldsNameArr.join(', ');
};

export default getInvalidFieldsName;