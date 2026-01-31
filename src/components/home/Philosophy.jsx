import { motion } from 'framer-motion';

/**
 * 增强版 Philosophy 组件
 * @param {string} title - 副标题或分类名
 * @param {string} quote - 核心引言
 * @param {string} variant - 样式变体: 'full' (首页用, 全宽深背景) | 'simple' (Studio用, 无背景)
 */
const Philosophy = ({ 
  title = "设计哲学", 
  quote = "“我们相信，最好的景观设计不是对场地的占领，而是对土地记忆的唤醒。”",
  variant = 'full'
}) => {
  const isFull = variant === 'full';

  return (
    <section className={`${isFull ? 'py-32 px-6 md:px-20 bg-[#f2efea]' : 'py-0'}`}>
      <div className={`${isFull ? 'max-w-4xl mx-auto' : 'w-full'}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <h2 className={`${isFull ? 'text-2xl md:text-3xl' : 'text-4xl'} font-serif leading-relaxed text-[#1a1a1a]`}>
            {quote}
          </h2>
          <div className="mt-12 flex items-center gap-4">
            <span className="h-[1px] w-12 bg-[#8c927d]"></span>
            <span className="text-sm tracking-widest text-[#8c927d] uppercase">{title}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;