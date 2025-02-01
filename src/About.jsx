import React from 'react';
import Worship from './assets/worshipp.jpg';
const About = () => {
  return (
    <div className='bg-slate-200 pb-3'>
             <h1 className='font-bold text-xl text-center'>Our History</h1>
             <div className='md:flex gap-2 p-5'>
                <div className='basis-1/2 '>
<p>
The history of [Church Name] is a testament to faith, resilience, and a commitment to serving God and the community. Founded in [Year of Establishment], the church began as a small gathering of believers with a shared vision of creating a place for worship, fellowship, and outreach.
</p>
<h2 className='font-bold text-lg'>
Early Beginnings
</h2>
<p>
The church's journey started in [City/Town/Village], where a group of [Number] devoted Christians came together under the leadership of [Founder’s Name or Group]. Initially, services were held in homes or under temporary structures, with a deep reliance on prayer and faith to overcome challenges.
</p>
<p>
In [Year], the first permanent building was constructed. It was a modest structure made possible by the collective efforts of the members, who contributed time, resources, and labor. This marked a turning point, as the church began to grow in size and influence.
</p>
<h1 className='font-bold text-xl'>
Modern Era
</h1>
<p>
Today, [Church Name] stands as a beacon of hope and a center of spiritual growth for the community. It has embraced modern technology to enhance worship experiences, including live-streaming services and online Bible study groups. The church also partners with global ministries to spread its message beyond local borders.
</p>
                </div>
                <div className='basis-1/2'>
                    <img src={Worship} className='rounded-xl' alt="" />
                </div>
             </div>

             <div className='bg-white rounded-xl p-5 mx-2 mb-3'>
                <h1 className='font-bold text-xl text-center'>
Legacy and vision
                </h1>
                <p>
The legacy of [Church Name] is built on faith, service, and love. As the church looks to the future, its mission remains steadfast: to glorify God, edify believers, and serve humanity. With plans to expand its facilities and outreach programs, the church is poised to impact even more lives in the years to come.
                </p>
                <p>
                [Church Name] invites everyone to be part of this journey of faith and transformation, continuing to write history for the glory of God.
                </p>
             </div>
    </div>
  )
}

export default About