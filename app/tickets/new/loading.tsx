"use client";

import Skeleton from "react-loading-skeleton";

const loading = () => {
  return (
    <div className="max-w-xl p-4 flex flex-col space-y-3">
   <Skeleton count={10} height={20} />

      

      
    </div>
  );
};

export default loading;
