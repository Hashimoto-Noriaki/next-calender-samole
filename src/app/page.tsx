import { NotLoginLayout } from '@/components/templates/NotLoginLayout';
import React from 'react';
import { PrimaryBtn } from "../components/atoms/PrimaryBtn";

const Home: React.FC = () => {
  return (
    <div className="relative">
      <header className = "bg-white leading-[50px] fixed top-0 left-0 right-0">
        <div className="container mx-auto flex justify-between">
          <p className="logo">スケジュール管理APP</p>
          <nav>
              <ul className="flex gap-5 text-lime-800">
                <li>ご利用方法</li>
                <li>ログイン</li>
              </ul>
          </nav>
        </div>
      </header>
      <main　className="pt-[50px] bg-gradient-to-r from-lime-100 to-lime-200 h-screen flex flex-col justify-center items-center">
        <NotLoginLayout>
        <div　className="text-center">
          <h1　className="text-7xl logo">スケジュール管理</h1>
          <p　className="pt-[10vh] text-5xl">
            お互いのスケジュールを管理するアプリです
          </p>
          <div　className="pt-[20vh]">
            <button　className="bg-lime-800 text-white p-4 text-lg rounded-lg">
            <PrimaryBtn>ログイン</PrimaryBtn>
            </button>
          </div>
        </div>
        </NotLoginLayout>
      </main>
    </div>
    // <div className="bg-gray-100 min-h-screen flex items-center justify-center">
    //   <h1 className="text-3xl font-bold underline text-center">
    //     Hello, Next.js with Tailwind CSS!
    //   </h1>
    // </div>
  );
};

export default Home;