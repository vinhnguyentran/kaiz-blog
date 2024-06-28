import React from "react";
import dynamic from "next/dynamic";
// import "./styles.scss";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from "@mui/material/styles";
import {
  Stack,
  Typography,
  Avatar,
  Box,
} from "@mui/material";
import DashboardCard from "../shared/DashboardCard";


const SalesOverview = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;

  // chart
  const optionscolumnchart: any = {
    chart: {
      type: "bar",
      height: 315,
      offsetX: -15,
      toolbar: { show: false },
      foreColor: "#adb0bb",
      fontFamily: "inherit",
      sparkline: { enabled: false },
    },
    colors: [primary, secondary],
    fill: { type: "solid", opacity: 1 },
    plotOptions: {
      bar: { horizontal: false, columnWidth: "35%", borderRadius: 0 },
    },
    grid: {
      show: false,
      borderColor: "transparent",
      padding: { left: 12, right: 12, bottom: 24 },
    },
    dataLabels: { enabled: false },
    markers: { size: 12 },
    legend: { show: false },
    xaxis: {
      type: "category",
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      show: true,
      min: 100,
      max: 400,
      tickAmount: 3,

    },

    stroke: {
      show: true,
      width: 5,
      lineCap: "butt",
      colors: ["transparent"],
    },
    tooltip: {
      theme: theme.palette.mode === "dark" ? "dark" : "light",
      fillSeriesColor: false,
    },
  };
  const seriescolumnchart = [
    { name: "Ample", data: [355, 390, 300, 350, 390, 180, 250] },
    { name: "Pixel", data: [280, 250, 325, 215, 250, 310, 170] },
  ];
  const css = `my-sefl`;
  return (
    <>
      <style>
        {css}
      </style>
      <DashboardCard
        title="Vinh Nguyen"
        subtitle="Front-end Developer"
      // action={
      //   <Stack spacing={3} mt={5} direction="row">
      //     <Stack direction="row" spacing={1} alignItems="center">
      //       <Avatar
      //         sx={{
      //           width: 9,
      //           height: 9,
      //           bgcolor: primary,
      //           svg: { display: "none" },
      //         }}
      //       ></Avatar>
      //       <Typography
      //         variant="subtitle2"
      //         fontSize="12px"
      //         color="primary.main"
      //       >
      //         Ample
      //       </Typography>
      //     </Stack>
      //     <Stack direction="row" spacing={1} alignItems="center">
      //       <Avatar
      //         sx={{
      //           width: 9,
      //           height: 9,
      //           bgcolor: secondary,
      //           svg: { display: "none" },
      //         }}
      //       ></Avatar>
      //       <Typography
      //         variant="subtitle2"
      //         fontSize="12px"
      //         color="secondary.main"
      //       >
      //         Pixel
      //       </Typography>
      //     </Stack>
      //   </Stack>
      // }
      >
        <Box height="355px">
          <div className="my-self">
            Add basic and necessary knowledge to bring value to the company. Update new
            technologies to help yourself and your business keep up with the times
          </div>
          {/* <Chart
            options={optionscolumnchart}
            series={seriescolumnchart}
            type="bar"
            height={355}
            width={"100%"}
          /> */}
        </Box>
      </DashboardCard>
    </>
  );
};

export default SalesOverview;
