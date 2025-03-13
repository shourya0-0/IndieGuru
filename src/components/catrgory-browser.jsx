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
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M24 12C26.2091 12 28 10.2091 28 8C28 5.79086 26.2091 4 24 4C21.7909 4 20 5.79086 20 8C20 10.2091 21.7909 12 24 12Z"
            stroke="#cca13d"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 32H8V24C8 22.9391 8.42143 21.9217 9.17157 21.1716C9.92172 20.4214 10.9391 20 12 20H36C37.0609 20 38.0783 20.4214 38.8284 21.1716C39.5786 21.9217 40 22.9391 40 24V32H36"
            stroke="#cca13d"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M24 12V20" stroke="#cca13d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M12 44V32L24 24L36 32V44"
            stroke="#cca13d"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M20 36H28" stroke="#cca13d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: "data",
      title: "Data, ML & GenAI",
      color: "#beeeed",
      iconColor: "#65d9d7",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8 40V16L24 8L40 16V40"
            stroke="#3d9997"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M24 20V28" stroke="#3d9997" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 24V32" stroke="#3d9997" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M32 24V32" stroke="#3d9997" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 16H40" stroke="#3d9997" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: "content",
      title: "Content & Marketing",
      color: "#ffcccc",
      iconColor: "#f99d9d",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M32 8H40C41.0609 8 42.0783 8.42143 42.8284 9.17157C43.5786 9.92172 44 10.9391 44 12V16C44 17.0609 43.5786 18.0783 42.8284 18.8284C42.0783 19.5786 41.0609 20 40 20H32"
            stroke="#b24747"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M32 8H8C6.93913 8 5.92172 8.42143 5.17157 9.17157C4.42143 9.92172 4 10.9391 4 12V16C4 17.0609 4.42143 18.0783 5.17157 18.8284C5.92172 19.5786 6.93913 20 8 20H32"
            stroke="#b24747"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 20V36C8 37.0609 8.42143 38.0783 9.17157 38.8284C9.92172 39.5786 10.9391 40 12 40H36C37.0609 40 38.0783 39.5786 38.8284 38.8284C39.5786 38.0783 40 37.0609 40 36V20"
            stroke="#b24747"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M16 14H16.01" stroke="#b24747" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M24 14H24.01" stroke="#b24747" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M32 14H32.01" stroke="#b24747" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M24 28L16 32V24L24 28Z"
            stroke="#b24747"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: "finance",
      title: "Finance, CAs & Legal",
      color: "#bcd3eb",
      iconColor: "#6dadef",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M24 16C28.4183 16 32 13.3137 32 10C32 6.68629 28.4183 4 24 4C19.5817 4 16 6.68629 16 10C16 13.3137 19.5817 16 24 16Z"
            stroke="#466f99"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 28C20.4183 28 24 25.3137 24 22C24 18.6863 20.4183 16 16 16C11.5817 16 8 18.6863 8 22C8 25.3137 11.5817 28 16 28Z"
            stroke="#466f99"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M32 28C36.4183 28 40 25.3137 40 22C40 18.6863 36.4183 16 32 16C27.5817 16 24 18.6863 24 22C24 25.3137 27.5817 28 32 28Z"
            stroke="#466f99"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 36C16.4183 36 20 33.3137 20 30C20 26.6863 16.4183 24 12 24C7.58172 24 4 26.6863 4 30C4 33.3137 7.58172 36 12 36Z"
            stroke="#466f99"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M36 36C40.4183 36 44 33.3137 44 30C44 26.6863 40.4183 24 36 24C31.5817 24 28 26.6863 28 30C28 33.3137 31.5817 36 36 36Z"
            stroke="#466f99"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 44C28.4183 44 32 41.3137 32 38C32 34.6863 28.4183 32 24 32C19.5817 32 16 34.6863 16 38C16 41.3137 19.5817 44 24 44Z"
            stroke="#466f99"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ]

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId)
    // Here you would typically navigate or filter content based on the selected category
    console.log(`Category selected: ${categoryId}`)
  }

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
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
                  {category.icon}
                </div>
                <h3
                  className="text-2xl md:text-3xl font-semibold text-center"
                  style={{
                    color: category.iconColor.replace("40", ""),
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

