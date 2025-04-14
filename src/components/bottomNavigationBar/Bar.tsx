import {
  Ellipsis,
  Heart,
  House,
  LayoutDashboard,
  ShoppingCart,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function Bar() {
  const router = useRouter();
  return (
    <div className="flex h-[75px] w-full items-center justify-around px-1 sm:justify-center sm:gap-10">
      <Button
        className="h-15 w-15 bg-transparent p-3"
        onClick={() => router.push("/")}
      >
        <div className="flex flex-col items-center justify-center gap-1">
          <House size="24 " className="stroke-[var(--stroke-default)]" />
          <p className="captions-text text-[var(--text-grey)]">Головна</p>
        </div>
      </Button>
      <Button className="h-15 w-15 bg-transparent p-3">
        <div className="flex flex-col items-center justify-center gap-1">
          <LayoutDashboard
            size="24 "
            className="stroke-[var(--stroke-default)]"
          />
          <p className="captions-text text-[var(--text-grey)]">Каталог</p>
        </div>
      </Button>
      <Button className="flex h-14 w-14 items-center justify-center rounded-full p-3">
        <ShoppingCart size="24 " className="stroke-[var(--white)]" />
      </Button>
      <Button className="h-15 w-15 bg-transparent p-3">
        <div className="flex flex-col items-center justify-center gap-1">
          <Heart size="24 " className="stroke-[var(--stroke-default)]" />
          <p className="captions-text captions-text text-[var(--text-grey)]">
            Обране
          </p>
        </div>
      </Button>
      <Button className="h-15 w-15 bg-transparent p-3">
        <div className="flex flex-col items-center justify-center gap-1">
          <Ellipsis size="24 " className="stroke-[var(--stroke-default)]" />
          <p className="captions-text captions-text text-[var(--text-grey)]">
            Інше
          </p>
        </div>
      </Button>
    </div>
  );
}
