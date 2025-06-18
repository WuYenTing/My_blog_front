"use client";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInput from "../form/FormInput";
import FormMarkDownInput from "../form/FormMarkDownInput";
import Button from "../atoms/Button";
import { useRouter } from "next/navigation";
import { CreatePostParams } from "@/app/hooks/useCreatePost";

export interface PostFormProps {
  isPending?: boolean;
  defaultValues?: CreatePostParams;
  buttonLabel?: string;
  onSubmit: (values: CreatePostParams) => void;
}

const PostForm: React.FC<PostFormProps> = ({
  isPending,
  defaultValues,
  buttonLabel,
  onSubmit,
}) => {
  const router = useRouter();
  const schema = yup.object().shape({
    title: yup.string().nullable().required("Please input title"),
    description: yup.string().nullable().required("Please input description"),
    content: yup.string().nullable().required("Please input content"),
    category: yup.string().nullable().required("Please input category"),
    tag: yup.string().nullable().required("Please input tag"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatePostParams>({
    resolver: yupResolver(schema),
    defaultValues,
  });

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        label="Title"
        name="title"
        containerClassName="max-w-md mx-auto"
        control={control}
        error={errors.title}
      />
      <FormInput
        containerClassName="max-w-md mx-auto"
        label="Description"
        name="description"
        control={control}
        error={errors.description}
      />
      <FormInput
        containerClassName="max-w-md mx-auto"
        label="Category"
        name="category"
        control={control}
        error={errors.category}
      />
      <FormInput
        containerClassName="max-w-md mx-auto"
        label="Tag"
        name="tag"
        control={control}
        error={errors.tag}
      />
      <FormMarkDownInput
        label={"Content"}
        control={control}
        name="content"
        error={errors.content}
      />
      <div className="w-full flex items-center justify-center space-x-2">
        <Button className="!w-32" variant="white" onClick={() => router.back()}>
          Back
        </Button>
        <Button className="!w-32" type="submit" loading={isPending}>
          {buttonLabel}
        </Button>
      </div>
    </form>
  );
};

export default PostForm;