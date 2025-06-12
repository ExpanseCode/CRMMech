import { useNavigate } from 'react-router-dom';
import css from './ListOfModules.module.css';
import {
  ArrowLeft,
  Monitor,
  Calendar,
  Settings,
  Package,
  HelpCircle,
} from 'lucide-react';

export default function ListOfModules(params) {
  const modules = [
    {
      id: 'monitoring',
      title: 'Моніторинг',
      icon: Monitor,
      //   image: monitoringImage,
      description: 'Центр управління автосервісом у реальному часі',
      subtitle:
        'Все — на одному екрані: відео з камер, аналітика, заявки, завантаження постів, статуси авто',
      targetRole: 'Для власників та менеджерів',
      businessValue: 'Повний контроль автобізнесу без виходу з офісу',
      features: [
        '🎥 Розпізнавання номерів та фіксація заїзду',
        '📊 Графік машинозаїздів і завантаження',
        '🧑‍🔧 Візуальна присутність на постах',
        '📅 Календар і перегляд по днях',
        '🚘 Список авто в обробці з фото, статусом і VIN',
      ],
      benefits: [
        'Прозорість: керівник бачить все без дзвінків',
        'Швидкість реакції: будь-яке відхилення видно одразу',
        'Контроль завантаженості в реальному часі',
        'Аналітика + дія без перемикання між модулями',
      ],
      color: ' linear-gradient( to bottom right,  #3b82f6,  #2563eb)',
      textColor: 'text-white',
      bgClass: 'bg-blue-50',
      borderClass: 'border-blue-200',
    },
    {
      id: 'planner',
      title: 'Планувальник',
      icon: Calendar,
      //   image: plannerImage,
      description:
        'Календарна сітка і drag-and-drop управління майстрами, записами і постами',
      subtitle: 'Повна заміна Excel і "усного планування"',
      targetRole: 'Для диспетчерів та адміністраторів',
      businessValue: 'Планувальник в стилі "виробничої лінії"',
      features: [
        '📅 Запис на час, дату, пост',
        "🧑‍🔧 Прив'язка до працівника",
        '⚡ Миттєва зміна розкладу — без дзвінків',
        '📋 Drag-and-drop планування робіт',
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
      color: 'linear-gradient( to bottom right,  #22c55e,  #059669)',
      textColor: 'text-white',
      bgClass: 'bg-green-50',
      borderClass: 'border-green-200',
    },
    {
      id: 'inwork',
      title: 'В роботі',
      icon: Settings,
      //   image: inWorkImage,
      description:
        'Панель керівника, де видно весь ланцюг обробки кожного авто: від звернення до ремонту і оплати',
      subtitle:
        'Вся інформація — на одному табло. Прямий контроль продуктивності',
      targetRole: 'Для менеджерів та власників',
      businessValue: 'Прозорість процесів = збільшення прибутку',
      features: [
        '📊 Заявки сортуються по статусах: діагностика / ремонт / КП / готово',
        '⏱️ Видно етапи, час, суми, хто відповідальний',
        '🚨 Контроль просрочених або завислих заявок',
        '💰 Інтеграція з KPI та обліком витрат',
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
      color: 'linear-gradient( to bottom right,  #a855f7,  #4f46e5)',
      textColor: 'text-white',
      bgClass: 'bg-purple-50',
      borderClass: 'border-purple-200',
    },
    {
      id: 'accounting',
      title: 'Облік',
      icon: Package,
      //   image: acco/untingImage,
      description: 'Повна аналітика запчастин, рухів, продажів і повернень',
      subtitle: 'Кожна деталь має свою історію, як на складі, так і по авто',
      targetRole: 'Для бухгалтерів та адміністраторів',
      businessValue: 'Автоматизація обліку економить 15+ годин на тиждень',
      features: [
        '🧾 Замовлення → продаж → повернення',
        '🔁 Переміщення між складами',
        '📉 Списання, переоцінка, інвентаризація',
        '💰 Аналітика прибутку та втрат по кожній деталі',
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
      color: 'linear-gradient( to bottom right,  #f97316,  #dc2626)',
      textColor: 'text-white',
      bgClass: 'bg-orange-50',
      borderClass: 'border-orange-200',
    },
    {
      id: 'support',
      title: 'Технічна підтримка',
      icon: HelpCircle,
      //   image: supportImage,
      description: 'Звернення в техпідтримку — безпосередньо з системи',
      subtitle: 'Підтримка вбудована в CRM — все фіксується, все на контролі',
      targetRole: 'Для всіх користувачів системи',
      businessValue: 'Швидке вирішення проблем = безперебійна робота',
      features: [
        '📝 Тема, відділ, пріоритет',
        '📎 Поле опису + кнопка "Додати скрін"',
        '🏢 Вибір між техпідтримкою, інтеграцією, питанням по оплаті',
      ],
      benefits: [
        'У 2 кліки — звернення в системі',
        'Все структуровано, по суті й з історією',
        'Пріоритет = реакція вчасно',
        'Приватно і прямо з інтерфейсу',
      ],
      color: 'linear-gradient( to bottom right,  #4b5563,  #334155)',
      textColor: 'text-white',
      bgClass: 'bg-gray-50',
      borderClass: 'border-gray-200',
    },
  ];

  const navigate = useNavigate();

  return (
    <div>
      <ul className={css.list}>
        {modules.map((item, index) => (
          <li key={index} className={css.listItem}>
            <div
              className={css.topPart}
              style={{ background: `${item.color}` }}
            >
              <div className={css.iconsPart}>
                <span className={css.iconBox}>
                  <item.icon className={css.icon} />
                </span>
                <span className={css.moduleNum}>Модуль {index + 1}</span>
              </div>
              <p className={css.title}>{item.title}</p>
              <p className={css.description}>{item.description}</p>
            </div>
            <div className={css.bottomPart}>
              <span className={css.targetRole}>{item.targetRole}</span>
              <p className={css.businessValue}>{item.businessValue}</p>
              <div className={css.functionsBox}>
                <p className={css.mainFunctions}>Основні функції:</p>
                <ul className={css.featuresList}>
                  {item.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className={css.featuresListItem}>
                      <p className={css.feature}>{feature}</p>
                    </li>
                  ))}
                </ul>
                {item.features.length > 3 && (
                  <div className={css.otherFunctions}>
                    +{item.features.length - 3} інших функцій
                  </div>
                )}
              </div>

              <button
                type="button"
                className={css.btnMore}
                onClick={() => {
                  navigate(`/modules/:${item.id}`);
                }}
              >
                Детальніше
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
