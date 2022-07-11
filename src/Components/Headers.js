import React from 'react';
import { getUser } from '../services/userAPI';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      userLog: '',
    };
  }

  componentDidMount() {
    getUser().then((user) => {
      this.setState({
        userLog: user.name,
      });
    });
  }

  render() {
    const { userLog } = this.state;
    return (
      <header data-testid="header-component">
        <div>
          {userLog ? <span data-testid="header-user-name">{ userLog }</span>
            : (<p>Carregando...</p>)}
        </div>
      </header>
    );
  }
}

export default Header;
