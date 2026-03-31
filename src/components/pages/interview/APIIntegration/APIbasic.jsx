import { Link } from "react-router-dom";

const APIQuestions = () => {
  const questions = [
    {title: "Fetch data from API and display list", path: "/interview/api/FetchAPIData"},
    {title: "Create API search functionality", path: "/interview/api/SearchFunctionality"},
    {title: "Build infinite scrolling list", path: "/interview/api/InfiniteScrolling"},
    {title: "Implement API pagination", path: "/interview/api/ApiPagination"},
    {title: "Implement error handling for API calls", path: "/interview/api/ApiErrorHandling"},
    {title: "Create caching for API requests", path: "/interview/api/ApiCaching"},
  ];

  return (
    <div className="max-w-5xl mx-auto pt-32 pb-20 px-6">
      <h1 className="text-3xl font-bold mb-10"> API Integration Questions</h1>

      <div className="space-y-6">
        {questions.map((q, index) => (
          <Link
            key={index}
            to={q.path}
            className="block bg-white p-6 rounded-xl shadow hover:shadow-lg"
          >
            {q.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default APIQuestions;
