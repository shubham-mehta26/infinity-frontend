import gsap from "gsap";
import { MutableRefObject } from "react";

interface AnimationRefs {
  backgroundRef: MutableRefObject<HTMLDivElement | null>;
  logoRef: MutableRefObject<HTMLImageElement | null>;
  appNameRef: MutableRefObject<HTMLSpanElement | null>;
  appSloganRef: MutableRefObject<HTMLDivElement | null>;
  themeToggleRef: MutableRefObject<HTMLDivElement | null>;
  formRef: MutableRefObject<HTMLDivElement | null>;
  backgroundImageRef: MutableRefObject<HTMLImageElement | null>;
}

export const setupAuthAnimations = (refs: AnimationRefs) => {
  const ctx = gsap.context(() => {
    const timeline = gsap.timeline();

    timeline
      .set(refs.backgroundRef.current, {
        position: "fixed",
        width: "100vw",
        padding: 0,
        borderRadius: 0,
      })
      .set(refs.appSloganRef.current, {
        opacity: 0,
        left: -30,
        bottom: 20,
      })
      .set(refs.logoRef.current, {
        opacity: 0,
        scale: 5,
        position: "absolute",
        top: "50vh",
        left: "100%",
        zIndex: 100,
        transform: "translate(-50%, -50%)",
      })
      .set(refs.appNameRef.current, {
        opacity: 0,
        scale: 3,
        position: "absolute",
        top: "51vh",
        left: "calc(100% + 150px)",
        zIndex: 100,
        transform: "translate(-50%, -50%)",
      })
      .set(refs.formRef.current, {
        opacity: 0,
        top: 20,
      })
      .set(refs.themeToggleRef.current, {
        opacity: 0,
      })
      .to(refs.logoRef.current, {
        opacity: 1,
        duration: 0.5,
      })
      .to(refs.appNameRef.current, {
        opacity: 1,
        duration: 0.5,
      })
      .to(refs.logoRef.current, {
        position: "absolute",
        top: 18,
        left: 20,
        duration: 0.5,
        scale: 1,
        delay: 0.5,
        ease: "power2.out",
      })
      .to(refs.appNameRef.current, {
        position: "absolute",
        top: 18,
        left: 68,
        duration: 0.5,
        scale: 1,
        delay: -0.5,
        ease: "power2.out",
      })
      .to(refs.backgroundRef.current, {
        width: "50vw",
        scale: 1,
        duration: 1,
        ease: "power2.out",
      })
      .to(refs.themeToggleRef.current, {
        opacity: 1,
        duration: 0.5,
      })
      .to(refs.formRef.current, {
        opacity: 1,
        top: 0,
        delay: -0.5,
        duration: 0.5,
      })
      .to(refs.backgroundRef.current, {
        padding: 16,
      })
      .to(refs.backgroundImageRef.current, {
        borderRadius: 16,
        delay: -0.5,
      })
      .to(refs.appSloganRef.current, {
        opacity: 1,
        left: 30,
        duration: 0.5,
      });
  });

  return ctx;
};
