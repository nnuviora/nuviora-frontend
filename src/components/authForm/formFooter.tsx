// "use client";

// import { Button } from "@components/ui";
// import { FcGoogle } from "react-icons/fc";

//  import { useMutation } from "@tanstack/react-query";
//  import { fetchGoogleAuthApi } from "@/api/tanstackReactQuery/auth/requests";
// import { useAuth } from "@/api/tanstackReactQuery/auth/mutations";
//
// export default function FormFooter() {
//   // const { mutate: getGoogleAuthUrl } = useMutation({
//   //   mutationFn: async () => fetchGoogleAuthApi(),
//   //   onSuccess: (res) => {
//   //     window.location.href = res.data.url;
//   //   },
//   // });
//
//   return (
//     <>
//       <div className="flex w-full flex-col items-center justify-center gap-2">
//         <p className="body-text text-[16px] text-[var(--text-grey)]">Aбо</p>
//         <Button
//           variant="outline"
//           className="w-full border-[var(--stroke-normal)]"
//           onClick={() => getGoogleAuthUrlMutation.mutate()}
//         >
//           <div className="flex w-full items-center justify-center gap-3">
//             <FcGoogle size={18} />
//             <p className="button-text font-semibold text-[var(--text-grey)]">
//               Продовжити з Google
//             </p>
//           </div>
//         </Button>
//       </div>
//     </>
//   );
// }
"use client";

import { Button } from "@components/ui";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "@/api/tanstackReactQuery/auth/mutations";

export default function FormFooter() {
  const { getGoogleAuthUrlMutation } = useAuth();

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center gap-2">
        <p className="body-text text-[16px] text-[var(--text-grey)]">Aбо</p>
        <Button
          variant="outline"
          className="w-full border-[var(--stroke-normal)]"
          onClick={() => getGoogleAuthUrlMutation.mutate()}
        >
          <div className="flex w-full items-center justify-center gap-3">
            <FcGoogle size={18} />
            <p className="button-text font-semibold text-[var(--text-grey)]">
              Продовжити з Google
            </p>
          </div>
        </Button>
      </div>
    </>
  );
}
