import { motion } from 'framer-motion';

const ProjectHeader = ({ project }) => {
  return (
    <section className="h-[90vh] relative overflow-hidden">
      <motion.img 
        layoutId={`project-img-${project.id}`}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: [0.6, 0.01, -0.05, 0.9] }}
        src={project.coverImage}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/20" /> {/* 蒙层增加加州黄昏感 */}
      <div className="absolute bottom-20 left-6 md:left-20 text-white">
        <p className="text-xs uppercase tracking-[0.5em] mb-4 opacity-80">
          {project.location} / {project.year}
        </p>
        <h1 className="text-6xl md:text-8xl font-serif tracking-widest uppercase">
          {project.title}
        </h1>
      </div>
    </section>
  );
};

export default ProjectHeader;