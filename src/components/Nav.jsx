import Logo from '../assets/images/logo.svg';
import Search from '../assets/images/search.svg';
import Store from '../assets/images/store.svg';
const Nav = () => {
  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <ul className="list-styled">
          <li>
            <img src={Logo} alt="apple logo" />
          </li>
          <li>
            <a className="link-styled">Store</a>
          </li>
          <li>
            <a className="link-styled">Mac</a>
          </li>
          <li>
            <a className="link-styled">iPad</a>
          </li>
          <li>
            <a className="link-styled">iPhone</a>
          </li>
          <li>
            <a className="link-styled">Watch</a>
          </li>
          <li>
            <a className="link-styled">airPods</a>
          </li>
          <li>
            <a className="link-styled">TV and Home</a>
          </li>
          <li>
            <a className="link-styled">Entertainment</a>
          </li>
          <li>
            <a className="link-styled">Accessories</a>
          </li>
          <li>
            <a className="link-styled">Support</a>
          </li>
          <li>
            <img src={Search} alt="search icon" />
          </li>
          <li>
            <img src={Store} alt="store icon" />
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Nav;
