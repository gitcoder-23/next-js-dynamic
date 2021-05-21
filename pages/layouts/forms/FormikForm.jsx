import React from 'react'
import { Formik, Form, Field, ErrorMessage, useField, Select } from "formik";
import * as Yup from "yup";

const FormikForm = () => {

  const contactSchema = Yup.object().shape({

      firstName: Yup.string()
        .required("First name required")
        .min(3, "Must be 3 letters")
        .max(12, "Must be 12 letters or less")
        .matches(/^[A-Za-z]+$/i, "First name should be letter"),

      lastName: Yup.string()
        .required("Last name required")
        .min(3, "Must be 3 letters")
        .max(12, "Must be 12 letters or less")
        .matches(/^[A-Za-z]+$/i, "Last name should be letter"),

      email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
  
      process: Yup.string()
        .required("Select any one"),

      time: Yup.string()
        .required("Select any one slot")
        .oneOf(['Morning', 'Evening', 'Afternoon'], "Required"),

      discuss: Yup.string()
        .required("Select atleast one"),
        // .oneOf(['Project Planning', 'General Discussion', 'Content Copyright', 'Sells Planning'], "Required"),

      message: Yup.string()
        .required("Message is required")
        .min(8, "Must be 8 characters or more"),
  });

    return (
      <>
        <Formik
          // initialValues={initialValues}
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            process: '',
            time: '',
            discuss: '',
            message: '',

          }}
          validationSchema={contactSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {(formik) => {
             console.log('formik', formik.values)
            const { errors, touched, isValid, dirty } = formik;
            
            return (
              <>
             
            <Form id="contact">
            <div className="row">
              <div className="col-lg-6">
                <fieldset>
                  <Field type="text" name="firstName" id="firstName" 
                  placeholder="First Name" autoComplete="on"
                  className={errors.firstName && touched.firstName ? 
                    "input-error" : null} />
                  <ErrorMessage name="firstName" style={{color: 'red', marginBottom: "4px"}} component="span" className="error" />
                </fieldset>
              </div>
              <div className="col-lg-6">
                <fieldset>
                  <Field type="text" name="lastName" id="lastName" 
                  placeholder="Last Name"
                  className={errors.firstName && touched.firstName ? 
                    "input-error" : null}
                  />
                  <ErrorMessage name="lastName" style={{color: 'red', marginBottom: "4px"}} component="span" className="error" />
                
                </fieldset>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <Field type="text" name="email" id="email" 
                  placeholder="Your Email" className={errors.firstName && touched.firstName ? "input-error" : null} />
                  <ErrorMessage name="email" style={{color: 'red', marginBottom: "4px"}} component="span" className="error" />
                </fieldset>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <Field as="select" name="process" id="process"
                  // className={errors.process && touched.process ? ' is-invalid' : ''}
                  // className={'form-control' + (errors.role && touched.role ? ' is-invalid' : '')}
                  className={errors.firstName && touched.firstName ? "input-error" : null}>
                    <option value=''>Select option</option>
                    <option value='Video'>Video call</option>
                    <option value='Audio'>Audio call</option>
                    <option value='Phone'>Phone call</option>
                  </Field>
                  <ErrorMessage name="process" style={{color: 'red', marginBottom: "4px"}} component="span" className="error" />
                </fieldset>
              </div>
              <div className="col-lg-12">
              <fieldset>
                <span>Set Timing(Any one):</span>
                <Field 
                className={'con-radio'+ ' ' + (errors.time && touched.time ? "input-error" : '')}
                type="radio" value="Morning" name="time" /> <span className="con-tm">Morning</span>
                <Field className={'con-radio'+ ' ' + (errors.time && touched.time ? "input-error" : '')} type="radio" value="Evening" name="time" /> <span className="con-tm">Evening</span>
                <Field className={'con-radio'+ ' ' + (errors.time && touched.time ? "input-error" : '')} type="radio" value="Afternoon" name="time" /> <span className="con-tm">Afternoon</span>
                <ErrorMessage name="time" style={{color: 'red', marginBottom: "4px"}} component="span" className="error" />
              </fieldset>
              </div>
              <div className="col-lg-12">
              <fieldset>
                <span>Why need to discuss?</span> <br/>
                <div className="cl-lg-6 check-box-css">
                  <Field 
                  className={'con-radio'+ ' ' + (errors.discuss && touched.discuss ? "input-error" : null)} 
                  name="discuss" value="Project Planning"  type="checkbox" /> Project Planning
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <Field className={'con-radio'+ ' ' + (errors.discuss && touched.discuss ? "input-error" : null)}
                  name="discuss" value="General Discussion"  type="checkbox"/> General Discussion
                </div>
                <div className="cl-lg-6 check-box-css">
                  <Field 
                  className={'con-radio'+ ' ' + (errors.discuss && touched.discuss ? "input-error" : null)} name="discuss" value="Content Copyright"  type="checkbox" /> Content Copyright
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <Field 
                  className={'con-radio'+ ' ' + (errors.discuss && touched.discuss ? "input-error" : null)} 
                  name="discuss" value="Sells Planning"  type="checkbox" /> Sells planning
                </div>
                <ErrorMessage name="discuss" style={{color: 'red', marginBottom: "4px"}} component="span" className="error" />
              </fieldset>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <Field as="textarea" name="message" 
                  className={'form-control'+ ' ' + (errors.discuss && touched.discuss ? "input-error" : null)} id="message" placeholder="Message"></Field>  
                  <ErrorMessage name="message" style={{color: 'red', marginBottom: "4px"}} component="span" className="error" />
                </fieldset>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <button type="submit" id="form-submit" className="main-button ">Send Message</button>

                  

                  {/* <button
                  type="submit"
                  className={"main-button"+' '+(!(dirty && isValid) ? "disabled" : "")}
                  disabled={!(dirty && isValid)}
                  >
                    Send Message
                  </button> */}

                </fieldset>
              </div>
            </div>
              <div className="contact-dec">
                <img src="assets/images/contact-decoration.png" alt="" />
              </div>
          </Form>
          </>
          );
        }}
        
    </Formik>
        
        
        </>
    )
}

export default FormikForm
