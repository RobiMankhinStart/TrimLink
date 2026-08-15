import { Filter } from "lucide-react";
import React from "react";
import Button from "../commonUi/Button";

const DashHeader = () => {
  return (
    <>
      {" "}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 px-2 gap-4">
        <div className="flex items-center gap-1 sm:gap-2 flex-wrap">
          <Button
            variant="outline"
            size="sm"
            className="border-b-2 border-indigo-600 pb-1 text-xs sm:text-sm"
          >
            All Links
          </Button>
          <Button
            variant="secondary"
            size="sm"
            className="pb-1 text-xs sm:text-sm"
          >
            Active
          </Button>
          <Button
            variant="secondary"
            size="sm"
            className="pb-1 text-xs sm:text-sm"
          >
            Archived
          </Button>
        </div>
        <Button
          variant="secondary"
          size="sm"
          icon={Filter}
          className="w-full sm:w-auto text-xs sm:text-sm"
        >
          Filters
        </Button>
      </div>
    </>
  );
};

export default DashHeader;
