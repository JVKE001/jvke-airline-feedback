import Header from "./Header";
import { Helmet } from "react-helmet";

const Layout = ({
  children,
  withSpacing = false,
  title,
  description,
  keywords,
  author,
}) => {
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
      <main className={withSpacing ? "pt-[10vh]" : ""}>{children}</main>
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
