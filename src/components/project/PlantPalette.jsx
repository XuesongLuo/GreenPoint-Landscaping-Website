import { motion } from 'framer-motion';

const PlantPalette = ({ plants }) => {
  if (!plants || plants.length === 0) return null;

  return (
    <section className="py-24 px-6 md:px-40 bg-[#ebe8e1]">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-end justify-between mb-16 border-b border-ink/10 pb-4">
          <h3 className="text-3xl font-serif tracking-widest text-ink">植栽<span className="text-lg opacity-40 italic ml-4">Plant Palette</span></h3>
          <span className="text-xs tracking-widest opacity-40">BOTANICAL SELECTION</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8">
          {plants.map((plant, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group flex justify-between items-baseline border-b border-dotted border-ink/20 pb-2 hover:border-moss transition-colors"
            >
              <div>
                <span className="text-lg font-serif group-hover:text-moss transition-colors">{plant.name}</span>
                <span className="block text-xs italic opacity-50 font-serif">{plant.latin}</span>
              </div>
              <span className="text-xs tracking-widest opacity-40 uppercase">{plant.type}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlantPalette;