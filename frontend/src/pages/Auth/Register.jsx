import RegisterForm from "../../components/forms/RegisterForm";
import Layout from "../../components/layout/Layout";

const Register = () => {
  return (
    <Layout>
      <div className="flex justify-center">
        <RegisterForm />
      </div>
    </Layout>
  );
};

export default Register;
