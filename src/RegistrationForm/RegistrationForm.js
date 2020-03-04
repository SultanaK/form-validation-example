import React, { Component } from "react";

class RegistrationForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ssn: {
        value: '',
        touched: false
      }

    }
  }

  setSsn = ssn => {
    this.setState({ssn: {value: ssn, touched: true}});
  };

  validateSsn = () => {
    if (this.state.ssn.touched) {
      let ssn = this.state.ssn.value
      ssn = ssn.replace(/[\s-]/g, ''); // Remove whitespace and dashes
      if (ssn.length !== 9) {
          // Check if it's 9 characters long
          return 'SSN must be 9 digits long';
      } else if (!/^\d+$/.test(ssn)) {
          // Check if it's just digits
          return 'SSN must only contain numbers';
      }
    }
  }

  render() {
    return (
        <form className="registration">
          <h2>Register</h2>
          <div className="form-group">
            <label htmlFor="ssn">SSN*</label>
            <input
              type="text"
              className="registration__control"
              name="ssn"
              id="ssn"
              value={this.state.ssn.value}
              onChange={(event) => this.setSsn(event.target.value)}
            />
          </div>
          <div className="registration__button__group">
            <button
              type="submit"
              className="registration__button"
              disabled={!!this.validateSsn()}
            >
              Save
            </button>
          </div>
          {this.validateSsn() ? <p>{this.validateSsn()}</p> : ''}
        </form>
    );
  }
}

export default RegistrationForm;
