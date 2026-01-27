import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const PlantPalette = ({ plants }) => {
  if (!plants || plants.length === 0) return null;

  // 定义桌面端布局的“线索点”坐标 (百分比位置)
  // 我们手动指定位置，营造一种“精心设计的凌乱感”
  const positions = [
    { top: '10%', left: '5%', rotate: -6 },   // 左上
    { top: '15%', right: '8%', rotate: 5 },   // 右上
    { bottom: '15%', left: '12%', rotate: 4 }, // 左下
    { bottom: '10%', right: '15%', rotate: -3 },// 右下
    { top: '45%', right: '25%', rotate: 8 },  // 中右
    { top: '50%', left: '25%', rotate: -5 },  // 中左
  ];

  // 核心理念卡片的位置（中心）
  const centerPos = { top: '50%', left: '50%' };

  return (
    <section className="py-20 bg-paper overflow-hidden relative min-h-[1000px] md:min-h-[900px]">
      {/* 背景纹理：软木板或粗糙墙面感 */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cream-paper.png")' }}>
      </div>

      <div className="max-w-7xl mx-auto h-full relative z-10">
        
        {/* 1. 桌面端：连接线 SVG 层 (仅在 md 以上显示) */}
        <svg className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-0">
          {plants.map((_, index) => {
            const pos = positions[index % positions.length];
            // 计算简单的连线坐标：从中心卡片连向各个植物
            // 注意：这里用简单的百分比估算，实际项目中可能需要更精确的计算
            // 中心点约在 50%, 50%
            // 目标点根据 pos 解析 (这里简化处理，假设 pos 里的 left/right/top/bottom 转换为大概的 x,y)
            
            let x2 = pos.left ? parseFloat(pos.left) : (100 - parseFloat(pos.right));
            let y2 = pos.top ? parseFloat(pos.top) : (100 - parseFloat(pos.bottom));
            
            // 微调连线终点，使其看起来像连在照片的图钉上
            // 这是一个视觉欺骗，只要线大致指向那个方向即可
            
            return (
              <motion.path
                key={index}
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.6 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 + index * 0.2 }}
                d={`M50 50 L${x2} ${y2}`} 
                stroke="#8C927D" // 使用苔藓绿作为“线索线”，比红色更优雅
                strokeWidth="1.5"
                strokeDasharray="5,5" // 虚线效果，增加图纸感
                fill="none"
                vectorEffect="non-scaling-stroke" // 防止缩放时线变粗
              />
            );
          })}
        </svg>

        {/* 2. 核心理念卡片 (中心枢纽) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-64 md:w-80">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-[#fffdf5] p-6 shadow-2xl rotate-1 border border-stone-200 relative"
          >
            {/* 顶部大头针 */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-red-800 shadow-sm z-30 border-2 border-white/50"></div>
            
            <h3 className="text-3xl font-serif text-center mb-2 text-ink">Plant Palette</h3>
            <div className="w-full h-[1px] bg-stone-300 mb-3"></div>
            <p className="font-serif italic text-stone-500 text-center leading-relaxed text-sm">
              "Every plant is a clue to the local ecosystem. We weave them together to form a resilient narrative."
            </p>
            <div className="mt-4 flex justify-center gap-2">
               <span className="w-2 h-2 rounded-full bg-moss opacity-50"></span>
               <span className="w-2 h-2 rounded-full bg-stone-400 opacity-50"></span>
               <span className="w-2 h-2 rounded-full bg-ink opacity-20"></span>
            </div>
          </motion.div>
        </div>

        {/* 3. 散落的照片 (线索点) */}
        <div className="relative w-full h-full">
          {plants.map((plant, index) => {
            const pos = positions[index % positions.length];
            // 移动端样式 vs 桌面端样式
            // 移动端：流式堆叠；桌面端：绝对定位
            
            return (
              <motion.div
                key={index}
                className="relative md:absolute w-full md:w-64 mx-auto mb-16 md:mb-0"
                style={{ 
                  // 移动端忽略 top/left，桌面端应用
                  top: window.innerWidth >= 768 ? pos.top : 'auto',
                  bottom: window.innerWidth >= 768 ? pos.bottom : 'auto',
                  left: window.innerWidth >= 768 ? pos.left : 'auto',
                  right: window.innerWidth >= 768 ? pos.right : 'auto',
                }}
                initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1, 
                  rotate: window.innerWidth >= 768 ? pos.rotate : (index % 2 === 0 ? -2 : 2) 
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 0, zIndex: 50, transition: { duration: 0.3 } }}
              >
                {/* 拍立得照片卡片 */}
                <div className="bg-white p-3 pb-10 shadow-[0_4px_20px_rgba(0,0,0,0.15)] group relative transform transition-all hover:shadow-2xl">
                  
                  {/* 顶部大头针 (Pin) */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-20">
                    <div className="w-3 h-3 rounded-full bg-stone-800 shadow-sm border border-stone-600"></div>
                    <div className="w-[1px] h-3 bg-stone-400 mx-auto -mt-1 opacity-50"></div>
                  </div>

                  {/* 图片 */}
                  <div className="aspect-[4/5] bg-stone-100 overflow-hidden relative">
                    <img 
                      src={plant.image} 
                      alt={plant.name} 
                      className="w-full h-full object-cover filter contrast-[0.95] brightness-[1.05] sepia-[0.1]" 
                    />
                    {/* 胶带效果 (Tape) - 随机出现在边角 */}
                    {index % 2 === 0 && (
                      <div className="absolute -top-3 -right-3 w-8 h-8 bg-white/30 backdrop-blur-sm rotate-45 shadow-sm border border-white/20"></div>
                    )}
                  </div>

                  {/* 手写注解 */}
                  <div className="absolute bottom-2 left-0 w-full text-center px-2">
                    <h4 className="font-serif text-lg text-ink/90">{plant.name}</h4>
                    <p className="text-[9px] uppercase tracking-widest text-stone-400">{plant.latin}</p>
                  </div>
                  
                  {/* 附加的小便签 (Note) - 偶尔出现 */}
                  {index % 3 === 0 && (
                    <div className="absolute -bottom-8 -right-4 bg-[#fff9c4] text-ink p-2 w-24 shadow-md rotate-3 text-[10px] font-serif leading-tight border-t border-[#f0f0f0]">
                      Excellent drought resistance.
                    </div>
                  )}
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