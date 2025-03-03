'use client';

import { createClient } from '@/utils/supabase/server';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

type PostProps = {
  id: string;
};
export default function Post({ id }: PostProps) {
  return (
    <div className="flex">
      <h1>DUMMY POST {id}</h1>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  query,
  req,
}) => {
  const { id } = query;

  const supabase = createClient(req.cookies);

  const response = supabase.from('Post').select('*');
  console.log(response);

  return {
    props: {
      id,
    },
  };
};
