import React, { useRef } from "react";

const SplineSection: React.FC<{}> =  () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} className="w-full h-[842px] mb-6 mr-6 relative overflow-hidden ">
      <iframe src='https://my.spline.design/honey-4a81988417d187365b04efb8dfd2d166/' width='100%' height='100%'></iframe>
    </div>
  )
}

export default SplineSection ;
