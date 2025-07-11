import { authOptions } from "@/lib/auth/utils/auth-options.utils";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
