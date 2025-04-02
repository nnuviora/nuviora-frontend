"use client";
import { useDeviceType } from "@/hooks";
import Bar from "@components/bottomNavigationBar/Bar";

export default function BottomNavigationBar() {
  const deviceType = useDeviceType();
  return <>{deviceType !== "desktop" && <Bar />}</>;
}
