"use client";
import { Button } from "@components/ui";
import Footer from "@components/layouts/Footer";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Loader from "@/app/loader";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "@lib/redux/auth/selectors";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const isAuthenticate = useSelector(selectIsAuthenticated);
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
          <h1 className="h1-text">Welcome Page h1</h1>
          <h2 className="h1-text">
            {isAuthenticate ? "Вход выполнен " : "Вход не выполнен "}
          </h2>
          <div className="mb-4 flex items-center gap-16">
            <Button variant="outline">Outline</Button>
            <Button disabled>Disabled</Button>
          </div>

          <Footer />
        </section>
      )}
    </>
  );
}
