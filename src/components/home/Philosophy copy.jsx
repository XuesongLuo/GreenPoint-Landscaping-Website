import { motion } from 'framer-motion';

const Philosophy = () => {
  return (
    <section className="py-32 px-6 md:px-20 bg-[#f2efea]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-serif leading-relaxed text-[#1a1a1a]">
            “我们相信，最好的景观设计不是对场地的占领，而是对土地记忆的唤醒。借景、框景、隐喻，在方寸之间营造出可游、可居、可观的诗意世界。”
          </h2>
          <div className="mt-12 flex items-center gap-4">
            <span className="h-[1px] w-12 bg-[#8c927d]"></span>
            <span className="text-sm tracking-widest text-[#8c927d]">设计哲学</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;