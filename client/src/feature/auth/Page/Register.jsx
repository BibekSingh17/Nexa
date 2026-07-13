import { useState } from "react";


export default function Register() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);


  const validate = () => {

    const next = {};
    if (!username.trim()) next.username = "Choose a username.";

    else if (username.trim().length < 3)
      next.username = "Username must be at least 3 characters.";

    if (!email.trim()) next.email = "Enter your email.";

    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "That email doesn't look right.";

    if (!password) next.password = "Create a password.";

    else if (password.length < 8)
      next.password = "Password must be at least 8 characters.";

    if (!agree) next.agree = "You need to accept the terms to continue.";

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
          Create your account
        </h1>
        <p className="text-sm text-[#8C93A0] mb-8">
          Start your journery with Nexa.
        </p>

        <form onSubmit={handleSubmit} noValidate>
          {/* Username */}
          <div className="mb-[18px]">
            <label className="block text-xs font-medium text-[#A7ADB8] mb-[7px] tracking-wide">
              Username
            </label>
            <input
              type="text"
              value={username}
              placeholder="janedoe"
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-[13px] py-[11px] text-sm text-[#EDEFF2] bg-[#1C222C] border border-[#2A313D] rounded-md outline-none placeholder-[#5B6270] focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20 transition-colors"
            />
            {errors.username && (
              <div className="text-xs text-[#E0765B] mt-1.5">{errors.username}</div>
            )}
          </div>

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
              placeholder="At least 8 characters"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-[13px] py-[11px] text-sm text-[#EDEFF2] bg-[#1C222C] border border-[#2A313D] rounded-md outline-none placeholder-[#5B6270] focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20 transition-colors"
            />
            {errors.password && (
              <div className="text-xs text-[#E0765B] mt-1.5">{errors.password}</div>
            )}
          </div>

          {/* Terms */}
          <div className="mb-6">
            <label className="flex items-start gap-2 text-[13px] text-[#A7ADB8] cursor-pointer">
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="accent-[#C9A227] mt-0.5"
              />
              <span>
                I agree to the{" "}
                <a href="#" className="text-[#C9A227] hover:underline">
                  Terms of service
                </a>{" "}
                and{" "}
                <a href="#" className="text-[#C9A227] hover:underline">
                  Privacy policy
                </a>
              </span>
            </label>
            {errors.agree && (
              <div className="text-xs text-[#E0765B] mt-1.5">{errors.agree}</div>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3 text-sm font-medium text-[#14181F] bg-[#C9A227] hover:bg-[#DDB534] rounded-md transition-colors disabled:opacity-70"
          >
            {submitting ? "Creating account…" : "Create account"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-[#262C36]" />
          <span className="text-xs text-[#5B6270]">or continue with</span>
          <div className="flex-1 h-px bg-[#262C36]" />
        </div>

        {/* Google auth */}
        <button className="w-full flex items-center justify-center gap-2 py-2.5 text-[13px] font-medium text-[#EDEFF2] bg-transparent border border-[#2A313D] rounded-md hover:border-[#3A4250] transition-colors">
          <svg width="16" height="16" viewBox="0 0 48 48" aria-hidden="true">
            <path
              fill="#FFC107"
              d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.6-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 3l6-6C33.8 5.5 29.1 3.5 24 3.5 12.7 3.5 3.5 12.7 3.5 24S12.7 44.5 24 44.5 44.5 35.3 44.5 24c0-1.2-.1-2.4-.3-3.5z"
            />
            <path
              fill="#FF3D00"
              d="M6.3 14.7l6.6 4.8C14.6 15.9 18.9 13 24 13c3.1 0 5.8 1.1 8 3l6-6C33.8 5.5 29.1 3.5 24 3.5c-7.6 0-14.1 4.3-17.7 10.6z"
            />
            <path
              fill="#4CAF50"
              d="M24 44.5c5 0 9.6-1.9 13-5.1l-6.2-5.1c-2 1.4-4.6 2.2-6.8 2.2-5.3 0-9.7-3.4-11.3-8.1l-6.5 5C9.8 40.1 16.4 44.5 24 44.5z"
            />
            <path
              fill="#1976D2"
              d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.2 4.2-4.1 5.6l6.2 5.1C40.6 36 44.5 30.6 44.5 24c0-1.2-.1-2.4-.3-3.5z"
            />
          </svg>
          Continue with Google
        </button>

        <p className="mt-7 text-center text-[13px] text-[#8C93A0]">
          Already have an account?{" "}
          <a href="#" className="text-[#C9A227] hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}