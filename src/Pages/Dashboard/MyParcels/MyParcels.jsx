import { useQuery } from "@tanstack/react-query";
import React from "react";
import UseAuth from "../../../Hooks/UseAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaEdit } from "react-icons/fa";
import { FaMagnifyingGlass, FaTrashCan } from "react-icons/fa6";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyParcels = () => {
  const { user } = UseAuth();
  const axiosSecure = useAxiosSecure();

  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["my-Parcel", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user.email}`);
      return res.data;
    },
  });

  const handlePrcelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/parcels/${id}`).then((res) => {
          console.log(res.data);

          refetch();
          if (res.data.deleteCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <h1>asdfklasdf {parcels.length}</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>cost</th>
              <th>Payment</th>
              <th>Delevery status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <th>{index + 1}</th>
                <td>{parcel?.parcelName ?? "N/A"}</td>
                <td>{parcel?.cost ?? "N/A"}</td>
                <td>
                  {
                    (parcel.paymentStatus = "" ? (
                      <span className="text-green-400">paid</span>
                    ) : (
                      <Link to={`/dashboard/payment/${parcel._id}`} className="btn btn-primary btn-sm text-black">Pay</Link>
                    ))
                  }
                </td>
                <td>{parcel.deliveryStatus}</td>
                <td className="">
                  <button className="btn btn-square hover:btn-secondary mx-1">
                    <FaMagnifyingGlass />
                  </button>
                  <button className="btn btn-square hover:btn-secondary mx-1">
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handlePrcelDelete(parcel._id)}
                    className="btn btn-square hover:btn-secondary mx-1"
                  >
                    <FaTrashCan />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyParcels;
