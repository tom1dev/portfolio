import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import MyExperience from "./components/MyExperience";
import ContactMe from "./components/ContactMe";
import SideMenu from "./components/SideMenu";

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
    <div className="flex flex-col min-h-screen w-full">
      {/* Intro Section */}
      <div className="min-h-screen border w-full p-8">
        <Intro />
      </div>

      {/* Main Content*/}
      <div className="flex flex-1 flex-row w-full px-15 py-10 gap-8">
        {/* Sticky Navigation */}
        <div className="sticky top-8 self-start w-1/5 border p-6">
          <SideMenu />
        </div>

        {/* Sections of Website */}
        <div className="flex flex-1 flex-col gap-6">

          {sectionData.map((sect)=>{
            const Component = sect.component;
            return (
              <section
                id={sect.id}
                className="min-h-screen border p-6"
              >
                <Component />
              </section>
            );}
        )}
        </div>
      </div>
    </div>
  );
}

export default App;
