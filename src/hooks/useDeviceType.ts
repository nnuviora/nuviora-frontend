"use client";

import { useEffect, useState } from "react";

type DeviceType = "mobile" | "tablet" | "desktop";

export function useDeviceType(): DeviceType | null {
  const getDeviceType = (width: number): DeviceType => {
    if (width < 768) return "mobile";
    if (width < 1024) return "tablet";
    return "desktop";
  };

  const [deviceType, setDeviceType] = useState<DeviceType | null>(null);

  useEffect(() => {
    setDeviceType(getDeviceType(window.innerWidth));

    const handleResize = () => {
      setDeviceType(getDeviceType(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return deviceType;
}
