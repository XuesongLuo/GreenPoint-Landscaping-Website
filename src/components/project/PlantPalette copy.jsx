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
      
      {/* 标本夹布局：更小的尺寸 + 更大的偏移 */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-y-40 md:gap-y-72">
        {plants.map((plant, index) => {
          /**
           * 核心改动：
           * 1. 统一使用 md:col-span-3，让图片在视觉上显得更轻盈、更像一张张贴上的标本卡。
           * 2. 增加 md:col-start 的跳跃性，创造更随意的“摆放感”。
           */
          const gridConfig = [
            "md:col-span-3 md:col-start-2",               // 第1张：左侧留白1格
            "md:col-span-3 md:col-start-8 md:mt-48",      // 第2张：极右侧，大幅下移
            "md:col-span-3 md:col-start-4 md:mt-20",      // 第3张：中偏左
            "md:col-span-3 md:col-start-9 md:-mt-32",     // 第4张：右侧，向上收紧
          ];
          const config = gridConfig[index % gridConfig.length];

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
              className={`${config} group relative`}
            >
              <div className="relative">
                {/* 标本图片：缩小到 3/12 宽度，统一 4:5 比例 */}
                <div className="overflow-hidden bg-stone-100 mb-10 rounded-sm shadow-sm aspect-[4/5] w-full p-2 bg-white ring-1 ring-stone-100">
                  {/* p-2 和 bg-white 模拟了标本自带的白色边框衬纸 */}
                  <img 
                    src={plant.image} 
                    alt={plant.name} 
                    className="w-full h-full object-cover transition-transform duration-[4000ms] group-hover:scale-105"
                  />
                </div>

                {/* 装饰性序号：REF. XX */}
                <span className="absolute -top-8 -left-2 font-serif italic text-[10px] tracking-widest opacity-20 group-hover:opacity-100 group-hover:text-moss transition-all duration-700">
                  INDEX / {String(index + 1).padStart(2, '0')}
                </span>

                {/* 标签化排版：更细致的科学注解感 */}
                <div className="pt-6 border-t border-ink/5 relative">
                  <h4 className="text-xl font-serif tracking-widest mb-2 group-hover:text-moss transition-colors duration-500">
                    {plant.name}
                  </h4>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[10px] italic font-serif opacity-40 tracking-wider">
                      {plant.latin}
                    </span>
                    <div className="flex items-center gap-2 mt-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-moss/30" />
                      <span className="text-[8px] tracking-[0.2em] opacity-30 uppercase">
                        Specimen Type: {plant.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* 装饰性细节：模拟标本夹的固定件 */}
                <div className="absolute -right-2 top-0 w-[1px] h-4 bg-stone-200 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="absolute -right-2 top-0 w-4 h-[1px] bg-stone-200 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              </div>
            </motion.div>
          );
        })}
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