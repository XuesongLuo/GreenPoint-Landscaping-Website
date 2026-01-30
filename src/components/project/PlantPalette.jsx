import React from 'react';
import { motion } from 'framer-motion';

const PlantPalette = ({ plants }) => {
  if (!plants || plants.length === 0) return null;

  // 预设几种不同的旋转角度，增加“随机感”
  const photoTilts = ['rotate-1', '-rotate-2', 'rotate-2', '-rotate-1'];
  const tapeTilts = ['-rotate-2', 'rotate-3', '-rotate-1', 'rotate-2'];

  return (
    <section className="relative py-40 bg-[#F5F4F0] overflow-hidden">
      {/* 标题部分 */}
      <div className="text-center mb-32 relative z-10">
        <h2 className="text-4xl font-serif text-ink tracking-widest mb-4">植物图谱</h2>
        <div className="w-12 h-px bg-moss mx-auto opacity-40"></div>
        <p className="text-[10px] uppercase tracking-[0.4em] text-moss mt-6">Ecological Narrative</p>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* 中间垂直线 */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-ink/10 -translate-x-1/2 hidden md:block"></div>

        <div className="space-y-40">
          {plants.map((plant, index) => {
            const isEven = index % 2 === 0;
            // 根据 index 选择不同的旋转角度
            const currentPhotoTilt = photoTilts[index % photoTilts.length];
            const currentTapeTilt = tapeTilts[index % tapeTilts.length];

            return (
              <div key={index} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                
                {/* 轴线节点 */}
                <div className="absolute left-1/2 w-2 h-2 bg-moss rounded-full -translate-x-1/2 hidden md:block z-10">
                   <div className="absolute inset-0 bg-moss rounded-full animate-ping opacity-20"></div>
                </div>

                {/* 文字：像手写题跋 */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`w-full md:w-1/2 ${isEven ? 'md:pr-24 md:text-right' : 'md:pl-24 md:text-left'} mb-12 md:mb-0`}
                >
                  <span className="text-[10px] font-mono text-moss/50 mb-2 block">0{index + 1} / {plant.type}</span>
                  <h3 className="text-3xl font-serif text-ink mb-2">{plant.name}</h3>
                  <p className="text-xs italic font-serif text-ink/40 mb-6">{plant.latin}</p>
                  <div className={`h-px w-12 bg-moss/20 ${isEven ? 'ml-auto' : 'mr-auto'}`}></div>
                </motion.div>

                {/* 图片：优化后的自然贴法 */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className={`w-full md:w-1/2 ${isEven ? 'md:pl-24' : 'md:pr-24'}`}
                >
                  <div className={`relative p-3 bg-white shadow-xl ${currentPhotoTilt} group hover:rotate-0 transition-transform duration-700 ease-out`}>
                    <div className="aspect-[4/5] overflow-hidden">
                      <img 
                        src={plant.image} 
                        alt={plant.name} 
                        className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000"
                      />
                    </div>
                    
                    {/* 模拟透明胶带：旋转方向也设为不一致 */}
                    <div className={`absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-8 bg-ink/5 backdrop-blur-sm ${currentTapeTilt} opacity-60 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  </div>
                </motion.div>
                
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlantPalette;