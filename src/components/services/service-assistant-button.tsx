"use client";

import type { ReactNode } from "react";

type ServiceAssistantButtonProps = {
  children: ReactNode;
  className: string;
  fallbackHref: string;
  locale: string;
  serviceSlug?: string;
  serviceTitle?: string;
  packageName?: string;
  sourcePage?: string;
};

const OPEN_ASSISTANT_EVENT = "aurevio:open-assistant";

export function ServiceAssistantButton({
  children,
  className,
  fallbackHref,
  locale,
  serviceSlug,
  serviceTitle,
  packageName,
  sourcePage,
}: ServiceAssistantButtonProps) {
  return (
    <a
      href={fallbackHref}
      className={className}
      onClick={(event) => {
        event.preventDefault();
        window.dispatchEvent(
          new CustomEvent(OPEN_ASSISTANT_EVENT, {
            detail: {
              serviceSlug,
              locale,
              serviceTitle,
              packageName,
              sourcePage,
            },
          })
        );
      }}
    >
      {children}
    </a>
  );
}
