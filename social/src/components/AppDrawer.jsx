import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { useApp } from "../AppProvider";

export default function AppDrawer() {
  const { openDrawer, setOpenDrawer } = useApp();

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer}>
      <Box sx={{ width: 300 }} onClick={toggleDrawer}></Box>
    </Drawer>
  );
}
