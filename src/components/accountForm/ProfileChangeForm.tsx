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
import { selectIsEdit, selectUser } from "@/lib/redux/user/selectors";
import { readProfile } from "@/lib/redux/user/slice";

export default function ProfileChangeForm() {
  const id = useId();
  const isEdit = useAppSelector(selectIsEdit);
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const { state } = useSidebar();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IProfileFormData>({
    defaultValues: {
      firstname: user?.firstName || "",
      lastname: user?.lastName || "",
      email: user?.email || "",
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
                    defaultValue={user?.lastName}
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
                <p>{user?.lastName || "-"}</p>
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
                    value={user?.firstName}
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
                <p>{user?.firstName || "-"}</p>
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
                    value={user?.email}
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
                <p>{user?.email}</p>
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
        <>
          <Button
            type="submit"
            size="default"
            className={cn(
              "xl2:w-[325px] xl2:self-end mt-4 w-full",
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
              "xl2:w-[325px] xl2:self-end mt-4 w-full",
              state === "expanded" ? "md:w-[325px]" : "md:w-full",
            )}
            onClick={() => dispatch(readProfile())}
          >
            Відмінити зміни
          </Button>
        </>
      )}
    </form>
  );
}
