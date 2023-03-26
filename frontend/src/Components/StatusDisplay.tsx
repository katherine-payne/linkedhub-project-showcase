import React from "react";
import { BsCheckCircleFill, BsClockFill, BsFillExclamationCircleFill } from "react-icons/bs";
import SearchStatus from "src/Types/SearchStatus";

export default function statusDisplay(status: SearchStatus) {
  switch (status) {
    case SearchStatus.Loading:
      return (
        <div className="flex items-center gap-2 text-sky-400">
          <BsClockFill />
          Loading
        </div>
      );
    case SearchStatus.Failed:
      return (
        <div className="flex items-center gap-2 text-red-400">
          <BsFillExclamationCircleFill />
          Failed
        </div>
      );
    case SearchStatus.Success:
      return (
        <div className="flex items-center gap-2 text-emerald-400">
          <BsCheckCircleFill />
          Filled!
        </div>
      );
    default:
      return <></>;
  }
}
