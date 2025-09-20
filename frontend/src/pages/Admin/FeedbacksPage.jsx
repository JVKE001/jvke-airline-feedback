import { useState, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import AdminMenu from "../../components/menus/AdminMenu";
import axios from "axios";

const FeedbacksPage = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const loadFeedbacks = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("auth"))?.token;
        const res = await axios.get("/api/admin/feedbacks", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setFeedbacks(res.data);
      } catch (error) {
        console.error("Error loading feedbacks:", error);
      }
    };
    loadFeedbacks();
  }, []);

  return (
    <Layout withSpacing>
      <div className="grid grid-cols-12">
        <div className="col3">
          <AdminMenu />
        </div>
        <div className="col9 px-5">
          <h2 className="my-8">All Feedbacks</h2>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th className="th">ID</th>
                  <th className="th">Name</th>
                  <th className="th">Email</th>
                  <th className="th">Message</th>
                  <th className="th">Rating</th>
                  <th className="th">Date</th>
                </tr>
              </thead>
              <tbody>
                {feedbacks.map((fb) => (
                  <tr
                    key={fb.id}
                    className="odd:bg-[#111827] even:bg-[#1f2937] hover:bg-[#374151]"
                  >
                    <td className="td">{fb.id}</td>
                    <td className="td">{fb.name}</td>
                    <td className="td">{fb.email}</td>
                    <td className="td">{fb.message}</td>
                    <td className="td">{fb.rating}</td>
                    <td className="td">
                      {new Date(fb.created_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </td>
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

export default FeedbacksPage;
