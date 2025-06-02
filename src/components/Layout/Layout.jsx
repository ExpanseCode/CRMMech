import css from './Layout.module.css';
import { useLocation } from 'react-router-dom';

export default function Layout({ children }) {

  return <div className={css.appContainer}>{children}</div>;
}
