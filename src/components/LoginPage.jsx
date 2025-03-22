
"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { ChevronDown, Eye, EyeOff } from "lucide-react"

const LoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [password, setPassword] = useState("")
  const [countryCode, setCountryCode] = useState("+91")
  const [showCountryDropdown, setShowCountryDropdown] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const countryCodes = ["+91", "+1", "+44", "+61", "+81"]

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "")
    setPhoneNumber(value)
  }

  const handleCountryCodeSelect = (code) => {
    setCountryCode(code)
    setShowCountryDropdown(false)
  }

  return (
    <div className="min-h-screen bg-[#dae6fd] flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        {/* Left side - Illustration */}
        <div className="hidden lg:flex justify-center items-center bg-white rounded-2xl p-8 h-full">
          <img
            src="/login-illustration.png"
            alt="Person logging in"
            className="max-w-full h-auto"
            onError={(e) => {
              e.target.src =
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IndieGuru_Beta-9L3tfVpLjDlq5LGymU2bYWXxPz33Ei.png"
              e.target.onError = null
            }}
          />
        </div>

        {/* Right side - Form */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 md:p-12">
          <div className="max-w-md mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#0a2540] mb-2">Welcome Back!</h1>
            <p className="text-lg text-[#185899] mb-8">Sign in to continue your learning journey.</p>

            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-lg font-medium text-[#0a2540]">
                  Phone Number
                </label>
                <div className="flex">
                  <div className="relative">
                    <button
                      type="button"
                      className="flex items-center justify-between w-24 px-3 py-2 border border-gray-300 rounded-l-md bg-white text-gray-700"
                      onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                    >
                      <span>{countryCode}</span>
                      <ChevronDown className="h-4 w-4 ml-1" />
                    </button>

                    {showCountryDropdown && (
                      <div className="absolute z-10 mt-1 w-24 bg-white shadow-lg rounded-md border border-gray-300">
                        {countryCodes.map((code) => (
                          <button
                            key={code}
                            type="button"
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                            onClick={() => handleCountryCodeSelect(code)}
                          >
                            {code}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    placeholder="Ex. 999xxxxxxx"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-[#185899]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="password" className="block text-lg font-medium text-[#0a2540]">
                    Password
                  </label>
                  <Link to="/forgot-password" className="text-sm text-[#185899] hover:underline">
                    Forgot Password?
                  </Link>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#185899]"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#0a2540] text-white py-3 rounded-md hover:bg-[#0a2540]/90 transition-colors"
              >
                Sign In
              </button>

              <div className="flex items-center justify-center">
                <div className="flex-1 h-px bg-gray-300"></div>
                <span className="px-4 text-gray-500">or</span>
                <div className="flex-1 h-px bg-gray-300"></div>
              </div>

              <button
                type="button"
                className="w-full flex items-center justify-center gap-2 border border-gray-300 py-3 rounded-md hover:bg-gray-50 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18.1711 8.36788H17.5V8.33329H10V11.6666H14.6422C13.9272 13.6916 12.1155 15.0833 10 15.0833C7.23891 15.0833 5.00002 12.8444 5.00002 10.0833C5.00002 7.32218 7.23891 5.08329 10 5.08329C11.2745 5.08329 12.4344 5.54385 13.3419 6.30274L15.7094 3.93524C14.1039 2.5241 12.1149 1.66663 10 1.66663C5.3978 1.66663 1.66669 5.39774 1.66669 9.99996C1.66669 14.6022 5.3978 18.3333 10 18.3333C14.6022 18.3333 18.3334 14.6022 18.3334 9.99996C18.3334 9.44107 18.2756 8.89718 18.1711 8.36788Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M2.62744 6.12445L5.36522 8.12557C6.10744 6.29501 7.90078 5.08334 10 5.08334C11.2745 5.08334 12.4344 5.5439 13.3419 6.30279L15.7094 3.93529C14.1039 2.52415 12.1149 1.66668 10 1.66668C6.79168 1.66668 4.02255 3.47112 2.62744 6.12445Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M10 18.3333C12.0755 18.3333 13.9389 17.5041 15.3372 16.1458L12.7228 13.9375C11.8539 14.5875 10.8061 14.9792 10 14.9792C7.89725 14.9792 6.09393 13.6 5.37226 11.5917L2.58337 13.7125C3.96393 16.4125 6.76948 18.3333 10 18.3333Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M18.1711 8.36777H17.5V8.33319H10V11.6665H14.6422C14.2956 12.6315 13.6652 13.472 12.8517 14.0748L12.8522 14.0743L15.4667 16.2826C15.2356 16.4959 18.3333 14.1665 18.3333 9.99986C18.3333 9.44097 18.2756 8.89708 18.1711 8.36777Z"
                    fill="#1976D2"
                  />
                </svg>
                <span>Sign In with Google</span>
              </button>
            </form>

            <p className="text-center mt-6">
              Don't have an account?{" "}
              <Link to="/signup" className="text-[#185899] font-medium hover:underline">
                Sign Up
              </Link>
            </p>

            <p className="text-sm text-gray-600 mt-8 text-center">
              By proceeding, you agree to our{" "}
              <Link to="/terms" className="text-[#185899] hover:underline">
                Terms & Conditions
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage

