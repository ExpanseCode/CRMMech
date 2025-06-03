import { CheckCircle, Target, TrendingUp, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import css from './BenefitsSection.module.css';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: CheckCircle,
      title: 'Самостійно розпізнає авто при заїзді',
      description: 'AI автоматично фіксує номер та створює заявку',
    },
    {
      icon: CheckCircle,
      title: 'Створює заявки та контролює кожен пост',
      description: 'Повний контроль завантаженості в реальному часі',
    },
    {
      icon: CheckCircle,
      title: 'Рахує зарплату по KPI — без помилок',
      description: 'Автоматичний розрахунок винагороди за ефективність',
    },
    {
      icon: CheckCircle,
      title: 'Показує в реальному часі, хто працює, а хто створює збитки',
      description: 'Повна прозорість роботи персоналу',
    },
    {
      icon: CheckCircle,
      title: 'Дає повну аналітику прибутку, завантаження і втрат',
      description: 'Усі дані для прийняття правильних рішень',
    },
  ];

  return (
    <section className={css.sectionWrapper}>
      <div className={css.container}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
            className={css.sectionHeader}
        >
          <h2 className={css.sectionTitle}>Що робить CRMmech</h2>
          <p className={css.sectionSubtitle}>
            Розумна платформа з відеоаналітикою та штучним інтелектом
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className={css.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              //   className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className={css.benefitItem}>
                <div className={css.benefitIconWrapper}>
                  <benefit.icon className={css.benefitIcon} />
                </div>
                <div className={css.benefitContent}>
                  <h3 className={css.benefitTitle}>
                    {/* ✅ */}
                    {benefit.title}
                  </h3>
                  <p className={css.benefitDescription}>
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
