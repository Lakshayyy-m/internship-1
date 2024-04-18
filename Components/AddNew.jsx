import Image from "next/image";
import React from "react";

const AddNew = () => {
  return (
    <div className="p-5">
      <div className="col-xl-8 col-10 offset-1  border rounded-3 offset-xl-2 p-5">
        <div className="row mb-4">
          <Image
            src={"/Images/add.svg"}
            alt="add"
            width={20}
            height={20}
            className="col-3 col-xl-1 "
          />
          <span className="fw-bold col-9 col-xl-3">Add Your Own</span>
        </div>
        <div className="row mb-4">
          Are you a teacher or expert? Do you sell or rent out equipment, venue
          or event tickets? Or, you know someone who should be on hobbycue? Go
          ahead and Add your Own page
        </div>
        <div className="row">
          <button className="border-main col-xl-2 col-l2 py-1 rounded-3 text-color-main bg-light small">
            Add New
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNew;
