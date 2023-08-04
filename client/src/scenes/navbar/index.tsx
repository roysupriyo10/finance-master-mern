import { useState } from "react"
import { Link } from "react-router-dom"
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import { Box, Typography, useTheme } from "@mui/material"
import FlexBetween from "@/components/FlexBetween"

const NavBar = () => {
  const { palette } = useTheme()
  const [ selected, setSelected ] = useState("dashboard")
  return (
    <FlexBetween
      mb="0.25rem"
      p="0.5rem 0rem"
      color={palette.grey[300]}
    >
      {/* LEFT SIDE */}
      <FlexBetween gap="0.75rem">
        <PriceCheckIcon sx={{ fontSize: "20px" }} />
        <Typography variant="h4" fontSize="16px">Finance Master</Typography>
      </FlexBetween>

      {/* RIGHT SIDE */}

      <FlexBetween gap="2rem">
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/"
            onClick={() => setSelected("dashboard")}
            style={{
              color: selected === 'dashboard' ? 'inherit' : palette.grey[700],
              textDecoration: "inherit"
            }}
          >dashboard</Link>
        </Box>
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/"
            onClick={() => setSelected("predictions")}
            style={{
              color: selected === 'predictions' ? 'inherit' : palette.grey[700],
              textDecoration: "inherit"
            }}
          >predictions</Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  )
}

export default NavBar