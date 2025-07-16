import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries , setCountries]  = useState([]); 

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
     setCountries(res.data)
    });
  }, []);

  if (isPending) return <h1><Loader/></h1>;

  return <h1>Country page</h1>;
};
