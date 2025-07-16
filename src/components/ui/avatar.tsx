"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "@/lib/utils";
import { Camera } from "lucide-react";
// import { useUser } from "@/api/tanstackReactQuery/profile/mutations";

interface AvatarProps
  extends React.ComponentProps<typeof AvatarPrimitive.Root> {
  isEdit?: boolean;
}

function Avatar({ isEdit = true, className, ...props }: AvatarProps) {
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  // const { updateUserAvatar } = useUser();

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Avatar :>> ", file);
      // updateUserAvatar.mutate(file);
    }
  };

  return (
    <div className="relative">
      <AvatarPrimitive.Root
        data-slot="avatar"
        className={cn(
          "relative flex size-8 shrink-0 overflow-hidden rounded-full",
          className,
        )}
        {...props}
      />
      {isEdit && (
        <>
          <button
            type="button"
            onClick={handleButtonClick}
            className="absolute right-0 bottom-0 flex size-10.5 cursor-pointer items-center justify-center rounded-full border border-gray-400 bg-white"
            aria-label="Upload new avatar"
          >
            <Camera size={24} color="#818181" />
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageChange}
            accept="image/*"
            className="hidden"
            aria-hidden="true"
          />
        </>
      )}
    </div>
  );
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  );
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className,
      )}
      {...props}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback };

// "use client";

// import * as React from "react";
// import * as AvatarPrimitive from "@radix-ui/react-avatar";

// import { cn } from "@/lib/utils";

// function Avatar({
//   className,
//   ...props
// }: React.ComponentProps<typeof AvatarPrimitive.Root>) {
//   return (
//     <AvatarPrimitive.Root
//       data-slot="avatar"
//       className={cn(
//         "relative flex size-8 shrink-0 overflow-hidden rounded-full",
//         className,
//       )}
//       {...props}
//     />
//   );
// }

// function AvatarImage({
//   className,
//   ...props
// }: React.ComponentProps<typeof AvatarPrimitive.Image>) {
//   return (
//     <AvatarPrimitive.Image
//       data-slot="avatar-image"
//       className={cn("aspect-square size-full", className)}
//       {...props}
//     />
//   );
// }

// function AvatarFallback({
//   className,
//   ...props
// }: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
//   return (
//     <AvatarPrimitive.Fallback
//       data-slot="avatar-fallback"
//       className={cn(
//         "bg-muted flex size-full items-center justify-center rounded-full",
//         className,
//       )}
//       {...props}
//     />
//   );
// }

// export { Avatar, AvatarImage, AvatarFallback };
