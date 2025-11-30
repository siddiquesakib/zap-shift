import React from "react";
import { Link } from "react-router";

const PaymentCancelled = () => {
  return (
    <div>
      <h1>payment-cancelled</h1>
      <Link to={'/dashboard/my-parcels'}>
      <button className="btn btn-secondary">
            try again 
      </button>
      </Link>
    </div>
  );
};

export default PaymentCancelled;
