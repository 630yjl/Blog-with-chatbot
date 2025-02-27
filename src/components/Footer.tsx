import Link from 'next/link';
import { FC } from 'react';
import { AiOutlineMenu, AiOutlineSetting } from 'react-icons/ai';
import { BsPencilSquare, BsRobot } from 'react-icons/bs';

const Footer: FC = () => {
  return (
    <footer className="flex border-t p-4 justify-between font-medium">
      <div className="flex item-conter gap-2 lg:gap-3">
        <div className="pr-1 text-sm lg:pr-2 lg:text-base">ABOUT ME</div>
        <div className="text-xs text-gray-500 lg:text-sm">
          프론트엔드 개발자 임윤정
        </div>
      </div>

      <div className="flex item-conter gap-2 lg:gap-3">
        <div className="pr-1 text-sm lg:pr-2 lg:text-base">ADMIN</div>
        <Link href="/admin">
          <AiOutlineSetting className="h-5 w-5 text-gray-500 transition-all hover:text-gray-600 lg:h-6 lg:w-6" />
        </Link>
        <Link href="/write">
          <BsPencilSquare className="h-5 w-5 text-gray-500 transition-all hover:text-gray-600 lg:h-6 lg:w-6" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
