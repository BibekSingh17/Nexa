import { useState } from "react";

/**
 * LoginForm
 * Standalone sign-in form panel — React + Tailwind CSS.
 * Requires the "Fraunces" and "Inter" fonts (Google Fonts) for the exact look.
 */
export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const next = {};
    if (!email.trim()) next.email = "Enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "That email doesn't look right.";
    if (!password) next.password = "Enter your password.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setTimeout(() => setSubmitting(false), 1200);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#171B22] px-6 py-10">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Fraunces:wght@400;500&family=Inter:wght@400;500&display=swap"
      />

      <div
        className="w-full max-w-[360px]"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <h1
          className="text-[26px] font-medium text-[#EDEFF2] mb-1.5"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          Welcome back
        </h1>
        <p className="text-sm text-[#8C93A0] mb-8">
          Sign in to Nexa.
        </p>

        <form onSubmit={handleSubmit} noValidate>
          {/* Email */}
          <div className="mb-[18px]">
            <label className="block text-xs font-medium text-[#A7ADB8] mb-[7px] tracking-wide">
              Email
            </label>
            <input
              type="email"
              value={email}
              placeholder="name@company.com"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-[13px] py-[11px] text-sm text-[#EDEFF2] bg-[#1C222C] border border-[#2A313D] rounded-md outline-none placeholder-[#5B6270] focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20 transition-colors"
            />
            {errors.email && (
              <div className="text-xs text-[#E0765B] mt-1.5">{errors.email}</div>
            )}
          </div>

          {/* Password */}
          <div className="mb-[18px]">
            <label className="block text-xs font-medium text-[#A7ADB8] mb-[7px] tracking-wide">
              Password
            </label>
            <input
              type="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-[13px] py-[11px] text-sm text-[#EDEFF2] bg-[#1C222C] border border-[#2A313D] rounded-md outline-none placeholder-[#5B6270] focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20 transition-colors"
            />
            {errors.password && (
              <div className="text-xs text-[#E0765B] mt-1.5">{errors.password}</div>
            )}
          </div>

          {/* Remember + forgot */}
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center gap-2 text-[13px] text-[#A7ADB8] cursor-pointer">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="accent-[#C9A227]"
              />
              Stay signed in
            </label>
            <a href="#" className="text-[13px] text-[#C9A227] hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3 text-sm font-medium text-[#14181F] bg-[#C9A227] hover:bg-[#DDB534] rounded-md transition-colors disabled:opacity-70"
          >
            {submitting ? "Signing in…" : "Sign in"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-[#262C36]" />
          <span className="text-xs text-[#5B6270]">or continue with</span>
          <div className="flex-1 h-px bg-[#262C36]" />
        </div>

        {/* SSO buttons */}
        <button className="w-full py-2.5 text-[13px] font-medium text-[#EDEFF2] bg-transparent border border-[#2A313D] rounded-md mb-2.5 hover:border-[#3A4250] transition-colors">
          Continue with Google
        </button>
        <button className="w-full py-2.5 text-[13px] font-medium text-[#EDEFF2] bg-transparent border border-[#2A313D] rounded-md hover:border-[#3A4250] transition-colors">
          Continue with Apple
        </button>

        <p className="mt-7 text-center text-[13px] text-[#8C93A0]">
          New to Northbound?{" "}
          <a href="#" className="text-[#C9A227] hover:underline">
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
}