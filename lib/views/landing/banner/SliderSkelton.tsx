"use client";
import { styled, Box, Grid2 } from "@mui/material";
import React from "react";
import Skeleton from "@mui/material/Skeleton";

const SliderSkeltonView = styled(Box)(({}) => ({
  height: 600,
}));

const SliderSkelton = () => {
  return (
    <SliderSkeltonView>
      <Grid2 spacing={1} container wrap="nowrap">
        <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 4 }}>
          <Skeleton variant="rectangular" width="100%" height={600} />
        </Grid2>
        <Grid2 size={{ xs: false, sm: 6, md: 4, lg: 4, xl: 4 }}>
          <Skeleton variant="rectangular" width="100%" height={600} />
        </Grid2>
        <Grid2 size={{ xs: false, sm: false, md: 4, lg: 4, xl: 4 }}>
          <Skeleton variant="rectangular" width="100%" height={600} />
        </Grid2>
      </Grid2>
    </SliderSkeltonView>
  );
};

export default SliderSkelton;
