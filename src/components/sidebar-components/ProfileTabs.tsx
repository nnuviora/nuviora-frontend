import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lock, User } from "lucide-react";
import ProfileForm from "../account/ProfileForm";
import PasswordChangeForm from "../account/PasswordChangeForm";

export function ProfileTabs() {
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList className="mb-5 min-h-10 w-full flex-nowrap overflow-x-auto overflow-y-hidden">
        <TabsTrigger value="account" className="button-text h-10 px-3 py-2">
          <User size={18} color="#BDBCDB" />
          <span>Профіль</span>
        </TabsTrigger>
        <TabsTrigger value="password" className="button-text h-10 px-3 py-2">
          <Lock size={18} color="#BDBCDB" />
          <span>Зміна паролю</span>
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
