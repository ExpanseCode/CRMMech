import styles from "./Badge.module.css";

const variantClass = {
  default: styles.default,
  secondary: styles.secondary,
  destructive: styles.destructive,
  outline: styles.outline,
};

function Badge({ className = "", variant = "default", ...props }) {
  return (
    <div
      className={`${styles.badge} ${variantClass[variant]} ${className}`}
      {...props}
    />
  );
}

export default Badge;
