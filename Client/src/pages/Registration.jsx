import { Link } from "react-router";
import { User, Mail, Lock, Eye, EyeClosed } from "lucide-react";
import Button from "../components/utils/Button";
import Input from "../components/utils/Input";
import { useForm } from "react-hook-form";
import CheckBox from "../components/utils/CheckBox";
import { authServices } from "../api";
import { useState } from "react";
const Registration = () => {
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await authServices.registration(data);
      console.log(res);
      // console.log(res.message);
    } catch (error) {
      const message = error.response?.data?.message;
      console.log("ErrorMessage :", message);

      if (message === "User with this email already exists") {
        setError("email", { message: message });
      }
      if (message === "Invalid password") {
        setError("password", { message: message });
      }
    }
  };
  console.log("error", errors);
  // console.log(watch("password"));
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-slate-900">
            Create an account
          </h1>
          <p className="text-slate-500 mt-2">
            Start shortening and tracking your links today
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100">
          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Full Name"
              icon={User}
              placeholder="John Doe"
              {...register("name", { required: "name Address is required" })}
              error={errors?.name?.message}
            />
            <Input
              label="Email Address"
              type="email"
              icon={Mail}
              placeholder="name@company.com"
              {...register("email", { required: "Email Address is required" })}
              error={errors?.email?.message}
            />
            <div className=" relative">
              {open ? (
                <Eye
                  onClick={() => setOpen(false)}
                  className="cursor-pointer duration-300 hover:scale-110 text-gray-600 absolute right-2 top-10 z-10"
                />
              ) : (
                <EyeClosed
                  onClick={() => setOpen(true)}
                  className="cursor-pointer duration-300 hover:scale-110 text-gray-600 absolute right-2 top-10 z-10"
                />
              )}

              <Input
                label="Password"
                labelRight={
                  <a href="#" className="text-xs text-indigo-600 font-bold">
                    Forgot?
                  </a>
                }
                type={open ? "text" : "Password"}
                icon={Lock}
                placeholder="Min. 8 characters"
                {...register("password", {
                  required: "password Address is required",
                })}
                error={errors?.password?.message}
              />
            </div>

            <CheckBox
              id="terms"
              label={
                <>
                  I agree to the{" "}
                  <a href="#" className="text-indigo-600 underline">
                    Terms & Conditions
                  </a>
                </>
              }
              error={errors?.terms?.message}
              {...register("terms", {
                required: "You must agree to the terms to continue",
              })}
            />

            <Button type="submit" className="w-full py-3">
              Create Free Account
            </Button>
          </form>
        </div>

        <p className="text-center mt-8 text-slate-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-bold text-indigo-600 hover:text-indigo-500 transition-colors"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
