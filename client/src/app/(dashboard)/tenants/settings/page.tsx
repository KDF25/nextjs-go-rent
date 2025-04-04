"use client";

import {
  ROLES,
  useGetAuthUserQuery,
  useUpdateTenantSettingsMutation,
} from "@entities/user";
import { SettingsForm } from "@widgets/settingsForm";

export default function TenantSettings() {
  const { data: authUser, isLoading } = useGetAuthUserQuery();
  const [updateTenant] = useUpdateTenantSettingsMutation();

  if (isLoading) return <>Loading...</>;

  const initialData = {
    name: authUser?.userInfo?.name,
    email: authUser?.userInfo?.email,
    phoneNumber: authUser?.userInfo?.phoneNumber,
  };

  const handleSubmit = async (data: typeof initialData) => {
    await updateTenant({
      cognitoId: authUser?.cognitoInfo?.userId,
      ...data,
    });
  };

  return (
    <SettingsForm
      initialData={initialData}
      onSubmit={handleSubmit}
      userType={ROLES.TENANT}
    />
  );
}
