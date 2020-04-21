import React, { Component } from "react";

class RegistrationForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
        ssn: {
            value: "",
            touched: false
        }
        
    } 
  }

  setSsn = (value) => {
    this.setState({
        ssn:  {
            value: value,
            touched: true
        } 
    })
  }

  generateErrorMessage = () => {
      let ssn = this.state.ssn.value
      ssn = ssn.replace(/[\s-]/g, ''); // Remove whitespace and dashes

      if (ssn.length !== 9) {
          return "SSN must be 9 digits long"
      } else if (!/^\d+$/.test(ssn)) {
          return "SSN must only contain numbers"
      }
  }

  handleSubmit = (e) => {
    e.preventDefault()
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
              value={this.state.ssn.value}
              onChange={(event) => {this.setSsn(event.target.value)}}
            />
          </div>
          {this.generateErrorMessage() && this.state.ssn.touched ?
            <p>{this.generateErrorMessage()}</p> 
          : ""}
          <div className="registration__button__group">
            <button
              type="submit"
              className="registration__button"
              disabled={this.generateErrorMessage() || !this.state.ssn.touched}
            >
              Save
            </button>
          </div>
        </form>
    );
  }
}

export default RegistrationForm;
