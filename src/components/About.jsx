import React from 'react';
import styles from '../style';
import { Footer, Navigation, Statistics } from '.';
import { about, founders } from '../constants';


const About = () => {
  return (
    <>
     <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navigation />
        <section>
          <div>
            <main>
            <div className='my-12'>
              <h1 className={`${styles.heading2} mt-10`}>
                <span className='text-gradient'>Streamlined Solutions</span> <br className='sm:block hidden' />for Your Property Needs
              </h1>
              <div className="w-full mt-6">
                  <p className={`${styles.paragraph} text-left max-w-[450px]`}>
                  Unlock endless possibilities with our wide range of expert services. From finding your dream home to securing the best deal, we've got you covered.
                  </p>
                </div>
            </div>
              {
                about.map(aboutUs => (
                  <div key={aboutUs.id} className="founder flex flex-col gap-8 md:flex-row justify-center items-center md:gap-16 mb-12 shadow-lg">
                      <div className='Kontent'>
                        <h2 className='font-bold text-2xl text-white'>
                          {aboutUs.title}
                        </h2>
                        <p className='text-lg font-[300] text-orange-400 tracking-wide mb-4'>
                          {
                            aboutUs.subTitle
                          }
                        </p>
                        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
                          {
                            aboutUs.description
                          }
                        </p>
                      </div>
                      <div className="visual pb-4">
                        <img src={aboutUs.image} alt={aboutUs.title}/>
                        <div className='border-b-2 sm:hidden pt-16 border-orange-400/50' />
                      </div>
                  </div>
                ))
              }
            </main>

            <Statistics />
            
            <div className="founder sm:mt-4 flex flex-col gap-8 md:flex-row justify-center items-center md:gap-16 shadow-xl px-4 bg-[rgb(39,39,39)]">
              {
                founders.map(founder => {
                  return (
                  <article 
                    key={founder.id}
                    className="founder py-12 flex flex-col gap-8 md:flex-row justify-center items-center md:gap-16  "  
                  >
                    <div className="visual">
                      <img src={founder.personalInfo.image} className='w-[400px] border-2 rounded-lg mb-4' alt="our founder" />
                      <p className='position text-lg text-white font-[560] tracking-[3px]'>{founder.personalInfo.title}</p>
                      <p className='text-sm font-[200] text-white tracking-wide mb-6'>{founder.personalInfo.names}</p>
                    </div>
                    <div className="Kontent">
                      <h2 className='font-bold text-2xl text-white'>
                      {
                        founder.title
                      }
                      </h2>
                      <p className='text-lg font-[300] text-orange-400 tracking-wide mb-4'>{founder.subTitle}</p>
                      <p className={`${styles.paragraph} text-left sm: max-w-[510px]`}>
                      {
                        founder.description
                      }
                      </p>
                    </div>
                  </article>
                  )
                })
              }
            </div>

          </div>
        </section>
        <Footer />
      </div>
    </div>
    </>
  )
}

export default About;