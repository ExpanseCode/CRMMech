import css from './OtherFunctions.module.css';

export default function OtherFunctions(params) {
  const functions = [
    {
      title: '📱 Мобільний додаток для механіків',
      text: 'Фотофіксація, статуси, чек-листи, VIN-розпізнавання',
    },
    {
      title: '💰 Фінансова аналітика',
      text: 'Скільки заробив кожен майстер, з якого авто яка маржа',
    },
    {
      title: '⚡ Автонарахування зарплат',
      text: 'KPI + час = бонус',
    },
    {
      title: '🔗 Інтеграція з постачальниками',
      text: 'Замовлення запчастин прямо із заявки',
    },
    {
      title: '📊 Рейтинг і рекомендації',
      text: 'Бачите, хто з команди працює ефективніше',
    },
    {
      title: '🎯 Що ви отримуєте',
      text: 'Прозорість, ефективність, контроль, прибуток',
    },
  ];
  return (
    <div className={css.otherFunctionsWrapper}>
      <p className={css.mainTitle}>🔗 Інші функції системи</p>
      <ul className={css.list}>
        {functions.map((Item, index) => (
          <li key={index} className={css.listItem}>
            <p className={css.title}>{Item.title}</p>
            <p className={css.text}>{Item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
