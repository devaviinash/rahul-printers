import React, { useEffect, useRef } from "react";
import {
  Calendar,
  Award,
  Users,
  MapPin,
  TrendingUp,
  Globe,
} from "lucide-react";
import { gsap } from "gsap";

const milestones = [
  {
    year: "1982",
    title: "Our Inception",
    description:
      "Rahul Printers began its journey as a small printing shop, driven by passion and dedication.",
    icon: <Calendar className="h-6 w-6" />,
    color: "text-red-500 bg-red-50",
  },
  {
    year: "1990",
    title: "First Major Milestone",
    description:
      "Expanded our services to include commercial and bulk printing, serving local businesses.",
    icon: <Award className="h-6 w-6" />,
    color: "text-orange-500 bg-orange-50",
  },
  {
    year: "2000",
    title: "A Growing Team",
    description:
      "Hired skilled professionals and upgraded to advanced printing machinery.",
    icon: <Users className="h-6 w-6" />,
    color: "text-yellow-500 bg-yellow-50",
  },
  {
    year: "2010",
    title: "New Facility",
    description:
      "Moved to a larger facility equipped to handle diverse printing needs.",
    icon: <MapPin className="h-6 w-6" />,
    color: "text-green-500 bg-green-50",
  },
  {
    year: "2020",
    title: "Digital Expansion",
    description:
      "Started offering online order placement and delivery for local customers.",
    icon: <TrendingUp className="h-6 w-6" />,
    color: "text-blue-500 bg-blue-50",
  },
  {
    year: "2023",
    title: "Sustainability Goals",
    description:
      "Introduced eco-friendly printing solutions to support a greener future.",
    icon: <Globe className="h-6 w-6" />,
    color: "text-violet-500 bg-violet-50",
  },
];

export default function Timeline() {
  const timelineRef = useRef();

  useEffect(() => {
    const items = document.querySelectorAll(".milestone-item");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(entry.target, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power1.out",
            });
            // Do not unobserve, keep observing for further animations
          }
        });
      },
      { threshold: 0.3 }
    );

    items.forEach((item) => {
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="timeline"
      className="py-24 bg-gradient-to-b from-red-200 to-blue-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our 43-Year Journey</h2>
          <p className="text-gray-600">
            Celebrating over four decades of excellence and trust
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-red-500 via-yellow-500 to-violet-500"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center milestone-item opacity-0 transform translate-y-8 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8"
                  }`}
                >
                  <div>
                    <h3 className="text-2xl font-bold mb-1">
                      {milestone.year}
                    </h3>
                    <h4
                      className={`text-lg font-semibold mb-2 ${
                        milestone.color.split(" ")[0]
                      }`}
                    >
                      {milestone.title}
                    </h4>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>

                {/* Icon */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div
                    className={`w-12 h-12 rounded-full ${milestone.color} flex items-center justify-center`}
                  >
                    {milestone.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
