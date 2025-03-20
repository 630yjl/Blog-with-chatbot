'use client';

import { MarkdownViewer } from '@/components/Markdown';
import type { Post } from '@/types';
import { createClient } from '@/utils/supabase/server';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

type PostProps = Post;

export default function Post({
  id,
  title,
  category,
  tags,
  content,
  created_at,
  preview_image_url,
}: PostProps) {
  return (
    <div className="container flex flex-col pb-40 pt-20 gap-8">
      <h1 className="text-4xl font-bold">{title}</h1>
      <div className="flex flex-row items-center gap-2">
        <Link
          href={`/categories/${category}`}
          className="rounded-md bg-slate-800 px-2 py-1 text-sm text-white"
        >
          {category}
        </Link>
        {tags.map((tag) => (
          <Link
            href={`/tags/${tag}`}
            key={tag}
            className="rounded-md bg-slate-200 px-2 py-1 text-sm text-slate-800"
          >
            {tag}
          </Link>
        ))}

        <div className="text-sm text-gray-500">
          {new Date(created_at).toLocaleDateString()}
        </div>
      </div>
      {preview_image_url && (
        <Image
          src={preview_image_url}
          alt={title}
          className="h-auto w-full"
          width={0}
          height={0}
          sizes="100vw"
        />
      )}
      <MarkdownViewer source={content} className="min-w-full" />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  query,
  req,
}) => {
  const { id } = query;

  const supabase = createClient(req.cookies);

  const { data } = await supabase.from('Post').select('*').eq('id', Number(id));

  if (!data || !data[0]) return { notFound: true };

  const { title, category, tags, content, created_at, preview_image_url } =
    data[0];

  return {
    props: {
      id,
      title,
      category,
      tags: JSON.parse(tags),
      content,
      created_at,
      preview_image_url,
    },
  };
};
