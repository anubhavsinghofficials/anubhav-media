import { HeroSectionOne } from "./sections/hero"
import { BestWork } from "./sections/bestwork"
import { MyClients } from "./sections/myClients"
import { ContactMe } from "./sections/contactMe"
import { useEffect } from "react"
import { Toaster } from "@/components/ui/sonner"
import { ObjectionHandler } from "./sections/objectionHandler"
import { Experimental } from "./sections/experimental"

function App() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 200); // adjust delay if needed

    return () => clearTimeout(timeout); // cleanup just in case
  }, []);

  return (
    <>
      <div className="container mx-auto px-4 bg-black relative overflow-hidden">
        <Toaster />
        
        <HeroSectionOne />
        <BestWork />
        <Experimental />
        <ObjectionHandler/>
        <MyClients />
        <ContactMe />
      </div>
    </>
  )
}

export default App
