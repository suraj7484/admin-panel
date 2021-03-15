import React, { useState } from "react"
import { Button, Modal } from "reactstrap"
import ReactApexChart from "react-apexcharts"

const data = {
  series: [
    {
      data: [
        { x: new Date(15387786e5), y: [6629.81, 6650.5, 6623.04, 6633.33] },
        { x: new Date(15387804e5), y: [6632.01, 6643.59, 6620, 6630.11] },
        {
          x: new Date(15387822e5),
          y: [6630.71, 6648.95, 6623.34, 6635.65],
        },
        { x: new Date(1538784e6), y: [6635.65, 6651, 6629.67, 6638.24] },
        { x: new Date(15387858e5), y: [6638.24, 6640, 6620, 6624.47] },
        {
          x: new Date(15387876e5),
          y: [6624.53, 6636.03, 6621.68, 6624.31],
        },
        { x: new Date(15387894e5), y: [6624.61, 6632.2, 6617, 6626.02] },
        { x: new Date(15387912e5), y: [6627, 6627.62, 6584.22, 6603.02] },
        { x: new Date(1538793e6), y: [6605, 6608.03, 6598.95, 6604.01] },
        { x: new Date(15387948e5), y: [6604.5, 6614.4, 6602.26, 6608.02] },
        {
          x: new Date(15387966e5),
          y: [6608.02, 6610.68, 6601.99, 6608.91],
        },
        { x: new Date(15387984e5), y: [6608.91, 6618.99, 6608.01, 6612] },
        { x: new Date(15388002e5), y: [6612, 6615.13, 6605.09, 6612] },
        { x: new Date(1538802e6), y: [6612, 6624.12, 6608.43, 6622.95] },
        { x: new Date(15388038e5), y: [6623.91, 6623.91, 6615, 6615.67] },
        { x: new Date(15388056e5), y: [6618.69, 6618.74, 6610, 6610.4] },
        { x: new Date(15388074e5), y: [6611, 6622.78, 6610.4, 6614.9] },
        { x: new Date(15388092e5), y: [6614.9, 6626.2, 6613.33, 6623.45] },
        { x: new Date(1538811e6), y: [6623.48, 6627, 6618.38, 6620.35] },
        {
          x: new Date(15388128e5),
          y: [6619.43, 6620.35, 6610.05, 6615.53],
        },
        { x: new Date(15388146e5), y: [6615.53, 6617.93, 6610, 6615.19] },
      ],
    },
  ],
  options: {
    chart: { toolbar: !1, zoom: { enabled: !0 }, height: "100%" },
    plotOptions: {
      candlestick: { colors: { upward: "#34c38f", downward: "#f46a6a" } },
    },
    xaxis: {
      type: "datetime",
      // labels: { show: false }
    },
    yaxis: {
      tooltip: { enabled: !0 },
      labels: {
        formatter: value => {
          return "$" + value.toLocaleString()
        },
      },
    },
  },
  dataLabels: {
    enabled: true,
    style: {
      fontSize: "140px",
      fontFamily: "Helvetica, Arial, sans-serif",
      fontWeight: "bold",
    },
  },
}
const Chart = () => {
  const [modal, setModal] = useState(false)

  const modalToggle = () => setModal(!modal)

  return (
    <div id="candlestick-chart" className="apex-charts expand-charts" dir="ltr">
      <Button className="expand-icon" color="text" onClick={modalToggle}>
        <i className="fas fa-expand fa-2x float-right "></i>
      </Button>
      <ReactApexChart
        series={data.series}
        options={data.options}
        type="candlestick"
        height={310}
      />
      <Modal
        isOpen={modal}
        toggle={modalToggle}
        className="modal-fullscreen modal-dialog-centered"
      >
        <div
          id="candlestick-chart"
          className="apex-charts expand-charts"
          dir="ltr"
        >
          <Button className="expand-icon" color="text" onClick={modalToggle}>
            <i className="fas fa-times fa-2x float-right "></i>
          </Button>
          <ReactApexChart
            series={data.series}
            options={data.options}
            type="candlestick"
            height={850}
          />
        </div>
      </Modal>
    </div>
  )
}

export default Chart
