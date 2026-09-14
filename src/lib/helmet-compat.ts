// Compat wrapper: react-helmet-async ships as CommonJS, so its named exports
// fail under Vite's SSR module runner. Resolve via the default export instead.
import * as helmetNs from "react-helmet-async";

const resolved: typeof helmetNs =
  (helmetNs as unknown as { default?: typeof helmetNs }).default ?? helmetNs;

export const Helmet = resolved.Helmet;
export const HelmetProvider = resolved.HelmetProvider;
