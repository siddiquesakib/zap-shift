import React from "react";
import { Link, useParams } from "react-router";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Payment = () => {
  const { parcelId } = useParams();
  const axiosSecure = useAxiosSecure();

  const { isLoading, data: parcel } = useQuery({
    queryKey: ["parcels", parcelId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${parcelId}`);
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div>
        <span>loadindididsdkasdsd....</span>
      </div>
    );
  }

  return (
    <div>
      <h1>plase pay {parcel.parcelName} </h1>
      <Link className="btn btn-primary btn-sm text-black">Pay </Link>
    </div>
  );
};

export default Payment;
