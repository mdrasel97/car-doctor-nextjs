import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { ArrowBigRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default async function Services() {
  const servicesCollection = dbConnect(collectionNameObj.servicesCollection);
  const data = await servicesCollection.find({}).toArray();
  return (
    <>
      <h2 className="text-2xl font-bold text-center">Our Service Area</h2>
      <p className="mb-10 w-2/4 mx-auto text-center">
        the majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.{" "}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 w-11/12 mx-auto">
        {data.map((service) => {
          return (
            <div
              className=" border border-gray-200 rounded-xl shadow hover:shadow-md transition duration-300"
              key={service._id}
            >
              <img
                src={service.img}
                className="w-full h-[200px] rounded-xl"
                alt=""
              />
              {/* <div className="text-blue-600 mb-4">{icon}</div> */}
              <div className="p-3 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-orange-600 font-semibold text-lg ">
                    price: {service.price} $
                  </p>
                </div>
                <div>
                  <Link href={`/services/${service._id}`}>
                    <ArrowBigRight />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
