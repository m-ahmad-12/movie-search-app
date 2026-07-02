const Logo = () => (
  <svg width="150" height="36" viewBox="0 0 150 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Icon background */}
    <rect width="36" height="36" rx="8" fill="#e50914"/>
    
    {/* Clapperboard body */}
    <rect x="7" y="13" width="22" height="16" rx="2" fill="white"/>
    
    {/* Clapperboard top strip */}
    <rect x="7" y="8" width="22" height="6" rx="2" fill="#222"/>
    
    {/* Diagonal stripes on top strip */}
    <line x1="13" y1="8" x2="11" y2="14" stroke="#e50914" strokeWidth="2"/>
    <line x1="19" y1="8" x2="17" y2="14" stroke="#e50914" strokeWidth="2"/>
    <line x1="25" y1="8" x2="23" y2="14" stroke="#e50914" strokeWidth="2"/>

    {/* Play triangle on body */}
    <polygon points="15,17 15,25 26,21" fill="#e50914"/>

    {/* Text */}
    <text x="46" y="25" fontSize="18" fontWeight="700" fill="white" fontFamily="Segoe UI, sans-serif">Movie</text>
    <text x="99" y="25" fontSize="18" fontWeight="700" fill="#e50914" fontFamily="Segoe UI, sans-serif">Hub</text>
  </svg>
);

export default Logo;