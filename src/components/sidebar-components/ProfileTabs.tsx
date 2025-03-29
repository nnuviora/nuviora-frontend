import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lock, User } from "lucide-react";
import ProfileForm from "../account/ProfileForm";
import PasswordChangeForm from "../account/PasswordChangeForm";

export function ProfileTabs() {
  return (
    <Tabs defaultValue="account" className="w-[597px]">
      <TabsList className="mb-6 grid w-full grid-cols-2">
        <TabsTrigger value="account" className="button-text h-10 px-3 py-2">
          <User size={18} />
          <span className="self-baseline">Профіль</span>
        </TabsTrigger>
        <TabsTrigger value="password" className="button-text h-10 px-3 py-2">
          <Lock size={18} />
          <span className="self-baseline">Зміна паролю</span>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <h2 className="subtitle3-text mb-5">Профіль</h2>
        <ProfileForm />
      </TabsContent>
      <TabsContent value="password">
        <h2 className="subtitle3-text mb-5">Зміна паролю</h2>
        <PasswordChangeForm />
      </TabsContent>
    </Tabs>
  );
}
