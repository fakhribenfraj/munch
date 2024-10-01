export type OrganisationDetails = {
  id: string;
  parentId: string | null;
  parentOrganisationName: string | null;
  name: string;
  phoneNumber: string;
  emailAddress: string;
  status: string;
  statusValue: number;
};
export type OrganisationalUnitOption = {
  organisationId: string;
  rootOrganisationId?: string;
  organisationName: string;
  isAssigned?: boolean;
};
export type OrganisationOption = OrganisationalUnitOption & {
  isTopLevel?: boolean | undefined;
  organisationalUnits?: OrganisationalUnitOption[] | undefined;
};
