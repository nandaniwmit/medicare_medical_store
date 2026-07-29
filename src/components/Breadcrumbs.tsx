import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) return null; // No breadcrumbs on Home Page

  return (
    <div className="bg-slate-50 dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs md:text-sm text-slate-500 dark:text-slate-400">
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-teal-600 dark:hover:text-teal-400 transition-colors font-medium"
          >
            <Home className="w-4 h-4" />
            Home
          </Link>

          {pathnames.map((value, index) => {
            const last = index === pathnames.length - 1;
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;
            const formattedValue = value.charAt(0).toUpperCase() + value.slice(1);

            return (
              <div key={to} className="flex items-center space-x-2">
                <ChevronRight className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600" />
                {last ? (
                  <span className="font-semibold text-slate-800 dark:text-slate-200" aria-current="page">
                    {formattedValue}
                  </span>
                ) : (
                  <Link
                    to={to}
                    className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors font-medium"
                  >
                    {formattedValue}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
