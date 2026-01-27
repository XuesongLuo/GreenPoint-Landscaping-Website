import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const PlantPalette = ({ plants, projectId = 1 }) => {
  if (!plants || plants.length === 0) return null;

  // --- 1. 定义多套“避让中心”的布局方案 ---
  
  // 方案 A: 经典散落 (The Scatter) - 四角与边缘分散，绝对不碰中心
  const layoutScatter = [
    { top: '5%', left: '5%', rotate: -6 },      // 左上角
    { top: '10%', right: '5%', rotate: 5 },      // 右上角
    { top: '40%', left: '15%', rotate: 4 },      // 左边缘 (上移，避开中心)
    { bottom: '45%', right: '10%', rotate: -3 }, // 右边缘 (下移，避开中心)
    { bottom: '5%', left: '10%', rotate: -5 },  // 左下角
    { bottom: '10%', right: '15%', rotate: 3 },  // 右下角
  ];

  // 方案 B: 广角轨道 (The Orbit) - 贴边大椭圆
  const layoutOrbit = [
    { top: '2%', left: '35%', rotate: -2 },     // 正上方 (极靠边)
    { top: '15%', right: '5%', rotate: 10 },    // 右上极点
    { bottom: '15%', right: '5%', rotate: -5 }, // 右下极点
    { bottom: '2%', right: '35%', rotate: 3 },  // 正下方 (极靠边)
    { bottom: '15%', left: '5%', rotate: -10 }, // 左下极点
    { top: '15%', left: '5%', rotate: 5 },      // 左上极点
  ];

  // 方案 C: 环绕流线 (The Surround) - 从左上流向右下，但在外围游走
  const layoutFlow = [
    { top: '5%', left: '2%', rotate: -8 },      // 起点：左上极限
    { top: '5%', left: '45%', rotate: -3 },     // 顶部中继
    { top: '20%', right: '2%', rotate: 8 },     // 右上转折
    { bottom: '20%', right: '2%', rotate: -5 }, // 右下转折
    { bottom: '5%', right: '45%', rotate: 4 },  // 底部中继
    { bottom: '5%', left: '2%', rotate: -6 },   // 终点：左下极限
  ];

  // --- 2. 布局选择器 ---
  const currentLayout = useMemo(() => {
    const layouts = [layoutScatter, layoutOrbit, layoutFlow];
    // 确保有 projectId，否则默认为 1
    const safeId = projectId || 1;
    const index = safeId % layouts.length;
    return layouts[index];
  }, [projectId]);

  // 定义图钉颜色库
  const pinColors = [
    { name: 'Red',    light: '#ff6b6b', main: '#e74c3c', dark: '#c0392b' },
    { name: 'Blue',   light: '#54a0ff', main: '#2e86de', dark: '#0984e3' },
    { name: 'Yellow', light: '#feca57', main: '#ff9f43', dark: '#e67e22' },
    { name: 'Green',  light: '#55efc4', main: '#00b894', dark: '#006266' },
    { name: 'Purple', light: '#a29bfe', main: '#6c5ce7', dark: '#4834d4' },
  ];

  return (
    <section className="relative w-full bg-paper min-h-screen py-20 overflow-hidden">
      {/* 背景纹理 */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none mix-blend-multiply" 
        style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cardboard-flat.png")' }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10 min-h-[800px] md:h-[900px]">
        
        {/* 3. 动态连线层 (SVG) */}
        <svg className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-0">
          {plants.map((_, index) => {
            const pos = currentLayout[index % currentLayout.length];
            
            let x2 = pos.left ? parseFloat(pos.left) : (100 - parseFloat(pos.right));
            let y2 = pos.top ? parseFloat(pos.top) : (100 - parseFloat(pos.bottom));
            if (pos.bottom) y2 = 100 - parseFloat(pos.bottom);
            
            // 计算连线起点：永远是屏幕中心 (50%, 50%)
            // 计算连线终点：植物卡片的位置
            
            return (
              <motion.path
                key={index}
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.3 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 + index * 0.2 }}
                d={`M50 50 L${x2} ${y2}`} 
                stroke="#7f8c8d" 
                strokeWidth="1"
                strokeDasharray="3,3"
                fill="none"
              />
            );
          })}
        </svg>

        {/* --- 核心理念卡片 (绝对居中) --- */}
        {/* 增加了 z-index 确保它永远在最上层，不会被偶尔飘过的元素遮挡 */}
        <div className="relative md:absolute top-0 md:top-1/2 left-0 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-30 w-full md:w-80 mb-20 md:mb-0 px-6 md:px-0 flex justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            // 增加了 hover 效果，让核心卡片也能互动
            whileHover={{ scale: 1.02 }}
            className="bg-[#fcfbf9] p-6 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.25)] rotate-1 border border-stone-100 relative max-w-sm"
          >
            {/* 中心大红色主钉 */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-5 h-5 z-30 drop-shadow-md">
                <div className="w-full h-full rounded-full relative overflow-hidden" 
                     style={{ background: 'radial-gradient(circle at 35% 35%, #ff7675, #d63031)' }}>
                     <div className="absolute top-1 left-1 w-2 h-1.5 bg-white rounded-full opacity-60 blur-[1px]"></div>
                     <div className="absolute bottom-0 right-0 w-full h-full bg-black opacity-20" style={{ background: 'radial-gradient(circle at 80% 80%, rgba(0,0,0,0.4), transparent 60%)' }}></div>
                </div>
            </div>
            
            <h3 className="text-2xl font-serif text-center mb-2 text-ink">Ecosystem Palette</h3>
            <div className="w-full h-[1px] bg-stone-200 mb-3"></div>
            <p className="font-serif italic text-stone-500 text-center leading-relaxed text-sm">
              "Connecting native species to create a self-sustaining landscape narrative."
            </p>
          </motion.div>
        </div>

        {/* --- 植物照片卡片 (分布在四周) --- */}
        <div className="relative w-full h-full flex flex-col md:block gap-12 px-6">
          {plants.map((plant, index) => {
            const pos = currentLayout[index % currentLayout.length];
            const pinColor = pinColors[index % pinColors.length];

            return (
              <motion.div
                key={index}
                className="relative md:absolute w-full max-w-xs mx-auto md:w-60"
                style={{ 
                  top: window.innerWidth >= 768 ? pos.top : 'auto',
                  bottom: window.innerWidth >= 768 ? pos.bottom : 'auto',
                  left: window.innerWidth >= 768 ? pos.left : 'auto',
                  right: window.innerWidth >= 768 ? pos.right : 'auto',
                }}
                initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1, 
                  rotate: window.innerWidth >= 768 ? pos.rotate : (index % 2 === 0 ? -2 : 2) 
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: 0, 
                  zIndex: 40, // 略高于其他卡片，但低于核心卡片(z-30)? 不，交互时应该最高
                  zIndex: 50,
                  transition: { type: "spring", stiffness: 300 } 
                }}
              >
                <div className="bg-white p-3 pb-2 shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:shadow-2xl transition-shadow duration-300 flex flex-col relative">
                  
                  {/* 多彩 3D 图钉 */}
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-20 w-4 h-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
                     <div className="w-full h-full rounded-full relative"
                          style={{ 
                            background: `radial-gradient(circle at 30% 30%, ${pinColor.light}, ${pinColor.main}, ${pinColor.dark})`
                          }}>
                        <div className="absolute top-[15%] left-[15%] w-[30%] h-[20%] bg-white rounded-full opacity-70 blur-[0.5px]"></div>
                        <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] bg-white opacity-10 blur-[1px] rounded-full"></div>
                     </div>
                     <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-black opacity-20 blur-[1px] rounded-full -z-10"></div>
                  </div>

                  {/* 图片区域 */}
                  <div className="aspect-[4/5] bg-stone-100 overflow-hidden mb-4 relative grayscale-[10%] hover:grayscale-0 transition-all duration-500 group">
                    <img 
                      src={plant.image} 
                      alt={plant.name} 
                      className="w-full h-full object-cover" 
                    />
                    {/* 胶带效果 */}
                    {index % 2 !== 0 && (
                       <div className="absolute -top-3 -right-3 w-8 h-8 bg-white/40 backdrop-blur-sm rotate-45 border border-white/20 shadow-sm opacity-80"></div>
                    )}
                  </div>

                  {/* 底部文字 */}
                  <div className="pt-2 pb-4 text-center border-t border-stone-100">
                    <h4 className="font-serif text-lg text-ink/90 leading-none mb-1">{plant.name}</h4>
                    <p className="text-[10px] uppercase tracking-widest text-stone-400 font-sans">{plant.latin}</p>
                  </div>
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