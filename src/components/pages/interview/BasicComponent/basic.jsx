import { Link } from "react-router-dom";

const BasicQuestions = () => {
  const questions = [
    { title: "Build Counter using useState", path: "/interview/basic/counter" },
    { title: "Todo List CRUD", path: "/interview/basic/TodoCURD" },
    {
      title: "Implement conditional rendering in React",
      path: "/interview/basic/ConditionalRendering",
    },
    { title: "List Rendering", path: "/interview/basic/ListRendering" },
    {
      title: "Build a form handling component",
      path: "/interview/basic/FormHandling",
    },
    {
      title: "Create a controlled input component",
      path: "/interview/basic/ControllInput",
    },
    {
      title: "Build a search filter component ",
      path: "/interview/basic/SearchFilter",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto pt-32 pb-20 px-6">
      <h1 className="text-3xl font-bold mb-10">Basic React Coding Questions</h1>

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

export default BasicQuestions;
