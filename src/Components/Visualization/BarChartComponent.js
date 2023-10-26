import React, { useMemo } from "react"
import colors from './Colors'
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export default function BarChartComponent({ graphTweets }) {
  const tweets = useMemo(() => {
    const labels = [0, 0, 0, 0, 0, 0, 0]
    graphTweets['sadness'].forEach(element => {
      labels[0] = labels[0] + element
    });
    graphTweets['joy'].forEach(element => {
      labels[1] = labels[1] + element
    });
    graphTweets['fear'].forEach(element => {
      labels[2] = labels[2] + element
    });
    graphTweets['anger'].forEach(element => {
      labels[3] = labels[3] + element
    });
    graphTweets['surprise'].forEach(element => {
      labels[4] = labels[4] + element
    });
    graphTweets['disgust'].forEach(element => {
      labels[5] = labels[5] + element
    });
    graphTweets['neutral'].forEach(element => {
      labels[6] = labels[6] + element
    });
    return labels
  }, [graphTweets])
  return (
    <div>
      <Bar
        datasetIdKey='id'

        data={{
          labels: ['Sadness', 'Joy', 'Fear', 'Anger', 'Surprise', 'Disgust', 'Neutral'],
          datasets: [
            {
              label: '',
              data: tweets,
              backgroundColor: [
                colors.sadness.background,
                colors.joy.background,
                colors.fear.background,
                colors.anger.background,
                colors.surprise.background,
                colors.neutral.background,
                colors.disgust.background,
              ],
              borderColor: [
                colors.sadness.border,
                colors.joy.border,
                colors.fear.border,
                colors.anger.border,
                colors.surprise.border,
                colors.neutral.border,
                colors.disgust.border,
              ],
              borderWidth: 2.5,
            },
          ],

        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  )
}