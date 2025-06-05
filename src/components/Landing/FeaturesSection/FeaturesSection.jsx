import css from './FeaturesSection.module.css';
import ListOfExtraFeatures from './ListOfExtraFeatures/ListOfExtraFeatures.jsx';
import ListOfMainFeatures from './ListOfMainFeatures/ListOfMainFeatures.jsx';

export default function FeaturesSection() {
  return (
    <section>
      <div className={css.titleBox}>
        <p className={css.title}>Ключові можливості системи</p>
        <p className={css.descr}>
          AI-технології та автоматизація для максимальної ефективності <br />{' '}
          вашого автосервісу
        </p>
      </div>
      <ListOfMainFeatures />
      <ListOfExtraFeatures />
    </section>
  );
}
