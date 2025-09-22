import Layout from "../../components/layout/Layout";
import AdminMenu from "../../components/menus/AdminMenu";
import { useAuth } from "../../context/AuthContext";
import GhostButton from "../../components/button/GhostButton";

const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout withSpacing>
      <div className="grid grid-cols-12">
        <div className="col3">
          <AdminMenu />
        </div>

        <div className="col9 center-md-block">
          <div className="w-[350px] bg-white rounded-xl md:mt-10">
            {/* Card Header */}
            <div className="bg-blue-600 p-4 text-center">
              <h2 className="text-white text-2xl font-bold capitalize">
                Hi, {auth?.user?.role || "Role not available"}
              </h2>
            </div>

            {/* Card Body */}
            <div className="p-6 space-y-3">
              <p className="text-gray-700">
                <span className="detailItem">Name:</span>{" "}
                {auth?.user?.name || "Not Available"}
              </p>
              <p className="text-gray-700">
                <span className="detailItem">Email:</span>{" "}
                {auth?.user?.email || "Not Available"}
              </p>
              <p className="text-gray-700">
                <span className="detailItem">Phone:</span>{" "}
                {auth?.user?.phone || "Not Available"}
              </p>
              <p className="text-gray-700">
                <span className="detailItem">D.O.B:</span>{" "}
                {auth?.user?.dob
                  ? new Date(auth.user.dob).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : "Not Available"}
              </p>
            </div>
            <div className="p-6">
              <GhostButton
                text="Update Info"
                size="md"
                className="w-full text-black hover:bg-blue-600 hover:text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
