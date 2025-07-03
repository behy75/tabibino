import DoctorHomePage from "@/features/roles/doctor/pages/doctor-home-page";

export async function generateStaticParams() {
  return [{ locale: "fa" }, { locale: "en" }];
}

export default function DoctorHome() {
  return <DoctorHomePage />;
}
