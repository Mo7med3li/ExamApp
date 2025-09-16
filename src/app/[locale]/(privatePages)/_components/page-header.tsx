const PageHeader = async ({
  title,
  icon: Icon,
}: {
  title: string;
  icon: React.ElementType<{ className?: string }>;
}) => {
  return (
    <div className="flex items-center gap-4 bg-blue-600 p-4">
      <Icon className="text-white size-11" />
      <span className="text-3xl font-semibold text-white">{title}</span>
    </div>
  );
};

export default PageHeader;
