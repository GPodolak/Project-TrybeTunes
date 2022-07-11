import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      userLogin: '',
    };
  }

  componentDidMount() {
    getUser().then((user) => {
      this.setState({
        userLogin: user.name,
      });
    });
  }

  render() {
    const { userLogin } = this.state;
    return (
      <header data-testid="header-component">
        <div>
          {/* parte do requisito 8, lembrar depois */}
          {userLogin ? <span data-testid="header-user-name">{ userLogin }</span>
            : (<p>Carregando...</p>)}
        </div>
        <div>
          <nav>
            <Link
              data-testid="link-to-search"
              to="/search"
            >
              Search
            </Link>
            <Link
              data-testid="link-to-favorites"
              to="/favorites"
            >
              Favorites
            </Link>
            <Link
              data-testid="link-to-profile"
              to="/profile"
            />
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
