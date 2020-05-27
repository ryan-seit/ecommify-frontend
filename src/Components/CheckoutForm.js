import React from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import axios from 'axios';

class CheckoutForm extends React.Component {

  state = {
    complete: false
  }

  submit = async () => {
    let {token} = await this.props.stripe.createToken({name: 'Name'});
    let reponse = await axios.post('http://localhost:3001/charges', {
      token: token.id,
      orderId: this.props.orderId
    })
    if(reponse.ok) {
      this.setState({
        complete: true
      })
    }
  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete!</h1>

    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.submit}>Purchase</button>
      </div>
    )
  }
}

export default injectStripe(CheckoutForm);