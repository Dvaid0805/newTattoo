import React from 'react';
import { Footer, Contacts } from '../';
import grayBg from '../../assets/img/grayBg.jpg';
import styles from './CombinedContFoot.module.scss';
import { motion, useScroll, useTransform } from 'framer-motion';

export const CombinedContFoot = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start ', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  return (
    <div className={styles.root} ref={ref}>
      <motion.div
        style={{
          y,
          backgroundImage: `url(${grayBg})`,
        }}
        className={styles.background}
      />
      <Contacts />
      <Footer />
    </div>
  );
};
