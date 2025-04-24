"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button, SearchInput } from "@components/ui";
import { ShoppingCart, User, Scale, Heart, ChevronDown } from "lucide-react";
import { openModal } from "@lib/redux/toggleModal/slice";
import { useDeviceType } from "@/hooks";
import Link from "next/link";
import { selectIsAuthenticated } from "@lib/redux/auth/selectors";
import { useAppDispatch, useAppSelector } from "@lib/redux/hooks";
import AvatarHeader from "@components/Header/avatarHeader";
import Modal from "./modal";
import { useProfile } from "@/api/tanstackReactQuery/profile/queries";

export function Header() {
  const deviceType = useDeviceType();
  const router = useRouter();
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const dispatch = useAppDispatch();

  const { data: user, isLoading, error } = useProfile(isAuthenticated);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  console.log(user);

  function handleUser() {
    if (isAuthenticated) {
      router.push("/profile");
    } else {
      dispatch(openModal("isSignIn"));
    }
  }

  return (
    <header className="w-full bg-[var(--button-primary-default)]">
      <div className="xl2:max-w-[90rem] xl2:min-h-[80px] xl2:px-18 mx-auto flex h-full min-h-[60px] w-full items-center justify-between gap-2 px-4 md:min-h-[64px] md:gap-4">
        <Link
          className="h2-text leading-[1.2] text-[var(--text-white)]"
          href={"/"}
        >
          <Image
            src="/Logo_Medium.svg"
            alt="Nuviora Logo"
            width={60}
            height={60}
            className="xl2:w-20 xl2:h-20 h-15 w-15"
          />
        </Link>
        {deviceType === "desktop" && (
          <Button className="h-12 w-full max-w-62 border border-[var(--button-secondary-hover)] p-3 leading-[1.2] shadow-none">
            <div className="flex items-center justify-between">
              <span className="body-text">Каталог</span>
              <ChevronDown size={20} />
            </div>
          </Button>
        )}
        <SearchInput name="headerSearch" placeholder="Search..." />
        <Button
          className="p-1.5 leading-[1.2]"
          onClick={handleUser}
          variant="icon"
        >
          <div className="flex items-center justify-between gap-3">
            {isAuthenticated ? <AvatarHeader /> : <User size={36} />}
          </div>
        </Button>

        {deviceType === "desktop" && (
          <div className="flex items-center justify-between gap-3">
            <Button variant="icon" className="p-1.5">
              <Scale size={36} />
            </Button>
            <Button variant="icon" className="p-1.5">
              <Heart size={36} />
            </Button>
            <Button variant="icon" className="p-1.5">
              <ShoppingCart size={36} />
            </Button>
          </div>
        )}
      </div>
      <Modal />
    </header>
  );
}

export default Header;
