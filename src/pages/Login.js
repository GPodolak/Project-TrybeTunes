import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div data-testid="page-login" />
    );
  }
}
handleClick = () => {
  const { userLog } = this.state;
  this.setState({ loading: true });
  createUser({ name: userLog }).then(() => {
    this.setState({ loading: false, redirectEnable: true });
  });
};

handleInputChange = ({ target: { value } }) => {
  const CARACTERS = 3;
  const habiliteButton = value.length >= CARACTERS;
  this.setState({
    userLog: value,
    clickLoginButtonDisabled: !habiliteButton,
  });
};
export default Login;
