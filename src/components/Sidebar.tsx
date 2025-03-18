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
      </div>
    </div>
  );
};

export default Sidebar;
