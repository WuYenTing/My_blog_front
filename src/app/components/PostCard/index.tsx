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
  tag:_tag,
  title,
  description,
  content,
  category:_category,
  createdAt:_createdAt,
  onUpdate,
  onDelete,
}) => {
  const canEdit = onUpdate && onDelete;
  return (
    <div key={id} className="flex flex-col max-w-full rounded-xl min-h-96">
      <div className="">
      </div>
      <div className="flex flex-col group relative gap-5 mt-5 mx-5">
        <h3 className="line-clamp-2 text-center text-xl leading-6 text-gray-100 min-h-12 font-bold">
          {title}
        </h3>
        <p className="line-clamp-3 text-center text-lg leading-6 text-gray-300 min-h-18 font-semibold">
          {description}
        </p>
        <p className="line-clamp-5 text-justify text-sm leading-6 text-emerald-50 min-h-30">
          {content}
        </p>
      </div>
      <div className="flex justify-center items-end m-5">
        <Link href={`/posts/${id}`}>
          <Button variant="emerald" className="">
            Read More
          </Button>
        </Link>
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