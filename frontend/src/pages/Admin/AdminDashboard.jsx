import Layout from "../../components/layout/Layout";
import AdminMenu from "../../components/menus/AdminMenu";

const AdminDashboard = () => {
  return (
    <Layout withSpacing>
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-3 md:h-[90vh] bg-steel/10">
          <AdminMenu />
        </div>

        <div className="col-span-9 px-3">
          <h1>Hi</h1>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
