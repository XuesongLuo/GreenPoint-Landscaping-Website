import { motion } from 'framer-motion';

const PlantPalette = ({ plants }) => {
  return (
    <section className="px-6 md:px-20 py-32">
      <h2 className="text-center text-sm uppercase tracking-zen text-moss mb-20">— SOFT SCAPE</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
        {plants.map((plant, idx) => (
          <motion.div 
            key={idx}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            className="group"
          >
            {/* 灰度到彩色转换 */}
            <div className="aspect-[3/4] bg-stone/20 overflow-hidden mb-4 grayscale group-hover:grayscale-0 transition-all duration-700">
              <div className="w-full h-full flex items-center justify-center text-ink/10 font-serif italic uppercase text-xs">
                Texture
              </div>
            </div>
            <h4 className="text-lg font-serif tracking-widest">{plant.name}</h4>
            <p className="text-[10px] italic opacity-50 uppercase tracking-widest font-serif">{plant.latin}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PlantPalette;