import { Link } from "react-router";
import { Mail, Lock, Github } from "lucide-react";
import Button from "../components/utils/Button";
import { FiGithub } from "react-icons/fi";
import { FaGoogle } from "react-icons/fa";
import Input from "../components/utils/Input";

const Login = () => {
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
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <Input
              label="Email Address"
              type="email"
              icon={Mail}
              placeholder="name@company.com"
            />
            <div className="space-y-1">
              <div className="flex justify-between">
                <label className="text-sm font-medium text-slate-700">
                  Password
                </label>
                <a href="#" className="text-xs font-semibold text-indigo-600">
                  Forgot?
                </a>
              </div>
              <Input type="password" icon={Lock} placeholder="••••••••" />
            </div>

            <Button type="submit" className="w-full py-3">
              Sign In
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
