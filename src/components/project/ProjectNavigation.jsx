// src/components/project/ProjectNavigation.jsx
import React from 'react';
import { Link } from 'react-router-dom';
//import { projectsData } from '../../data/projects';

/**
 * 现在的 ProjectNavigation 是一个纯展示组件 (Dumb Component)
 * 它不需要知道全部项目数据，只需要知道“上一篇”和“下一篇”是谁。
 */
const ProjectNavigation = ({ prevProject, nextProject }) => {
  // 如果没有数据，直接不渲染
  if (!prevProject || !nextProject) return null;

  return (
    <section className="mt-40 border-t border-ink/5 px-6 md:px-20 py-32">
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-10 md:gap-20">
        
        {/* 上一个项目 */}
        <Link to={`/projects/${prevProject.id}`} className="group text-left">
          <span className="text-[10px] uppercase tracking-zen text-moss mb-4 block opacity-60 group-hover:opacity-100 transition-opacity">
            &larr; Previous / 上篇
          </span>
          <h4 className="text-xl md:text-3xl font-serif tracking-widest opacity-30 group-hover:opacity-100 transition-all duration-700">
            {prevProject.title}
          </h4>
        </Link>

        {/* 下一个项目 */}
        <Link to={`/projects/${nextProject.id}`} className="group text-right">
          <span className="text-[10px] uppercase tracking-zen text-moss mb-4 block opacity-60 group-hover:opacity-100 transition-opacity">
            Next / 下篇 &rarr;
          </span>
          <h4 className="text-xl md:text-3xl font-serif tracking-widest opacity-30 group-hover:opacity-100 transition-all duration-700">
            {nextProject.title}
          </h4>
        </Link>

      </div>
      
      {/* 装饰性细节：页码感 */}
      <div className="mt-20 flex justify-center items-center opacity-20">
         <div className="w-12 h-[1px] bg-ink"></div>
      </div>
    </section>
  );
};

export default ProjectNavigation;