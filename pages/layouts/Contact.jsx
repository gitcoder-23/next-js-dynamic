import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FormikForm from './forms/FormikForm';
import HookForm from './forms/HookForm';


const Contact = () => {

    return (
    <div id="contact" className="contact-us section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay="0.25s">
            <div className="section-heading">
             <h2>Feel Free To Send Us a Message About Your Website Needs</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doer ket eismod tempor incididunt ut labore et dolores</p>
             <div className="phone-info">
              <h4>For any enquiry, Call Us: <span><i className="fa fa-phone"></i> 
              <a href="#">010-020-0340</a></span>
              </h4>
            </div>
            </div>
          </div>
       
       
        <div className="col-lg-6 wow fadeInRight" data-wow-duration="0.5s" data-wow-delay="0.25s">

          <Tabs className="react-tab-class">
            <TabList>
            <Tab>Hook Form</Tab>
            <Tab>Formic Form</Tab>
            </TabList>

            <TabPanel>

            <HookForm />

            </TabPanel>

            <TabPanel>

            <FormikForm />

            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  </div>
    )
}

export default Contact
