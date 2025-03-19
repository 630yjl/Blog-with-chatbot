import { cn } from '@/utils/style';
import Link from 'next/link';
import { AiFillGithub, AiFillInstagram, AiOutlineClose } from 'react-icons/ai';
import IconButton from './IconButton';
import { useQuery } from '@tanstack/react-query';
import { createClient } from '@/utils/supabase/client';
import { FC } from 'react';

type SidebarProps = {
  close: () => void;
  isOpen: boolean;
};

const supabase = createClient();

const Sidebar: FC<SidebarProps> = ({ close, isOpen }) => {
  const { data: existingCategories } = useQuery({
    queryKey: ['category'],
    queryFn: async () => {
      const { data } = await supabase.from('Post').select('category');
      return Array.from(new Set(data?.map((d) => d.category)));
    },
  });

  return (
    <div
      className={cn(
        'absolute z-10 min-h-screen flex-col gap-6 border-r bg-white p-10 pr-6 text-base lg:relative',
        isOpen ? 'flex' : 'hidden',
      )}
    >
      <div className="flex justify-end lg:hidden">
        <IconButton Icon={AiOutlineClose} onClick={close} />
      </div>
      <Link href="/" className="w-48 font-medium text-gray-600 hover:underline">
        홈
      </Link>
      <Link
        href="/tags"
        className="w-48 font-medium text-gray-600 hover:underline"
      >
        태그
      </Link>
      {existingCategories?.map((category) => (
        <Link
          href={`/categories/${category}`}
          className="w-48 font-medium text-gray-600 hover:underline"
          key={category}
        >
          {category}
        </Link>
      ))}
      <div className="mt-10 flex item-center gap-4">
        <IconButton
          Icon={AiFillInstagram}
          component={Link}
          href="https://www.instagram.com/630yjl"
          target="_blank"
        />

        <IconButton
          Icon={AiFillGithub}
          component={Link}
          href="https://github.com/630yjl"
          target="_blank"
        />
        <img
          src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fchatbot-blog.vercel.app&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=%EB%B0%A9%EB%AC%B8%EC%9E%90&edge_flat=false"
          alt="방문자 뱃지"
          className="align-middle p-1 lg:p-2"
        />
      </div>
    </div>
  );
};

export default Sidebar;
