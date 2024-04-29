import canadaSpots from '../../assets/canada.jpg'
import mexicoSpots from '../../assets/mexico.jpg'
import brazilcaSpots from '../../assets/brazil.jpg'
import usa from '../../assets/usa2.jpg'
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[500px]">
  <div id="slide1" className="carousel-item relative w-full">
  <div className="w-full bg-cover rounded-lg" style={{backgroundImage: `url(${usa})`}}>
  <div className=""></div>
  <div className=" text-center text-white">
    <div className="">
      <h1 className=" mt-[300px] text-5xl font-bold text-green-100">USA</h1>
      <p className="mb-5 font-semibold w-[97%] md:w-[80%] lg:w-[60%] mx-auto text-gray-200">This place is most of the tourism spots in this world.You cannot imagine how much people come here every single day.If you come one day then you will be surprised</p>
      <Link to='/allTouristsSpots'><button className="badge badge-outline font-bold text-white p-5"><span className='text-white'>SEE MORE</span></button></Link>
    </div>
  </div>
</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <div className="w-full bg-cover rounded-lg" style={{backgroundImage: `url(${mexicoSpots})`}}>
  <div className=""></div>
  <div className=" text-center text-white">
    <div className="">
      <h1 className=" mt-[300px] text-5xl font-bold text-white">Mexico</h1>
      <p className="mb-5 font-semibold w-[97%] md:w-[80%] lg:w-[60%] mx-auto text-gray-200">This place is most of the tourism spots in this world.You cannot imagine how much people come here every single day.If you come one day then you will be surprised</p>
      <Link to='/allTouristsSpots'><button className="badge badge-outline font-bold text-white p-5"><span className='text-white'>SEE MORE</span></button></Link>
    </div>
  </div>
</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <div className="w-full bg-cover rounded-lg" style={{backgroundImage: `url(${brazilcaSpots})`}}>
  <div className=""></div>
  <div className=" text-center text-white">
    <div className="">
      <h1 className=" mt-[300px] text-5xl font-bold text-green-100">Brazil</h1>
      <p className="mb-5 font-semibold w-[97%] md:w-[80%] lg:w-[60%] mx-auto text-gray-200">This place is most of the tourism spots in this world.You cannot imagine how much people come here every single day.If you come one day then you will be surprised</p>
      <Link to='/allTouristsSpots'><button className="badge badge-outline font-bold text-white p-5"><span className='text-white'>SEE MORE</span></button></Link>
    </div>
  </div>
</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
  <div className="w-full bg-cover rounded-lg" style={{backgroundImage: `url(${canadaSpots})`}}>
  <div className=""></div>
  <div className=" text-center text-white">
    <div className="">
      <h1 className=" mt-[300px] text-5xl font-bold text-green-100">CANADA</h1>
      <p className="mb-5 font-semibold w-[97%] md:w-[80%] lg:w-[60%] mx-auto text-gray-200">This place is most of the tourism spots in this world.You cannot imagine how much people come here every single day.If you come one day then you will be surprised</p>
      <Link to='/allTouristsSpots'><button className="badge badge-outline font-bold text-white p-5"><span className='text-white'>SEE MORE</span></button></Link>
    </div>
  </div>
</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;