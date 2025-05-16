"use client";

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import {
  Label,
  Input,
  Button,
  useSidebar,
  InputErrorMassage,
} from "@/components/ui";
import { cn } from "@/lib/utils";
import { useId } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Textarea } from "../ui/textarea";
import { ProfileSchema } from "./profileValidationSchema";
import { IProfileFormData } from "@/types";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { selectIsEdit } from "@/lib/redux/user/selectors";
import { readProfile } from "@/lib/redux/user/slice";
import { useProfile } from "@/api/tanstackReactQuery/profile/queries";
import { useUser } from "@/api/tanstackReactQuery/profile/mutations";

export default function ProfileChangeForm() {
  const id = useId();
  const isEdit = useAppSelector(selectIsEdit);
  const dispatch = useAppDispatch();
  const { data: user } = useProfile();
  const { state } = useSidebar();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IProfileFormData>({
    defaultValues: {
      first_name: user?.data.first_name || "",
      last_name: user?.data.last_name || "",
      email: user?.data.email || "",
      about: user?.data.about || "",
    },
    resolver: yupResolver(ProfileSchema),
  });
  const { editUserMutation } = useUser();

  const onSubmit: SubmitHandler<IProfileFormData> = (data) => {
    editUserMutation.mutate({
      first_name: data.first_name,
      last_name: data.last_name,
      about: data.about,
    });
    dispatch(readProfile());
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="xl2:max-w-[597px] flex w-full max-w-[450px] flex-col justify-center gap-6"
      noValidate
    >
      <Controller
        name="last_name"
        control={control}
        render={({ field }) => (
          <div
            className={cn(
              "xl2:flex-row xl2:justify-between xl2:items-center flex w-full flex-col items-start gap-1",
            )}
          >
            <Label htmlFor={`${id}+${field.name}`} className="category-text">
              Прізвище
            </Label>
            <div className={cn("xl2:w-auto relative w-full")}>
              {isEdit ? (
                <>
                  <Input
                    id={`${id}+${field.name}`}
                    {...field}
                    type="text"
                    placeholder="Шевченко"
                    className={cn(
                      "h-10 border border-solid border-[var(--stroke-field)] px-3 py-2.5 placeholder:text-[14px] placeholder:text-[var(--text-grey)]",
                      errors.last_name &&
                        "border-[var(--text-error)] bg-[var(--bg-error)]",
                      state === "expanded"
                        ? "md:w-[325px]"
                        : "xl2:w-[325px] md:w-full",
                    )}
                  />
                  {errors.last_name && (
                    <InputErrorMassage
                      message={errors.last_name.message || ""}
                    />
                  )}
                </>
              ) : (
                <p>{user?.data.last_name || "-"}</p>
              )}
            </div>
          </div>
        )}
      />

      <Controller
        name="first_name"
        control={control}
        render={({ field }) => (
          <div
            className={cn(
              "xl2:flex-row xl2:justify-between xl2:items-center flex w-full flex-col items-start gap-1",
            )}
          >
            <Label htmlFor={`${id}+${field.name}`} className="category-text">
              Ім&apos;я
            </Label>
            <div className={cn("xl2:w-auto relative w-full")}>
              {isEdit ? (
                <>
                  <Input
                    id={`${id}+${field.name}`}
                    {...field}
                    type="text"
                    placeholder="Тарас"
                    className={cn(
                      "h-10 border border-solid border-[var(--stroke-field)] px-3 py-2.5 placeholder:text-[14px] placeholder:text-[var(--text-grey)]",
                      errors.first_name &&
                        "border-[var(--text-error)] bg-[var(--bg-error)]",
                      state === "expanded"
                        ? "md:w-[325px]"
                        : "xl2:w-[325px] md:w-full",
                    )}
                  />
                  {errors.first_name && (
                    <InputErrorMassage
                      message={errors.first_name.message || ""}
                    />
                  )}
                </>
              ) : (
                <p>{user?.data.first_name || "-"}</p>
              )}
            </div>
          </div>
        )}
      />

      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <div
            className={cn(
              "xl2:flex-row xl2:justify-between xl2:items-center flex w-full flex-col items-start gap-1",
            )}
          >
            <Label htmlFor={`${id}+${field.name}`} className="category-text">
              Email
            </Label>
            <div className={cn("xl2:w-auto relative w-full")}>
              {isEdit ? (
                <>
                  <Input
                    id={`${id}+${field.name}`}
                    {...field}
                    type="text"
                    value={user?.data.email}
                    placeholder="sto.hryven@example.com"
                    className={cn(
                      "h-10 border border-solid border-[var(--stroke-field)] px-3 py-2.5 placeholder:text-[14px] placeholder:text-[var(--text-grey)]",
                      errors.email &&
                        "border-[var(--text-error)] bg-[var(--bg-error)]",
                      state === "expanded"
                        ? "md:w-[325px]"
                        : "xl2:w-[325px] md:w-full",
                    )}
                  />
                  {errors.email && (
                    <InputErrorMassage message={errors.email.message || ""} />
                  )}
                </>
              ) : (
                <p>{user?.data.email}</p>
              )}
            </div>
          </div>
        )}
      />

      <Controller
        name="about"
        control={control}
        render={({ field }) => (
          <div
            className={cn(
              "xl2:flex-row xl2:justify-between xl2:items-center flex w-full flex-col items-start gap-1",
            )}
          >
            <Label htmlFor={`${id}+${field.name}`} className="category-text">
              Про себе
            </Label>
            {isEdit ? (
              <Textarea
                id={`${id}+${field.name}`}
                {...field}
                className={cn(
                  "xl2:w-[325px] placeholder:text-[14px]",
                  state === "expanded" ? "md:w-[325px]" : "md:w-full",
                )}
                placeholder="Мені тринадцятий минало..."
              />
            ) : (
              <p>{user?.data.about}</p>
            )}
          </div>
        )}
      />

      {isEdit && (
        <div className="mt-4 flex flex-col gap-6">
          <Button
            type="submit"
            size="default"
            className={cn(
              "xl2:w-[325px] xl2:self-end w-full",
              state === "expanded" ? "md:w-[325px]" : "md:w-full",
            )}
          >
            Зберегти зміни
          </Button>

          <Button
            type="submit"
            size="default"
            variant="outline"
            className={cn(
              "xl2:w-[325px] xl2:self-end w-full",
              state === "expanded" ? "md:w-[325px]" : "md:w-full",
            )}
            onClick={() => dispatch(readProfile())}
          >
            Відмінити зміни
          </Button>
        </div>
      )}
    </form>
  );
}
