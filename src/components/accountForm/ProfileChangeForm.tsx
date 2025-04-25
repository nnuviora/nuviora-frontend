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
import { selectIsAuthenticated } from "@/lib/redux/auth/selectors";

export default function ProfileChangeForm() {
  const id = useId();
  const isEdit = useAppSelector(selectIsEdit);
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const { data: user } = useProfile(isAuthenticated);
  const { state } = useSidebar();

  console.log("user :>> ", user);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IProfileFormData>({
    defaultValues: {
      firstname: user?.data.first_name || "",
      lastname: user?.data.last_name || "",
      email: user?.data.email || "",
      about: "",
    },
    resolver: yupResolver(ProfileSchema),
  });

  const onSubmit: SubmitHandler<IProfileFormData> = (data) => {
    console.log(data);
    dispatch(readProfile());
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="xl2:max-w-[597px] flex w-full max-w-[450px] flex-col justify-center gap-6"
      noValidate
    >
      <Controller
        name="lastname"
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
                    value={user?.data.last_name ?? ""}
                    placeholder="Шевченко"
                    className={cn(
                      "h-10 border border-solid border-[var(--stroke-field)] px-3 py-2.5 placeholder:text-[14px] placeholder:text-[var(--text-grey)]",
                      errors.lastname &&
                        "border-[var(--text-error)] bg-[var(--bg-error)]",
                      state === "expanded"
                        ? "md:w-[325px]"
                        : "xl2:w-[325px] md:w-full",
                    )}
                  />
                  {errors.lastname && (
                    <InputErrorMassage
                      message={errors.lastname.message || ""}
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
        name="firstname"
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
                    value={user?.data.first_name ?? ""}
                    placeholder="Тарас"
                    className={cn(
                      "h-10 border border-solid border-[var(--stroke-field)] px-3 py-2.5 placeholder:text-[14px] placeholder:text-[var(--text-grey)]",
                      errors.firstname &&
                        "border-[var(--text-error)] bg-[var(--bg-error)]",
                      state === "expanded"
                        ? "md:w-[325px]"
                        : "xl2:w-[325px] md:w-full",
                    )}
                  />
                  {errors.firstname && (
                    <InputErrorMassage
                      message={errors.firstname.message || ""}
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
              <p>Про себе</p>
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
