import { avatar } from "@/Images/*";
import classNames from "classnames";
import Link from "next/link";
import { FC } from "react";
import ProfileCard from "../ProfileCard";
import Rating from "../Rating";
import styles from "./styles.module.css";
interface WhyBMProps {}

const WhyBM: FC<WhyBMProps> = ({}) => {
  return (
    <>
      <div
        className={classNames(
          "flex flex-col items-center pt-4 relative bg-mob-bottom lg:grid-cols-2 lg:grid-rows-2 lg:grid lg:pt-12 lg:pl-16 lg:items-start md:justify-center "
        )}>
        <h2 className="text-[#5368df] py-4 text-4xl font-black text-center max-w-md lg:text-left  lg:text-6xl">
          10,000+ of our users love our products.
        </h2>
        <p className="max-w-md py-8 text-center text-gray-500 lg:col-span-2 lg:text-left lg:text-lg">
          We only provide great products combined with excellent customer
          service. See what our satisfied customers are saying about our
          services.
        </p>
      </div>
      <>
        <Rating name="Reviews" className="lg:mt-[-400px] lg:mr-[150px]" />
        <Rating name="Guru" className="lg:mr-[100px]" />
        <Rating name="BestTech" className="mb-2 lg:mr-[60px]" />
      </>
      <div className=" lg:pt-24 lg:pb-4 lg:px-5">
        <ProfileCard
          name=" Colton Smith"
          proof=' " We needed the same printed design as the one we had
          ordered a week prior. Not only did they find the original order, but we also
          received it in time. Excellent! "'
          avatar={avatar}
          className="md:pr-4 md:ml-12 lg:ml-50 "
        />
        <ProfileCard
          className="md:pr-4 md:ml-32 lg:ml-96"
          name=" Irene Roberts"
          proof=' " Put an order with this
          company and can only praise them for the very high standard. Will definitely use
          them again and recommend them to everyone! "'
          avatar={avatar}
        />
        <ProfileCard
          className="md:pr-4 md:ml-72 lg:-ml-[-780px]"
          name="  Anne Wallace"
          proof='" Customer service is always excellent and very
          quick turn around. Completely delighted with the simplicity of the purchase and
          the speed of delivery."'
          avatar={avatar}
        />
      </div>
      <Link
        href="/Login"
        className="bg-[#5368df]  m-4 w-[80%] md:w-[60%] lg:w-[40%] flex justify-center items-center h-14  mx-auto hover:bg-slate-900 hover:text-white font-bold text-white   transition-all duration-100 ease-in-out delay-100  focus:outline-none focus:ring-1 shadow-xl  rounded-lg ">
        Got It !
      </Link>
    </>
  );
};

export default WhyBM;
