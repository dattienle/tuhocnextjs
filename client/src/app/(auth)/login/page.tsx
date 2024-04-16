import LoginForm from "@/app/(auth)/login/login-form";
import React from "react";

export default function LoginPage() {
  return (
    <div>
      <h1 className="text-xl semi-bold text-center">Đăng Nhập</h1>
      <div className=" flex justify-center">
        <LoginForm />
      </div>
    </div>
  );
}
