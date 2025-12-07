import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import Layout from "@/components/layouts/Layout";

export default function Home() {
  return (
    <div className="flex flex-col justify-between gap-20 h-max">
      <Header />
      <Footer />
    </div>
  );
}
