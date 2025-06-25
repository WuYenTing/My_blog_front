interface IntroduceProps {
  title?: string,
  slogan?: string,
  subslogan?: string,
}

const Introduction: React.FC<IntroduceProps> = ({ title, slogan, subslogan}) => {
  return (
    <div className="space-y-4 bg-[url('/introduce_bg.jpg')] mask-t-from-95% mask-b-from-80% mask-x-from-90% bg-no-repeat bg-center bg-cover">
      <div className="h-72">
      </div>
      <h2 className="mx-10 text-3xl font-bold tracking-tight text-gray-100 sm:text-5xl mask-none">
        {title}
      </h2>
      <p className="mx-10 text-lg font-semibold leading-8 text-gray-300 sm:text-2xl mask-none">
        {slogan}
      </p>
      <p className="mx-10 text-md leading-8 text-gray-400 sm:text-xl mask-none">
        {subslogan}
      </p>
      <div className="h-36">
      </div>
    </div>
  );
};

export default Introduction;