import { Mail } from "lucide-react";
import { Button, Input, InputErrorMassage } from "@components/ui";
import { object, ObjectSchema, string } from "yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { cn } from "@lib/utils";
import { IPasswordRecoveryEmail } from "@/types";
import { closeModal, openModal } from "@lib/redux/toggleModal/slice";
import { AppDispatch } from "@lib/redux/store";
import { useDispatch } from "react-redux";

const useAppDispatch: () => AppDispatch = useDispatch;

const passwordRecoverySchema: ObjectSchema<IPasswordRecoveryEmail> =
  object().shape({
    email: string().email("Invalid email").required("Email is required"),
  });

export const PasswordRecoveryFormEmail = () => {
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IPasswordRecoveryEmail>({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(passwordRecoverySchema),
    mode: "onSubmit",
  });

  const onSubmit: SubmitHandler<IPasswordRecoveryEmail> = (data) => {
    alert(`Email: ${data.email}`);
    dispatch(closeModal("isPasswordRecoveryEmail"));
    dispatch(openModal("isPasswordRecoveryPassword"));
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4"
      noValidate
    >
      <div className="relative w-full">
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <div
              className={cn(
                "flex items-center gap-2 rounded-lg border border-[var(--stroke-field)] bg-[var(--white)] px-3 py-2 transition focus-within:ring-2 focus-within:ring-blue-500",
                errors.email && "border-[var(--text-error)]",
              )}
            >
              <Mail className="stroke-[var(--text-grey)]" size="16" />
              <Input
                {...field}
                className="border-none p-0 placeholder-[var(--text-grey)] focus:ring-0"
                type="email"
                placeholder="Email"
              />
            </div>
          )}
        />
        {errors.email && (
          <InputErrorMassage message={errors.email.message || ""} />
        )}
      </div>

      <Button type="submit">Відновити пароль</Button>
    </form>
  );
};
