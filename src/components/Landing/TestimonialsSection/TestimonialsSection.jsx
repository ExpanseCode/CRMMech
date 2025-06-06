import { Star, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import css from './TestimonialsSection.module.css';

const testimonials = [
  {
    name: '🔧 Олександр Петренко',
    position: "Власник СТО 'Авто-Майстер', Київ",
    before:
      'Я не знав, чому в нас втрачається час. Одні майстри затримують машину, інші просто гуляють по СТО. Клієнт нервує, я — теж.',
    after:
      'CRMmech показав мені, де зникає час і прибуток. Тепер я бачу по відео: скільки реально працювали, скільки простоювали. Прозорість виросла на 80%.',
    rating: 5,
  },
  {
    name: '📋 Марина Іваненко',
    position: "Менеджер СТО 'Профі-Сервіс', Львів",
    before:
      "Мені доводилося постійно дзвонити майстрам: 'Ти встигаєш? Ти вже почав? Коли віддаєш машину?' Планування було суцільний стрес.",
    after:
      'Тепер я бачу всю завантаженість постів онлайн. Можу перенести машину, підключити іншого майстра — і не зриваю терміни. Все — в одній системі.',
    rating: 5,
  },
  {
    name: '📱 Віталій Коваленко',
    position: 'Головний механік, Дніпро',
    before:
      'Я робив багато, але це ніхто не рахував. Зарплата була однакова — що я стараюсь, що ні. Мотивація = нуль.',
    after:
      'Тепер кожен мій чек-лист і час фіксується. Я бачу, що мої зусилля — враховуються. І зарплата залежить від реальної роботи.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="feedback">
      <div className={css.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={css.sectionHeader}
        >
          <h2 className={css.sectionTitle}>
            😣 Як було до CRMmech — і що змінилося після
          </h2>
          <p className={css.sectionSubtitle}>
            Ми не просимо повірити — краще послухайте, що кажуть ті, хто пройшов
            через щоденний хаос в автосервісі.
          </p>
        </motion.div>

        <div className={css.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className={css.testimonialCard}
            >
              {/* Header */}
              <div className={css.testimonialHeader}>
                <div className={css.avatar}>
                  <span className={css.avatarInitial}>
                    {testimonial.name
                      .replace(/[🔧📋📱]/g, '')
                      .trim()
                      .charAt(0)}
                  </span>
                </div>
                <div className={css.testimonialCredential}>
                  <h4 className={css.testimonialName}>
                    {testimonial.name}
                  </h4>
                  <p className={css.testimonialPosition}>
                    {testimonial.position}
                  </p>
                </div>
              </div>

              {/* Before Section */}
              <div className={css.beforeSection}>
                <div className={css.beforeHeader}>
                  <span className={css.beforeIcon}>❌</span>
                  <h5 className={css.beforeTitle}>Як було:</h5>
                </div>
                <p className={css.beforeText}>
                  "{testimonial.before}"
                </p>
              </div>

              {/* After Section */}
              <div className={css.afterSection}>
                <div className={css.afterHeader}>
                  <span className={css.afterIcon}>✅</span>
                  <h5 className={css.afterTitle}>
                    Що змінилося:
                  </h5>
                </div>
                <p className={css.afterText}>
                  "{testimonial.after}"
                </p>
              </div>

              {/* Rating */}
              <div className={css.ratingSection}>
                <div className={css.ratingWrapper}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className={css.ratingIcon} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CRMmech Benefits Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className={css.benefitsSummary}
        >
          <h3 className={css.benefitsTitle}>
            🔥 CRMmech — не просто CRM. Це:
          </h3>
          <div className={css.benefitsGrid}>
            <div className={css.benefitCard}>
              <div className={css.benefitIcon}>🎯</div>
              <h4 className={css.benefitTitle}>
                Контроль кожного поста
              </h4>
              <p className={css.benefitText}>
                Бачите що відбувається на кожному робочому місці в реальному
                часі
              </p>
            </div>
            <div className={css.benefitCard}>
              <div className={css.benefitIcon}>📊</div>
              <h4 className={css.benefitTitle}>
                Реальні цифри по майстрам
              </h4>
              <p className={css.benefitText}>
                Точний облік робочого часу та результативності кожного
                співробітника
              </p>
            </div>
            <div className={css.benefitCard}>
              <div className={css.benefitIcon}>⚙️</div>
              <h4 className={css.benefitTitle}>
                Система, яка вбиває хаос
              </h4>
              <p className={css.benefitText}>
                Замість стресу та дзвінків — чіткий план та автоматизація
                процесів
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
