export type UserConfig = {
  userId: string;
  fullname: string;
  userType: UserType;
  isActive: boolean;
  organisationName: string;
  rootOrganisationId: string;
  branding: {
    logoUrl: string | null;
    brandName: string | null;
    primaryColor: string | null;
    secondaryColor: string | null;
    defaultTextColor: string | null;
    defaultLinkColor: string | null;
    backgroundColor: string | null;
    defaultLanguage: string | null;
    foregroundColor: string | null;
  };
};
export type UserType =
  | "HR Admin"
  | "Organisation Admin"
  | "Superadmin"
  | "DevOps"
  | "Finance";
