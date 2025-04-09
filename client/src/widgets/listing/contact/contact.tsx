import { useGetAuthUserQuery } from "@entities/user";
import { PATHS } from "@shared/config";
import { Button } from "@shared/ui";
import { Phone } from "lucide-react";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface ContactProps {
  onOpenModal: () => void;
}

export const Contact: FC<ContactProps> = ({ onOpenModal }) => {
  const { data: authUser } = useGetAuthUserQuery();
  const router = useRouter();

  const handleButtonClick = () => {
    if (authUser) {
      onOpenModal();
    } else {
      router.push(PATHS.SIGNIN);
    }
  };

  return (
    <div className="bg-white border border-primary-200 rounded-2xl p-7 h-fit min-w-[300px]">
      {/* Contact Property */}
      <div className="flex items-center gap-5 p-4 mb-4 border border-primary-200 rounded-xl">
        <div className="flex items-center p-4 rounded-full bg-primary-900">
          <Phone className="text-primary-50" size={15} />
        </div>
        <div>
          <p>Contact This Property</p>
          <div className="text-lg font-bold text-primary-800">
            (424) 340-5574
          </div>
        </div>
      </div>
      <Button
        className="w-full text-white bg-primary-700 hover:bg-primary-600"
        onClick={handleButtonClick}
      >
        {authUser ? "Submit Application" : "Sign In to Apply"}
      </Button>

      <hr className="my-4" />
      <div className="text-sm">
        <div className="mb-1 text-primary-600">Language: English, Bahasa.</div>
        <div className="text-primary-600">
          Open by appointment on Monday - Sunday
        </div>
      </div>
    </div>
  );
};
