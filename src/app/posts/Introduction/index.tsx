import Background from "../../components/background";

const Introduction: React.FC = () => {
  return (
    <div className="space-y-4 ">
      <div className="bg-[url(/introduce_bg.jpg)]"></div>
      <Background />
      <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
        From the blog
      </h2>
      <p className="text-lg leading-8 text-gray-300">
        Learn how to grow your business with our expert advice.
      </p>
    </div>
  );
};

export default Introduction;