// src/pages/Home.jsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '../animations/transitions';

// 1. 引入获取数据的 Hook
import { useProjects } from '../hooks/useProjects';
import { useSiteConfig } from '../hooks/useSiteConfig';

// 引入局部组件
import Navbar from '../components/common/Navbar';
import Hero from '../components/home/Hero';
import Philosophy from '../components/home/Philosophy';
import ProjectGrid from '../components/home/ProjectGrid';
import MaterialDetail from '../components/home/MaterialDetail';
import Footer from '../components/common/Footer';

const Home = () => {
  // 2. 在这里获取数据
  // useProjects 默认会去后端取前 6 个数据 (根据 Hook 里的设定)
  // 我们只需要 projects 数组，loading 状态如果不处理，Grid 会自动不渲染直到数据到来
  const { projects } = useProjects();
  const { config } = useSiteConfig();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      {...pageTransition}
      className="bg-paper min-h-screen text-ink" 
    >
      <Navbar />

      <main>
        {/* 1. 起：首屏 */}
        <Hero />
        
        {/* 2. 承：理念 */}
        <Philosophy 
          variant="full"
          title="Our Belief"
          quote={config?.home?.philosophy_quote}       // 后端的英文引言
          quote_cn={config?.home?.philosophy_quote_cn} // 后端的中文引言
        />
        
        {/* 3. 转：作品 */}
        {/* 关键修改：将获取到的 projects 数据传给组件，并限制显示数量 */}
        {/* 后端可能返回了 6 个，但我们在首页只展示最精华的 4 个 */}
        <ProjectGrid projects={projects} limit={4} />
        
        {/* 4. 合：细节 */}
        <MaterialDetail />
      </main>

      <Footer />
    </motion.div>
  );
};

export default Home;