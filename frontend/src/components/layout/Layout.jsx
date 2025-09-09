import Header from "./Header";
import { Helmet } from "react-helmet";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </>
  );
};

Layout.defaultProps = {
  title: "JVKE Airline Feedback",
  description: "JVKE Airline Feedback Web App",
  keywords: "mern, react, node, mongodb",
  author: "JVKE",
};

export default Layout;
