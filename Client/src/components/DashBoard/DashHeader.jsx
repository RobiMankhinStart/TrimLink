import { Filter } from "lucide-react";
import React from "react";
import Button from "../commonUi/Button";

const DashHeader = () => {
  return (
    <>
      {" "}
      <div className="flex items-center justify-between mb-6 px-2">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="border-b-2 border-indigo-600 pb-1"
          >
            All Links
          </Button>
          <Button variant="secondary" size="sm" className="pb-1">
            Active
          </Button>
          <Button variant="secondary" size="sm" className="pb-1">
            Archived
          </Button>
        </div>
        <Button variant="secondary" size="sm" icon={Filter}>
          Filters
        </Button>
      </div>
    </>
  );
};

export default DashHeader;
