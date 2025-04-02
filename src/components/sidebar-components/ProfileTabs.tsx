import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lock, MapPinned, User } from "lucide-react";
import ProfileForm from "../account/ProfileForm";
import PasswordChangeForm from "../account/PasswordChangeForm";
import AddressChangeForm from "../account/AddressChangeForm";

export function ProfileTabs() {
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList className="min-h-10 w-full flex-nowrap overflow-x-auto overflow-y-hidden">
        <TabsTrigger value="account" className="button-text h-10 px-3 py-2">
          <User size={18} color="#BDBCDB" />
          <span>Профіль</span>
        </TabsTrigger>
        <TabsTrigger value="password" className="button-text h-10 px-3 py-2">
          <Lock size={18} color="#BDBCDB" />
          <span>Зміна паролю</span>
        </TabsTrigger>
        <TabsTrigger value="address" className="button-text h-10 px-3 py-2">
          <MapPinned size={18} color="#BDBCDB" />
          <span>Моя адреса</span>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <h2 className="subtitle3-text mb-6">Профіль</h2>
        <ProfileForm />
      </TabsContent>
      <TabsContent value="password">
        <h2 className="subtitle3-text mb-6">Зміна паролю</h2>
        <PasswordChangeForm />
      </TabsContent>
      <TabsContent value="address">
        <h2 className="subtitle3-text mb-6">Моя адреса</h2>
        <AddressChangeForm />
      </TabsContent>
    </Tabs>
  );
}
