import React from 'react'

const FormikForm = () => {
    return (
        <>
        
        <form id="contact" action="" method="post">
            <div className="row">
              <div className="col-lg-6">
                <fieldset>
                  <input type="name" name="name" id="name" placeholder="Name" autoComplete="on" required />
                </fieldset>
              </div>
              <div className="col-lg-6">
                <fieldset>
                  <input type="surname" name="surname" id="surname" placeholder="Surname" autoComplete="on" required />
                </fieldset>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email" required="" />
                </fieldset>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <select>
                    <option>Select option</option>
                    <option value='Video'>Video call</option>
                    <option value='Audio'>Audio call</option>
                    <option value='Phone'>Phone call</option>
                  </select>
                </fieldset>
              </div>
              <div className="col-lg-12">
              <fieldset>
                <span>Set Timing(Any one):</span>
                <input className="con-radio" type="radio" value="Morning" name="time" /> <span className="con-tm">Morning</span>
                <input className="con-radio" type="radio" value="Evening" name="time" /> <span className="con-tm">Evening</span>
                <input className="con-radio" type="radio" value="Afternoon" name="time" /> <span className="con-tm">Afternoon</span>
              </fieldset>
              </div>
              <div className="col-lg-12">
              <fieldset>
                <span>Why need to discuss?</span> <br/>
                <div className="cl-lg-6 check-box-css">
                  <input className="con-radio" name="projectPlanning"  type="checkbox" checked/> Project Planning
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <input className="con-radio" name="generalDiscussion"  type="checkbox"/> General Discussion
                </div>
                <div className="cl-lg-6 check-box-css">
                  <input className="con-radio" name="contentCopyright"  type="checkbox" /> Content Copyright
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <input className="con-radio" name="sellsPlanning"  type="checkbox" /> Sells planning
                </div>
              </fieldset>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <textarea name="message" type="text" className="form-control" id="message" placeholder="Message" required=""></textarea>  
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

export default FormikForm
