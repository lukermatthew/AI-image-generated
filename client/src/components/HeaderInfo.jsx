import React from "react";

const HeaderInfo = ({ data }) => {
  return (
    <div>
      <h1 className="font-extrabold text-[#222328] text-[32px]">
        {data.title}
      </h1>
      <p className="mt-2 text-[#666e75] text-[16px] max-w[500px]">
        {data.description}
      </p>
    </div>
  );
};

export default HeaderInfo;
