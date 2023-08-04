import DashboardBox from '@/components/DashboardBox'
import { useGetKpisQuery } from '@/state/api'
import { useTheme } from '@mui/material'
import { useState } from 'react'

const Predictions = () => {
  const { palette } = useTheme()

  const [ isPredictions, setIsPredictions ] = useState(false)
  const { data: kpiData } = useGetKpisQuery()
  return (
    <DashboardBox>
      Hi
    </DashboardBox>
  )
}

export default Predictions