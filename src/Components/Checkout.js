import React from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import { reduxForm, Field } from 'redux-form';
import isValidEmail from 'sane-email-validation';
import CheckoutForm from './CheckoutForm';

const states = [{'NY':'NY'}, {'NJ':'NJ'}]

const onSubmit = values => {
  alert(JSON.stringify(values));
};

const validate = v => {
  const errors = {}
}

const createRenderer = render => ({ input, meta, label, ...rest }) => (
  // className changes to 'error' if not filled out, 'active' if field is active
  <div 
    className={[
      meta.error && meta.touched ? 'error':'',
      meta.active ? 'active':''
    ].join(' ')}
  >
    {/* <pre>
      {JSON.stringify(meta, 0, 2)}
    </pre> */}
    <label>{label}</label>
    {render(input, label, rest)}
    
    {meta.error && 
      meta.touched &&
      <span>
        {meta.error}
      </span>}
  </div>
)

// Render text input
const RenderInput = createRenderer((input, label) =>
  <input {...input} placeholder={label}/>
)

// Render drop-down list
const RenderSelect = createRenderer((input, { children }) =>
  <select {...input}>{children}</select>
)


const Checkout = ({ handleSubmit, submitting }) => {
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
          <Field label="Address" name="address" component={RenderInput} />
          <Field label="Address" name="address" component={RenderInput} />
          <Field label="City" name="city" component={RenderInput} />
          <Field label="State" name="state" component={RenderSelect}>
            <option />
            {states.map(state => 
              <option key={state} value={state}>
                {state}
              </option>
            )}
          </Field>
          <Field label="Zip" name="zip" component={RenderInput} />
        <button type="submit" disabled={submitting}>Submit</button>
      </form>
      <StripeProvider apiKey="pk_test_eP8gdLbaRffG5Oam0LjsbfIz00EvLKJHFU">
        <div className="example">
          <Elements>
            <CheckoutForm /* {orderId={this.props.initializedCart.id}} *//>
          </Elements>
        </div>
      </StripeProvider>
    </>

  )
}

export default reduxForm({
  form: 'checkout',
  destroyOnUnmount: false,
  validate
})(Checkout);