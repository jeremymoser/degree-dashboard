import requirements from './assets/data/requirements';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from "react-chartjs-2"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGaugeHigh } from '@fortawesome/free-solid-svg-icons'

// let totalReqs = 0;
let totalCredits = 0;
let totalInProgress = 0;
let totalRemaining = 0;
let totalCompleted = 0;
let inprogressPercent = 0;
let remainingPercent = 0;
let completedPercent = 0;

if (requirements.length > 0) {
    for (let i = 0; i < requirements.length; i++) {
        // totalReqs += 1;
        totalCredits += requirements[i].credits;
        totalInProgress += requirements[i].inprogress;
        totalRemaining += requirements[i].remaining;
        totalCompleted += requirements[i].completed;
    }
    inprogressPercent = (totalInProgress == 0) ? "0.00%" : (totalInProgress / totalCredits * 100).toFixed(2) + "%";
    remainingPercent = (totalRemaining == 0)? "0.00%" : (totalRemaining / totalCredits * 100).toFixed(2) + "%";
    completedPercent = (totalCompleted == 0)? "0.00%" : (totalCompleted / totalCredits * 100).toFixed(2) + "%";
}

ChartJS.register(ArcElement, Tooltip, Legend)

const AtAGlanceData = {
  labels: ['Completed', 'In Progress', 'Remaining'],
  datasets: [
    {
      label: "# of credits",
      data: [
        totalCompleted,
        totalInProgress,
        totalRemaining
      ],
      backgroundColor: [
        'rgba(26, 157, 125, 0.75)',
        'rgba(0, 115, 166, 0.75)',
        'rgba(237, 183, 49, 0.75)',
      ],
      borderColor: [
        'rgba(26, 157, 125, 1)',
        'rgba(0, 115, 166, 1)',
        'rgba(237, 183, 49, 1)'
      ],
    },
  ],
}

const AtAGlanceOptions = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      position: 'left'
    },
  },
}

const AtAGlancePlugins = [{
  beforeDraw: function(chart) {
    var width = chart.width,
        height = chart.height,
        legendWidth = chart.legend.width,
        ctx = chart.ctx;
        ctx.restore();
        var fontSize = (width / height).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.fillStyle = "#1a9d7d"
        ctx.textBaseline = "middle";
        var text = completedPercent,
        textX = Math.round((width + legendWidth  - ctx.measureText(text).width) / 2),
        textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
  }
}]

function AtAGlanceChart () {
  return (
    <>
        <div className="border-solid borderbottom-pbsc-darkgreen p-1">
            <h2 className="text-pbsc-darkgreen text-2xl font-semibold">
                <FontAwesomeIcon icon={ faGaugeHigh } className="fa-regular fa-address-card text-pbsc-gold mr-3" />
                At A Glance
            </h2>
        </div>
        <div className="flex align-middle justify-center p-5">
            <Doughnut data={AtAGlanceData} options={ AtAGlanceOptions } plugins={ AtAGlancePlugins } />
        </div>
    </>
  )
}

export default AtAGlanceChart