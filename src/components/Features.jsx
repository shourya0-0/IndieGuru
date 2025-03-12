const Features = () => {
  const features = [
    {
      title: "Expert Mentorship",
      description: "Connect with industry professionals who guide your learning journey",
      icon: "👨‍🏫"
    },
    {
      title: "Personalized Learning",
      description: "Learn at your own pace with customized curriculum",
      icon: "📚"
    },
    {
      title: "Real Projects",
      description: "Work on real-world projects to build your portfolio",
      icon: "💼"
    },
    {
      title: "Community Support",
      description: "Join a community of like-minded learners",
      icon: "🤝"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Why Choose IndieGuru?
          <span className="block w-32 h-1 bg-primary mx-auto mt-4"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg bg-gray-50 hover:shadow-lg transition duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features; 