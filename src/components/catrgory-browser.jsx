"use client"

import { useState } from "react"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

const CategoryBrowser = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState(null)

  const categories = [
    {
      id: "career",
      title: "Career Guidance",
      color: "#fff0cc",
      iconColor: "#fbb236",
      iconPath: "/group.png",
    },
    {
      id: "data",
      title: "Data, ML & GenAI",
      color: "#beeeed",
      iconColor: "#65d9d7",
      iconPath: "/group-1.png",
    },
    {
      id: "content",
      title: "Content & Marketing",
      color: "#ffcccc",
      iconColor: "#f99d9d",
      iconPath: "/group-2.png",
    },
    {
      id: "finance",
      title: "Finance, CAs & Legal",
      color: "#bcd3eb",
      iconColor: "#6dadef",
      iconPath: "/group-2-1.png",
    },
  ]

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId)
    console.log(`Category selected: ${categoryId}`)
  }

  return (
    <div className="max-w-[100vw] py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#003265] mb-2">Browse by Category</h2>
        <div className="w-48 h-1 bg-[#003265] mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <motion.div
            key={category.id}
            className="cursor-pointer"
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.2 },
            }}
            onClick={() => handleCategoryClick(category.id)}
            onMouseEnter={() => setHoveredCategory(category.id)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <div
              className={`rounded-xl overflow-hidden shadow-md h-full transition-all duration-300 ${
                selectedCategory === category.id ? "ring-4 ring-[#003265]" : ""
              }`}
              style={{ backgroundColor: category.color }}
            >
              <div className="p-8 flex flex-col items-center">
                <div
                  className="w-32 h-32 rounded-full flex items-center justify-center mb-8"
                  style={{ backgroundColor: `${category.iconColor}40` }}
                >
                  <img
                    src={category.iconPath}
                    alt={category.title}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h3
                  className="text-2xl md:text-3xl font-semibold text-center"
                  style={{
                    color: category.iconColor,
                    opacity: hoveredCategory === category.id || selectedCategory === category.id ? 1 : 0.8,
                  }}
                >
                  {category.title}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedCategory && (
        <motion.div
          className="mt-8 p-6 bg-white rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-semibold text-[#003265] mb-4">
            {categories.find((c) => c.id === selectedCategory)?.title} Courses
          </h3>
          <p className="text-gray-600">
            Explore our selection of courses in this category. Click on any course to learn more and enroll.
          </p>
          <button
            className="mt-4 px-6 py-2 bg-[#003265] text-white rounded-md hover:bg-[#0a2540] transition-colors"
            onClick={() => console.log(`View all ${selectedCategory} courses`)}
          >
            View All Courses
          </button>
        </motion.div>
      )}
    </div>
  )
}

export default CategoryBrowser
