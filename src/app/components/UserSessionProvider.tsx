"use client";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const UserSessionProvider = (props: Props) => {
  return <SessionProvider>{props.children}</SessionProvider>;
};

export default UserSessionProvider;