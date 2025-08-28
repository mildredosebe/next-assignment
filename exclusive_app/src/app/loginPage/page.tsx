import { Inter } from "next/font/google";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from "next/link";
import React from "react";
import { Footer } from "../shared-components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function LogIn() {
  return (
    <div className={`${inter.className} bg-gray-50`}>
      <div className="flex md:flex-row items-center pt-30 gap-12 md:gap-16 lg:gap-44">
        <div>
          <img
            src={"/images/mobile.png"}
            alt="Mobile"
          />
        </div>
        <div className="w-full max-w-sm bg-white p-6 md:p-8 rounded-lg">
          <h1 className="font-bold text-2xl md:text-3xl mb-4">Log in Exclusive</h1>
          <p className="mb-6 text-base md:text-lg text-gray-700">Enter your details below</p>
          <form>
            <div className="flex flex-col gap-3 mx-auto">
              <TextField
                id="email"
                label="Email or Phone Number"
                variant="filled"
                size="small"
                InputProps={{
                  style: {
                    fontSize: '1.1rem',
                    padding: '4px 14px'
                  }
                }}
                InputLabelProps={{
                  style: {
                    fontSize: '1.1rem'
                  }
                }}
              />
              <TextField
                id="password"
                label="Password"
                variant="filled"
                type="password"
                size="small"
                InputProps={{
                  style: {
                    fontSize: '1.1rem',
                    padding: '4px 14px'
                  }
                }}
                InputLabelProps={{
                  style: {
                    fontSize: '1rem'
                  }
                }}
              />
              <div className="flex items-center justify-between mt-2">
                <Button
                  href="/homePage"
                  variant="contained"
                  color="primary"
                  size="small"
                  style={{
                    backgroundColor: "#db1d54",
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    textTransform: "none",
                    padding: "6px 0",
                    minWidth: "140px",
                    maxWidth: "200px",
                  }}
                >
                  Login
                </Button>
                <span className="font-medium cursor-pointer" style={{ color: "#db1d54" }}>
                  Forgot Password
                </span>
              </div>
            </div>
            <div className="flex justify-center mt-8 text-lg">
        
              <Link href="/signupPage" className="ml-2 font-medium text-[#db1d54] underline">
                Create Account
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
}