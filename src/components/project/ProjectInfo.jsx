// src/components/project/ProjectInfo.jsx
import { motion } from 'framer-motion';

const ProjectInfo = ({ project }) => {

  return (
    <section className="py-24 px-6 md:px-40 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-16 md:gap-32">
        
        {/* 左侧：元数据 (增加 Materials 部分) */}
        <div className="md:w-1/4 space-y-10 border-t border-ink/10 pt-8 h-fit sticky top-32">
          
          <div className="space-y-6">
            <InfoItem label="Location" value={project.location} />
            <InfoItem label="Year" value={project.year} />
            <InfoItem label="Area" value={project.area} />
          </div>

          {/* 新增：材质清单显示 */}
          {project.materials && (
            <div className="pt-8 border-t border-ink/10">
               <h4 className="text-[10px] uppercase tracking-[0.2em] opacity-40 mb-4">Materiality</h4>
               <ul className="space-y-2">
                 {project.materials.map((m, i) => (
                   <li key={i} className="font-serif text-moss text-base italic flex justify-between">
                     <span>{m.cnName}</span>
                     {/* 移动端隐藏英文，保持简洁 */}
                     <span className="hidden lg:block text-xs opacity-50 not-italic mt-1">{m.name}</span>
                   </li>
                 ))}
               </ul>
            </div>
          )}
        </div>

        {/* 右侧：正文叙事 (保持不变) */}
        <div className="md:w-3/4">
           {/* ... 原有代码 ... */}
           <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl md:text-3xl font-serif leading-relaxed text-ink/90 mb-12"
          >
            {project.description}
          </motion.h2>
           {/* ... */}
        </div>
      </div>
    </section>
  );
};

const InfoItem = ({ label, value }) => (
  <div>
    <h4 className="text-[10px] uppercase tracking-[0.2em] opacity-40 mb-1">{label}</h4>
    <p className="font-serif text-lg text-ink">{value}</p>
  </div>
);

export default ProjectInfo;