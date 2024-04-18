"use client"; // This is a client component

import { Header } from "@/components/header";

export default function Home() {
  return (<div>
    <div className="sticky top-0 ">
      <Header />
    </div>
    <div className="text-xl p-4">
      ホーム画面
    </div>
  </div>);
}
