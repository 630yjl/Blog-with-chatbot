import { Database } from '@/types/supabase';
import { createServerClient } from '@supabase/ssr';
// import { cookies as nextCookies } from 'next/headers';

export const createClient = (cookies: Partial<{ [key: string]: string }>) => {
  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        // 모든 쿠키를 배열 형태로 반환합니다.
        getAll() {
          return Object.entries(cookies).map(([name, value]) => ({
            name,
            value: value ?? '',
          }));
        },
        // 쿠키 배열을 받아 cookieJar에 일괄 설정합니다.
        // setAll(cookiesArray: Array<{ name: string; value: string }>) {
        //   cookiesArray.forEach(({ name, value }) => {
        //     cookies[name] = value;
        //   });
        // },
      },
    },
  );
};
