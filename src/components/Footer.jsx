import styles from "../style";
import { socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} xs:mt-[12px] flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
      <h1 className='text-gray-200 text-[1.7rem] font-bold border-l-[3px] border-orange-500 rounded-full p-[5px]'>Land<span className='text-ora'>Care</span></h1>
        <p className={`${styles.paragraph} mt-4 max-w-[600px]`}>
        Land Care Ltd is a professional land surveying, house plan design, and construction consultancy that provides services to individuals and businesses in Rwanda. We have been business since 2014, and our offices are located in Remera Kisimenti.
        </p>
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2023 LandCare. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
