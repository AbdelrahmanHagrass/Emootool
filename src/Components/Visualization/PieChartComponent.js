import React, { useMemo } from 'react'
import colors from './Colors'
import { Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default function PieChartComponent({ graphTweets }) {
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
    <div style={{ height: 400 }} >
      <Pie
        data={
          {
            labels: ['Sadness', 'Joy', 'Fear', 'Anger', 'Surprise', 'Disgust', 'Neutral'],
            datasets: [
              {
                label: 'Pie Char Emotional Analysis',
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
                data: tweets,
              }
            ]
          }
        }
        options={{
          title: {
            display: true,
            text: 'Pie Chart',
            fontSize: 20
          },
          legend: {
            display: true,
            position: 'right'
          },
          maintainAspectRatio: false,
        }}
        height="400px !important"
        width={600}
      />
    </div>
  );
}
