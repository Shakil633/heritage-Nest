import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Link } from "react-router-dom";

const Services = () => {
  const swiperRef1 = useRef(null);

  const goToNext1 = () => {
    if (swiperRef1.current && swiperRef1.current.swiper) {
      swiperRef1.current.swiper.slideNext();
    }
  };

  const goToPrev1 = () => {
    if (swiperRef1.current && swiperRef1.current.swiper) {
      swiperRef1.current.swiper.slidePrev();
    }
  };
  return (
    <div>
      <section className="  w-[1216px] mx-auto mt-[130px]">
        <div className=" w-[800px] mt-10 mb-5">
          <div className=" flex items-center gap-28">
            <h2 className=" text-xl font-semibold text-[#010101]">
              3 BHK Builder Floor for Sale in Site Ram Bazar Hyderabad
            </h2>
            <p className=" text-[28px] font-extrabold">$ 300K</p>
          </div>
          <div className=" flex items-center gap-2">
            <img src="https://i.ibb.co/wBrGHSN/fi-bs-marker.png" alt="" />
            <p className=" text-lg font-normal text-[#606060]">
              Meadowshire Park, Greenfield, USA
            </p>
          </div>
        </div>
      </section>

      {/* pic section */}
      <section className=" w-[1216px] mx-auto">
        <div className=" flex gap-5">
          <div className="grid grid-cols-2 gap-3">
            <img
              key="image1"
              src="https://i.ibb.co/cr94hGN/Frame-134.png"
              alt=""
              className="col-span-3 w-full h-full"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
            <img
              src="https://i.ibb.co/QHp88w6/Frame-135.png"
              alt=""
              className="w-full h-full"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
            <img
              src="https://i.ibb.co/P4gXk1r/Frame-138.png"
              alt=""
              className="w-full h-full"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
            <img
              src="https://i.ibb.co/W08LKnh/Frame-137.png"
              alt=""
              className="w-full h-full"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </div>

          {/* property value section */}
          <div className=" w-[384px] h-[492px] bg-[#ecf5ff] p-4">
            <div>
              <h5 className=" text-base font-normal text-[#6B7280]">
                property value
              </h5>
              <h2 className=" text-2xl font-bold py-2">$ 300k - $ 310k</h2>
              <p className=" text-base font-normal text-[#6B7280] mb-5">
                Your bid can not be than 10% of the property Minimum value.
              </p>
            </div>

            <div>
              <h2 className=" text-base font-normal mb-1">Min</h2>
              <div className="w-[336px] h-[44px] bg-[#ffffff] rounded flex items-center">
                <span className=" ml-3 text-base font-normal text-[#252323]">
                  $ 280k
                </span>
              </div>
            </div>
            <div>
              <h2 className="text-base font-normal mb-1 ">Max</h2>
              <div className="w-[336px] h-[44px] bg-[#ffffff] rounded flex items-center">
                <span className="ml-3 text-base font-normal text-[#252323]">
                  $ 280k
                </span>
              </div>
            </div>

            <div className=" py-6">
              <img src="https://i.ibb.co/s2nLLS6/Frame-158.png" alt="" />
            </div>

            <div className=" flex justify-center">
              <div className=" w-[166px] h-[44px] bg-[#0059b1] hover:bg-[#004080]  flex items-center justify-center rounded">
                <h2 className=" text-white">Bid Property</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview section */}
      <section className=" w-[1216px] mx-auto mt-10 mb-10">
        <div className=" flex gap-5">
          <div className="w-[800px] h-[356px] bg-gray-50 border border-gray-200 p-6">
            <h2 className=" text-2xl font-semibold text-[#000]">Overview</h2>

            {/* 2 Beds section */}
            <div className=" flex items-center gap-16 mt-12">
              <div className=" flex items-center gap-2">
                <img src="https://i.ibb.co/80J0Zz0/bathtub.png" alt="" />
                <h4 className=" text-base font-bold text-[#303030]">2 Beds</h4>
              </div>
              <div className=" flex items-center gap-2">
                <img src="https://i.ibb.co/1X4bZft/bed.png" alt="" />
                <h4 className=" text-base font-bold text-[#303030]">2 Bath</h4>
              </div>
              <div className=" flex items-center gap-2">
                <img src="https://i.ibb.co/YbFNty9/balcony.png" alt="" />
                <h4 className=" text-base font-bold text-[#303030]">
                  2 Balcony
                </h4>
              </div>
              <div className=" flex items-center gap-2">
                <img src="https://i.ibb.co/sqpVChD/shelves.png" alt="" />
                <h4 className=" text-base font-bold text-[#303030]">
                  Fully Furnished
                </h4>
              </div>
            </div>

            <hr className=" border-[#CAC7C7] mt-5" />
            {/* Carpet Area section */}
            <div>
              <div className=" grid grid-cols-4 gap-56 mt-8 ">
                <div className=" w-[120px]">
                  <p className=" text-base font-normal text-[#5C5C5C]">
                    Carpet Area
                  </p>
                </div>
                <p className=" text-base font-normal text-[#5C5C5C]">Floor</p>
                <div className=" w-[120px] ml-2">
                  <p className=" text-base font-normal text-[#5C5C5C]">
                    Transaction Type
                  </p>
                </div>
                <p className=" text-base font-normal text-[#5C5C5C]">Lift</p>
              </div>
              <div className=" grid grid-cols-4 gap-56">
                <div className=" w-[110px]">
                  <p className=" text-base font-medium text-[#101010]">
                    2000 sqft
                  </p>
                </div>
                <div className=" w-[240px]">
                  <p className=" text-base font-medium text-[#101010]">
                    2000 Second (Out of 6th floor)
                  </p>
                </div>
                <div className=" w-[130px] ml-2">
                  <p className=" text-base font-medium text-[#101010]">
                    Ready to move
                  </p>
                </div>
                <p className=" text-base font-medium text-[#101010]">1</p>
              </div>
              <p className=" text-base font-normal text-[#5C5C5C]">
                $ 225/sqft
              </p>
            </div>

            <div className=" grid grid-cols-3 mt-6">
              <p className=" text-base font-normal text-[#5C5C5C]">Facing</p>
              <p className=" text-base font-normal text-[#5C5C5C]">
                Additional Rooms
              </p>
              <p className=" text-base font-normal text-[#5C5C5C]">
                Age of construction
              </p>
              <p className=" text-base font-medium text-[#101010]">
                North - East
              </p>
              <p className=" text-base font-medium text-[#101010]">
                1 servant room & 1 gust room
              </p>
              <p className=" text-base font-medium text-[#101010]">
                New Construction
              </p>
            </div>
          </div>
          <div className=" -mt-16">
            <div className=" w-[384px] h-[422px]">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                title="map"
                marginHeight="0"
                marginWidth="0"
                scrolling="no"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.7924830384227!2d90.37299287406528!3d23.790402887241893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c734c4abc47d%3A0xd696584909ddf06f!2sShewraPara%20Bus%20Stand!5e0!3m2!1sen!2sus!4v1714712143085!5m2!1sen!2sus"
              ></iframe>
            </div>
            {/* <img src="https://i.ibb.co/55KWWBF/Rectangle-27.png" alt="" /> */}
          </div>
        </div>
      </section>

      {/* Amenities section */}
      <section className=" w-[1216px] mx-auto mt-10 mb-10">
        <div className="w-[1216px] h-[668px] bg-gray-50 border border-gray-200 p-6">
          <h2 className=" text-2xl font-semibold text-[#000]">Amenities</h2>

          {/* 2 Beds section */}
          <div className=" mt-10 grid grid-cols-4 gap-16">
            <div className=" flex items-center gap-1">
              <img src="https://i.ibb.co/T8gWR20/Capa-1-1.png" alt="" />
              <p className=" text-base font-medium text-[#101010]">
                Power Back Up
              </p>
            </div>
            <div className=" flex items-center gap-1">
              <img src="https://i.ibb.co/x2ymCVv/Capa-1-2.png" alt="" />
              <p className=" text-base font-medium text-[#101010]">Lift</p>
            </div>
            <div className=" flex items-center gap-1">
              <img src="https://i.ibb.co/G2PCjJq/Capa-1-3.png" alt="" />
              <p className=" text-base font-medium text-[#101010]">
                Club House
              </p>
            </div>
            <div className=" flex items-center gap-1">
              <img src="https://i.ibb.co/84TXDJS/Frame-1.png" alt="" />
              <p className=" text-base font-medium text-[#101010]">Gymnasium</p>
            </div>
            <div className=" flex items-center gap-1">
              <img src="https://i.ibb.co/3Y8Y4VQ/Capa-1-4.png" alt="" />
              <p className=" text-base font-medium text-[#101010]">Park</p>
            </div>
            <div className=" flex items-center gap-1">
              <img src="https://i.ibb.co/NWDytXM/Capa-1-5.png" alt="" />
              <p className=" text-base font-medium text-[#101010]">
                Reserved Parking
              </p>
            </div>
            <div className=" flex items-center gap-1">
              <img src="https://i.ibb.co/h7pdW09/Frame-2.png" alt="" />
              <p className=" text-base font-medium text-[#101010]">Security</p>
            </div>
            <div className=" flex items-center gap-1">
              <img src="https://i.ibb.co/rmsZPnf/Frame-1000006883.png" alt="" />
              <p className=" text-base font-medium text-[#101010]">
                Water Storage
              </p>
            </div>
            <div className=" flex items-center gap-1">
              <img
                src="https://i.ibb.co/q7bNGGc/Frame-1000006883-1.png"
                alt=""
              />
              <p className=" text-base font-medium text-[#101010]">
                Private Terrace/Garden
              </p>
            </div>
            <div className=" flex items-center gap-1">
              <img src="https://i.ibb.co/J7nXpVJ/Capa-1.png" alt="" />
              <p className=" text-base font-medium text-[#101010]">
                Vaastu Compliant
              </p>
            </div>
            <div className=" flex items-center gap-1">
              <img src="https://i.ibb.co/t3Ywtrr/Capa-1-1.png" alt="" />
              <p className=" text-base font-medium text-[#101010]">
                Service/Goods Lift
              </p>
            </div>
            <div className=" flex items-center gap-1">
              <img src="https://i.ibb.co/cFMr3z7/Capa-1-2.png" alt="" />
              <p className=" text-base font-medium text-[#101010]">
                Visitor Parking
              </p>
            </div>
            <div className=" flex items-center gap-1">
              <img src="https://i.ibb.co/5hhnbqh/Frame-1.png" alt="" />
              <p className=" text-base font-medium text-[#101010]">
                Intercom Facility
              </p>
            </div>
            <div className=" flex items-center gap-1">
              <img src="https://i.ibb.co/R3rgpVQ/Capa-1-3.png" alt="" />
              <p className=" text-base font-medium text-[#101010]">
                Maintenance Staff
              </p>
            </div>
            <div className=" flex items-center gap-1">
              <img src="https://i.ibb.co/Ws4M80k/Capa-1-4.png" alt="" />
              <p className=" text-base font-medium text-[#101010]">
                Waste Disposal
              </p>
            </div>
            <div className=" flex items-center gap-1">
              <img src="https://i.ibb.co/n7XR49V/Layer-1.png" alt="" />
              <p className=" text-base font-medium text-[#101010]">
                Laundry Service
              </p>
            </div>
            <div className=" flex items-center gap-1">
              <img src="https://i.ibb.co/5xcjJ6r/Layer-1-1.png" alt="" />
              <p className=" text-base font-medium text-[#101010]">
                Internet/Wi-Fi Connectivity
              </p>
            </div>
            <div className=" flex items-center gap-1">
              <img src="https://i.ibb.co/1rmq4hZ/Capa-1-5.png" alt="" />
              <p className=" text-base font-medium text-[#101010]">
                DTH Television Facility
              </p>
            </div>
            <div className=" flex items-center gap-1">
              <img src="https://i.ibb.co/wgXdz5R/Capa-1-6.png" alt="" />
              <p className=" text-base font-medium text-[#101010]">Piped Gas</p>
            </div>
            <div className=" flex items-center gap-1">
              <img src="https://i.ibb.co/RyXsP6G/Layer-1-2.png" alt="" />
              <p className=" text-base font-medium text-[#101010]">
                Jogging and Strolling Track
              </p>
            </div>
            <div className=" flex items-center gap-1">
              <img src="https://i.ibb.co/s6kw5Ks/Capa-1-7.png" alt="" />
              <p className=" text-base font-medium text-[#101010]">
                Outdoor Tennis Courts
              </p>
            </div>
            <div className=" flex items-center gap-1">
              <img src="https://i.ibb.co/3048Nzk/Capa-1-8.png" alt="" />
              <p className=" text-base font-medium text-[#101010]">
                Early Learning Centre
              </p>
            </div>
            <div className=" flex items-center gap-1">
              <img src="https://i.ibb.co/55PYwRg/Capa-1-9.png" alt="" />
              <p className=" text-base font-medium text-[#101010]">
                Kids Play Area
              </p>
            </div>
            <div className=" flex items-center gap-1">
              <img src="https://i.ibb.co/zSm2V15/Capa-1-10.png" alt="" />
              <p className=" text-base font-medium text-[#101010]">
                Indoor Squash & <br /> Badminton Courts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="max-w-[1216px] mx-auto mt-12">
        <div className=" text-center">
          <h2 className=" text-[40px] font-bold text-[#181818]">
            Other Services
          </h2>
        </div>

        <div className=" flex gap-6 my-12">
          {/* first */}
          <div className=" w-[384px] h-[200px] bg-[#ecf5ff] p-6 rounded">
            <div className=" flex items-start gap-6">
              <div className=" w-[48px] h-[48px] bg-[#ee6611] flex items-center justify-center rounded">
                <img src="https://i.ibb.co/Jc8F7pt/Vector.png" alt="" />
              </div>

              <h2 className=" text-2xl font-semibold">
                Advanced Property <br /> Search
              </h2>
            </div>
            <div className="ml-[70px] mt-3">
              <p className="2xl:text-base xl:text-base lg:text-sm font-medium text-[#6B7280]">
                Effortlessly find your dream <br /> property with advanced
                search <br /> filters.
              </p>
            </div>
          </div>

          {/* second */}
          <div className=" w-[384px] h-[200px] bg-[#ecf5ff] p-6 rounded">
            <div className=" flex items-start gap-6">
              <div className=" w-[48px] h-[48px] bg-[#ee6611] flex items-center justify-center rounded">
                <img src="https://i.ibb.co/Jc8F7pt/Vector.png" alt="" />
              </div>

              <h2 className=" text-2xl font-semibold">
                Virtual Tours and <br /> Multimedia
              </h2>
            </div>
            <div className="ml-[70px] mt-3">
              <p className="2xl:text-base xl:text-base lg:text-sm font-medium text-[#6B7280]">
                Explore properties through <br /> immersive virtual tours and HD{" "}
                <br /> photos.
              </p>
            </div>
          </div>

          {/* third */}
          <div className=" w-[384px] h-[200px] bg-[#ecf5ff] p-6 rounded">
            <div className=" flex items-start gap-6">
              <div className=" w-[48px] h-[48px] bg-[#ee6611] flex items-center justify-center rounded">
                <img src="https://i.ibb.co/Jc8F7pt/Vector.png" alt="" />
              </div>

              <h2 className=" text-2xl font-semibold">
                Secure Online <br /> Transactions
              </h2>
            </div>
            <div className="ml-[70px] mt-3">
              <p className=" 2xl:text-base xl:text-base lg:text-sm font-medium text-[#6B7280]">
                Ensure secure transactions and <br /> e-sign documents
                seamlessly <br /> online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Others Nearby Properties section */}
      <section className=" max-w-[1216px] mx-auto mt-10 relative mb-20">
        <div className=" flex items-center justify-between">
          <h2 className=" text-2xl font-semibold text-[#111827]">
            Others Nearby Properties
          </h2>
          <button className=" text-lg font-semibold text-[#0059b1] underline cursor-pointer">
            <Link to={'/sell'}>See all propeety</Link>
          </button>
        </div>

        {/* card section */}
        <div className=" relative">
          <div className=" mt-6 mb-6 flex gap-8">
            <Swiper
              ref={swiperRef1} // Assign the ref to the Swiper component
              spaceBetween={20}
              slidesPerView={4}
              breakpoints={{
                325: {
                  slidesPerView: 1,
                },
                424: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <div className=" relative">
                <SwiperSlide>
                  {/* first */}
                  <div>
                    <div className="card card-compact  bg-base-100 shadow-xl rounded-none">
                      <figure>
                        <img
                          src="https://i.ibb.co/SRp1GBg/Banner-Image.jpg"
                          alt=""
                        />
                      </figure>
                      <div className="card-body">
                        <div className=" flex items-center justify-between">
                          <div className=" bg-[#c5e2ff] p-2 w-[92px] rounded">
                            <h2 className=" text-sm font-normal text-[#00254A]">
                              Apartment !
                            </h2>
                          </div>

                          <div className=" flex items-center gap-2">
                            <img
                              src="https://i.ibb.co/5GBfs85/Rectangle-26.png"
                              alt=""
                            />
                            <h2 className=" text-base font-medium text-[#111827]">
                              Ready to Move
                            </h2>
                          </div>
                        </div>

                        <hr className=" border-[#D1D5DB]" />
                        <h2 className=" text-xl font-semibold text-[#111827]">
                          SunnySlope Suites
                        </h2>
                        <div className=" flex items-center gap-2">
                          <img
                            src="https://i.ibb.co/wBrGHSN/fi-bs-marker.png"
                            alt=""
                          />
                          <p className=" text-base font-medium text-[#6B7280]">
                            Meadowshire Park, Greenfield, USA
                          </p>
                        </div>
                        <div className=" py-4">
                          <h2 className=" text-2xl font-semibold text-[#111827]">
                            $ 250000
                          </h2>
                        </div>
                      </div>
                    </div>

                    <div className=" w-[55px] h-[28px] bg-[#fdf0e7] flex items-center gap-2 p-1 rounded absolute left-0 right-0 top-0 mt-[155px] ml-2">
                      <img src="https://i.ibb.co/7gR364F/Gallery.png" alt="" />
                      <span className=" text-base font-semibold">20</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {/* second */}
                  <div className=" relative">
                    <div className="card card-compact  bg-base-100 shadow-xl rounded-none">
                      <figure>
                        <img
                          src="https://i.ibb.co/LJdkccq/Banner-Image-1.png"
                          alt=""
                        />
                      </figure>
                      <div className="card-body">
                        <div className=" flex items-center justify-between">
                          <div className=" bg-[#c5e2ff] p-2 w-[92px] rounded">
                            <h2 className=" text-sm font-normal text-[#00254A]">
                              Apartment !
                            </h2>
                          </div>

                          <div className=" flex items-center gap-2">
                            <img
                              src="https://i.ibb.co/5GBfs85/Rectangle-26.png"
                              alt=""
                            />
                            <h2 className=" text-base font-medium text-[#111827]">
                              Ready to Move
                            </h2>
                          </div>
                        </div>

                        <hr className=" border-[#D1D5DB]" />
                        <h2 className=" text-xl font-semibold text-[#111827]">
                          SunnySlope Suites
                        </h2>
                        <div className=" flex items-center gap-2">
                          <img
                            src="https://i.ibb.co/wBrGHSN/fi-bs-marker.png"
                            alt=""
                          />
                          <p className=" text-base font-medium text-[#6B7280]">
                            Meadowshire Park, Greenfield, USA
                          </p>
                        </div>
                        <div className=" py-4">
                          <h2 className=" text-2xl font-semibold text-[#111827]">
                            $ 250000
                          </h2>
                        </div>
                      </div>
                    </div>

                    <div className=" w-[55px] h-[28px] bg-[#fdf0e7] flex items-center gap-2 p-1 rounded absolute left-0 right-0 top-0 mt-[155px] ml-2">
                      <img src="https://i.ibb.co/7gR364F/Gallery.png" alt="" />
                      <span className=" text-base font-semibold">20</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {/* third */}
                  <div>
                    <div className="card card-compact  bg-base-100 shadow-xl rounded-none">
                      <figure>
                        <img
                          src="https://i.ibb.co/X45v473/Banner-Image-2.png"
                          alt=""
                        />
                      </figure>
                      <div className="card-body">
                        <div className=" flex items-center justify-between">
                          <div className=" bg-[#c5e2ff] p-2 w-[92px] rounded">
                            <h2 className=" text-sm font-normal text-[#00254A]">
                              Apartment !
                            </h2>
                          </div>

                          <div className=" flex items-center gap-2">
                            <img
                              src="https://i.ibb.co/5GBfs85/Rectangle-26.png"
                              alt=""
                            />
                            <h2 className=" text-base font-medium text-[#111827]">
                              Ready to Move
                            </h2>
                          </div>
                        </div>

                        <hr className=" border-[#D1D5DB]" />
                        <h2 className=" text-xl font-semibold text-[#111827]">
                          SunnySlope Suites
                        </h2>
                        <div className=" flex items-center gap-2">
                          <img
                            src="https://i.ibb.co/wBrGHSN/fi-bs-marker.png"
                            alt=""
                          />
                          <p className=" text-base font-medium text-[#6B7280]">
                            Meadowshire Park, Greenfield, USA
                          </p>
                        </div>
                        <div className=" py-4">
                          <h2 className=" text-2xl font-semibold text-[#111827]">
                            $ 250000
                          </h2>
                        </div>
                      </div>
                    </div>

                    <div className=" w-[55px] h-[28px] bg-[#fdf0e7] flex items-center gap-2 p-1 rounded absolute left-0 right-0 top-0 mt-[155px] ml-2">
                      <img src="https://i.ibb.co/7gR364F/Gallery.png" alt="" />
                      <span className=" text-base font-semibold">20</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {/* first */}
                  <div>
                    <div className="card card-compact  bg-base-100 shadow-xl rounded-none">
                      <figure>
                        <img
                          src="https://i.ibb.co/SRp1GBg/Banner-Image.jpg"
                          alt=""
                        />
                      </figure>
                      <div className="card-body">
                        <div className=" flex items-center justify-between">
                          <div className=" bg-[#c5e2ff] p-2 w-[92px] rounded">
                            <h2 className=" text-sm font-normal text-[#00254A]">
                              Apartment !
                            </h2>
                          </div>

                          <div className=" flex items-center gap-2">
                            <img
                              src="https://i.ibb.co/5GBfs85/Rectangle-26.png"
                              alt=""
                            />
                            <h2 className=" text-base font-medium text-[#111827]">
                              Ready to Move
                            </h2>
                          </div>
                        </div>

                        <hr className=" border-[#D1D5DB]" />
                        <h2 className=" text-xl font-semibold text-[#111827]">
                          SunnySlope Suites
                        </h2>
                        <div className=" flex items-center gap-2">
                          <img
                            src="https://i.ibb.co/wBrGHSN/fi-bs-marker.png"
                            alt=""
                          />
                          <p className=" text-base font-medium text-[#6B7280]">
                            Meadowshire Park, Greenfield, USA
                          </p>
                        </div>
                        <div className=" py-4">
                          <h2 className=" text-2xl font-semibold text-[#111827]">
                            $ 250000
                          </h2>
                        </div>
                      </div>
                    </div>

                    <div className=" w-[55px] h-[28px] bg-[#fdf0e7] flex items-center gap-2 p-1 rounded absolute left-0 right-0 top-0 mt-[155px] ml-2">
                      <img src="https://i.ibb.co/7gR364F/Gallery.png" alt="" />
                      <span className=" text-base font-semibold">20</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {/* second */}
                  <div className=" relative">
                    <div className="card card-compact  bg-base-100 shadow-xl rounded-none">
                      <figure>
                        <img
                          src="https://i.ibb.co/LJdkccq/Banner-Image-1.png"
                          alt=""
                        />
                      </figure>
                      <div className="card-body">
                        <div className=" flex items-center justify-between">
                          <div className=" bg-[#c5e2ff] p-2 w-[92px] rounded">
                            <h2 className=" text-sm font-normal text-[#00254A]">
                              Apartment !
                            </h2>
                          </div>

                          <div className=" flex items-center gap-2">
                            <img
                              src="https://i.ibb.co/5GBfs85/Rectangle-26.png"
                              alt=""
                            />
                            <h2 className=" text-base font-medium text-[#111827]">
                              Ready to Move
                            </h2>
                          </div>
                        </div>

                        <hr className=" border-[#D1D5DB]" />
                        <h2 className=" text-xl font-semibold text-[#111827]">
                          SunnySlope Suites
                        </h2>
                        <div className=" flex items-center gap-2">
                          <img
                            src="https://i.ibb.co/wBrGHSN/fi-bs-marker.png"
                            alt=""
                          />
                          <p className=" text-base font-medium text-[#6B7280]">
                            Meadowshire Park, Greenfield, USA
                          </p>
                        </div>
                        <div className=" py-4">
                          <h2 className=" text-2xl font-semibold text-[#111827]">
                            $ 250000
                          </h2>
                        </div>
                      </div>
                    </div>

                    <div className=" w-[55px] h-[28px] bg-[#fdf0e7] flex items-center gap-2 p-1 rounded absolute left-0 right-0 top-0 mt-[155px] ml-2">
                      <img src="https://i.ibb.co/7gR364F/Gallery.png" alt="" />
                      <span className=" text-base font-semibold">20</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {/* third */}
                  <div>
                    <div className="card card-compact  bg-base-100 shadow-xl rounded-none">
                      <figure>
                        <img
                          src="https://i.ibb.co/X45v473/Banner-Image-2.png"
                          alt=""
                        />
                      </figure>
                      <div className="card-body">
                        <div className=" flex items-center justify-between">
                          <div className=" bg-[#c5e2ff] p-2 w-[92px] rounded">
                            <h2 className=" text-sm font-normal text-[#00254A]">
                              Apartment !
                            </h2>
                          </div>

                          <div className=" flex items-center gap-2">
                            <img
                              src="https://i.ibb.co/5GBfs85/Rectangle-26.png"
                              alt=""
                            />
                            <h2 className=" text-base font-medium text-[#111827]">
                              Ready to Move
                            </h2>
                          </div>
                        </div>

                        <hr className=" border-[#D1D5DB]" />
                        <h2 className=" text-xl font-semibold text-[#111827]">
                          SunnySlope Suites
                        </h2>
                        <div className=" flex items-center gap-2">
                          <img
                            src="https://i.ibb.co/wBrGHSN/fi-bs-marker.png"
                            alt=""
                          />
                          <p className=" text-base font-medium text-[#6B7280]">
                            Meadowshire Park, Greenfield, USA
                          </p>
                        </div>
                        <div className=" py-4">
                          <h2 className=" text-2xl font-semibold text-[#111827]">
                            $ 250000
                          </h2>
                        </div>
                      </div>
                    </div>

                    <div className=" w-[55px] h-[28px] bg-[#fdf0e7] flex items-center gap-2 p-1 rounded absolute left-0 right-0 top-0 mt-[155px] ml-2">
                      <img src="https://i.ibb.co/7gR364F/Gallery.png" alt="" />
                      <span className=" text-base font-semibold">20</span>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
          <div className="top-0 -right-8 mt-[70px] absolute z-10">
            <a onClick={goToNext1}>
              <img
                className=" w-[80px] h-[80px]"
                src="https://i.ibb.co/pnGqqtY/Group-33.png"
                alt=""
              />
            </a>
          </div>

          <div className="top-0 -left-8 right-0 mt-[70px] absolute z-10">
            <a onClick={goToPrev1}>
              <img
                className=" w-[80px] h-[80px]"
                src="https://i.ibb.co/qMNKKpD/Group-34.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
