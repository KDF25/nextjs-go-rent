"use client";

import {
  ROLES,
  useGetAuthUserQuery,
  useUpdateManagerSettingsMutation,
} from "@entities/user";
import { SettingsForm } from "@widgets/settingsForm";

export default function ManagerSettings() {
  const { data: authUser, isLoading } = useGetAuthUserQuery();
  const [updateManager] = useUpdateManagerSettingsMutation();

  if (isLoading) return <>Loading...</>;

  const initialData = {
    name: authUser?.userInfo?.name,
    email: authUser?.userInfo?.email,
    phoneNumber: authUser?.userInfo?.phoneNumber,
  };

  const handleSubmit = async (data: typeof initialData) => {
    await updateManager({
      cognitoId: authUser?.cognitoInfo?.userId,
      ...data,
    });
  };

  return (
    <SettingsForm
      initialData={initialData}
      onSubmit={handleSubmit}
      userType={ROLES.MANAGER}
    />
  );
}
