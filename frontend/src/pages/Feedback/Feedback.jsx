import Layout from "../../components/layout/Layout";
import FeedbackForm from "../../components/forms/FeedbackForm";

const Feedback = () => {
  return (
    <Layout withSpacing>
      <div className="flex justify-center my-10">
        <FeedbackForm />
      </div>
    </Layout>
  );
};

export default Feedback;
