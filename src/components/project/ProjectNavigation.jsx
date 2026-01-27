// src/components/project/ProjectNavigation.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectsData } from '../../data/projects';

const ProjectNavigation = ({ currentId }) => {
  // 获取当前索引
  const currentIndex = projectsData.findIndex(p => p.id === currentId);
  const total = projectsData.length;

  // 计算上一个和下一个（循环逻辑：第一个的前面是最后一个，最后一个的后面是第一个）
  const prevProject = projectsData[(currentIndex - 1 + total) % total];
  const nextProject = projectsData[(currentIndex + 1) % total];

  return (
    <section className="mt-40 border-t border-ink/5 px-6 md:px-20 py-32">
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-10 md:gap-20">
        
        {/* 上一个项目 */}
        <Link to={`/project/${prevProject.id}`} className="group text-left">
          <span className="text-[10px] uppercase tracking-zen text-moss mb-4 block opacity-60 group-hover:opacity-100 transition-opacity">
            &larr; Previous / 上篇
          </span>
          <h4 className="text-xl md:text-3xl font-serif tracking-widest opacity-30 group-hover:opacity-100 transition-all duration-700">
            {prevProject.title}
          </h4>
        </Link>

        {/* 下一个项目 */}
        <Link to={`/project/${nextProject.id}`} className="group text-right">
          <span className="text-[10px] uppercase tracking-zen text-moss mb-4 block opacity-60 group-hover:opacity-100 transition-opacity">
            Next / 下篇 &rarr;
          </span>
          <h4 className="text-xl md:text-3xl font-serif tracking-widest opacity-30 group-hover:opacity-100 transition-all duration-700">
            {nextProject.title}
          </h4>
        </Link>

      </div>
      
      {/* 装饰性细节：页码感 */}
      <div className="mt-20 flex justify-center items-center gap-4 italic font-serif text-sm opacity-20">
        <span>{String(currentIndex + 1).padStart(2, '0')}</span>
        <div className="w-12 h-[1px] bg-ink"></div>
        <span>{String(total).padStart(2, '0')}</span>
      </div>
    </section>
  );
};

export default ProjectNavigation;