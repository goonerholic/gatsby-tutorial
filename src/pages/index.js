import React from "react";
import Layout from "../components/common/Layout";
import InterviewPreview from "../components/index/InterviewPreview";
import MainImage from "../components/index/MainImage";
import mainImage from "../images/main.jpg";
import avatar1 from "../images/avatar1.jpg";
import avatar2 from "../images/avatar2.jpg";
import avatar3 from "../images/avatar3.jpg";
import InterviewContainer from "../containers/InterviewContainer";
import IndexContainer from "../containers/IndexContainer";

export default function Home() {
  return (
    <Layout>
      <IndexContainer />
    </Layout>
  );
}
