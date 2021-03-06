import React, { Component } from "react";

class RegistrationForm extends Component {

  constructor(props) {
    super(props);
    this.ssnInput = React.createRef();
    this.state = {
      errorMessage: "",
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()

    if (this.ssnInput.current.value.length === 9) {
      // valid
      this.setState({
        errorMessage: "",
      })
    } else {
      // not valid      
      this.setState({
        errorMessage: "SSN MUST be exactly 9 characters",
      })
    }
  }

  render() {
    return (
        <form className="registration" onSubmit={(e) => this.handleSubmit(e)}>
          <h2>Register</h2>
          <div className="form-group">
            <label htmlFor="ssn">SSN*</label>
            <input
              type="text"
              className="registration__control"
              name="ssn"
              id="ssn"
              ref={this.ssnInput}
            />
            {this.state.errorMessage && <p>{this.state.errorMessage}</p>}
          </div>
          <div className="registration__button__group">
            <button
              type="submit"
              className="registration__button"
            >
              Save
            </button>
          </div>
        </form>
    );
  }
}

export default RegistrationForm;
