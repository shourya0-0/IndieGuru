import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUp, Heart, MessageCircle, Share2, TrendingUp, Users, Briefcase, HelpCircle, MessageSquare } from 'lucide-react';
import { FooterSection } from "./FooterSection"; // Import FooterSection
import { Switch } from "@headlessui/react"; // Import a toggle switch component

export default function CommunityPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("threads");
  const [likes, setLikes] = useState({});
  const [likedPosts, setLikedPosts] = useState(new Set()); // Track liked posts
  const [comments] = useState({});
  const [showPostForm, setShowPostForm] = useState(false);
  const [showCommentForm, setShowCommentForm] = useState(null);
  const [newPost, setNewPost] = useState({ category: "", content: "", image: null });
  const [newComment, setNewComment] = useState("");
  const [isSignedIn] = useState(false); // Mock state for user authentication
  const [postAnonymously, setPostAnonymously] = useState(false);

  // Ref for the feed section
  const feedRef = useRef(null);

  // State for active banner
  const [activeBanner, setActiveBanner] = useState(0);

  // Banners data
  const banners = [
    {
      id: 1,
      image: "/rectangle-2749-1.png",
      text: "Explore opportunities to connect with students and grow your network.",
    },
    {
      id: 2,
      image: "/rectangle-2749-2.png",
      text: "Learn from industry experts and enhance your skills.",
    },
    {
      id: 3,
      image: "/rectangle-2749-3.png",
      text: "Discover freelance projects and collaborate with professionals.",
    },
    {
      id: 4,
      image: "/rectangle-2749.png",
      text: "Engage in discussions and share your knowledge with the community.",
    },
  ];

  // Automatically change banners
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBanner((prev) => (prev + 1) % banners.length);
    }, 5000); // Change banner every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const tabs = [
    { id: "referrals", name: "Referrals by community", icon: <Users className="w-5 h-5" /> },
    { id: "freelance", name: "Freelance projects", icon: <Briefcase className="w-5 h-5" /> },
    { id: "ama", name: "Ask Me Anything", icon: <HelpCircle className="w-5 h-5" /> },
    { id: "threads", name: "Threads", icon: <MessageSquare className="w-5 h-5" /> },
  ];

  const [posts, setPosts] = useState({
    threads: [
      {
        id: 1,
        author: "Sarah Johnson",
        avatar: "logo.jpeg",
        role: "UX Designer",
        time: "2 hours ago",
        content: "Just finished a comprehensive guide on creating effective user personas. What tools do you all use for user research?",
        likes: 24,
        comments: 8,
        commentsList: [],
        image: null
      },
      {
        id: 2,
        author: "Michael Chen",
        avatar: "logo.jpeg",
        role: "Frontend Developer",
        time: "5 hours ago",
        content: "I've been experimenting with the new React Server Components. The performance improvements are impressive! Has anyone else integrated them into their workflow?",
        likes: 42,
        comments: 15,
        commentsList: [],
        image: ""
      }
    ],
    referrals: [
      {
        id: 3,
        author: "Emily Rodriguez",
        avatar: "logo.jpeg",
        role: "Product Manager",
        time: "1 day ago",
        content: "My company is looking for a senior backend developer with experience in Node.js and MongoDB. Great remote opportunity with competitive pay. DM me for details!",
        likes: 18,
        comments: 7,
        commentsList: [],
        company: "TechSolutions Inc.",
        location: "Remote"
      }
    ],
    freelance: [
      {
        id: 4,
        author: "David Kim",
        avatar: "logo.jpeg",
        role: "Marketing Director",
        time: "3 days ago",
        content: "Looking for a graphic designer to create social media assets for our upcoming product launch. 2-week project with possibility for ongoing work.",
        likes: 12,
        comments: 5,
        commentsList: [],
        budget: "$1,000-$1,500",
        deadline: "2 weeks"
      }
    ],
    ama: [
      {
        id: 5,
        author: "Dr. Lisa Wang",
        avatar: "logo.jpeg",
        role: "AI Research Scientist",
        time: "1 day ago",
        content: "I've been working on large language models for the past 5 years. Ask me anything about the current state of AI and where it's heading!",
        likes: 87,
        comments: 32,
        commentsList: [],
        expertise: "Artificial Intelligence, Machine Learning, NLP"
      }
    ]
  });

  const trending = [
    {
      id: 1,
      title: "The future of remote work",
      category: "Career",
      engagement: "352 comments"
    },
    {
      id: 2,
      title: "Latest UI design trends for 2025",
      category: "Design",
      engagement: "128 comments"
    },
    {
      id: 3,
      title: "How to negotiate your salary",
      category: "Career",
      engagement: "215 comments"
    },
    {
      id: 4,
      title: "Building accessible web applications",
      category: "Development",
      engagement: "94 comments"
    }
  ];

  const randomFeeds = [
    {
      id: 1,
      title: "How to build a successful startup",
      image: "/rectangle-2749.png",
      description: "Learn the key steps to building a successful startup from scratch.",
    },
    {
      id: 2,
      title: "Top 10 UI/UX design trends in 2023",
      image: "/rectangle-2749-1.png",
      description: "Explore the latest trends in UI/UX design that are shaping the industry.",
    },
    {
      id: 3,
      title: "Mastering React in 30 days",
      image: "/rectangle-2749-2.png",
      description: "A comprehensive guide to becoming proficient in React development.",
    },
    {
      id: 4,
      title: "The future of AI and machine learning",
      image: "/rectangle-2749-3.png",
      description: "Discover how AI and machine learning are transforming industries.",
    },
    {
      id: 5,
      title: "Effective marketing strategies for startups",
      image: "/rectangle-2749.png",
      description: "Learn how to market your startup effectively and reach your target audience.",
    },
  ];

  const handleLike = (postId) => {
    if (!likedPosts.has(postId)) {
      setLikes((prevLikes) => ({
        ...prevLikes,
        [postId]: (prevLikes[postId] || 0) + 1,
      }));
      setLikedPosts((prevLikedPosts) => new Set(prevLikedPosts).add(postId));
    }
  };

  const handleComment = (postId) => {
    setShowCommentForm(postId);
  };

  const handleShare = (postId) => {
    alert(`Post ${postId} shared!`);
  };

  const handleCreatePost = () => {
    if (!isSignedIn && !postAnonymously) {
      navigate("/signup"); // Redirect to signup page
      return;
    }

    if (newPost.category && newPost.content) {
      const newPostData = {
        id: Date.now(),
        author: postAnonymously ? "Anonymous" : "You",
        avatar: postAnonymously ? "/anonymous-avatar.png" : "https://via.placeholder.com/40",
        role: postAnonymously ? "Guest" : "Community Member",
        time: "Just now",
        content: newPost.content,
        image: newPost.image,
        likes: 0,
        comments: 0,
        commentsList: [],
      };
      setPosts((prevPosts) => ({
        ...prevPosts,
        [newPost.category]: [newPostData, ...prevPosts[newPost.category]],
      }));
      setNewPost({ category: "", content: "", image: null });
      setShowPostForm(false);
      alert("Post created successfully!");
    } else {
      alert("Please select a category and write some content.");
    }
  };

  const handleAddComment = (postId) => {
    if (newComment.trim() === "") {
      alert("Please enter a comment.");
      return;
    }

    // Find which category the post belongs to
    let category = "";
    for (const [cat, postsList] of Object.entries(posts)) {
      if (postsList.some(post => post.id === postId)) {
        category = cat;
        break;
      }
    }

    if (category) {
      setPosts(prevPosts => {
        const updatedPosts = { ...prevPosts };
        updatedPosts[category] = updatedPosts[category].map(post => {
          if (post.id === postId) {
            return {
              ...post,
              comments: post.comments + 1,
              commentsList: [
                ...post.commentsList || [],
                {
                  id: Date.now(),
                  author: "You",
                  avatar: "https://via.placeholder.com/40",
                  time: "Just now",
                  content: newComment
                }
              ]
            };
          }
          return post;
        });
        return updatedPosts;
      });

      setNewComment("");
      setShowCommentForm(null);
    }
  };

  // CSS for hiding scrollbar but allowing scroll functionality
  const scrollbarStyles = `
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .no-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(calc(-280px * 2.5));
      }
    }
    .animate-scroll-infinite {
      animation: scroll 10s linear infinite;
    }
    .hover-shadow:hover {
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
      transform: translateY(-2px);
      transition: all 0.3s ease-in-out;
    }
    .hover-bg:hover {
      background-color: #ffd050;
      color: #232536;
      transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
    }
  `;

  return (
    <div className="w-screen mx-auto min-h-screen bg-[#fffaea]">
      {/* Add styles for hiding scrollbar */}
      <style>{scrollbarStyles}</style>
      
      {/* Welcome Header with Single Banner */}
      <section className="relative w-full h-[450px] overflow-hidden mt-[120px]">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              activeBanner === index ? "opacity-100 z-10" : "opacity-0 z-0"
            } hover-shadow`}
            style={{
              backgroundImage: `url(${banner.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Improved Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>
            {/* Center-Aligned Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-start text-white px-10">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
                Welcome to the<br></br>IndieGuru Community
              </h1>
              <p className="text-lg md:text-xl font-medium drop-shadow-md mb-6">{banner.text}</p>
              <button className="bg-[#ffd050] text-[#232536] px-6 py-3 rounded-md font-medium hover-shadow">
                Read More
              </button>
            </div>
          </div>
        ))}
        {/* Dots for Banner Navigation */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
          {banners.map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full ${
                activeBanner === index ? "bg-white" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </section>

      {/* Podcast Series Section */}
      <section className="max-w-7xl mx-auto px-4 mt-16 mb-8">
        <h2 className="text-2xl font-bold text-[#232536] mb-4">Podcast Series</h2>
        <div className="overflow-hidden">
          <div
            ref={feedRef}
            className="flex gap-6 no-scrollbar animate-scroll-infinite"
            style={{
              paddingBottom: "12px",
              width: "fit-content"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.animationPlayState = 'paused';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.animationPlayState = 'running';
            }}
          >
            {[...randomFeeds, ...randomFeeds].map((podcast, index) => (
              <div key={`${podcast.id}-${index}`} className="flex-none w-80 bg-white rounded-lg shadow-md overflow-hidden hover-shadow">
                <div className="relative">
                  <img src={podcast.image} alt={podcast.title} className="w-full h-48 object-cover" />
                  {/* Play button overlay */}
                  <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl font-bold opacity-0 hover:opacity-100 transition-opacity">
                    ▶
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-[#232536] mb-2">{podcast.title}</h3>
                  <p className="text-sm text-gray-600">{podcast.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Tabs */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-lg p-4 mb-8 shadow-sm">
          <div className="flex overflow-x-auto gap-2 pb-2 no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md whitespace-nowrap hover-bg ${
                  activeTab === tab.id
                    ? "bg-[#ffd050] text-[#232536] font-medium"
                    : "bg-gray-100 text-[#6d6e76]"
                }`}
              >
                {tab.icon}
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Feed */}
        <div className="lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[#232536] text-2xl font-bold">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
            <button
              className="bg-[#ffd050] text-[#232536] px-6 py-2 rounded-md font-medium hover-shadow"
              onClick={() => setShowPostForm(true)}
            >
              Create Post
            </button>
          </div>
          {showPostForm && (
            <section className="mb-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-[#232536] mb-4">Create a New Post</h3>
                {!isSignedIn && (
                  <div className="mb-4 flex items-center justify-between">
                    <label className="text-sm font-medium text-[#232536]">
                      Post Anonymously
                    </label>
                    <Switch
                      checked={postAnonymously}
                      onChange={setPostAnonymously}
                      className={`${
                        postAnonymously ? "bg-[#ffd050]" : "bg-gray-200"
                      } relative inline-flex h-6 w-11 items-center rounded-full`}
                    >
                      <span
                        className={`${
                          postAnonymously ? "translate-x-6" : "translate-x-1"
                        } inline-block h-4 w-4 transform bg-white rounded-full transition`}
                      />
                    </Switch>
                  </div>
                )}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-[#232536] mb-2">Post Content</label>
                  <textarea
                    className="w-full bg-white border border-gray-300 rounded-md p-2"
                    rows="4"
                    value={newPost.content}
                    onChange={(e) => setNewPost({ ...newPost, category: activeTab, content: e.target.value })}
                    placeholder={`Write your post in the ${activeTab} category...`}
                  ></textarea>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-[#232536] mb-2">Upload Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setNewPost({ ...newPost, image: URL.createObjectURL(e.target.files[0]) })}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
                  />
                </div>
                <div className="flex gap-4">
                  <button
                    className="bg-[#ffd050] text-[#232536] px-6 py-2 rounded-md font-medium"
                    onClick={handleCreatePost}
                  >
                    Post
                  </button>
                  <button
                    className="bg-gray-100 text-[#6d6e76] px-6 py-2 rounded-md font-medium"
                    onClick={() => setShowPostForm(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </section>
          )}
          {posts[activeTab]?.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-sm mb-6 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img src={post.avatar || "/rectangle-2749.png"} alt={post.author} className="w-10 h-10 rounded-full" />
                  <div>
                    <h3 className="font-medium text-[#232536]">{post.author}</h3>
                    <div className="text-sm text-[#6d6e76] flex items-center gap-2">
                      <span>{post.role}</span>
                      <span>•</span>
                      <span>{post.time}</span>
                    </div>
                  </div>
                </div>
                <p className="text-[#4c4c4c] mb-4">{post.content}</p>
                {post.image && (
                  <img src={post.image} alt="Post image" className="w-full rounded-lg mb-4" />
                )}
                <div className="flex items-center gap-4 pt-2 border-t mt-4">
                  <button
                    className={`bg-white flex items-center gap-1 text-[#6d6e76] hover:text-[#00a9a5] ${
                      likedPosts.has(post.id) ? "text-red-500" : ""
                    }`}
                    onClick={() => handleLike(post.id)}
                  >
                    <Heart className={`w-4 h-4 ${likedPosts.has(post.id) ? "fill-current" : ""}`} />
                    <span>{likes[post.id] || post.likes}</span>
                  </button>
                  <button
                    className="flex bg-white items-center gap-1 text-[#6d6e76] hover:text-[#00a9a5]"
                    onClick={() => handleComment(post.id)}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{comments[post.id] || post.comments}</span>
                  </button>
                  <button
                    className="flex items-center bg-white gap-1 text-[#6d6e76] hover:text-[#00a9a5] ml-auto"
                    onClick={() => handleShare(post.id)}
                  >
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                </div>

                {/* Comments List */}
                {post.commentsList && post.commentsList.length > 0 && (
                  <div className="mt-4 pt-4 border-t">
                    <h4 className="font-medium text-[#232536] mb-3">Comments</h4>
                    <div className="space-y-4">
                      {post.commentsList.map((comment) => (
                        <div key={comment.id} className="flex gap-3">
                          <img src={comment.avatar} alt={comment.author} className="w-8 h-8 rounded-full" />
                          <div className="bg-gray-50 p-3 rounded-lg flex-1">
                            <div className="flex justify-between mb-1">
                              <span className="font-medium text-[#232536]">{comment.author}</span>
                              <span className="text-xs text-[#6d6e76]">{comment.time}</span>
                            </div>
                            <p className="text-sm text-[#4c4c4c]">{comment.content}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Comment Form */}
                {showCommentForm === post.id && (
                  <div className="mt-4 pt-4 border-t">
                    <div className="flex gap-3">
                      <img src="https://via.placeholder.com/40" alt="Your Avatar" className="w-8 h-8 rounded-full" />
                      <div className="flex-1">
                        <textarea
                          className="w-full bg-gray-50 border border-gray-200 rounded-md p-2 text-sm"
                          rows="2"
                          value={newComment}
                          onChange={(e) => setNewComment(e.target.value)}
                          placeholder="Write a comment..."
                        ></textarea>
                        <div className="flex justify-end gap-2 mt-2">
                          <button
                            className="bg-gray-100 text-[#6d6e76] px-3 py-1 rounded-md text-sm"
                            onClick={() => setShowCommentForm(null)}
                          >
                            Cancel
                          </button>
                          <button
                            className="bg-[#ffd050] text-[#232536] px-3 py-1 rounded-md text-sm font-medium"
                            onClick={() => handleAddComment(post.id)}
                          >
                            Post Comment
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Trending Topics */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-[#232536]" />
              <h3 className="text-[#232536] font-bold">Trending Topics</h3>
            </div>
            <div className="space-y-4">
              {trending.map((item) => (
                <div key={item.id} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                  <h4 className="font-medium text-[#232536] hover:text-[#00a9a5] cursor-pointer">
                    {item.title}
                  </h4>
                  <div className="flex items-center justify-between mt-1 text-sm">
                    <span className="text-[#00a9a5]">{item.category}</span>
                    <span className="text-[#6d6e76]">{item.engagement}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Invite Friends */}
          <div className="bg-[#ffd050] rounded-lg p-6 hover-shadow">
            <h3 className="text-[#232536] font-bold mb-2">Grow Your Network</h3>
            <p className="text-[#232536] mb-4">Invite friends to join the IndieGuru community and grow together!</p>
            <button
              className="bg-[#232536] text-white w-full py-2 rounded-md font-medium hover-bg"
              onClick={() => window.location.href = "/referral"}
            >
              Invite Friends
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12">
        <FooterSection />
      </div>
    </div>
  );
}