"use client";

import Skeleton from "react-loading-skeleton";

const loading = () => {
  return (
    <div className="max-w-xl p-4 flex flex-col space-y-3">
   <Skeleton count={20} height={30} />

      

      
    </div>
  );
};

export default loading;
