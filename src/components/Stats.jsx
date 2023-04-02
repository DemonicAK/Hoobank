import React from "react";
import { stats } from "../constants";
import styles from "../style";

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row fle-wrap sm:mb-29 `}>
 
  {stats.map((stat, index) => (
    <div key={stat.id} className={`flex-1 flex justify-center items-center flex-row m-3`}  >
      <h4 className="font-poppins  font-semibold xs:text-[40px]  text-[30px] xs:leading-[53px] leading-[43px] text-white "> {stat.value}</h4>
      <p className="font-poppins  font-normal  xs:leading-[26px]text-[15px] 
     xs:text-[20px]   leading-[21px] text-white text-gradient uppercase ml-3"> {stat.title}</p>

    </div>
  ))}

    </section>
  );
};

export default Stats;
