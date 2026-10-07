import Lenis from "lenis";

function enabled() {
  return (
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
    !window.matchMedia("(pointer: coarse)").matches
  );
}

export const lenis = enabled()
  ? new Lenis({
      autoRaf: true,
      anchors: { offset: -80 },
    })
  : null;

export function scrollToTarget(
  target: number | HTMLElement,
  opts: { immediate?: boolean; offset?: number } = {},
) {
  if (!lenis) {
    if (typeof target === "number") window.scrollTo(0, target);
    else target.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  lenis.resize();
  lenis.scrollTo(target, {
    immediate: opts.immediate,
    offset: typeof target === "number" ? 0 : (opts.offset ?? -80),
  });
}
