import { Sidebar } from "@/components";
import localFont from "@next/font/local";
import { Nunito } from "@next/font/google";

const kaisei = localFont({
  src: "../../public/fonts/kaisei-tokumin-latin-400-normal.woff2",
  weight: "700",
  variable: "--font-kaisei",
  display: "swap",
});
const nunito = Nunito({
  variable: "--font-nunito",
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "800"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <>
      <div className={`${kaisei.variable} ${nunito.variable}`}>
        <div className="antialiased max-w-4xl mb-32 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
          <Sidebar />
          <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0 font-nunito font-light">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
