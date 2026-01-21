import { motion } from 'framer-motion';

const ImageGallery = ({ images }) => {
  if (!images) return null;

  return (
    <section className="py-20 px-6 md:px-20 space-y-20 md:space-y-40">
      {images.map((img, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          // 奇数靠左，偶数靠右，宽度不一
          className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
        >
          <div className={`w-full ${index % 2 === 0 ? 'md:w-3/4' : 'md:w-2/3'}`}>
            <img 
              src={img} 
              alt={`Gallery ${index}`} 
              className="w-full h-auto object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-1000 shadow-xl shadow-[#0000000d]"
            />
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default ImageGallery;