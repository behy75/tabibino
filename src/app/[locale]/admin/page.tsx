import AdminHomePage from "@/features/roles/admin/pages/admin-home-page";

export async function generateStaticParams() {
  return [{ locale: "fa" }, { locale: "en" }];
}

export default function AdminHome() {
  return <AdminHomePage />;
}
