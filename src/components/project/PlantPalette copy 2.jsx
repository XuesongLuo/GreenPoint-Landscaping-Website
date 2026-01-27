// src/components/project/PlantPalette.jsx
// src/components/project/PlantPalette.jsx
import React from 'react';
import { motion } from 'framer-motion';

const PlantPalette = ({ plants }) => {
  if (!plants || plants.length === 0) return null;

  return (
    <section className="py-32 px-6 bg-paper overflow-hidden relative">
      {/* 背景纹理：可选，增加一点桌面质感 */}
      <div className="absolute inset-0 bg-[#F2EFEA] opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* 标题部分 */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-4 block">
              The Living Palette
            </span>
            <h3 className="text-4xl md:text-5xl font-serif text-ink tracking-wide">
              植物情绪板
            </h3>
            <div className="w-12 h-[1px] bg-moss/50 mx-auto mt-6"></div>
          </motion.div>
        </div>

        {/* 散落照片布局 */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 py-10">
          {plants.map((plant, index) => {
            // 预设一组“随机”角度，模拟自然散落
            const rotations = [-6, 3, -4, 5, -8, 2];
            const rotation = rotations[index % rotations.length];
            
            // 预设一组垂直偏移，避免排列太整齐
            const yOffsets = [0, 40, -20, 30, -10, 50];
            const yOffset = yOffsets[index % yOffsets.length];

            return (
              <motion.div
                key={index}
                // 初始状态：散落、透明
                initial={{ opacity: 0, y: 100, rotate: rotation, scale: 0.9 }}
                // 进场动画：带着旋转落下
                whileInView={{ 
                  opacity: 1, 
                  y: yOffset, // 应用垂直偏移
                  rotate: rotation, 
                  scale: 1 
                }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  type: "spring",
                  stiffness: 50,
                  damping: 15,
                  delay: index * 0.1 
                }}
                // 悬停交互：拿起照片
                whileHover={{ 
                  scale: 1.15, 
                  rotate: 0, 
                  zIndex: 50,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="relative group cursor-pointer"
              >
                {/* 拍立得相纸容器 */}
                <div className="bg-white p-3 pb-8 md:p-4 md:pb-12 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)] transition-shadow duration-300 w-64 md:w-72">
                  
                  {/* 照片区域 */}
                  <div className="aspect-[4/5] overflow-hidden bg-stone-100 relative grayscale-[10%] group-hover:grayscale-0 transition-all duration-500">
                    <img 
                      src={plant.image} 
                      alt={plant.name} 
                      className="w-full h-full object-cover"
                    />
                    {/* 纹理遮罩（可选）：模拟老照片质感 */}
                    <div className="absolute inset-0 bg-stone-500/5 mix-blend-multiply pointer-events-none"></div>
                  </div>

                  {/* 手写风格文字 */}
                  <div className="mt-4 md:mt-6 text-center px-2">
                    <h4 className="text-xl font-serif text-ink/90 mb-1 group-hover:text-moss transition-colors">
                      {plant.name}
                    </h4>
                    <p className="text-[10px] tracking-widest uppercase text-stone-400 font-sans border-t border-stone-100 pt-2 inline-block">
                      {plant.latin}
                    </p>
                  </div>

                  {/* 装饰：模拟胶带或回形针 (纯CSS绘制) */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-12 bg-white/20 backdrop-blur-[1px] border border-white/40 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlantPalette;