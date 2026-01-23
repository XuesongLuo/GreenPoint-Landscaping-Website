// src/components/common/Navbar.jsx
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // 修改点：外层只负责固定位置和背景（如果有）
      className="fixed top-0 left-0 w-full z-[100] px-6 md:px-8 py-8 mix-blend-difference"
    >
      {/* 修改点：内层添加 max-w-7xl mx-auto 来居中内容 */}
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white font-serif tracking-[0.3em] text-xl">
          TERRE [MOTO]
        </div>
        
        {/* 汉堡菜单：简练的两根线条 */}
        <div className="flex flex-col gap-1.5 cursor-pointer p-2 group">
          <span className="w-8 h-[1px] bg-white transition-all group-hover:w-12"></span>
          <span className="w-12 h-[1px] bg-white"></span>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;