"use client";
import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Script from "next/script";
import { SnackbarProvider } from "notistack";
import { useScrollTop } from "@/hooks";
import Loader from "../shared/Loader";
import { Toaster } from "react-hot-toast";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const AppLayout = ({ children }: { children: ReactNode }) => {
  const { scrollBtn, scrollTop } = useScrollTop();
  return (
    <React.Fragment>
      <Toaster
        toastOptions={{
          success: {
            duration: 5000,
            style: {
              background: "#ffffff",
              color: "#000",
              padding: "20px",
              borderRadius: "8px",
              borderLeft: "5px solid #22c55e", // Green for success
              minWidth: "280px",
              maxWidth: "700px",
              // wordWrap: "break-word",
              // overflowWrap: "break-word",
              // hyphens: "auto",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            },
          },
          error: {
            duration: 5000,
            style: {
              background: "#ffffff",
              color: "#000",
              padding: "20px",
              borderRadius: "8px",
              borderLeft: "5px solid #ef4444", // Red for error
              minWidth: "280px",
              maxWidth: "700px",
              wordWrap: "break-word",
              overflowWrap: "break-word",
              hyphens: "auto",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            },
          },
        }}
      />
      <Loader />
      <SnackbarProvider
        classes={{ containerRoot: "z-alert" }}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
      >
        <Header />
        {children}
        <Footer />
        <div ref={scrollBtn} onClick={scrollTop} className="scrollTop">
          <ChevronUpIcon className="text-white size-6" />
        </div>
        <Script
          src="https://kit.fontawesome.com/4ef8c63dd7.js"
          crossOrigin="anonymous"
        ></Script>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossOrigin="anonymous"
        />
      </SnackbarProvider>
    </React.Fragment>
  );
};

export default AppLayout;
