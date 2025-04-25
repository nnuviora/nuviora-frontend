import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lock, Pencil, User } from "lucide-react";
import ProfileForm from "../accountForm/ProfileChangeForm";
import PasswordChangeForm from "../accountForm/PasswordChangeForm";

import { Button } from "../ui";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { editProfile } from "@/lib/redux/user/slice";
import { selectIsEdit } from "@/lib/redux/user/selectors";

export function ProfileTabs() {
  const dispatch = useAppDispatch();
  const isEdit = useAppSelector(selectIsEdit);
  const handleEdit = () => {
    dispatch(editProfile());
  };
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList className="min-h-10 w-auto flex-nowrap overflow-x-auto overflow-y-hidden">
        <TabsTrigger value="account" className="button-text h-10 px-3 py-1">
          <User size={18} color="#BDBCDB" />
          <span>Профіль</span>
        </TabsTrigger>

        <TabsTrigger value="password" className="button-text h-10 px-3 py-1">
          <Lock size={18} color="#BDBCDB" />
          <span>Зміна паролю</span>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="account">
        <div className="mb-6 flex items-center gap-8">
          <h2 className="subtitle3-text">Профіль</h2>
          {!isEdit && (
            <Button
              variant="ghost"
              className="body-text flex items-center gap-1 text-[var(--text-success)]"
              onClick={handleEdit}
            >
              <Pencil color="#BDBCDB" /> Редагувати
            </Button>
          )}
        </div>
        <ProfileForm />
      </TabsContent>

      <TabsContent value="password">
        <h2 className="subtitle3-text mb-6">Зміна паролю</h2>
        <PasswordChangeForm />
      </TabsContent>
    </Tabs>
  );
}
