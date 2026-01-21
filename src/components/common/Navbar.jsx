import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed top-0 left-0 w-full z-[100] p-8 flex justify-between items-center mix-blend-difference"
    >
      <div className="text-white font-serif tracking-[0.3em] text-xl">
        TERRE [MOTO]
      </div>
      
      {/* 汉堡菜单：简练的两根线条 */}
      <div className="flex flex-col gap-1.5 cursor-pointer p-2 group">
        <span className="w-8 h-[1px] bg-white transition-all group-hover:w-12"></span>
        <span className="w-12 h-[1px] bg-white"></span>
      </div>
    </motion.nav>
  );
};

export default Navbar;