interface PostItemProps {
  id: string;
  tag: string;
  title: string;
  description: string;
  content: string;
  category: string;
  created_at: Date;
}

const PostCard: React.FC<PostItemProps> = ({
  id,
  tag,
  title,
  description,
  content,
  category,
  created_at,
}) => {
  return (
    <div key={id} className="max-w-xl">
      <div>
        {id}
      </div>
      <div className="flex items-center gap-x-4 text-xs">
        <time dateTime={created_at.toString()} className="text-gray-500">
          {created_at.toString()}
        </time>
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          {title}
        </h3>
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
          {description}
        </p>
        <p>
          {content}
        </p>
        <p>
          {category}
        </p>
        <p>
          {tag}
        </p>
      </div>
    </div>
  );
};

export default PostCard;