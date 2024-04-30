import Banner from "../Banner/Banner";
import TouristsSpots from "../TouristsSpots/TouristsSpots";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Countries from "./Countries/Countries";
import { RiArrowDropDownLine } from "react-icons/ri";
import VisitorsReview from "./VisitorsReview/VisitorsReview";
import Marquee from "react-fast-marquee";

const Home = () => {
    const { touristsSpots, loader } = useContext(AuthContext);
    const sixTouristsSpots = touristsSpots.slice(0, 6);
    const [countriesSpots, setCountriesSpots] = useState([])

    useEffect(() => {
        fetch('https://world-tour-server-ten.vercel.app/countries')
            .then(res => res.json())
            .then(data => {
                setCountriesSpots(data)


            })
    }, [])
    return (
        <div>
            <Banner></Banner>
            <div>
                <h2 className="text-4xl text-center text-purple-600 font-bold my-10">Tourists Spots</h2>
                {
                    loader ? <div className="w-5 mx-auto"><span className="loading loading-bars  loading-lg"></span></div> : <p></p>
                }
                <div className="grid grid-cols-1 mx-auto  md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5">

                    {
                        sixTouristsSpots.map(spot => <TouristsSpots
                            key={spot._id}
                            spot={spot}

                        ></TouristsSpots>)
                    }
                </div>
                {/* countries spots */}
                <div>
                    <div className="bg-gray-400 py-2 my-10 shadow-lg rounded-lg">
                        <h2 className="text2xl md:text-3xl lg:text-4xl text-center text-purple-600 mt-5 font-bold">Explore More Country For Tourism Spots</h2>
                        <RiArrowDropDownLine className=" mx-auto font-semibold text-4xl bg-purple-500 rounded-full mt-2"></RiArrowDropDownLine>
                    </div>
                    <div className="grid grid-cols-1 mx-auto  md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">

                        {
                            countriesSpots.map(spot => <Countries
                                key={spot._id}
                                spot={spot}
                            ></Countries>)
                        }
                    </div>
                </div>
            </div>
            <div>
                <div className="bg-gray-500 rounded-lg p-4 mt-16">
                    <h2 className="text2xl md:text-3xl lg:text-4xl text-center text-purple-600 mt-5 font-bold">Our Special visitors</h2>
                    <p className="sm:w-full lg:w-[70%] text-center mx-auto">They are exclusive visitors in these spots because they come here twice in a month from other country.Actually they love this place,they feel enjoy very much to come here.If you want to add in this project you have come here twice in a week only for visit these place.</p>
                </div>

                <div className="my-10">
                   <Marquee speed={200}>
                   <div className="flex flex-col items-center justify-center">
                        <div className="flex flex-wrap gap-x-10 gap-y-2">
                            <div className="relative flex-shrink-0">
                                <span className="absolute bottom-0 right-0 w-4 h-4 dark:bg-green-400 border rounded-full dark:text-gray-800 dark:border-gray-50"></span>
                                <img src="https://source.unsplash.com/50x50/?portrait" alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-300" />
                            </div>
                            <div className="relative flex-shrink-0">
                                <span className="absolute bottom-0 right-0 w-4 h-4 border rounded-full dark:bg-amber-700 dark:border-gray-50"></span>
                                <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-300" />
                            </div>
                            <div className="relative flex-shrink-0">
                                <span className="absolute bottom-0 right-0 flex items-center justify-center w-4 h-4 dark:bg-red-400 border rounded-full dark:text-gray-50 dark:border-gray-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-2 h-3 fill-current">
                                        <rect width="368" height="32" x="72" y="240"></rect>
                                    </svg>
                                </span>
                                <img src="https://source.unsplash.com/50x50/?portrait?2" alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-300" />
                            </div>
                            <div className="relative flex-shrink-0">
                                <span className="absolute bottom-0 right-0 flex items-center justify-center w-4 h-4 border rounded-full dark:bg-gray-50 dark:text-gray-800 dark:border-gray-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-2 h-2 fill-current">
                                        <polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"></polygon>
                                    </svg>
                                </span>
                                <img src="https://source.unsplash.com/50x50/?portrait?3" alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-300" />
                            </div>
                            
	<div className="flex flex-wrap gap-x-10 gap-y-2">
		<div className="relative flex-shrink-0">
			<span className="absolute bottom-0 right-0 w-4 h-4 dark:bg-green-400 border rounded-full dark:text-gray-800 dark:border-gray-50"></span>
			<img src="https://source.unsplash.com/50x50/?portrait" alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-300" />
		</div>
		<div className="relative flex-shrink-0">
			<span className="absolute bottom-0 right-0 w-4 h-4 border rounded-full dark:bg-amber-700 dark:border-gray-50"></span>
			<img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-300" />
		</div>
		<div className="relative flex-shrink-0">
			<span className="absolute bottom-0 right-0 flex items-center justify-center w-4 h-4 dark:bg-red-400 border rounded-full dark:text-gray-50 dark:border-gray-50">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-2 h-3 fill-current">
					<rect width="368" height="32" x="72" y="240"></rect>
				</svg>
			</span>
			<img src="https://source.unsplash.com/50x50/?portrait?2" alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-300" />
		</div>
		<div className="relative flex-shrink-0">
			<span className="absolute bottom-0 right-0 flex items-center justify-center w-4 h-4 border rounded-full dark:bg-gray-50 dark:text-gray-800 dark:border-gray-50">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-2 h-2 fill-current">
					<polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"></polygon>
				</svg>
			</span>
			<img src="https://source.unsplash.com/50x50/?portrait?3" alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-300" />
		</div>
	</div>

                        </div>
                    </div>
                   </Marquee>
                   <Marquee speed={200}>
                   <div className="flex flex-col items-center mt-8 justify-center">
                        <div className="flex flex-wrap gap-x-10 gap-y-2">
                            <div className="relative flex-shrink-0">
                                <span className="absolute bottom-0 right-0 w-4 h-4 dark:bg-green-400 border rounded-full dark:text-gray-800 dark:border-gray-50"></span>
                                <img src="https://source.unsplash.com/50x50/?portrait" alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-300" />
                            </div>
                            <div className="relative flex-shrink-0">
                                <span className="absolute bottom-0 right-0 w-4 h-4 border rounded-full dark:bg-amber-700 dark:border-gray-50"></span>
                                <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-300" />
                            </div>
                            <div className="relative flex-shrink-0">
                                <span className="absolute bottom-0 right-0 flex items-center justify-center w-4 h-4 dark:bg-red-400 border rounded-full dark:text-gray-50 dark:border-gray-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-2 h-3 fill-current">
                                        <rect width="368" height="32" x="72" y="240"></rect>
                                    </svg>
                                </span>
                                <img src="https://source.unsplash.com/50x50/?portrait?2" alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-300" />
                            </div>
                            <div className="relative flex-shrink-0">
                                <span className="absolute bottom-0 right-0 flex items-center justify-center w-4 h-4 border rounded-full dark:bg-gray-50 dark:text-gray-800 dark:border-gray-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-2 h-2 fill-current">
                                        <polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"></polygon>
                                    </svg>
                                </span>
                                <img src="https://source.unsplash.com/50x50/?portrait?3" alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-300" />
                            </div>
                            
	<div className="flex flex-wrap gap-x-10 gap-y-2">
		<div className="relative flex-shrink-0">
			<span className="absolute bottom-0 right-0 w-4 h-4 dark:bg-green-400 border rounded-full dark:text-gray-800 dark:border-gray-50"></span>
			<img src="https://source.unsplash.com/50x50/?portrait" alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-300" />
		</div>
		<div className="relative flex-shrink-0">
			<span className="absolute bottom-0 right-0 w-4 h-4 border rounded-full dark:bg-amber-700 dark:border-gray-50"></span>
			<img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-300" />
		</div>
		<div className="relative flex-shrink-0">
			<span className="absolute bottom-0 right-0 flex items-center justify-center w-4 h-4 dark:bg-red-400 border rounded-full dark:text-gray-50 dark:border-gray-50">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-2 h-3 fill-current">
					<rect width="368" height="32" x="72" y="240"></rect>
				</svg>
			</span>
			<img src="https://source.unsplash.com/50x50/?portrait?2" alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-300" />
		</div>
		<div className="relative flex-shrink-0">
			<span className="absolute bottom-0 right-0 flex items-center justify-center w-4 h-4 border rounded-full dark:bg-gray-50 dark:text-gray-800 dark:border-gray-50">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-2 h-2 fill-current">
					<polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"></polygon>
				</svg>
			</span>
			<img src="https://source.unsplash.com/50x50/?portrait?3" alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-300" />
		</div>
	</div>

                        </div>
                    </div>
                   </Marquee>
                </div>

            </div>
            <hr className="border-x-4"/>
            <VisitorsReview></VisitorsReview>
        </div>
    );
};

export default Home;