import { MetadataSelectOption } from "./api";
import { OrganisationOption } from "./organisation";

export type AdminInfo = {
  id: string;
  firstName: string;
  lastName: string;
  middleNames: string;
  emailAddress: string;
  canEditUserType: boolean;
  canAssignOrganisation: boolean;
  canBeAssignedToOrganisations: boolean;
  status: string;
  statusValue: number;
};
export type AdminMetadata = {
  availableStatusActions?: string[];
  genders?: MetadataSelectOption[];
  titles?: MetadataSelectOption[];
  accessibleUserTypes?: (MetadataSelectOption & {
    auth0RoleId: null | string;
    description: string;
  })[];
  organisations?: OrganisationOption[];
};
