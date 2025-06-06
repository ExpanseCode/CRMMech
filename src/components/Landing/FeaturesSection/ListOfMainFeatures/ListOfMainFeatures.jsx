import { Camera, Calculator, Timer, ZoomIn } from 'lucide-react';
import css from './ListOfMainFeatures.module.css';
import carCard from '../../../../assets/carCard.png';
import planner from '../../../../assets/planner.png';
import analytics from '../../../../assets/analytics.png';
import { motion } from 'framer-motion';

export default function ListOfMainFeatures({ openLightbox }) {
  const mainFeatures = [
    {
      icon: Camera,
      title: '🎥 Точна фіксація заїзду автомобілів',
      description:
        "Система автоматично розпізнає номер та створить заявку: 'AUDI A6 CA7414CB - Заїзд: 14:21 23.05.2025'. Власник завжди знає коли і яке авто заїхало на СТО.",
      stats: '14:21',
      highlight: 'Точний час заїзду',
      img: carCard,
      bottomCaption: 'Реальний приклад фіксації авто',
      imgTopCaption: 'AUDI A6 CA7414CB',
      imgBottomCaption: '14:21 23.05.2025',
    },
    {
      icon: Timer,
      title: '⏱️ Контроль нормогодин по постах',
      description:
        "Миттєво бачите завантаженість: 'Пост: 1пл. 16г. 1хв.' показує який пост зайнятий та скільки часу там працюють. Повний контроль ефективності майстрів.",
      stats: '16г 1хв',
      highlight: 'Нормогодини',
      img: planner,
      bottomCaption: 'Планувальник та календар',
      imgTopCaption: '📅 Планувальник',
      imgBottomCaption: 'Реальний час',
    },
    {
      icon: Calculator,
      title: '📊 Статус авто в реальному часі',
      description:
        "Завжди знаєте що відбувається з автомобілем: 'Статус' та 'Інфо' кнопки показують поточний етап роботи, чи автомобіль на діагностиці, в ремонті чи готовий.",
      stats: 'Статус',
      highlight: 'Реальний час',
      img: analytics,
      bottomCaption: 'Фінансова аналітика',
      imgTopCaption: '💰 Фінанси',
      imgBottomCaption: '497 всього',
    },
  ];

  return (
    <div>
      <ul className={css.list}>
        {mainFeatures.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={css.item}
          >
            {/* <li key={index} className={css.item}> */}
            <div className={css.textPart}>
              <div className={css.topPart}>
                <div className={css.iconBox}>
                  <item.icon className={css.icon} />
                </div>
                <div className={css.highlight}>{item.highlight}</div>
                <div className={css.stats}>{item.stats}</div>
              </div>
              <p className={css.title}>{item.title}</p>
              <p className={css.description}>{item.description}</p>
            </div>
            <div className={css.imagePart}>
              <div className={css.imgBox}>
                <div
                  className={css.relative}
                  onClick={() => openLightbox(item.img)}
                >
                  <img
                    src={item.img}
                    alt="Фінансова аналітика CRMmech - облік доходів та витрат автосервісу"
                    className={css.img}
                  />
                  <p
                    className={`${css.imgTopCaption} ${
                      index === 2 && css.imgTopCaptionPurple
                    }`}
                  >
                    {item.imgTopCaption}
                  </p>
                  <p className={css.imgBottomCaption}>
                    {item.imgBottomCaption}
                  </p>
                  <ZoomIn className={css.zoom} />
                </div>
              </div>
              <p className={css.bottomCaption}>{item.bottomCaption}</p>
            </div>
            {/* </li> */}
          </motion.div>
        ))}
      </ul>
    </div>
  );
}
