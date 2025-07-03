import LoginPage from "@/features/auth/pages/login-page";

export async function generateStaticParams() {
  return [{ locale: "fa" }, { locale: "en" }];
}

export default function Login() {
  return <LoginPage />;
}
