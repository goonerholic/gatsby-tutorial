import React from "react";
import Layout from "../components/common/Layout";
import MainImage from "../components/index/MainImage";
import mainImage from "../images/main.jpg";

export default function Home() {
  return (
    <Layout>
      <MainImage
        imageUrl={mainImage}
        title="Some fancy-looking bull-shits"
        content="Fuck off..."
      />
    </Layout>
  );
}
