import ClientComponent from "./client-component";
import styles from "./page.module.css";
import ServerComponent from "./server-components";

export default function Home() {
  return (
    <div className={styles.page}>
      Index 페이지
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}
