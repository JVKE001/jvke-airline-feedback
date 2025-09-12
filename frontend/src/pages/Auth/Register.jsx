import RegisterForm from "../../components/forms/RegisterForm";
import Layout from "../../components/layout/Layout";

const Register = () => {
  return (
    <Layout withSpacing>
      <div className="flex justify-center items-center">
        <RegisterForm />
      </div>
    </Layout>
  );
};

export default Register;
