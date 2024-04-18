"use client"; // This is a client component

import { Header } from "@/components/header";

const Page = () => {
  return (<div>
    <div className="sticky top-0 ">
      <Header />
    </div>
    <div className="p-4 text-xl">
      問い合わせ画面
    </div>
  </div>);
}

export default Page;