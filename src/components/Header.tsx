import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'About', path: '/' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
    { name: 'Dashboard', path: '/dashboard' },
  ];

  return (
    <header 
      className="fixed top-0 left-0 w-full flex items-center z-50 shadow-sm px-10"
      style={{ 
        height: '100px', 
        backgroundColor: 'white',
        position: 'fixed'
      }} 
    >
      {/* LOGO - Dimensioni bloccate per Chrome */}
      <div style={{ display: 'flex', alignItems: 'center', zIndex: 60 }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src="/images/logo-portfolio.png" 
            alt="Logo Sara Spano" 
            style={{ 
              height: '80px', // Altezza importante
              width: 'auto', 
              display: 'block',
              objectFit: 'contain'
            }}
          />
        </Link>
      </div>

      {/* NAV LINKS - Centrati matematicamente rispetto allo schermo */}
      <nav 
        style={{ 
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)', // Il segreto per il centro perfetto
          display: 'flex', 
          gap: '40px', // Spazio generoso tra i link
          alignItems: 'center',
          whiteSpace: 'nowrap'
        }}
      >
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.name}
              to={link.path}
              style={{ 
                textDecoration: 'none', 
                fontSize: '15px', 
                fontWeight: '600',
                color: isActive ? '#f472b6' : '#374151',
                borderBottom: isActive ? '3px solid #f472b6' : 'none',
                paddingBottom: '6px'
              }}
              className="transition-all duration-300 hover:text-pink-400"
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
