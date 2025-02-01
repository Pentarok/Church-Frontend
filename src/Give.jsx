import React from 'react'
import { FaChurch } from 'react-icons/fa';
import { FaWallet } from 'react-icons/fa';
import Giving from "./assets/giving.jpg"
import { AiOutlineCreditCard } from 'react-icons/ai';
const Give = () => {
  return (
    <div className='p-4'>
        <div>
<div className=''>
    <img src={Giving} className=" md:h-[500px] w-full rounded-xl"  alt="" />
</div>
            <div className='p-5'>
                <p>
                Giving is an act of faith and a reflection of God’s abundant blessings in our lives. As the Apostle Paul reminds us in 2 Corinthians 9:7, <i className='font-bold'>"Each one must give as he has decided in his heart, not reluctantly or under compulsion, for God loves a cheerful giver."</i> Your contributions not only sustain the work of the church but also become a testament of your trust in God’s provision. Through your generosity, we can reach those in need, spread the Gospel, and serve as a beacon of hope in our community.
                </p>
            </div>
            <h1 className='text-center text-2xl font-bold'>WAYS TO GIVE</h1>

            <div className='grid md:grid-cols-3 gap-4'>
               <div className='shadow rounded-xl bg-slate-100 p-5'>
                <div className='flex justify-center items-center'>
                <div className='flex justify-center  items-center h-[60px] w-[60px] border border-black rounded-full'>
                    <FaChurch size={40} color="black" />
                    </div>
                </div>
                    
                    <p className='text-justify'>
                    You can give during any of our services using the envelopes provided for that purpose. This can be in cash or by cheque. The envelope has the different designations so your giving is correctly directed to what you're giving for.
                    </p>
               </div>
               <div className='shadow rounded-xl bg-slate-100 p-5'>
                <div className='flex justify-center items-center'>
                <div  className='flex justify-center items-center h-[60px] w-[60px] border border-black rounded-full'>
                <FaWallet size={30} color="green" />
                </div>
                </div>
                
                <p>
                You can send your giving through M-PESA.
                </p>
                <p>
                    <span className='font-bold'>Paybill No:</span>
                <span className='pl-1'>6578678</span>
                </p>
               <p><span className='font-bold'>Account:</span>
               <span className='pl-1'>GloryVine</span></p>
               </div>
               <div className='shadow rounded-xl bg-slate-100 p-5'>
               <div className='flex justify-center items-center'>
                <div className='flex justify-center  items-center h-[60px] w-[60px] border border-black rounded-full'>
                <AiOutlineCreditCard size={30} color="gray" />

                    </div>
                </div>
                <p>
                Giving at GloryVine can also be done by direct deposit to our bank accounts.
                </p>
                <p>
                    <span className='font-bold'>
                        Account:
                    </span>
                    <span className='px-2'>
                        GloryVine Church
                    </span>
                </p>
                <p>
                    <span className='font-bold'>
                    Bank:
                    </span>
                    <span className='px-2'>
                    Equity Bank, Murang'a Branch
                    </span>
                </p>
                <p>
                    <span className='font-bold'>
                    Account No:
                    </span>
                    <span className='px-2'>
                        4573893829
                    </span>
                </p>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Give