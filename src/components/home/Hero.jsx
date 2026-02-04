import { motion } from 'framer-motion';
import { inkSplotch, frameView } from '../../animations/transitions';

import { getAssetUrl } from '../../utils/imageHelper';


const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 背景图 */}
      <motion.div 
        {...frameView}
        className="absolute inset-0 z-0"
      >
        <img 
          src={getAssetUrl("/assets/images/hero-bg.jpg", "hero")} 
          alt="Landscape" 
          className="h-full w-full object-cover transition-transform duration-[3s] ease-out hover:scale-105" 
        />
        {/* <img src="/assets/images/hero-bg.jpg" alt="Landscape" className="h-full w-full object-cover" /> */}
        <div className="absolute inset-0 bg-black/10 mix-blend-multiply" /> {/* 东方意境的压暗处理 */}
      </motion.div>

      {/* 文字内容 */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
        <motion.h1 
          {...inkSplotch}
          transition={{ ...inkSplotch.transition, delay: 0.8 }}
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