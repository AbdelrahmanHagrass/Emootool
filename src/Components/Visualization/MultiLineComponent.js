import React from 'react';
import colors from './Colors'
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const options = {
  scales: {
    y: {
      beginAtZero: true
    }
  },
  maintainAspectRatio: false
}

export default function MultiLineComponent({ graphTweets }) {
  return (
    <div style={{ height: 400 }}>
      <Line
        options={options}
        data={{
          labels: graphTweets['labels'],
          datasets: [
            {
              label: 'Sadness',
              backgroundColor: 'transparent',
              borderColor: colors.sadness.background,
              borderWidth: 4,
              data: graphTweets['sadness'],
            },
            {
              label: 'Joy',
              backgroundColor: 'transparent',
              borderColor: colors.joy.background,
              borderWidth: 4,
              data: graphTweets['joy'],
            },
            {
              label: 'Fear',
              backgroundColor: 'transparent',
              borderColor: colors.fear.background,
              borderWidth: 4,
              data: graphTweets['fear'],

            },
            {
              label: 'Anger',
              backgroundColor: 'transparent',
              borderColor: colors.anger.background,
              borderWidth: 4,
              data: graphTweets['anger'],

            },
            {
              label: 'Surprise',
              backgroundColor: 'transparent',
              borderColor: colors.surprise.background,
              borderWidth: 4,
              data: graphTweets['surprise'],

            },
            {
              label: 'Neutral',
              backgroundColor: 'transparent',
              borderColor: colors.neutral.background,
              borderWidth: 4,
              data: graphTweets['neutral'],

            },
            {
              label: 'Disgust',
              backgroundColor: 'transparent',
              borderColor: colors.disgust.background,
              borderWidth: 4,
              data: graphTweets['disgust'],

            }
          ]
        }}
        height="400px !important"
        width={600}
      />
    </div>
  )

}