import { motion } from 'framer-motion';

const ProjectHeader = ({ project }) => {
  return (
    <section className="relative w-full h-[85vh] overflow-hidden">
      {/* 共享元素图片：layoutId 必须和首页对应图片的 layoutId 一致 */}
      <motion.img 
        layoutId={`project-img-${project.id}`}
        src={project.coverImage} 
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* 遮罩：保证文字可读性 */}
      <div className="absolute inset-0 bg-black/20" />

      {/* 标题文字 */}
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-20 text-[#f2efea]">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p className="text-xs md:text-sm tracking-[0.4em] uppercase mb-4 opacity-80">
            {project.location} — {project.year}
          </p>
          <h1 className="text-5xl md:text-8xl font-serif tracking-widest">
            {project.title}
          </h1>
          <p className="text-lg italic font-serif opacity-70 mt-2">{project.subtitle}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectHeader;