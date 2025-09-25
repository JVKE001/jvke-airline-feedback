import Layout from "../../components/layout/Layout";
import AdminMenu from "../../components/menus/AdminMenu";
import UpdateForm from "../../components/forms/UpdateForm";

const UpdateUser = () => {
  return (
    <Layout withSpacing>
      <div className="grid grid-cols-12">
        <div className="col3">
          <AdminMenu />
        </div>
        <div className="col9 px-5 flex justify-center my-10">
          <UpdateForm />
        </div>
      </div>
    </Layout>
  );
};

export default UpdateUser;
