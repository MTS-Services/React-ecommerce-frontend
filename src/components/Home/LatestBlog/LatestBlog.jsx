import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const LatestBlog = () => {
  const blogs = [
    {
      date: "March 23, 2025",
      category: "Organic",
      title: "Marketing Guide: 5 Steps to Success.",
      description:
        "Discover how AI is revolutionizing the way websites are built, optimized, and maintained in the digital world.",
      image:
        "https://grabit-react-next.maraviyainfotech.com/assets/img/blog/1.jpg",
    },
    {
      date: "March 22, 2025",
      category: "Fruits",
      title: "Best Ways to Solve Business Deal Issues in Market.",
      description:
        "Explore the key factors that determine the success of a startup and how to scale your business effectively.",
      image:
        "https://grabit-react-next.maraviyainfotech.com/assets/img/blog/2.jpg",
    },
    {
      date: "March 21, 2025",
      category: "Vegetables",
      title: "31 Grecer Customer Service Stats to Know in 2019.",
      description:
        "Learn the secrets behind capturing breathtaking and emotionally powerful images with dramatic lighting.",
      image:
        "https://grabit-react-next.maraviyainfotech.com/assets/img/blog/3.jpg",
    },
    {
      date: "March 20, 2025",
      category: "FastFood",
      title: "Business Ideas to Grow Your Business Traffic.",
      description:
        "Unveil the most mysterious and breathtaking places to visit in 2025 that will leave you spellbound.",
      image:
        "https://grabit-react-next.maraviyainfotech.com/assets/img/blog/4.jpg",
    },
    {
      date: "March 19, 2025",
      category: "Fruits",
      title: "Marketing Guide: 5 Steps to Success.",
      description:
        "Fashion is taking a bold turn with dramatic designs, making waves on the runway and the streets.",
      image:
        "https://grabit-react-next.maraviyainfotech.com/assets/img/blog/5.jpg",
    },
  ];

  return (
    <div className="flex justify-center px-4 lg:px-8 xl:px-8">
      <div className="px- w-full py-8 md:py-10 lg:w-[1500px] lg:py-10">
        <div className="mx-auto mb-12 flex max-w-[1497px] flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <h3 className="text-3xl font-extrabold text-gray-900">
              Day Of The Deal
            </h3>
            <p className="mt-2 text-gray-500">
              Don't wait. The time will never be just right.
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 rounded-lg py-6">
            <h2 className="flex items-center gap-1 font-semibold">
              All Blogs
              <span>
                <MdOutlineKeyboardDoubleArrowRight className="" />
              </span>
            </h2>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
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
                  <p className="mb-4 text-sm text-gray-800">
                    {blog.description}
                  </p>

                  <div>
                    <h2 className="text-[16px] font-bold text-[#155DFC] uppercase">
                      Read More...
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
