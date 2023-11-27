import Tasks from "@/components/tasks";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Page() {
  return (
    <div className="flex flex-col justify-center font-body px-3">
      <Header />
      <Tasks />
      <Footer />
    </div>
  );
}
