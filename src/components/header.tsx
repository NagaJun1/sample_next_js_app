import { Bars3Icon, ChatBubbleLeftIcon, MagnifyingGlassIcon, UserIcon } from '@heroicons/react/24/outline';
import { Drawer } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';

// アイコンには、heroicons を使用
// https://www.npmjs.com/package/@heroicons/react

/** ヘッダーコンポーネント */
export const Header = () => {

  /** 画面サイズが大きいなら、横並び */
  return <div className={'lg:flex bg-gray-100'}>
    <Link href={'/'}>
      <img alt=''
        className='h-20'
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaaqwz0I567krDoETgq1jKF45jN1jhfPn6apVZMIbMcd8SGeg&s' />
    </Link>

    {/* 画面サイズが大きいなら、lg: で右に寄せる */}
    <div className={'lg:min-w-[600px] lg:ml-auto'}>
      <Menus />
    </div>
  </div>;
}

const Menus = () => {

  const [drawerOpen, setDrawerOpen] = useState(false);

  return <>
    <div className="grid grid-flow-col justify-stretch mb-2">
      <MenuPanel label={'オフィス検索'}
        link='/offices'
        Icon={() => {
          return <MagnifyingGlassIcon className='h-10 mx-auto' />;
        }} />

      <MenuPanel label={'問い合わせ'}
        className="border-x border-black"
        link='/inquiry'
        Icon={() => {
          return <ChatBubbleLeftIcon className='h-10 mx-auto' />;
        }} />

      <MenuPanel label={'マイページ'}
        className="border-r border-black"
        link='/mypage'
        Icon={() => {
          return <UserIcon className='h-10 mx-auto' />;
        }} />

      {/* ↓ ドロワー表示したい TODO */}
      <MenuPanelButton label={'メニュー'}
        className=''
        onClick={() => setDrawerOpen(true)}
        Icon={() => <Bars3Icon className='h-10 mx-auto' />} />
    </div>
    <MenuDrawer open={drawerOpen} setOpen={setDrawerOpen} />
  </>;
}

type MenuPanelProps = {
  Icon: () => React.ReactElement;
  className?: string;
  label: string;
  link: string;
}

const MenuPanel = ({ Icon, label, className, link }: MenuPanelProps) => {
  return <Link
    href={link}
    className={"py-2 text-xl text-center bg-sky-100 " + (className ?? '')}>
    <Icon />
    <div>{label}</div>
  </Link>
}

type MenuPanelButtonProps = {
  Icon: () => React.ReactElement;
  className?: string;
  label: string;
  onClick: () => void;
}

const MenuPanelButton = ({ Icon, label, className, onClick }: MenuPanelButtonProps) => {
  return <button
    onClick={onClick}
    className={"py-2 text-xl text-center bg-sky-100 " + (className ?? '')}>
    <Icon />
    <div>{label}</div>
  </button>
}

type MenuDrawerProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
}

// ドロワーは、material ui を採用
const MenuDrawer = ({ open, setOpen }: MenuDrawerProps) => {

  const items = [{
    label: 'アイテム１（仮置き）'
  }, {
    label: 'アイテム２（仮置き）'
  }];

  return <Drawer
    open={open} onClose={() => setOpen(false)}>
    {items.map(({ label }, index) => {
      return <button key={index}
        className='text-xl m-1 p-2 bg-slate-200'
        onClick={() => { alert('onClick()' + label) }}>
        {label}
      </button>;
    })}
  </Drawer>;
}