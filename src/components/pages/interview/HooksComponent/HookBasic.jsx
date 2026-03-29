import { Link } from "react-router-dom";

const HookQuestion = () => {
  const questions = [
    {title: "Create a Custom Hook called useToggle", path: "/interview/hook/CustomHookToggle"},
    {title: "Build a useDebounce hook", path: "/interview/hook/DebounceLogic"},
  ];

  return (
    <div className="max-w-5xl mx-auto pt-32 pb-20 px-6">
      <h1 className="text-3xl font-bold mb-10"> Hook Coding Questions</h1>

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

export default HookQuestion;
