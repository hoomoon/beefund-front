// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Rota pública
  if (pathname === '/beefund-institutional' || pathname.startsWith('/beefund-institutional/')) {
    return NextResponse.next()
  }

  // Permite _next, API routes e assets (arquivos com extensão)
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // Qualquer outra rota: redireciona para /beefund-institutional
  const url = request.nextUrl.clone()
  url.pathname = '/beefund-institutional'
  return NextResponse.redirect(url)
}

// Aplica o middleware em todas as rotas
export const config = {
  matcher: '/:path*',
}
