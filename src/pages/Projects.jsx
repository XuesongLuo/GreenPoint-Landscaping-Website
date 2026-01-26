// src/pages/Projects.jsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

// 复用组件
import Navbar from '../components/common/Navbar';
import ProjectGrid from '../components/home/ProjectGrid';
import Footer from '../components/common/Footer';

const Projects = () => {
  // 确保进入页面时回到顶部
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-paper min-h-screen text-ink">
      <Navbar />
      
      <main className="pt-40 pb-20">
        <div className="px-6 md:px-20 mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif tracking-zen mb-6 uppercase"
          >
            全案作品 Project Archive
          </motion.h1>
          <div className="h-[1px] w-20 bg-ink mb-4 opacity-20"></div> {/* 增加一根极细的线条 */}
          <p className="text-xs uppercase tracking-[0.4em] opacity-40">融合东方哲思与加州现代生活</p>
        </div>

        {/* 这里复用之前的网格组件 */}
        {/* 如果需要显示更多，你可以去修改 ProjectGrid 让它接受一个 'limit' 参数，或者直接显示全部 */}
        <ProjectGrid />
      </main>

      <Footer />
    </div>
  );
};

export default Projects;