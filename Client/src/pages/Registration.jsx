import { Link } from "react-router";
import { User, Mail, Lock } from "lucide-react";
import Button from "../components/utils/Button";
import Input from "../components/utils/Input";

const Registration = () => {
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
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <Input label="Full Name" icon={User} placeholder="John Doe" />
            <Input
              label="Email Address"
              type="email"
              icon={Mail}
              placeholder="name@company.com"
            />
            <Input
              label="Password"
              type="password"
              icon={Lock}
              placeholder="Min. 8 characters"
            />
            <Input
              label="Confirm Password"
              type="password"
              icon={Lock}
              placeholder="Repeat password"
            />

            <div className="flex items-center gap-2 py-2">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 rounded text-indigo-600"
              />
              <label htmlFor="terms" className="text-sm text-slate-500">
                I agree to the Terms
              </label>
            </div>

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
