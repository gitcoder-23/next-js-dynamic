import React, {useState} from 'react'

import { useForm } from "react-hook-form";
import { Alert } from 'react-bootstrap';


const HookForm = () => {

    
  const [submitted, setSubmitted] = useState(false);

  // functions to build form returned by useForm() hook
  const { register, handleSubmit, watch, reset, control,  formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    // alert(JSON.stringify(data));
    // JSON.stringify(value, replacer, space)
    console.log("Submitted", JSON.stringify(data, null, 2));
    setSubmitted(true);
    reset();
  };

  console.log(watch("example")); // watch input value by passing the name of it


    return (
        <>

        <form id="contact" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
            {submitted && 
            <Alert variant="success">
            <div class='success-message' style={{textAlign: "center"}}>Success! Thank you for your response</div>
            </Alert>
            
            }
              {/* <h3 style={{textAlign: "center"}}>React Hook</h3> */}
              <div className="col-lg-6">
                <fieldset>
                  
                  <input type="text" name="firstName" id="firstName" placeholder="First Name" autoComplete="on"
                  {...register("firstName", { required: true, minLength: 3, maxLength: 20, pattern: /^[A-Za-z]+$/i })} />

                    { errors.firstName?.type === "required" && <span style={{color: 'red'}}>First name required</span> }
                    { errors.firstName?.type === "pattern" && <span style={{color: 'red'}}>Only letter accepted</span> }
                    { errors.firstName?.type === "minLength" && <span style={{color: 'red'}}>Minimum length is 3 letters</span> }
                    { errors.firstName?.type === "maxLength" && <span style={{color: 'red'}}>Maximum length is 20 letters</span> }



                </fieldset>
              </div>
              <div className="col-lg-6">
                <fieldset>
                  <input type="text" name="lastName" id="lastName" placeholder="Last Name" autoComplete="on"
                  {...register("lastName", { required: true, minLength: 3, maxLength: 20, pattern: /^[A-Za-z]+$/i })} />
                  {errors.lastName?.type === "required" && <span style={{color: 'red'}}>Last name required</span>}
                  {errors.lastName?.type === "pattern" && <span style={{color: 'red'}}>Only letter accepted</span>}
                  { errors.lastName?.type === "minLength" && <span style={{color: 'red'}}>Minimum length is 3 letters</span> }
                  { errors.lastName?.type === "maxLength" && <span style={{color: 'red'}}>Maximum length is 20 letters</span> }
                       
                </fieldset>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <input type="text" name="email" id="email" placeholder="Email" autoComplete="on"
                  {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })} />
                  {errors.email?.type === "required" && <span style={{color: 'red'}}>Email is required</span>}
                  {errors.email?.type === "pattern" && <span style={{color: 'red'}}>Type valid email</span>}
                </fieldset>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <select name="process" {...register("process", { required: true})} >
                    <option value="">Select option</option>
                    <option value='Video'>Video call</option>
                    <option value='Audio'>Audio call</option>
                    <option value='Phone'>Phone call</option>
                  </select>
                  {errors.process && <span style={{color: 'red'}}>Select any one</span>}
                </fieldset>
              </div>
              <div className="col-lg-12">
              <fieldset>
                <span>Set Timing(Any one):</span>
                <input {...register("time", { required: true })} className="con-radio" type="radio" value="Morning" name="time" /> <span className="con-tm">Morning</span>
                <input {...register("time", { required: true })} className="con-radio" type="radio" value="Evening" name="time" /> <span className="con-tm">Evening</span>
                <input {...register("time", { required: true })} className="con-radio" type="radio" value="Afternoon" name="time" /> <span className="con-tm">Afternoon</span>
                {errors.time && <p style={{color: 'red', padding: "0px 5px 0 20px"}}>Select any one slot</p>}
              </fieldset>
              </div>
              <div className="col-lg-12">
              <fieldset>
                <span>Why need to discuss?</span> <br/>
                <div className="cl-lg-6 check-box-css">
                  <input className="con-radio" {...register("discuss", {required: true})}  name="discuss" value="projectPlanning"  type="checkbox"/> Project Planning
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <input className="con-radio" {...register("discuss", {required: true})}  name="discuss" value="generalDiscussion" type="checkbox"/> General Discussion
                </div>
                <div className="cl-lg-6 check-box-css">
                  <input className="con-radio" {...register("discuss", {required: true})}  name="discuss" value="contentCopyright" type="checkbox" /> Content Copyright
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <input className="con-radio" {...register("discuss", {required: true})}  name="discuss" value="sellsPlanning" type="checkbox" /> Sells planning
                </div>
                {errors.discuss && <span style={{color: 'red'}}>Select atleast one</span>}
              </fieldset>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <textarea name="message" type="text" className="form-control" id="message" placeholder="Message"
                  {...register("message", { required: true, minLength: 8})}></textarea>  
                  {errors.message?.type === "required" && <span style={{color: 'red'}}>Message required</span>}
                  {errors.message?.type === "minLength" && <span style={{color: 'red'}}>Minimum length is 8 characters</span>}
                </fieldset>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <button type="submit" id="form-submit" className="main-button ">Send Message</button>

                </fieldset>
              </div>
            </div>
            <div className="contact-dec">
              <img src="assets/images/contact-decoration.png" alt="" />
            </div>
          </form>
        
        </>
    )
}

export default HookForm
