import * as Yup from 'yup';

export const requestServicesValidation = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email().required('Invalid email'),
    phone: Yup.number().min(1000000000, 'Please ensure area code is included').max(19999999999, 'Please enter a valid phone number').required('Phone number Required'),
    streetAddress: Yup.string().required('Cannot be left blank'),
    city: Yup.string().required('Cannot be left blank'),
    state: Yup.string().required('Cannot be left blank'),
    zip: Yup.number().required('Cannot be left blank'),
})