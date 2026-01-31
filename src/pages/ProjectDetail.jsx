// src/pages/ProjectDetail.jsx
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useProject } from '../hooks/useProject';

// 引入组件
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import ProjectHeader from '../components/project/ProjectHeader';
import ProjectInfo from '../components/project/ProjectInfo'; // 信息与文本
import ImageGallery from '../components/project/ImageGallery';
import PlantPalette from '../components/project/PlantPalette';
import ProjectNavigation from '../components/project/ProjectNavigation';


const ProjectDetail = () => {
  const { id } = useParams();

  // ========================================================
  // 核心修改：直接调用 Hook，一行代码搞定数据获取
  // ========================================================
  const { project, loading, error } = useProject(id);


  // 保持：每次进入详情页回到顶部
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // === 状态 1: 加载中 (Loading) ===
  // 使用极简的呼吸动画代替生硬的旋转圈
  if (loading) {
    return (
      <div className="bg-paper min-h-screen flex items-center justify-center">
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-stone font-serif text-xl tracking-[0.2em] italic"
        >
          Gathering Elements...
        </motion.div>
      </div>
    );
  }
  // === 状态 2: 出错 (Error) ===
  if (error || !project) {
    return (
      <div className="bg-paper min-h-screen flex flex-col items-center justify-center text-ink">
        <Navbar /> {/* 即使出错也建议保留导航，方便用户离开 */}
        <div className="flex-grow flex flex-col items-center justify-center">
            <h2 className="font-serif text-3xl mb-4 text-stone">404</h2>
            <p className="font-sans text-sm tracking-widest uppercase opacity-50">{error}</p>
            <a href="/projects" className="mt-8 border-b border-stone text-stone hover:text-moss transition-colors">
            Return to Archive
            </a>
        </div>
        <Footer />
      </div>
    );
  }
  // === 状态 3: 成功展示 (Success) ===
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-paper min-h-screen"
    >
      <Navbar />
      
      {/* 1. 沉浸式首屏 */}
      <ProjectHeader project={project} />

      {/* 2. 非对称叙事与档案 */}
      <ProjectInfo project={project} />

      {/* 3. 画廊展示 (复用你现有的组件) */}
      <ImageGallery images={project.gallery} />

      {/* 4. 植物图谱 */}
      <PlantPalette plants={project.plants} projectId={project.id} />

      <ProjectNavigation 
        prevProject={project.prevProject} 
        nextProject={project.nextProject} 
      />

      <Footer />
    </motion.div>
  );
};

export default ProjectDetail;