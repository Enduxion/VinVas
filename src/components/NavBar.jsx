import '../css/NavBarStyle.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className='navBar'>
      <Link to='/' className='navBar--logo--link'>
        VinVas.
      </Link>
      <div className='navBar--links'>
        <Link to='/' className='navBar--links--link'>Home</Link>
        <Link to='/' className='navBar--links--link'>About Us</Link>
        <Link to='/' className='navBar--links--link'>Announcements</Link>
        <Link to='/' className='navBar--links--link'>Gallery</Link>
        <Link to='/' className='navBar--links--link'>Staff</Link>
        <Link to='/' className='navBar--links--link'>Contact Us</Link>
      </div>
    </nav>
  );
}