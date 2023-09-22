import ClientProfileCarousel from './ClientProfileCarousel'

export default function Me () {
  return (
    <section className="bg-white-500 max-w-[1440px] mx-auto mt-10">
        <div className="bg-white sm:px-16 px-8 mb-16">
            <p className='font-avenir text-[#5773FF] font-normal text-sm'>Happy client</p>
            <h2 className='font-kotori-rose font-bold text-[#152C5B] lg:text-3xl text-xl w-[345px] lg:w-[500px] mt-2'>What tailors think about us...</h2>
        </div>

        <ClientProfileCarousel />  
    </section>
  )
}
