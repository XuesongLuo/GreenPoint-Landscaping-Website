// src/components/project/PlantPalette.jsx
import React from 'react';
import { motion } from 'framer-motion';

const PlantPalette = ({ plants }) => {
  if (!plants || plants.length === 0) return null;

  return (
    <section className="py-40 px-6 md:px-20 bg-paper overflow-hidden">
      {/* 标题部分：更具杂志排版感 */}
      <div className="max-w-7xl mx-auto mb-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl md:text-6xl font-serif tracking-widest text-ink">
              植栽 <span className="text-xl md:text-2xl opacity-30 italic ml-4">Specimens</span>
            </h3>
            <div className="h-[1px] w-40 bg-moss/40 mt-6"></div>
          </motion.div>
          <p className="text-[10px] tracking-zen uppercase opacity-40 max-w-xs leading-loose">
            Botanical selection curated for the specific micro-climate and aesthetic harmony.
          </p>
        </div>
      </div>
      
      {/* 非对称网格布局：图片与文字的艺术融合 */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-y-32 md:gap-y-56 gap-x-10">
        {plants.map((plant, index) => {
          // 定义非对称规则：让图片在屏幕中错落分布
          const gridConfig = [
            "md:col-span-5 md:col-start-1",              // 第1张：左侧
            "md:col-span-4 md:col-start-8 md:mt-32",     // 第2张：右侧，通过 mt-32 形成高低差
            "md:col-span-4 md:col-start-3 md:mt-12",     // 第3张：中左偏移
            "md:col-span-5 md:col-start-7 md:-mt-16",    // 第4张：右侧，向上收紧空间
          ];
          const config = gridConfig[index % gridConfig.length];

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: (index % 4) * 0.1 }}
              className={`${config} group relative`}
            >
              {/* 背景装饰：统一色调，增加细腻的质感 */}
              <div className="absolute -inset-4 bg-stone/5 -z-10 group-hover:bg-moss/5 transition-colors duration-1000 rounded-sm"></div>
              
              <div className="relative">
                {/* 统一比例：全部使用 4:5 比例，解决“有的图片大有的图片小”的视觉突兀感 */}
                <div className="overflow-hidden bg-stone-100 mb-8 rounded-sm shadow-sm aspect-[4/5]">
                  <img 
                    src={plant.image} 
                    alt={plant.name} 
                    className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                  />
                </div>

                {/* 2. 装饰序号 */}
                <span className="absolute -top-6 -left-4 font-serif italic text-xs opacity-20 group-hover:opacity-100 group-hover:text-moss transition-all duration-500">
                  NO. {String(index + 1).padStart(2, '0')}
                </span>

                {/* 3. 文字排版：错落层次 */}
                <div className="pt-6 border-t border-ink/5 relative">
                  <h4 className="text-2xl md:text-3xl font-serif tracking-[0.2em] mb-3 group-hover:text-moss transition-colors duration-500">
                    {plant.name}
                  </h4>
                  <div className="flex flex-col gap-1">
                    <span className="text-[11px] italic font-serif opacity-50 tracking-wider uppercase">
                      {plant.latin}
                    </span>
                    <span className="text-[9px] tracking-widest opacity-30 uppercase mt-4 block border-l border-moss/30 pl-3">
                      Botanical Category: {plant.type}
                    </span>
                  </div>

                  {/* 4. 装饰性的小十字，增加绘图感 */}
                  <div className="absolute -right-2 -bottom-2 w-6 h-6 opacity-0 group-hover:opacity-40 transition-opacity duration-1000">
                    <div className="absolute top-1/2 w-full h-[0.5px] bg-ink"></div>
                    <div className="absolute left-1/2 h-full w-[0.5px] bg-ink"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      
      {/* 植物图鉴网格 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {plants.map((plant, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            className="group"
          >
            {/* 图片容器：使用 4:5 的艺术比例 */}
            <div className="aspect-[4/5] overflow-hidden bg-stone-100 mb-6 rounded-sm relative">
              <img 
                src={plant.image} 
                alt={plant.name} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              {/* 悬浮时的遮罩：显示类别 */}
              <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-500" />
            </div>

            {/* 文字描述：模仿植物标本标签 */}
            <div className="space-y-1 px-1">
              <div className="flex justify-between items-baseline">
                <h4 className="text-xl font-medium text-stone-800 tracking-wide">{plant.name}</h4>
                <span className="text-[10px] tracking-widest text-stone-400 uppercase">{plant.type}</span>
              </div>
              <p className="text-sm italic text-stone-400 font-serif leading-none">
                {plant.latin}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      

      {/* 非对称网格布局 */}
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-y-32 md:gap-y-48 gap-x-10">
        {plants.map((plant, index) => {
          // 定义非对称规则
          const gridConfig = [
            "md:col-span-4",                  // 第1个：左侧中等
            "md:col-span-3 md:col-start-6",   // 第2个：中间偏右，较窄
            "md:col-span-5 md:col-start-8",   // 第3个：右侧较宽
            "md:col-span-4 md:col-start-2",   // 第4个：左侧偏移
          ];
          const config = gridConfig[index % gridConfig.length];

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: (index % 4) * 0.1 }}
              className={`${config} group relative`}
            >
              {/* 背景装饰块：模拟标本夹 */}
              <div className="absolute -inset-4 bg-stone/5 -z-10 group-hover:bg-moss/5 transition-colors duration-700"></div>
              
              <div className="relative">
                {/* 装饰序号 */}
                <span className="absolute -top-10 -left-4 font-serif italic text-xs opacity-20 group-hover:opacity-100 transition-opacity">
                  NO. {String(index + 1).padStart(2, '0')}
                </span>

                {/* 文字排版：错落层次 */}
                <div className="pt-4 border-t border-ink/10">
                  <h4 className="text-2xl md:text-3xl font-serif tracking-widest mb-3 group-hover:text-moss transition-colors">
                    {plant.name}
                  </h4>
                  <div className="flex flex-col gap-1">
                    <span className="text-[11px] italic font-serif opacity-50 tracking-wider uppercase">
                      {plant.latin}
                    </span>
                    <span className="text-[9px] tracking-zen opacity-30 uppercase mt-4">
                      Category: {plant.type}
                    </span>
                  </div>
                </div>

                {/* 装饰性的小十字，增加专业感 */}
                <div className="absolute -right-2 -bottom-2 w-4 h-4 opacity-10 group-hover:opacity-40">
                  <div className="absolute top-1/2 w-full h-[1px] bg-ink"></div>
                  <div className="absolute left-1/2 h-full w-[1px] bg-ink"></div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default PlantPalette;