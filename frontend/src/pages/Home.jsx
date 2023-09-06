import React from 'react';
import heroImg01 from '../assets/images/hero-img01.png';
import heroImg02 from '../assets/images/hero-img02.png';
import heroImg03 from '../assets/images/hero-img03.png';

const Home = () => {
  return <>
    {/* ======= hero section =======*/}

    <>
      <section className='hero__section pt-[60px] 2xl:h-[800px]'>
        <div className='container'>
          <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
            {/* ======= hero content =======*/}
            <div>
              <div className='lg:w-[570px]'>
                <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[46px] md:leading-[70px]'> We help patients live healthy, longer life
                </h1>
                <p className='text__para'>Java 21 enters the release candidate stage with 15 finalized features including virtual threads,
                  a generational Z garbage collector, and a key encapsulation mechanism API.</p>
                <button className='btn'> Request an Appointment

                </button>
              </div>

              {/* ======= hero counter =======*/}

              <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'> 30+
                  </h2>
                  <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'>
                  </span>
                  <p className='text__para'>Yeard of Experience</p>
                </div>

                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'> 16+
                  </h2>
                  <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'>
                  </span>
                  <p className='text__para'>Clinic Loacation</p>
                </div>

                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'> 26+
                  </h2>
                  <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'>
                  </span>
                  <p className='text__para'>Patient Satisfaction</p>
                </div>



              </div>

            </div>
            {/* ======= hero content =======*/}
            <div className='flex gap-[30px] justify-end'>
              <div>
                <img className="w-full" src={heroImg01} alt='' />
              </div>
              <dvi className="mt-[30px]">
                <img className="w-full mb-[30px]" src={heroImg02} alt='' />
                <img className="w-full" src={heroImg03} alt='' />
              </dvi>

            </div>
          </div>
        </div>
      </section>
      {/* ======= hero section end =======*/}
    </>
  </>
}

export default Home