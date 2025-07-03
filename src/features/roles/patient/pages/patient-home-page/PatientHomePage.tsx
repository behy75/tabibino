"use client";

import { Suspense } from "react";
import RoleBasedWelcome from "@/features/roles/shared/components/role-based-welcome/RoleBasedWelcome";
import LoadingSpinner from "@/shared/components/ui/loading-spinner";
import DashboardLayout from "@/features/roles/layouts/dashboard-layout/DashboardLayout";

const PatientHomePage = () => {
  return (
    <DashboardLayout namespace="patient">
      <Suspense fallback={<LoadingSpinner />}>
        <RoleBasedWelcome namespace="patient" />
      </Suspense>
    </DashboardLayout>
  );
};

export default PatientHomePage;
