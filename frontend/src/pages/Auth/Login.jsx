import LoginForm from "../../components/forms/LoginForm";
import Layout from "../../components/layout/Layout";

const Login = () => {
  return (
    <Layout>
      <div className="flex justify-center">
        <LoginForm />
      </div>
    </Layout>
  );
};

export default Login;
