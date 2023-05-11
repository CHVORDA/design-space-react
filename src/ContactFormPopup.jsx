import React from "react";

class ContactFormPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const contactData = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };
    console.log(contactData); // Тут можеш зробити щось зі збереженими даними, наприклад, відправити на сервер або обробити локально
  };

  render() {
    return (
      <div className="popup">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={this.state.message}
              onChange={this.handleInputChange}
            />
          </label>
          <button type="submit" className="btn btn-primary btn-price popup-btn">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ContactFormPopup;
