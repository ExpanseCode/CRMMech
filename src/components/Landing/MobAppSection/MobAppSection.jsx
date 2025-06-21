import {
  Smartphone,
  Camera,
  Wrench,
  ClipboardList,
  Package,
} from 'lucide-react';
import css from './MobAppSection.module.css';
import mobileCamera from '../../../assets/images/mobile-camera.png';
import mobileDiagnostics from '../../../assets/images/mobile-diagnostics.png';
import mobileService from '../../../assets/images/mobile-service.png';
import mobileParts from '../../../assets/images/mobile-parts.png';

export default function MobAppSection() {
  const mobileFeatures = [
    {
      icon: Camera,
      title: 'Фотофіксація авто',
      description: 'Швидке фото пошкоджень та стану автомобіля з мобільного',
      image: mobileCamera,
      stats: '53 846 ₴ заробітку',
    },
    {
      icon: Wrench,
      title: 'Мобільна діагностика',
      description:
        'Проведення діагностики та фіксація результатів прямо з телефону',
      image: mobileDiagnostics,
      stats: 'CA8876CO - номер в роботі',
    },
    {
      icon: ClipboardList,
      title: 'Управління роботами',
      description: 'Контроль хода робіт, оновлення статусів завдань',
      image: mobileService,
      stats: 'Ходова, підвіска, гальма',
    },
    {
      icon: Package,
      title: 'Облік запчастин',
      description: 'Сканування, замовлення та контроль запасних частин',
      image: mobileParts,
      stats: '7 позицій в роботі',
    },
  ];
  return (
    <section id="app" className={css.sectionWrapper}>
      <div className={css.container}>
        <div className={css.sectionHeader}>
          <div className={css.headerBtn}>
            <Smartphone className={css.smartPhoneIcon} />
            Мобільний додаток
          </div>
          <h2 className={css.sectionTitle}>Мобільний додаток автомеханіка</h2>
          <p className={css.sectionSubtitle}>
            Всі дані з додатку миттєво потрапляють у CRMmech
          </p>
        </div>

        <div className={css.featuresGrid}>
          {mobileFeatures.map((feature, index) => (
            <div
              key={index}
              className={`${css.featureItem} ${
                index % 2 === 1 ? css.featureReverse : ''
              }`}
            >
              {/* Text Content */}
              <div className={css.featureTextBlock}>
                <div className={css.featureHeader}>
                  <div className={css.featureIconWrapper}>
                    <feature.icon className={css.featureIcon} />
                  </div>
                  <div>
                    <h3 className={css.featureTitle}>{feature.title}</h3>
                    <p className={css.featureDescription}>
                      {feature.description}
                    </p>
                  </div>
                </div>

                <div className={css.featureStats}>
                  <p className={css.featureStatsText}>📱 {feature.stats}</p>
                </div>

                <div className={css.featureTags}>
                  <span className={css.featureFirstTag}>
                    🔐 Тільки для клієнтів CRMmech
                  </span>
                  <span className={css.featureSecondTag}>Офлайн режим</span>
                </div>
              </div>

              {/* Mobile Screenshot */}
              <div className={css.featureImageBlock}>
                <div className={css.imageContainer}>
                  <img
                    src={feature.image}
                    alt={`${feature.title} - мобільний додаток CRMmech`}
                    className={css.featureImage}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile App CTA */}
        <div className={css.mobileAppCTA}>
          <h3 className={css.CTATitle}>
            🔐 Ексклюзивний мобільний додаток для клієнтів CRMmech
          </h3>
          <p className={css.CTASubtitle}>
            Мобільний додаток механіка доступний тільки клієнтам CRMmech. Після
            підключення ви отримуєте особисті доступи до додатку для вашої
            команди.
          </p>
          <div className={css.accessInstructions}>
            <h4 className={css.instructionsTitle}>📱 Як отримати доступ:</h4>
            <ul className={css.instructionsList}>
              <li>1. Підключіться до CRMmech (будь-який тариф)</li>
              <li>2. Отримайте особисті логіни для кожного механіка</li>
              <li>3. Завантажте додаток за нашим посиланням</li>
              <li>4. Увійдіть з наданими доступами</li>
            </ul>
          </div>
          <div className={css.appUnavailable}>
            <p className={css.appUnavailableText}>
              ⚠️ Додаток недоступний в App Store або Google Play
            </p>
            <p className={css.appUnavailableNote}>
              Ми надаємо прямі посилання для завантаження тільки нашим клієнтам
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
