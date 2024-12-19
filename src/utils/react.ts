import { isValidElement, ReactNode } from "react";

export const getElementName = (child: ReactNode) => {
  if (isValidElement(child) && typeof child.type !== "string") {
    const componentType = child.type as { displayName?: string };
    return componentType.displayName;
  }
  return null;
};
