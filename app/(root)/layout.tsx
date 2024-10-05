import LeftSidebar from "@/components/shared/leftSidebar";
import Navbar from "@/components/shared/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <div className="h-screen flex flex-col">
          {/* Navbar */}
          <Navbar />
          <div className="flex flex-1 overflow-hidden">
            <LeftSidebar />

            {/* Main Content Section */}
            <div className="flex-1  overflow-y-auto">
              {/* Added max-width so that the middle content doesn't take the full width */}
              <div className="">
                {children} {/* This is where the dynamic content goes */}
              </div>
            </div>

            {/* (Optional) Right Sidebar */}
            {/* You can add this back when needed */}
            {/* <div className="w-[200px] h-full bg-pink-400 overflow-y-auto">
              <div className="h-full flex flex-col justify-between"></div>
            </div> */}
            {/* Right Sidebar */}
            <div className="lg:inline-block hidden w-[300px] h-[1000px] overflow-y-auto border-l">
              <div className="w-full h-[600px] "></div>
              <div className="w-full h-[600px] "></div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
