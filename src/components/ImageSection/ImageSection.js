import React from 'react'

export const ImageSection = () => {
  return (
    <div>
        <section className="items">
        <div
          data-aos="fade-left"
          data-aos-offset="200"
          // data-aos-delay="1000"
          // data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <ul className="imagesListOne">
            <li>
              <img
                src={require("../assets/images/rs(1).jpg")}
                className="listImg"
                alt=""
              />
            </li>
            <li>
              <img
                src={require("../assets/images/rs(2).jpg")}
                className="listImg"
                alt=""
              />
            </li>
            <li>
              <img
                src={require("../assets/images/rs(3).jpg")}
                className="listImg"
                alt=""
              />
            </li>
            <li>
              <img
                src={require("../assets/images/rs(4).jpg")}
                className="listImg"
                alt=""
              />
            </li>
            <li>
              <img
                src={require("../assets/images/rs(5).jpg")}
                className="listImg"
                alt=""
              />
            </li>
            <li>
              <img
                src={require("../assets/images/rs(1).jpg")}
                className="listImg"
                alt=""
              />
            </li>
            <li>
              <img
                src={require("../assets/images/rs(2).jpg")}
                className="listImg"
                alt=""
              />
            </li>
            <li>
              <img
                src={require("../assets/images/rs(3).jpg")}
                className="listImg"
                alt=""
              />
            </li>
          </ul>
        </div>

        <div className="mt-3" data-aos="fade-right" data-aos-duration="1300">
          <ul className="imagesListOne">
            <li>
              <img
                src={require("../assets/images/rs(4).jpg")}
                className="listImg"
                alt=""
              />
            </li>

            <li>
              <img
                src={require("../assets/images/rs(5).jpg")}
                className="listImg"
                alt=""
              />
            </li>

            <li>
              <img
                src={require("../assets/images/rs(3).jpg")}
                className="listImg"
                alt=""
              />
            </li>

            <li>
              <img
                src={require("../assets/images/rs(1).jpg")}
                className="listImg"
                alt=""
              />
            </li>
            <li>
              <img
                src={require("../assets/images/rs(2).jpg")}
                className="listImg"
                alt=""
              />
            </li>

            <li>
              <img
                src={require("../assets/images/rs(3).jpg")}
                className="listImg"
                alt=""
              />
            </li>

            <li>
              <img
                src={require("../assets/images/rs(5).jpg")}
                className="listImg"
                alt=""
              />
            </li>

            <li>
              <img
                src={require("../assets/images/rs(1).jpg")}
                className="listImg"
                alt=""
              />
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}
