


import React, {useEffect} from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Home/Footer/Footer";
import about from "../../assets/template/3.webp";
import { useNavigate } from "react-router-dom";

function About() {
  
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div style={{ height: "150px" }}></div>
      <div
        className="flex flex-col sm:flex-row  sm:min-h-full overflow-hidden"
        style={{ height: "700px" }}
      >
        <img src={about} className="p-2 md:w-1/2" />
        <div
          className="md:w-1/2 min-h-full"
          style={{ marginTop: "5px", padding: "20px" }}
        >
          <p className="text-lg font-bold text-blue-900">
            About The SALT Legal
          </p>
          <span>Our Mission</span>
          <p className="text-slate-700 text-lg font-semibold mt-2">
            Welcome to The SALT Legal, a dynamic and client-focused legal firm
            committed to providing strategic solutions across a spectrum of
            legal domains. Our dedicated team of legal experts brings a wealth
            of experience and a passion for delivering results to every client
            we serve..
          </p>

          <p className="text-slate-700 text-lg mt-5">
            Welcome to The SALT Legal, a dynamic and client-focused legal firm
            committed to providing strategic solutions across a spectrum of
            legal domains. Our dedicated team of legal experts brings a wealth
            of experience and a passion for delivering results to every client
            we serve..
          </p>

          <p className="text-slate-700 text-xl font-semibold mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
            molestias, tempora iste architecto dignissimos saepe aliquid porro!
            Voluptatem enim fuga quis inventore dolorum perspiciatis maxime,
            tenetur, aperiam nam autem eum!
          </p>
          <p className="text-slate-700 text-lg mt-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
            vero cupiditate quae eius ea qui pariatur, harum officiis ullam
            similique officia illo cum magnam veritatis aliquid ipsam ratione
            velit expedita.
          </p>

          <p className="text-slate-700 text-xl font-semibold mt-4">
            On desktop and mobile
          </p>
          <p className="text-slate-700 text-lg mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            ab aut, magni reiciendis maiores quaerat minus labore dicta dolorum,
            provident ipsum iusto optio perferendis magnam consequatur, vel
            quasi voluptas! Itaque.
          </p>

          <p className="text-slate-700 text-lg mt-2">
            More quality hires Proudly Canadians is the #1 external source of
            hire.*
          </p>

          <p className="text-red-700 text-sm font-semibold mt-2">
            100% Guranteed Success Rate
          </p>
          <p className="text-red-700 text-sm font-semibold mt-2">
            100% Client Service Satisfaction
          </p>
          <p className="text-red-700 text-sm font-semibold mt-2">
            100% Transparency
          </p>
        </div>
      </div>

      <div
        style={{ height: "700px", width: "100%" }}
        className="flex flex-col md:flex-row overflow-hidden"
      >
        <div className="font-bold p-5 md:p-20 w-full md:w-2/4 overflow-hidden">
          <h2 className="font-bold text-xl text-gray-800 mt-7 ">Lorem Ipsum</h2>
          <p className="font-semibold text-gray-700 mt-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            molestias magni harum. Minima provident obcaecati amet animi saepe,
            iure facere excepturi, totam numquam quia quaerat, nam dolores
            voluptatum a dolorum.
          </p>
          <p className="font-semibold text-gray-700 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus facere eaque vero! Officiis corporis aliquid, saepe
            adipisci asperiores culpa! Ipsa dolorum eos explicabo illo sapiente
            dicta similique illum distinctio vel.
          </p>
          <button className="font-semibold p-4 mt-5 md:mt-28 bg-blue-950 rounded-md text-white overflow-hidden">
            CONNECT US
          </button>
        </div>
        <div className="p-5 md:p-20 w-full md:w-2/4 overflow-hidden">
          <h2 className="font-bold text-xl text-gray-800 mt-7 ">Lorem Ipsum</h2>
          <p className="font-semibold text-gray-700 mt-7">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, ut!
            Iusto rem et at nihil quaerat accusantium eveniet beatae molestiae.
            Neque, sequi eveniet molestiae itaque enim optio molestias officia
            aut.
          </p>
          <p className="font-semibold text-gray-700 mt-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            alias, voluptas eius ratione architecto maiores ea reiciendis animi
            eos et eum non culpa, doloremque libero fuga beatae reprehenderit.
            Vel, sed.
          </p>
          <button className="font-semibold p-4 mt-5 md:mt-20 bg-blue-950 rounded-md text-white overflow-hidden">
            Pay Now
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
