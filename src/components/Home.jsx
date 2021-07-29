import React from "react";
import Header from "./Header";
import Skills from "./Skills";

import ServicesCards from "./ServicesCards";

const Home = () => {
  const services_list = [{ icon: "fa-newspaper", title: "logo designing", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro illum natus ut dolore eaque error possimus earum, aliquam pariatur, similique quidem aspernatur aut omnis architecto voluptatem. Reiciendis maiores aliquid cum.", middle: false },
  { icon: "fa-newspaper", title: "logo designing", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro illum natus ut dolore eaque error possimus earum, aliquam pariatur, similique quidem aspernatur aut omnis architecto voluptatem. Reiciendis maiores aliquid cum.", middle: true },
  { icon: "fa-newspaper", title: "logo designing", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro illum natus ut dolore eaque error possimus earum, aliquam pariatur, similique quidem aspernatur aut omnis architecto voluptatem. Reiciendis maiores aliquid cum.", middle: false },
  { icon: "fa-newspaper", title: "logo designing", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro illum natus ut dolore eaque error possimus earum, aliquam pariatur, similique quidem aspernatur aut omnis architecto voluptatem. Reiciendis maiores aliquid cum.", middle: false },
  { icon: "fa-newspaper", title: "logo designing", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro illum natus ut dolore eaque error possimus earum, aliquam pariatur, similique quidem aspernatur aut omnis architecto voluptatem. Reiciendis maiores aliquid cum.", middle: true },
  { icon: "fa-newspaper", title: "logo designing", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro illum natus ut dolore eaque error possimus earum, aliquam pariatur, similique quidem aspernatur aut omnis architecto voluptatem. Reiciendis maiores aliquid cum.", middle: false }]
  return (
    <div>
      <Header />
      <div className="quality">
        <h3>Premium Quality Web Design & Development Solutions</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro illum natus ut dolore eaque error possimus earum, aliquam pariatur, similique quidem aspernatur aut omnis architecto voluptatem. Reiciendis maiores aliquid cum.
          I create responsive and elegant websites fulfilling all of your
          specifications, within allocated time and budget.
          <br />
          Our development team will get your product up and running perfectly.
        </p>
      </div>
      <div className="chooseUs">
        <div className="container">


          <h2 className="text-center">Why Choose EmDev?</h2>
          <p className="text-center">
            We Work to Help Startups and enterprises to develop their Brands &
            Identities around the World by customization of a package as per your
            specific need.
          </p>

          <div className="row">
            {
              services_list.map(myServices => (
                <ServicesCards icon={myServices.icon} title={myServices.title} middle={myServices.middle} desc={myServices.desc} />
              ))
            }
          </div>
        </div>
      </div>
      <Skills />

    </div>
  );
};

export default Home;
