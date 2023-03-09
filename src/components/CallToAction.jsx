import React from 'react'

function CallToAction() {
  return (
    <section className='flex justify-center items-center mt-8'>
      <article className='flex flex-col xs:flex-row justify-between items-center w-[80%] p-8 bg-black-gradient-2 rounded-xl'>
        {/* Content */}
        <div>
          <h2 className={'text-[2rem] font-bold text-gradient'}>Let's try our service now!</h2>
            <p className='text-dimWhite text-[1.5rem] w-full'>Everyting you need to accept card payments and grow <br />you business anywhere on the planet.</p>
        </div>
        {/* button */}
        <div className='mt-8'>
          <a href="tel:+250788426462" className='block bg-gradient font-poppins text-[1.25rem] tracking-widest font-semibold px-4 py-2 border-[2px] border-orange-600 text-gradient text-center rounded-md opacity-[80%] hover:opacity-[100%]'>
          Call Us
        </a>
        </div>
      </article>
    </section>
  )
}

export default CallToAction;