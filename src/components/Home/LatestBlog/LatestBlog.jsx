const LatestBlog = () => {
  const blogs = [
    {
      date: "March 23, 2025",
      category: "Technology",
      title: "The Future of AI in Web Development",
      description:
        "Discover how AI is revolutionizing the way websites are built, optimized, and maintained in the digital world.",
      image:
        "https://grabit-react-next.maraviyainfotech.com/assets/img/blog/1.jpg",
    },
    {
      date: "March 22, 2025",
      category: "Business",
      title: "Secrets to Building a Successful Startup",
      description:
        "Explore the key factors that determine the success of a startup and how to scale your business effectively.",
      image:
        "https://grabit-react-next.maraviyainfotech.com/assets/img/blog/2.jpg",
    },
    {
      date: "March 21, 2025",
      category: "Photography",
      title: "Mastering the Art of Dramatic Photography",
      description:
        "Learn the secrets behind capturing breathtaking and emotionally powerful images with dramatic lighting.",
      image:
        "https://grabit-react-next.maraviyainfotech.com/assets/img/blog/3.jpg",
    },
    {
      date: "March 20, 2025",
      category: "Travel",
      title: "Exploring the Most Enigmatic Destinations",
      description:
        "Unveil the most mysterious and breathtaking places to visit in 2025 that will leave you spellbound.",
      image:
        "https://grabit-react-next.maraviyainfotech.com/assets/img/blog/4.jpg",
    },
    {
      date: "March 19, 2025",
      category: "Fashion",
      title: "The Rise of Bold & Dramatic Fashion Trends",
      description:
        "Fashion is taking a bold turn with dramatic designs, making waves on the runway and the streets.",
      image:
        "https://grabit-react-next.maraviyainfotech.com/assets/img/blog/5.jpg",
    },
  ];

  // Function to handle adding the blog to cart (for now it just logs the action)
  const handleAddToCart = (title) => {
    console.log(`${title} added to the cart`);
  };

  // Function to handle removing the blog (for now it just logs the action)
  const handleRemove = (title) => {
    console.log(`${title} removed`);
  };

  return (
    <>
      <div className="flex items-center justify-center overflow-hidden px-4 py-10">
        <div className="text-center">
          <h3 className="mb-4 text-3xl font-bold text-black">
            Latest <span className="text-green-900">Blog</span>
          </h3>
          <p>We track interesting topics every day in 2023.</p>
        </div>
      </div>

      <div className="flex items-center justify-center px-4">
        <div className="grid w-[1492px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="transform overflow-hidden rounded-lg bg-white text-black transition-all duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="h-56 w-full object-cover opacity-90 transition-transform duration-500 ease-out hover:scale-110 hover:opacity-100"
              />

              <div className="p-5">
                <div className="mb-2 flex justify-between text-sm text-gray-400">
                  <span className="text-black">{blog.date}</span>
                  <span className="rounded-full px-3 py-1 text-xs text-black">
                    {blog.category}
                  </span>
                </div>

                <h2 className="mb-2 text-lg font-bold transition-colors duration-300">
                  {blog.title}
                </h2>
                <p className="mb-4 text-sm text-gray-800">{blog.description}</p>

                <div>
                  <h2 className="upercaus text-[16px] font-bold text-[#155DFC]">
                    Read More....
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LatestBlog;
