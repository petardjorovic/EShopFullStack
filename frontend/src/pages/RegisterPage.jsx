import RegisterFormComponent from "../components/RegisterFormComponent";

function RegisterPage() {
  return (
    <div className="bg-whiteTextColor pt-[10px]">
      <h2 className="text-blackTextColor text-2xl uppercase text-center">
        Registration
      </h2>
      <div className="container mx-auto flex-center justify-center py-[10px] px-[18px]">
        <RegisterFormComponent />
      </div>
    </div>
  );
}

export default RegisterPage;
