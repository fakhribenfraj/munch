export type ApiResponse = {
  totalOrganisationCount: number;
  totalActiveOrganisationCount: number;
  totalDeletedOrganisationCount: number;
  totalSuspendedOrganisationCount: number;
  pager: Pager;
};
export type Pager = {
  itemsToSkip: number;
  currentPage: number;
  totalItems: number;
  totalPages: number;
  prevPageAvailable: boolean;
  nextPageAvailable: boolean;
};

export type ActionResponse<T = undefined> = {
  code: 400 | 200;
  data?: T;
  error?: string;
};

export type PageWithIdProps = {
  params?: Record<"id", string | string[]>;
};
export type MetadataSelectOption = {
  id: string | number;
  name: string;
  isSelected: boolean;
};
export type MetadataBooleanOption = {
  name: "No" | "Yes";
  value: boolean;
};
