import { Link } from "react-router-dom";

const UiQuestions = () => {
  const questions = [
    {title: "Build a login form with validation", path: "/interview/form/ValidLoginForm"},
    {title: "Build a Register form with validation", path: "/interview/form/ValidRegisterForm"},
    {title: "Create a dynamic form generator", path: "/interview/form/DynamicForm"},
    {title: "Build a Password Strength Checker", path: "/interview/form/PasswordStrength"},
    {title: "Build a File Upload component", path: "/interview/form/FileUpload"},
  ];

  return (
    <div className="max-w-5xl mx-auto pt-32 pb-20 px-6">
      <h1 className="text-3xl font-bold mb-10"> Form Coding Questions</h1>

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

export default UiQuestions;
