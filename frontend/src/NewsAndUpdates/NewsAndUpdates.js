import React from 'react';
import img1 from '../asserts/article_image1.png';
import img2 from '../asserts/article_image2.png';
import img3 from '../asserts/article_image3.png';

const articles = [
  {
    id: 1,
    image: img1,
    title: "Surviving through tough times as a first time SaaS...",
    snippet: "Self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.",
    category: "BUSINESS",
    pillClass: "bg-orange-100", // pill-business
    dateText: "Oct 3 · 7 min read"
  },
  {
    id: 2,
    image: img2,
    title: "SaaS customer development and no-code prototypes",
    snippet: "Self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.",
    category: "MARKETING",
    pillClass: "bg-cyan-100", // pill-marketing
    dateText: "Oct 3 · 7 min read"
  },
  {
    id: 3,
    image: img3,
    title: "Highnote partners wealth with $54 Million in ...",
    snippet: "Self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.",
    category: "ANALYTICS",
    pillClass: "bg-green-100", // pill-analytics
    dateText: "Oct 3 · 7 min read"
  }
];

const NewsAndUpdates = () => {
  return (
    <section className="py-20 px-5 bg-[#f6f8fb] font-sans">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-center text-[32px] md:text-[38px] font-extrabold text-slate-900 m-0 mb-[50px]">News & Updates</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] md:gap-10 lg:gap-[30px] mb-[50px]">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_2px_4px_-1px_rgba(0,0,0,0.03)] flex flex-col transition-transform duration-200 hover:-translate-y-1.5">
              <div className="h-[220px] w-full overflow-hidden bg-gray-200">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 sm:p-[30px] sm:px-[24px] flex flex-col flex-grow">
                <h3 className="text-[20px] font-bold text-slate-800 leading-[1.4] m-0 mb-4">{article.title}</h3>
                <p className="text-[15px] text-slate-500 leading-[1.6] m-0 mb-[30px] flex-grow">{article.snippet}</p>
                <div className="flex justify-between items-center">
                  <span className={`text-[11px] font-extrabold tracking-[0.5px] px-3 py-1.5 rounded-full text-slate-800 ${article.pillClass}`}>
                    {article.category}
                  </span>
                  <span className="text-[13px] text-gray-400 font-medium">{article.dateText}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center group">
          <a href="#/news" className="inline-flex items-center text-blue-500 text-base font-semibold no-underline transition-colors duration-200 hover:text-blue-600">
            View more articles <span className="ml-2 text-lg transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsAndUpdates;
