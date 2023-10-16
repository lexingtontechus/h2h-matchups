"use client";
import { ThemeProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";
export function Providers({ children }) {
  return (
    <ThemeProvider defaultTheme="system">
      <NextUIProvider>{children}</NextUIProvider>
    </ThemeProvider>
  );
}
