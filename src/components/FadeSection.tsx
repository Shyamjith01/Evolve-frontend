import { motion } from "framer-motion";

export const FadeInSection = ({ y,duration,children }: { y?:number,duration?:number,children: React.ReactNode }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: y ? y : 70 }} // Starts from bottom
        whileInView={{ opacity: 1, y:0 }} // Animates when in viewport
        transition={{ duration: duration ?? 1, ease: "easeIn" }}
        viewport={{ once: true }} // Animation occurs only once
      >
        {children}
      </motion.div>
    );
  };
  