import React from "react";
import { Button } from "./ui/button"; // Make sure this path is correct

export default function EducationalPlatform() {
  const courses = [
    {
      id: 1,
      title: "Product Management Basic - Course",
      instructor: "Sarah Johnson - Head of Product Customer Platform Gojek Indonesia",
      date: "1 - 28 July 2022",
      students: 40,
      price: 380,
      originalPrice: 500,
      image: "/rectangle-2749.png",
      color: "#00b6c4",
    },
    {
      id: 2,
      title: "BM Data Science Professional Certificate",
      instructor: "Sarah Johnson - Head of Product Customer Platform Gojek Indonesia",
      date: "1 - 28 July 2022",
      students: 11,
      price: 678,
      originalPrice: 500,
      image: "/rectangle-2749-1.png",
      color: "#ffc619",
    },
    {
      id: 3,
      title: "The Science of Well-Being",
      instructor: "Sarah Johnson - Head of Product Customer Platform Gojek Indonesia",
      date: "1 - 28 July 2022",
      students: 234,
      price: 123,
      originalPrice: 500,
      image: "/rectangle-2749-2.png",
      color: "#66bcff",
    },
    {
      id: 4,
      title: "Python for Everybody Specialization",
      instructor: "Sarah Johnson - Head of Product Customer Platform Gojek Indonesia",
      date: "1 - 28 July 2022",
      students: 342,
      price: 567,
      originalPrice: 500,
      image: "/rectangle-2749-3.png",
      color: "#00b6c4",
    },
  ];

  const categories = [
    "All Programme",
    "UI/UX Design",
    "Program Design",
    "Program Design",
    "Program Design",
    "Program Design",
  ];

  return (
    <div className="min-h-screen bg-[#cceeed] p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-8">
          {/* Left Image */}
          <div className="relative w-48 h-24">
            <img
              src="/Group 237661.png"
              alt="Learn & Earn"
              className="object-contain w-full h-full"
            />
          </div>

          {/* Center Heading */}
          <div className="flex-1 text-center mt-4">
            <h1 className="text-[#003265] text-5xl font-bold mb-2">Upcoming sessions</h1>
            <div className="w-48 h-1 bg-[#003265] mx-auto"></div>
          </div>

          {/* Right Image (smaller) */}
          <div className="w-28 h-auto mt-2">
            <img
              src="/hello--users-people-hello.png"
              alt="Video call illustration"
              className="object-contain w-full h-full"
            />
          </div>
        </div>

        {/* Filter Buttons - Centered */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-2">
          <div className="flex gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={`rounded-md px-6 py-2 whitespace-nowrap ${
                  index === 0
                    ? "bg-[#003265] text-white hover:bg-[#0a2540]"
                    : "bg-white text-[#003265] border-[#003265] hover:bg-[#f5f3ff]"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg overflow-hidden shadow-md">
              {/* Course Image */}
              <div className="h-48" style={{ backgroundColor: course.color }}>
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Student Info */}
              <div className="flex items-center p-4 border-b">
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white overflow-hidden"
                      style={{
                        backgroundColor: ["#fbb236", "#3442d9", "#eb459f", "#29cc7a", "#ff9a15"][i % 5],
                      }}
                    ></div>
                  ))}
                </div>
                <span className="ml-2 text-gray-700">• {course.students} students</span>
              </div>

              {/* Course Details */}
              <div className="p-4">
                <div className="text-sm text-gray-500 mb-2">{course.date}</div>
                <h3 className="text-lg font-bold text-[#003265] mb-3">{course.title}</h3>
                <p className="text-sm text-gray-600 mb-6">{course.instructor}</p>

                <div className="flex justify-between items-center">
                  <div className="flex items-baseline">
                    <span className="text-xl font-bold text-[#003265]">$ {course.price}</span>
                    <span className="ml-2 text-gray-400 line-through text-sm">$ {course.originalPrice}</span>
                  </div>
                  <Button className="bg-[#003265] hover:bg-[#0a2540] text-white">
                    Enroll Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
