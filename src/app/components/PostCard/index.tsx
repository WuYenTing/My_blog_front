"use client";

import Link from "next/link";
import Button from "../atoms/Button";

interface PostItemProps {
  id: string;
  tag: string;
  title: string;
  description: string;
  content: string;
  category: string;
  createdAt?: Date;
  onUpdate?: () => void;
  onDelete?: () => void;
}

const PostCard: React.FC<PostItemProps> = ({
  id,
  tag,
  title,
  description,
  content,
  category,
  createdAt,
  onUpdate,
  onDelete,
}) => {
  const canEdit = onUpdate && onDelete;
  return (
    <div key={id} className="max-w-xl">
      <div className="flex items-center gap-x-4 text-xs">
        <time dateTime={createdAt?.toLocaleString()} className="text-gray-500">
          {createdAt?.toLocaleString()}
        </time>
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <Link href={`/posts/${id}`}>{title}</Link>
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
      {canEdit && (
        <div className="mt-4 flex space-x-2 w-full">
          <Button variant="white" className="!w-full flex-1" onClick={onUpdate}>
            Edit
          </Button>
          <Button variant="red" className="!w-full flex-1" onClick={onDelete}>
            Delete
          </Button>
        </div>
      )}
    </div>
  );
};

export default PostCard;