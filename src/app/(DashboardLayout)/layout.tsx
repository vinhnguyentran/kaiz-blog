"use client";
import { styled, Container, Box,useTheme } from "@mui/material";
import React, { useState } from "react";
import Header from "@/app/(DashboardLayout)/layout/header/Header";
import Sidebar from "@/app/(DashboardLayout)/layout/sidebar/Sidebar";
import Footer from "./layout/footer/page";
// import "./styles.scss";

const MainWrapper = styled("div")(() => ({
  display: "flex",
  minHeight: "100vh",
  width: "100%",
}));

const PageWrapper = styled("div")(() => ({
  display: "flex",
  flexGrow: 1,
  paddingBottom: "60px",
  flexDirection: "column",
  zIndex: 1,
  backgroundColor: "transparent",
}));

interface Props {
  children: React.ReactNode;
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const theme = useTheme();
  return (
    <MainWrapper className="mainwrapper">
      <Header toggleMobileSidebar={() => setMobileSidebarOpen(true)} />
      <PageWrapper className="page-wrapper"
          sx={{
              [theme.breakpoints.up("lg")]: {
                // ml: `270px`,
              },
          }}
      >
        <Container
          sx={{
            paddingTop: "26px",
            maxWidth: "1200",
          }}
        >
          <Box mt={4} sx={{ minHeight: "calc(100vh - 170px)" }}>{children}</Box>
          <Footer />
        </Container>
      </PageWrapper>
    </MainWrapper>
  );
}
