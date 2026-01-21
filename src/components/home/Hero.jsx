import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 背景图 */}
      <motion.div 
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img src="/assets/images/hero-bg.jpg" alt="Landscape" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/10 mix-blend-multiply" /> {/* 东方意境的压暗处理 */}
      </motion.div>

      {/* 文字内容 */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
        <motion.h1 
          initial={{ opacity: 0, filter: 'blur(15px)', y: 20 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="text-7xl md:text-9xl font-serif tracking-widest mb-6"
        >
          无 境
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-xs tracking-[0.5em] uppercase font-light"
        >
          Nature as Architecture
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;