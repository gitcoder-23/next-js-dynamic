
import React, {useRef} from 'react'
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup'

const DisplayingErrorMessagesSchema = Yup.object().shape({
    fullname: Yup.string().max(15,"Must be less than 15").required("Required"),
    email: Yup.string().email("email is invalid").required("Required"),
    phone:  Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(10)
    .required('A phone number is required'),
    password: Yup
    .string()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
    confirm_password: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match').required("Please re-enter password"),
    tnc: Yup.bool()
                        .oneOf([true], 'Accept Ts & Cs is required'),
    time:Yup.string().required("A radio option is required"),
    gender: Yup.string().required("Gender is required")
   });
   const FormikForm2 = () => {
    return (
        <>
      <div className="container py-5">
        <div className="card border-0 shadow w-50 p-4  mx-auto">
        <h1 className="text-align-center " style={{textAlign: "center"}}>Registration Form</h1>
        <Formik   initialValues={{
          fullname: '',
          email: '',
          phone: '',
          password: '',
          confirm_password: '',
          gender: "",
          time: "",
          tnc: false,
        }}
        validationSchema={DisplayingErrorMessagesSchema}
        onSubmit={values => {
            // same shape as initial values
            console.log(values);
          }}
       > 


       
        {({ errors, touched }) => (
        <Form>
        <div className="form-group">
          <label for="fullname">Full Name</label>
          <Field
            name="fullname"
            type="text"
            className="form-control"
            id="fullname"
            placeholder="Enter Your Full Name"

          />
          {errors.fullname && touched.fullname ? (
             <span style={{color: 'red'}}>{errors.fullname}</span>
           ) : null}
         
        </div>
        <div className="form-group">
          <label for="email">E-mail Address</label>
          <Field
            type="text"
            name="email"
            className="form-control"
            id="email"
            placeholder="Enter Your E-mail Address"
           
           />
           {errors.email && touched.email ? (
             <span style={{color: 'red'}}>{errors.email}</span>
           ) : null}
            
        </div>
        <div className="form-group">
          <label for="phone">Phone Number</label>
          <Field
            type="text"
            name="phone"
            className="form-control"
            id="phone"
            placeholder="Enter Your Phone Number"
            
            
          />
          {errors.phone && touched.phone ? (
             <span style={{color: 'red'}}>{errors.phone}</span>
           ) : null}
         
        </div>
        <div className="form-group">
          <label for="password">Password</label>
          <Field
            type="password"
            name="password"
            className="form-control"
            id="password"
            placeholder="Enter Your Password"
              
            />
        {errors.password && touched.password ? (
             <span style={{color: 'red'}}>{errors.password}</span>
           ) : null}
           
        </div>
        <div className="form-group">
          <label for="password">Confirm Password</label>
          <Field
            type="password"
            name="confirm_password"
            className="form-control"
            id="confirm_password"
            placeholder="Re-type password"
   
          />
          {errors.confirm_password && touched.confirm_password ? (
             <span style={{color: 'red'}}>{errors.confirm_password}</span>
           ) : null}
           
        </div>
        <div className="form-group" >
          <label for="state">Gender</label>
          <Field name="gender" as="select" className='form-control'    >
            <option value="">--- Select Your Gender ---</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </Field>
          {errors.gender && touched.gender ? (
             <span style={{color: 'red'}}>{errors.gender}</span>
           ) : null}
           {/* <ErrorMessage name="gender" component="div" className="invalid-feedback" /> */}
        </div>
        <div className="form-group">
          <label for="time" className="mr-4">Time :</label>
          <div className="form-check form-check-inline">
            <Field
              className="form-check-input"
              type="radio"
              id="day"
              value="day"
              name="time"
              
            />
            
            
            <label className="form-check-label" for="day">day</label>
          </div>
          <div className="form-check form-check-inline">
            <Field
              className="form-check-input"
              type="radio"
              id="night"
              value="night"
              name="time"
              
            />
            
            <label className="form-check-label" for="night">night</label>
          </div>
          <div className="form-check form-check-inline">
            <Field
              className="form-check-input"
              type="radio"
              id="other"
              value="other"
              name="time"
              
            />
            <label className="form-check-label" for="other">other</label>           
          </div>
          {errors.time && touched.time ? (
             <span style={{color:"red"}}>{errors.time}</span>
           ) : null}
        </div>
        <div className="form-group">
          <div className="form-check form-check-inline">
            <Field className="form-check-input" type="checkbox" id="tnc" name="tnc"   />
           
            <label className="form-check-label" for="tnc">
              I agree with all the terms and conditions </label>
          </div>
          {errors.tnc && touched.tnc ? (
             <span style={{color: 'red'}}>{errors.tnc}</span>
           ) : null}
         
        </div>
        <button className="btn btn-primary" type="Submit">Create New Account</button>
      </Form>
      )}
      </Formik>
        </div>
      </div>
     
     
        </>
    )
  }

export default FormikForm2

