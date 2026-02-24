import css from './HeroSection.module.css';
import { motion, useAnimation } from 'framer-motion';
import {
  Play,
  Rocket,
  ChevronDown,
  Shield,
  Zap,
  Star,
  Users,
  TrendingUp,
  Download,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import tabScreen from '../../../assets/images/TabScreen1x.webp';
import tabScreen2x from '../../../assets/images/TabScreen2x.webp';
import addCarScreenPhoto from '../../../assets/images/addCarScreenPhoto.webp';
import Modal from './Modal/Modal';

export default function HeroSection() {
  const [garageCount, setGarageCount] = useState(0);
  const [profitIncrease, setProfitIncrease] = useState(0);
  const [timesSaved, setTimesSaved] = useState(0);
  const [openVideo, setOpenVideo] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (openVideo && videoRef.current) {
      videoRef.current.play();
    } else if (!openVideo && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [openVideo]);

  // Animated counters effect
  useEffect(() => {
    const animateCounter = (setter, target, duration) => {
      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(start));
        }
      }, 16);
    };

    const timeout = setTimeout(() => {
      animateCounter(setGarageCount, 50, 2000);
      animateCounter(setProfitIncrease, 35, 2500);
      animateCounter(setTimesSaved, 8, 1800);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={css.heroSection}>
      <div className={`${css.overlay} ${css.gradientOverlay}`}></div>
      <div className={`${css.overlay} ${css.blackOverlay}`}></div>
      <div className={css.heroContent}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={css.leftSection}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={css.topWrapper}
          >
            <div className={css.textWithIconWrapper}>
              <Shield className={`${css.icon} ${css.shield}`} />
              <p className={`${css.text} ${css.number} ${css.bold}`}>
                {garageCount}+{' '}
              </p>
              <p className={`${css.text} ${css.number}`}>автосервісів</p>
            </div>
            <div className={css.textWithIconWrapper}>
              <TrendingUp className={`${css.icon} ${css.trendingUp}`} />
              <p className={`${css.text} ${css.percent} ${css.bold}`}>
                +{profitIncrease}%
              </p>
              <p className={`${css.text} ${css.percent}`}>прибуток</p>
            </div>
            <div className={css.textWithIconWrapper}>
              <Zap className={`${css.icon} ${css.zap}`} />
              <p className={`${css.text} ${css.faster} ${css.bold}`}>
                {timesSaved}x
              </p>
              <p className={`${css.text} ${css.faster}`}>швидше</p>
            </div>
          </motion.div>
          <h1 className={css.header}>
            AI-автоматизація для вашого{' '}
            <span className={css.headerAcent}>автосервісу</span>
          </h1>
          <p className={css.leftSectionText}>
            CRMmech показує, що відбувається на СТО прямо зараз — які авто в
            роботі, хто що робить і скільки ви реально заробляєте
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={css.btnsWrapper}
          >
            <a
              href="https://forms.gle/oShc79zDeNqAyQ5p8"
              target="_blank"
              className={css.btnWithRocket}
            >
              <Rocket className={css.icon} />
              🚀 Спробувати
            </a>
            <button
              type="button"
              className={css.playBtn}
              onClick={() => setOpenVideo(true)}
            >
              <Play className={css.icon} />
              🎥 Демо
            </button>
            <a
              href="/CRMmech_ua.pdf"
              download={'CRMmech-Презентація.pdf'}
              className={css.downloadBtn}
            >
              <Download className={`${css.icon} ${css.bottomIcon}`} />
              📄 Презентація
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={css.bottomWrapper}
          >
            <div className={css.bottomElementWrapper}>
              <TrendingUp className={`${css.icon} ${css.shield}`} />
              <p className={css.bottomText}>Зниження втрат до -40%</p>
            </div>
            <div className={css.bottomElementWrapper}>
              <Zap className={`${css.icon} ${css.zap}`} />
              <p className={css.bottomText}>Зростання продуктивності +30%</p>
            </div>
            <div className={css.bottomElementWrapper}>
              <Shield className={`${css.icon} ${css.shieldBottom}`} />
              <p className={css.bottomText}>Повний контроль та прозорість</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={css.rightSection}
        >
          <div className={css.imgWrapper}>
            <img
              className={css.tabScreen}
              srcSet={`${tabScreen} 1x, ${tabScreen2x} 2x`}
              src={tabScreen}
              alt="tablet screen photo"
            />
            <p className={`${css.absoluteSection} ${css.top}`}>
              🤖 AI Система активна
            </p>
            <p className={`${css.absoluteSection} ${css.bottom}`}>
              10 авто всього
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className={css.addImgWrapper}
          >
            <img
              src={addCarScreenPhoto}
              alt=""
              className={css.addCarScreenImg}
            />
            <div className={css.textWrapper}>
              <div className={css.dot}></div>
              <p className={`${css.addText} ${css.addTextTop}`}>Додаток</p>
            </div>

            <p className={`${css.addText} ${css.addTextBottom}`}>🔧 МЕХАНИКА</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className={css.rightSideBottomWrapper}
          >
            <div className={css.bottomWrapperContent}>
              <div className={css.yellow}>
                <p className={css.carNumber}>AA1234BC</p>
                <div className={css.bottomDot}></div>
              </div>
              <div className={css.bottomTextWrapper}>
                <p className={css.carName}>Honda Civic 2018</p>
                <div className={css.textWitnDotWrapper}>
                  <p className={css.bottomGreenDot}></p>
                  <p className={css.rightSectionBottomText}>
                    Розпізнано за 2.3 сек
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className={css.arrowWrapper}
      >
        <ChevronDown className={css.arrow} />
      </motion.div>
      {openVideo && (
        <Modal isOpen={openVideo} onClose={() => setOpenVideo(false)}>
          <div className={css.videoWrapper}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/w_XSB5hDMyo?autoplay=1&rel=0"
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </Modal>
      )}
    </div>
  );
}
