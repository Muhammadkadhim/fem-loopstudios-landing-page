import { useState, useEffect } from "react";

export default function Creations(props) {
    return (
        <div className="flex flex-col items-center p-10 mt-6 ">
            <div className="md:flex md:items-center md:justify-between md:w-5/6 md:px-4">
                <h1 className="text-4xl uppercase font-thin">Our Creations</h1>

                <button className="hidden md:block cursor-pointer  border-2 border-slate-900  py-2 px-10 hover:bg-black hover:text-white ease-in duration-200">
                    <p
                        className="text-xl font-semibold uppercase"
                        style={{ letterSpacing: "8px" }}
                    >
                        {" "}
                        See All
                    </p>
                </button>
            </div>
            <div className="flex flex-wrap justify-center gap-x-8  mt-16 mx-20 lg:px-14">
                {props.isDesktop
                    ? props.creationsDataMob.map((data) => {
                          return (
                              <a
                                  href="#"
                                  className="relative w-96  mx-auto mb-8 "
                              >
                                  <div className="w-full h-full bg-overlay absolute left-0 top-0"></div>
                                  <h1 className="text-white text-4xl uppercase   absolute bottom-[45px] left-[20px] z-10">
                                      {data.title}
                                  </h1>
                                  <img src={data.img} alt={data.title} />
                              </a>
                          );
                      })
                    : props.creationsDataDesk.map((data, index) => {
                          return (
                              <a
                                  href="#"
                                  className="group flex relative mx-auto mb-8   ease-out duration-300 lg:transform-gpu"
                                  key={index}
                              >
                                  <div className=" w-full h-full bg-overlay absolute left-0 top-0 lg:hover:bg-overlayHover  ease-out duration-300 lg:transform-gpu"></div>
                                  <h1 className="text-white group-hover:text-black text-4xl uppercase   absolute bottom-[45px] left-[20px] z-10">
                                      {data.title}
                                  </h1>
                                  <img src={data.img} alt={data.title} />
                              </a>
                          );
                      })}

                <button className=" cursor-pointer  border-2 border-slate-900  py-2 px-10 hover:bg-black hover:text-white ease-in duration-200 md:hidden">
                    <p
                        className="text-xl font-semibold uppercase"
                        style={{ letterSpacing: "8px" }}
                    >
                        {" "}
                        See All
                    </p>
                </button>
            </div>
        </div>
    );
}
