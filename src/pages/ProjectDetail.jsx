// src/pages/ProjectDetail.jsx
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projects'; // 引入数据

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
  const project = projectsData.find(p => p.id === parseInt(id));

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!project) return null;

  return (
    <div className="bg-paper min-h-screen">
      <Navbar />
      
      {/* 1. 沉浸式首屏 */}
      <ProjectHeader project={project} />

      {/* 2. 非对称叙事与档案 */}
      <ProjectInfo project={project} />

      {/* 3. 画廊展示 (复用你现有的组件) */}
      <ImageGallery images={project.gallery} />

      {/* 4. 植物图谱 */}
      <PlantPalette plants={project.plants} />

      <ProjectNavigation currentId={project.id} />

      <Footer />
    </div>
  );
};

export default ProjectDetail;