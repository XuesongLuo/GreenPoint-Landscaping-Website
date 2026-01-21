// src/pages/ProjectDetail.jsx
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projects'; // 引入数据

// 引入组件
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import ProjectHeader from '../components/project/ProjectHeader';
import ProjectInfo from '../components/project/ProjectInfo'; // 信息与文本
import ImageGallery from '../components/project/ImageGallery';
import PlantPalette from '../components/project/PlantPalette';

const ProjectDetail = () => {
  const { id } = useParams();
  
  // 查找对应项目 (注意 URL 参数通常是 string，需转 int)
  const project = projectsData.find(p => p.id === parseInt(id));

  // 滚动重置：进入新页面时自动回到顶部
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) return <div className="h-screen flex items-center justify-center">项目不存在</div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-paper min-h-screen text-ink"
    >
      <Navbar />

      <main>
        {/* 1. 沉浸式头部 (共享元素动画) */}
        <ProjectHeader project={project} />

        {/* 2. 项目信息与叙事 */}
        <ProjectInfo project={project} />

        {/* 3. 瀑布流画廊 */}
        <ImageGallery images={project.gallery} />

        {/* 4. 植物配置 (特色组件) */}
        <PlantPalette plants={project.plants} />

        {/* 5. 下一个项目引导 (可选) */}
        <NextProjectLink currentId={project.id} />
      </main>

      <Footer />
    </motion.div>
  );
};

// 小组件：下一个项目链接
const NextProjectLink = ({ currentId }) => {
  const nextId = currentId + 1;
  // 简单判断一下是否有下一个，实际逻辑可更复杂
  const hasNext = projectsData.find(p => p.id === nextId);

  if (!hasNext) return null;

  return (
    <div className="py-32 flex justify-center border-t border-ink/10 mx-20">
      <Link to={`/project/${nextId}`} className="group text-center">
        <span className="text-xs tracking-[0.3em] uppercase opacity-50 block mb-4">Next Project</span>
        <h3 className="text-4xl font-serif tracking-widest group-hover:text-moss transition-colors">
          阅读下一篇章 &rarr;
        </h3>
      </Link>
    </div>
  );
}

export default ProjectDetail;