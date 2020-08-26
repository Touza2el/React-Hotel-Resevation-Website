import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      onScroll: false,
      isOpen: false,
    };
  }
  componentDidMount = () => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        this.setState({ onScroll: true });
      } else {
        this.setState({ onScroll: false });
      }
    });
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <header
        className={
          this.state.onScroll
            ? 'header-component fix-header'
            : 'header-component'
        }
      >
        <div className='container'>
          <div className='header-content'>
            <div className='header-logo'>
              <Link to='/'>safar budget</Link>
            </div>
            <ul
              className={
                this.state.isOpen ? 'header-links active' : 'header-links'
              }
            >
              <li>
                <Link to='/' onClick={this.handleToggle}>
                  home
                </Link>
              </li>
              <li>
                <Link to='/rooms' onClick={this.handleToggle}>
                  rooms
                </Link>
              </li>
              <li>
                <Link to='/' onClick={this.handleToggle}>
                  contact
                </Link>
              </li>
            </ul>
            <div className='header-btn'>
              <button>log in</button>
              <button>sign up</button>
            </div>
            <div className='mobile-menu' onClick={this.handleToggle}>
              <i className='fas fa-bars'></i>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;

// :::::::::::::::::::::::::::::::::::::

// function Header() {
//   const [headerState, setHeaderState] = useState({ isOpen: false });
//   const handleToggle = () => {
//     setHeaderState({ isOpen: !headerState.isOpen });
//   };
//   return (
//     <header className='header-component'>
//       <div className='container'>
//         <div className='header-content'>
//           <div className='header-logo'>
//             <Link to='/'>safar budget</Link>
//           </div>
//           <ul
//             className={
//               headerState.isOpen ? 'header-links active' : 'header-links'
//             }
//           >
//             <li>
//               <Link to='/' onClick={handleToggle}>
//                 home
//               </Link>
//             </li>
//             <li>
//               <Link to='/rooms' onClick={handleToggle}>
//                 rooms
//               </Link>
//             </li>
//             <li>
//               <Link to='/' onClick={handleToggle}>
//                 contact
//               </Link>
//             </li>
//           </ul>
//           <div className='header-btn'>
//             <button>log in</button>
//             <button>sign up</button>
//           </div>
//           <div className='mobile-menu' onClick={handleToggle}>
//             <i className='fas fa-bars'></i>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;
