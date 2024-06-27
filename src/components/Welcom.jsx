import { Component } from "react";
import { Alert } from "react-bootstrap";

class Welcome extends Component {
  render() {
    return (
      <div>
        <Alert variant="success">
          <Alert.Heading>Welcome to Our Shop!</Alert.Heading>
          <p>
            We are delighted to have you here. Explore our wide range of
            products and enjoy your shopping experience.
          </p>
        </Alert>
        <h2>Your one-stop shop for all your needs</h2>
      </div>
    );
  }
}

export default Welcome;
