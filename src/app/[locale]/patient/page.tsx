import PatientHomePage from "@/features/roles/patient/pages/patient-home-page";

export async function generateStaticParams() {
  return [{ locale: "fa" }, { locale: "en" }];
}

export default function PatientHome() {
  return <PatientHomePage />;
}
