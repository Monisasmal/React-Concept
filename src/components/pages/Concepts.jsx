import { Link } from 'react-router-dom';
import {conceptRoutes} from '../../routes/conceptRoutes';

const Concepts = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-10 text-slate-900">React Concepts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {conceptRoutes
          .filter((route) => 
            route.title &&             
            !route.hidden &&           
            route.path !== "/concepts" 
          ) 
          .map((route, index) => (
            <Link 
              to={route.path.replace('?', '')} 
              key={index} 
              className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md hover:border-blue-200 transition-all group"
            >
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                {route.title} 
              </h3>
              <p className="text-sm text-slate-400 mt-2">Click to learn more →</p>
            </Link>
          ))}
      </div>
      
    </div>
  );
};

export default Concepts;