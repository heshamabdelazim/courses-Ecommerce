// import { clerkMiddleware } from '@clerk/nextjs/server'

// export default clerkMiddleware()

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//     // Always run for API routes
//     '/(api|trpc)(.*)',
//   ],
// }

// ===========================================






// what happened is the following: firstly config object
//this config object has matcher when the user enter the route which is the same matcher has like this => matcher: '/about/:path*'
// True? user enter this route? Ok the middleware will function.
//middleware used for authentication and autherization before requesting sensitive data
// works first to makesure that any route the user enter, middleware works
// so if it is any /section even localhost:3000 it will redirect to sign page if you are not authenticated user
//why? config makes sure you go to a particular route based on the matcher true? then clerk middleware works
//it will get you to sign page

// Note about clerk: By default, clerkMiddleware will not protect any routes. All routes are public


import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)', '/productSection(.*)', "/"]) //this is helper from clerk
//you put inside what are public to the user, which the user can brwose without username or password 
// Note this sign (.*) it means anything after like the following '/productSection?blabla=lk'

export default clerkMiddleware((auth, request) => {
  if (!isPublicRoute(request)) {
    auth().protect()
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}












//for more details read docs => https://clerk.com/docs/references/nextjs/clerk-middleware#protect-all-routes