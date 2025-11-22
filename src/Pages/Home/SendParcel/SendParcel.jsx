import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    watch,
    // formState: { errors },
  } = useForm();

  const AxiosSecure = useAxiosSecure();

  const serviceCenters = useLoaderData();
  const regionsDuplicate = serviceCenters.map((c) => c.region);

  const regions = [...new Set(regionsDuplicate)];
  const senderRegion = watch("senderRegion");

  console.log(regions);

  const districtByRegion = (region) => {
    const regionDistrict = serviceCenters.filter((c) => c.region === region);
    const districts = regionDistrict.map((d) => d.district);
    return districts;
  };

  const handleSendParcel = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-teal-900 mb-8">Add Parcel</h1>

        {/* Form Section */}
        <form onSubmit={handleSubmit(handleSendParcel)}>
          <div className="border-t-2 border-gray-200 pt-8">
            <h2 className="text-xl font-bold text-teal-900 mb-6">
              Enter your parcel details
            </h2>

            {/* Radio Buttons */}
            <div className="flex gap-6 mb-6">
              {/* document */}
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  value="document"
                  className="radio radio-success"
                  defaultChecked
                  {...register("parcelType")}
                />
                <span className="text-gray-700 font-medium">Document</span>
              </label>

              {/* non-document */}
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  value="non-document"
                  className="radio radio-success"
                  {...register("parcelType")}
                />
                <span className="text-gray-700 font-medium">Non-Document</span>
              </label>
            </div>

            {/* Parcel Name & Weight */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Parcel Name
                </label>
                <input
                  type="text"
                  placeholder="Parcel Name"
                  className="input input-bordered w-full"
                  {...register("parcelName")}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Parcel Weight (KG)
                </label>
                <input
                  type="number"
                  placeholder="Parcel Weight (KG)"
                  className="input input-bordered w-full"
                  {...register("parcelWeight")}
                />
              </div>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Sender Details */}
              <div>
                <h3 className="text-lg font-bold text-teal-900 mb-6">
                  Sender Details
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sender Name
                    </label>
                    <input
                      type="text"
                      placeholder="Sender Name"
                      className="input input-bordered w-full"
                      {...register("senderName")}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sender Email
                    </label>
                    <input
                      type="email"
                      placeholder="Sender Email"
                      className="input input-bordered w-full"
                      {...register("senderEmail")}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      placeholder="Address"
                      className="input input-bordered w-full"
                      {...register("senderAddress")}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sender Phone No
                    </label>
                    <input
                      type="number"
                      placeholder="Sender Phone No"
                      className="input input-bordered w-full"
                      {...register("senderPhone")}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Region
                    </label>
                    <select
                      className="select select-bordered w-full"
                      defaultValue="pick your region"
                      {...register("senderRegion")}
                    >
                      {regions.map((r, i) => (
                        <option key={i} value={r}>
                          {r}{" "}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* District */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your District
                    </label>
                    <select
                      className="select select-bordered w-full"
                      defaultValue="Pick your District"
                      {...register("senderDistrict")}
                    >
                      {districtByRegion(senderRegion).map((r, i) => (
                        <option key={i} value={r}>
                          {r}{" "}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pickup Instruction
                    </label>
                    <textarea
                      placeholder="Pickup Instruction"
                      rows="4"
                      className="textarea textarea-bordered w-full"
                      {...register("pickupInstruction")}
                    ></textarea>
                  </div> */}
                </div>
              </div>

              {/* Receiver Details */}
              <div>
                <h3 className="text-lg font-bold text-teal-900 mb-6">
                  Receiver Details
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Receiver Name
                    </label>
                    <input
                      type="text"
                      placeholder="Receiver Name"
                      className="input input-bordered w-full"
                      {...register("receiverName")}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Receiver Email
                    </label>
                    <input
                      type="email"
                      placeholder="Receiver Email"
                      className="input input-bordered w-full"
                      {...register("receiverEmail")}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Receiver Address
                    </label>
                    <input
                      type="text"
                      placeholder="Address"
                      className="input input-bordered w-full"
                      {...register("receiverAddress")}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Receiver Contact No
                    </label>
                    <input
                      type="number"
                      placeholder="Receiver Contact No"
                      className="input input-bordered w-full"
                      {...register("receiverContact")}
                    />
                  </div>

                  {/* <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Receiver District
                    </label>
                    <select
                      className="select select-bordered w-full"
                      {...register("receiverDistrict")}
                    >
                      <option value="">Select your District</option>
                      <option value="dhaka">Dhaka</option>
                      <option value="chittagong">Chittagong</option>
                      <option value="sylhet">Sylhet</option>
                      <option value="rajshahi">Rajshahi</option>
                      <option value="khulna">Khulna</option>
                      <option value="barisal">Barisal</option>
                      <option value="rangpur">Rangpur</option>
                      <option value="mymensingh">Mymensingh</option>
                    </select>
                  </div> */}

                  {/* <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Delivery Instruction
                    </label>
                    <textarea
                      placeholder="Delivery Instruction"
                      rows="4"
                      className="textarea textarea-bordered w-full"
                      {...register("deliveryInstruction")}
                    ></textarea>
                  </div> */}
                </div>
              </div>
            </div>

            {/* Footer Note */}
            <div className="mt-8 mb-6">
              <p className="text-sm text-gray-600">
                * PickUp Time 4pm-7pm Approx.
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn bg-lime-400 hover:bg-lime-500 text-teal-900 border-0 px-8"
            >
              Proceed to Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SendParcel;
