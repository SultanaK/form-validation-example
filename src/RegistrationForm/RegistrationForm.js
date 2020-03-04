import React, { Component } from "react";

class RegistrationForm extends Component {

  constructor(props) {
    super(props);
    this.ssnRef = React.createRef();
    this.state = {
      errorMessage: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let inputData = this.ssnRef.current.value
    this.validateSsn(inputData)
  }

  validateSsn = (ssn) => {
    if (ssn.length === 9) {
      this.setState({ errorMessage: ''})
    } else {
      this.setState({ errorMessage: 'SSN must be exactly 9 characters'})
    }
  }

  render() {
    return (
        <form className="registration" onSubmit={(event) => this.handleSubmit(event)}>
          <h2>Register</h2>
          <div className="form-group">
            <label htmlFor="ssn">SSN*</label>
            <input
              type="text"
              className="registration__control"
              name="ssn"
              id="ssn"
              ref={this.ssnRef}
            />
          </div>
          <div className="registration__button__group">
            <button
              type="submit"
              className="registration__button"
            >
              Save
            </button>
          </div>
          {this.state.errorMessage ? <p>{this.state.errorMessage}</p> : ''}
        </form>
    );
  }
}

export default RegistrationForm;
