import React from "react";
import profile from "../../images/pic.jpg";
import profile2 from "../../images/pic 2.jpg";
const Home = () => {
  return (
    <figure>
      <div class="md:gird bg-gray-100 rounded-xl p-8 md:p-0 md:m-5 mt-5">
        <img
          class="w-32 h-32 md:w-48 md:h-auto pt-3 rounded-full mx-auto"
          alt=""
          width="384"
          height="512"
          src={profile}
          alt=""
        />
        <div class="pt-6 md:p-8 text-center  space-y-4">
          <blockquote>
            <p class="text-lg font-semibold font-serif">
              I am a full-time Web Developer. Using JavaScript, React (JS),
              <br />
              Next.JS, HTML, HTML5, CSS Bootstrap, ES6, Material UI. <br />
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-black-500 font-bold">Rakhu Dey</div>
            <div class="text-gray-500"> Web Developer</div>
          </figcaption>
        </div>
      </div>

      <div class="md:gird bg-gray-100 rounded-xl p-8 md:p-0 md:m-5">
        <img
          class="w-32 h-32 md:w-48 md:h-auto pt-3 rounded-full mx-auto"
          alt=""
          width="384"
          height="512"
          src={profile2}
          alt=""
        />
        <div class="pt-6 md:p-8 text-center  space-y-4">
          <blockquote>
            <p class="text-lg font-semibold font-serif">
              I am a full-time Mobile app Developer. Using Java,Kotlin, drat,
              <br />
              flutter , XML, PHP, <br />
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-black-500 font-bold">Satta Broto Chy</div>
            <div class="text-gray-500"> Moblie App Developer</div>
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

export default Home;
