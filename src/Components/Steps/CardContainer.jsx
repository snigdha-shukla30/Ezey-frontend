export const CardContainer = ({ children, title }) => {
  return (
    <div className="flex-1 flex items-center justify-center px-8 py-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
        {title && (
          <p className="text-center text-teal-700 mb-10 text-xl leading-relaxed font-medium">
            {title}
          </p>
        )}
        {children}
      </div>
    </div>
  );
};





