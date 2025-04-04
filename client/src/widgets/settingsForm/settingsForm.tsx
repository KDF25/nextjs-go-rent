import { ROLES } from "@entities/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { SettingsFormData, settingsSchema } from "@shared/lib";
import { Button, CustomFormField, Form } from "@shared/ui";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";

interface SettingsFormProps {
  initialData: SettingsFormData;
  onSubmit: (data: SettingsFormData) => Promise<void>;
  userType: ROLES;
}

export const SettingsForm: FC<SettingsFormProps> = ({
  initialData,
  onSubmit,
  userType,
}) => {
  const [editMode, setEditMode] = useState(false);
  const form = useForm<SettingsFormData>({
    resolver: zodResolver(settingsSchema),
    defaultValues: initialData,
  });

  const toggleEditMode = () => {
    setEditMode(!editMode);
    if (editMode) {
      form.reset(initialData);
    }
  };

  const handleSubmit = async (data: SettingsFormData) => {
    await onSubmit(data);
    setEditMode(false);
  };

  return (
    <div className="px-8 pt-8 pb-5">
      <div className="mb-5">
        <h1 className="text-xl font-semibold">
          {`${userType.charAt(0).toUpperCase() + userType.slice(1)} Settings`}
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage your account preferences and personal information
        </p>
      </div>
      <div className="p-6 bg-white rounded-xl">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-6"
          >
            <CustomFormField name="name" label="Name" disabled={!editMode} />
            <CustomFormField
              name="email"
              label="Email"
              type="email"
              disabled={!editMode}
            />
            <CustomFormField
              name="phoneNumber"
              label="Phone Number"
              disabled={!editMode}
            />

            <div className="flex justify-between pt-4">
              <Button
                type="button"
                onClick={toggleEditMode}
                className="text-white bg-secondary-500 hover:bg-secondary-600"
              >
                {editMode ? "Cancel" : "Edit"}
              </Button>
              {editMode && (
                <Button
                  type="submit"
                  className="text-white bg-primary-700 hover:bg-primary-800"
                >
                  Save Changes
                </Button>
              )}
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};
