import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {    
    const path = request.nextUrl.pathname;
    const isLoggedIn = (request.cookies.get('loggedIn')?.value || 'false') == 'true';

    if (!isLoggedIn && path=="/login" ) {
        return NextResponse.next();
    }
    else if(isLoggedIn && path=="/login"){
        return NextResponse.redirect(new URL('/', request.nextUrl));
    }
    else if(isLoggedIn && (path=="/post" || path.startsWith("/post/update/"))){
        return NextResponse.next();
    }
    else{
        return NextResponse.redirect(new URL('/login', request.nextUrl));
    }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/login','/post','/post/update/:id*'],
}