import React from "react";
import { ArrowUp, ArrowDown } from 'lucide-react';

export default function IndieGuru() {
  return (
    <div className="min-h-screen bg-[#fffaea]">
      {/* Navigation */}
      <header className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white rounded-full shadow-md px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#232536] text-white rounded-full flex items-center justify-center text-xs">
              IG
            </div>
            <span className="font-bold text-[#232536] text-lg">IndieGuru</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-[#232536] font-medium">Home</a>
            <a href="#" className="text-[#6d6e76]">About</a>
            <a href="#" className="text-[#6d6e76]">FAQ's</a>
            <a href="#" className="text-[#6d6e76]">Contact Us</a>
          </nav>
          
          <button className="bg-[#003265] text-white px-6 py-2 rounded-full font-medium">
            Login
          </button>
        </div>
      </header>
      
      {/* Featured Post */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-[#232536] font-semibold uppercase tracking-wider text-sm">FEATURED POST</p>
            <h1 className="text-[#232536] text-3xl md:text-4xl font-bold leading-tight">
              Step-by-step guide to choosing great font pairs
            </h1>
            <div className="flex items-center gap-2 text-[#6d6e76] text-sm">
              <span>By John Doe</span>
              <span>|</span>
              <span>May 23, 2022</span>
            </div>
            <p className="text-[#4c4c4c] leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
            <button className="bg-[#ffd050] text-[#232536] px-6 py-3 font-medium inline-flex">
              Read More &gt;
            </button>
          </div>
          <div>
            <img 
              src="https://via.placeholder.com/600x400" 
              alt="Featured post image" 
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </section>
      
      {/* All Posts */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-[#232536] text-3xl font-bold mb-6">All posts</h2>
        <div className="border-t border-[#6d6e76]/20 pt-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="grid md:grid-cols-[300px_1fr] gap-6 mb-8 pb-8 border-b border-[#6d6e76]/10">
              <div>
                <img 
                  src="https://via.placeholder.com/300x240" 
                  alt="Blog post image" 
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
              <div className="space-y-3">
                <div className="text-[#00a9a5] font-semibold uppercase tracking-wider text-xs">STARTUP</div>
                <h3 className="text-[#232536] text-2xl font-bold">
                  Design tips for designers that cover everything you need
                </h3>
                <p className="text-[#4c4c4c] leading-relaxed">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                </p>
                <div className="flex items-center gap-4 pt-2">
                  <button className="border border-[#6d6e76]/30 text-[#6d6e76] px-4 py-2 rounded-md text-sm">
                    Add a Comment
                  </button>
                  <div className="flex items-center gap-2">
                    <button className="border border-[#6d6e76]/30 p-2 rounded-md">
                      <ArrowUp className="w-4 h-4 text-[#6d6e76]" />
                    </button>
                    <button className="border border-[#6d6e76]/30 p-2 rounded-md">
                      <ArrowDown className="w-4 h-4 text-[#6d6e76]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-[#232536] text-3xl font-bold mb-8">All Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Business", icon: "📊", color: "bg-white" },
            { name: "Startup", icon: "🚀", color: "bg-[#ffd050]" },
            { name: "Economy", icon: "📈", color: "bg-white" },
            { name: "Technology", icon: "🔧", color: "bg-white" }
          ].map((category, index) => (
            <div key={index} className={`${category.color} border border-[#6d6e76]/10 p-6 rounded-lg`}>
              <div className="mb-4">{category.icon}</div>
              <h3 className="text-[#232536] text-xl font-bold mb-2">{category.name}</h3>
              <p className="text-[#6d6e76] text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Join Team */}
      <section className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-[#232536] text-3xl font-bold mb-4">Join our team to be a part<br />of our story</h2>
        <p className="text-[#6d6e76] max-w-xl mx-auto mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </p>
        <button className="bg-[#ffd050] text-[#232536] px-8 py-3 font-medium">
          Join Now
        </button>
      </section>
    </div>
  );
}