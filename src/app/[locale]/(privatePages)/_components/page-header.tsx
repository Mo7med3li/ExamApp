const PageHeader = async ({
  title,
  icon: Icon,
}: {
  title: string;
  icon: React.ElementType<{ className?: string }>;
}) => {
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-4 bg-blue-600 p-4">
            <Icon className="text-white size-11" />
            <span className="text-3xl font-semibold text-white">{title}</span>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
      </div>
    </>
  );
};

export default PageHeader;
