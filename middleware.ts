export { withAuth as default } from "next-auth/middleware";

export const config = {
  matcher: ["/dashboard","/tickets", "/tickets/new", "/tickets/:id+"],
};
