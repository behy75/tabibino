"use client";

import { Suspense } from "react";
import RoleBasedWelcome from "@/features/roles/shared/components/role-based-welcome/RoleBasedWelcome";
import LoadingSpinner from "@/shared/components/ui/loading-spinner";
import DashboardLayout from "@/features/roles/layouts/dashboard-layout/DashboardLayout";

const AdminHomePage = () => {
  return (
    <DashboardLayout namespace="admin">
      <Suspense fallback={<LoadingSpinner />}>
        <RoleBasedWelcome namespace="admin" />
      </Suspense>
    </DashboardLayout>
  );
};

export default AdminHomePage;
