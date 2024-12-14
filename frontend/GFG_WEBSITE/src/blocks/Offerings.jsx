import React from "react";

const Offerings = () => {
  return (
    <>
      <div class="min-h-screen flex flex-col items-center px-4 py-10">
        <h1 class="text-black text-3xl font-semibold mb-8">
          Explore Our Offerings
        </h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg">
          <div class="group bg-white rounded-lg overflow-hidden shadow-md transform transition hover:scale-105">
            <div class="relative">
              <img
                src="
                https://img.freepik.com/free-vector/conference-concept-illustration_114360-3357.jpg?t=st=1732908831~exp=1732912431~hmac=c9abb682d77c89c024cde5535d42de148be7a32fa6eaa05c673689a678e61810&w=740"
                alt=""
                class="w-full h-48 object-contain"
              />
              {/* https://img.freepik.com/premium-vector/online-learning-concept-illustration_65141-411.jpg?semt=ais_hybrid */}
            </div>
            <div class="p-5 text-center">
              <h3 class="text-black text-lg font-semibold">Workshops</h3>
              <p class="text-gray-400 text-sm">
                Hands-on learning to solve real-world problems.
              </p>
              <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-10 transition"></div>
            </div>
          </div>

          <div class="group bg-white rounded-lg overflow-hidden shadow-md transform transition hover:scale-105">
            <div class="relative">
              <img
                src="https://img.freepik.com/free-vector/internship-job-training-illustration_23-2148751280.jpg?semt=ais_hybrid"
                alt=""
                class="w-full h-48 object-contain"
              />
            </div>
            <div class="p-5 text-center">
              <h3 class="text-black text-lg font-semibold">Mentorship</h3>
              <p class="text-gray-400 text-sm">
                Guidance from experienced coders to help you succeed.
              </p>
              <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-10 transition"></div>
            </div>
          </div>

          <div class="group bg-white rounded-lg overflow-hidden shadow-md transform transition hover:scale-105">
            <div class="relative">
              <img
                src="https://img.freepik.com/free-vector/pair-programming-concept-illustration_114360-1812.jpg?semt=ais_hybrid"
                alt=""
                class="w-full h-48 object-contain"
              />
            </div>
            <div class="p-5 text-center">
              <h3 class="text-black text-lg font-semibold">
                Coding Competitions
              </h3>
              <p class="text-gray-400 text-sm">Compete. Learn. Grow.</p>
              <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-10 transition"></div>
            </div>
          </div>

          <div class="group bg-white rounded-lg overflow-hidden shadow-md transform transition hover:scale-105">
            <div class="relative">
              <img
                src="https://img.freepik.com/premium-vector/home-investors-choosing-designs-email_18660-352.jpg?semt=ais_hybrid"
                alt=""
                class="w-full h-48 object-contain"
              />
            </div>
            <div class="p-5 text-center">
              <h3 class="text-black text-lg font-semibold">Projects</h3>
              <p class="text-gray-400 text-sm">
                Collaborate and build impactful projects.
              </p>
              <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-10 transition"></div>
            </div>
          </div>

          <div class="group bg-white rounded-lg overflow-hidden shadow-md transform transition hover:scale-105">
            <div class="relative">
              <img
                src="https://img.freepik.com/free-vector/business-leader-standing-arrow-holding-flag-flat-vector-illustration-cartoon-people-training-doing-business-plan-leadership-victory-challenge-concept_74855-9812.jpg?semt=ais_hybrid"
                alt=""
                class="w-full h-48 object-contain"
              />
            </div>
            <div class="p-5 text-center">
              <h3 class="text-black text-lg font-semibold">Leadership</h3>
              <p class="text-gray-400 text-sm">
                Take charge and make a difference in our community.
              </p>
              <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-10 transition"></div>
            </div>
          </div>

          <div class="group bg-white rounded-lg overflow-hidden shadow-md transform transition hover:scale-105">
            <div class="relative">
              <img
                src="https://img.freepik.com/premium-vector/events-big-text-online-corporate-party-meeting-friends-colleagues-video-conference_501813-9.jpg?semt=ais_hybrid"
                alt=""
                class="w-full h-48 object-contain"
              />
            </div>
            <div class="p-5 text-center">
              <h3 class="text-black text-lg font-semibold">Events</h3>
              <p class="text-gray-400 text-sm">
                Join us for tech talks, hackathons, and more.
              </p>
              <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-10 transition"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offerings;
