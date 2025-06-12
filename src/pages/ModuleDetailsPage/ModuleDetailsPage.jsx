import { Card, CardContent } from './Card/Card.jsx';
import Badge from './Badge/Badge.jsx';
import Button from './Button/Button.jsx';
import { ArrowLeft } from 'lucide-react';
import styles from './ModuleDetailsPage.module.css';
import { modules } from './Modules/Modules.jsx';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function ModuleDetailsPage() {
  const { id: moduleId } = useParams();
  const module = modules.find(m => m.id === moduleId);
  const navigate = useNavigate();

  if (!module) {
    return (
      <div className={styles.notFound}>
        <div className={styles.notFoundText}>
          <h1 className={styles.notFoundTitle}>Модуль не знайдено</h1>
          <button
            onClick={() => {
              navigate('/modules');
            }}
          >
            <Button>Повернутися до списку модулів</Button>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.pageWrapper}>
      {/* Header */}
      <div className={styles.headerWrapper}>
        <div className={styles.headerInner}>
          <div className={styles.headerContent}>
            <div className={styles.backWrapper}>
              <button
                onClick={() => {
                  navigate('/modules');
                }}
                className={styles.backWrapper}
              >
                <Button variant="ghost" size="sm" className={styles.backButton}>
                  <ArrowLeft className={styles.backIcon} />
                  <span className={styles.text}>Назад до модулів</span>
                  <span className={styles.textTablet}>Назад</span>
                </Button>
              </button>
              <div className={styles.iconAndTitle}>
                <div className={styles.iconWrapper}>
                  <module.icon className={styles.moduleIcon} />
                </div>
                <div>
                  <h1 className={styles.moduleTitle}>{module.title}</h1>
                  <p className={styles.moduleDescription}>
                    {module.description}
                  </p>
                </div>
              </div>
            </div>
            <Button
              onClick={() =>
                window.open('https://forms.gle/oShc79zDeNqAyQ5p8', '_blank')
              }
              className={styles.demoButton}
            >
              Замовити
            </Button>
          </div>
        </div>
      </div>

      {/* Module Content */}
      <div className={styles.moduleContent}>
        {/* Hero Section */}
        <div className={`${module.color} ${styles.heroSection}`}>
          <div className={styles.heroGrid}>
            <div>
              <div className={styles.roleWrapper}>
                <Badge variant="outline" className={styles.roleBadge}>
                  {module.targetRole}
                </Badge>
              </div>
              <h2 className={styles.subtitle}>{module.subtitle}</h2>
              <p className={styles.businessValue}>{module.businessValue}</p>
              <Button
                onClick={() =>
                  window.open('https://forms.gle/oShc79zDeNqAyQ5p8', '_blank')
                }
                size="lg"
                variant="secondary"
              >
                Спробувати модуль
              </Button>
            </div>
            <div className={styles.heroImageWrapper}>
              <img
                src={module.image}
                alt={`Скріншот модуля ${module.title}`}
                className={styles.heroImage}
              />
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className={styles.grid}>
          {/* Features */}
          <Card>
            <CardContent className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Основні функції</h3>
              <div className={styles.featureList}>
                {module.features.map((feature, idx) => (
                  <div key={idx} className={styles.featureItem}>
                    <span className={styles.featureText}>{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Benefits */}
          <Card>
            <CardContent className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Ключові переваги</h3>
              <div className={styles.benefitList}>
                {module.benefits.map((benefit, idx) => (
                  <div key={idx} className={styles.benefitItem}>
                    <div className={styles.benefitDot}></div>
                    <span className={styles.benefitText}>{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Problems & Solutions */}
        {module.results && (
          <Card className={styles.cardMargin}>
            <CardContent className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Вирішення проблем</h3>
              <div className={styles.resultList}>
                {module.results.map((result, idx) => (
                  <div key={idx} className={styles.resultItem}>
                    <div className={styles.resultGrid}>
                      <div className={styles.resultBlock}>
                        <h4 className={styles.problemTitle}>Проблема</h4>
                        <p className={styles.resultText}>{result.problem}</p>
                      </div>
                      <div className={styles.resultBlock}>
                        <h4 className={styles.solutionTitle}>Рішення</h4>
                        <p className={styles.resultText}>{result.solution}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Integration */}
        {module.integration && (
          <Card className={styles.cardMargin}>
            <CardContent className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Інтеграції</h3>
              <div className={styles.integrationList}>
                {module.integration.map((item, idx) => (
                  <div key={idx} className={styles.integrationItem}>
                    <div className={styles.integrationDot}></div>
                    <span className={styles.integrationText}>{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>
            Готові спробувати модуль {module.title}?
          </h2>
          <p className={styles.ctaSubtitle}>
            Замовте демо та подивіться, як цей модуль змінить роботу вашого
            автосервісу.
          </p>
          <div className={styles.ctaButtons}>
            <Button
              onClick={() =>
                window.open('https://forms.gle/oShc79zDeNqAyQ5p8', '_blank')
              }
              size="lg"
              className={styles.orderButton}
            >
              Замовити
            </Button>
            <Link href="/modules">
              <Button
                size="lg"
                variant="outline"
                className={styles.otherModulesButton}
              >
                Дивитися інші модулі
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
