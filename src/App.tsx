import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import MyExperience from "./components/MyExperience";
import ContactMe from "./components/ContactMe";
import SideMenu from "./components/SideMenu";
import Header from "./components/Header";
import Footer from "./components/Footer";

const sectionData = [
  {
    id: "about",
    component: AboutMe,
  },
  {
    id: "experience",
    component: MyExperience,
  },
  {
    id: "contact",
    component: ContactMe,
  },
];


function App() {
  return (
    <div className="flex flex-col h-screen w-full">

      {/* Site Header */}
      <div className="w-full sticky top-0 flex">
        <Header/>
      </div>

      <div className="w-full mt-25 top-0 flex-1">

        {/* Intro Section */}
        <div className="min-h-screen w-full">
          <Intro />
        </div>

        {/* Main Content*/}
        <div className="flex flex-1 flex-row w-full px-15 py-10 gap-8">
          {/* Sticky Navigation */}
          <div className="sticky top-25 self-start w-1/5 p-6">
            <SideMenu />
          </div>

          {/* Sections of Website */}
          <div className="flex flex-1 flex-col gap-8">
            {sectionData.map((sect)=>{
              const Component = sect.component;
              return (
                <section
                  id={sect.id}
                  className="px-6"
                >
                  <Component/>
                </section>
              );}
          )}
          </div>
        </div>


      </div>

      {/* Site Footer */}
      <Footer/>

    </div>
  );
}

export default App;
