import React from 'react'
import ProfileCard from '../ProfileCard/ProfileCard'
import { logo, logo1, whois } from '../../components/assest';


function WhoWEAre() {
  return (
    <div>
<div  >
 <h2 className="text-white text-3xl md:text-8xl font-bold text-center my-12">
        Who We Are
      </h2>
</div>

          <div className="relative w-full h-screen flex items-center justify-center gap-6 top-10 ">
        <div className=" h-full ">
       <ProfileCard
  username="dreamteam"
    profileImage={logo1}
  videoSrc={whois}
  instagramLink="https://www.instagram.com/dreamteam_technologies/#"
/>
        </div>

        <div className=" h-full">
      <ProfileCard
  username="dreamteam"
  profileImage={logo1}
  videoSrc={whois}
  instagramLink="https://www.instagram.com/dreamteam_technologies/#"
/>
        </div>

       <div className='h-full'>
       <ProfileCard
  username="dreamteam"
  profileImage={logo1}
    videoSrc={whois}
  instagramLink="https://www.instagram.com/dreamteam_technologies/#"
/>
        </div>

      </div>
    </div>
  )
}

export default WhoWEAre