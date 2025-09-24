const PageHeader = async ({
  title,
  icon: Icon,
  subtitle,
}: {
  title: string;
  icon: React.ElementType<{ className?: string }>;
  subtitle?: string;
}) => {
  return (
    <div className="mb-8">
      <div className="flex items-center space-x-4">
        <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
          <Icon className="w-7 h-7 text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
            {title}
          </h1>
          {subtitle && <p className="text-slate-600 mt-1">{subtitle}</p>}
        </div>
      </div>

      {/* Decorative line */}
      <div className="mt-6 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full w-24"></div>
    </div>
  );
};

export default PageHeader;
