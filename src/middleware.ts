import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {

  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    const email = request.cookies.get('pokedex_email')?.value
      || request.headers.get('pokedex_email')           
   
    if (!email) {
      const url = request.nextUrl.clone()
      url.pathname = '/login'
      return NextResponse.redirect(url)
    }
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard'],
}