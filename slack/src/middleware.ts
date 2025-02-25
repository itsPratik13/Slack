import { convexAuthNextjsMiddleware , createRouteMatcher,nextjsMiddlewareRedirect,isAuthenticatedNextjs} from "@convex-dev/auth/nextjs/server";

const isPublicPage=createRouteMatcher(["/auth"])
 
export default convexAuthNextjsMiddleware((req)=>{
    if(!isPublicPage(req) &&  !isAuthenticatedNextjs()){
        return nextjsMiddlewareRedirect(req,"/auth")

    }
});
 
export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};