import { Link } from "react-router-dom";

const InterviewPrep = () => {
  return (
    <div className="max-w-6xl mx-auto pt-32 pb-20 px-6">
      <h1 className="text-4xl font-bold text-center mb-16">
        React Interview Preparation
      </h1>

      <div className="space-y-8">
        {/* BASIC SECTION */}
        <div className="bg-white p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-bold mb-4">Basic React Coding</h2>

          <Link to="/interview/basic" className="text-indigo-600 font-semibold">
            View Questions →
          </Link>
        </div>

        {/* UI SECTION */}

        <div className="bg-white p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-bold mb-4">React UI Components</h2>

          <Link to="/interview/ui" className="text-indigo-600 font-semibold">
            View Questions →
          </Link>
        </div>

        {/* Form Section */}

        <div className="bg-white p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-bold mb-4">React Form Components</h2>

          <Link to="/interview/form" className="text-indigo-600 font-semibold">
            View Questions →
          </Link>
        </div>

        {/* Hook Section */}

        <div className="bg-white p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-bold mb-4">React Hook Components</h2>

          <Link to="/interview/hook" className="text-indigo-600 font-semibold">
            View Questions →
          </Link>
        </div>

      </div>
    </div>
  );
};

export default InterviewPrep;
