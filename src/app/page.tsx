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
    <div>
      コード：https://github.com/NagaJun1/sample_next_js_app
    </div>
    <div>
      パネル一覧は、「オフィス検索」押下で、画面遷移
    </div>
  </div>);
}
