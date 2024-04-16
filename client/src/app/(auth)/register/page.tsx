import RegisterForm from "@/app/(auth)/register/register-form";
import exp from "constants";

const RegisterPage = () => {
  return (
    <div>
      <h1 className="text-xl semi-bold text-center">Đăng ký</h1>
      <div className=" flex justify-center">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
