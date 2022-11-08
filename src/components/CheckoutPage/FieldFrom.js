import React   from 'react'
import { Field, reduxForm  } from 'redux-form'
import { Col,  Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useState } from "react";
// import { clear } from '@testing-library/user-event/dist/clear';





function FieldFrom(props) {
  let Country  = useSelector((state) => state?.GetCheckoutData);
  
  
  const [region, setRegion] = useState(null);
  const [ statedata  , setStatedata ]=useState(null)
  const [test , setTest]=useState(null)
  console.log("statedata",statedata);
  
  
  
  // setStatedata(State.states)
  
  const hedalRegion  = (e) => {
    setRegion(e.target.value)
    let State=Country.CheckoutData.find((item) => item.name === e.target.value)
    setStatedata(State.states)
  }
  console.log("State=======>", statedata);
  console.log("State=======>", region);
  console.log("State=======>",test);
  
    const { handleSubmit , prefix  ,excludes  } = props
    console.log("excludes",excludes.includes("first_name"));
  return (
    
        
        
        
        <div className="form-group">
                <form className="form" form   onSubmit={handleSubmit}   >
                  <Row>
                    { !excludes.includes("first_name") ? 
                    <Col>
                      <div className="control"  >
                        <label htmlFor='first_name'>First name</label>
                        <abbr className="required" title="required">*</abbr>
                        <div>
                          <Field className="input name"  name={`${prefix}first_name`} component="input" type="text" placeholder="First Name" />
                        </div>
                      </div>
                    </Col>
                    : "" 
                      } 

                    <Col>
                     <div className="control ">
                        <label htmlFor='last_name'>Last Name</label>
                        <abbr className="required" title="required">*</abbr>
                        <div>
                          <Field className="input name" name={`${prefix}last_name`} component="input" type="text" placeholder="Last Name" />
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <div className="control ">
                        <label className="label">Company name (optional)</label>
                        <div>
                          <Field className="input name" name={`${prefix}Company_name`} component="input" type="text" placeholder="Company name" />
                        </div>
                      </div>
                 
                  <div className="control ">
                        <label className="label">Country / Region</label>
                        <abbr className="required" title="required">*</abbr>
                        <div>
                          <Field className="select name" name={`${prefix}country`} component="select" value={region}  onChange={(e) => hedalRegion(e)} type="text" >
                            
                            {   Country.CheckoutData.map((item) =>
                          <option className="option " name="Company_name" component="option" value={item.name} type="text">{item.name} sarthak</option>)
                           
                          }  
                          </Field>
                        </div>
                      </div>

                
                  <div className="control ">
                        <label htmlFor='address_1'>Street address</label>
                        <abbr className="required" title="required">*</abbr>
                        <div>
                          <Field className="input name" name={`${prefix}address_1`} component="input" type="text" placeholder="Street address" />
                        </div>
                      </div>

                  <div className="control ">
                        <label htmlFor='city'>Town / City</label>
                        <abbr className="required" title="required">*</abbr>
                        <div>
                          <Field className="input name" name={`${prefix}city`} component="input" type="text" placeholder="Town / City" />
                        </div>
                      </div>
                  <div className="control ">
                        <label className="label">State</label>
                        <abbr className="required" title="required">*</abbr>
                        <div>
                          <Field className="select name" name={`${prefix}state`} component="select" value={test} onChange={(e)=>setTest(e.target.value)}   type="text" >
                            {statedata && statedata.length > 0 ? 
                            statedata.map((item) =>
                          <option className="option " name="State_name" component="option" value={item.name} type="text">{item.name} </option>)
                          :
                              <option className="option " name="State_name" component="option"  type="text"></option>
                          }  
                          </Field>
                        </div>
                      </div>
                  <div className="control ">
                        <label htmlFor='postcode'>ZIP Code</label>
                        <abbr className="required" title="required">*</abbr>
                        <div>
                          <Field className="input name" name={`${prefix}postcode`} component="input" type="text" placeholder="ZIP Code" />
                        </div>
                      </div>
                  <div className="control ">
                        <label htmlFor='phone'>Phone</label>
                        <abbr className="required" title="required">*</abbr>
                        <div>
                          <Field className="input name" name={`${prefix}phone`} component="input" type="text" placeholder="Phone" />
                        </div>
                      </div>
                  <div className="control ">
                        <label htmlFor='email'>Email address</label>
                        <abbr className="required" title="required">*</abbr>
                        <div>
                          <Field className="input name" name={`${prefix}email`} component="input" type="text" placeholder="Email address" />
                        </div>
                      </div>

                  <div>
                    <h3>Additional information</h3>
                  </div>
                
                  <div className="control ">
                        <label className="label">Order notes (optional)</label>
                        <div>
                          <Field className="input name" name={`${prefix}Order_notes`} component="input" type="text" placeholder="Notes about your order, e.g. special notes for delivery." />
                        </div>
                      </div>
      <button type="submit"  style={{display:"none"}}>Submit</button>    
          
                </form>   
      </div>
  )
}

// eslint-disable-next-line no-func-assign
FieldFrom = reduxForm({
    // a unique name for the form
    form: 'selectingFormValues'
  })(FieldFrom)
  
  
  


export default FieldFrom