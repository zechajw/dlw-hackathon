import { FC, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Loading: FC = () => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    setTimeout(() => setVisible(false), 1500);
  });

  return (
    <>
      {visible && (
        <motion.div
          className="absolute top-0 left-0 w-screen h-screen bg-gradient grid place-items-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Image
            src="/icons/white-nobg.png"
            alt="White icon no background"
            height={256}
            width={256}
            layout="fixed"
          />
        </motion.div>
      )}
    </>
  );
};
export default Loading;
