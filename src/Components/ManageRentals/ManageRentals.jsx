import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const ManageRentals = () => {
  const swiperRef1 = useRef(null);
  //
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const swiperRef3 = useRef(null);
  //

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
      {/* banner section */}
      <section className=" mt-[90px]">
        <div>
          <img
            className=" w-[1440px] h-[320px] mx-auto"
            src="https://i.ibb.co/XLL7LS8/Frame-4.jpg"
            alt=""
          />
        </div>
      </section>

      {/* New Flat Listed section */}
      <section>
        <div className=" mt-10 max-w-[1216px] mx-auto">
          <div className=" flex gap-8">
            {/* first  */}
            <div className=" w-[280px] h-[185px] bg-[#fdf0e7] p-4">
              <div>
                <h2 className=" text-[40px] font-bold text-[#d95d0f]">2K+</h2>
                <p className=" text-base font-normal text-[#1f2937]">
                  New Flat Listed
                </p>
              </div>

              <div className=" flex items-center justify-between mt-6">
                <p className=" text-base font-normal text-[#E61] underline">
                  View all
                </p>
                <span>
                  <img src="https://i.ibb.co/wcW6VKZ/icon.png" alt="" />
                </span>
              </div>
            </div>

            {/* second */}
            <div className=" w-[280px] h-[185px] bg-[#fdf0e7] p-4">
              <div>
                <h2 className=" text-[40px] font-bold text-[#0051a1]">2K+</h2>
                <p className=" text-base font-normal text-[#1f2937]">
                  New Flat Listed
                </p>
              </div>

              <div className=" flex items-center justify-between mt-6">
                <p className=" text-base font-normal text-[#0051a1] underline">
                  View all
                </p>
                <span>
                  <img src="https://i.ibb.co/wQBSfqT/icon-1.png" alt="" />
                </span>
              </div>
            </div>

            {/* Third */}
            <div className=" w-[280px] h-[185px] bg-[#fdf0e7] p-4">
              <div>
                <h2 className=" text-[40px] font-bold text-[#d95d0f]">2K+</h2>
                <p className=" text-base font-normal text-[#1f2937]">
                  New Flat Listed
                </p>
              </div>

              <div className=" flex items-center justify-between mt-6">
                <p className=" text-base font-normal text-[#E61] underline">
                  View all
                </p>
                <span>
                  <img src="https://i.ibb.co/wcW6VKZ/icon.png" alt="" />
                </span>
              </div>
            </div>

            {/* four  */}
            <div className=" w-[280px] h-[185px] bg-[#fdf0e7] p-4">
              <div>
                <h2 className=" text-[40px] font-bold text-[#0051a1]">2K+</h2>
                <p className=" text-base font-normal text-[#1f2937]">
                  New Flat Listed
                </p>
              </div>

              <div className=" flex items-center justify-between mt-6">
                <p className=" text-base font-normal text-[#0051a1] underline">
                  View all
                </p>
                <span>
                  <img src="https://i.ibb.co/wQBSfqT/icon-1.png" alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Efficient and Transparent  section */}
      <section className=" mt-10 w-[1216px] mx-auto mb-44">
        <div className=" relative">
          <div>
            <img
              className=" w-[904px] h-[455px]"
              src="https://i.ibb.co/zbQBJp2/Group-28-1.png"
              alt=""
            />
          </div>

          <div className=" absolute right-0 top-0 mt-80">
            <div className="w-[592px] h-[270px] bg-[#ecf5ff] p-8">
              <div className=" flex items-center gap-2">
                <hr className=" w-[51px] border-2 border-[#ee6611]" />
                <h2 className=" text-lg font-semibold text-[#E61]">
                  Our Story
                </h2>
              </div>
              <h2 className=" text-4xl font-bold text-[#1F2937] leading-snug	py-5">
                Efficient and Transparent <br />
                Home Buying Solutions
              </h2>
              <p className=" text-base font-medium text-[#6b7280]">
                In the symphony of bustling markets and serene landscapes,
                <br /> Heritage-Nest was born—a vision to
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement  section */}
      <section className=" mt-10 w-[1216px] mx-auto mb-48">
        <div className=" relative">
          <div className=" flex">
            <div className="absolute left-0 top-0 mt-80 z-10">
              <div className="w-[592px] h-[270px] bg-[#fdf0e7] p-8">
                <div className=" flex items-center gap-2">
                  <hr className=" w-[51px] border-2 border-[#ee6611]" />
                  <h2 className=" text-lg font-semibold text-[#E61]">
                    Mission Statement
                  </h2>
                </div>
                <h2 className=" text-4xl font-bold text-[#1F2937] leading-snug	py-2">
                  Efficient and Transparent <br />
                  Home Buying Solutions
                </h2>
                <p className=" text-base font-medium text-[#6b7280]">
                  To bridge the miles with smiles, Heritage-Nest pledges to be
                  the golden thread connecting NRIs to their homeland, through
                  trust, transparency, and tailored real estate solutions.
                </p>
              </div>
            </div>

            <div className=" relative">
              <div className=" ml-[400px]">
                <img
                  className=" w-[710px] h-[455px]"
                  src="https://i.ibb.co/BT8NzcV/img-1.png"
                  alt=""
                />
              </div>

              <div className=" absolute top-0 right-0 mt-[190px] mr-[350px]">
                <img src="https://i.ibb.co/vqDxpx0/Gallery.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discover the Faces Behind Our Success section */}
      <section>
        <div className=" w-[1216px] mx-auto">
          <div className=" flex items-center gap-2">
            <hr className=" w-[51px] border-2 border-[#ee6611]" />
            <h2 className=" text-lg font-semibold text-[#E61]">Our Teem</h2>
          </div>

          <h2 className=" text-[40px] font-bold text-[#111827]">
            Discover the Faces Behind Our Success
          </h2>
          {/* pic section */}
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
                    <img
                      className=" w-[384px] h-[417px]"
                      src="https://i.ibb.co/7y307M8/Rectangle-29.png"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    {/* second */}
                    <img
                      className=" w-[384px] h-[417px]"
                      src="https://i.ibb.co/Q8BxpQ2/Rectangle-30.png"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    {/* third */}
                    <img
                      className=" w-[384px] h-[417px]"
                      src="https://i.ibb.co/Dr72MjZ/Rectangle-31.png"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    {/* first */}
                    <img
                      className=" w-[384px] h-[417px]"
                      src="https://i.ibb.co/7y307M8/Rectangle-29.png"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    {/* second */}
                    <img
                      className=" w-[384px] h-[417px]"
                      src="https://i.ibb.co/Q8BxpQ2/Rectangle-30.png"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    {/* third */}
                    <img
                      className=" w-[384px] h-[417px]"
                      src="https://i.ibb.co/Dr72MjZ/Rectangle-31.png"
                      alt=""
                    />
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
            <div className="absolute top-0 -right-6 mt-44 z-10">
              <a onClick={goToNext1}>
                <img
                  className=" w-[80px] h-[80px]"
                  src="https://i.ibb.co/pnGqqtY/Group-33.png"
                  alt=""
                />
              </a>
            </div>

            <div className="absolute -left-7 top-0 mt-44 z-10">
              <a onClick={goToPrev1}>
                <img
                  className=" w-[80px] h-[80px]"
                  src="https://i.ibb.co/qMNKKpD/Group-34.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team For Book Consultation section */}
      <section>
        <div className=" w-[1216px] mx-auto mt-16">
          <div className=" flex justify-between">
            <div>
              <div className=" flex items-center gap-2">
                <hr className=" w-[51px] border-2 border-[#ee6611]" />
                <h2 className=" text-lg font-semibold text-[#E61]">
                  Meet the Team For Book Consultation
                </h2>
              </div>

              <h2 className=" text-5xl font-bold text-[#111827] py-6">
                Meet the stewards of your <br /> heritage journey
              </h2>
              <p className=" text-base font-medium text-[#6B7280]">
                each member an embodiment of expertise and warmth, dedicated to
                guiding you <br /> home, every step of the way.
              </p>

              <div>
                <button className="bg-[#0059B1] hover:bg-[#004080] w-[268px] h-[50px] text-white text-lg font-semibold mt-8 shadow-md">
                  Book Consultation Now
                </button>
              </div>
            </div>

            <div>
              <img
                className="w-[384px] h-[304px]"
                src="https://i.ibb.co/cwQfZxn/Rectangle-30-1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section>
        <div className=" mb-5 w-[1216px] mx-auto mt-16">
          <h2 className=" text-center text-[40px] font-bold py-12">
            Testimonials
          </h2>
          <div className=" flex gap-5">
            {/* first */}
            <Swiper
              ref={swiperRef3} // Assign the ref to the Swiper component
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
                  slidesPerView: 2,
                },
              }}
              onSlideChange={(swiper) =>
                setActiveSlideIndex(swiper.activeIndex)
              }
            >
              <div>
                <SwiperSlide>
                  {/* first */}
                  <div className=" bg-[#ECF5FF] w-[592px] h-[364px] p-8">
                    <div className=" text-center">
                      <div className=" flex justify-center mb-4">
                        <img
                          className=" h-[32px]"
                          src="https://i.ibb.co/dMqJR4Z/Frame-59.png"
                          alt=""
                        />
                      </div>
                      <p className=" text-lg font-normal text-[#818181]">
                        "The level of security provided by CypherPlay is
                        unmatched. I feel confident using my card for both
                        everyday purchases and travel. It's the peace of mind I
                        was looking for."
                      </p>

                      <div className=" mt-10">
                        <div className=" flex justify-center">
                          <img
                            className=" w-[48px] h-[48px]"
                            src="https://i.ibb.co/YjR01vQ/Ellipse-1.png"
                            alt=""
                          />
                        </div>

                        <h2 className=" text-xl font-semibold text-[#111827]">
                          Tony Stark
                        </h2>
                        <p className=" text-base font-normal text-[#6b7280]">
                          Marketing manager, XYZ
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  {/* second */}
                  <div className=" bg-[#ECF5FF] w-[592px] h-[364px] p-8">
                    <div className=" text-center">
                      <div className=" flex justify-center mb-4">
                        <img
                          className=" h-[32px]"
                          src="https://i.ibb.co/dMqJR4Z/Frame-59.png"
                          alt=""
                        />
                      </div>
                      <p className=" text-lg font-normal text-[#818181]">
                        "The level of security provided by CypherPlay is
                        unmatched. I feel confident using my card for both
                        everyday purchases and travel. It's the peace of mind I
                        was looking for."
                      </p>

                      <div className=" mt-10">
                        <div className=" flex justify-center">
                          <img
                            className=" w-[48px] h-[48px]"
                            src="https://i.ibb.co/5TnC5q7/Ellipse-1-1.png"
                            alt=""
                          />
                        </div>

                        <h2 className=" text-xl font-semibold text-[#111827]">
                          Tony Stark
                        </h2>
                        <p className=" text-base font-normal text-[#6b7280]">
                          Marketing manager, XYZ
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {/* first */}
                  <div className=" bg-[#ECF5FF] w-[592px] h-[364px] p-8">
                    <div className=" text-center">
                      <div className=" flex justify-center mb-4">
                        <img
                          className=" h-[32px]"
                          src="https://i.ibb.co/dMqJR4Z/Frame-59.png"
                          alt=""
                        />
                      </div>
                      <p className=" text-lg font-normal text-[#818181]">
                        "The level of security provided by CypherPlay is
                        unmatched. I feel confident using my card for both
                        everyday purchases and travel. It's the peace of mind I
                        was looking for."
                      </p>

                      <div className=" mt-10">
                        <div className=" flex justify-center">
                          <img
                            className=" w-[48px] h-[48px]"
                            src="https://i.ibb.co/YjR01vQ/Ellipse-1.png"
                            alt=""
                          />
                        </div>

                        <h2 className=" text-xl font-semibold text-[#111827]">
                          Tony Stark
                        </h2>
                        <p className=" text-base font-normal text-[#6b7280]">
                          Marketing manager, XYZ
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  {/* second */}
                  <div className=" bg-[#ECF5FF] w-[592px] h-[364px] p-8">
                    <div className=" text-center">
                      <div className=" flex justify-center mb-4">
                        <img
                          className=" h-[32px]"
                          src="https://i.ibb.co/dMqJR4Z/Frame-59.png"
                          alt=""
                        />
                      </div>
                      <p className=" text-lg font-normal text-[#818181]">
                        "The level of security provided by CypherPlay is
                        unmatched. I feel confident using my card for both
                        everyday purchases and travel. It's the peace of mind I
                        was looking for."
                      </p>

                      <div className=" mt-10">
                        <div className=" flex justify-center">
                          <img
                            className=" w-[48px] h-[48px]"
                            src="https://i.ibb.co/5TnC5q7/Ellipse-1-1.png"
                            alt=""
                          />
                        </div>

                        <h2 className=" text-xl font-semibold text-[#111827]">
                          Tony Stark
                        </h2>
                        <p className=" text-base font-normal text-[#6b7280]">
                          Marketing manager, XYZ
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mb-10">
          {[...Array(4).keys()].map((index) => (
            <button
              key={index}
              className={`w-[12px] h-[12px] rounded-full ${
                activeSlideIndex === index
                  ? "bg-[#ee6611] w-[22px] h-[12px]"
                  : "bg-[#fdf0e7]"
              }`}
            ></button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ManageRentals;
