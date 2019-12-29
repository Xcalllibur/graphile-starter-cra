import React, { useEffect } from "react";
import { redirect } from "navi";

interface RedirectProps {
  href: string;
}

export default function Redirect({ href }: RedirectProps) {
  useEffect(() => {
    redirect(href);
  }, [href]);
  return <div>Redirecting...</div>;
}
