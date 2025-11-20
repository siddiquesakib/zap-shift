import React from "react";
import { useForm } from "react-hook-form";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
          {" "}
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
              <div>
                <h3 className="text-lg font-bold text-teal-900 mb-6">
                  Sender Details
                </h3>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Sender Name
                      </label>
                      <input
                        type="text"
                        {...register("senderName")}
                        placeholder="Sender Name"
                        className="input input-bordered w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Sender Pickup Wire house
                      </label>
                      <select
                        //   {...register("senderType")}
                        className="select select-bordered w-full"
                      >
                        <option value="">Select Wire house</option>
                        <option value="dhaka">Dhaka</option>
                        <option value="chittagong">Chittagong</option>
                        <option value="sylhet">Sylhet</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Address
                      </label>
                      <input
                        type="text"
                        {...register("senderAddress")}
                        placeholder="Address"
                        className="input input-bordered w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Sender Contact No
                      </label>
                      <input
                        type="text"
                        //   {...register("senderType")}
                        placeholder="Sender Contact No"
                        className="input input-bordered w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Region
                    </label>
                    <select
                      {...register("senderRegion")}
                      className="select select-bordered w-full"
                    >
                      <option value="">Select your region</option>
                      <option value="dhaka">Dhaka</option>
                      <option value="chittagong">Chittagong</option>
                      <option value="sylhet">Sylhet</option>
                      <option value="rajshahi">Rajshahi</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pickup Instruction
                    </label>
                    <textarea
                      name="pickupInstruction"
                      placeholder="Pickup Instruction"
                      rows="4"
                      className="textarea textarea-bordered w-full"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Receiver Details */}
              <div>
                <h3 className="text-lg font-bold text-teal-900 mb-6">
                  Receiver Details
                </h3>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Receiver Name
                      </label>
                      <input
                        type="text"
                        name="receiverName"
                        placeholder="Sender Name"
                        className="input input-bordered w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Receiver Delivery Wire house
                      </label>
                      <select
                        name="receiverWarehouse"
                        className="select select-bordered w-full"
                      >
                        <option value="">Select Wire house</option>
                        <option value="dhaka">Dhaka</option>
                        <option value="chittagong">Chittagong</option>
                        <option value="sylhet">Sylhet</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Receiver Address
                      </label>
                      <input
                        type="text"
                        name="receiverAddress"
                        placeholder="Address"
                        className="input input-bordered w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Receiver Contact No
                      </label>
                      <input
                        type="text"
                        name="receiverContact"
                        placeholder="Sender Contact No"
                        className="input input-bordered w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Receiver Region
                    </label>
                    <select
                      name="receiverRegion"
                      className="select select-bordered w-full"
                    >
                      <option value="">Select your region</option>
                      <option value="dhaka">Dhaka</option>
                      <option value="chittagong">Chittagong</option>
                      <option value="sylhet">Sylhet</option>
                      <option value="rajshahi">Rajshahi</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Delivery Instruction
                    </label>
                    <textarea
                      name="deliveryInstruction"
                      placeholder="Delivery Instruction"
                      rows="4"
                      className="textarea textarea-bordered w-full"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Note */}
            {/* <div className="mt-8 mb-6">
              <p className="text-sm text-gray-600">
                * PickUp Time 4pm-7pm Approx.
              </p>
            </div> */}

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
