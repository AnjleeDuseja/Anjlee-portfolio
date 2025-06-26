export default function Loader() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-purple-100 transition-all duration-500 ease-out opacity-100 delay-200">
    
      <img
        src="/Logo-Dark.svg"
        alt="Loading..."
          className="w-30 h-30 animate-pulse"
      />
      <div className="w-12 h-12 border-4 border-purple-800 border-dashed animate-spin"></div>
    
    </div>
  );
}
