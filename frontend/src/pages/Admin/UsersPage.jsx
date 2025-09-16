import { useState, useEffect } from "react";
import axios from "axios";

import Layout from "../../components/layout/Layout";
import AdminMenu from "../../components/menus/AdminMenu";

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("auth"))?.token;
        const res = await axios.get("/api/admin/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUsers(res.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <Layout withSpacing>
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-3 h-[90vh]  bg-steel/10">
          <AdminMenu />
        </div>
        <div className="col-span-12 md:col-span-9 px-5">
          <h2 className="my-6">Registered Users</h2>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th className="th">ID</th>
                  <th className="th">Name</th>
                  <th className="th">Email</th>
                  <th className="th">Phone</th>
                  <th className="th">DOB</th>
                  <th className="th">Role</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr
                    key={u.id}
                    className="odd:bg-[#111827] even:bg-[#1f2937] hover:bg-[#374151]"
                  >
                    <td className="td">{u.id}</td>
                    <td className="td">{u.name}</td>
                    <td className="td">{u.email}</td>
                    <td className="td">{u.phone}</td>
                    <td className="td">
                      {new Date(u.dob).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </td>

                    <td className="td">{u.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UsersPage;
