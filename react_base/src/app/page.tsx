"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.page}>
      <div onClick={() => router.push("/zustand")}>zuntnad move</div>
    </div>
  );
}
