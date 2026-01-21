import { motion } from 'framer-motion';

const ProjectInfo = ({ project }) => {
  return (
    <section className="py-24 px-6 md:px-40 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-16 md:gap-32">
        
        {/* 左侧：元数据 (像工程图纸的侧边栏) */}
        <div className="md:w-1/4 space-y-8 border-t border-ink/10 pt-8 h-fit sticky top-32">
          <InfoItem label="Area" value={project.area} />
          <InfoItem label="Category" value={project.category} />
          <InfoItem label="Location" value={project.location} />
        </div>

        {/* 右侧：正文叙事 */}
        <div className="md:w-3/4">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl md:text-3xl font-serif leading-relaxed text-ink/90 mb-12"
          >
            {project.description}
          </motion.h2>
          
          {/* 草图展示 (如果有) */}
          {project.sketchImage && (
             <div className="mt-16 bg-[#EAE8E0] p-8 md:p-16">
               <img src={project.sketchImage} alt="Sketch" className="mix-blend-multiply opacity-80 w-full" />
               <p className="text-center text-xs tracking-widest mt-4 opacity-40">DESIGN SKETCH / 手稿</p>
             </div>
          )}
        </div>
      </div>
    </section>
  );
};

const InfoItem = ({ label, value }) => (
  <div>
    <h4 className="text-[10px] uppercase tracking-[0.2em] opacity-40 mb-1">{label}</h4>
    <p className="font-serif text-lg text-moss">{value}</p>
  </div>
);

export default ProjectInfo;