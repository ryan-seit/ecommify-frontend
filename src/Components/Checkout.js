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
      meta.error && meta.touched ? `checkout-form-input ${label} error`:`checkout-form-input ${label}`
      // ,meta.active ? 'active':''
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
const RenderInput = createRenderer((input) =>
  <input {...input} />
)

// Render drop-down list
const RenderSelect = createRenderer((input, { children }) =>
  <select {...input}>{children}</select>
)


const Checkout = ({ handleSubmit, submitting }) => {
  return (
    <>
    <div className="checkout-form__title">Complete Purchase</div>
      <StripeProvider apiKey="pk_test_eP8gdLbaRffG5Oam0LjsbfIz00EvLKJHFU">
        <div className="checkout-form">
          <Elements>
            <CheckoutForm /* {orderId={this.props.initializedCart.id}} *//>
          </Elements>
        </div>
      </StripeProvider>
    {/* <div className="checkout-form__title">Shipping</div>
    <div className="checkout-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="login-form__input">
          <Field label="Address" name="address" component={RenderInput} />
        </div>
        <div className="login-form__input">
          <Field label="Apartment/P.O. Box" name="apartment" component={RenderInput} />
        </div>
        <div className="login-form__input">
          <Field label="City" name="city" component={RenderInput} />
        </div>
        <div className="login-form__input">
          <Field label="State" name="state" component={RenderSelect}>
            <option>
            {states.map(state => 
              <option key={state} value={state}>
                {state}
              </option>
            )}
            </option>
          </Field>
        </div>
        <div className="login-form__input">
          <Field label="Zip" name="zip" component={RenderInput} />
        </div>
        <button type="submit" disabled={submitting}>Continue</button>
      </form>
    </div> */}
    </>

  )
}

export default reduxForm({
  form: 'checkout',
  destroyOnUnmount: false,
  validate
})(Checkout);