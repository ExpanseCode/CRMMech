import monitoring1x from '../../../assets/images/TabScreen1x.webp';
import monitoring2x from '../../../assets/images/TabScreen2x.webp';
import plannerImage from '../../../assets/planner.png';
import inWorkImage from '../../../assets/analytics.png';
import accountingImage from '../../../assets/accountingImage.png';
import {
  Monitor,
  Calendar,
  Settings,
  Package,
  HelpCircle,
} from 'lucide-react';
import styles from './Modules.module.css';

export const modules = [
  {
    id: 'monitoring',
    title: 'Моніторинг',
    icon: Monitor,
    image1x: monitoring1x,
    image2x: monitoring2x,
    description:
      'Центр управління реальним часом для власника та керівника СТО',
    subtitle: 'Відеоаналітика + контроль + дії персоналу в одному екрані',
    targetRole: 'Для власників та менеджерів',
    businessValue: 'Повний контроль автобізнесу без виходу з офісу',
    features: [
      '🎥 Відеоспостереження з AI розпізнаванням номерів',
      '📊 Живі аналітичні панелі завантаженості',
      '📆 Інтерактивний календар машинозаїздів',
      '🚘 Живий список авто на території СТО',
    ],
    benefits: [
      'Прозорість: керівник бачить все без дзвінків',
      'Швидкість реакції: будь-яке відхилення видно одразу',
      'Контроль завантаженості в реальному часі',
      'Аналітика + дія без перемикання між модулями',
    ],
    color: styles.monitoringColor,
    bgClass: styles.monitoringBg,
    borderClass: styles.monitoringBorder,
  },
  {
    id: 'planner',
    title: 'Планувальник',
    icon: Calendar,
    image: plannerImage,
    description: 'Централізоване управління завантаженням СТО',
    subtitle: 'День за днем, пост за постом — чіткий план роботи',
    targetRole: 'Для диспетчерів та адміністраторів',
    businessValue: 'Ефективне планування збільшує прибуток на 30%',
    features: [
      '📥 Автоматична сортування заявок по категоріях',
      '🧑‍🔧 Дошка заявок (канбан) з повною інформацією',
      '📅 Календар і таймлайн завантаженості',
      "📌 Прив'язка до майстра/зони/часу",
    ],
    benefits: [
      'Мінус 90% дзвінків: все в системі',
      '+30% швидше обслуговування',
      'Повний контроль без Excel чи паперів',
      'Drag-and-drop переміщення завдань',
    ],
    results: [
      {
        problem: 'Майстри затримують авто',
        solution: 'План по годинах, видно кожну затримку',
      },
      {
        problem: 'Перевантаження постів',
        solution: 'Балансування навантаження візуально',
      },
      {
        problem: 'Клієнти не записані',
        solution: 'Швидке створення запису + SMS-нагадування',
      },
    ],
    color: styles.plannerColor,
    bgClass: styles.plannerBg,
    borderClass: styles.plannerBorder,
  },
  {
    id: 'inwork',
    title: 'В роботі',
    icon: Settings,
    image: inWorkImage,
    description: 'Повна картина поточних процесів на СТО',
    subtitle: 'Центральний хаб для контролю всіх етапів роботи',
    targetRole: 'Для менеджерів та власників',
    businessValue: 'Прозорість процесів = збільшення прибутку',
    features: [
      '📊 Панель статусів з кількістю авто в обробці',
      '🚗 Список автомобілів у роботі з деталями',
      '🔍 Фільтрація за датами, статусами, VIN',
      '💰 Контроль прибутку в реальному часі',
    ],
    benefits: [
      'Зменшення хаосу в операційці',
      "Економія часу на пояснення 'де авто?'",
      'Чіткий облік прибутку та виконаних робіт',
      'Менше дзвінків → більше керування',
    ],
    results: [
      {
        problem: "Неможливо побачити 'вузьке горло'",
        solution: 'Весь ланцюг — перед очима',
      },
      {
        problem: 'Складно відслідковувати оплату',
        solution: 'CRMmech фіксує, хто оплатив, а хто ні',
      },
      {
        problem: 'Незрозуміло, хто що робить',
        solution: 'Кожен майстер має статус задач',
      },
    ],
    color: styles.inworkColor,
    bgClass: styles.inworkBg,
    borderClass: styles.inworkBorder,
  },
  {
    id: 'accounting',
    title: 'Облік',
    icon: Package,
    image: accountingImage,
    description: 'Повний контроль обліку запчастин та продажів',
    subtitle: "Замінює Excel, 1С та 'зошит на складі'",
    targetRole: 'Для бухгалтерів та адміністраторів',
    businessValue: 'Автоматизація обліку економить 15+ годин на тиждень',
    features: [
      '📄 Діагностика → Замовлення → Продаж',
      '🔁 Повернення та обґрунтування з причинами',
      '🔄 Переміщення між складами',
      '🧮 Переоцінка та інвентаризація',
      '❌ Списання з повною фіксацією',
    ],
    benefits: [
      'Повна історія кожної деталі',
      'Кожне повернення з коментарем',
      'Фіксація по вартості і причині',
      'Автоматичні звіти і аналіз маржі',
    ],
    integration: [
      'Можливість інтеграції з 1С або постачальниками',
      'Дані синхронізуються з заявками, KPI, зарплатами',
    ],
    color: styles.accountingColor,
    bgClass: styles.accountingBg,
    borderClass: styles.accountingBorder,
  },
  {
    id: 'support',
    title: 'Технічна підтримка',
    icon: HelpCircle,
    image: accountingImage,
    description: "Швидкий зв'язок із підтримкою прямо з інтерфейсу",
    subtitle: 'Без дзвінків, месенджерів чи пошуку email',
    targetRole: 'Для всіх користувачів системи',
    businessValue: 'Швидке вирішення проблем = безперебійна робота',
    features: [
      '📝 Тема повідомлення з коротким описом проблеми',
      '🏢 Вибір відділу (технічна, бухгалтерія, інтеграції)',
      '⚡ Пріоритет (низький/середній/високий)',
      '📎 Прикріплення скріншотів для діагностики',
    ],
    benefits: [
      'У 2 кліки — звернення в системі',
      'Все структуровано, по суті й з історією',
      'Пріоритет = реакція вчасно',
      'Приватно і прямо з інтерфейсу',
    ],
    color: styles.supportColor,
    bgClass: styles.supportBg,
    borderClass: styles.supportBorder,
  },
];
