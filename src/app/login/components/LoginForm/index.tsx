import { useForm } from "react-hook-form";

type ILoginFormParams = {
  email: string;
  password: string;
}

export function LoginForm() {
  const { control, handleSubmit, formState: { isSubmitting} } = useForm<ILoginFormParams>()

  return (
    <>
    </>
  )
}