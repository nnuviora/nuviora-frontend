"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";
import { breadcrumbNameMap } from "@/constans";

interface BreadcrumbsProps {
  className?: string;
}

export const Breadcrumbs = ({ className }: BreadcrumbsProps) => {
  const pathname = usePathname();

  const segments = pathname.split("/").filter((segment) => segment !== "");

  const getPath = (index: number) =>
    "/" + segments.slice(0, index + 1).join("/");

  return (
    <Breadcrumb className={cn("xl2:max-w-[1440px] w-full", className)}>
      <BreadcrumbList className="text-muted-foreground flex flex-wrap items-center gap-1 text-sm">
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground flex items-center gap-1"
            >
              <span>Головна</span>
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {segments.map((segment, index) => {
          const isLast = index === segments.length - 1;
          const href = getPath(index);
          const translated =
            breadcrumbNameMap[href] || decodeURIComponent(segment);

          return (
            <div key={index} className="flex items-center gap-1">
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  {isLast ? (
                    <span className="text-foreground capitalize">
                      {translated}
                    </span>
                  ) : (
                    <Link
                      href={href}
                      className={cn(
                        "text-muted-foreground hover:text-foreground capitalize",
                      )}
                    >
                      {translated}
                    </Link>
                  )}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
