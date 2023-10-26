import React, { useMemo } from "react"
import "../styles/checkboxes.scss"
import Switch from '@mui/material/Switch';
const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Filter = ({ handleCheckBox, filters = [] }) => {
  const isDisabled = useMemo(() => {
    return filters.includes('parentalControl')
  }, [filters])
  return (
    <div id="grb" style={{ marginTop: 20, paddingBottom: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <div style={{ fontSize: '2rem' }} >Parental Control</div>
        <Switch
          onChange={handleCheckBox}
          checked={filters.includes('parentalControl')}
          value="parentalControl"
          {...label} />
      </div>
      <main>
        <div style={{ width: '33%', maxWidth: '25rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <div style={{ width: 130, display: 'flex', justifyContent: 'space-between' }}>
            <label style={{ fontSize: '2rem' }}>Joy</label>
            <Switch
              disabled={isDisabled}
              onChange={handleCheckBox}
              checked={filters.includes('joy')}
              value="joy"
              {...label} />
          </div>
          <div style={{ width: 130, display: 'flex', justifyContent: 'space-between' }}>
            <label style={{ fontSize: '2rem' }}>Sadness</label>
            <Switch
              disabled={isDisabled}
              onChange={handleCheckBox}
              checked={filters.includes('sadness')}
              value="sadness"
              {...label} />
          </div>
          <div style={{ width: 130, display: 'flex', justifyContent: 'space-between' }}>
            <label style={{ fontSize: '2rem' }}>Anger</label>
            <Switch
              disabled={isDisabled}
              onChange={handleCheckBox}
              checked={filters.includes('anger')}
              value="anger"
              {...label} />
          </div>
          <div style={{ width: 130, display: 'flex', justifyContent: 'space-between' }}>
            <label style={{ fontSize: '2rem' }}>Disgust</label>
            <Switch
              disabled={isDisabled}
              onChange={handleCheckBox}
              checked={filters.includes('disgust')}
              value="disgust"
              {...label} />
          </div>
          <div style={{ width: 130, display: 'flex', justifyContent: 'space-between' }}>
            <label style={{ fontSize: '2rem' }}>Fear</label>
            <Switch
              disabled={isDisabled}
              onChange={handleCheckBox}
              checked={filters.includes('fear')}
              value="fear"
              {...label} />
          </div>
          <div style={{ width: 130, display: 'flex', justifyContent: 'space-between' }}>
            <label style={{ fontSize: '2rem' }}>Surprise</label>
            <Switch
              disabled={isDisabled}
              onChange={handleCheckBox}
              checked={filters.includes('surprise')}
              value="surprise"
              {...label} />
          </div>
          <div style={{ width: 130, display: 'flex', justifyContent: 'space-between' }}>
            <label style={{ fontSize: '2rem' }}>Neutral</label>
            <Switch
              disabled={isDisabled}
              onChange={handleCheckBox}
              checked={filters.includes('neutral')}
              value="neutral"
              {...label} />
          </div>
        </div>
      </main>
    </div>
  )
}
export default Filter