export const inkSplotch = {
    initial: { opacity: 0, filter: 'blur(20px)', scale: 1.1 },
    animate: { opacity: 1, filter: 'blur(0px)', scale: 1 },
    exit: { opacity: 0, filter: 'blur(10px)' },
    transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] }
  };
  
  export const frameView = {
    initial: { clipPath: 'inset(10% 20% 10% 20%)' },
    animate: { clipPath: 'inset(0% 0% 0% 0%)' },
    transition: { duration: 2, ease: "circOut" }
  };