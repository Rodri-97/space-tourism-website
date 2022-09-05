import { Link } from 'react-router-dom';

const Navbar = ({ className }) => {
  return (
    <nav className={className}>
      <Link to='/'>Home</Link>
      <Link to='/destination'>Destination</Link>
      <Link to='/crew'>Crew</Link>
      <Link to='/technology'>Technology</Link>
    </nav>
  );
};

export default Navbar;
