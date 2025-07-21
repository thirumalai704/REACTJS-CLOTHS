import { Star } from 'lucide-react'
import React from 'react'

function Reviews() {
  return (
    <div className='flex flex-col gap-y-6'>
          <div className='flex flex-col gap-y-8 bg-bgclr p-4'>
            <div className='flex justify-between'>
              {/* left side  */}
               <div>
                <h2 className='font-semibold mb-2 text-primary  text-xl'> Ramesh</h2>
                <p className='mb-2 font-medium text-text'>March 20,2025</p>
                <p className='text-text font-medium text-sm'>5 day ago</p>
               </div>

               {/* right side  */}
               <div className='flex flex-col gap-y-4'> 
                <div className='flex gap-x-4'>
                    <Star fill='primary' />
                    <Star fill='primary' />
                    <Star fill='primary' />
                    <Star fill='primary' />
                    <Star />
                   
                    <p className='text-text font-medium ml-4'>(4/5)</p>

                </div>
                   <h4 className='capitalize text-text font-semibold'>The Product i Purchaced was too good</h4>
                   <p className='text-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error rerum non praesentium voluptates perspiciatis modi.</p>
                </div>   
            </div>
            <div className='self-end'>
              <button className='bg-bgclr rounded px-3 py-1 text-primary font-medium text-lg'>Reject</button>
              <button className='px-4 py-1  ml-4 rounded text-bgclr bg-primary font-medium text-lg'>Approve</button>
            </div>
          </div>
          <div className='flex flex-col gap-y-8 bg-bgclr p-4'>
            <div className='flex justify-between'>
              {/* left side  */}
               <div>
                <h2 className='font-semibold mb-2 text-primary  text-xl'> Suresh</h2>
                <p className='mb-2 font-medium text-text'>March 24,2025</p>
                <p className='text-text font-medium text-sm'>2 day ago</p>
               </div>

               {/* right side  */}
               <div className='flex flex-col gap-y-4'> 
                <div className='flex gap-x-4'>
                    <Star fill='primary' />
                    <Star fill='primary' />
                    <Star fill='primary' />
                    <Star  />
                    <Star />
                   
                    <p className='text-text font-medium ml-4'>(3/5)</p>

                </div>
                   <h4 className='capitalize text-text font-semibold'>The Product i Purchaced was too good and helpfull for my college</h4>
                   <p className='text-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error rerum non praesentium voluptates perspiciatis modi.</p>
                </div>   
            </div>
            <div className='self-end'>
              <button className='bg-bgclr rounded px-3 py-1 text-primary font-medium text-lg'>Reject</button>
              <button className='px-4 py-1  ml-4 rounded text-bgclr bg-primary font-medium text-lg'>Approve</button>
            </div>
          </div>
    </div>
  )
}

export default Reviews