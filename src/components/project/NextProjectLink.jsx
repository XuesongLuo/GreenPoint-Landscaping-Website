// src/components/project/NextProjectLink.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectsData } from '../../data/projects'; //

const NextProjectLink = ({ currentId }) => {
  // 查找下一个项目，如果当前是最后一个，则回到第一个
  const currentIndex = projectsData.findIndex(p => p.id === currentId);
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  if (!nextProject) return null;

  return (
    <section className="mt-40 border-t border-ink/5 pt-20 pb-40 px-6">
      <Link to={`/project/${nextProject.id}`} className="group block text-center">
        {/* 顶部微标 */}
        <motion.span 
          initial={{ opacity: 0.5 }}
          whileHover={{ opacity: 1, letterSpacing: "0.6em" }}
          className="text-[10px] uppercase tracking-zen text-moss mb-6 block transition-all"
        >
          Next Chapter / 下一章
        </motion.span>
        
        {/* 项目标题：使用大的留白和淡出的透明度 */}
        <h3 className="text-4xl md:text-7xl font-serif tracking-widest opacity-20 group-hover:opacity-100 transition-all duration-1000">
          {nextProject.title}
        </h3>
        
        {/* 箭头的东方表达：优雅而简洁 */}
        <div className="mt-8 overflow-hidden h-6 flex flex-col items-center">
          <span className="text-2xl group-hover:-translate-y-full transition-transform duration-500 ease-in-out">&darr;</span>
          <span className="text-2xl group-hover:-translate-y-full transition-transform duration-500 ease-in-out">&rarr;</span>
        </div>
      </Link>
    </section>
  );
};

export default NextProjectLink;