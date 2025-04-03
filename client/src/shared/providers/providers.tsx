"use client";

import { Authenticator } from "@aws-amplify/ui-react";
import StoreProvider from "./store.provider";
import Auth from "./auth.provider";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <Authenticator.Provider>
        <Auth>{children}</Auth>
      </Authenticator.Provider>
    </StoreProvider>
  );
};
