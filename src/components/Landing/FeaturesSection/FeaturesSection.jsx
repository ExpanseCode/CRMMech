import css from './FeaturesSection.module.css';
import ListOfExtraFeatures from './ListOfExtraFeatures/ListOfExtraFeatures.jsx';
import ListOfMainFeatures from './ListOfMainFeatures/ListOfMainFeatures.jsx';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';

export default function FeaturesSection() {
  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = imageSrc => {
    setLightboxImage(imageSrc);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <>
      {lightboxImage && (
        <div
          // className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          className={css.modalContainer}
          onClick={closeLightbox}
        >
          <div
            // className="relative max-w-6xl max-h-full"
            className={css.imgBox}
          >
            <button
              onClick={closeLightbox}
              // className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              className={css.closeBtn}
            >
              <X
                // className="h-8 w-8"
                className={css.close}
              />
            </button>
            <img
              src={lightboxImage}
              alt="CRMmech Screenshot"
              // className="max-w-full max-h-full object-contain rounded-lg"
              className={css.img}
              onClick={e => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <section id="features">
        <div className={css.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            // className="text-center mb-16"
          >
            <div className={css.titleBox}>
              <p className={css.title}>Ключові можливості системи</p>
              <p className={css.descr}>
                AI-технології та автоматизація для максимальної ефективності{' '}
                <br /> вашого автосервісу
              </p>
            </div>
          </motion.div>

          <ListOfMainFeatures openLightbox={openLightbox} />
          <ListOfExtraFeatures />
        </div>
      </section>
    </>
  );
}
