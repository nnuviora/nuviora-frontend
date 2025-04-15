import { Button } from "@/components/ui/button";
import {
  House,
  LayoutDashboard,
  Tag,
  Bookmark,
  Pocket,
  Clock,
  ShoppingCart,
  Heart,
  Scale,
  Truck,
  PhoneCall,
  MapPin,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { selectIsMenuOpen } from "@/lib/redux/toggleModal/selectors";
import { closeModal } from "@/lib/redux/toggleModal/slice";
import { fetchProfile } from "@/lib/redux/user/operations";
import { selectUser } from "@/lib/redux/user/selectors";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Menu() {
  const dispatch = useAppDispatch();
  const isMenuOpen = useAppSelector(selectIsMenuOpen);
  const { firstName = "Тарас", lastName = "Шевченко" } =
    useAppSelector(selectUser) || {};
  const router = useRouter();

  const handleClick = () => {
    dispatch(fetchProfile());
    dispatch(closeModal("isMenuOpen"));
    router.push("/profile");
  };
  return (
    <Sheet
      open={isMenuOpen}
      onOpenChange={() => dispatch(closeModal("isMenuOpen"))}
    >
      <SheetContent
        side="left"
        className="w-6/7 rounded-tr-2xl border-none"
        hideCloseButton
      >
        <SheetHeader className="xl2:max-w-[90rem] xl2:min-h-[80px] xl2:px-18 flex min-h-[60px] w-full flex-row items-center rounded-tr-2xl bg-[var(--stroke-normal)] p-0 pl-4 md:min-h-[64px]">
          <div className="justify-items-start">
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
          </div>
          <SheetTitle />
        </SheetHeader>
        <div className="flex flex-col gap-10 p-5">
          <Button className="button-text" onClick={handleClick}>
            <span className="font-semibold">
              Вітаємо, {`${firstName} ${lastName}`}
            </span>
          </Button>

          <nav className="flex flex-col gap-4 text-sm">
            <MenuItem href="/" icon={<House size={16} />}>
              Головна
            </MenuItem>
            <MenuItem href="/catalog" icon={<LayoutDashboard size={16} />}>
              Каталог
            </MenuItem>
            <MenuItem href="/super-price" icon={<Tag size={16} />}>
              Супер ціна
            </MenuItem>
            <MenuItem href="/bestsellers" icon={<Bookmark size={16} />}>
              Бестселери
            </MenuItem>
            <MenuItem href="/new" icon={<Pocket size={16} />}>
              Новинки
            </MenuItem>
            <MenuItem href="/recent" icon={<Clock size={16} />}>
              Недавно переглянуті
            </MenuItem>

            <hr />

            <MenuItem href="/cart" icon={<ShoppingCart size={16} />}>
              Кошик
            </MenuItem>
            <MenuItem href="/favorites" icon={<Heart size={16} />}>
              Улюблене
            </MenuItem>
            <MenuItem href="/compare" icon={<Scale size={16} />}>
              Порівняння
            </MenuItem>

            <hr />

            <MenuItem href="/delivery" icon={<Truck size={16} />}>
              Доставка і оплата
            </MenuItem>

            <MenuItem
              href="tel:+380445647986"
              rel="noopener noreferrer"
              icon={<PhoneCall size={16} />}
            >
              <div className="flex w-full items-center justify-between text-sm">
                <div className="category-text">044 564 79 86</div>
                <div className="category-text text-[var(--text-grey)]">
                  9:00–20:00
                </div>
              </div>
            </MenuItem>

            <MenuItem
              href="https://www.google.com/maps?q=Київ,+вул.+Сагайдачного,+5"
              icon={<MapPin size={16} />}
              target="_blank"
              rel="noopener noreferrer"
            >
              м. Київ, вул. Сагайдачного, 5
            </MenuItem>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function MenuItem({
  href,
  icon,
  target,
  rel,
  children,
}: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  target?: string;
  rel?: string;
}) {
  return (
    <Link
      href={href}
      className="category-text hover:bg-sidebar-accent flex items-center gap-2 transition"
      target={target}
      rel={rel}
    >
      <span className="h-4 w-4">{icon}</span>
      {children}
    </Link>
  );
}
