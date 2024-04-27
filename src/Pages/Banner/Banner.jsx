import canadaSpots from '../../assets/canada.jpg'
import mexicoSpots from '../../assets/mexico.jpg'
import brazilcaSpots from '../../assets/brazil.jpg'


const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[500px]">
  <div id="slide1" className="carousel-item relative w-full">
  <div className="hero bg-cover" style={{backgroundImage: `url(${mexicoSpots})`}}>
  <div className=""></div>
  <div className=" text-center text-white">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-purple-600">Mexico</h1>
      <p className="mb-5 font-semibold">This place is most of the tourism spots in this world.You cannot imagine how much people come here every single day.If you come one day then you will be surprised</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
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