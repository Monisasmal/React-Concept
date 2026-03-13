import { Link } from "react-router-dom";

const InterviewPrep = () => {
  const questions = [
    {
      title: "Counter using useState",
      link: "/interview/counter",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto pt-32 pb-20">
      <h1 className="text-4xl font-bold text-center mb-12">
        React Coding Interview Questions
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-5 mr-5">
        {questions.map((q, i) => (
          <Link
            to={q.link}
            key={i}
            className="p-6 bg-white shadow-xl rounded-xl hover:shadow-2xl"
          >
            <h3 className="text-xl font-bold">{q.title}</h3>

            <p className="text-gray-500 mt-2">Click to view solution</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default InterviewPrep;
