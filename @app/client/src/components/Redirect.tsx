import React, { useEffect } from "react";
import { useNavigation } from "react-navi";

interface RedirectProps {
  href: string;
}

export default function Redirect({ href }: RedirectProps) {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.navigate(href);
  }, [href, navigation]);
  return <div>Redirecting...</div>;
}
