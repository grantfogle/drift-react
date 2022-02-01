import React from "react";
import Chip from "@mui/material/Chip";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import WaterIcon from "@mui/icons-material/Water";
import OpacityIcon from "@mui/icons-material/Opacity";
import WarningIcon from "@mui/icons-material/Warning";
import WaterfallChartIcon from "@mui/icons-material/WaterfallChart";

const riverAlertObj = {
  offColor: {
    color: "warning",
    label: "Off Color",
    icon: <WarningIcon />
  },
  warmWater: {
    color: "error",
    label: "Warm Water",
    icon: <ThermostatIcon />
  },
  iced: {
    color: "info",
    label: "Frozen",
    icon: <ThermostatIcon />
  },
  highWater: {
    color: "warning",
    label: "High Water",
    icon: <WaterIcon />
  },
  lowFlows: {
    color: "warning",
    label: "Low Flows",
    icon: <OpacityIcon />
  }
};

const RiverAlert = ({ alert }) => {
  return (
    <Chip
      size="small"
      color={riverAlertObj[alert].color}
      label={riverAlertObj[alert].label}
      icon={riverAlertObj[alert].icon}
    />
  );
};

export default RiverAlert;
