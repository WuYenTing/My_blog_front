const Introduction: React.FC = () => {
  return (
    <div className="space-y-4 bg-[url('/introduce_bg.jpg')] mask-t-from-95% mask-b-from-80% mask-x-from-90% bg-no-repeat bg-center bg-cover">
      <div className="h-72">
      </div>
      <h2 className="mx-10 text-3xl font-bold tracking-tight text-gray-100 sm:text-5xl mask-none">
        From the blog
      </h2>
      <p className="mx-10 text-lg leading-8 text-gray-300 sm:text-2xl mask-none">
        Learn how to grow your business with our expert advice.
      </p>
      <div className="h-36">
      </div>
    </div>
  );
};

export default Introduction;