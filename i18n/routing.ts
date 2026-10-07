export type Locale = "en" | "fa";

export function isLocale(value: string | undefined): value is Locale {
  return value === "en" || value === "fa";
}

export function localeFromNavigator(): Locale {
  return navigator.language.toLowerCase().startsWith("fa") ? "fa" : "en";
}
