// src/pages/ProjectDetail.jsx
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { pageTransition } from '../animations/transitions';
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
        <Navbar /> 
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
    <motion.div {...pageTransition} className="bg-paper min-h-screen">
      <Navbar />
      <ProjectHeader project={project} />
      <ProjectInfo project={project} />
      <ImageGallery images={project.gallery} />
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