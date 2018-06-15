import getInvalidFieldsName from './getInvalidFieldsName';

const showHideInvalidMessage = (form, invalidFields) => {
	if (invalidFields.length > 0) {
		let invalidFieldsName = getInvalidFieldsName(invalidFields);

		form.querySelector('.required-fields-message-fields').innerText = invalidFieldsName;
		form.querySelector('.required-fields-message').classList.remove('is-hidden');
	} else {
		form.querySelector('.required-fields-message').classList.add('is-hidden');
	}
};

export default showHideInvalidMessage;