import {send, init } from "emailjs-com";
import { Field, Form, Formik } from "formik"
import * as Yup from 'yup';

export const ContactForm = () => {

    const contactSchema = Yup.object().shape({
        fullName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        companyName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        message: Yup.string()
            .min(2, 'Too Short')
            .max(500, 'Too Long')
            .required("Required"),
    })
    return (
        <Formik
            initialValues={{
                fullName: '',
                companyName: '',
                email: '',
                title: '',
                message: '',
            }}
            validationSchema={contactSchema}
            onSubmit={(values, actions) => {
                init("user_IWDvDVqMLrZfgzXV6y0V6")
                send('service_t36ncli', 'template_dil1c5n', values)
                    .then((result) => {
                        console.log(result)
                        actions.setStatus( {success: 'Email sent!'} )
                        setTimeout(() => {
                            actions.resetForm()
                        }, 5000)
                        
                    }, (error) => {
                        console.log(error.text);
                    });
            }}
        >
            {({errors, touched, status, isSubmitting}) => (
            <Form className="contact-form">
                <Field className={errors.fullName && touched.fullName ? `contact__form-field--error contact__form-field form-control` : `contact__form-field form-control`} id="fullName" name="fullName" placeholder="Full Name" />
                {errors.fullName && touched.fullName ? (
                    <div>{errors.fullName}</div>
                ) : null}
                <Field className={errors.companyName && touched.companyName ? `contact__form-field--error contact__form-field form-control` : `contact__form-field form-control`} id="companyName" name="companyName" placeholder="Company Name" />
                {errors.companyName && touched.companyName ? (
                    <div>{errors.companyName}</div>
                ) : null}
                <Field className={errors.email && touched.email ? `contact__form-field--error contact__form-field form-control` : `contact__form-field form-control`}
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                />
                {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                ) : null}
                <Field className={errors.title && touched.title ? `contact__form-field--error contact__form-field form-control` : `contact__form-field form-control`} id="title" name="title" placeholder="Title" />
                {errors.title && touched.title ? (
                    <div>{errors.title}</div>
                ) : null}
                <Field className={errors.message && touched.message ? `contact__form-field--error contact__form-field form-control` : `contact__form-field form-control`} as="textarea" rows="5" id="message" name="message" placeholder="Message" />
                {errors.message && touched.message ? (
                    <div>{errors.message}</div>
                ) : null}
                <button className="contact__form-button btn btn-outline-primary btn-sm" type="submit" disabled={errors.fullName || errors.companyName || errors.email || errors.message || isSubmitting}>Send</button>
                <p className='success'>{status ? status.success : ''}</p>
            </Form>
            )}
        </Formik>
)
}