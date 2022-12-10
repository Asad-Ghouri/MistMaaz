import React from "react";

import { TimeLine } from "../TimeLine/TimeLine";


export const HeroSection = () => {
  return (
    <div>
      <section className="content" id="origin">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div data-aos="fade-down-right" data-aos-duration="900">
                <h2 className="cartonicHeading text-center tnft">The NFT</h2>
              </div>
              <div data-aos="fade-right" data-aos-duration="900">
                <p className="cartonicPara cartonicParaOne text-center">
                  Are you a collector ready to change your world?
                  {/* <i>
                    (well, sometimes they like to go on co-star to seek a second
                    opinion)
                  </i> */}
                  .
                </p>

                <p className="cartonicPara cartonicParaOne mt-4 text-center">
                  This NFT will give you access to MiSED the game 
                </p>
                <p className="cartonicPara cartonicParaOne st text-center">
                and to a connected private rewarding ecosystem.
                </p>
              </div>

              {/* <div data-aos="fade-left" data-aos-duration="900"> */}
                <p className="cartonicPara cartonicParaOne text-center">
                  Also you receive a percentage of the commercial success of the
                  game.
                </p>

                <p className="cartonicPara cartonicParaOne mt-4 bold6 text-center">
                  In real money.
                </p>

                <p className="cartonicPara cartonicParaOne text-center">
                  You will be a shareholder of this lifechanging game!
                </p>

                <p className="cartonicPara cartonicParaOne mt-4 bold6 text-center">
                  So MINT and increase your lifestatus!
                </p>

                {/* <p className="cartonicPara cartonicParaOne">
                  The piggie fired a laser rainbow from its eyes to the
                  Woozeeywoby army and turned them all into SKITTLES. After
                  realizing his power crumbled, the wicked wizard fled.
                </p>

                <p className="cartonicPara cartonicParaOne">
                  To keep Woozeeywoby and his power out of the earth,
                  Astrobabies decide to grant people the astrological magic and
                  live with humans happily ever since.
                </p> */}
              {/* </div> */}

              {/* <div className="imageOne">
                <img
                  src={require("../assets/images/cartoons.png")}
                  className="w-100"
                  alt=""
                />
              </div> */}

              <h2 className="cartonicHeading mt-29 text-center jt">Join The Community</h2>

              <h2 className="mt-5">The Team</h2>

              <p className="cartonicPara cartonicParaOne mt-4">
                Art Concept Creator
              </p>

              <p className="cartonicPara cartonicParaOne mt-4">
                <b>
                  {" "}
                  Studio Breed powered by artist Fenna van der Vliet Instagram:
                  @fennvdvliet
                  {/* <i>
                    * Our public mint price is 0.02 ETH. <br /> * 20% of the
                    initial sale revenue will stay in our community wallet for
                    supporting emerging NFT artists & Astrology content
                    creators.
                    <br />* In return, our holders can acquire both premium
                    astrology wellness content, and first-hand Allowlist access
                    to selected upcoming NFT projects. <br /> * We offer
                    emotional and mental health support whenever you need us. 💟
                  </i>{" "} */}
                </b>
              </p>
              
              <ul>
                <li>
                Game Developer Digital: Sticky Lock
                </li>
                <li>
                Real-Life Events Producer: VEVI Creative Producing 
                </li>
                <li>
                Game Developer Analogue: Dsignsquad
                </li>
                <li>
                Finance Investment: Friends of MiSE
                </li>
              </ul>

              <h2 className="cartonicHeading rm text-center" id="roadmap">
                ROADMAP
              </h2>
              {/* <p className="cartonicPara cartonicParaOne">
                When will Astrobabies embark on their great journey? Here are
                the answers!
              </p> */}
            </div>

            

            <div className="timelinecomponent">
            <TimeLine />
            </div>



            <div className="col-md-8">
              <div className="faqsection">
                <h2 className="cartonicHeading faq text-center" id="faq">
                  F.A.Q.
                </h2>

                <div
                  className="faqData pointer mt-4"
                  data-bs-toggle="collapse"
                  data-bs-target="#question1"
                  aria-expanded="false"
                  aria-controls="question1"
                >
                  <div className="d-flex justify-content-between align-items-center ">
                    <div className="question">
                      <h4 className="cartonicHeading m-0">How does MiSED minimize the risk?</h4>
                    </div>
                    {/* <div className="button">
                      <i class="fa-solid fa-angle-down angle"></i>
                    </div> */}
                  </div>

                  <div class="collapse" id="question1">
                    <div class="answer">
                        By creating 9999 ambassadors of the Game plus the companies with high-end real-life products that will join the exchange platform, ‘MiSED’ is a win-win situation for everybody.
                      {/* <p class="cartonicParaOne font3">
                        <strong>Astrolist</strong>: free mint + gas
                        <br />
                        <br />
                        <br />
                        <strong>Public mint</strong>: 0.02 ETH + gas
                        <br />
                        Availability: 7,770
                      </p> */}
                    </div>
                  </div>
                </div>

                <div
                  className="faqData pointer mt-4"
                  data-bs-toggle="collapse"
                  data-bs-target="#question2"
                  aria-expanded="false"
                  aria-controls="question2"
                >
                  <div className="d-flex justify-content-between align-items-center ">
                    <div className="question">
                      <h4 className="cartonicHeading m-0">When will I get the results?</h4>
                    </div>
                    {/* <div className="button">
                      <i class="fa-solid fa-angle-down angle"></i>
                    </div> */}
                  </div>

                  <div class="collapse" id="question2">
                    <div class="answer">
                    Instantly when you play the game. Check ‘roadmap’ for all details.
                      {/* <p class="cartonicParaOne font3">
                        <strong>Astrolist mint</strong>
                        <br />
                        Time: Tue, 16 Aug 2022 3:30 PM (GMT 0)
                        <br />
                        Duration: 60 minutes
                        <br />‍<br />
                        <strong>Public mint</strong>
                        <br />
                        Time: Tue, 16 Aug 2022 5 PM (GMT 0)
                        <br />
                        Duration: until sold out
                      </p> */}
                    </div>
                  </div>
                </div>

                <div
                  className="faqData pointer mt-4"
                  data-bs-toggle="collapse"
                  data-bs-target="#question3"
                  aria-expanded="false"
                  aria-controls="question3"
                >
                  <div className="d-flex justify-content-between align-items-center ">
                    <div className="question">
                      <h4 className="cartonicHeading m-0">
                      Is my registration on The List a guarantee for a mint?
                      </h4>
                    </div>
                    {/* <div className="button">
                      <i class="fa-solid fa-angle-down angle"></i>
                    </div> */}
                  </div>

                  <div class="collapse" id="question3">
                    <div class="answer">
                    Unfortunatly not, however you can connect with us to get a spot on the Whitelist and then your chances are multiplying.
                      {/* <p class="cartonicParaOne font3">
                        Fri, 19 Aug 2022 4:30 PM (GMT 0)
                      </p> */}
                    </div>
                  </div>
                </div>

                <div
                  className="faqData pointer mt-4"
                  data-bs-toggle="collapse"
                  data-bs-target="#question4"
                  aria-expanded="false"
                  aria-controls="question4"
                >
                  <div className="d-flex justify-content-between align-items-center ">
                    <div className="question">
                      <h4 className="cartonicHeading m-0">
                      Are there more Free Perks to come?
                      </h4>
                    </div>
                    {/* <div className="button">
                      <i class="fa-solid fa-angle-down angle"></i>
                    </div> */}
                  </div>

                  <div class="collapse" id="question4">
                    <div class="answer">
                    Yes, of course! For example physical goods, mentorship, tailormade NFTs and new investment opportunities.
                      {/* <p class="cartonicParaOne font3">
                        <strong>Astrolist mint</strong>: Max 1 per wallet
                        <br />
                        <strong>Public mint</strong>: Max 10 per wallet
                      </p> */}
                    </div>
                  </div>
                </div>

                {/* <div className="faqData pointer mt-4">
                  <div className="question relative">
                    <h4 className="cartonicHeading m-0 d-flex justify-content-between align-items-center ">
                      HOW DO I GET ON ASTROLIST / ALLOWLIST?
                    </h4>
                    <i
                      className="fa-solid fa-angle-down angle"
                      data-bs-toggle="collapse"
                      data-bs-target="#question5"
                      aria-expanded="false"
                      aria-controls="question5"
                    ></i>
                  </div>

                  <div class="collapse" id="question5">
                    <div class="answer">
                      <p class="cartonicParaOne font3 relative">
                        Fill in your Astrolist application
                        <a
                          href="https://app.heymint.xyz/astrolist"
                          className="appLink"
                        >
                          {" "}
                          here.
                        </a>{" "}
                      </p>
                      <p class="cartonicParaOne font3">
                        1. Participate in Twitter daily trivia
                        <br />
                        2. Participate in Twitter giveaways
                        <br />
                        3. Stay active and reach level 3 in Discord
                        <br />
                        4. Participate in Discord games &amp; trivia
                      </p>
                    </div>
                  </div>
                </div> */}

                <div
                  className="faqData pointer mt-4"
                  data-bs-toggle="collapse"
                  data-bs-target="#question6"
                  aria-expanded="false"
                  aria-controls="question6"
                >
                  <div className="d-flex justify-content-between align-items-center ">
                    <div className="question">
                      <h4 className="cartonicHeading m-0">
                      How to mint when I don’t own ETH yet?
                      </h4>
                    </div>
                    {/* <div className="button">
                      <i class="fa-solid fa-angle-down angle"></i>
                    </div> */}
                  </div>

                  <div class="collapse" id="question6">
                    <div class="answer">
                    We except Credit Cards too.
                      {/* <p class="cartonicParaOne font3">
                        For the initial launch, you can mint Astrobabies here on
                        this website. After that, you will be able to purchase
                        Astrobabies on secondary markets like OpenSea.io.
                      </p> */}
                    </div>
                  </div>
                </div>

                <div
                  className="faqData pointer mt-4"
                  data-bs-toggle="collapse"
                  data-bs-target="#question7"
                  aria-expanded="false"
                  aria-controls="question7"
                >
                  <div className="d-flex justify-content-between align-items-center ">
                    <div className="question">
                      <h4 className="cartonicHeading m-0">
                      Is it fast and easy to mint?
                      </h4>
                    </div>
                    <div className="button">
                      <i class="fa-solid fa-angle-down angle"></i>
                    </div>
                  </div>

                  <div class="collapse" id="question7">
                    <div class="answer">
                    Yes! Just have your funding ready and follow the steps!  
                      {/* <p class="cartonicParaOne font3">
                        Your astrobaby is your pass to acquire premium astrology
                        and wellness content & products, as well as first-hand
                        access to hot upcoming NFT projects. Plus, who doesn't
                        like an adorable astrobaby?
                      </p> */}
                    </div>
                  </div>
                </div>

                <div
                  className="faqData pointer mt-4"
                  data-bs-toggle="collapse"
                  data-bs-target="#question7"
                  aria-expanded="false"
                  aria-controls="question7"
                >
                  <div className="d-flex justify-content-between align-items-center ">
                    <div className="question">
                      <h4 className="cartonicHeading m-0">
                      Can I ask anything else when it is not in this FAQ?
                      </h4>
                    </div>
                    <div className="button">
                      <i class="fa-solid fa-angle-down angle"></i>
                    </div>
                  </div>

                  <div class="collapse" id="question7">
                    <div class="answer">
                    Yes, please do so! Fill in the contact form and we will get back to you for sure.
                      {/* <p class="cartonicParaOne font3">
                        Your astrobaby is your pass to acquire premium astrology
                        and wellness content & products, as well as first-hand
                        access to hot upcoming NFT projects. Plus, who doesn't
                        like an adorable astrobaby?
                      </p> */}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* <a href="https://discord.com/invite/DgyM3WyW6w">
          <img
            src={require("../assets/images/bona_2_400x393.jpg")}
            // src={require("../assets/images/bona.jpg")}
            className="staticImg"
            alt=""
          />
        </a> */}
      </section>
    </div>
  );
};
