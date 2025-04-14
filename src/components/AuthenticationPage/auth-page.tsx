import { LoginForm } from "@/components/AuthenticationPage/LoginForm/login-form";
import background from "@/assets/background.jpg";
import logo from "@/assets/logo.png";
import { ThemeToggle } from "@/components/ThemeToggleTab/theme-toggle";
import { useLayoutEffect, useRef, useState } from "react";
import { setupAuthAnimations } from "./animations/auth-animations";

export const AuthenticationPage = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const appNameRef = useRef<HTMLSpanElement>(null);
  const appSloganRef = useRef<HTMLDivElement>(null);
  const themeToggleRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const backgroundImageRef = useRef<HTMLImageElement>(null);
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useLayoutEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    setIsMediumScreen(mediaQuery.matches);

    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      setIsMediumScreen(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useLayoutEffect(() => {
    if (!isMediumScreen) return;

    const ctx = setupAuthAnimations({
      backgroundRef,
      logoRef,
      appNameRef,
      appSloganRef,
      themeToggleRef,
      formRef,
      backgroundImageRef,
    });

    return () => ctx.revert();
  }, [isMediumScreen]);

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div
        style={{
          position: "fixed",
          width: "50vw",
          height: "100vh",
          right: 0,
          padding: 16,
        }}
        ref={backgroundRef}
        className="hidden lg:block">
        <div className="h-full">
          <img
            ref={backgroundImageRef}
            src={background}
            alt="Authentication background"
            className="h-full w-full object-cover"
          />
        </div>
        <div
          ref={appSloganRef}
          style={{
            position: "absolute",
            color: "white",
            bottom: 10,
            fontSize: "2.5rem",
            zIndex: 101,
            left: 30,
            fontFamily: "Prosto One",
            userSelect: "none",
          }}>
          <span>Store</span> <br />{" "}
          <b>
            <div style={{ display: "flex", alignItems: "baseline" }}>
              beyond{" "}
              <img style={{ height: 40, width: 40 }} src={logo} alt="logo" />
            </div>
          </b>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div
          style={{
            justifyContent: "space-between",
            position: "relative",
            left: 0,
          }}
          className="flex w-full gap-2 items-center">
          <a href="#" className="flex items-center gap-2 font-medium">
            <img
              ref={logoRef}
              style={{
                height: 40,
                width: 40,
                position: "absolute",
              }}
              src={logo}
              alt="logo"
              className="h-full w-full"
            />
            <span
              ref={appNameRef}
              style={{
                position: "absolute",
                left: 40,
                color: "white",
                mixBlendMode: "difference",
              }}>
              Infinity.
            </span>
          </a>
          <div ref={themeToggleRef}>
            <ThemeToggle />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div ref={formRef} className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};
