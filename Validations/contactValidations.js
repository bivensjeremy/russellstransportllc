import * as Yup from 'yup';

export const contactValidationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email().required('Invalid email'),
    subject: Yup.string().required('Select Your Subject'),
    phone: Yup.number().min(1000000000, 'Please ensure area code is included').max(19999999999, 'Please enter a valid phone number').required('Phone number Required'),
    message: Yup.string().required("Don't forget to write your message"),
})