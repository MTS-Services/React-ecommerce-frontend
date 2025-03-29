const blogs = [
  {
    date: "March 23, 2025",
    category: "Organic",
    title: "marketing Guide:  5 steps to Success to way.",
    description:
      "Discover how AI is revolutionizing the way websites are built, optimized, and maintained in the digital world.",
    image:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/blog/1.jpg",
  },
  {
    date: "March 22, 2025",
    category: "Fruits",
    title: "Best way to solove business deal issue in  market.",
    description:
      "Explore the key factors that determine the success of a startup and how to scale your business effectively.",
    image:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/blog/2.jpg",
  },
  {
    date: "March 21, 2025",
    category: "Vegetables",
    title: "31 Grecer customer service stats know in 2019.",
    description:
      "Learn the secrets behind capturing breathtaking and emotionally powerful images with dramatic lighting.",
    image:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/blog/3.jpg",
  },
  {
    date: "March 20, 2025",
    category: "FastFood",
    title: "Business ideas to gro w you business traffic.",
    description:
      "Unveil the most mysterious and breathtaking places to visit in 2025 that will leave you spellbound.",
    image:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/blog/4.jpg",
  },
];

const LatestBlog = () => {
  return (
    <section className="py-20">
      <div className="mb-10 flex items-center justify-center overflow-hidden">
        <div className="text-center">
          <h2 className="mb-4 text-4xl font-bold text-black">
            Latest <span className="text-green-900">Blog</span>
          </h2>
          <p className="text-xl font-semibold text-gray-500">
            We track interesting topics every day in 2023.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="grid w-[1492px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="transform overflow-hidden rounded-lg bg-white text-black transition-all duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="h-56 w-full cursor-pointer object-cover opacity-90 transition-transform duration-500 ease-out hover:scale-110 hover:opacity-100"
              />

              <div className="pt-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">
                    {blog.date}
                  </span>
                  <span className="text-sm font-medium text-gray-500">
                    {blog.category}
                  </span>
                </div>

                <h2 className="mb-2 text-xl font-semibold text-gray-700">
                  {blog.title}
                </h2>
                <p className="mb-4 text-sm text-gray-500">{blog.description}</p>

                <div>
                  <button className="upercaus cursor-pointer text-[16px] font-bold text-[#01143d]">
                    Read More...
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
