/* eslint-disable @typescript-eslint/no-unused-vars */
import { cva } from '@/utils/style';
import '@/styles/globals.css';
import { useQuery } from '@tanstack/react-query';
import { createClient } from '@/utils/supabase/client';
import PostCard from '@/components/PostCard';

const supabase = createClient();

const button = cva('flex ');
export default function Home() {
  const { data: posts } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const { data } = await supabase
        .from('Post')
        .select('*')
        .order('created_at', { ascending: false });
      if (!data) return [];
      return data;
    },
  });
  return (
    <div className="container mx-auto grid grid-cols-2 gap-x-4 gap-y-6 lg:gap-x-7 lg:gap-y-12 px-4 pb-24 pt-20">
      {posts?.map((post) => <PostCard key={post.id} {...post} />)}
    </div>
  );
}
