export function formatUserName(user?: {
  first_name?: string;
  last_name?: string;
  email?: string;
}) {
  const first_name = user?.first_name?.trim();
  const last_name = user?.last_name?.trim();
  const email = user?.email?.trim();

  let initials = "";

  if (first_name && last_name) {
    initials = `${first_name[0].toUpperCase()}${last_name[0].toUpperCase()}`;
  } else if (first_name) {
    initials = first_name[0].toUpperCase();
  } else if (last_name) {
    initials = last_name[0].toUpperCase();
  } else if (email) {
    initials = email[0].toUpperCase();
  }

  const fullName =
    first_name && last_name
      ? `${first_name} ${last_name}`
      : first_name || last_name || "Гість";

  return { initials, fullName };
}
