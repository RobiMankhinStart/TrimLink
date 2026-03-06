import { Link, useNavigate } from "react-router";
import { Mail, Lock, Github, Eye, EyeClosed } from "lucide-react";
import Button from "../components/commonUi/Button";
import { FiGithub } from "react-icons/fi";
import { FaGoogle } from "react-icons/fa";
import Input from "../components/commonUi/Input";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { authServices } from "../api";
import { Bounce, toast } from "react-toastify";

const Login = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    console.log(data);
    try {
      setLoading(true);
      const res = await authServices.login(data);
      console.log(res);

      toast.success("Welcome To TrimLink!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (error) {
      setLoading(false);
      const message = error.response?.data?.message;
      console.log("ErrorMessage :", message);

      if (message === "This user doesen't exist. Please Register first") {
        return setError("email", { message: message });
      }
      if (message === "Password do not match") {
        return setError("password", { message: message });
      }
      setError("apiError", { message: message });
    }
  };
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-slate-900">Welcome back</h1>
          <p className="text-slate-500 mt-2">
            Enter your details to manage your links
          </p>
        </div>

        {/* Card */}
        <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100">
          {/* Social Logins */}
          <div className="space-y-3 mb-6">
            <Button variant="secondary" className="w-full  ">
              <FaGoogle className="text-lg" />
              Sign in with Google
            </Button>
            <Button variant="secondary" className="w-full">
              {/* <Github size={20} /> */}
              <FiGithub className="text-lg" />
              Sign in with GitHub
            </Button>
          </div>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-slate-400">
                Or continue with email
              </span>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit(handleLogin)}>
            <Input
              label="Email Address"
              type="email"
              icon={Mail}
              placeholder="name@company.com"
              {...register("email", { required: "Email Address is required" })}
              error={errors?.email?.message}
            />

            <div className="space-y-1 relative">
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

            <Button
              type="submit"
              disabled={loading}
              className={`w-full py-3 ${loading ? "bg-gray-400 cursor-not-allowed" : ""}`}
            >
              {loading ? "Signing In" : "  Sign In"}
            </Button>
          </form>
        </div>

        {/* Footer */}
        <p className="text-center mt-8 text-slate-600">
          Don't have an account?{" "}
          <Link
            to="/registration"
            className="font-bold text-indigo-600 hover:text-indigo-500 transition-colors"
          >
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
