import React from "react";
import { Field, reduxForm } from "redux-form";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useState } from "react";

// import { clear } from '@testing-library/user-event/dist/clear';

const requiredId = value => value ? undefined :<span className="required"> Required</span>
const aol = value =>
  value && /.+@aol\.com/.test(value) ?
  'Really? You still use AOL for your email?' : undefined
  export const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined
  const emailId = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined
const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <abbr className="required" title="required">
              *
            </abbr>
    <div>
      <input {...input} placeholder={label} type={type}  className="name"/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)






function FieldFrom(props) {


  let Country = useSelector((state) => state?.GetCheckoutData);

  const [region, setRegion] = useState(null);
  const [statedata, setStatedata] = useState(null);
  const [test, setTest] = useState(null);

  // setStatedata(State.states)

  const hedalRegion = (e) => {
    setRegion(e.target.value);
    let State = Country.CheckoutData.find(
      (item) => item.name === e.target.value
    );
    setStatedata(State.states);
  };

  // const requiredId = (value) => (value ? undefined : "Required");


 
  const { handleSubmit, prefix, excludes } = props;


  

  return (
    <div className="form-group">
      <form className="form" form="true" onSubmit={handleSubmit}>
        <Row>
          {excludes.includes("first_name") ? (
            ""
          ) : (
            <Col>
              <div className="control">
                <label htmlFor="first_name">First name</label>
                <abbr className="required" title="required">
                  *
                </abbr>
                <div>
                  <Field
                    className="input name"
                    name={`${prefix}first_name`}
                    component="input"
                    type="text"
                    placeholder="First Name"
                  />
                </div>
              </div>
            </Col>
          )}
          {excludes.includes("last_name") ? (
            ""
          ) : (
            <Col>
              <div className="control ">
                <label htmlFor="last_name">Last Name</label>
                <abbr className="required" title="required">
                  *
                </abbr>
                <div>
                  <Field
                    className="input name"
                    name={`${prefix}last_name`}
                    component="input"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
              </div>
            </Col>
          )}
        </Row>

        {excludes.includes("Company_name") ? (
          ""
        ) : (
          <div className="control ">
            <label className="label">Company name (optional)</label>
            <div>
              <Field
                className="input name"
                name={`${prefix}Company_name`}
                component="input"
                type="text"
                placeholder="Company name"
              />
            </div>
          </div>
        )}

        {excludes.includes("country") ? (
          ""
        ) : (
          <div className="control ">
            <label className="label">Country / Region</label>
            <abbr className="required" title="required">
              *
            </abbr>
            <div>
              <Field
                className="select name"
                name={`${prefix}country`}
                component="select"
                value={region}
                onChange={(e) => hedalRegion(e)}
                type="text"
              >
                {Country.CheckoutData.map((item, id) => (
                  <option
                    key={id}
                    className="option "
                    name="Company_name"
                    component="option"
                    value={item.name}
                    type="text"
                  >
                    {item.name}{" "}
                  </option>
                ))}
              </Field>
            </div>
          </div>
        )}

        {excludes.includes("address_1") ? (
          ""
        ) : (
          <div className="control ">
            <label htmlFor="address_1">Street address</label>
            <abbr className="required" title="required">
              *
            </abbr>
            <div>
              <Field
                className="input name"
                name={`${prefix}address_1`}
                component="input"
                type="text"
                placeholder="Street address"
              />
            </div>
          </div>
        )}

        {excludes.includes("city") ? (
          ""
        ) : (
          <div className="control ">
            <label htmlFor="city">Town / City</label>
            <abbr className="required" title="required">
              *
            </abbr>
            <div>
              <Field
                className="input name"
                name={`${prefix}city`}
                component="input"
                type="text"
                placeholder="Town / City"
              />
            </div>
          </div>
        )}
        {excludes.includes("state") ? (
          ""
        ) : (
          <div className="control ">
            <label className="label">State</label>
            <abbr className="required" title="required">
              *
            </abbr>
            <div>
              <Field
                className="select name"
                name={`${prefix}state`}
                component="select"
                value={test}
                onChange={(e) => setTest(e.target.value)}
                type="text"
              >
                {statedata && statedata.length > 0 ? (
                  statedata.map((item, id) => (
                    <option
                      className="option "
                      key={id}
                      name="State_name"
                      component="option"
                      value={item.name}
                      type="text"
                    >
                      {item.name}{" "}
                    </option>
                  ))
                ) : (
                  <option
                    className="option "
                    key="1"
                    name="State_name"
                    component="option"
                    type="text"
                  ></option>
                )}
              </Field>
            </div>
          </div>
        )}
        {excludes.includes("postcode") ? (
          ""
        ) : (
          <div className="control ">
            <label htmlFor="postcode">ZIP Code</label>
            <abbr className="required" title="required">
              *
            </abbr>
            <div>
              <Field
                className="input name"
                name={`${prefix}postcode`}
                component="input"
                type="text"
                placeholder="ZIP Code"
              />
            </div>
          </div>
        )}

        {excludes.includes("phone") ? (
          ""
        ) : (
          <div className="control ">
            
            <div>
              <Field
                className="input name"
                name={`${prefix}phone`}
                component={renderField}

                validate={[phoneNumber,requiredId]}
                type="number"
                label="Phone number"
                // placeholder="Phone"
              />
            </div>
          </div>
        )}
        {excludes.includes("email") ? (
          ""
        ) : (
          <div className="control ">
           
            
            <div>
              <Field
                className="input name"
                // validate={emailId}
                warn={aol}
                name={`${prefix}email`}
                // component="input"
                component={renderField}
                type="email"
                // placeholder="Email address"
                validate={[emailId ,requiredId]}
                label="Email address"
              />
            </div>
          </div>
        )}
        {excludes.includes("Order_notes") ? (
          ""
        ) : (
          <div>
            <div>
              <h3>Additional information</h3>
            </div>

            <div className="control ">
              <label className="label">Order notes (optional)</label>
              <div>
                <Field
                  className="input name"
                  name={`${prefix}Order_notes`}
                  component="input"
                  type="text"
                  placeholder="Notes about your order, e.g. special notes for delivery."
                />
              </div>
            </div>
          </div>
        )}

        <button type="submit" style={{ display: "none" }}>
          Submit
        </button>
      </form>
    </div>
  );
}

// eslint-disable-next-line no-func-assign
FieldFrom = reduxForm({
  // a unique name for the form
  form: "selectingFormValues",
})(FieldFrom);

export default FieldFrom;
