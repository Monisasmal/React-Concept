import { Link } from 'react-router-dom';
import { BookOpen, Code, Terminal, Layers } from 'lucide-react'; // Clean icons

const Home = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-20 text-center">
        <h1 className="text-6xl font-black text-slate-900 mb-6 tracking-tight">
          Learn React <span className="text-blue-600">The Right Way.</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          A structured, project-based guide to mastering React. From fundamental hooks 
          to advanced patterns like Fiber and Concurrent mode.
        </p>
        
        <div className="flex justify-center gap-4">
          <Link to="/concepts" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-200">
            Start Learning
          </Link>
          <Link to="/projects" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl border border-slate-200 hover:bg-slate-50 transition">
            View Projects
          </Link>
        </div>
      </section>

      {/* 2. Feature Highlights */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={<BookOpen className="text-blue-600" />}
            title="Clear Concepts"
            desc="Deep dives into Virtual DOM, Fiber, and Reconciliation."
          />
          <FeatureCard 
            icon={<Code className="text-green-600" />}
            title="Real Examples"
            desc="Every topic includes high-quality, copy-paste code snippets."
          />
          <FeatureCard 
            icon={<Terminal className="text-purple-600" />}
            title="Practical Projects"
            desc="Build real-world apps to solidify your knowledge."
          />
          <FeatureCard 
            icon={<Layers className="text-orange-600" />}
            title="Vite & Tailwind"
            desc="Modern stack setup optimized for speed and learning."
          />
        </div>
      </section>
    </div>
  );
};

// Sub-component for the grid cards
const FeatureCard = ({ icon, title, desc }) => (
  <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
    <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-500 leading-relaxed">{desc}</p>
  </div>
);

export default Home;