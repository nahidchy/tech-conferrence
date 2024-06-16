
import { useEffect } from "react";
import { useLoaderData, useLocation, useParams } from "react-router-dom";




const SpeakerDetails = () => {
  const data = useLoaderData();
  const {id} = useParams();
const speakers = data.find((speaker) => speaker.id === Number(id));

const { pathname } = useLocation();

useEffect(() => {
    window.scrollTo(0, 0);
}, [pathname]);

// console.log(speakers.speaker_position)
    return (
        <div className="max-w-6xl mx-auto py-28">
               <div className="border-purple-600 bg-white border rounded-2xl border-t-4 mx-auto py-20 px-20">
                  <div className="flex gap-14 px-20 items-center mb-20">
                 <div>
                 <img className="w-64 mx-auto"  src={speakers.speaker_img} alt="" />
                 </div>
                 <div className="space-y-4">
                 <p className="text-3xl text-black font-semibold">{speakers.speaker_title}</p>
                 <p className="text-xl">{speakers.speaker_description}</p>
                 </div>
                  </div>
                    <div className="border-purple-600 border rounded-2xl border-t-4 text-center p-3">
                        <p className="text-xl text-black">{speakers.speaker_name}</p>
                        <p>{speakers.speaker_position}</p>
                    </div>
                </div>
        </div>
    );
};

export default SpeakerDetails;