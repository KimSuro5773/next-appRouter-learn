import ClientComponent from "@/components/client-component";
import ServerComponent from "@/components/server-components";
import styles from "./page.module.css";

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
