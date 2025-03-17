import { NextRequest, NextResponse } from 'next/server';
import { createClient } from './utils/supabase/middleware';

export async function middleware(request: NextRequest) {
  const { supabase, response } = createClient(request);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user?.role !== 'authenticated')
    return NextResponse.redirect(new URL('/admin', request.url));

  return response;
}

//미들웨어 로직 실행 조건
export const config = {
  matcher: '/write',
};
