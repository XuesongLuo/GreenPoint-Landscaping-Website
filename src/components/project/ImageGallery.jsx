// src/components/project/ImageGallery.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ImageGallery = ({ images }) => {
  if (!images || images.length === 0) return null;

  return (
    <section className="px-6 md:px-20 py-32 bg-paper">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
        {images.map((img, index) => {
          // 定义非对称规则：
          // 索引 0, 3, 6... 的图占 8 列 (大横图)
          // 索引 1, 4, 7... 的图占 4 列 (标准图)
          // 索引 2, 5, 8... 的图占 6 列并带位移 (中型图)
          const isLarge = index % 3 === 0;
          const isMedium = index % 3 === 2;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: (index % 3) * 0.2 }}
              className={`
                relative overflow-hidden group
                ${isLarge ? "md:col-span-8" : ""}
                ${isMedium ? "md:col-span-6 md:col-start-4" : ""} 
                ${(!isLarge && !isMedium) ? "md:col-span-4" : ""}
              `}
            >
              <div className={`
                overflow-hidden bg-stone/10
                ${isLarge ? "aspect-[16/9]" : "aspect-[3/4]"} 
                ${isMedium ? "aspect-square" : ""}
              `}>
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
                  src={img}
                  alt={`Gallery ${index}`}
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              
              {/* 装饰性的编号，像画廊索引一样 */}
              <div className="absolute top-4 left-4 text-[10px] font-serif opacity-0 group-hover:opacity-40 transition-opacity duration-500">
                PLATE _{String(index + 1).padStart(2, '0')}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ImageGallery;