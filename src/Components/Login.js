import React, { cloneElement } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { useDispatch } from 'react-redux';
import isValidEmail from 'sane-email-validation';
import { setCurrentUser } from '../store/actions';

// set axios withCredentials to true
axios.defaults.withCredentials = true;

// validate that fields are populated
const validate = v => {
  const errors = {}
  if (!v.email) {
    errors.email = 'Required'
  }
  // use isValidEmail to ensure email format is valid
  if (!v.password) {
    errors.password = 'Required'
  } else if (!isValidEmail(v.email)) {
    errors.email = 'Invalid Email'
  }
  // if (!v.state) {
    //   errors.state = 'Required'
    // }
  return errors;
};
  
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
const renderInput = createRenderer((input, label) =>
  <input {...input} placeholder={label}/>
);

// Render drop-down list
// const RenderSelect = createRenderer((input, { children }) =>
//   <select {...input}>{children}</select>
// );
const Login = ({ handleSubmit, submitting }) => {
  const dispatch = useDispatch();

  const onSubmit = values => {
    // alert(JSON.stringify(values));
    axios.post('http://localhost:3001/api/v1/login', {
      email: values.email,
      password: values.password
    })
    .then(response => {
      return dispatch(setCurrentUser(response.data));
    })
  };
  

  return (
    <div>
      <h2>Log In</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field label="Email" name="email" component={renderInput} />
        <Field label="Password" name="password" component={renderInput} />
        {/* <Field label="State" name="state" component={RenderSelect}>
          <option />
          {states.map(state => 
            <option key={state} value={state}>
              {state}
            </option>
          )}
        </Field> */}
        <button type="submit" disabled={submitting}>Log In</button>
      </form>
      <div>
        or <Link to='/signup'>sign up</Link>
      </div>
    </div>
  );
};

export default reduxForm({
  form: 'login', // a unique identifier for this form
  destroyOnUnmount: false,
  validate // validation function given to redux-form
})(Login);

// // if user is authenticated, redirect to '/'
//   // componentWillMount() {
//   //   return this.props.loggedInStatus ? this.redirect() : null
//   // }

//   handleChange = (e) => {
//     const { name, value } = e.target
//     this.setState({
//       [name]: value
//     })
//   };

//   // create a user object based on the components state
//   handleSubmit = (e) => {
//     e.preventDefault()
//     const { fullname, email, password } = this.state

//     let user = {
//       fulname: fullname,
//       email: email,
//       password: password
//     }

//     // POST data to Rails server for authentication
//     axios.post('http://localhost:3001/login', {user}, {withCredentials: true})
//       .then(response => {
//         // if server response is valid, call handleLogin() from App.js
//         if (response.data.logged_in) {
//           this.props.handleLogin(response.data)
//           this.redirect()
//         } else {
//           // if response is not valid, attach errors to state
//           this.setState({
//             errors: response.data.errors
//           })
//         }
//       })
//       .catch(error => console.log('api errors:', error))
//   };

//   // redirect user after valid authentication using history props from App.js
//   redirect = () => {
//     this.props.history.push('/')
//   }

//   handleErrors = () => {
//     return (
//       <div>
//         <ul>
//           {this.state.errors.map(error => {
//             return <li key={error}>{error}</li>
//           })}
//         </ul>
//       </div>
//     )
//   }
// return (
//       <div>
//         <h1>Log In</h1>

//         <form onSubmit={this.handleSubmit}>
//           <input placeholder="email"
//             type="text"
//             name="email"
//             value={email}
//             onChange={this.handleChange}
//           />
//           <br></br>
//           <input placeholder="password"
//             type="password"
//             name="password"
//             value={password}
//             onChange={this.handleChange}
//           />
//           <br></br>
//           <button placeholder="submit" type="submit">
//             Log In
//           </button>
//           <br></br>
//           <div>
//             or <Link to='/signup'>sign up</Link>
//           </div>

//         </form>
//         <div>
//           {this.state.errors ? this.handleErrors() : null}
//         </div>
//       </div>
//     )