// src/components/common/Navbar.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navLinks = [
    { name: '首页', path: '/' },
    { name: '作品', path: '/projects' },
    { name: '工作室', path: '/studio' },
  ];

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className="fixed top-0 left-0 w-full z-[100] p-8 flex justify-between items-center mix-blend-difference text-white"
    >
      {/* Logo: 东方印章般的稳重感 */}
      <Link to="/" className="font-serif tracking-zen text-xl hover:opacity-70 transition-opacity">
        GREENPOINT
      </Link>
      
      {/* 实际导航菜单：去除汉堡菜单，直接展示 */}
      <div className="flex gap-12 items-center">
        {navLinks.map((link) => (
          <Link 
            key={link.path}
            to={link.path}
            className="group relative py-1"
          >
            <span className="text-sm font-light tracking-widest uppercase italic font-serif">
              {link.name}
            </span>
            {/* 动效：如同水面漾起的波纹 */}
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full"></span>
          </Link>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;