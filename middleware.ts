import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const protectedRoute = createRouteMatcher([
  "/",
  "/upcoming",
  "/meeting(.*)",
  "/previous",
  "/recordings",
  "/personal-room",
]);

export default clerkMiddleware(async (auth, req) => {
  const authObject = await auth(); // ✅ Await auth() first
  const { userId, redirectToSignIn } = authObject; // ✅ Now destructure

  if (protectedRoute(req) && !userId) {
    return redirectToSignIn(); // ✅ Redirect to sign-in if not authenticated
  }
});

export const config = {
  matcher: [
    "/((?!_next|.*\\.(?:ico|png|svg|jpg|jpeg|gif|webp|css|js|woff2?|ttf|csv|docx|xlsx|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
