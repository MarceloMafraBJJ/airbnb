import "./globals.css";
import { Nunito } from "next/font/google";

import ClientOnly from "./components/ClientOnly";
import ToastProvider from "./providers/ToasterProvider";

import Navbar from "./components/navbar/Navbar";

import RegisterModal from "./components/modals/RegisterModal";
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./components/modals/RentModal";

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone.",
};

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  console.log(currentUser);

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToastProvider />

          <Navbar currentUser={currentUser} />

          <RegisterModal />
          <LoginModal />
          <RentModal />
        </ClientOnly>

        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
