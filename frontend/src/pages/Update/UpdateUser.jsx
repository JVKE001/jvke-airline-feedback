import Layout from "../../components/layout/Layout";
import AdminMenu from "../../components/menus/AdminMenu";
import UserMenu from "../../components/menus/UserMenu";
import UpdateForm from "../../components/forms/UpdateForm";
import { useAuth } from "../../context/AuthContext";

const UpdateUser = () => {
  const [auth] = useAuth();
  return (
    <Layout withSpacing>
      <div className="grid grid-cols-12">
        <div className="col3">
          {auth?.user?.role === "admin" ? <AdminMenu /> : <UserMenu />}
        </div>
        <div className="col9 px-5 flex justify-center mt-10 mb-20">
          <UpdateForm />
        </div>
      </div>
    </Layout>
  );
};

export default UpdateUser;
