import React from "react";

class ContactFormPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      formSubmitted: false, // Додано новий стан для відстеження подання форми
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
      message: this.state.message,
    };
    console.log(contactData); // Тут можеш зробити щось зі збереженими даними, наприклад, відправити на сервер або обробити локально
    this.setState({ formSubmitted: true }); // Оновлення стану після подання форми
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
        {this.state.formSubmitted && <p>Form submitted!</p>}{" "}
        {/* Відображення повідомлення після подання форми */}
      </div>
    );
  }
}

export default ContactFormPopup;
