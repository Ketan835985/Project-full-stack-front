import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import PeoplePage from "./Components/PeoplePage";

export default function Home() {
  return (
    <>
      <div className="border border-b-2 border-[#E8E8E8]">
        <Header />
      </div>
          <Sidebar />
          <PeoplePage />
    </>
  );
}
