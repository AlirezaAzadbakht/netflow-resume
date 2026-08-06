// Baked in at build time from the SHOW_TEAM build arg, so this must only be
// imported from server components.
export const showTeam = process.env.SHOW_TEAM !== "false";
