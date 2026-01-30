// src/pages/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';

// 引入局部组件
import Navbar from '../components/common/Navbar';
import Hero from '../components/home/Hero';
import Philosophy from '../components/home/Philosophy';
import ProjectGrid from '../components/home/ProjectGrid';
import MaterialDetail from '../components/home/MaterialDetail';
import Footer from '../components/common/Footer';

const Home = () => {
  return (
    // page-wrapper: 负责页面切换时的淡入淡出
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-paper min-h-screen text-ink" // 使用我们在 tailwind 配好的颜色
    >
      <Navbar />

      <main>
        {/* 1. 起：首屏 */}
        <Hero />
        
        {/* 2. 承：理念 */}
        <Philosophy />
        
        {/* 3. 转：作品 (传入 limit 限制首页只显示精选的几个) */}
        <ProjectGrid />
        
        {/* 4. 合：细节 */}
        <MaterialDetail />
      </main>

      <Footer />
    </motion.div>
  );
};

export default Home;