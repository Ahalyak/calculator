import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = () => {
  const onClickLogout = props => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <h1>Calculator</h1>

        <div className="nav-menu-items">
          <Link to="/Operations" className="nav-link">
            Operations
          </Link>

          <div>
            <Link to="/activityLog" className="nav-link">
              Activity log
            </Link>

            <button
              type="button"
              className="logout-desktop-btn"
              onClick={onClickLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
