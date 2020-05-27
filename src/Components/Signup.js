import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { useDispatch } from 'react-redux';
import isValidEmail from 'sane-email-validation';
import { setCurrentUser } from '../store/actions';


const validate = values => {
  const errors = {}
  if (!values.fullname) {
    errors.fullname = 'Required'
  }
  if (!values.email) {
    errors.email = 'Required'
  }
  if (!values.password) {
    errors.password = 'Required'
  } else if (!isValidEmail(values.email)) {
    errors.email = 'Invalid Email'
  }
  if (!values.password_confirmation) {
    errors.password_confirmation = 'Required'
  } else if (values.password !== values.password_confirmation) {
    errors.password_confirmation = 'Passwords must match'
  }
  return errors;
};

const createRenderer = render => ({ input, meta, label, ...rest }) => (
  <div 
    className={[
      meta.error && meta.touched ? `login-form-input ${label} error`:`login-form-input ${label}`
      // ,meta.active ? 'active':''
    ].join(' ')}
  >
  <label>{label}</label>
  {render(input, label, rest)}
  
  {meta.error && 
    meta.touched &&
    <span>
      {meta.error}
    </span>}
  </div>
);

const renderInput = createRenderer((input, label) =>
  <input {...input} />
);

const Signup = ({ handleSubmit, submitting }) => {

  const dispatch = useDispatch();

  const onSubmit = values => {
    // alert(JSON.stringify(values));
    axios.post('http://localhost:3001/api/v1/signup', {
      fullname: values.fullname,
      email: values.email,
      password: values.password
    })
    .then(response => {
      return dispatch(setCurrentUser(response.data));
    })
  };
  
  

  return (
    <>
      <div className="signup-form__title">Sign Up</div>
      <div className="signup-form">

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="signup-form__input">
            <Field label="Full Name" name="fullname" component={renderInput} />
          </div>
          <div className="signup-form__input">
            <Field label="Email" name="email" component={renderInput} />
          </div>
          <div className="signup-form__input">
            <Field label="Password" name="password" component={renderInput} />
          </div>
          <div className="signup-form__input">
            <Field label="Password Confirmation" name="password_confirmation" component={renderInput} />
          </div>
          <button type="submit" disabled={submitting}>Sign Up</button>
        </form>
      </div>
    </>
  );
}
  
  export default reduxForm({
    form: 'signup',
    destroyOnUnmount: false,
    validate
  })(Signup);

  // const user = useSelector(state => state.user)
  // const dispatch = useDispatch();
  // console.log(user)

  // const handleChange = (e) => {
  //   // console.log("handleChange", e.target.value)
  //   const { name, value } = e.target
  //   this.setState({
  //     [name]: value
  //   })
  // };

  // // create a user object based on the components state
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const { fullname, email, password, password_confirmation } = this.state
  //   if(password === password_confirmation) {
  //     // create a user
  //     axios.post('http://localhost:3001/api/v1/signup', {
  //       fullname: fullname,
  //       email: email,
  //       password: password,
  //       password_confirmation: password_confirmation
  //     })
  //     .then(response => {
  //       console.log("Signup post response", response)
  //     })
  //     .catch(error => console.log('api errors:', error))
  //   } else {
  //     alert("passwords don't match")
  //   }
  //   let user = {
  //     fullname: fullname,
  //     email: email,
  //     password: password,
  //     password_confirmation: password_confirmation
  //   }
  //   console.log("handleSubmit", this.state)
  //   // POST data to Rails server for authentication

  //   // fetch('http://localhost:3001/users', {user}, {withCredentials: true})
  //   // .then(response => response.json())
  // };

  // const redirect = () => {
  //   this.props.history.push('/')
  // };
  
  // const handleErrors = () => {
  //   return (
  //     <div>
  //       <ul>{user.errors.map((error) => {
  //         return <li key={error}>{error}</li>
  //       })}
  //       </ul>
  //     </div>
  //   )
  // };

  // <input placeholder="Full Name"
  //       type="text"
  //       name="fullname"
  //       value={user.fullname}
  //       onChange={handleChange}
  //     />
  //     <br></br>
  //     <input placeholder="Email"
  //       type="text"
  //       name="email"
  //       value={user.email}
  //       onChange={handleChange}
  //     />
  //     <br></br>
  //     <input placeholder="Password"
  //       type="password"
  //       name="password"
  //       value={user.password}
  //       onChange={handleChange}
  //     />
  //     <br></br>
  //     {/* Confirm passwords match */}
  //     <input placeholder="Confirm Password"
  //       type="password"
  //       name="password_confirmation"
  //       value={user.password_confirmation}
  //       onChange={handleChange}
  //     />
  //     <br></br>
  //     <button placeholder="submit" type="submit">
  //       Sign Up
  //     </button>
  //     <br></br>
  //     <div>
  //       or <Link to='/login'>log in</Link>
  //     </div>