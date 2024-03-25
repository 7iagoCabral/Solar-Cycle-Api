const express = require('express')
const app = express()
const port = 3000

const data = [
  {
  "time-tag": "1749-01",
  "ssn": 96.7,
  "smoothed_ssn": -1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1749-02",
  "ssn": 104.3,
  "smoothed_ssn": -1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1749-03",
  "ssn": 116.7,
  "smoothed_ssn": -1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1749-04",
  "ssn": 92.8,
  "smoothed_ssn": -1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1749-05",
  "ssn": 141.7,
  "smoothed_ssn": -1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1749-06",
  "ssn": 139.2,
  "smoothed_ssn": -1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1749-07",
  "ssn": 158,
  "smoothed_ssn": 135.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1749-08",
  "ssn": 110.5,
  "smoothed_ssn": 137.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1749-09",
  "ssn": 126.5,
  "smoothed_ssn": 140.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1749-10",
  "ssn": 125.8,
  "smoothed_ssn": 143.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1749-11",
  "ssn": 264.3,
  "smoothed_ssn": 146.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1749-12",
  "ssn": 142,
  "smoothed_ssn": 147.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1750-01",
  "ssn": 122.2,
  "smoothed_ssn": 148.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1750-02",
  "ssn": 126.5,
  "smoothed_ssn": 150.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1750-03",
  "ssn": 148.7,
  "smoothed_ssn": 153.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1750-04",
  "ssn": 147.2,
  "smoothed_ssn": 154.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1750-05",
  "ssn": 150,
  "smoothed_ssn": 147,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1750-06",
  "ssn": 166.7,
  "smoothed_ssn": 139.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1750-07",
  "ssn": 142.3,
  "smoothed_ssn": 138.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1750-08",
  "ssn": 171.7,
  "smoothed_ssn": 136.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1750-09",
  "ssn": 152,
  "smoothed_ssn": 131,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1750-10",
  "ssn": 109.5,
  "smoothed_ssn": 125.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1750-11",
  "ssn": 105.5,
  "smoothed_ssn": 121.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1750-12",
  "ssn": 125.7,
  "smoothed_ssn": 116,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1751-01",
  "ssn": 116.7,
  "smoothed_ssn": 111.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1751-02",
  "ssn": 72.5,
  "smoothed_ssn": 106.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1751-03",
  "ssn": 75.5,
  "smoothed_ssn": 99.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1751-04",
  "ssn": 94,
  "smoothed_ssn": 91.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1751-05",
  "ssn": 101.2,
  "smoothed_ssn": 86.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1751-06",
  "ssn": 84.5,
  "smoothed_ssn": 81.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1751-07",
  "ssn": 110.5,
  "smoothed_ssn": 77,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1751-08",
  "ssn": 99.7,
  "smoothed_ssn": 75,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1751-09",
  "ssn": 39.2,
  "smoothed_ssn": 77.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1751-10",
  "ssn": 38.7,
  "smoothed_ssn": 79.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1751-11",
  "ssn": 47.5,
  "smoothed_ssn": 79.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1751-12",
  "ssn": 73.3,
  "smoothed_ssn": 78.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1752-01",
  "ssn": 58.3,
  "smoothed_ssn": 78.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1752-02",
  "ssn": 83.3,
  "smoothed_ssn": 77.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1752-03",
  "ssn": 118.3,
  "smoothed_ssn": 75.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1752-04",
  "ssn": 98.8,
  "smoothed_ssn": 77.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1752-05",
  "ssn": 99.5,
  "smoothed_ssn": 79.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1752-06",
  "ssn": 66,
  "smoothed_ssn": 79.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1752-07",
  "ssn": 130.7,
  "smoothed_ssn": 80.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1752-08",
  "ssn": 48.8,
  "smoothed_ssn": 79.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1752-09",
  "ssn": 45.2,
  "smoothed_ssn": 76.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1752-10",
  "ssn": 77.7,
  "smoothed_ssn": 73.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1752-11",
  "ssn": 62.7,
  "smoothed_ssn": 70.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1752-12",
  "ssn": 66.7,
  "smoothed_ssn": 68.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1753-01",
  "ssn": 73.3,
  "smoothed_ssn": 63.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1753-02",
  "ssn": 53.3,
  "smoothed_ssn": 60.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1753-03",
  "ssn": 76.2,
  "smoothed_ssn": 61.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1753-04",
  "ssn": 63.3,
  "smoothed_ssn": 59.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1753-05",
  "ssn": 60,
  "smoothed_ssn": 57,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1753-06",
  "ssn": 52.8,
  "smoothed_ssn": 53.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1753-07",
  "ssn": 36.7,
  "smoothed_ssn": 48.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1753-08",
  "ssn": 65,
  "smoothed_ssn": 43,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1753-09",
  "ssn": 46.7,
  "smoothed_ssn": 37.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1753-10",
  "ssn": 41.7,
  "smoothed_ssn": 33.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1753-11",
  "ssn": 33.3,
  "smoothed_ssn": 30.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1753-12",
  "ssn": 11.2,
  "smoothed_ssn": 29,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1754-01",
  "ssn": 0,
  "smoothed_ssn": 28.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1754-02",
  "ssn": 5,
  "smoothed_ssn": 26.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1754-03",
  "ssn": 2.8,
  "smoothed_ssn": 23.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1754-04",
  "ssn": 22.8,
  "smoothed_ssn": 21.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1754-05",
  "ssn": 34.5,
  "smoothed_ssn": 21.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1754-06",
  "ssn": 44.5,
  "smoothed_ssn": 20.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1754-07",
  "ssn": 31.3,
  "smoothed_ssn": 21.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1754-08",
  "ssn": 20.5,
  "smoothed_ssn": 22.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1754-09",
  "ssn": 13.7,
  "smoothed_ssn": 23.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1754-10",
  "ssn": 40.2,
  "smoothed_ssn": 23.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1754-11",
  "ssn": 22,
  "smoothed_ssn": 21.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1754-12",
  "ssn": 7,
  "smoothed_ssn": 17.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1755-01",
  "ssn": 17,
  "smoothed_ssn": 15.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1755-02",
  "ssn": 18.7,
  "smoothed_ssn": 14,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1755-03",
  "ssn": 11.3,
  "smoothed_ssn": 14,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1755-04",
  "ssn": 10.8,
  "smoothed_ssn": 14.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1755-05",
  "ssn": 0,
  "smoothed_ssn": 14.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1755-06",
  "ssn": 0,
  "smoothed_ssn": 14.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1755-07",
  "ssn": 14.3,
  "smoothed_ssn": 16.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1755-08",
  "ssn": 5.3,
  "smoothed_ssn": 16,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1755-09",
  "ssn": 29.7,
  "smoothed_ssn": 15.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1755-10",
  "ssn": 39.5,
  "smoothed_ssn": 15.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1755-11",
  "ssn": 11.3,
  "smoothed_ssn": 16.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1755-12",
  "ssn": 33.3,
  "smoothed_ssn": 18.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1756-01",
  "ssn": 20.8,
  "smoothed_ssn": 19.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1756-02",
  "ssn": 11.8,
  "smoothed_ssn": 19,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1756-03",
  "ssn": 9,
  "smoothed_ssn": 18.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1756-04",
  "ssn": 15.7,
  "smoothed_ssn": 17.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1756-05",
  "ssn": 20.8,
  "smoothed_ssn": 17.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1756-06",
  "ssn": 21.5,
  "smoothed_ssn": 17.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1756-07",
  "ssn": 6,
  "smoothed_ssn": 17.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1756-08",
  "ssn": 10.7,
  "smoothed_ssn": 18.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1756-09",
  "ssn": 19.7,
  "smoothed_ssn": 20.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1756-10",
  "ssn": 23.8,
  "smoothed_ssn": 23.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1756-11",
  "ssn": 28.3,
  "smoothed_ssn": 26.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1756-12",
  "ssn": 15.7,
  "smoothed_ssn": 28.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1757-01",
  "ssn": 23.5,
  "smoothed_ssn": 29.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1757-02",
  "ssn": 35.3,
  "smoothed_ssn": 34.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1757-03",
  "ssn": 43.7,
  "smoothed_ssn": 39.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1757-04",
  "ssn": 50,
  "smoothed_ssn": 42.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1757-05",
  "ssn": 63.5,
  "smoothed_ssn": 47.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1757-06",
  "ssn": 21.3,
  "smoothed_ssn": 52.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1757-07",
  "ssn": 41.7,
  "smoothed_ssn": 55.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1757-08",
  "ssn": 85.5,
  "smoothed_ssn": 59.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1757-09",
  "ssn": 66.2,
  "smoothed_ssn": 63.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1757-10",
  "ssn": 54.2,
  "smoothed_ssn": 67.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1757-11",
  "ssn": 107.8,
  "smoothed_ssn": 71.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1757-12",
  "ssn": 55.8,
  "smoothed_ssn": 74,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1758-01",
  "ssn": 62.7,
  "smoothed_ssn": 77.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1758-02",
  "ssn": 86.7,
  "smoothed_ssn": 78,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1758-03",
  "ssn": 81.7,
  "smoothed_ssn": 78.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1758-04",
  "ssn": 120.5,
  "smoothed_ssn": 80.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1758-05",
  "ssn": 77.3,
  "smoothed_ssn": 79.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1758-06",
  "ssn": 75,
  "smoothed_ssn": 78.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1758-07",
  "ssn": 73.3,
  "smoothed_ssn": 80.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1758-08",
  "ssn": 64.5,
  "smoothed_ssn": 80.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1758-09",
  "ssn": 104.2,
  "smoothed_ssn": 79.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1758-10",
  "ssn": 62.8,
  "smoothed_ssn": 77.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1758-11",
  "ssn": 71.7,
  "smoothed_ssn": 76.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1758-12",
  "ssn": 71.7,
  "smoothed_ssn": 76.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1759-01",
  "ssn": 80.5,
  "smoothed_ssn": 77.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1759-02",
  "ssn": 73.3,
  "smoothed_ssn": 80.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1759-03",
  "ssn": 78,
  "smoothed_ssn": 83.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1759-04",
  "ssn": 78.3,
  "smoothed_ssn": 86,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1759-05",
  "ssn": 81.7,
  "smoothed_ssn": 87.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1759-06",
  "ssn": 83.3,
  "smoothed_ssn": 89,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1759-07",
  "ssn": 85,
  "smoothed_ssn": 91.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1759-08",
  "ssn": 118.8,
  "smoothed_ssn": 93.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1759-09",
  "ssn": 128.7,
  "smoothed_ssn": 96.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1759-10",
  "ssn": 99.5,
  "smoothed_ssn": 99.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1759-11",
  "ssn": 77.2,
  "smoothed_ssn": 101.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1759-12",
  "ssn": 95,
  "smoothed_ssn": 103.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1760-01",
  "ssn": 112.2,
  "smoothed_ssn": 104.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1760-02",
  "ssn": 99.2,
  "smoothed_ssn": 105.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1760-03",
  "ssn": 124.5,
  "smoothed_ssn": 104.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1760-04",
  "ssn": 97.2,
  "smoothed_ssn": 103,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1760-05",
  "ssn": 120,
  "smoothed_ssn": 103.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1760-06",
  "ssn": 80.5,
  "smoothed_ssn": 104.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1760-07",
  "ssn": 110,
  "smoothed_ssn": 105,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1760-08",
  "ssn": 126,
  "smoothed_ssn": 107.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1760-09",
  "ssn": 102.2,
  "smoothed_ssn": 109.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1760-10",
  "ssn": 84.3,
  "smoothed_ssn": 111.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1760-11",
  "ssn": 99.5,
  "smoothed_ssn": 114.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1760-12",
  "ssn": 101.7,
  "smoothed_ssn": 120.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1761-01",
  "ssn": 116.7,
  "smoothed_ssn": 126.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1761-02",
  "ssn": 151.7,
  "smoothed_ssn": 129.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1761-03",
  "ssn": 134.5,
  "smoothed_ssn": 133,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1761-04",
  "ssn": 119.5,
  "smoothed_ssn": 138.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1761-05",
  "ssn": 178.7,
  "smoothed_ssn": 143.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1761-06",
  "ssn": 165.5,
  "smoothed_ssn": 144.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1761-07",
  "ssn": 156.8,
  "smoothed_ssn": 141.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1761-08",
  "ssn": 151.8,
  "smoothed_ssn": 138.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1761-09",
  "ssn": 167.8,
  "smoothed_ssn": 134.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1761-10",
  "ssn": 147.8,
  "smoothed_ssn": 131.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1761-11",
  "ssn": 149.5,
  "smoothed_ssn": 125.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1761-12",
  "ssn": 76.7,
  "smoothed_ssn": 119.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1762-01",
  "ssn": 73,
  "smoothed_ssn": 113.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1762-02",
  "ssn": 121.3,
  "smoothed_ssn": 108,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1762-03",
  "ssn": 76.2,
  "smoothed_ssn": 104.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1762-04",
  "ssn": 100.3,
  "smoothed_ssn": 100.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1762-05",
  "ssn": 66.5,
  "smoothed_ssn": 98.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1762-06",
  "ssn": 128.5,
  "smoothed_ssn": 99.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1762-07",
  "ssn": 56.3,
  "smoothed_ssn": 102.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1762-08",
  "ssn": 112.8,
  "smoothed_ssn": 100.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1762-09",
  "ssn": 114.2,
  "smoothed_ssn": 97.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1762-10",
  "ssn": 115.5,
  "smoothed_ssn": 94.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1762-11",
  "ssn": 129.7,
  "smoothed_ssn": 92.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1762-12",
  "ssn": 128.7,
  "smoothed_ssn": 88.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1763-01",
  "ssn": 94.2,
  "smoothed_ssn": 87.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1763-02",
  "ssn": 53.2,
  "smoothed_ssn": 85.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1763-03",
  "ssn": 57,
  "smoothed_ssn": 83,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1763-04",
  "ssn": 54.8,
  "smoothed_ssn": 81.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1763-05",
  "ssn": 54.5,
  "smoothed_ssn": 78.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1763-06",
  "ssn": 59.7,
  "smoothed_ssn": 76.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1763-07",
  "ssn": 90.3,
  "smoothed_ssn": 75.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1763-08",
  "ssn": 44.2,
  "smoothed_ssn": 77.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1763-09",
  "ssn": 113.5,
  "smoothed_ssn": 79.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1763-10",
  "ssn": 77.2,
  "smoothed_ssn": 80.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1763-11",
  "ssn": 101.5,
  "smoothed_ssn": 81.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1763-12",
  "ssn": 102.3,
  "smoothed_ssn": 81.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1764-01",
  "ssn": 99.5,
  "smoothed_ssn": 79.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1764-02",
  "ssn": 99.5,
  "smoothed_ssn": 78.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1764-03",
  "ssn": 67,
  "smoothed_ssn": 75.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1764-04",
  "ssn": 57.3,
  "smoothed_ssn": 71.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1764-05",
  "ssn": 73.8,
  "smoothed_ssn": 68,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1764-06",
  "ssn": 50,
  "smoothed_ssn": 63.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1764-07",
  "ssn": 50,
  "smoothed_ssn": 58.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1764-08",
  "ssn": 50,
  "smoothed_ssn": 53.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1764-09",
  "ssn": 47,
  "smoothed_ssn": 49.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1764-10",
  "ssn": 46.7,
  "smoothed_ssn": 48,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1764-11",
  "ssn": 43.3,
  "smoothed_ssn": 45.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1764-12",
  "ssn": 42.8,
  "smoothed_ssn": 43.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1765-01",
  "ssn": 40,
  "smoothed_ssn": 42.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1765-02",
  "ssn": 43.3,
  "smoothed_ssn": 41.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1765-03",
  "ssn": 41.7,
  "smoothed_ssn": 41.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1765-04",
  "ssn": 36.7,
  "smoothed_ssn": 39.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1765-05",
  "ssn": 33.7,
  "smoothed_ssn": 37.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1765-06",
  "ssn": 33.3,
  "smoothed_ssn": 35.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1765-07",
  "ssn": 45,
  "smoothed_ssn": 34,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1765-08",
  "ssn": 49.5,
  "smoothed_ssn": 32.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1765-09",
  "ssn": 26.7,
  "smoothed_ssn": 31.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1765-10",
  "ssn": 23.3,
  "smoothed_ssn": 31.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1765-11",
  "ssn": 23.3,
  "smoothed_ssn": 30.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1765-12",
  "ssn": 21.7,
  "smoothed_ssn": 30.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1766-01",
  "ssn": 20,
  "smoothed_ssn": 27.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1766-02",
  "ssn": 18.3,
  "smoothed_ssn": 24,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1766-03",
  "ssn": 61,
  "smoothed_ssn": 21.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1766-04",
  "ssn": 10,
  "smoothed_ssn": 19.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1766-05",
  "ssn": 44.7,
  "smoothed_ssn": 18.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1766-06",
  "ssn": 5,
  "smoothed_ssn": 18.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1766-07",
  "ssn": 5.5,
  "smoothed_ssn": 20.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1766-08",
  "ssn": 6.7,
  "smoothed_ssn": 22.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1766-09",
  "ssn": 7.2,
  "smoothed_ssn": 24.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1766-10",
  "ssn": 8.3,
  "smoothed_ssn": 26.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1766-11",
  "ssn": 9.5,
  "smoothed_ssn": 28.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1766-12",
  "ssn": 32,
  "smoothed_ssn": 30.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1767-01",
  "ssn": 45.7,
  "smoothed_ssn": 34.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1767-02",
  "ssn": 50,
  "smoothed_ssn": 38.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1767-03",
  "ssn": 71.7,
  "smoothed_ssn": 43.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1767-04",
  "ssn": 54.8,
  "smoothed_ssn": 48.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1767-05",
  "ssn": 49.7,
  "smoothed_ssn": 54.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1767-06",
  "ssn": 55.5,
  "smoothed_ssn": 60.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1767-07",
  "ssn": 36.5,
  "smoothed_ssn": 64.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1767-08",
  "ssn": 68,
  "smoothed_ssn": 69.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1767-09",
  "ssn": 71.2,
  "smoothed_ssn": 71.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1767-10",
  "ssn": 73.5,
  "smoothed_ssn": 72.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1767-11",
  "ssn": 91.2,
  "smoothed_ssn": 76.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1767-12",
  "ssn": 88.8,
  "smoothed_ssn": 83.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1768-01",
  "ssn": 89.2,
  "smoothed_ssn": 88.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1768-02",
  "ssn": 110.2,
  "smoothed_ssn": 92.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1768-03",
  "ssn": 77.2,
  "smoothed_ssn": 96.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1768-04",
  "ssn": 71.2,
  "smoothed_ssn": 101,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1768-05",
  "ssn": 129.5,
  "smoothed_ssn": 105.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1768-06",
  "ssn": 129,
  "smoothed_ssn": 112.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1768-07",
  "ssn": 87.7,
  "smoothed_ssn": 117.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1768-08",
  "ssn": 111.3,
  "smoothed_ssn": 119.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1768-09",
  "ssn": 124.7,
  "smoothed_ssn": 120.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1768-10",
  "ssn": 129.7,
  "smoothed_ssn": 125.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1768-11",
  "ssn": 151,
  "smoothed_ssn": 128.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1768-12",
  "ssn": 186.3,
  "smoothed_ssn": 129.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1769-01",
  "ssn": 123.2,
  "smoothed_ssn": 135.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1769-02",
  "ssn": 107,
  "smoothed_ssn": 143.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1769-03",
  "ssn": 107.2,
  "smoothed_ssn": 152.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1769-04",
  "ssn": 161.2,
  "smoothed_ssn": 163.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1769-05",
  "ssn": 122.7,
  "smoothed_ssn": 172.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1769-06",
  "ssn": 157.3,
  "smoothed_ssn": 176.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1769-07",
  "ssn": 197.7,
  "smoothed_ssn": 178.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1769-08",
  "ssn": 200.5,
  "smoothed_ssn": 186.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1769-09",
  "ssn": 248,
  "smoothed_ssn": 193,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1769-10",
  "ssn": 263.7,
  "smoothed_ssn": 190.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1769-11",
  "ssn": 246.8,
  "smoothed_ssn": 187.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1769-12",
  "ssn": 186.7,
  "smoothed_ssn": 186.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1770-01",
  "ssn": 173.3,
  "smoothed_ssn": 185.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1770-02",
  "ssn": 237.5,
  "smoothed_ssn": 184.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1770-03",
  "ssn": 133.5,
  "smoothed_ssn": 182.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1770-04",
  "ssn": 85,
  "smoothed_ssn": 175.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1770-05",
  "ssn": 116.8,
  "smoothed_ssn": 170.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1770-06",
  "ssn": 138.8,
  "smoothed_ssn": 168.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1770-07",
  "ssn": 183,
  "smoothed_ssn": 163.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1770-08",
  "ssn": 210.5,
  "smoothed_ssn": 151.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1770-09",
  "ssn": 174,
  "smoothed_ssn": 142.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1770-10",
  "ssn": 172.7,
  "smoothed_ssn": 141.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1770-11",
  "ssn": 220.3,
  "smoothed_ssn": 148.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1770-12",
  "ssn": 170.5,
  "smoothed_ssn": 156.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1771-01",
  "ssn": 60,
  "smoothed_ssn": 156.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1771-02",
  "ssn": 77,
  "smoothed_ssn": 148.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1771-03",
  "ssn": 77.8,
  "smoothed_ssn": 143.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1771-04",
  "ssn": 108.2,
  "smoothed_ssn": 142.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1771-05",
  "ssn": 254.5,
  "smoothed_ssn": 139.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1771-06",
  "ssn": 199.2,
  "smoothed_ssn": 136.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1771-07",
  "ssn": 112.8,
  "smoothed_ssn": 140.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1771-08",
  "ssn": 97.5,
  "smoothed_ssn": 148.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1771-09",
  "ssn": 169,
  "smoothed_ssn": 150.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1771-10",
  "ssn": 150,
  "smoothed_ssn": 150.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1771-11",
  "ssn": 166.2,
  "smoothed_ssn": 144.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1771-12",
  "ssn": 159.5,
  "smoothed_ssn": 132.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1772-01",
  "ssn": 168.2,
  "smoothed_ssn": 128.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1772-02",
  "ssn": 151.3,
  "smoothed_ssn": 129.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1772-03",
  "ssn": 51.8,
  "smoothed_ssn": 125.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1772-04",
  "ssn": 153.7,
  "smoothed_ssn": 121.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1772-05",
  "ssn": 63.3,
  "smoothed_ssn": 117.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1772-06",
  "ssn": 95,
  "smoothed_ssn": 113,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1772-07",
  "ssn": 128.8,
  "smoothed_ssn": 107.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1772-08",
  "ssn": 93.7,
  "smoothed_ssn": 100.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1772-09",
  "ssn": 84.2,
  "smoothed_ssn": 97.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1772-10",
  "ssn": 131,
  "smoothed_ssn": 94.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1772-11",
  "ssn": 102.2,
  "smoothed_ssn": 90.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1772-12",
  "ssn": 106.7,
  "smoothed_ssn": 88.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1773-01",
  "ssn": 91,
  "smoothed_ssn": 83.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1773-02",
  "ssn": 48.3,
  "smoothed_ssn": 76.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1773-03",
  "ssn": 85.3,
  "smoothed_ssn": 72.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1773-04",
  "ssn": 54.8,
  "smoothed_ssn": 67.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1773-05",
  "ssn": 68.5,
  "smoothed_ssn": 62.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1773-06",
  "ssn": 47.3,
  "smoothed_ssn": 59.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1773-07",
  "ssn": 46.2,
  "smoothed_ssn": 57.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1773-08",
  "ssn": 21.2,
  "smoothed_ssn": 59.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1773-09",
  "ssn": 48.8,
  "smoothed_ssn": 62.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1773-10",
  "ssn": 43.8,
  "smoothed_ssn": 63.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1773-11",
  "ssn": 68.2,
  "smoothed_ssn": 64.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1773-12",
  "ssn": 72,
  "smoothed_ssn": 65.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1774-01",
  "ssn": 78,
  "smoothed_ssn": 64.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1774-02",
  "ssn": 109,
  "smoothed_ssn": 63.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1774-03",
  "ssn": 92.8,
  "smoothed_ssn": 61.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1774-04",
  "ssn": 73,
  "smoothed_ssn": 59.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1774-05",
  "ssn": 85.5,
  "smoothed_ssn": 56.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1774-06",
  "ssn": 47.5,
  "smoothed_ssn": 53.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1774-07",
  "ssn": 29.2,
  "smoothed_ssn": 48.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1774-08",
  "ssn": 11,
  "smoothed_ssn": 40.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1774-09",
  "ssn": 13.2,
  "smoothed_ssn": 33,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1774-10",
  "ssn": 23.3,
  "smoothed_ssn": 27.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1774-11",
  "ssn": 29.5,
  "smoothed_ssn": 22.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1774-12",
  "ssn": 20.3,
  "smoothed_ssn": 17.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1775-01",
  "ssn": 7.3,
  "smoothed_ssn": 15.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1775-02",
  "ssn": 0,
  "smoothed_ssn": 14.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1775-03",
  "ssn": 19.3,
  "smoothed_ssn": 14.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1775-04",
  "ssn": 18.7,
  "smoothed_ssn": 13.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1775-05",
  "ssn": 6.5,
  "smoothed_ssn": 12.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1775-06",
  "ssn": 20.5,
  "smoothed_ssn": 12,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1775-07",
  "ssn": 1.7,
  "smoothed_ssn": 12.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1775-08",
  "ssn": 13.2,
  "smoothed_ssn": 14.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1775-09",
  "ssn": 5.3,
  "smoothed_ssn": 15.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1775-10",
  "ssn": 9.3,
  "smoothed_ssn": 15.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1775-11",
  "ssn": 25.2,
  "smoothed_ssn": 16.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1775-12",
  "ssn": 13.2,
  "smoothed_ssn": 17.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1776-01",
  "ssn": 36.2,
  "smoothed_ssn": 18.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1776-02",
  "ssn": 19.3,
  "smoothed_ssn": 19.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1776-03",
  "ssn": 10.5,
  "smoothed_ssn": 21.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1776-04",
  "ssn": 36.3,
  "smoothed_ssn": 24.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1776-05",
  "ssn": 18.7,
  "smoothed_ssn": 27.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1776-06",
  "ssn": 31.7,
  "smoothed_ssn": 30.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1776-07",
  "ssn": 1.7,
  "smoothed_ssn": 34.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1776-08",
  "ssn": 40.3,
  "smoothed_ssn": 38,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1776-09",
  "ssn": 26.7,
  "smoothed_ssn": 42,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1776-10",
  "ssn": 50,
  "smoothed_ssn": 49.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1776-11",
  "ssn": 58.3,
  "smoothed_ssn": 59.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1776-12",
  "ssn": 66.7,
  "smoothed_ssn": 68.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1777-01",
  "ssn": 75,
  "smoothed_ssn": 79.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1777-02",
  "ssn": 60.8,
  "smoothed_ssn": 91.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1777-03",
  "ssn": 65,
  "smoothed_ssn": 104.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1777-04",
  "ssn": 159.2,
  "smoothed_ssn": 117.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1777-05",
  "ssn": 133.8,
  "smoothed_ssn": 130.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1777-06",
  "ssn": 134.5,
  "smoothed_ssn": 146,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1777-07",
  "ssn": 158.3,
  "smoothed_ssn": 163.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1777-08",
  "ssn": 186.7,
  "smoothed_ssn": 177.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1777-09",
  "ssn": 193.7,
  "smoothed_ssn": 189.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1777-10",
  "ssn": 177.5,
  "smoothed_ssn": 199.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1777-11",
  "ssn": 243.3,
  "smoothed_ssn": 213.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1777-12",
  "ssn": 262.2,
  "smoothed_ssn": 231.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1778-01",
  "ssn": 295.5,
  "smoothed_ssn": 241.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1778-02",
  "ssn": 182.2,
  "smoothed_ssn": 247.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1778-03",
  "ssn": 223.3,
  "smoothed_ssn": 253.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1778-04",
  "ssn": 241.7,
  "smoothed_ssn": 260.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1778-05",
  "ssn": 398.2,
  "smoothed_ssn": 264.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1778-06",
  "ssn": 286,
  "smoothed_ssn": 260.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1778-07",
  "ssn": 255,
  "smoothed_ssn": 252.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1778-08",
  "ssn": 233.3,
  "smoothed_ssn": 252.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1778-09",
  "ssn": 286.2,
  "smoothed_ssn": 255.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1778-10",
  "ssn": 260.5,
  "smoothed_ssn": 254.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1778-11",
  "ssn": 250.5,
  "smoothed_ssn": 247.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1778-12",
  "ssn": 175,
  "smoothed_ssn": 236.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1779-01",
  "ssn": 191.2,
  "smoothed_ssn": 231.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1779-02",
  "ssn": 276.2,
  "smoothed_ssn": 229.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1779-03",
  "ssn": 196.7,
  "smoothed_ssn": 222.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1779-04",
  "ssn": 241.7,
  "smoothed_ssn": 216.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1779-05",
  "ssn": 233.3,
  "smoothed_ssn": 211.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1779-06",
  "ssn": 189.5,
  "smoothed_ssn": 209.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1779-07",
  "ssn": 238.3,
  "smoothed_ssn": 206.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1779-08",
  "ssn": 186.7,
  "smoothed_ssn": 199,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1779-09",
  "ssn": 185,
  "smoothed_ssn": 192.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1779-10",
  "ssn": 206.7,
  "smoothed_ssn": 188,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1779-11",
  "ssn": 190,
  "smoothed_ssn": 182.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1779-12",
  "ssn": 183.3,
  "smoothed_ssn": 178.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1780-01",
  "ssn": 116.7,
  "smoothed_ssn": 172.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1780-02",
  "ssn": 163.3,
  "smoothed_ssn": 166.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1780-03",
  "ssn": 163.3,
  "smoothed_ssn": 163.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1780-04",
  "ssn": 158.3,
  "smoothed_ssn": 159.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1780-05",
  "ssn": 178.7,
  "smoothed_ssn": 152.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1780-06",
  "ssn": 146.7,
  "smoothed_ssn": 144.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1780-07",
  "ssn": 143.3,
  "smoothed_ssn": 143.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1780-08",
  "ssn": 143.3,
  "smoothed_ssn": 143.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1780-09",
  "ssn": 156.2,
  "smoothed_ssn": 139,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1780-10",
  "ssn": 128.3,
  "smoothed_ssn": 134,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1780-11",
  "ssn": 100,
  "smoothed_ssn": 131.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1780-12",
  "ssn": 97.8,
  "smoothed_ssn": 132.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1781-01",
  "ssn": 164.5,
  "smoothed_ssn": 132.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1781-02",
  "ssn": 124.5,
  "smoothed_ssn": 130,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1781-03",
  "ssn": 88.3,
  "smoothed_ssn": 125.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1781-04",
  "ssn": 113.8,
  "smoothed_ssn": 119.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1781-05",
  "ssn": 174.5,
  "smoothed_ssn": 116.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1781-06",
  "ssn": 162.8,
  "smoothed_ssn": 115.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1781-07",
  "ssn": 122.5,
  "smoothed_ssn": 110.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1781-08",
  "ssn": 110,
  "smoothed_ssn": 104.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1781-09",
  "ssn": 85,
  "smoothed_ssn": 101,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1781-10",
  "ssn": 45.5,
  "smoothed_ssn": 98,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1781-11",
  "ssn": 111.7,
  "smoothed_ssn": 92.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1781-12",
  "ssn": 58.7,
  "smoothed_ssn": 85,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1782-01",
  "ssn": 90,
  "smoothed_ssn": 78.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1782-02",
  "ssn": 62.5,
  "smoothed_ssn": 74.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1782-03",
  "ssn": 61.7,
  "smoothed_ssn": 71.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1782-04",
  "ssn": 68.3,
  "smoothed_ssn": 70,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1782-05",
  "ssn": 90.5,
  "smoothed_ssn": 67.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1782-06",
  "ssn": 63.3,
  "smoothed_ssn": 64.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1782-07",
  "ssn": 61.7,
  "smoothed_ssn": 62.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1782-08",
  "ssn": 73.3,
  "smoothed_ssn": 60.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1782-09",
  "ssn": 56.7,
  "smoothed_ssn": 59.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1782-10",
  "ssn": 38.7,
  "smoothed_ssn": 58.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1782-11",
  "ssn": 52.5,
  "smoothed_ssn": 55.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1782-12",
  "ssn": 50,
  "smoothed_ssn": 52.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1783-01",
  "ssn": 46.7,
  "smoothed_ssn": 51,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1783-02",
  "ssn": 64.5,
  "smoothed_ssn": 49,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1783-03",
  "ssn": 44.5,
  "smoothed_ssn": 46.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1783-04",
  "ssn": 47.2,
  "smoothed_ssn": 44.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1783-05",
  "ssn": 38.3,
  "smoothed_ssn": 41.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1783-06",
  "ssn": 42,
  "smoothed_ssn": 39.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1783-07",
  "ssn": 53.7,
  "smoothed_ssn": 37,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1783-08",
  "ssn": 33.3,
  "smoothed_ssn": 33.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1783-09",
  "ssn": 30,
  "smoothed_ssn": 30.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1783-10",
  "ssn": 13.3,
  "smoothed_ssn": 28.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1783-11",
  "ssn": 25,
  "smoothed_ssn": 25.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1783-12",
  "ssn": 17.5,
  "smoothed_ssn": 23.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1784-01",
  "ssn": 21.7,
  "smoothed_ssn": 20.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1784-02",
  "ssn": 13.3,
  "smoothed_ssn": 18,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1784-03",
  "ssn": 18.3,
  "smoothed_ssn": 16.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1784-04",
  "ssn": 16.7,
  "smoothed_ssn": 16.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1784-05",
  "ssn": 10,
  "smoothed_ssn": 16.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1784-06",
  "ssn": 15,
  "smoothed_ssn": 16.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1784-07",
  "ssn": 10,
  "smoothed_ssn": 16.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1784-08",
  "ssn": 16.7,
  "smoothed_ssn": 16,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1784-09",
  "ssn": 16.7,
  "smoothed_ssn": 15.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1784-10",
  "ssn": 13.3,
  "smoothed_ssn": 16.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1784-11",
  "ssn": 28.3,
  "smoothed_ssn": 17.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1784-12",
  "ssn": 23.3,
  "smoothed_ssn": 19.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1785-01",
  "ssn": 10.8,
  "smoothed_ssn": 23.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1785-02",
  "ssn": 13.3,
  "smoothed_ssn": 25.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1785-03",
  "ssn": 15,
  "smoothed_ssn": 28.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1785-04",
  "ssn": 26.2,
  "smoothed_ssn": 32.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1785-05",
  "ssn": 34.5,
  "smoothed_ssn": 36.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1785-06",
  "ssn": 43.8,
  "smoothed_ssn": 39.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1785-07",
  "ssn": 60.5,
  "smoothed_ssn": 42.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1785-08",
  "ssn": 33.3,
  "smoothed_ssn": 47.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1785-09",
  "ssn": 53.3,
  "smoothed_ssn": 52.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1785-10",
  "ssn": 78.7,
  "smoothed_ssn": 60.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1785-11",
  "ssn": 67,
  "smoothed_ssn": 69.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1785-12",
  "ssn": 45.5,
  "smoothed_ssn": 77.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1786-01",
  "ssn": 62,
  "smoothed_ssn": 82.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1786-02",
  "ssn": 79.3,
  "smoothed_ssn": 90.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1786-03",
  "ssn": 79.5,
  "smoothed_ssn": 101.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1786-04",
  "ssn": 142.3,
  "smoothed_ssn": 111.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1786-05",
  "ssn": 153.8,
  "smoothed_ssn": 121,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1786-06",
  "ssn": 98.3,
  "smoothed_ssn": 132.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1786-07",
  "ssn": 138.3,
  "smoothed_ssn": 144.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1786-08",
  "ssn": 149.5,
  "smoothed_ssn": 155.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1786-09",
  "ssn": 185.8,
  "smoothed_ssn": 162.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1786-10",
  "ssn": 187.2,
  "smoothed_ssn": 168.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1786-11",
  "ssn": 193.3,
  "smoothed_ssn": 174,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1786-12",
  "ssn": 187.8,
  "smoothed_ssn": 179.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1787-01",
  "ssn": 224.5,
  "smoothed_ssn": 185.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1787-02",
  "ssn": 176.7,
  "smoothed_ssn": 192.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1787-03",
  "ssn": 145.7,
  "smoothed_ssn": 198.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1787-04",
  "ssn": 212,
  "smoothed_ssn": 204.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1787-05",
  "ssn": 224.7,
  "smoothed_ssn": 209.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1787-06",
  "ssn": 165.3,
  "smoothed_ssn": 215.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1787-07",
  "ssn": 213.3,
  "smoothed_ssn": 220.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1787-08",
  "ssn": 228.7,
  "smoothed_ssn": 222.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1787-09",
  "ssn": 262.2,
  "smoothed_ssn": 227.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1787-10",
  "ssn": 261.7,
  "smoothed_ssn": 230.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1787-11",
  "ssn": 235.8,
  "smoothed_ssn": 227.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1787-12",
  "ssn": 290,
  "smoothed_ssn": 229.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1788-01",
  "ssn": 230,
  "smoothed_ssn": 234.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1788-02",
  "ssn": 215.3,
  "smoothed_ssn": 235.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1788-03",
  "ssn": 238.8,
  "smoothed_ssn": 234.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1788-04",
  "ssn": 180.8,
  "smoothed_ssn": 231.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1788-05",
  "ssn": 188.3,
  "smoothed_ssn": 227.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1788-06",
  "ssn": 257,
  "smoothed_ssn": 221.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1788-07",
  "ssn": 235.8,
  "smoothed_ssn": 216.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1788-08",
  "ssn": 226.7,
  "smoothed_ssn": 214.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1788-09",
  "ssn": 235,
  "smoothed_ssn": 212.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1788-10",
  "ssn": 236.7,
  "smoothed_ssn": 212.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1788-11",
  "ssn": 157.8,
  "smoothed_ssn": 213.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1788-12",
  "ssn": 215.8,
  "smoothed_ssn": 212.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1789-01",
  "ssn": 190,
  "smoothed_ssn": 208.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1789-02",
  "ssn": 208.8,
  "smoothed_ssn": 204.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1789-03",
  "ssn": 200,
  "smoothed_ssn": 199.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1789-04",
  "ssn": 205.5,
  "smoothed_ssn": 194.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1789-05",
  "ssn": 205.8,
  "smoothed_ssn": 193.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1789-06",
  "ssn": 200,
  "smoothed_ssn": 196.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1789-07",
  "ssn": 195,
  "smoothed_ssn": 196.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1789-08",
  "ssn": 171.7,
  "smoothed_ssn": 195.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1789-09",
  "ssn": 186.7,
  "smoothed_ssn": 194,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1789-10",
  "ssn": 149.5,
  "smoothed_ssn": 190.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1789-11",
  "ssn": 223.3,
  "smoothed_ssn": 186.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1789-12",
  "ssn": 225.8,
  "smoothed_ssn": 182,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1790-01",
  "ssn": 171.7,
  "smoothed_ssn": 176.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1790-02",
  "ssn": 212.5,
  "smoothed_ssn": 172.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1790-03",
  "ssn": 160.5,
  "smoothed_ssn": 168.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1790-04",
  "ssn": 156.7,
  "smoothed_ssn": 166,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1790-05",
  "ssn": 155,
  "smoothed_ssn": 162,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1790-06",
  "ssn": 151.7,
  "smoothed_ssn": 154.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1790-07",
  "ssn": 115.5,
  "smoothed_ssn": 147.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1790-08",
  "ssn": 145,
  "smoothed_ssn": 141.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1790-09",
  "ssn": 128.8,
  "smoothed_ssn": 135,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1790-10",
  "ssn": 140.5,
  "smoothed_ssn": 132.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1790-11",
  "ssn": 136.7,
  "smoothed_ssn": 129.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1790-12",
  "ssn": 123.3,
  "smoothed_ssn": 126.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1791-01",
  "ssn": 121.2,
  "smoothed_ssn": 124.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1791-02",
  "ssn": 103.3,
  "smoothed_ssn": 121.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1791-03",
  "ssn": 123.3,
  "smoothed_ssn": 118.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1791-04",
  "ssn": 128.7,
  "smoothed_ssn": 115.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1791-05",
  "ssn": 122.8,
  "smoothed_ssn": 113.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1791-06",
  "ssn": 107,
  "smoothed_ssn": 111.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1791-07",
  "ssn": 118.3,
  "smoothed_ssn": 109.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1791-08",
  "ssn": 71.7,
  "smoothed_ssn": 109.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1791-09",
  "ssn": 110.8,
  "smoothed_ssn": 108.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1791-10",
  "ssn": 102.8,
  "smoothed_ssn": 107.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1791-11",
  "ssn": 111.7,
  "smoothed_ssn": 106.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1791-12",
  "ssn": 110,
  "smoothed_ssn": 105.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1792-01",
  "ssn": 96.7,
  "smoothed_ssn": 103.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1792-02",
  "ssn": 106.7,
  "smoothed_ssn": 103.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1792-03",
  "ssn": 105,
  "smoothed_ssn": 103.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1792-04",
  "ssn": 126.2,
  "smoothed_ssn": 103,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1792-05",
  "ssn": 103.3,
  "smoothed_ssn": 102.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1792-06",
  "ssn": 101.7,
  "smoothed_ssn": 100.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1792-07",
  "ssn": 76.3,
  "smoothed_ssn": 99.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1792-08",
  "ssn": 100,
  "smoothed_ssn": 99.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1792-09",
  "ssn": 98.3,
  "smoothed_ssn": 98,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1792-10",
  "ssn": 98.3,
  "smoothed_ssn": 95.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1792-11",
  "ssn": 95,
  "smoothed_ssn": 93.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1792-12",
  "ssn": 93.3,
  "smoothed_ssn": 92.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1793-01",
  "ssn": 93.3,
  "smoothed_ssn": 91.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1793-02",
  "ssn": 91.7,
  "smoothed_ssn": 90.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1793-03",
  "ssn": 92.5,
  "smoothed_ssn": 85.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1793-04",
  "ssn": 88.3,
  "smoothed_ssn": 82.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1793-05",
  "ssn": 87.2,
  "smoothed_ssn": 80.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1793-06",
  "ssn": 85,
  "smoothed_ssn": 78.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1793-07",
  "ssn": 83.3,
  "smoothed_ssn": 77.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1793-08",
  "ssn": 48.8,
  "smoothed_ssn": 75.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1793-09",
  "ssn": 40,
  "smoothed_ssn": 73.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1793-10",
  "ssn": 78.3,
  "smoothed_ssn": 71,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1793-11",
  "ssn": 73.3,
  "smoothed_ssn": 69.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1793-12",
  "ssn": 76.2,
  "smoothed_ssn": 69.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1794-01",
  "ssn": 75,
  "smoothed_ssn": 67.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1794-02",
  "ssn": 73.3,
  "smoothed_ssn": 67.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1794-03",
  "ssn": 63.3,
  "smoothed_ssn": 67.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1794-04",
  "ssn": 47.3,
  "smoothed_ssn": 65.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1794-05",
  "ssn": 92.8,
  "smoothed_ssn": 65.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1794-06",
  "ssn": 69.2,
  "smoothed_ssn": 67.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1794-07",
  "ssn": 68.3,
  "smoothed_ssn": 66.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1794-08",
  "ssn": 66.7,
  "smoothed_ssn": 64.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1794-09",
  "ssn": 18.5,
  "smoothed_ssn": 62.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1794-10",
  "ssn": 47.5,
  "smoothed_ssn": 60.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1794-11",
  "ssn": 112.3,
  "smoothed_ssn": 57.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1794-12",
  "ssn": 85.7,
  "smoothed_ssn": 54.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1795-01",
  "ssn": 35.7,
  "smoothed_ssn": 50.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1795-02",
  "ssn": 66.5,
  "smoothed_ssn": 47.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1795-03",
  "ssn": 21,
  "smoothed_ssn": 47.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1795-04",
  "ssn": 31,
  "smoothed_ssn": 46.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1795-05",
  "ssn": 51.7,
  "smoothed_ssn": 43,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1795-06",
  "ssn": 28.5,
  "smoothed_ssn": 37.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1795-07",
  "ssn": 21.5,
  "smoothed_ssn": 35.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1795-08",
  "ssn": 42.8,
  "smoothed_ssn": 34.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1795-09",
  "ssn": 22.5,
  "smoothed_ssn": 33.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1795-10",
  "ssn": 32.5,
  "smoothed_ssn": 34.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1795-11",
  "ssn": 41.7,
  "smoothed_ssn": 34.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1795-12",
  "ssn": 30,
  "smoothed_ssn": 33.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1796-01",
  "ssn": 36.7,
  "smoothed_ssn": 33.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1796-02",
  "ssn": 39.7,
  "smoothed_ssn": 33,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1796-03",
  "ssn": 26.2,
  "smoothed_ssn": 31.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1796-04",
  "ssn": 52.8,
  "smoothed_ssn": 31.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1796-05",
  "ssn": 35,
  "smoothed_ssn": 29.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1796-06",
  "ssn": 11.2,
  "smoothed_ssn": 27.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1796-07",
  "ssn": 44.8,
  "smoothed_ssn": 26.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1796-08",
  "ssn": 2.5,
  "smoothed_ssn": 24.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1796-09",
  "ssn": 30.7,
  "smoothed_ssn": 22.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1796-10",
  "ssn": 18.3,
  "smoothed_ssn": 19.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1796-11",
  "ssn": 14,
  "smoothed_ssn": 16.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1796-12",
  "ssn": 8.5,
  "smoothed_ssn": 15.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1797-01",
  "ssn": 24,
  "smoothed_ssn": 14.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1797-02",
  "ssn": 7,
  "smoothed_ssn": 13.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1797-03",
  "ssn": 6.7,
  "smoothed_ssn": 12.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1797-04",
  "ssn": 6.7,
  "smoothed_ssn": 11.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1797-05",
  "ssn": 12.2,
  "smoothed_ssn": 11.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1797-06",
  "ssn": 18.5,
  "smoothed_ssn": 10.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1797-07",
  "ssn": 7.2,
  "smoothed_ssn": 9.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1797-08",
  "ssn": 10,
  "smoothed_ssn": 8.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1797-09",
  "ssn": 9.5,
  "smoothed_ssn": 9.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1797-10",
  "ssn": 11.5,
  "smoothed_ssn": 9.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1797-11",
  "ssn": 9.7,
  "smoothed_ssn": 9.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1797-12",
  "ssn": 5,
  "smoothed_ssn": 7.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1798-01",
  "ssn": 3.3,
  "smoothed_ssn": 6.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1798-02",
  "ssn": 6.7,
  "smoothed_ssn": 6.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1798-03",
  "ssn": 20.7,
  "smoothed_ssn": 5.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1798-04",
  "ssn": 1.8,
  "smoothed_ssn": 5.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1798-05",
  "ssn": 0,
  "smoothed_ssn": 5.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1798-06",
  "ssn": 0,
  "smoothed_ssn": 6.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1798-07",
  "ssn": 0,
  "smoothed_ssn": 6.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1798-08",
  "ssn": 5,
  "smoothed_ssn": 7.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1798-09",
  "ssn": 4,
  "smoothed_ssn": 8.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1798-10",
  "ssn": 2.5,
  "smoothed_ssn": 9.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1798-11",
  "ssn": 20.8,
  "smoothed_ssn": 10.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1798-12",
  "ssn": 16.5,
  "smoothed_ssn": 12.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1799-01",
  "ssn": 2.7,
  "smoothed_ssn": 13,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1799-02",
  "ssn": 21,
  "smoothed_ssn": 12.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1799-03",
  "ssn": 36.2,
  "smoothed_ssn": 12.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1799-04",
  "ssn": 14,
  "smoothed_ssn": 12.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1799-05",
  "ssn": 13.7,
  "smoothed_ssn": 12.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1799-06",
  "ssn": 17.7,
  "smoothed_ssn": 11.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1799-07",
  "ssn": 3.5,
  "smoothed_ssn": 11.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1799-08",
  "ssn": 0,
  "smoothed_ssn": 11.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1799-09",
  "ssn": 0,
  "smoothed_ssn": 11,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1799-10",
  "ssn": 7.7,
  "smoothed_ssn": 9.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1799-11",
  "ssn": 4.5,
  "smoothed_ssn": 9.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1799-12",
  "ssn": 14.3,
  "smoothed_ssn": 9.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1800-01",
  "ssn": 11.5,
  "smoothed_ssn": 12,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1800-02",
  "ssn": 15.5,
  "smoothed_ssn": 14.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1800-03",
  "ssn": 23.2,
  "smoothed_ssn": 16.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1800-04",
  "ssn": 0,
  "smoothed_ssn": 18.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1800-05",
  "ssn": 8.3,
  "smoothed_ssn": 19.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1800-06",
  "ssn": 39.5,
  "smoothed_ssn": 21.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1800-07",
  "ssn": 35,
  "smoothed_ssn": 25.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1800-08",
  "ssn": 32.5,
  "smoothed_ssn": 28.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1800-09",
  "ssn": 19.2,
  "smoothed_ssn": 30.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1800-10",
  "ssn": 20.5,
  "smoothed_ssn": 34,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1800-11",
  "ssn": 17.5,
  "smoothed_ssn": 38.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1800-12",
  "ssn": 66.8,
  "smoothed_ssn": 40.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1801-01",
  "ssn": 45,
  "smoothed_ssn": 42,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1801-02",
  "ssn": 48.3,
  "smoothed_ssn": 44.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1801-03",
  "ssn": 50,
  "smoothed_ssn": 47.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1801-04",
  "ssn": 51.7,
  "smoothed_ssn": 50.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1801-05",
  "ssn": 53.3,
  "smoothed_ssn": 53.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1801-06",
  "ssn": 52,
  "smoothed_ssn": 56.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1801-07",
  "ssn": 58.3,
  "smoothed_ssn": 58.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1801-08",
  "ssn": 64.5,
  "smoothed_ssn": 60.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1801-09",
  "ssn": 55.8,
  "smoothed_ssn": 62.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1801-10",
  "ssn": 54.3,
  "smoothed_ssn": 64.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1801-11",
  "ssn": 66.3,
  "smoothed_ssn": 65.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1801-12",
  "ssn": 80.3,
  "smoothed_ssn": 67.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1802-01",
  "ssn": 79.7,
  "smoothed_ssn": 69.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1802-02",
  "ssn": 78.3,
  "smoothed_ssn": 71.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1802-03",
  "ssn": 68,
  "smoothed_ssn": 73.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1802-04",
  "ssn": 70,
  "smoothed_ssn": 75.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1802-05",
  "ssn": 73.3,
  "smoothed_ssn": 75.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1802-06",
  "ssn": 76.7,
  "smoothed_ssn": 74.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1802-07",
  "ssn": 80,
  "smoothed_ssn": 75.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1802-08",
  "ssn": 83.3,
  "smoothed_ssn": 75.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1802-09",
  "ssn": 86.3,
  "smoothed_ssn": 75.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1802-10",
  "ssn": 64.2,
  "smoothed_ssn": 73.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1802-11",
  "ssn": 57.5,
  "smoothed_ssn": 72,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1802-12",
  "ssn": 83.3,
  "smoothed_ssn": 71.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1803-01",
  "ssn": 83.3,
  "smoothed_ssn": 70.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1803-02",
  "ssn": 84.7,
  "smoothed_ssn": 69.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1803-03",
  "ssn": 49.2,
  "smoothed_ssn": 68,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1803-04",
  "ssn": 41.7,
  "smoothed_ssn": 68.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1803-05",
  "ssn": 73.8,
  "smoothed_ssn": 70.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1803-06",
  "ssn": 60,
  "smoothed_ssn": 71.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1803-07",
  "ssn": 80.5,
  "smoothed_ssn": 71.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1803-08",
  "ssn": 56.8,
  "smoothed_ssn": 70.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1803-09",
  "ssn": 75.5,
  "smoothed_ssn": 72,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1803-10",
  "ssn": 90.5,
  "smoothed_ssn": 75.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1803-11",
  "ssn": 85,
  "smoothed_ssn": 76.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1803-12",
  "ssn": 80,
  "smoothed_ssn": 75.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1804-01",
  "ssn": 75.5,
  "smoothed_ssn": 73.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1804-02",
  "ssn": 80.5,
  "smoothed_ssn": 73.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1804-03",
  "ssn": 80,
  "smoothed_ssn": 74.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1804-04",
  "ssn": 84.3,
  "smoothed_ssn": 75.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1804-05",
  "ssn": 55.7,
  "smoothed_ssn": 76.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1804-06",
  "ssn": 58,
  "smoothed_ssn": 78.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1804-07",
  "ssn": 49.7,
  "smoothed_ssn": 80.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1804-08",
  "ssn": 71.8,
  "smoothed_ssn": 81,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1804-09",
  "ssn": 88.3,
  "smoothed_ssn": 80.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1804-10",
  "ssn": 103.8,
  "smoothed_ssn": 80.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1804-11",
  "ssn": 101.7,
  "smoothed_ssn": 79.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1804-12",
  "ssn": 100,
  "smoothed_ssn": 80.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1805-01",
  "ssn": 101.7,
  "smoothed_ssn": 81.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1805-02",
  "ssn": 73.5,
  "smoothed_ssn": 82,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1805-03",
  "ssn": 85.7,
  "smoothed_ssn": 81.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1805-04",
  "ssn": 62.5,
  "smoothed_ssn": 78.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1805-05",
  "ssn": 65,
  "smoothed_ssn": 74.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1805-06",
  "ssn": 67.5,
  "smoothed_ssn": 71.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1805-07",
  "ssn": 62.7,
  "smoothed_ssn": 68.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1805-08",
  "ssn": 71.2,
  "smoothed_ssn": 66.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1805-09",
  "ssn": 74,
  "smoothed_ssn": 64,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1805-10",
  "ssn": 49,
  "smoothed_ssn": 62.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1805-11",
  "ssn": 68.3,
  "smoothed_ssn": 60.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1805-12",
  "ssn": 63.8,
  "smoothed_ssn": 58.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1806-01",
  "ssn": 65,
  "smoothed_ssn": 57,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1806-02",
  "ssn": 49.3,
  "smoothed_ssn": 55.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1806-03",
  "ssn": 54.5,
  "smoothed_ssn": 52.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1806-04",
  "ssn": 46.2,
  "smoothed_ssn": 51.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1806-05",
  "ssn": 44,
  "smoothed_ssn": 49.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1806-06",
  "ssn": 42.7,
  "smoothed_ssn": 47.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1806-07",
  "ssn": 50,
  "smoothed_ssn": 45,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1806-08",
  "ssn": 43.8,
  "smoothed_ssn": 41.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1806-09",
  "ssn": 40,
  "smoothed_ssn": 39.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1806-10",
  "ssn": 45,
  "smoothed_ssn": 37.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1806-11",
  "ssn": 41.7,
  "smoothed_ssn": 35.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1806-12",
  "ssn": 40,
  "smoothed_ssn": 33.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1807-01",
  "ssn": 20,
  "smoothed_ssn": 31.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1807-02",
  "ssn": 20.3,
  "smoothed_ssn": 29.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1807-03",
  "ssn": 16,
  "smoothed_ssn": 27.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1807-04",
  "ssn": 39.7,
  "smoothed_ssn": 24.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1807-05",
  "ssn": 16.7,
  "smoothed_ssn": 21.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1807-06",
  "ssn": 20,
  "smoothed_ssn": 18.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1807-07",
  "ssn": 21.2,
  "smoothed_ssn": 15.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1807-08",
  "ssn": 20,
  "smoothed_ssn": 14.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1807-09",
  "ssn": 9.5,
  "smoothed_ssn": 13.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1807-10",
  "ssn": 13.3,
  "smoothed_ssn": 11.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1807-11",
  "ssn": 4.3,
  "smoothed_ssn": 11.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1807-12",
  "ssn": 0,
  "smoothed_ssn": 11.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1808-01",
  "ssn": 0,
  "smoothed_ssn": 11.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1808-02",
  "ssn": 7.5,
  "smoothed_ssn": 10.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1808-03",
  "ssn": 0,
  "smoothed_ssn": 10.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1808-04",
  "ssn": 20.5,
  "smoothed_ssn": 11,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1808-05",
  "ssn": 22.5,
  "smoothed_ssn": 11.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1808-06",
  "ssn": 22.5,
  "smoothed_ssn": 12.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1808-07",
  "ssn": 11.2,
  "smoothed_ssn": 14.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1808-08",
  "ssn": 13.3,
  "smoothed_ssn": 14.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1808-09",
  "ssn": 19.5,
  "smoothed_ssn": 15.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1808-10",
  "ssn": 7.8,
  "smoothed_ssn": 14.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1808-11",
  "ssn": 17.5,
  "smoothed_ssn": 13.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1808-12",
  "ssn": 20.5,
  "smoothed_ssn": 12,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1809-01",
  "ssn": 12,
  "smoothed_ssn": 11.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1809-02",
  "ssn": 15.3,
  "smoothed_ssn": 10.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1809-03",
  "ssn": 1.5,
  "smoothed_ssn": 8.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1809-04",
  "ssn": 4.2,
  "smoothed_ssn": 7.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1809-05",
  "ssn": 3.3,
  "smoothed_ssn": 6.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1809-06",
  "ssn": 12.8,
  "smoothed_ssn": 5.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1809-07",
  "ssn": 0.5,
  "smoothed_ssn": 3.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1809-08",
  "ssn": 0.3,
  "smoothed_ssn": 2.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1809-09",
  "ssn": 0.7,
  "smoothed_ssn": 1.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1809-10",
  "ssn": 0,
  "smoothed_ssn": 1.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1809-11",
  "ssn": 0,
  "smoothed_ssn": 1.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1809-12",
  "ssn": 0,
  "smoothed_ssn": 0.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1810-01",
  "ssn": 0,
  "smoothed_ssn": 0.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1810-02",
  "ssn": 0,
  "smoothed_ssn": 0.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1810-03",
  "ssn": 0,
  "smoothed_ssn": 0,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1810-04",
  "ssn": 0,
  "smoothed_ssn": 0,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1810-05",
  "ssn": 0,
  "smoothed_ssn": 0,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1810-06",
  "ssn": 0,
  "smoothed_ssn": 0,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1810-07",
  "ssn": 0,
  "smoothed_ssn": 0,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1810-08",
  "ssn": 0,
  "smoothed_ssn": 0,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1810-09",
  "ssn": 0,
  "smoothed_ssn": 0,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1810-10",
  "ssn": 0,
  "smoothed_ssn": 0,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1810-11",
  "ssn": 0,
  "smoothed_ssn": 0,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1810-12",
  "ssn": 0,
  "smoothed_ssn": 0,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1811-01",
  "ssn": 0,
  "smoothed_ssn": 0.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1811-02",
  "ssn": 0,
  "smoothed_ssn": 0.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1811-03",
  "ssn": 0,
  "smoothed_ssn": 1.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1811-04",
  "ssn": 0,
  "smoothed_ssn": 1.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1811-05",
  "ssn": 0,
  "smoothed_ssn": 2.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1811-06",
  "ssn": 0,
  "smoothed_ssn": 2.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1811-07",
  "ssn": 11,
  "smoothed_ssn": 3.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1811-08",
  "ssn": 0,
  "smoothed_ssn": 4.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1811-09",
  "ssn": 4,
  "smoothed_ssn": 4.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1811-10",
  "ssn": 10.2,
  "smoothed_ssn": 4.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1811-11",
  "ssn": 1.3,
  "smoothed_ssn": 4.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1811-12",
  "ssn": 1.8,
  "smoothed_ssn": 4.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1812-01",
  "ssn": 18.8,
  "smoothed_ssn": 4.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1812-02",
  "ssn": 3.2,
  "smoothed_ssn": 4.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1812-03",
  "ssn": 1.2,
  "smoothed_ssn": 6.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1812-04",
  "ssn": 0,
  "smoothed_ssn": 6.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1812-05",
  "ssn": 1.7,
  "smoothed_ssn": 6.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1812-06",
  "ssn": 2.2,
  "smoothed_ssn": 7.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1812-07",
  "ssn": 0.8,
  "smoothed_ssn": 7.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1812-08",
  "ssn": 26,
  "smoothed_ssn": 7.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1812-09",
  "ssn": 8.7,
  "smoothed_ssn": 7.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1812-10",
  "ssn": 6.5,
  "smoothed_ssn": 9.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1812-11",
  "ssn": 13.2,
  "smoothed_ssn": 10.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1812-12",
  "ssn": 16.8,
  "smoothed_ssn": 11.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1813-01",
  "ssn": 0,
  "smoothed_ssn": 13.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1813-02",
  "ssn": 17.2,
  "smoothed_ssn": 14.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1813-03",
  "ssn": 3.2,
  "smoothed_ssn": 14.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1813-04",
  "ssn": 27.7,
  "smoothed_ssn": 16.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1813-05",
  "ssn": 9.2,
  "smoothed_ssn": 19.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1813-06",
  "ssn": 18.7,
  "smoothed_ssn": 20,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1813-07",
  "ssn": 30.5,
  "smoothed_ssn": 21.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1813-08",
  "ssn": 14,
  "smoothed_ssn": 23.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1813-09",
  "ssn": 25.5,
  "smoothed_ssn": 23.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1813-10",
  "ssn": 46.3,
  "smoothed_ssn": 24.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1813-11",
  "ssn": 27.8,
  "smoothed_ssn": 25.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1813-12",
  "ssn": 23.8,
  "smoothed_ssn": 25.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1814-01",
  "ssn": 37,
  "smoothed_ssn": 25.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1814-02",
  "ssn": 20,
  "smoothed_ssn": 25.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1814-03",
  "ssn": 9.5,
  "smoothed_ssn": 24.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1814-04",
  "ssn": 39.7,
  "smoothed_ssn": 23.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1814-05",
  "ssn": 9.7,
  "smoothed_ssn": 22.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1814-06",
  "ssn": 24.8,
  "smoothed_ssn": 22.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1814-07",
  "ssn": 30.8,
  "smoothed_ssn": 23,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1814-08",
  "ssn": 3.8,
  "smoothed_ssn": 24.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1814-09",
  "ssn": 13.5,
  "smoothed_ssn": 27,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1814-10",
  "ssn": 32.2,
  "smoothed_ssn": 29,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1814-11",
  "ssn": 24.2,
  "smoothed_ssn": 29.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1814-12",
  "ssn": 33.5,
  "smoothed_ssn": 33,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1815-01",
  "ssn": 32,
  "smoothed_ssn": 37,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1815-02",
  "ssn": 53.7,
  "smoothed_ssn": 41.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1815-03",
  "ssn": 43.7,
  "smoothed_ssn": 46,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1815-04",
  "ssn": 52.7,
  "smoothed_ssn": 48.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1815-05",
  "ssn": 16.3,
  "smoothed_ssn": 51.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1815-06",
  "ssn": 93.2,
  "smoothed_ssn": 55.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1815-07",
  "ssn": 59.2,
  "smoothed_ssn": 59.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1815-08",
  "ssn": 78.7,
  "smoothed_ssn": 62.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1815-09",
  "ssn": 52.5,
  "smoothed_ssn": 68.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1815-10",
  "ssn": 55.8,
  "smoothed_ssn": 73.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1815-11",
  "ssn": 62,
  "smoothed_ssn": 77.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1815-12",
  "ssn": 108.3,
  "smoothed_ssn": 79.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1816-01",
  "ssn": 43.8,
  "smoothed_ssn": 78.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1816-02",
  "ssn": 114.7,
  "smoothed_ssn": 77.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1816-03",
  "ssn": 122.8,
  "smoothed_ssn": 76.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1816-04",
  "ssn": 98,
  "smoothed_ssn": 79.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1816-05",
  "ssn": 73.8,
  "smoothed_ssn": 81.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1816-06",
  "ssn": 72.7,
  "smoothed_ssn": 78.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1816-07",
  "ssn": 64.7,
  "smoothed_ssn": 77.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1816-08",
  "ssn": 38.7,
  "smoothed_ssn": 77,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1816-09",
  "ssn": 79.7,
  "smoothed_ssn": 77.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1816-10",
  "ssn": 94,
  "smoothed_ssn": 77.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1816-11",
  "ssn": 63.5,
  "smoothed_ssn": 73.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1816-12",
  "ssn": 49.8,
  "smoothed_ssn": 71.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1817-01",
  "ssn": 60.7,
  "smoothed_ssn": 71.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1817-02",
  "ssn": 96.5,
  "smoothed_ssn": 74.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1817-03",
  "ssn": 160.3,
  "smoothed_ssn": 75,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1817-04",
  "ssn": 44,
  "smoothed_ssn": 72.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1817-05",
  "ssn": 35.3,
  "smoothed_ssn": 69.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1817-06",
  "ssn": 66.7,
  "smoothed_ssn": 68.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1817-07",
  "ssn": 83.3,
  "smoothed_ssn": 68.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1817-08",
  "ssn": 75,
  "smoothed_ssn": 65.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1817-09",
  "ssn": 61.2,
  "smoothed_ssn": 58.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1817-10",
  "ssn": 42.7,
  "smoothed_ssn": 54,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1817-11",
  "ssn": 48.2,
  "smoothed_ssn": 56.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1817-12",
  "ssn": 47.3,
  "smoothed_ssn": 58.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1818-01",
  "ssn": 58.1,
  "smoothed_ssn": 57,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1818-02",
  "ssn": 37.4,
  "smoothed_ssn": 54.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1818-03",
  "ssn": 42.4,
  "smoothed_ssn": 52.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1818-04",
  "ssn": 57.5,
  "smoothed_ssn": 52.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1818-05",
  "ssn": 88.5,
  "smoothed_ssn": 51.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1818-06",
  "ssn": 60.8,
  "smoothed_ssn": 50.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1818-07",
  "ssn": 46.8,
  "smoothed_ssn": 50,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1818-08",
  "ssn": 52.6,
  "smoothed_ssn": 49.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1818-09",
  "ssn": 43.4,
  "smoothed_ssn": 48.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1818-10",
  "ssn": 52.8,
  "smoothed_ssn": 45.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1818-11",
  "ssn": 18.3,
  "smoothed_ssn": 42.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1818-12",
  "ssn": 43,
  "smoothed_ssn": 39.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1819-01",
  "ssn": 54.7,
  "smoothed_ssn": 40,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1819-02",
  "ssn": 34.6,
  "smoothed_ssn": 39.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1819-03",
  "ssn": 6.3,
  "smoothed_ssn": 38.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1819-04",
  "ssn": 33.7,
  "smoothed_ssn": 37.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1819-05",
  "ssn": 32.6,
  "smoothed_ssn": 38.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1819-06",
  "ssn": 58.3,
  "smoothed_ssn": 39.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1819-07",
  "ssn": 52.5,
  "smoothed_ssn": 39,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1819-08",
  "ssn": 43.5,
  "smoothed_ssn": 38.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1819-09",
  "ssn": 24.8,
  "smoothed_ssn": 38.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1819-10",
  "ssn": 45.9,
  "smoothed_ssn": 38.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1819-11",
  "ssn": 41.8,
  "smoothed_ssn": 39.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1819-12",
  "ssn": 50.9,
  "smoothed_ssn": 38.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1820-01",
  "ssn": 32,
  "smoothed_ssn": 36.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1820-02",
  "ssn": 44.4,
  "smoothed_ssn": 35.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1820-03",
  "ssn": 7.5,
  "smoothed_ssn": 34.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1820-04",
  "ssn": 32.3,
  "smoothed_ssn": 32.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1820-05",
  "ssn": 48.9,
  "smoothed_ssn": 30.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1820-06",
  "ssn": 17.9,
  "smoothed_ssn": 27.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1820-07",
  "ssn": 34.1,
  "smoothed_ssn": 26.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1820-08",
  "ssn": 43.1,
  "smoothed_ssn": 24.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1820-09",
  "ssn": 8.6,
  "smoothed_ssn": 23.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1820-10",
  "ssn": 14.9,
  "smoothed_ssn": 22.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1820-11",
  "ssn": 13.2,
  "smoothed_ssn": 20,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1820-12",
  "ssn": 15.1,
  "smoothed_ssn": 17.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1821-01",
  "ssn": 36,
  "smoothed_ssn": 15.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1821-02",
  "ssn": 7,
  "smoothed_ssn": 12.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1821-03",
  "ssn": 9.5,
  "smoothed_ssn": 11.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1821-04",
  "ssn": 15.2,
  "smoothed_ssn": 12,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1821-05",
  "ssn": 2.8,
  "smoothed_ssn": 12.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1821-06",
  "ssn": 3,
  "smoothed_ssn": 11.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1821-07",
  "ssn": 4.3,
  "smoothed_ssn": 9.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1821-08",
  "ssn": 8,
  "smoothed_ssn": 7.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1821-09",
  "ssn": 7.3,
  "smoothed_ssn": 8.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1821-10",
  "ssn": 31.4,
  "smoothed_ssn": 9.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1821-11",
  "ssn": 7.3,
  "smoothed_ssn": 9.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1821-12",
  "ssn": 0.4,
  "smoothed_ssn": 9.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1822-01",
  "ssn": 0,
  "smoothed_ssn": 10.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1822-02",
  "ssn": 1.5,
  "smoothed_ssn": 10.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1822-03",
  "ssn": 26.9,
  "smoothed_ssn": 10.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1822-04",
  "ssn": 21.7,
  "smoothed_ssn": 8.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1822-05",
  "ssn": 2.4,
  "smoothed_ssn": 6.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1822-06",
  "ssn": 9.3,
  "smoothed_ssn": 6.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1822-07",
  "ssn": 13.2,
  "smoothed_ssn": 6.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1822-08",
  "ssn": 3.4,
  "smoothed_ssn": 6.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1822-09",
  "ssn": 0,
  "smoothed_ssn": 5.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1822-10",
  "ssn": 0.6,
  "smoothed_ssn": 3.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1822-11",
  "ssn": 0,
  "smoothed_ssn": 2.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1822-12",
  "ssn": 0,
  "smoothed_ssn": 1.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1823-01",
  "ssn": 0,
  "smoothed_ssn": 1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1823-02",
  "ssn": 0,
  "smoothed_ssn": 0.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1823-03",
  "ssn": 1,
  "smoothed_ssn": 0.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1823-04",
  "ssn": 0,
  "smoothed_ssn": 0.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1823-05",
  "ssn": 0,
  "smoothed_ssn": 0.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1823-06",
  "ssn": 0,
  "smoothed_ssn": 1.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1823-07",
  "ssn": 0.8,
  "smoothed_ssn": 4.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1823-08",
  "ssn": 0,
  "smoothed_ssn": 6.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1823-09",
  "ssn": 0,
  "smoothed_ssn": 7.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1823-10",
  "ssn": 0,
  "smoothed_ssn": 8.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1823-11",
  "ssn": 0,
  "smoothed_ssn": 10.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1823-12",
  "ssn": 34,
  "smoothed_ssn": 10.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1824-01",
  "ssn": 36,
  "smoothed_ssn": 10.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1824-02",
  "ssn": 18,
  "smoothed_ssn": 10.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1824-03",
  "ssn": 0,
  "smoothed_ssn": 12,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1824-04",
  "ssn": 32.3,
  "smoothed_ssn": 15.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1824-05",
  "ssn": 4.6,
  "smoothed_ssn": 17,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1824-06",
  "ssn": 0,
  "smoothed_ssn": 15.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1824-07",
  "ssn": 0,
  "smoothed_ssn": 13.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1824-08",
  "ssn": 2.3,
  "smoothed_ssn": 12.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1824-09",
  "ssn": 34.3,
  "smoothed_ssn": 14.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1824-10",
  "ssn": 42,
  "smoothed_ssn": 14.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1824-11",
  "ssn": 0,
  "smoothed_ssn": 14.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1824-12",
  "ssn": 1.4,
  "smoothed_ssn": 16.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1825-01",
  "ssn": 8.4,
  "smoothed_ssn": 19.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1825-02",
  "ssn": 25.9,
  "smoothed_ssn": 23.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1825-03",
  "ssn": 37.4,
  "smoothed_ssn": 24.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1825-04",
  "ssn": 6.2,
  "smoothed_ssn": 23.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1825-05",
  "ssn": 25.8,
  "smoothed_ssn": 23.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1825-06",
  "ssn": 25.6,
  "smoothed_ssn": 26.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1825-07",
  "ssn": 51.5,
  "smoothed_ssn": 28.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1825-08",
  "ssn": 42.8,
  "smoothed_ssn": 29.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1825-09",
  "ssn": 26.2,
  "smoothed_ssn": 30.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1825-10",
  "ssn": 26,
  "smoothed_ssn": 33.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1825-11",
  "ssn": 19.6,
  "smoothed_ssn": 35.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1825-12",
  "ssn": 36.7,
  "smoothed_ssn": 38.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1826-01",
  "ssn": 29.4,
  "smoothed_ssn": 41.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1826-02",
  "ssn": 30.2,
  "smoothed_ssn": 43.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1826-03",
  "ssn": 61.3,
  "smoothed_ssn": 45.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1826-04",
  "ssn": 40,
  "smoothed_ssn": 47.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1826-05",
  "ssn": 53.9,
  "smoothed_ssn": 52.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1826-06",
  "ssn": 61.7,
  "smoothed_ssn": 57.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1826-07",
  "ssn": 87.5,
  "smoothed_ssn": 61.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1826-08",
  "ssn": 66,
  "smoothed_ssn": 64.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1826-09",
  "ssn": 31.6,
  "smoothed_ssn": 68.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1826-10",
  "ssn": 84.4,
  "smoothed_ssn": 71.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1826-11",
  "ssn": 65.8,
  "smoothed_ssn": 74.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1826-12",
  "ssn": 113.6,
  "smoothed_ssn": 77.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1827-01",
  "ssn": 57.7,
  "smoothed_ssn": 78.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1827-02",
  "ssn": 79,
  "smoothed_ssn": 78.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1827-03",
  "ssn": 96.3,
  "smoothed_ssn": 81.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1827-04",
  "ssn": 76.7,
  "smoothed_ssn": 84.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1827-05",
  "ssn": 93.8,
  "smoothed_ssn": 85,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1827-06",
  "ssn": 94.4,
  "smoothed_ssn": 84.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1827-07",
  "ssn": 70.4,
  "smoothed_ssn": 83.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1827-08",
  "ssn": 89.4,
  "smoothed_ssn": 86.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1827-09",
  "ssn": 82.6,
  "smoothed_ssn": 88,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1827-10",
  "ssn": 93.5,
  "smoothed_ssn": 89.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1827-11",
  "ssn": 80.4,
  "smoothed_ssn": 92.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1827-12",
  "ssn": 76.8,
  "smoothed_ssn": 98,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1828-01",
  "ssn": 88,
  "smoothed_ssn": 101.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1828-02",
  "ssn": 107.3,
  "smoothed_ssn": 104.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1828-03",
  "ssn": 108.5,
  "smoothed_ssn": 105.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1828-04",
  "ssn": 101.9,
  "smoothed_ssn": 105.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1828-05",
  "ssn": 148.6,
  "smoothed_ssn": 106.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1828-06",
  "ssn": 163.4,
  "smoothed_ssn": 106.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1828-07",
  "ssn": 90.4,
  "smoothed_ssn": 106.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1828-08",
  "ssn": 127.3,
  "smoothed_ssn": 104.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1828-09",
  "ssn": 83.9,
  "smoothed_ssn": 104,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1828-10",
  "ssn": 91.1,
  "smoothed_ssn": 106.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1828-11",
  "ssn": 95,
  "smoothed_ssn": 107.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1828-12",
  "ssn": 78.1,
  "smoothed_ssn": 104.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1829-01",
  "ssn": 71.6,
  "smoothed_ssn": 105.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1829-02",
  "ssn": 82.3,
  "smoothed_ssn": 108,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1829-03",
  "ssn": 120.6,
  "smoothed_ssn": 108.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1829-04",
  "ssn": 158.4,
  "smoothed_ssn": 108.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1829-05",
  "ssn": 112.3,
  "smoothed_ssn": 109.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1829-06",
  "ssn": 123.2,
  "smoothed_ssn": 110.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1829-07",
  "ssn": 151.5,
  "smoothed_ssn": 112.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1829-08",
  "ssn": 129.3,
  "smoothed_ssn": 114.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1829-09",
  "ssn": 88,
  "smoothed_ssn": 116.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1829-10",
  "ssn": 95.3,
  "smoothed_ssn": 118.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1829-11",
  "ssn": 112.7,
  "smoothed_ssn": 119.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1829-12",
  "ssn": 94.1,
  "smoothed_ssn": 118.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1830-01",
  "ssn": 87,
  "smoothed_ssn": 114.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1830-02",
  "ssn": 120.1,
  "smoothed_ssn": 109.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1830-03",
  "ssn": 141,
  "smoothed_ssn": 108.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1830-04",
  "ssn": 177.3,
  "smoothed_ssn": 110.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1830-05",
  "ssn": 110.5,
  "smoothed_ssn": 113.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1830-06",
  "ssn": 108.4,
  "smoothed_ssn": 116.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1830-07",
  "ssn": 73.2,
  "smoothed_ssn": 117.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1830-08",
  "ssn": 84.6,
  "smoothed_ssn": 116,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1830-09",
  "ssn": 103.4,
  "smoothed_ssn": 115.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1830-10",
  "ssn": 140.6,
  "smoothed_ssn": 112.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1830-11",
  "ssn": 135.4,
  "smoothed_ssn": 106.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1830-12",
  "ssn": 136.8,
  "smoothed_ssn": 102.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1831-01",
  "ssn": 79,
  "smoothed_ssn": 100.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1831-02",
  "ssn": 83.6,
  "smoothed_ssn": 100.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1831-03",
  "ssn": 155.8,
  "smoothed_ssn": 99.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1831-04",
  "ssn": 90.9,
  "smoothed_ssn": 95,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1831-05",
  "ssn": 63.4,
  "smoothed_ssn": 89.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1831-06",
  "ssn": 55.6,
  "smoothed_ssn": 83.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1831-07",
  "ssn": 75.4,
  "smoothed_ssn": 78.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1831-08",
  "ssn": 91.6,
  "smoothed_ssn": 77.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1831-09",
  "ssn": 63.2,
  "smoothed_ssn": 75.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1831-10",
  "ssn": 77.1,
  "smoothed_ssn": 70.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1831-11",
  "ssn": 72.5,
  "smoothed_ssn": 69.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1831-12",
  "ssn": 48.3,
  "smoothed_ssn": 69,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1832-01",
  "ssn": 51.5,
  "smoothed_ssn": 66.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1832-02",
  "ssn": 92.6,
  "smoothed_ssn": 61,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1832-03",
  "ssn": 91.9,
  "smoothed_ssn": 55.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1832-04",
  "ssn": 44.8,
  "smoothed_ssn": 51.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1832-05",
  "ssn": 68.9,
  "smoothed_ssn": 48.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1832-06",
  "ssn": 44.5,
  "smoothed_ssn": 46,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1832-07",
  "ssn": 23.3,
  "smoothed_ssn": 44.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1832-08",
  "ssn": 14.8,
  "smoothed_ssn": 40.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1832-09",
  "ssn": 13.7,
  "smoothed_ssn": 34.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1832-10",
  "ssn": 35.2,
  "smoothed_ssn": 29.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1832-11",
  "ssn": 23.8,
  "smoothed_ssn": 26.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1832-12",
  "ssn": 45.8,
  "smoothed_ssn": 22.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1833-01",
  "ssn": 18.7,
  "smoothed_ssn": 20.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1833-02",
  "ssn": 24.9,
  "smoothed_ssn": 19.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1833-03",
  "ssn": 19.6,
  "smoothed_ssn": 19.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1833-04",
  "ssn": 4.6,
  "smoothed_ssn": 18.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1833-05",
  "ssn": 21.5,
  "smoothed_ssn": 17.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1833-06",
  "ssn": 1.7,
  "smoothed_ssn": 15.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1833-07",
  "ssn": 11.6,
  "smoothed_ssn": 13.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1833-08",
  "ssn": 9.5,
  "smoothed_ssn": 13.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1833-09",
  "ssn": 19.3,
  "smoothed_ssn": 13.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1833-10",
  "ssn": 12.5,
  "smoothed_ssn": 12.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1833-11",
  "ssn": 9.8,
  "smoothed_ssn": 12.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1833-12",
  "ssn": 16.6,
  "smoothed_ssn": 12.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1834-01",
  "ssn": 8.2,
  "smoothed_ssn": 13,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1834-02",
  "ssn": 30.1,
  "smoothed_ssn": 13,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1834-03",
  "ssn": 6.5,
  "smoothed_ssn": 12.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1834-04",
  "ssn": 2.4,
  "smoothed_ssn": 14.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1834-05",
  "ssn": 14.8,
  "smoothed_ssn": 17,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1834-06",
  "ssn": 13.1,
  "smoothed_ssn": 20.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1834-07",
  "ssn": 14.4,
  "smoothed_ssn": 22.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1834-08",
  "ssn": 6.6,
  "smoothed_ssn": 22.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1834-09",
  "ssn": 19.2,
  "smoothed_ssn": 24.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1834-10",
  "ssn": 41.3,
  "smoothed_ssn": 29.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1834-11",
  "ssn": 50.9,
  "smoothed_ssn": 36.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1834-12",
  "ssn": 57.5,
  "smoothed_ssn": 40.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1835-01",
  "ssn": 12.4,
  "smoothed_ssn": 45.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1835-02",
  "ssn": 40.7,
  "smoothed_ssn": 53.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1835-03",
  "ssn": 32.7,
  "smoothed_ssn": 63.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1835-04",
  "ssn": 102.4,
  "smoothed_ssn": 74.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1835-05",
  "ssn": 72.6,
  "smoothed_ssn": 83.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1835-06",
  "ssn": 55.2,
  "smoothed_ssn": 91.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1835-07",
  "ssn": 99.6,
  "smoothed_ssn": 100.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1835-08",
  "ssn": 98.5,
  "smoothed_ssn": 111.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1835-09",
  "ssn": 168,
  "smoothed_ssn": 123,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1835-10",
  "ssn": 158.6,
  "smoothed_ssn": 134.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1835-11",
  "ssn": 166.7,
  "smoothed_ssn": 144.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1835-12",
  "ssn": 129.3,
  "smoothed_ssn": 155.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1836-01",
  "ssn": 147.6,
  "smoothed_ssn": 165.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1836-02",
  "ssn": 179.4,
  "smoothed_ssn": 173.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1836-03",
  "ssn": 163.7,
  "smoothed_ssn": 176.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1836-04",
  "ssn": 238,
  "smoothed_ssn": 178.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1836-05",
  "ssn": 185.7,
  "smoothed_ssn": 183.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1836-06",
  "ssn": 207.9,
  "smoothed_ssn": 193.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1836-07",
  "ssn": 194.6,
  "smoothed_ssn": 209.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1836-08",
  "ssn": 179.6,
  "smoothed_ssn": 221,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1836-09",
  "ssn": 158.5,
  "smoothed_ssn": 228.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1836-10",
  "ssn": 228.9,
  "smoothed_ssn": 230.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1836-11",
  "ssn": 201.5,
  "smoothed_ssn": 230.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1836-12",
  "ssn": 343.8,
  "smoothed_ssn": 232.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1837-01",
  "ssn": 313.4,
  "smoothed_ssn": 237.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1837-02",
  "ssn": 292.6,
  "smoothed_ssn": 243,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1837-03",
  "ssn": 224.3,
  "smoothed_ssn": 244.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1837-04",
  "ssn": 230.3,
  "smoothed_ssn": 244,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1837-05",
  "ssn": 186.1,
  "smoothed_ssn": 242.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1837-06",
  "ssn": 263.4,
  "smoothed_ssn": 235.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1837-07",
  "ssn": 271.2,
  "smoothed_ssn": 227.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1837-08",
  "ssn": 223.5,
  "smoothed_ssn": 218.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1837-09",
  "ssn": 160.4,
  "smoothed_ssn": 212.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1837-10",
  "ssn": 206.2,
  "smoothed_ssn": 211.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1837-11",
  "ssn": 178.4,
  "smoothed_ssn": 212.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1837-12",
  "ssn": 216.1,
  "smoothed_ssn": 210.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1838-01",
  "ssn": 241.5,
  "smoothed_ssn": 202.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1838-02",
  "ssn": 141.3,
  "smoothed_ssn": 194.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1838-03",
  "ssn": 234.5,
  "smoothed_ssn": 189.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1838-04",
  "ssn": 211.1,
  "smoothed_ssn": 185.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1838-05",
  "ssn": 229.4,
  "smoothed_ssn": 180.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1838-06",
  "ssn": 157.6,
  "smoothed_ssn": 175.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1838-07",
  "ssn": 180.4,
  "smoothed_ssn": 169.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1838-08",
  "ssn": 131.3,
  "smoothed_ssn": 167.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1838-09",
  "ssn": 122.7,
  "smoothed_ssn": 164.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1838-10",
  "ssn": 151.5,
  "smoothed_ssn": 155.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1838-11",
  "ssn": 129.2,
  "smoothed_ssn": 145.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1838-12",
  "ssn": 132.9,
  "smoothed_ssn": 136.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1839-01",
  "ssn": 175.9,
  "smoothed_ssn": 132.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1839-02",
  "ssn": 170.8,
  "smoothed_ssn": 134.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1839-03",
  "ssn": 129.5,
  "smoothed_ssn": 142.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1839-04",
  "ssn": 102.9,
  "smoothed_ssn": 146.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1839-05",
  "ssn": 89.6,
  "smoothed_ssn": 145.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1839-06",
  "ssn": 91.2,
  "smoothed_ssn": 143.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1839-07",
  "ssn": 141.3,
  "smoothed_ssn": 141.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1839-08",
  "ssn": 218.8,
  "smoothed_ssn": 138.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1839-09",
  "ssn": 221.1,
  "smoothed_ssn": 136.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1839-10",
  "ssn": 151.5,
  "smoothed_ssn": 136.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1839-11",
  "ssn": 114.7,
  "smoothed_ssn": 137.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1839-12",
  "ssn": 106.2,
  "smoothed_ssn": 138.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1840-01",
  "ssn": 135.4,
  "smoothed_ssn": 136.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1840-02",
  "ssn": 146.1,
  "smoothed_ssn": 129.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1840-03",
  "ssn": 112.9,
  "smoothed_ssn": 120.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1840-04",
  "ssn": 109.8,
  "smoothed_ssn": 113.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1840-05",
  "ssn": 115.4,
  "smoothed_ssn": 110.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1840-06",
  "ssn": 80.9,
  "smoothed_ssn": 108.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1840-07",
  "ssn": 101,
  "smoothed_ssn": 103.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1840-08",
  "ssn": 96.4,
  "smoothed_ssn": 95.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1840-09",
  "ssn": 123.3,
  "smoothed_ssn": 89.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1840-10",
  "ssn": 91.7,
  "smoothed_ssn": 84.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1840-11",
  "ssn": 90.4,
  "smoothed_ssn": 82.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1840-12",
  "ssn": 89.5,
  "smoothed_ssn": 83.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1841-01",
  "ssn": 40.1,
  "smoothed_ssn": 81.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1841-02",
  "ssn": 49.9,
  "smoothed_ssn": 78.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1841-03",
  "ssn": 49.6,
  "smoothed_ssn": 74.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1841-04",
  "ssn": 66.9,
  "smoothed_ssn": 69.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1841-05",
  "ssn": 112.4,
  "smoothed_ssn": 65.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1841-06",
  "ssn": 92.8,
  "smoothed_ssn": 62.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1841-07",
  "ssn": 51.4,
  "smoothed_ssn": 61,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1841-08",
  "ssn": 65.4,
  "smoothed_ssn": 60.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1841-09",
  "ssn": 60.9,
  "smoothed_ssn": 59,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1841-10",
  "ssn": 47.4,
  "smoothed_ssn": 57.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1841-11",
  "ssn": 32.9,
  "smoothed_ssn": 53.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1841-12",
  "ssn": 64.8,
  "smoothed_ssn": 48.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1842-01",
  "ssn": 34,
  "smoothed_ssn": 44.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1842-02",
  "ssn": 36.8,
  "smoothed_ssn": 42.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1842-03",
  "ssn": 36.2,
  "smoothed_ssn": 40.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1842-04",
  "ssn": 44.9,
  "smoothed_ssn": 39.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1842-05",
  "ssn": 41.4,
  "smoothed_ssn": 41.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1842-06",
  "ssn": 34.2,
  "smoothed_ssn": 41.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1842-07",
  "ssn": 21,
  "smoothed_ssn": 39.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1842-08",
  "ssn": 44.4,
  "smoothed_ssn": 38,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1842-09",
  "ssn": 30.6,
  "smoothed_ssn": 35.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1842-10",
  "ssn": 63.5,
  "smoothed_ssn": 33.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1842-11",
  "ssn": 67.5,
  "smoothed_ssn": 32.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1842-12",
  "ssn": 29.3,
  "smoothed_ssn": 31.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1843-01",
  "ssn": 22.2,
  "smoothed_ssn": 30.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1843-02",
  "ssn": 5.9,
  "smoothed_ssn": 29.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1843-03",
  "ssn": 13.9,
  "smoothed_ssn": 27.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1843-04",
  "ssn": 15.8,
  "smoothed_ssn": 23.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1843-05",
  "ssn": 35.1,
  "smoothed_ssn": 20.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1843-06",
  "ssn": 17.6,
  "smoothed_ssn": 18.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1843-07",
  "ssn": 15.9,
  "smoothed_ssn": 17.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1843-08",
  "ssn": 19.6,
  "smoothed_ssn": 18.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1843-09",
  "ssn": 6.9,
  "smoothed_ssn": 19.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1843-10",
  "ssn": 8.9,
  "smoothed_ssn": 20.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1843-11",
  "ssn": 31.7,
  "smoothed_ssn": 20.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1843-12",
  "ssn": 21.2,
  "smoothed_ssn": 19.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1844-01",
  "ssn": 15.7,
  "smoothed_ssn": 19.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1844-02",
  "ssn": 24.5,
  "smoothed_ssn": 21.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1844-03",
  "ssn": 22.5,
  "smoothed_ssn": 22.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1844-04",
  "ssn": 34.6,
  "smoothed_ssn": 23.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1844-05",
  "ssn": 19.2,
  "smoothed_ssn": 24.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1844-06",
  "ssn": 6.2,
  "smoothed_ssn": 24.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1844-07",
  "ssn": 35.2,
  "smoothed_ssn": 26,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1844-08",
  "ssn": 39.7,
  "smoothed_ssn": 29.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1844-09",
  "ssn": 11.6,
  "smoothed_ssn": 33.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1844-10",
  "ssn": 35.9,
  "smoothed_ssn": 37.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1844-11",
  "ssn": 17.9,
  "smoothed_ssn": 42.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1844-12",
  "ssn": 36,
  "smoothed_ssn": 47.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1845-01",
  "ssn": 42.8,
  "smoothed_ssn": 49.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1845-02",
  "ssn": 72.8,
  "smoothed_ssn": 51.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1845-03",
  "ssn": 72.1,
  "smoothed_ssn": 53.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1845-04",
  "ssn": 95,
  "smoothed_ssn": 56.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1845-05",
  "ssn": 79.7,
  "smoothed_ssn": 59.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1845-06",
  "ssn": 51.8,
  "smoothed_ssn": 64.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1845-07",
  "ssn": 51,
  "smoothed_ssn": 67.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1845-08",
  "ssn": 53.9,
  "smoothed_ssn": 69.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1845-09",
  "ssn": 49.3,
  "smoothed_ssn": 71,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1845-10",
  "ssn": 67.8,
  "smoothed_ssn": 73.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1845-11",
  "ssn": 65.7,
  "smoothed_ssn": 75,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1845-12",
  "ssn": 99.5,
  "smoothed_ssn": 78.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1846-01",
  "ssn": 64.6,
  "smoothed_ssn": 81.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1846-02",
  "ssn": 84.9,
  "smoothed_ssn": 84.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1846-03",
  "ssn": 106.5,
  "smoothed_ssn": 91.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1846-04",
  "ssn": 115.5,
  "smoothed_ssn": 97.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1846-05",
  "ssn": 99.9,
  "smoothed_ssn": 100.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1846-06",
  "ssn": 108.4,
  "smoothed_ssn": 102.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1846-07",
  "ssn": 77.5,
  "smoothed_ssn": 104.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1846-08",
  "ssn": 91.3,
  "smoothed_ssn": 105.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1846-09",
  "ssn": 178.6,
  "smoothed_ssn": 106.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1846-10",
  "ssn": 93.4,
  "smoothed_ssn": 106.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1846-11",
  "ssn": 100.6,
  "smoothed_ssn": 105.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1846-12",
  "ssn": 109.1,
  "smoothed_ssn": 108.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1847-01",
  "ssn": 104.4,
  "smoothed_ssn": 110,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1847-02",
  "ssn": 74.9,
  "smoothed_ssn": 116.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1847-03",
  "ssn": 143,
  "smoothed_ssn": 126.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1847-04",
  "ssn": 74.6,
  "smoothed_ssn": 138.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1847-05",
  "ssn": 125.7,
  "smoothed_ssn": 152.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1847-06",
  "ssn": 142.2,
  "smoothed_ssn": 161,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1847-07",
  "ssn": 87.1,
  "smoothed_ssn": 170.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1847-08",
  "ssn": 234.3,
  "smoothed_ssn": 182.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1847-09",
  "ssn": 268.2,
  "smoothed_ssn": 188.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1847-10",
  "ssn": 300.6,
  "smoothed_ssn": 194.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1847-11",
  "ssn": 231.5,
  "smoothed_ssn": 200.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1847-12",
  "ssn": 182.6,
  "smoothed_ssn": 205.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1848-01",
  "ssn": 265.2,
  "smoothed_ssn": 214.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1848-02",
  "ssn": 186.4,
  "smoothed_ssn": 219.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1848-03",
  "ssn": 181.2,
  "smoothed_ssn": 215.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1848-04",
  "ssn": 178.6,
  "smoothed_ssn": 207.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1848-05",
  "ssn": 170.5,
  "smoothed_ssn": 202.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1848-06",
  "ssn": 214.9,
  "smoothed_ssn": 204.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1848-07",
  "ssn": 232,
  "smoothed_ssn": 209.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1848-08",
  "ssn": 220.9,
  "smoothed_ssn": 213.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1848-09",
  "ssn": 167.3,
  "smoothed_ssn": 216,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1848-10",
  "ssn": 220.6,
  "smoothed_ssn": 216.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1848-11",
  "ssn": 191,
  "smoothed_ssn": 216.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1848-12",
  "ssn": 265.8,
  "smoothed_ssn": 213.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1849-01",
  "ssn": 298.3,
  "smoothed_ssn": 207.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1849-02",
  "ssn": 250.3,
  "smoothed_ssn": 200.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1849-03",
  "ssn": 182.7,
  "smoothed_ssn": 196.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1849-04",
  "ssn": 194.7,
  "smoothed_ssn": 193.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1849-05",
  "ssn": 153.2,
  "smoothed_ssn": 189.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1849-06",
  "ssn": 154.2,
  "smoothed_ssn": 186.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1849-07",
  "ssn": 148.2,
  "smoothed_ssn": 176.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1849-08",
  "ssn": 128.6,
  "smoothed_ssn": 167.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1849-09",
  "ssn": 178,
  "smoothed_ssn": 162.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1849-10",
  "ssn": 135.7,
  "smoothed_ssn": 157,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1849-11",
  "ssn": 188.2,
  "smoothed_ssn": 150.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1849-12",
  "ssn": 184.3,
  "smoothed_ssn": 148.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1850-01",
  "ssn": 148.2,
  "smoothed_ssn": 144.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1850-02",
  "ssn": 169.8,
  "smoothed_ssn": 141,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1850-03",
  "ssn": 156.8,
  "smoothed_ssn": 139.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1850-04",
  "ssn": 83.8,
  "smoothed_ssn": 139.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1850-05",
  "ssn": 117,
  "smoothed_ssn": 135.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1850-06",
  "ssn": 133,
  "smoothed_ssn": 129.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1850-07",
  "ssn": 74.3,
  "smoothed_ssn": 126.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1850-08",
  "ssn": 117,
  "smoothed_ssn": 127.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1850-09",
  "ssn": 163.7,
  "smoothed_ssn": 127.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1850-10",
  "ssn": 134.9,
  "smoothed_ssn": 126.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1850-11",
  "ssn": 104.1,
  "smoothed_ssn": 127.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1850-12",
  "ssn": 115.9,
  "smoothed_ssn": 127.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1851-01",
  "ssn": 143.5,
  "smoothed_ssn": 126.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1851-02",
  "ssn": 200.1,
  "smoothed_ssn": 126.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1851-03",
  "ssn": 122.8,
  "smoothed_ssn": 124.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1851-04",
  "ssn": 107.3,
  "smoothed_ssn": 122.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1851-05",
  "ssn": 118.9,
  "smoothed_ssn": 121.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1851-06",
  "ssn": 120,
  "smoothed_ssn": 121.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1851-07",
  "ssn": 68.6,
  "smoothed_ssn": 121.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1851-08",
  "ssn": 109,
  "smoothed_ssn": 118.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1851-09",
  "ssn": 128.9,
  "smoothed_ssn": 114.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1851-10",
  "ssn": 118.7,
  "smoothed_ssn": 115.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1851-11",
  "ssn": 96.8,
  "smoothed_ssn": 115.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1851-12",
  "ssn": 135.5,
  "smoothed_ssn": 113.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1852-01",
  "ssn": 129.9,
  "smoothed_ssn": 112.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1852-02",
  "ssn": 126.2,
  "smoothed_ssn": 111.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1852-03",
  "ssn": 116.2,
  "smoothed_ssn": 108,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1852-04",
  "ssn": 124.3,
  "smoothed_ssn": 106,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1852-05",
  "ssn": 104.3,
  "smoothed_ssn": 106.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1852-06",
  "ssn": 89,
  "smoothed_ssn": 104.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1852-07",
  "ssn": 80,
  "smoothed_ssn": 100.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1852-08",
  "ssn": 75.3,
  "smoothed_ssn": 96.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1852-09",
  "ssn": 71.2,
  "smoothed_ssn": 92.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1852-10",
  "ssn": 127.9,
  "smoothed_ssn": 89.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1852-11",
  "ssn": 103.1,
  "smoothed_ssn": 86.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1852-12",
  "ssn": 86.1,
  "smoothed_ssn": 84.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1853-01",
  "ssn": 77.9,
  "smoothed_ssn": 84.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1853-02",
  "ssn": 81.5,
  "smoothed_ssn": 85.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1853-03",
  "ssn": 71.6,
  "smoothed_ssn": 85.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1853-04",
  "ssn": 90.4,
  "smoothed_ssn": 83.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1853-05",
  "ssn": 65.9,
  "smoothed_ssn": 79.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1853-06",
  "ssn": 76,
  "smoothed_ssn": 75.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1853-07",
  "ssn": 87.2,
  "smoothed_ssn": 72.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1853-08",
  "ssn": 95.8,
  "smoothed_ssn": 68.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1853-09",
  "ssn": 63.7,
  "smoothed_ssn": 65.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1853-10",
  "ssn": 80.5,
  "smoothed_ssn": 62.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1853-11",
  "ssn": 54.7,
  "smoothed_ssn": 59.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1853-12",
  "ssn": 44.5,
  "smoothed_ssn": 57.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1854-01",
  "ssn": 29.3,
  "smoothed_ssn": 53.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1854-02",
  "ssn": 38,
  "smoothed_ssn": 48.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1854-03",
  "ssn": 39.4,
  "smoothed_ssn": 45.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1854-04",
  "ssn": 50.3,
  "smoothed_ssn": 41.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1854-05",
  "ssn": 45.6,
  "smoothed_ssn": 39.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1854-06",
  "ssn": 40.1,
  "smoothed_ssn": 39.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1854-07",
  "ssn": 35.5,
  "smoothed_ssn": 38.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1854-08",
  "ssn": 30.1,
  "smoothed_ssn": 38,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1854-09",
  "ssn": 42.6,
  "smoothed_ssn": 37,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1854-10",
  "ssn": 24.1,
  "smoothed_ssn": 35,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1854-11",
  "ssn": 53.5,
  "smoothed_ssn": 32.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1854-12",
  "ssn": 41.1,
  "smoothed_ssn": 29.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1855-01",
  "ssn": 23.4,
  "smoothed_ssn": 26.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1855-02",
  "ssn": 21.6,
  "smoothed_ssn": 24.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1855-03",
  "ssn": 33,
  "smoothed_ssn": 21.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1855-04",
  "ssn": 8.4,
  "smoothed_ssn": 19.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1855-05",
  "ssn": 17.3,
  "smoothed_ssn": 17.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1855-06",
  "ssn": 10,
  "smoothed_ssn": 14.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1855-07",
  "ssn": 0.7,
  "smoothed_ssn": 11.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1855-08",
  "ssn": 5.9,
  "smoothed_ssn": 10.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1855-09",
  "ssn": 0,
  "smoothed_ssn": 8.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1855-10",
  "ssn": 18.3,
  "smoothed_ssn": 7.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1855-11",
  "ssn": 7.9,
  "smoothed_ssn": 6.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1855-12",
  "ssn": 5.8,
  "smoothed_ssn": 6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1856-01",
  "ssn": 1,
  "smoothed_ssn": 6.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1856-02",
  "ssn": 9.3,
  "smoothed_ssn": 6.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1856-03",
  "ssn": 0.7,
  "smoothed_ssn": 7.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1856-04",
  "ssn": 12.4,
  "smoothed_ssn": 7.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1856-05",
  "ssn": 0,
  "smoothed_ssn": 7.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1856-06",
  "ssn": 9.8,
  "smoothed_ssn": 7.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1856-07",
  "ssn": 8.8,
  "smoothed_ssn": 9.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1856-08",
  "ssn": 11.3,
  "smoothed_ssn": 10.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1856-09",
  "ssn": 8.4,
  "smoothed_ssn": 11.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1856-10",
  "ssn": 8.5,
  "smoothed_ssn": 11.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1856-11",
  "ssn": 14.7,
  "smoothed_ssn": 14.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1856-12",
  "ssn": 13.7,
  "smoothed_ssn": 17.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1857-01",
  "ssn": 26,
  "smoothed_ssn": 19.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1857-02",
  "ssn": 14.2,
  "smoothed_ssn": 22.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1857-03",
  "ssn": 10,
  "smoothed_ssn": 26,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1857-04",
  "ssn": 21.1,
  "smoothed_ssn": 31.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1857-05",
  "ssn": 54.2,
  "smoothed_ssn": 36.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1857-06",
  "ssn": 30.5,
  "smoothed_ssn": 40.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1857-07",
  "ssn": 42.2,
  "smoothed_ssn": 45.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1857-08",
  "ssn": 32,
  "smoothed_ssn": 49.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1857-09",
  "ssn": 80.6,
  "smoothed_ssn": 55.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1857-10",
  "ssn": 77.1,
  "smoothed_ssn": 62,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1857-11",
  "ssn": 59.6,
  "smoothed_ssn": 65.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1857-12",
  "ssn": 70.7,
  "smoothed_ssn": 68.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1858-01",
  "ssn": 74.2,
  "smoothed_ssn": 73.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1858-02",
  "ssn": 66.3,
  "smoothed_ssn": 79.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1858-03",
  "ssn": 109.2,
  "smoothed_ssn": 85.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1858-04",
  "ssn": 72.8,
  "smoothed_ssn": 92.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1858-05",
  "ssn": 78.6,
  "smoothed_ssn": 97.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1858-06",
  "ssn": 84.5,
  "smoothed_ssn": 101.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1858-07",
  "ssn": 107.7,
  "smoothed_ssn": 107.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1858-08",
  "ssn": 104.9,
  "smoothed_ssn": 115.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1858-09",
  "ssn": 152.2,
  "smoothed_ssn": 122.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1858-10",
  "ssn": 173.2,
  "smoothed_ssn": 128.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1858-11",
  "ssn": 98.6,
  "smoothed_ssn": 136.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1858-12",
  "ssn": 127,
  "smoothed_ssn": 143.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1859-01",
  "ssn": 159,
  "smoothed_ssn": 149.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1859-02",
  "ssn": 166.4,
  "smoothed_ssn": 157,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1859-03",
  "ssn": 171.5,
  "smoothed_ssn": 163.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1859-04",
  "ssn": 162.9,
  "smoothed_ssn": 167,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1859-05",
  "ssn": 172.8,
  "smoothed_ssn": 172.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1859-06",
  "ssn": 165.2,
  "smoothed_ssn": 177.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1859-07",
  "ssn": 180.7,
  "smoothed_ssn": 178.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1859-08",
  "ssn": 203,
  "smoothed_ssn": 178.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1859-09",
  "ssn": 200.9,
  "smoothed_ssn": 178.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1859-10",
  "ssn": 217.8,
  "smoothed_ssn": 178.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1859-11",
  "ssn": 184.6,
  "smoothed_ssn": 178.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1859-12",
  "ssn": 153.9,
  "smoothed_ssn": 181.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1860-01",
  "ssn": 156.6,
  "smoothed_ssn": 185,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1860-02",
  "ssn": 167.9,
  "smoothed_ssn": 186.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1860-03",
  "ssn": 188,
  "smoothed_ssn": 184.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1860-04",
  "ssn": 135.7,
  "smoothed_ssn": 181.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1860-05",
  "ssn": 203.5,
  "smoothed_ssn": 179.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1860-06",
  "ssn": 206.3,
  "smoothed_ssn": 180.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1860-07",
  "ssn": 221.9,
  "smoothed_ssn": 180.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1860-08",
  "ssn": 190.5,
  "smoothed_ssn": 178,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1860-09",
  "ssn": 175.2,
  "smoothed_ssn": 177.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1860-10",
  "ssn": 171.1,
  "smoothed_ssn": 179.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1860-11",
  "ssn": 186,
  "smoothed_ssn": 177.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1860-12",
  "ssn": 181.7,
  "smoothed_ssn": 172.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1861-01",
  "ssn": 118.5,
  "smoothed_ssn": 167.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1861-02",
  "ssn": 147.5,
  "smoothed_ssn": 163,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1861-03",
  "ssn": 192,
  "smoothed_ssn": 160.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1861-04",
  "ssn": 187.1,
  "smoothed_ssn": 157.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1861-05",
  "ssn": 107.8,
  "smoothed_ssn": 152.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1861-06",
  "ssn": 167.5,
  "smoothed_ssn": 147.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1861-07",
  "ssn": 148.2,
  "smoothed_ssn": 146.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1861-08",
  "ssn": 156.7,
  "smoothed_ssn": 145.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1861-09",
  "ssn": 151.9,
  "smoothed_ssn": 140.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1861-10",
  "ssn": 127.7,
  "smoothed_ssn": 132,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1861-11",
  "ssn": 102,
  "smoothed_ssn": 129.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1861-12",
  "ssn": 152.8,
  "smoothed_ssn": 129.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1862-01",
  "ssn": 119.9,
  "smoothed_ssn": 128.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1862-02",
  "ssn": 122.4,
  "smoothed_ssn": 126.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1862-03",
  "ssn": 82.7,
  "smoothed_ssn": 124.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1862-04",
  "ssn": 102.1,
  "smoothed_ssn": 121,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1862-05",
  "ssn": 122.4,
  "smoothed_ssn": 118.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1862-06",
  "ssn": 159.7,
  "smoothed_ssn": 115.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1862-07",
  "ssn": 139.5,
  "smoothed_ssn": 111.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1862-08",
  "ssn": 118.7,
  "smoothed_ssn": 109.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1862-09",
  "ssn": 126.4,
  "smoothed_ssn": 110.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1862-10",
  "ssn": 79.8,
  "smoothed_ssn": 111.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1862-11",
  "ssn": 96,
  "smoothed_ssn": 109.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1862-12",
  "ssn": 77.6,
  "smoothed_ssn": 105.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1863-01",
  "ssn": 91.8,
  "smoothed_ssn": 98.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1863-02",
  "ssn": 107.7,
  "smoothed_ssn": 94.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1863-03",
  "ssn": 126,
  "smoothed_ssn": 89.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1863-04",
  "ssn": 77.1,
  "smoothed_ssn": 85.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1863-05",
  "ssn": 102.1,
  "smoothed_ssn": 84.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1863-06",
  "ssn": 77.6,
  "smoothed_ssn": 83.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1863-07",
  "ssn": 62,
  "smoothed_ssn": 84.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1863-08",
  "ssn": 91.3,
  "smoothed_ssn": 84.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1863-09",
  "ssn": 41.7,
  "smoothed_ssn": 83.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1863-10",
  "ssn": 75.7,
  "smoothed_ssn": 83.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1863-11",
  "ssn": 71.6,
  "smoothed_ssn": 81.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1863-12",
  "ssn": 78.1,
  "smoothed_ssn": 82,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1864-01",
  "ssn": 109.7,
  "smoothed_ssn": 85.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1864-02",
  "ssn": 89.5,
  "smoothed_ssn": 87.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1864-03",
  "ssn": 125.9,
  "smoothed_ssn": 88.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1864-04",
  "ssn": 68.1,
  "smoothed_ssn": 88.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1864-05",
  "ssn": 77.1,
  "smoothed_ssn": 89.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1864-06",
  "ssn": 109.9,
  "smoothed_ssn": 90.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1864-07",
  "ssn": 103.8,
  "smoothed_ssn": 88.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1864-08",
  "ssn": 104.1,
  "smoothed_ssn": 87.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1864-09",
  "ssn": 54.2,
  "smoothed_ssn": 84.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1864-10",
  "ssn": 64.4,
  "smoothed_ssn": 81.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1864-11",
  "ssn": 109.3,
  "smoothed_ssn": 80.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1864-12",
  "ssn": 54.3,
  "smoothed_ssn": 78.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1865-01",
  "ssn": 92.5,
  "smoothed_ssn": 74.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1865-02",
  "ssn": 74.6,
  "smoothed_ssn": 70.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1865-03",
  "ssn": 75,
  "smoothed_ssn": 68.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1865-04",
  "ssn": 55.9,
  "smoothed_ssn": 66.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1865-05",
  "ssn": 65.6,
  "smoothed_ssn": 63,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1865-06",
  "ssn": 63.8,
  "smoothed_ssn": 59.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1865-07",
  "ssn": 50.8,
  "smoothed_ssn": 56.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1865-08",
  "ssn": 71.8,
  "smoothed_ssn": 55.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1865-09",
  "ssn": 41,
  "smoothed_ssn": 53.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1865-10",
  "ssn": 32.5,
  "smoothed_ssn": 51.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1865-11",
  "ssn": 46.7,
  "smoothed_ssn": 49.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1865-12",
  "ssn": 24.3,
  "smoothed_ssn": 46,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1866-01",
  "ssn": 60,
  "smoothed_ssn": 43.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1866-02",
  "ssn": 72.9,
  "smoothed_ssn": 39.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1866-03",
  "ssn": 46.6,
  "smoothed_ssn": 36.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1866-04",
  "ssn": 33.5,
  "smoothed_ssn": 35.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1866-05",
  "ssn": 24.6,
  "smoothed_ssn": 34,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1866-06",
  "ssn": 31.4,
  "smoothed_ssn": 31.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1866-07",
  "ssn": 17.6,
  "smoothed_ssn": 28.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1866-08",
  "ssn": 24.2,
  "smoothed_ssn": 23,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1866-09",
  "ssn": 13.9,
  "smoothed_ssn": 18.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1866-10",
  "ssn": 26.8,
  "smoothed_ssn": 16.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1866-11",
  "ssn": 17.2,
  "smoothed_ssn": 14.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1866-12",
  "ssn": 2.9,
  "smoothed_ssn": 12.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1867-01",
  "ssn": 0,
  "smoothed_ssn": 11.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1867-02",
  "ssn": 1.4,
  "smoothed_ssn": 10.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1867-03",
  "ssn": 17.4,
  "smoothed_ssn": 9.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1867-04",
  "ssn": 9.7,
  "smoothed_ssn": 10,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1867-05",
  "ssn": 5.5,
  "smoothed_ssn": 10,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1867-06",
  "ssn": 2.8,
  "smoothed_ssn": 11.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1867-07",
  "ssn": 9.5,
  "smoothed_ssn": 14.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1867-08",
  "ssn": 9.1,
  "smoothed_ssn": 17,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1867-09",
  "ssn": 18.7,
  "smoothed_ssn": 19.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1867-10",
  "ssn": 25.5,
  "smoothed_ssn": 22.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1867-11",
  "ssn": 18.1,
  "smoothed_ssn": 26.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1867-12",
  "ssn": 47.9,
  "smoothed_ssn": 29.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1868-01",
  "ssn": 25.9,
  "smoothed_ssn": 33.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1868-02",
  "ssn": 26.3,
  "smoothed_ssn": 37.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1868-03",
  "ssn": 44,
  "smoothed_ssn": 41.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1868-04",
  "ssn": 61.1,
  "smoothed_ssn": 47.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1868-05",
  "ssn": 44.5,
  "smoothed_ssn": 53.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1868-06",
  "ssn": 51.8,
  "smoothed_ssn": 60,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1868-07",
  "ssn": 48.3,
  "smoothed_ssn": 65.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1868-08",
  "ssn": 57.3,
  "smoothed_ssn": 72.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1868-09",
  "ssn": 78.7,
  "smoothed_ssn": 77,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1868-10",
  "ssn": 102.8,
  "smoothed_ssn": 79.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1868-11",
  "ssn": 98.7,
  "smoothed_ssn": 84.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1868-12",
  "ssn": 112.8,
  "smoothed_ssn": 95.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1869-01",
  "ssn": 101.6,
  "smoothed_ssn": 103,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1869-02",
  "ssn": 99.9,
  "smoothed_ssn": 108.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1869-03",
  "ssn": 88,
  "smoothed_ssn": 113.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1869-04",
  "ssn": 68.4,
  "smoothed_ssn": 115.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1869-05",
  "ssn": 173.4,
  "smoothed_ssn": 117,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1869-06",
  "ssn": 180.7,
  "smoothed_ssn": 120.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1869-07",
  "ssn": 98.8,
  "smoothed_ssn": 124.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1869-08",
  "ssn": 132.7,
  "smoothed_ssn": 129.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1869-09",
  "ssn": 134.5,
  "smoothed_ssn": 140.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1869-10",
  "ssn": 99,
  "smoothed_ssn": 156.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1869-11",
  "ssn": 130.2,
  "smoothed_ssn": 169.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1869-12",
  "ssn": 174.1,
  "smoothed_ssn": 176.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1870-01",
  "ssn": 129,
  "smoothed_ssn": 183.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1870-02",
  "ssn": 191.7,
  "smoothed_ssn": 193.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1870-03",
  "ssn": 262.7,
  "smoothed_ssn": 202.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1870-04",
  "ssn": 266.9,
  "smoothed_ssn": 212.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1870-05",
  "ssn": 293.6,
  "smoothed_ssn": 223.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1870-06",
  "ssn": 226.3,
  "smoothed_ssn": 230,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1870-07",
  "ssn": 220.9,
  "smoothed_ssn": 232.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1870-08",
  "ssn": 256.5,
  "smoothed_ssn": 234,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1870-09",
  "ssn": 226.8,
  "smoothed_ssn": 233.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1870-10",
  "ssn": 244.3,
  "smoothed_ssn": 232.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1870-11",
  "ssn": 246,
  "smoothed_ssn": 231,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1870-12",
  "ssn": 216.7,
  "smoothed_ssn": 225.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1871-01",
  "ssn": 147.2,
  "smoothed_ssn": 220.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1871-02",
  "ssn": 209,
  "smoothed_ssn": 215.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1871-03",
  "ssn": 238.7,
  "smoothed_ssn": 208.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1871-04",
  "ssn": 270.9,
  "smoothed_ssn": 200.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1871-05",
  "ssn": 242.6,
  "smoothed_ssn": 193.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1871-06",
  "ssn": 152.9,
  "smoothed_ssn": 188.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1871-07",
  "ssn": 171.8,
  "smoothed_ssn": 184.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1871-08",
  "ssn": 183.7,
  "smoothed_ssn": 183.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1871-09",
  "ssn": 133.9,
  "smoothed_ssn": 179.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1871-10",
  "ssn": 148.5,
  "smoothed_ssn": 171.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1871-11",
  "ssn": 175.7,
  "smoothed_ssn": 164.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1871-12",
  "ssn": 150.8,
  "smoothed_ssn": 163.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1872-01",
  "ssn": 132.7,
  "smoothed_ssn": 165,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1872-02",
  "ssn": 200.3,
  "smoothed_ssn": 164,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1872-03",
  "ssn": 147.5,
  "smoothed_ssn": 165.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1872-04",
  "ssn": 170.4,
  "smoothed_ssn": 168.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1872-05",
  "ssn": 179.5,
  "smoothed_ssn": 169.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1872-06",
  "ssn": 183.3,
  "smoothed_ssn": 169.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1872-07",
  "ssn": 176,
  "smoothed_ssn": 170,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1872-08",
  "ssn": 155,
  "smoothed_ssn": 169.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1872-09",
  "ssn": 191.1,
  "smoothed_ssn": 169.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1872-10",
  "ssn": 171.2,
  "smoothed_ssn": 168.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1872-11",
  "ssn": 186.8,
  "smoothed_ssn": 162.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1872-12",
  "ssn": 139.9,
  "smoothed_ssn": 153.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1873-01",
  "ssn": 144.6,
  "smoothed_ssn": 146.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1873-02",
  "ssn": 178.4,
  "smoothed_ssn": 142,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1873-03",
  "ssn": 164,
  "smoothed_ssn": 135.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1873-04",
  "ssn": 127.1,
  "smoothed_ssn": 127.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1873-05",
  "ssn": 80,
  "smoothed_ssn": 119.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1873-06",
  "ssn": 74.8,
  "smoothed_ssn": 112.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1873-07",
  "ssn": 111.7,
  "smoothed_ssn": 108.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1873-08",
  "ssn": 113.8,
  "smoothed_ssn": 103.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1873-09",
  "ssn": 78.7,
  "smoothed_ssn": 97.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1873-10",
  "ssn": 78.6,
  "smoothed_ssn": 90.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1873-11",
  "ssn": 92.5,
  "smoothed_ssn": 87.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1873-12",
  "ssn": 82,
  "smoothed_ssn": 86.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1874-01",
  "ssn": 101.4,
  "smoothed_ssn": 86.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1874-02",
  "ssn": 107.1,
  "smoothed_ssn": 85.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1874-03",
  "ssn": 77.5,
  "smoothed_ssn": 84.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1874-04",
  "ssn": 53.5,
  "smoothed_ssn": 81.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1874-05",
  "ssn": 74.6,
  "smoothed_ssn": 79.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1874-06",
  "ssn": 63.8,
  "smoothed_ssn": 75.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1874-07",
  "ssn": 113.2,
  "smoothed_ssn": 71.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1874-08",
  "ssn": 102.3,
  "smoothed_ssn": 65.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1874-09",
  "ssn": 46.8,
  "smoothed_ssn": 61.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1874-10",
  "ssn": 57.4,
  "smoothed_ssn": 60.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1874-11",
  "ssn": 48.2,
  "smoothed_ssn": 57.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1874-12",
  "ssn": 48.8,
  "smoothed_ssn": 54.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1875-01",
  "ssn": 24.4,
  "smoothed_ssn": 49.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1875-02",
  "ssn": 35.9,
  "smoothed_ssn": 42.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1875-03",
  "ssn": 56.4,
  "smoothed_ssn": 37.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1875-04",
  "ssn": 48.6,
  "smoothed_ssn": 34.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1875-05",
  "ssn": 19.2,
  "smoothed_ssn": 31.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1875-06",
  "ssn": 39.9,
  "smoothed_ssn": 29.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1875-07",
  "ssn": 20.9,
  "smoothed_ssn": 28.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1875-08",
  "ssn": 24.4,
  "smoothed_ssn": 27.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1875-09",
  "ssn": 4,
  "smoothed_ssn": 27.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1875-10",
  "ssn": 21.3,
  "smoothed_ssn": 25.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1875-11",
  "ssn": 29.6,
  "smoothed_ssn": 22.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1875-12",
  "ssn": 16.5,
  "smoothed_ssn": 20.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1876-01",
  "ssn": 23.9,
  "smoothed_ssn": 19.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1876-02",
  "ssn": 25.1,
  "smoothed_ssn": 19.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1876-03",
  "ssn": 51.1,
  "smoothed_ssn": 19.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1876-04",
  "ssn": 3.9,
  "smoothed_ssn": 20.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1876-05",
  "ssn": 8.5,
  "smoothed_ssn": 19.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1876-06",
  "ssn": 2.7,
  "smoothed_ssn": 19,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1876-07",
  "ssn": 25.5,
  "smoothed_ssn": 19.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1876-08",
  "ssn": 14.8,
  "smoothed_ssn": 19.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1876-09",
  "ssn": 16.6,
  "smoothed_ssn": 18.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1876-10",
  "ssn": 23.9,
  "smoothed_ssn": 17.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1876-11",
  "ssn": 16.6,
  "smoothed_ssn": 19.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1876-12",
  "ssn": 13.6,
  "smoothed_ssn": 21.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1877-01",
  "ssn": 40.6,
  "smoothed_ssn": 22,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1877-02",
  "ssn": 14.5,
  "smoothed_ssn": 21.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1877-03",
  "ssn": 19.9,
  "smoothed_ssn": 21.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1877-04",
  "ssn": 26.3,
  "smoothed_ssn": 21.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1877-05",
  "ssn": 36.1,
  "smoothed_ssn": 21.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1877-06",
  "ssn": 23.6,
  "smoothed_ssn": 21.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1877-07",
  "ssn": 10,
  "smoothed_ssn": 19.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1877-08",
  "ssn": 10.5,
  "smoothed_ssn": 17.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1877-09",
  "ssn": 28.1,
  "smoothed_ssn": 17.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1877-10",
  "ssn": 11.2,
  "smoothed_ssn": 15.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1877-11",
  "ssn": 23.6,
  "smoothed_ssn": 13.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1877-12",
  "ssn": 3.5,
  "smoothed_ssn": 12,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1878-01",
  "ssn": 5.5,
  "smoothed_ssn": 11,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1878-02",
  "ssn": 11,
  "smoothed_ssn": 10.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1878-03",
  "ssn": 13.1,
  "smoothed_ssn": 8.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1878-04",
  "ssn": 0.2,
  "smoothed_ssn": 7.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1878-05",
  "ssn": 9.9,
  "smoothed_ssn": 6.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1878-06",
  "ssn": 10.7,
  "smoothed_ssn": 5.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1878-07",
  "ssn": 0.2,
  "smoothed_ssn": 5.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1878-08",
  "ssn": 0,
  "smoothed_ssn": 5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1878-09",
  "ssn": 8.8,
  "smoothed_ssn": 4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1878-10",
  "ssn": 1.9,
  "smoothed_ssn": 3.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1878-11",
  "ssn": 6.8,
  "smoothed_ssn": 4.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1878-12",
  "ssn": 0.9,
  "smoothed_ssn": 3.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1879-01",
  "ssn": 1.6,
  "smoothed_ssn": 4.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1879-02",
  "ssn": 0.9,
  "smoothed_ssn": 5.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1879-03",
  "ssn": 0,
  "smoothed_ssn": 6.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1879-04",
  "ssn": 10.4,
  "smoothed_ssn": 7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1879-05",
  "ssn": 4,
  "smoothed_ssn": 8.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1879-06",
  "ssn": 8,
  "smoothed_ssn": 9.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1879-07",
  "ssn": 12.6,
  "smoothed_ssn": 11.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1879-08",
  "ssn": 17.9,
  "smoothed_ssn": 15.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1879-09",
  "ssn": 10.1,
  "smoothed_ssn": 18.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1879-10",
  "ssn": 20.4,
  "smoothed_ssn": 20.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1879-11",
  "ssn": 21.9,
  "smoothed_ssn": 22.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1879-12",
  "ssn": 12.2,
  "smoothed_ssn": 26.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1880-01",
  "ssn": 40.1,
  "smoothed_ssn": 29.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1880-02",
  "ssn": 45.4,
  "smoothed_ssn": 33,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1880-03",
  "ssn": 32.1,
  "smoothed_ssn": 39.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1880-04",
  "ssn": 32.4,
  "smoothed_ssn": 46.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1880-05",
  "ssn": 39.1,
  "smoothed_ssn": 49.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1880-06",
  "ssn": 56.9,
  "smoothed_ssn": 52.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1880-07",
  "ssn": 36.5,
  "smoothed_ssn": 54.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1880-08",
  "ssn": 80.3,
  "smoothed_ssn": 57.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1880-09",
  "ssn": 110.1,
  "smoothed_ssn": 61.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1880-10",
  "ssn": 71.7,
  "smoothed_ssn": 65.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1880-11",
  "ssn": 51.1,
  "smoothed_ssn": 69.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1880-12",
  "ssn": 49.4,
  "smoothed_ssn": 72.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1881-01",
  "ssn": 60.6,
  "smoothed_ssn": 78.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1881-02",
  "ssn": 88.6,
  "smoothed_ssn": 82.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1881-03",
  "ssn": 85.8,
  "smoothed_ssn": 82.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1881-04",
  "ssn": 86.1,
  "smoothed_ssn": 83.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1881-05",
  "ssn": 72.5,
  "smoothed_ssn": 86.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1881-06",
  "ssn": 100.8,
  "smoothed_ssn": 89.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1881-07",
  "ssn": 128.2,
  "smoothed_ssn": 91.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1881-08",
  "ssn": 97.3,
  "smoothed_ssn": 92.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1881-09",
  "ssn": 88.6,
  "smoothed_ssn": 95.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1881-10",
  "ssn": 107.3,
  "smoothed_ssn": 99.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1881-11",
  "ssn": 91.5,
  "smoothed_ssn": 103.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1881-12",
  "ssn": 78.8,
  "smoothed_ssn": 104.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1882-01",
  "ssn": 75,
  "smoothed_ssn": 100.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1882-02",
  "ssn": 115.9,
  "smoothed_ssn": 97.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1882-03",
  "ssn": 111.5,
  "smoothed_ssn": 96.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1882-04",
  "ssn": 159.6,
  "smoothed_ssn": 96.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1882-05",
  "ssn": 106.9,
  "smoothed_ssn": 98.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1882-06",
  "ssn": 75.4,
  "smoothed_ssn": 99.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1882-07",
  "ssn": 75.7,
  "smoothed_ssn": 100.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1882-08",
  "ssn": 67.5,
  "smoothed_ssn": 100,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1882-09",
  "ssn": 96.1,
  "smoothed_ssn": 96.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1882-10",
  "ssn": 98.6,
  "smoothed_ssn": 94.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1882-11",
  "ssn": 140.6,
  "smoothed_ssn": 90.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1882-12",
  "ssn": 69.7,
  "smoothed_ssn": 90.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1883-01",
  "ssn": 101,
  "smoothed_ssn": 95.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1883-02",
  "ssn": 78.2,
  "smoothed_ssn": 98.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1883-03",
  "ssn": 71.3,
  "smoothed_ssn": 98.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1883-04",
  "ssn": 136.8,
  "smoothed_ssn": 99.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1883-05",
  "ssn": 52.5,
  "smoothed_ssn": 101.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1883-06",
  "ssn": 127.2,
  "smoothed_ssn": 103.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1883-07",
  "ssn": 134.4,
  "smoothed_ssn": 108.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1883-08",
  "ssn": 76.6,
  "smoothed_ssn": 113.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1883-09",
  "ssn": 87.8,
  "smoothed_ssn": 119,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1883-10",
  "ssn": 139.6,
  "smoothed_ssn": 121.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1883-11",
  "ssn": 140.8,
  "smoothed_ssn": 123.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1883-12",
  "ssn": 126.5,
  "smoothed_ssn": 124.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1884-01",
  "ssn": 152.6,
  "smoothed_ssn": 120.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1884-02",
  "ssn": 144.8,
  "smoothed_ssn": 119.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1884-03",
  "ssn": 145.8,
  "smoothed_ssn": 120.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1884-04",
  "ssn": 126.9,
  "smoothed_ssn": 119,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1884-05",
  "ssn": 110.9,
  "smoothed_ssn": 113.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1884-06",
  "ssn": 85.3,
  "smoothed_ssn": 107.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1884-07",
  "ssn": 88.5,
  "smoothed_ssn": 102.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1884-08",
  "ssn": 93.1,
  "smoothed_ssn": 98,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1884-09",
  "ssn": 103.1,
  "smoothed_ssn": 94.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1884-10",
  "ssn": 79.6,
  "smoothed_ssn": 90.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1884-11",
  "ssn": 60.9,
  "smoothed_ssn": 89.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1884-12",
  "ssn": 78.6,
  "smoothed_ssn": 92,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1885-01",
  "ssn": 71.4,
  "smoothed_ssn": 95.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1885-02",
  "ssn": 119.7,
  "smoothed_ssn": 95.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1885-03",
  "ssn": 82.9,
  "smoothed_ssn": 93.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1885-04",
  "ssn": 91.7,
  "smoothed_ssn": 91.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1885-05",
  "ssn": 121.6,
  "smoothed_ssn": 90.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1885-06",
  "ssn": 139.5,
  "smoothed_ssn": 88.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1885-07",
  "ssn": 110.9,
  "smoothed_ssn": 85.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1885-08",
  "ssn": 83.5,
  "smoothed_ssn": 81.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1885-09",
  "ssn": 66,
  "smoothed_ssn": 79,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1885-10",
  "ssn": 64.5,
  "smoothed_ssn": 78.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1885-11",
  "ssn": 51.6,
  "smoothed_ssn": 75,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1885-12",
  "ssn": 36.3,
  "smoothed_ssn": 68.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1886-01",
  "ssn": 49.8,
  "smoothed_ssn": 61.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1886-02",
  "ssn": 43.2,
  "smoothed_ssn": 56.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1886-03",
  "ssn": 95.5,
  "smoothed_ssn": 53.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1886-04",
  "ssn": 72.9,
  "smoothed_ssn": 50,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1886-05",
  "ssn": 51.2,
  "smoothed_ssn": 45.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1886-06",
  "ssn": 45.3,
  "smoothed_ssn": 43,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1886-07",
  "ssn": 50.4,
  "smoothed_ssn": 41,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1886-08",
  "ssn": 28.1,
  "smoothed_ssn": 38.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1886-09",
  "ssn": 35.7,
  "smoothed_ssn": 34.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1886-10",
  "ssn": 14.4,
  "smoothed_ssn": 28,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1886-11",
  "ssn": 0.6,
  "smoothed_ssn": 24.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1886-12",
  "ssn": 21.7,
  "smoothed_ssn": 23.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1887-01",
  "ssn": 17,
  "smoothed_ssn": 21.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1887-02",
  "ssn": 22,
  "smoothed_ssn": 21.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1887-03",
  "ssn": 7.1,
  "smoothed_ssn": 21,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1887-04",
  "ssn": 11.6,
  "smoothed_ssn": 19.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1887-05",
  "ssn": 33.4,
  "smoothed_ssn": 20.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1887-06",
  "ssn": 26.1,
  "smoothed_ssn": 21.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1887-07",
  "ssn": 38.9,
  "smoothed_ssn": 21.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1887-08",
  "ssn": 35.7,
  "smoothed_ssn": 21.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1887-09",
  "ssn": 12.4,
  "smoothed_ssn": 21.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1887-10",
  "ssn": 11,
  "smoothed_ssn": 21.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1887-11",
  "ssn": 11.5,
  "smoothed_ssn": 20.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1887-12",
  "ssn": 34.5,
  "smoothed_ssn": 19.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1888-01",
  "ssn": 21.2,
  "smoothed_ssn": 17.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1888-02",
  "ssn": 11.8,
  "smoothed_ssn": 14.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1888-03",
  "ssn": 13.1,
  "smoothed_ssn": 13.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1888-04",
  "ssn": 8.5,
  "smoothed_ssn": 13,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1888-05",
  "ssn": 11.7,
  "smoothed_ssn": 12.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1888-06",
  "ssn": 11.8,
  "smoothed_ssn": 12.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1888-07",
  "ssn": 5,
  "smoothed_ssn": 10.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1888-08",
  "ssn": 4.6,
  "smoothed_ssn": 9.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1888-09",
  "ssn": 14.6,
  "smoothed_ssn": 9.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1888-10",
  "ssn": 3.4,
  "smoothed_ssn": 9.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1888-11",
  "ssn": 17.9,
  "smoothed_ssn": 9.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1888-12",
  "ssn": 11.1,
  "smoothed_ssn": 8.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1889-01",
  "ssn": 1.3,
  "smoothed_ssn": 9.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1889-02",
  "ssn": 14.2,
  "smoothed_ssn": 10.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1889-03",
  "ssn": 11.1,
  "smoothed_ssn": 12,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1889-04",
  "ssn": 7.3,
  "smoothed_ssn": 11.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1889-05",
  "ssn": 4,
  "smoothed_ssn": 11.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1889-06",
  "ssn": 10.8,
  "smoothed_ssn": 10.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1889-07",
  "ssn": 15.8,
  "smoothed_ssn": 10.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1889-08",
  "ssn": 34.3,
  "smoothed_ssn": 10.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1889-09",
  "ssn": 10.9,
  "smoothed_ssn": 9.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1889-10",
  "ssn": 3.4,
  "smoothed_ssn": 9.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1889-11",
  "ssn": 0.3,
  "smoothed_ssn": 9.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1889-12",
  "ssn": 11.2,
  "smoothed_ssn": 9.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1890-01",
  "ssn": 8.8,
  "smoothed_ssn": 9.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1890-02",
  "ssn": 1.1,
  "smoothed_ssn": 8.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1890-03",
  "ssn": 8.5,
  "smoothed_ssn": 8.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1890-04",
  "ssn": 2.7,
  "smoothed_ssn": 9.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1890-05",
  "ssn": 7.9,
  "smoothed_ssn": 10.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1890-06",
  "ssn": 2.2,
  "smoothed_ssn": 11.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1890-07",
  "ssn": 19.3,
  "smoothed_ssn": 12.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1890-08",
  "ssn": 14.2,
  "smoothed_ssn": 14.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1890-09",
  "ssn": 28.6,
  "smoothed_ssn": 16.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1890-10",
  "ssn": 18.6,
  "smoothed_ssn": 17.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1890-11",
  "ssn": 15.9,
  "smoothed_ssn": 21.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1890-12",
  "ssn": 13.1,
  "smoothed_ssn": 27.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1891-01",
  "ssn": 22.5,
  "smoothed_ssn": 34.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1891-02",
  "ssn": 36.9,
  "smoothed_ssn": 39,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1891-03",
  "ssn": 17.2,
  "smoothed_ssn": 43.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1891-04",
  "ssn": 34.2,
  "smoothed_ssn": 48.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1891-05",
  "ssn": 68.5,
  "smoothed_ssn": 53.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1891-06",
  "ssn": 80.4,
  "smoothed_ssn": 57.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1891-07",
  "ssn": 98,
  "smoothed_ssn": 63.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1891-08",
  "ssn": 55.1,
  "smoothed_ssn": 70.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1891-09",
  "ssn": 89.7,
  "smoothed_ssn": 77.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1891-10",
  "ssn": 86,
  "smoothed_ssn": 83.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1891-11",
  "ssn": 69.8,
  "smoothed_ssn": 89.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1891-12",
  "ssn": 54.3,
  "smoothed_ssn": 94.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1892-01",
  "ssn": 115.2,
  "smoothed_ssn": 97.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1892-02",
  "ssn": 126.1,
  "smoothed_ssn": 103.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1892-03",
  "ssn": 83.3,
  "smoothed_ssn": 108.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1892-04",
  "ssn": 116,
  "smoothed_ssn": 110.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1892-05",
  "ssn": 132.7,
  "smoothed_ssn": 113.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1892-06",
  "ssn": 127.3,
  "smoothed_ssn": 118.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1892-07",
  "ssn": 127.6,
  "smoothed_ssn": 122,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1892-08",
  "ssn": 169,
  "smoothed_ssn": 122.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1892-09",
  "ssn": 104.7,
  "smoothed_ssn": 123.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1892-10",
  "ssn": 117.5,
  "smoothed_ssn": 125.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1892-11",
  "ssn": 108.9,
  "smoothed_ssn": 127.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1892-12",
  "ssn": 131,
  "smoothed_ssn": 128.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1893-01",
  "ssn": 125,
  "smoothed_ssn": 130.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1893-02",
  "ssn": 121.6,
  "smoothed_ssn": 133,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1893-03",
  "ssn": 109.5,
  "smoothed_ssn": 136,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1893-04",
  "ssn": 146.8,
  "smoothed_ssn": 137.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1893-05",
  "ssn": 141.3,
  "smoothed_ssn": 139,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1893-06",
  "ssn": 149.8,
  "smoothed_ssn": 140.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1893-07",
  "ssn": 147.6,
  "smoothed_ssn": 142.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1893-08",
  "ssn": 215.4,
  "smoothed_ssn": 143.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1893-09",
  "ssn": 129.9,
  "smoothed_ssn": 143.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1893-10",
  "ssn": 133.3,
  "smoothed_ssn": 142.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1893-11",
  "ssn": 125.2,
  "smoothed_ssn": 142.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1893-12",
  "ssn": 156.4,
  "smoothed_ssn": 144.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1894-01",
  "ssn": 138.6,
  "smoothed_ssn": 146.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1894-02",
  "ssn": 141,
  "smoothed_ssn": 143.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1894-03",
  "ssn": 87.1,
  "smoothed_ssn": 138.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1894-04",
  "ssn": 136,
  "smoothed_ssn": 137.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1894-05",
  "ssn": 168.7,
  "smoothed_ssn": 136,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1894-06",
  "ssn": 164.8,
  "smoothed_ssn": 132.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1894-07",
  "ssn": 176.7,
  "smoothed_ssn": 128.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1894-08",
  "ssn": 117.1,
  "smoothed_ssn": 126,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1894-09",
  "ssn": 110,
  "smoothed_ssn": 125.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1894-10",
  "ssn": 125.7,
  "smoothed_ssn": 125.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1894-11",
  "ssn": 94.3,
  "smoothed_ssn": 123,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1894-12",
  "ssn": 100.1,
  "smoothed_ssn": 118.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1895-01",
  "ssn": 105.4,
  "smoothed_ssn": 112.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1895-02",
  "ssn": 112,
  "smoothed_ssn": 108.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1895-03",
  "ssn": 101.6,
  "smoothed_ssn": 108,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1895-04",
  "ssn": 128.2,
  "smoothed_ssn": 106.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1895-05",
  "ssn": 112.5,
  "smoothed_ssn": 105.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1895-06",
  "ssn": 119.1,
  "smoothed_ssn": 105.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1895-07",
  "ssn": 79.7,
  "smoothed_ssn": 104.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1895-08",
  "ssn": 114.9,
  "smoothed_ssn": 101.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1895-09",
  "ssn": 96.1,
  "smoothed_ssn": 99.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1895-10",
  "ssn": 113.2,
  "smoothed_ssn": 96.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1895-11",
  "ssn": 78.6,
  "smoothed_ssn": 91.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1895-12",
  "ssn": 117.9,
  "smoothed_ssn": 87.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1896-01",
  "ssn": 48.4,
  "smoothed_ssn": 85.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1896-02",
  "ssn": 95.7,
  "smoothed_ssn": 82.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1896-03",
  "ssn": 86.5,
  "smoothed_ssn": 80.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1896-04",
  "ssn": 73,
  "smoothed_ssn": 77.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1896-05",
  "ssn": 46.1,
  "smoothed_ssn": 74.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1896-06",
  "ssn": 81.7,
  "smoothed_ssn": 71.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1896-07",
  "ssn": 75.2,
  "smoothed_ssn": 70.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1896-08",
  "ssn": 45.4,
  "smoothed_ssn": 69.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1896-09",
  "ssn": 102.2,
  "smoothed_ssn": 65.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1896-10",
  "ssn": 47.9,
  "smoothed_ssn": 63.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1896-11",
  "ssn": 63.3,
  "smoothed_ssn": 62,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1896-12",
  "ssn": 71,
  "smoothed_ssn": 58.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1897-01",
  "ssn": 67.6,
  "smoothed_ssn": 55,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1897-02",
  "ssn": 49,
  "smoothed_ssn": 53.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1897-03",
  "ssn": 48.7,
  "smoothed_ssn": 52.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1897-04",
  "ssn": 51.7,
  "smoothed_ssn": 50.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1897-05",
  "ssn": 33.3,
  "smoothed_ssn": 47.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1897-06",
  "ssn": 18.9,
  "smoothed_ssn": 44.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1897-07",
  "ssn": 46.1,
  "smoothed_ssn": 43.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1897-08",
  "ssn": 36.4,
  "smoothed_ssn": 42.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1897-09",
  "ssn": 80.4,
  "smoothed_ssn": 44,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1897-10",
  "ssn": 23.9,
  "smoothed_ssn": 43.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1897-11",
  "ssn": 14,
  "smoothed_ssn": 42.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1897-12",
  "ssn": 55.5,
  "smoothed_ssn": 43.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1898-01",
  "ssn": 50.4,
  "smoothed_ssn": 43.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1898-02",
  "ssn": 60.7,
  "smoothed_ssn": 42.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1898-03",
  "ssn": 63.9,
  "smoothed_ssn": 42.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1898-04",
  "ssn": 24.2,
  "smoothed_ssn": 42.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1898-05",
  "ssn": 43,
  "smoothed_ssn": 45.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1898-06",
  "ssn": 37.1,
  "smoothed_ssn": 46,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1898-07",
  "ssn": 15,
  "smoothed_ssn": 43.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1898-08",
  "ssn": 52.3,
  "smoothed_ssn": 41.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1898-09",
  "ssn": 58.1,
  "smoothed_ssn": 37.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1898-10",
  "ssn": 57.1,
  "smoothed_ssn": 36.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1898-11",
  "ssn": 51.6,
  "smoothed_ssn": 35.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1898-12",
  "ssn": 21.1,
  "smoothed_ssn": 33.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1899-01",
  "ssn": 32.4,
  "smoothed_ssn": 34,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1899-02",
  "ssn": 15.3,
  "smoothed_ssn": 32.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1899-03",
  "ssn": 30.3,
  "smoothed_ssn": 28.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1899-04",
  "ssn": 23.6,
  "smoothed_ssn": 25.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1899-05",
  "ssn": 12.9,
  "smoothed_ssn": 22.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1899-06",
  "ssn": 34.1,
  "smoothed_ssn": 20.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1899-07",
  "ssn": 22.5,
  "smoothed_ssn": 19.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1899-08",
  "ssn": 4.9,
  "smoothed_ssn": 19.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1899-09",
  "ssn": 14,
  "smoothed_ssn": 18.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1899-10",
  "ssn": 21.7,
  "smoothed_ssn": 18.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1899-11",
  "ssn": 13,
  "smoothed_ssn": 18.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1899-12",
  "ssn": 17.6,
  "smoothed_ssn": 18.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1900-01",
  "ssn": 15.7,
  "smoothed_ssn": 17.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1900-02",
  "ssn": 22.8,
  "smoothed_ssn": 17.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1900-03",
  "ssn": 14.4,
  "smoothed_ssn": 17.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1900-04",
  "ssn": 26.8,
  "smoothed_ssn": 17.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1900-05",
  "ssn": 25.3,
  "smoothed_ssn": 17.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1900-06",
  "ssn": 20.1,
  "smoothed_ssn": 16.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1900-07",
  "ssn": 13.9,
  "smoothed_ssn": 15.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1900-08",
  "ssn": 7.1,
  "smoothed_ssn": 13.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1900-09",
  "ssn": 13.9,
  "smoothed_ssn": 12.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1900-10",
  "ssn": 21.6,
  "smoothed_ssn": 11.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1900-11",
  "ssn": 7.5,
  "smoothed_ssn": 9.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1900-12",
  "ssn": 0.5,
  "smoothed_ssn": 9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1901-01",
  "ssn": 0.4,
  "smoothed_ssn": 8.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1901-02",
  "ssn": 4,
  "smoothed_ssn": 7.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1901-03",
  "ssn": 7.4,
  "smoothed_ssn": 6.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1901-04",
  "ssn": 0,
  "smoothed_ssn": 5.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1901-05",
  "ssn": 17,
  "smoothed_ssn": 4.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1901-06",
  "ssn": 9.7,
  "smoothed_ssn": 4.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1901-07",
  "ssn": 1.2,
  "smoothed_ssn": 5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1901-08",
  "ssn": 1.7,
  "smoothed_ssn": 5.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1901-09",
  "ssn": 0.9,
  "smoothed_ssn": 5.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1901-10",
  "ssn": 6.3,
  "smoothed_ssn": 6.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1901-11",
  "ssn": 6.4,
  "smoothed_ssn": 5.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1901-12",
  "ssn": 0,
  "smoothed_ssn": 4.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1902-01",
  "ssn": 9.3,
  "smoothed_ssn": 4.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1902-02",
  "ssn": 0,
  "smoothed_ssn": 4.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1902-03",
  "ssn": 20.7,
  "smoothed_ssn": 5.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1902-04",
  "ssn": 0,
  "smoothed_ssn": 6.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1902-05",
  "ssn": 4.7,
  "smoothed_ssn": 7.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1902-06",
  "ssn": 2.4,
  "smoothed_ssn": 8.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1902-07",
  "ssn": 1.5,
  "smoothed_ssn": 8.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1902-08",
  "ssn": 3.8,
  "smoothed_ssn": 10,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1902-09",
  "ssn": 12.6,
  "smoothed_ssn": 11.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1902-10",
  "ssn": 27.2,
  "smoothed_ssn": 13.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1902-11",
  "ssn": 17.2,
  "smoothed_ssn": 15.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1902-12",
  "ssn": 1.8,
  "smoothed_ssn": 17.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1903-01",
  "ssn": 13.9,
  "smoothed_ssn": 20.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1903-02",
  "ssn": 28.4,
  "smoothed_ssn": 24.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1903-03",
  "ssn": 22.5,
  "smoothed_ssn": 26.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1903-04",
  "ssn": 43.5,
  "smoothed_ssn": 28.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1903-05",
  "ssn": 24.3,
  "smoothed_ssn": 32.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1903-06",
  "ssn": 27.2,
  "smoothed_ssn": 37.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1903-07",
  "ssn": 46.4,
  "smoothed_ssn": 42.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1903-08",
  "ssn": 48,
  "smoothed_ssn": 44.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1903-09",
  "ssn": 18.5,
  "smoothed_ssn": 46.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1903-10",
  "ssn": 64.8,
  "smoothed_ssn": 49.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1903-11",
  "ssn": 74.2,
  "smoothed_ssn": 52.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1903-12",
  "ssn": 76.2,
  "smoothed_ssn": 55.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1904-01",
  "ssn": 52.6,
  "smoothed_ssn": 59.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1904-02",
  "ssn": 40.8,
  "smoothed_ssn": 62.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1904-03",
  "ssn": 61.9,
  "smoothed_ssn": 66.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1904-04",
  "ssn": 71.6,
  "smoothed_ssn": 68.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1904-05",
  "ssn": 65.7,
  "smoothed_ssn": 69.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1904-06",
  "ssn": 69.8,
  "smoothed_ssn": 69.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1904-07",
  "ssn": 84.3,
  "smoothed_ssn": 71.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1904-08",
  "ssn": 97.1,
  "smoothed_ssn": 77.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1904-09",
  "ssn": 50.2,
  "smoothed_ssn": 83,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1904-10",
  "ssn": 90.4,
  "smoothed_ssn": 84.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1904-11",
  "ssn": 63.4,
  "smoothed_ssn": 84.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1904-12",
  "ssn": 91.1,
  "smoothed_ssn": 85.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1905-01",
  "ssn": 91.2,
  "smoothed_ssn": 87.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1905-02",
  "ssn": 143,
  "smoothed_ssn": 89.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1905-03",
  "ssn": 94.3,
  "smoothed_ssn": 90.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1905-04",
  "ssn": 65.5,
  "smoothed_ssn": 94.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1905-05",
  "ssn": 79.9,
  "smoothed_ssn": 100.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1905-06",
  "ssn": 81.6,
  "smoothed_ssn": 105.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1905-07",
  "ssn": 121.6,
  "smoothed_ssn": 105.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1905-08",
  "ssn": 98.1,
  "smoothed_ssn": 100.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1905-09",
  "ssn": 91.8,
  "smoothed_ssn": 97.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1905-10",
  "ssn": 131.2,
  "smoothed_ssn": 99.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1905-11",
  "ssn": 178.7,
  "smoothed_ssn": 100.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1905-12",
  "ssn": 92.5,
  "smoothed_ssn": 102.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1906-01",
  "ssn": 75.8,
  "smoothed_ssn": 105.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1906-02",
  "ssn": 52.3,
  "smoothed_ssn": 107.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1906-03",
  "ssn": 107.4,
  "smoothed_ssn": 106.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1906-04",
  "ssn": 92.2,
  "smoothed_ssn": 102.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1906-05",
  "ssn": 96.2,
  "smoothed_ssn": 93.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1906-06",
  "ssn": 105.3,
  "smoothed_ssn": 89.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1906-07",
  "ssn": 172.7,
  "smoothed_ssn": 91.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1906-08",
  "ssn": 79.6,
  "smoothed_ssn": 99.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1906-09",
  "ssn": 93.5,
  "smoothed_ssn": 104.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1906-10",
  "ssn": 29.7,
  "smoothed_ssn": 104,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1906-11",
  "ssn": 64.8,
  "smoothed_ssn": 102.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1906-12",
  "ssn": 108,
  "smoothed_ssn": 100.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1907-01",
  "ssn": 127.4,
  "smoothed_ssn": 94.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1907-02",
  "ssn": 180.3,
  "smoothed_ssn": 91.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1907-03",
  "ssn": 101.1,
  "smoothed_ssn": 94,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1907-04",
  "ssn": 87.6,
  "smoothed_ssn": 99.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1907-05",
  "ssn": 71.4,
  "smoothed_ssn": 104.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1907-06",
  "ssn": 67.2,
  "smoothed_ssn": 104.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1907-07",
  "ssn": 82.9,
  "smoothed_ssn": 100.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1907-08",
  "ssn": 90.5,
  "smoothed_ssn": 93.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1907-09",
  "ssn": 141.7,
  "smoothed_ssn": 85.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1907-10",
  "ssn": 109.1,
  "smoothed_ssn": 83.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1907-11",
  "ssn": 102.5,
  "smoothed_ssn": 84,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1907-12",
  "ssn": 78.9,
  "smoothed_ssn": 84.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1908-01",
  "ssn": 65.4,
  "smoothed_ssn": 84.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1908-02",
  "ssn": 56.6,
  "smoothed_ssn": 86.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1908-03",
  "ssn": 47.9,
  "smoothed_ssn": 88.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1908-04",
  "ssn": 96.1,
  "smoothed_ssn": 86.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1908-05",
  "ssn": 68,
  "smoothed_ssn": 83.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1908-06",
  "ssn": 80.2,
  "smoothed_ssn": 81.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1908-07",
  "ssn": 65.8,
  "smoothed_ssn": 82.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1908-08",
  "ssn": 150.9,
  "smoothed_ssn": 84.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1908-09",
  "ssn": 144.9,
  "smoothed_ssn": 87.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1908-10",
  "ssn": 53.9,
  "smoothed_ssn": 88.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1908-11",
  "ssn": 75.9,
  "smoothed_ssn": 86.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1908-12",
  "ssn": 65.9,
  "smoothed_ssn": 84.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1909-01",
  "ssn": 94.6,
  "smoothed_ssn": 82.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1909-02",
  "ssn": 77.6,
  "smoothed_ssn": 77.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1909-03",
  "ssn": 110.5,
  "smoothed_ssn": 69.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1909-04",
  "ssn": 53.7,
  "smoothed_ssn": 67.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1909-05",
  "ssn": 60,
  "smoothed_ssn": 70.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1909-06",
  "ssn": 37.8,
  "smoothed_ssn": 72.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1909-07",
  "ssn": 59.6,
  "smoothed_ssn": 71,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1909-08",
  "ssn": 38.5,
  "smoothed_ssn": 67.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1909-09",
  "ssn": 64.7,
  "smoothed_ssn": 63.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1909-10",
  "ssn": 97.4,
  "smoothed_ssn": 58.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1909-11",
  "ssn": 93,
  "smoothed_ssn": 56.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1909-12",
  "ssn": 90.2,
  "smoothed_ssn": 54.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1910-01",
  "ssn": 44,
  "smoothed_ssn": 52.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1910-02",
  "ssn": 52.5,
  "smoothed_ssn": 50.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1910-03",
  "ssn": 35.7,
  "smoothed_ssn": 48.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1910-04",
  "ssn": 14.1,
  "smoothed_ssn": 46.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1910-05",
  "ssn": 36.9,
  "smoothed_ssn": 41.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1910-06",
  "ssn": 20.5,
  "smoothed_ssn": 34.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1910-07",
  "ssn": 23.5,
  "smoothed_ssn": 29.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1910-08",
  "ssn": 19.3,
  "smoothed_ssn": 26.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1910-09",
  "ssn": 43.7,
  "smoothed_ssn": 23.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1910-10",
  "ssn": 63.9,
  "smoothed_ssn": 23.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1910-11",
  "ssn": 8.3,
  "smoothed_ssn": 23,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1910-12",
  "ssn": 9.6,
  "smoothed_ssn": 21.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1911-01",
  "ssn": 5.6,
  "smoothed_ssn": 20,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1911-02",
  "ssn": 15,
  "smoothed_ssn": 18.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1911-03",
  "ssn": 13,
  "smoothed_ssn": 16.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1911-04",
  "ssn": 27.6,
  "smoothed_ssn": 12.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1911-05",
  "ssn": 15.1,
  "smoothed_ssn": 10.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1911-06",
  "ssn": 3.7,
  "smoothed_ssn": 9.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1911-07",
  "ssn": 5.9,
  "smoothed_ssn": 9.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1911-08",
  "ssn": 6.7,
  "smoothed_ssn": 8.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1911-09",
  "ssn": 6.7,
  "smoothed_ssn": 7.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1911-10",
  "ssn": 4.5,
  "smoothed_ssn": 6.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1911-11",
  "ssn": 7,
  "smoothed_ssn": 5.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1911-12",
  "ssn": 3.7,
  "smoothed_ssn": 5.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1912-01",
  "ssn": 0.4,
  "smoothed_ssn": 5.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1912-02",
  "ssn": 0,
  "smoothed_ssn": 5.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1912-03",
  "ssn": 8.2,
  "smoothed_ssn": 5.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1912-04",
  "ssn": 7.6,
  "smoothed_ssn": 5.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1912-05",
  "ssn": 7.4,
  "smoothed_ssn": 5.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1912-06",
  "ssn": 6.9,
  "smoothed_ssn": 5.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1912-07",
  "ssn": 4.9,
  "smoothed_ssn": 6.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1912-08",
  "ssn": 0.5,
  "smoothed_ssn": 6.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1912-09",
  "ssn": 15.9,
  "smoothed_ssn": 6.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1912-10",
  "ssn": 7.6,
  "smoothed_ssn": 5.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1912-11",
  "ssn": 1.9,
  "smoothed_ssn": 5.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1912-12",
  "ssn": 10.6,
  "smoothed_ssn": 4.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1913-01",
  "ssn": 3.8,
  "smoothed_ssn": 4.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1913-02",
  "ssn": 4.8,
  "smoothed_ssn": 4.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1913-03",
  "ssn": 0.8,
  "smoothed_ssn": 3.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1913-04",
  "ssn": 1.6,
  "smoothed_ssn": 2.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1913-05",
  "ssn": 0,
  "smoothed_ssn": 2.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1913-06",
  "ssn": 0,
  "smoothed_ssn": 2.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1913-07",
  "ssn": 2.9,
  "smoothed_ssn": 2.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1913-08",
  "ssn": 0.4,
  "smoothed_ssn": 2.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1913-09",
  "ssn": 2,
  "smoothed_ssn": 2.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1913-10",
  "ssn": 5.2,
  "smoothed_ssn": 4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1913-11",
  "ssn": 1.2,
  "smoothed_ssn": 5.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1913-12",
  "ssn": 6.3,
  "smoothed_ssn": 6.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1914-01",
  "ssn": 4.7,
  "smoothed_ssn": 7.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1914-02",
  "ssn": 4.4,
  "smoothed_ssn": 8.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1914-03",
  "ssn": 5.3,
  "smoothed_ssn": 9.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1914-04",
  "ssn": 28.9,
  "smoothed_ssn": 10.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1914-05",
  "ssn": 8.7,
  "smoothed_ssn": 12.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1914-06",
  "ssn": 19.1,
  "smoothed_ssn": 14.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1914-07",
  "ssn": 9.1,
  "smoothed_ssn": 17.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1914-08",
  "ssn": 12.9,
  "smoothed_ssn": 21.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1914-09",
  "ssn": 21.2,
  "smoothed_ssn": 26.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1914-10",
  "ssn": 13.7,
  "smoothed_ssn": 31,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1914-11",
  "ssn": 27.3,
  "smoothed_ssn": 34.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1914-12",
  "ssn": 37.3,
  "smoothed_ssn": 40.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1915-01",
  "ssn": 38.5,
  "smoothed_ssn": 49.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1915-02",
  "ssn": 70.4,
  "smoothed_ssn": 58,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1915-03",
  "ssn": 64.8,
  "smoothed_ssn": 64.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1915-04",
  "ssn": 68.9,
  "smoothed_ssn": 70.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1915-05",
  "ssn": 55.1,
  "smoothed_ssn": 75.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1915-06",
  "ssn": 114.7,
  "smoothed_ssn": 78.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1915-07",
  "ssn": 119.4,
  "smoothed_ssn": 80.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1915-08",
  "ssn": 116,
  "smoothed_ssn": 83,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1915-09",
  "ssn": 82.4,
  "smoothed_ssn": 85.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1915-10",
  "ssn": 89.1,
  "smoothed_ssn": 89.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1915-11",
  "ssn": 70.9,
  "smoothed_ssn": 94.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1915-12",
  "ssn": 57.5,
  "smoothed_ssn": 97.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1916-01",
  "ssn": 75.5,
  "smoothed_ssn": 96.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1916-02",
  "ssn": 92.4,
  "smoothed_ssn": 92.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1916-03",
  "ssn": 111.7,
  "smoothed_ssn": 90,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1916-04",
  "ssn": 119.8,
  "smoothed_ssn": 89.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1916-05",
  "ssn": 124,
  "smoothed_ssn": 91,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1916-06",
  "ssn": 112.9,
  "smoothed_ssn": 93.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1916-07",
  "ssn": 89.3,
  "smoothed_ssn": 97.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1916-08",
  "ssn": 58.6,
  "smoothed_ssn": 100.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1916-09",
  "ssn": 75.1,
  "smoothed_ssn": 103.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1916-10",
  "ssn": 84.5,
  "smoothed_ssn": 105.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1916-11",
  "ssn": 109.5,
  "smoothed_ssn": 108.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1916-12",
  "ssn": 88.3,
  "smoothed_ssn": 114.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1917-01",
  "ssn": 124.5,
  "smoothed_ssn": 122.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1917-02",
  "ssn": 119.9,
  "smoothed_ssn": 135.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1917-03",
  "ssn": 158,
  "smoothed_ssn": 149.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1917-04",
  "ssn": 124.6,
  "smoothed_ssn": 156.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1917-05",
  "ssn": 190.2,
  "smoothed_ssn": 160.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1917-06",
  "ssn": 191.4,
  "smoothed_ssn": 167.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1917-07",
  "ssn": 199.7,
  "smoothed_ssn": 174.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1917-08",
  "ssn": 257.7,
  "smoothed_ssn": 175.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1917-09",
  "ssn": 215.6,
  "smoothed_ssn": 173.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1917-10",
  "ssn": 120.3,
  "smoothed_ssn": 172.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1917-11",
  "ssn": 160.7,
  "smoothed_ssn": 170.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1917-12",
  "ssn": 215.5,
  "smoothed_ssn": 163.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1918-01",
  "ssn": 160,
  "smoothed_ssn": 159.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1918-02",
  "ssn": 108.7,
  "smoothed_ssn": 154.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1918-03",
  "ssn": 120.4,
  "smoothed_ssn": 147.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1918-04",
  "ssn": 134.1,
  "smoothed_ssn": 145,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1918-05",
  "ssn": 127.9,
  "smoothed_ssn": 145,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1918-06",
  "ssn": 99,
  "smoothed_ssn": 139.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1918-07",
  "ssn": 179.5,
  "smoothed_ssn": 131,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1918-08",
  "ssn": 169.6,
  "smoothed_ssn": 128.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1918-09",
  "ssn": 133.2,
  "smoothed_ssn": 129.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1918-10",
  "ssn": 141.7,
  "smoothed_ssn": 126.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1918-11",
  "ssn": 139,
  "smoothed_ssn": 125.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1918-12",
  "ssn": 98.5,
  "smoothed_ssn": 130,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1919-01",
  "ssn": 80.2,
  "smoothed_ssn": 130.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1919-02",
  "ssn": 132.5,
  "smoothed_ssn": 125.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1919-03",
  "ssn": 110.9,
  "smoothed_ssn": 121.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1919-04",
  "ssn": 86.3,
  "smoothed_ssn": 117.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1919-05",
  "ssn": 146.9,
  "smoothed_ssn": 112.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1919-06",
  "ssn": 185.3,
  "smoothed_ssn": 107.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1919-07",
  "ssn": 107.8,
  "smoothed_ssn": 106.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1919-08",
  "ssn": 115.1,
  "smoothed_ssn": 104.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1919-09",
  "ssn": 91.1,
  "smoothed_ssn": 103.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1919-10",
  "ssn": 88,
  "smoothed_ssn": 100.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1919-11",
  "ssn": 69.9,
  "smoothed_ssn": 94.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1919-12",
  "ssn": 58,
  "smoothed_ssn": 85.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1920-01",
  "ssn": 85.3,
  "smoothed_ssn": 78,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1920-02",
  "ssn": 89.8,
  "smoothed_ssn": 71.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1920-03",
  "ssn": 116.9,
  "smoothed_ssn": 67.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1920-04",
  "ssn": 24.7,
  "smoothed_ssn": 65.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1920-05",
  "ssn": 55.4,
  "smoothed_ssn": 64.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1920-06",
  "ssn": 64.6,
  "smoothed_ssn": 63.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1920-07",
  "ssn": 45.7,
  "smoothed_ssn": 61.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1920-08",
  "ssn": 31.9,
  "smoothed_ssn": 58.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1920-09",
  "ssn": 60.5,
  "smoothed_ssn": 53.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1920-10",
  "ssn": 82.7,
  "smoothed_ssn": 51.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1920-11",
  "ssn": 45.3,
  "smoothed_ssn": 52.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1920-12",
  "ssn": 49.8,
  "smoothed_ssn": 51,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1921-01",
  "ssn": 52.5,
  "smoothed_ssn": 51.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1921-02",
  "ssn": 47.1,
  "smoothed_ssn": 52.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1921-03",
  "ssn": 44.5,
  "smoothed_ssn": 51.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1921-04",
  "ssn": 54,
  "smoothed_ssn": 48.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1921-05",
  "ssn": 37,
  "smoothed_ssn": 45.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1921-06",
  "ssn": 56.2,
  "smoothed_ssn": 44.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1921-07",
  "ssn": 69.7,
  "smoothed_ssn": 42.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1921-08",
  "ssn": 38,
  "smoothed_ssn": 40.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1921-09",
  "ssn": 29.6,
  "smoothed_ssn": 42.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1921-10",
  "ssn": 30.3,
  "smoothed_ssn": 42.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1921-11",
  "ssn": 29.6,
  "smoothed_ssn": 40.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1921-12",
  "ssn": 33.9,
  "smoothed_ssn": 37.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1922-01",
  "ssn": 19.7,
  "smoothed_ssn": 33.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1922-02",
  "ssn": 43.9,
  "smoothed_ssn": 30.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1922-03",
  "ssn": 91.3,
  "smoothed_ssn": 28.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1922-04",
  "ssn": 18.3,
  "smoothed_ssn": 26.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1922-05",
  "ssn": 13.4,
  "smoothed_ssn": 24.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1922-06",
  "ssn": 9.8,
  "smoothed_ssn": 24,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1922-07",
  "ssn": 18.3,
  "smoothed_ssn": 23.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1922-08",
  "ssn": 10.9,
  "smoothed_ssn": 21,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1922-09",
  "ssn": 7.8,
  "smoothed_ssn": 15.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1922-10",
  "ssn": 10.4,
  "smoothed_ssn": 11.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1922-11",
  "ssn": 12.2,
  "smoothed_ssn": 11.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1922-12",
  "ssn": 29,
  "smoothed_ssn": 11,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1923-01",
  "ssn": 7.5,
  "smoothed_ssn": 10.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1923-02",
  "ssn": 2.5,
  "smoothed_ssn": 9.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1923-03",
  "ssn": 5.5,
  "smoothed_ssn": 10,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1923-04",
  "ssn": 10.2,
  "smoothed_ssn": 10.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1923-05",
  "ssn": 5.3,
  "smoothed_ssn": 11.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1923-06",
  "ssn": 15.3,
  "smoothed_ssn": 10.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1923-07",
  "ssn": 5.9,
  "smoothed_ssn": 9.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1923-08",
  "ssn": 0.8,
  "smoothed_ssn": 9.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1923-09",
  "ssn": 22.1,
  "smoothed_ssn": 9.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1923-10",
  "ssn": 19.5,
  "smoothed_ssn": 9.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1923-11",
  "ssn": 16.7,
  "smoothed_ssn": 11.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1923-12",
  "ssn": 4.6,
  "smoothed_ssn": 13.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1924-01",
  "ssn": 0.8,
  "smoothed_ssn": 16.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1924-02",
  "ssn": 8.5,
  "smoothed_ssn": 19.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1924-03",
  "ssn": 3,
  "smoothed_ssn": 21.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1924-04",
  "ssn": 18.9,
  "smoothed_ssn": 23.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1924-05",
  "ssn": 34.6,
  "smoothed_ssn": 25.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1924-06",
  "ssn": 40,
  "smoothed_ssn": 26.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1924-07",
  "ssn": 46.9,
  "smoothed_ssn": 28.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1924-08",
  "ssn": 32.1,
  "smoothed_ssn": 29.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1924-09",
  "ssn": 41.9,
  "smoothed_ssn": 32.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1924-10",
  "ssn": 42.6,
  "smoothed_ssn": 34.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1924-11",
  "ssn": 37.5,
  "smoothed_ssn": 37.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1924-12",
  "ssn": 27.5,
  "smoothed_ssn": 40.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1925-01",
  "ssn": 9.1,
  "smoothed_ssn": 43.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1925-02",
  "ssn": 38.6,
  "smoothed_ssn": 45.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1925-03",
  "ssn": 30,
  "smoothed_ssn": 48.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1925-04",
  "ssn": 53,
  "smoothed_ssn": 54.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1925-05",
  "ssn": 71.4,
  "smoothed_ssn": 59.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1925-06",
  "ssn": 79.1,
  "smoothed_ssn": 68.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1925-07",
  "ssn": 64.2,
  "smoothed_ssn": 78.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1925-08",
  "ssn": 63.3,
  "smoothed_ssn": 86.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1925-09",
  "ssn": 100.3,
  "smoothed_ssn": 92.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1925-10",
  "ssn": 115.3,
  "smoothed_ssn": 96.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1925-11",
  "ssn": 97.6,
  "smoothed_ssn": 98.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1925-12",
  "ssn": 164.4,
  "smoothed_ssn": 101.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1926-01",
  "ssn": 119.7,
  "smoothed_ssn": 104.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1926-02",
  "ssn": 116.4,
  "smoothed_ssn": 106.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1926-03",
  "ssn": 104.2,
  "smoothed_ssn": 108.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1926-04",
  "ssn": 64.2,
  "smoothed_ssn": 108.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1926-05",
  "ssn": 107,
  "smoothed_ssn": 109,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1926-06",
  "ssn": 122.4,
  "smoothed_ssn": 107.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1926-07",
  "ssn": 87.2,
  "smoothed_ssn": 107.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1926-08",
  "ssn": 102.7,
  "smoothed_ssn": 109.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1926-09",
  "ssn": 101.4,
  "smoothed_ssn": 111.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1926-10",
  "ssn": 119.3,
  "smoothed_ssn": 115.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1926-11",
  "ssn": 100.8,
  "smoothed_ssn": 120.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1926-12",
  "ssn": 132.4,
  "smoothed_ssn": 120.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1927-01",
  "ssn": 136,
  "smoothed_ssn": 120,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1927-02",
  "ssn": 155.1,
  "smoothed_ssn": 119.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1927-03",
  "ssn": 116.1,
  "smoothed_ssn": 119.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1927-04",
  "ssn": 155.8,
  "smoothed_ssn": 119.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1927-05",
  "ssn": 131.9,
  "smoothed_ssn": 119.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1927-06",
  "ssn": 98.5,
  "smoothed_ssn": 117.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1927-07",
  "ssn": 91.6,
  "smoothed_ssn": 115.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1927-08",
  "ssn": 89.6,
  "smoothed_ssn": 114,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1927-09",
  "ssn": 114.1,
  "smoothed_ssn": 113.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1927-10",
  "ssn": 105.2,
  "smoothed_ssn": 113.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1927-11",
  "ssn": 112.1,
  "smoothed_ssn": 112.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1927-12",
  "ssn": 75.3,
  "smoothed_ssn": 115,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1928-01",
  "ssn": 139.2,
  "smoothed_ssn": 120.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1928-02",
  "ssn": 122.4,
  "smoothed_ssn": 125.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1928-03",
  "ssn": 142.4,
  "smoothed_ssn": 128.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1928-04",
  "ssn": 134.3,
  "smoothed_ssn": 130.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1928-05",
  "ssn": 128.3,
  "smoothed_ssn": 128.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1928-06",
  "ssn": 152.4,
  "smoothed_ssn": 128.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1928-07",
  "ssn": 163.4,
  "smoothed_ssn": 128.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1928-08",
  "ssn": 139.6,
  "smoothed_ssn": 126.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1928-09",
  "ssn": 149.6,
  "smoothed_ssn": 123.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1928-10",
  "ssn": 102.3,
  "smoothed_ssn": 119.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1928-11",
  "ssn": 83.9,
  "smoothed_ssn": 116.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1928-12",
  "ssn": 98.3,
  "smoothed_ssn": 113.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1929-01",
  "ssn": 114.8,
  "smoothed_ssn": 110.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1929-02",
  "ssn": 104.7,
  "smoothed_ssn": 107,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1929-03",
  "ssn": 83.8,
  "smoothed_ssn": 101.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1929-04",
  "ssn": 87.9,
  "smoothed_ssn": 97.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1929-05",
  "ssn": 97,
  "smoothed_ssn": 99.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1929-06",
  "ssn": 119.9,
  "smoothed_ssn": 104.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1929-07",
  "ssn": 117.1,
  "smoothed_ssn": 107.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1929-08",
  "ssn": 109.6,
  "smoothed_ssn": 106.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1929-09",
  "ssn": 57.3,
  "smoothed_ssn": 104.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1929-10",
  "ssn": 90.1,
  "smoothed_ssn": 102.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1929-11",
  "ssn": 135.1,
  "smoothed_ssn": 100.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1929-12",
  "ssn": 179.9,
  "smoothed_ssn": 95.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1930-01",
  "ssn": 108.8,
  "smoothed_ssn": 89.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1930-02",
  "ssn": 83.1,
  "smoothed_ssn": 83.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1930-03",
  "ssn": 58.4,
  "smoothed_ssn": 80.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1930-04",
  "ssn": 63.7,
  "smoothed_ssn": 78.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1930-05",
  "ssn": 61.4,
  "smoothed_ssn": 74.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1930-06",
  "ssn": 48,
  "smoothed_ssn": 65.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1930-07",
  "ssn": 36.5,
  "smoothed_ssn": 56,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1930-08",
  "ssn": 41.5,
  "smoothed_ssn": 52,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1930-09",
  "ssn": 53.5,
  "smoothed_ssn": 51.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1930-10",
  "ssn": 57.2,
  "smoothed_ssn": 50.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1930-11",
  "ssn": 59.4,
  "smoothed_ssn": 49,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1930-12",
  "ssn": 43,
  "smoothed_ssn": 47.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1931-01",
  "ssn": 24.4,
  "smoothed_ssn": 46,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1931-02",
  "ssn": 71.8,
  "smoothed_ssn": 44.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1931-03",
  "ssn": 50.1,
  "smoothed_ssn": 43.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1931-04",
  "ssn": 52,
  "smoothed_ssn": 40.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1931-05",
  "ssn": 40.8,
  "smoothed_ssn": 37.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1931-06",
  "ssn": 25.5,
  "smoothed_ssn": 35.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1931-07",
  "ssn": 29,
  "smoothed_ssn": 35.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1931-08",
  "ssn": 21.6,
  "smoothed_ssn": 32.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1931-09",
  "ssn": 31.7,
  "smoothed_ssn": 29.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1931-10",
  "ssn": 16.6,
  "smoothed_ssn": 26.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1931-11",
  "ssn": 31.2,
  "smoothed_ssn": 24.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1931-12",
  "ssn": 29.7,
  "smoothed_ssn": 24.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1932-01",
  "ssn": 20.1,
  "smoothed_ssn": 24.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1932-02",
  "ssn": 17.6,
  "smoothed_ssn": 23.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1932-03",
  "ssn": 18.8,
  "smoothed_ssn": 22.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1932-04",
  "ssn": 18.7,
  "smoothed_ssn": 21,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1932-05",
  "ssn": 29.7,
  "smoothed_ssn": 20.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1932-06",
  "ssn": 36.9,
  "smoothed_ssn": 19,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1932-07",
  "ssn": 16,
  "smoothed_ssn": 18.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1932-08",
  "ssn": 11.3,
  "smoothed_ssn": 19.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1932-09",
  "ssn": 6.6,
  "smoothed_ssn": 20.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1932-10",
  "ssn": 14.8,
  "smoothed_ssn": 19.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1932-11",
  "ssn": 13.7,
  "smoothed_ssn": 17.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1932-12",
  "ssn": 18.5,
  "smoothed_ssn": 15.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1933-01",
  "ssn": 20.4,
  "smoothed_ssn": 14,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1933-02",
  "ssn": 36.9,
  "smoothed_ssn": 13.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1933-03",
  "ssn": 16.8,
  "smoothed_ssn": 12.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1933-04",
  "ssn": 4.9,
  "smoothed_ssn": 12.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1933-05",
  "ssn": 5.3,
  "smoothed_ssn": 11.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1933-06",
  "ssn": 8.7,
  "smoothed_ssn": 10.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1933-07",
  "ssn": 4.7,
  "smoothed_ssn": 8.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1933-08",
  "ssn": 0.4,
  "smoothed_ssn": 7.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1933-09",
  "ssn": 8.5,
  "smoothed_ssn": 5.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1933-10",
  "ssn": 5,
  "smoothed_ssn": 6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1933-11",
  "ssn": 1,
  "smoothed_ssn": 7.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1933-12",
  "ssn": 0.4,
  "smoothed_ssn": 9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1934-01",
  "ssn": 5.7,
  "smoothed_ssn": 9.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1934-02",
  "ssn": 12.9,
  "smoothed_ssn": 10.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1934-03",
  "ssn": 7.2,
  "smoothed_ssn": 11,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1934-04",
  "ssn": 18.8,
  "smoothed_ssn": 11.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1934-05",
  "ssn": 32.9,
  "smoothed_ssn": 11.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1934-06",
  "ssn": 11.2,
  "smoothed_ssn": 13.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1934-07",
  "ssn": 15.3,
  "smoothed_ssn": 15.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1934-08",
  "ssn": 13.9,
  "smoothed_ssn": 17.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1934-09",
  "ssn": 6.7,
  "smoothed_ssn": 19.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1934-10",
  "ssn": 9.5,
  "smoothed_ssn": 21.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1934-11",
  "ssn": 14.5,
  "smoothed_ssn": 21.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1934-12",
  "ssn": 25.7,
  "smoothed_ssn": 24.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1935-01",
  "ssn": 31.1,
  "smoothed_ssn": 29.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1935-02",
  "ssn": 34.1,
  "smoothed_ssn": 32.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1935-03",
  "ssn": 38.5,
  "smoothed_ssn": 36.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1935-04",
  "ssn": 20.4,
  "smoothed_ssn": 42.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1935-05",
  "ssn": 45.4,
  "smoothed_ssn": 49.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1935-06",
  "ssn": 76.2,
  "smoothed_ssn": 56.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1935-07",
  "ssn": 56.5,
  "smoothed_ssn": 63.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1935-08",
  "ssn": 50.2,
  "smoothed_ssn": 69.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1935-09",
  "ssn": 70.1,
  "smoothed_ssn": 77.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1935-10",
  "ssn": 88.7,
  "smoothed_ssn": 85.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1935-11",
  "ssn": 107,
  "smoothed_ssn": 91.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1935-12",
  "ssn": 102.5,
  "smoothed_ssn": 95.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1936-01",
  "ssn": 104.7,
  "smoothed_ssn": 98.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1936-02",
  "ssn": 123.9,
  "smoothed_ssn": 103.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1936-03",
  "ssn": 128.4,
  "smoothed_ssn": 109.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1936-04",
  "ssn": 124.8,
  "smoothed_ssn": 114.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1936-05",
  "ssn": 90.9,
  "smoothed_ssn": 120.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1936-06",
  "ssn": 116.7,
  "smoothed_ssn": 128.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1936-07",
  "ssn": 87.2,
  "smoothed_ssn": 137.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1936-08",
  "ssn": 145,
  "smoothed_ssn": 146.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1936-09",
  "ssn": 126.7,
  "smoothed_ssn": 150.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1936-10",
  "ssn": 148.2,
  "smoothed_ssn": 153.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1936-11",
  "ssn": 192.3,
  "smoothed_ssn": 160.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1936-12",
  "ssn": 205.6,
  "smoothed_ssn": 168.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1937-01",
  "ssn": 220.9,
  "smoothed_ssn": 179.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1937-02",
  "ssn": 214.1,
  "smoothed_ssn": 189.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1937-03",
  "ssn": 139.7,
  "smoothed_ssn": 194.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1937-04",
  "ssn": 182.2,
  "smoothed_ssn": 198.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1937-05",
  "ssn": 194.4,
  "smoothed_ssn": 198.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1937-06",
  "ssn": 217.1,
  "smoothed_ssn": 193,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1937-07",
  "ssn": 241.8,
  "smoothed_ssn": 188.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1937-08",
  "ssn": 229.5,
  "smoothed_ssn": 185.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1937-09",
  "ssn": 167.9,
  "smoothed_ssn": 184.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1937-10",
  "ssn": 208.2,
  "smoothed_ssn": 184.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1937-11",
  "ssn": 123.9,
  "smoothed_ssn": 184.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1937-12",
  "ssn": 147.9,
  "smoothed_ssn": 183,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1938-01",
  "ssn": 164,
  "smoothed_ssn": 182.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1938-02",
  "ssn": 198.6,
  "smoothed_ssn": 182.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1938-03",
  "ssn": 144.2,
  "smoothed_ssn": 179.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1938-04",
  "ssn": 168.4,
  "smoothed_ssn": 177.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1938-05",
  "ssn": 212.3,
  "smoothed_ssn": 178.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1938-06",
  "ssn": 162.6,
  "smoothed_ssn": 182.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1938-07",
  "ssn": 275.6,
  "smoothed_ssn": 181.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1938-08",
  "ssn": 192.8,
  "smoothed_ssn": 177.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1938-09",
  "ssn": 149.3,
  "smoothed_ssn": 172.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1938-10",
  "ssn": 165.3,
  "smoothed_ssn": 171.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1938-11",
  "ssn": 203.6,
  "smoothed_ssn": 171.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1938-12",
  "ssn": 154.7,
  "smoothed_ssn": 171.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1939-01",
  "ssn": 133.9,
  "smoothed_ssn": 166.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1939-02",
  "ssn": 129,
  "smoothed_ssn": 161.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1939-03",
  "ssn": 107.8,
  "smoothed_ssn": 162.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1939-04",
  "ssn": 181.9,
  "smoothed_ssn": 163.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1939-05",
  "ssn": 197.3,
  "smoothed_ssn": 158.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1939-06",
  "ssn": 168.3,
  "smoothed_ssn": 151.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1939-07",
  "ssn": 162.6,
  "smoothed_ssn": 145.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1939-08",
  "ssn": 176.3,
  "smoothed_ssn": 142.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1939-09",
  "ssn": 187.7,
  "smoothed_ssn": 142.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1939-10",
  "ssn": 146.9,
  "smoothed_ssn": 140.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1939-11",
  "ssn": 113.7,
  "smoothed_ssn": 132.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1939-12",
  "ssn": 70.2,
  "smoothed_ssn": 127.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1940-01",
  "ssn": 84.1,
  "smoothed_ssn": 123.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1940-02",
  "ssn": 99.1,
  "smoothed_ssn": 121.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1940-03",
  "ssn": 138.9,
  "smoothed_ssn": 118.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1940-04",
  "ssn": 101.1,
  "smoothed_ssn": 113,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1940-05",
  "ssn": 90.6,
  "smoothed_ssn": 110,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1940-06",
  "ssn": 139.8,
  "smoothed_ssn": 111.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1940-07",
  "ssn": 112.5,
  "smoothed_ssn": 112.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1940-08",
  "ssn": 175.9,
  "smoothed_ssn": 111.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1940-09",
  "ssn": 110.8,
  "smoothed_ssn": 107.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1940-10",
  "ssn": 91.5,
  "smoothed_ssn": 103.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1940-11",
  "ssn": 97.4,
  "smoothed_ssn": 99.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1940-12",
  "ssn": 113.8,
  "smoothed_ssn": 96.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1941-01",
  "ssn": 76.1,
  "smoothed_ssn": 94.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1941-02",
  "ssn": 74.3,
  "smoothed_ssn": 91.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1941-03",
  "ssn": 77.5,
  "smoothed_ssn": 88,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1941-04",
  "ssn": 54.6,
  "smoothed_ssn": 87.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1941-05",
  "ssn": 49,
  "smoothed_ssn": 85.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1941-06",
  "ssn": 99.6,
  "smoothed_ssn": 81.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1941-07",
  "ssn": 111.4,
  "smoothed_ssn": 78.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1941-08",
  "ssn": 100.1,
  "smoothed_ssn": 78.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1941-09",
  "ssn": 109.8,
  "smoothed_ssn": 79.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1941-10",
  "ssn": 77.2,
  "smoothed_ssn": 81.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1941-11",
  "ssn": 64,
  "smoothed_ssn": 83.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1941-12",
  "ssn": 56.2,
  "smoothed_ssn": 79.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1942-01",
  "ssn": 59.5,
  "smoothed_ssn": 73.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1942-02",
  "ssn": 87.9,
  "smoothed_ssn": 67,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1942-03",
  "ssn": 90.4,
  "smoothed_ssn": 60.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1942-04",
  "ssn": 101.2,
  "smoothed_ssn": 55.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1942-05",
  "ssn": 41.8,
  "smoothed_ssn": 53.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1942-06",
  "ssn": 18.9,
  "smoothed_ssn": 51.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1942-07",
  "ssn": 29.6,
  "smoothed_ssn": 49.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1942-08",
  "ssn": 33.7,
  "smoothed_ssn": 46.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1942-09",
  "ssn": 28.7,
  "smoothed_ssn": 42.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1942-10",
  "ssn": 32,
  "smoothed_ssn": 38.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1942-11",
  "ssn": 51.3,
  "smoothed_ssn": 35.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1942-12",
  "ssn": 37.6,
  "smoothed_ssn": 34.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1943-01",
  "ssn": 20.7,
  "smoothed_ssn": 33.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1943-02",
  "ssn": 48.1,
  "smoothed_ssn": 33.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1943-03",
  "ssn": 45.7,
  "smoothed_ssn": 32.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1943-04",
  "ssn": 43.5,
  "smoothed_ssn": 31.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1943-05",
  "ssn": 23.6,
  "smoothed_ssn": 29.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1943-06",
  "ssn": 12.7,
  "smoothed_ssn": 27.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1943-07",
  "ssn": 22,
  "smoothed_ssn": 26.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1943-08",
  "ssn": 32.3,
  "smoothed_ssn": 24,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1943-09",
  "ssn": 16.7,
  "smoothed_ssn": 20.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1943-10",
  "ssn": 13,
  "smoothed_ssn": 18,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1943-11",
  "ssn": 17,
  "smoothed_ssn": 15.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1943-12",
  "ssn": 31.4,
  "smoothed_ssn": 14.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1944-01",
  "ssn": 6.1,
  "smoothed_ssn": 13.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1944-02",
  "ssn": 0.8,
  "smoothed_ssn": 12.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1944-03",
  "ssn": 18.3,
  "smoothed_ssn": 13,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1944-04",
  "ssn": 0.4,
  "smoothed_ssn": 13.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1944-05",
  "ssn": 4.1,
  "smoothed_ssn": 14.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1944-06",
  "ssn": 8.2,
  "smoothed_ssn": 15.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1944-07",
  "ssn": 8.5,
  "smoothed_ssn": 17,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1944-08",
  "ssn": 27.9,
  "smoothed_ssn": 18.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1944-09",
  "ssn": 23.7,
  "smoothed_ssn": 20.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1944-10",
  "ssn": 28.1,
  "smoothed_ssn": 23.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1944-11",
  "ssn": 17.9,
  "smoothed_ssn": 27.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1944-12",
  "ssn": 47.4,
  "smoothed_ssn": 31.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1945-01",
  "ssn": 30.8,
  "smoothed_ssn": 36.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1945-02",
  "ssn": 21.2,
  "smoothed_ssn": 39.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1945-03",
  "ssn": 35.9,
  "smoothed_ssn": 41.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1945-04",
  "ssn": 53.4,
  "smoothed_ssn": 46.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1945-05",
  "ssn": 51,
  "smoothed_ssn": 52.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1945-06",
  "ssn": 60.2,
  "smoothed_ssn": 55.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1945-07",
  "ssn": 71,
  "smoothed_ssn": 57.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1945-08",
  "ssn": 43.1,
  "smoothed_ssn": 64.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1945-09",
  "ssn": 58.1,
  "smoothed_ssn": 73.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1945-10",
  "ssn": 114.5,
  "smoothed_ssn": 80.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1945-11",
  "ssn": 76.6,
  "smoothed_ssn": 86.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1945-12",
  "ssn": 45.7,
  "smoothed_ssn": 93.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1946-01",
  "ssn": 79.3,
  "smoothed_ssn": 101,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1946-02",
  "ssn": 143.8,
  "smoothed_ssn": 111.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1946-03",
  "ssn": 127.7,
  "smoothed_ssn": 121.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1946-04",
  "ssn": 126.1,
  "smoothed_ssn": 128,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1946-05",
  "ssn": 141.6,
  "smoothed_ssn": 135.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1946-06",
  "ssn": 122.6,
  "smoothed_ssn": 147.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1946-07",
  "ssn": 193.7,
  "smoothed_ssn": 157.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1946-08",
  "ssn": 178.7,
  "smoothed_ssn": 163.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1946-09",
  "ssn": 157.4,
  "smoothed_ssn": 167.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1946-10",
  "ssn": 170.5,
  "smoothed_ssn": 173.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1946-11",
  "ssn": 206.3,
  "smoothed_ssn": 182.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1946-12",
  "ssn": 202.9,
  "smoothed_ssn": 193.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1947-01",
  "ssn": 163.7,
  "smoothed_ssn": 199.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1947-02",
  "ssn": 188.9,
  "smoothed_ssn": 204.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1947-03",
  "ssn": 183.8,
  "smoothed_ssn": 211.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1947-04",
  "ssn": 212.1,
  "smoothed_ssn": 217.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1947-05",
  "ssn": 285,
  "smoothed_ssn": 218.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1947-06",
  "ssn": 232.1,
  "smoothed_ssn": 216.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1947-07",
  "ssn": 223.5,
  "smoothed_ssn": 214.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1947-08",
  "ssn": 267.4,
  "smoothed_ssn": 210.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1947-09",
  "ssn": 239.9,
  "smoothed_ssn": 206,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1947-10",
  "ssn": 231.7,
  "smoothed_ssn": 206.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1947-11",
  "ssn": 181.3,
  "smoothed_ssn": 207.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1947-12",
  "ssn": 164.9,
  "smoothed_ssn": 205.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1948-01",
  "ssn": 153.6,
  "smoothed_ssn": 205,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1948-02",
  "ssn": 122,
  "smoothed_ssn": 202.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1948-03",
  "ssn": 134.3,
  "smoothed_ssn": 198.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1948-04",
  "ssn": 268.5,
  "smoothed_ssn": 195.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1948-05",
  "ssn": 246.4,
  "smoothed_ssn": 192.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1948-06",
  "ssn": 237.5,
  "smoothed_ssn": 191.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1948-07",
  "ssn": 201.4,
  "smoothed_ssn": 193.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1948-08",
  "ssn": 223.7,
  "smoothed_ssn": 199.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1948-09",
  "ssn": 202.9,
  "smoothed_ssn": 209.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1948-10",
  "ssn": 192.9,
  "smoothed_ssn": 210.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1948-11",
  "ssn": 135.6,
  "smoothed_ssn": 203.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1948-12",
  "ssn": 195.3,
  "smoothed_ssn": 197.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1949-01",
  "ssn": 168.6,
  "smoothed_ssn": 193.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1949-02",
  "ssn": 258,
  "smoothed_ssn": 190.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1949-03",
  "ssn": 223,
  "smoothed_ssn": 188.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1949-04",
  "ssn": 208.1,
  "smoothed_ssn": 188.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1949-05",
  "ssn": 150.4,
  "smoothed_ssn": 190.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1949-06",
  "ssn": 172.4,
  "smoothed_ssn": 192.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1949-07",
  "ssn": 178.3,
  "smoothed_ssn": 190.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1949-08",
  "ssn": 175.3,
  "smoothed_ssn": 184.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1949-09",
  "ssn": 205.8,
  "smoothed_ssn": 176.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1949-10",
  "ssn": 186.3,
  "smoothed_ssn": 171.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1949-11",
  "ssn": 203.2,
  "smoothed_ssn": 169.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1949-12",
  "ssn": 166.6,
  "smoothed_ssn": 167.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1950-01",
  "ssn": 143.9,
  "smoothed_ssn": 162.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1950-02",
  "ssn": 134.3,
  "smoothed_ssn": 158.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1950-03",
  "ssn": 155.4,
  "smoothed_ssn": 150.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1950-04",
  "ssn": 160.6,
  "smoothed_ssn": 141,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1950-05",
  "ssn": 150.5,
  "smoothed_ssn": 131.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1950-06",
  "ssn": 118.3,
  "smoothed_ssn": 122.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1950-07",
  "ssn": 128.9,
  "smoothed_ssn": 116.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1950-08",
  "ssn": 120.6,
  "smoothed_ssn": 111.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1950-09",
  "ssn": 72.7,
  "smoothed_ssn": 106.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1950-10",
  "ssn": 87,
  "smoothed_ssn": 102.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1950-11",
  "ssn": 77.7,
  "smoothed_ssn": 101.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1950-12",
  "ssn": 76.7,
  "smoothed_ssn": 102.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1951-01",
  "ssn": 85,
  "smoothed_ssn": 101.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1951-02",
  "ssn": 84.8,
  "smoothed_ssn": 98.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1951-03",
  "ssn": 79.3,
  "smoothed_ssn": 98.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1951-04",
  "ssn": 131.7,
  "smoothed_ssn": 100.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1951-05",
  "ssn": 153.7,
  "smoothed_ssn": 99.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1951-06",
  "ssn": 142.4,
  "smoothed_ssn": 98.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1951-07",
  "ssn": 87.2,
  "smoothed_ssn": 97.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1951-08",
  "ssn": 86.5,
  "smoothed_ssn": 94,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1951-09",
  "ssn": 117.7,
  "smoothed_ssn": 89.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1951-10",
  "ssn": 73.3,
  "smoothed_ssn": 84,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1951-11",
  "ssn": 74.2,
  "smoothed_ssn": 75.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1951-12",
  "ssn": 65,
  "smoothed_ssn": 66.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1952-01",
  "ssn": 57.9,
  "smoothed_ssn": 61.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1952-02",
  "ssn": 32.4,
  "smoothed_ssn": 59.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1952-03",
  "ssn": 31.5,
  "smoothed_ssn": 56.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1952-04",
  "ssn": 41.7,
  "smoothed_ssn": 51.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1952-05",
  "ssn": 33.6,
  "smoothed_ssn": 48,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1952-06",
  "ssn": 52,
  "smoothed_ssn": 45.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1952-07",
  "ssn": 56.1,
  "smoothed_ssn": 44,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1952-08",
  "ssn": 77.8,
  "smoothed_ssn": 42.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1952-09",
  "ssn": 40.4,
  "smoothed_ssn": 40.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1952-10",
  "ssn": 34.2,
  "smoothed_ssn": 39.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1952-11",
  "ssn": 31.8,
  "smoothed_ssn": 38.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1952-12",
  "ssn": 48.9,
  "smoothed_ssn": 37.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1953-01",
  "ssn": 37.9,
  "smoothed_ssn": 34.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1953-02",
  "ssn": 5.9,
  "smoothed_ssn": 31,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1953-03",
  "ssn": 14.7,
  "smoothed_ssn": 28.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1953-04",
  "ssn": 39.6,
  "smoothed_ssn": 27.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1953-05",
  "ssn": 18.3,
  "smoothed_ssn": 25,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1953-06",
  "ssn": 31.5,
  "smoothed_ssn": 22,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1953-07",
  "ssn": 12.7,
  "smoothed_ssn": 18.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1953-08",
  "ssn": 33.6,
  "smoothed_ssn": 16.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1953-09",
  "ssn": 28,
  "smoothed_ssn": 16.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1953-10",
  "ssn": 12.3,
  "smoothed_ssn": 15.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1953-11",
  "ssn": 2.5,
  "smoothed_ssn": 12.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1953-12",
  "ssn": 3.9,
  "smoothed_ssn": 10.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1954-01",
  "ssn": 0.4,
  "smoothed_ssn": 9.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1954-02",
  "ssn": 0.8,
  "smoothed_ssn": 8.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1954-03",
  "ssn": 15.8,
  "smoothed_ssn": 6.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1954-04",
  "ssn": 2.7,
  "smoothed_ssn": 5.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1954-05",
  "ssn": 1.2,
  "smoothed_ssn": 5.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1954-06",
  "ssn": 0.4,
  "smoothed_ssn": 6.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1954-07",
  "ssn": 7.3,
  "smoothed_ssn": 7.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1954-08",
  "ssn": 12.6,
  "smoothed_ssn": 10.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1954-09",
  "ssn": 2.3,
  "smoothed_ssn": 11.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1954-10",
  "ssn": 10.5,
  "smoothed_ssn": 11.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1954-11",
  "ssn": 13.4,
  "smoothed_ssn": 13.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1954-12",
  "ssn": 11.3,
  "smoothed_ssn": 17.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1955-01",
  "ssn": 33.4,
  "smoothed_ssn": 20.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1955-02",
  "ssn": 29.9,
  "smoothed_ssn": 23.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1955-03",
  "ssn": 7.3,
  "smoothed_ssn": 28,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1955-04",
  "ssn": 16.4,
  "smoothed_ssn": 33.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1955-05",
  "ssn": 41.3,
  "smoothed_ssn": 41.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1955-06",
  "ssn": 45.2,
  "smoothed_ssn": 50,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1955-07",
  "ssn": 38.2,
  "smoothed_ssn": 57,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1955-08",
  "ssn": 58,
  "smoothed_ssn": 66,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1955-09",
  "ssn": 60.8,
  "smoothed_ssn": 78.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1955-10",
  "ssn": 83,
  "smoothed_ssn": 91.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1955-11",
  "ssn": 126.3,
  "smoothed_ssn": 103.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1955-12",
  "ssn": 108.8,
  "smoothed_ssn": 114.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1956-01",
  "ssn": 104.1,
  "smoothed_ssn": 125.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1956-02",
  "ssn": 175.6,
  "smoothed_ssn": 139.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1956-03",
  "ssn": 167.7,
  "smoothed_ssn": 154.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1956-04",
  "ssn": 156.7,
  "smoothed_ssn": 168.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1956-05",
  "ssn": 193.4,
  "smoothed_ssn": 180.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1956-06",
  "ssn": 165.1,
  "smoothed_ssn": 193.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1956-07",
  "ssn": 182.7,
  "smoothed_ssn": 206.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1956-08",
  "ssn": 240.2,
  "smoothed_ssn": 211.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1956-09",
  "ssn": 245.4,
  "smoothed_ssn": 214.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1956-10",
  "ssn": 219.9,
  "smoothed_ssn": 220.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1956-11",
  "ssn": 285,
  "smoothed_ssn": 226,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1956-12",
  "ssn": 272,
  "smoothed_ssn": 232.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1957-01",
  "ssn": 233.7,
  "smoothed_ssn": 241.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1957-02",
  "ssn": 184.5,
  "smoothed_ssn": 243.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1957-03",
  "ssn": 222.8,
  "smoothed_ssn": 246.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1957-04",
  "ssn": 248,
  "smoothed_ssn": 256.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1957-05",
  "ssn": 233,
  "smoothed_ssn": 262.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1957-06",
  "ssn": 284.3,
  "smoothed_ssn": 266.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1957-07",
  "ssn": 265.1,
  "smoothed_ssn": 271.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1957-08",
  "ssn": 223.7,
  "smoothed_ssn": 275.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1957-09",
  "ssn": 334,
  "smoothed_ssn": 279.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1957-10",
  "ssn": 359.4,
  "smoothed_ssn": 282.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1957-11",
  "ssn": 298.6,
  "smoothed_ssn": 284.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1957-12",
  "ssn": 339,
  "smoothed_ssn": 283.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1958-01",
  "ssn": 286.7,
  "smoothed_ssn": 281.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1958-02",
  "ssn": 233.6,
  "smoothed_ssn": 284.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1958-03",
  "ssn": 270,
  "smoothed_ssn": 285,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1958-04",
  "ssn": 277.6,
  "smoothed_ssn": 278.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1958-05",
  "ssn": 248.2,
  "smoothed_ssn": 271,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1958-06",
  "ssn": 242.9,
  "smoothed_ssn": 264.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1958-07",
  "ssn": 271,
  "smoothed_ssn": 262.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1958-08",
  "ssn": 283.5,
  "smoothed_ssn": 261.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1958-09",
  "ssn": 285.1,
  "smoothed_ssn": 260.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1958-10",
  "ssn": 256.9,
  "smoothed_ssn": 258.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1958-11",
  "ssn": 215.6,
  "smoothed_ssn": 255.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1958-12",
  "ssn": 265.7,
  "smoothed_ssn": 255.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1959-01",
  "ssn": 307.7,
  "smoothed_ssn": 252.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1959-02",
  "ssn": 202.6,
  "smoothed_ssn": 250.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1959-03",
  "ssn": 263,
  "smoothed_ssn": 247.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1959-04",
  "ssn": 231.3,
  "smoothed_ssn": 239.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1959-05",
  "ssn": 243.6,
  "smoothed_ssn": 233.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1959-06",
  "ssn": 238.9,
  "smoothed_ssn": 228.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1959-07",
  "ssn": 211.9,
  "smoothed_ssn": 220.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1959-08",
  "ssn": 282.6,
  "smoothed_ssn": 214.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1959-09",
  "ssn": 205.6,
  "smoothed_ssn": 207.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1959-10",
  "ssn": 157.7,
  "smoothed_ssn": 199.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1959-11",
  "ssn": 175.6,
  "smoothed_ssn": 194.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1959-12",
  "ssn": 177.1,
  "smoothed_ssn": 187.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1960-01",
  "ssn": 207.2,
  "smoothed_ssn": 182.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1960-02",
  "ssn": 149.9,
  "smoothed_ssn": 177,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1960-03",
  "ssn": 144.6,
  "smoothed_ssn": 172.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1960-04",
  "ssn": 172.7,
  "smoothed_ssn": 169.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1960-05",
  "ssn": 169.3,
  "smoothed_ssn": 165.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1960-06",
  "ssn": 156,
  "smoothed_ssn": 161.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1960-07",
  "ssn": 172.4,
  "smoothed_ssn": 153.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1960-08",
  "ssn": 190,
  "smoothed_ssn": 145,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1960-09",
  "ssn": 180.1,
  "smoothed_ssn": 138.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1960-10",
  "ssn": 117.3,
  "smoothed_ssn": 132.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1960-11",
  "ssn": 126.9,
  "smoothed_ssn": 124.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1960-12",
  "ssn": 121.2,
  "smoothed_ssn": 118.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1961-01",
  "ssn": 82.1,
  "smoothed_ssn": 113.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1961-02",
  "ssn": 65.4,
  "smoothed_ssn": 105.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1961-03",
  "ssn": 75.2,
  "smoothed_ssn": 97.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1961-04",
  "ssn": 86.9,
  "smoothed_ssn": 91.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1961-05",
  "ssn": 72.3,
  "smoothed_ssn": 85.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1961-06",
  "ssn": 109.5,
  "smoothed_ssn": 79.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1961-07",
  "ssn": 99.3,
  "smoothed_ssn": 75.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1961-08",
  "ssn": 79.2,
  "smoothed_ssn": 74.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1961-09",
  "ssn": 90.1,
  "smoothed_ssn": 74.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1961-10",
  "ssn": 53.7,
  "smoothed_ssn": 73,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1961-11",
  "ssn": 46.5,
  "smoothed_ssn": 71.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1961-12",
  "ssn": 56.9,
  "smoothed_ssn": 69.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1962-01",
  "ssn": 55.1,
  "smoothed_ssn": 64.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1962-02",
  "ssn": 71.7,
  "smoothed_ssn": 59.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1962-03",
  "ssn": 64.9,
  "smoothed_ssn": 56.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1962-04",
  "ssn": 65.9,
  "smoothed_ssn": 56.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1962-05",
  "ssn": 61.9,
  "smoothed_ssn": 55.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1962-06",
  "ssn": 59.6,
  "smoothed_ssn": 54.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1962-07",
  "ssn": 31.4,
  "smoothed_ssn": 52.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1962-08",
  "ssn": 31.5,
  "smoothed_ssn": 49.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1962-09",
  "ssn": 72.7,
  "smoothed_ssn": 46.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1962-10",
  "ssn": 56.1,
  "smoothed_ssn": 44,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1962-11",
  "ssn": 38.8,
  "smoothed_ssn": 42.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1962-12",
  "ssn": 33.2,
  "smoothed_ssn": 42.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1963-01",
  "ssn": 28.7,
  "smoothed_ssn": 42.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1963-02",
  "ssn": 35.2,
  "smoothed_ssn": 42.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1963-03",
  "ssn": 24.8,
  "smoothed_ssn": 42.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1963-04",
  "ssn": 41.7,
  "smoothed_ssn": 41.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1963-05",
  "ssn": 61.1,
  "smoothed_ssn": 41.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1963-06",
  "ssn": 51.2,
  "smoothed_ssn": 40.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1963-07",
  "ssn": 28.7,
  "smoothed_ssn": 39.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1963-08",
  "ssn": 47.5,
  "smoothed_ssn": 39,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1963-09",
  "ssn": 55.2,
  "smoothed_ssn": 38.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1963-10",
  "ssn": 50.1,
  "smoothed_ssn": 37.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1963-11",
  "ssn": 33.7,
  "smoothed_ssn": 34.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1963-12",
  "ssn": 21.6,
  "smoothed_ssn": 30.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1964-01",
  "ssn": 22.6,
  "smoothed_ssn": 28.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1964-02",
  "ssn": 25.3,
  "smoothed_ssn": 25.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1964-03",
  "ssn": 24.1,
  "smoothed_ssn": 22.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1964-04",
  "ssn": 12.9,
  "smoothed_ssn": 18.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1964-05",
  "ssn": 14.3,
  "smoothed_ssn": 16,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1964-06",
  "ssn": 13.5,
  "smoothed_ssn": 15,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1964-07",
  "ssn": 4.8,
  "smoothed_ssn": 15.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1964-08",
  "ssn": 13.8,
  "smoothed_ssn": 15.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1964-09",
  "ssn": 7,
  "smoothed_ssn": 14.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1964-10",
  "ssn": 9.2,
  "smoothed_ssn": 14.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1964-11",
  "ssn": 11.1,
  "smoothed_ssn": 15,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1964-12",
  "ssn": 22.1,
  "smoothed_ssn": 16.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1965-01",
  "ssn": 25.4,
  "smoothed_ssn": 17.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1965-02",
  "ssn": 20.8,
  "smoothed_ssn": 17.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1965-03",
  "ssn": 17.5,
  "smoothed_ssn": 18.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1965-04",
  "ssn": 10.2,
  "smoothed_ssn": 19.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1965-05",
  "ssn": 34.5,
  "smoothed_ssn": 21.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1965-06",
  "ssn": 23.3,
  "smoothed_ssn": 21.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1965-07",
  "ssn": 17.3,
  "smoothed_ssn": 22.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1965-08",
  "ssn": 13.3,
  "smoothed_ssn": 23.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1965-09",
  "ssn": 24.5,
  "smoothed_ssn": 25.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1965-10",
  "ssn": 29.1,
  "smoothed_ssn": 28.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1965-11",
  "ssn": 22.8,
  "smoothed_ssn": 32.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1965-12",
  "ssn": 24.7,
  "smoothed_ssn": 35.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1966-01",
  "ssn": 40.3,
  "smoothed_ssn": 39.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1966-02",
  "ssn": 35.3,
  "smoothed_ssn": 44.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1966-03",
  "ssn": 36.4,
  "smoothed_ssn": 49.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1966-04",
  "ssn": 69,
  "smoothed_ssn": 53.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1966-05",
  "ssn": 64.2,
  "smoothed_ssn": 57.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1966-06",
  "ssn": 67.7,
  "smoothed_ssn": 63.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1966-07",
  "ssn": 80.2,
  "smoothed_ssn": 71.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1966-08",
  "ssn": 72.6,
  "smoothed_ssn": 80.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1966-09",
  "ssn": 71.1,
  "smoothed_ssn": 89.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1966-10",
  "ssn": 81.2,
  "smoothed_ssn": 95.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1966-11",
  "ssn": 81,
  "smoothed_ssn": 99.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1966-12",
  "ssn": 99.8,
  "smoothed_ssn": 103,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1967-01",
  "ssn": 157,
  "smoothed_ssn": 106.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1967-02",
  "ssn": 132.6,
  "smoothed_ssn": 111.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1967-03",
  "ssn": 158.3,
  "smoothed_ssn": 116.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1967-04",
  "ssn": 98.4,
  "smoothed_ssn": 119.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1967-05",
  "ssn": 122.5,
  "smoothed_ssn": 123.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1967-06",
  "ssn": 95.4,
  "smoothed_ssn": 129.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1967-07",
  "ssn": 129.5,
  "smoothed_ssn": 133.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1967-08",
  "ssn": 151.8,
  "smoothed_ssn": 135,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1967-09",
  "ssn": 108.7,
  "smoothed_ssn": 134.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1967-10",
  "ssn": 125,
  "smoothed_ssn": 134.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1967-11",
  "ssn": 133.6,
  "smoothed_ssn": 137.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1967-12",
  "ssn": 179,
  "smoothed_ssn": 142.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1968-01",
  "ssn": 172.5,
  "smoothed_ssn": 145.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1968-02",
  "ssn": 158.5,
  "smoothed_ssn": 145.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1968-03",
  "ssn": 130.5,
  "smoothed_ssn": 148.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1968-04",
  "ssn": 115,
  "smoothed_ssn": 151.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1968-05",
  "ssn": 180,
  "smoothed_ssn": 152.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1968-06",
  "ssn": 156.2,
  "smoothed_ssn": 150.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1968-07",
  "ssn": 136.2,
  "smoothed_ssn": 148.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1968-08",
  "ssn": 154.8,
  "smoothed_ssn": 148.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1968-09",
  "ssn": 166,
  "smoothed_ssn": 151.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1968-10",
  "ssn": 152.5,
  "smoothed_ssn": 155.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1968-11",
  "ssn": 121.7,
  "smoothed_ssn": 156.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1968-12",
  "ssn": 155.5,
  "smoothed_ssn": 156,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1969-01",
  "ssn": 147.8,
  "smoothed_ssn": 155.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1969-02",
  "ssn": 170.5,
  "smoothed_ssn": 155.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1969-03",
  "ssn": 192.3,
  "smoothed_ssn": 152.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1969-04",
  "ssn": 151.1,
  "smoothed_ssn": 150.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1969-05",
  "ssn": 169.9,
  "smoothed_ssn": 150.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1969-06",
  "ssn": 150.1,
  "smoothed_ssn": 150.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1969-07",
  "ssn": 137.1,
  "smoothed_ssn": 149.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1969-08",
  "ssn": 138.8,
  "smoothed_ssn": 150.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1969-09",
  "ssn": 129.3,
  "smoothed_ssn": 149.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1969-10",
  "ssn": 135.4,
  "smoothed_ssn": 147.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1969-11",
  "ssn": 132.4,
  "smoothed_ssn": 148,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1969-12",
  "ssn": 138.6,
  "smoothed_ssn": 148.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1970-01",
  "ssn": 157.9,
  "smoothed_ssn": 149.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1970-02",
  "ssn": 180.8,
  "smoothed_ssn": 150.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1970-03",
  "ssn": 145.7,
  "smoothed_ssn": 150.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1970-04",
  "ssn": 155.1,
  "smoothed_ssn": 150.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1970-05",
  "ssn": 180.5,
  "smoothed_ssn": 149.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1970-06",
  "ssn": 151.3,
  "smoothed_ssn": 149.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1970-07",
  "ssn": 159.3,
  "smoothed_ssn": 147,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1970-08",
  "ssn": 131.7,
  "smoothed_ssn": 143,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1970-09",
  "ssn": 140.8,
  "smoothed_ssn": 137.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1970-10",
  "ssn": 122.6,
  "smoothed_ssn": 132.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1970-11",
  "ssn": 134.8,
  "smoothed_ssn": 126.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1970-12",
  "ssn": 118.2,
  "smoothed_ssn": 119,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1971-01",
  "ssn": 129.2,
  "smoothed_ssn": 113.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1971-02",
  "ssn": 111.8,
  "smoothed_ssn": 110.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1971-03",
  "ssn": 85.9,
  "smoothed_ssn": 105.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1971-04",
  "ssn": 101.6,
  "smoothed_ssn": 100.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1971-05",
  "ssn": 81.5,
  "smoothed_ssn": 96.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1971-06",
  "ssn": 70.7,
  "smoothed_ssn": 94.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1971-07",
  "ssn": 114.7,
  "smoothed_ssn": 92.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1971-08",
  "ssn": 87,
  "smoothed_ssn": 91.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1971-09",
  "ssn": 71.3,
  "smoothed_ssn": 93.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1971-10",
  "ssn": 73.4,
  "smoothed_ssn": 93.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1971-11",
  "ssn": 89.5,
  "smoothed_ssn": 94.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1971-12",
  "ssn": 116.5,
  "smoothed_ssn": 98.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1972-01",
  "ssn": 87,
  "smoothed_ssn": 100.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1972-02",
  "ssn": 125.3,
  "smoothed_ssn": 100.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1972-03",
  "ssn": 113.5,
  "smoothed_ssn": 102.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1972-04",
  "ssn": 89.6,
  "smoothed_ssn": 104,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1972-05",
  "ssn": 113.9,
  "smoothed_ssn": 103.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1972-06",
  "ssn": 124.7,
  "smoothed_ssn": 99.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1972-07",
  "ssn": 108.3,
  "smoothed_ssn": 96.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1972-08",
  "ssn": 108.9,
  "smoothed_ssn": 92.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1972-09",
  "ssn": 90.7,
  "smoothed_ssn": 88.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1972-10",
  "ssn": 86.9,
  "smoothed_ssn": 85.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1972-11",
  "ssn": 59.2,
  "smoothed_ssn": 83.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1972-12",
  "ssn": 64.3,
  "smoothed_ssn": 78.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1973-01",
  "ssn": 61.8,
  "smoothed_ssn": 72.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1973-02",
  "ssn": 60.9,
  "smoothed_ssn": 66.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1973-03",
  "ssn": 65.4,
  "smoothed_ssn": 62.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1973-04",
  "ssn": 81.8,
  "smoothed_ssn": 60.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1973-05",
  "ssn": 60.3,
  "smoothed_ssn": 57.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1973-06",
  "ssn": 56.1,
  "smoothed_ssn": 55.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1973-07",
  "ssn": 33.2,
  "smoothed_ssn": 53.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1973-08",
  "ssn": 36.6,
  "smoothed_ssn": 51.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1973-09",
  "ssn": 84.1,
  "smoothed_ssn": 49,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1973-10",
  "ssn": 43.7,
  "smoothed_ssn": 46.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1973-11",
  "ssn": 34.3,
  "smoothed_ssn": 45.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1973-12",
  "ssn": 33.3,
  "smoothed_ssn": 45,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1974-01",
  "ssn": 39.4,
  "smoothed_ssn": 46.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1974-02",
  "ssn": 37.3,
  "smoothed_ssn": 49.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1974-03",
  "ssn": 30.9,
  "smoothed_ssn": 48.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1974-04",
  "ssn": 57.5,
  "smoothed_ssn": 48.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1974-05",
  "ssn": 56.3,
  "smoothed_ssn": 49.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1974-06",
  "ssn": 51.5,
  "smoothed_ssn": 49.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1974-07",
  "ssn": 79.1,
  "smoothed_ssn": 48.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1974-08",
  "ssn": 47.9,
  "smoothed_ssn": 47.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1974-09",
  "ssn": 57.2,
  "smoothed_ssn": 45.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1974-10",
  "ssn": 67.2,
  "smoothed_ssn": 43.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1974-11",
  "ssn": 35.9,
  "smoothed_ssn": 39.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1974-12",
  "ssn": 29.6,
  "smoothed_ssn": 36.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1975-01",
  "ssn": 27.3,
  "smoothed_ssn": 33,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1975-02",
  "ssn": 16.7,
  "smoothed_ssn": 31.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1975-03",
  "ssn": 16.9,
  "smoothed_ssn": 30.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1975-04",
  "ssn": 7.7,
  "smoothed_ssn": 26.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1975-05",
  "ssn": 13.1,
  "smoothed_ssn": 24.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1975-06",
  "ssn": 16.7,
  "smoothed_ssn": 23.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1975-07",
  "ssn": 40.4,
  "smoothed_ssn": 21.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1975-08",
  "ssn": 56.7,
  "smoothed_ssn": 20.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1975-09",
  "ssn": 20.3,
  "smoothed_ssn": 20.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1975-10",
  "ssn": 13.6,
  "smoothed_ssn": 22.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1975-11",
  "ssn": 27.9,
  "smoothed_ssn": 23.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1975-12",
  "ssn": 11.6,
  "smoothed_ssn": 23.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1976-01",
  "ssn": 11.9,
  "smoothed_ssn": 22.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1976-02",
  "ssn": 6.4,
  "smoothed_ssn": 19.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1976-03",
  "ssn": 31.5,
  "smoothed_ssn": 17.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1976-04",
  "ssn": 27.3,
  "smoothed_ssn": 18.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1976-05",
  "ssn": 18.2,
  "smoothed_ssn": 18.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1976-06",
  "ssn": 17.9,
  "smoothed_ssn": 17.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1976-07",
  "ssn": 2.9,
  "smoothed_ssn": 18.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1976-08",
  "ssn": 24.1,
  "smoothed_ssn": 20.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1976-09",
  "ssn": 20,
  "smoothed_ssn": 20.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1976-10",
  "ssn": 29.7,
  "smoothed_ssn": 19.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1976-11",
  "ssn": 7.9,
  "smoothed_ssn": 19.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1976-12",
  "ssn": 22.3,
  "smoothed_ssn": 21.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1977-01",
  "ssn": 23.8,
  "smoothed_ssn": 24.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1977-02",
  "ssn": 33.3,
  "smoothed_ssn": 26.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1977-03",
  "ssn": 13,
  "smoothed_ssn": 28.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1977-04",
  "ssn": 19,
  "smoothed_ssn": 31.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1977-05",
  "ssn": 27,
  "smoothed_ssn": 34.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1977-06",
  "ssn": 54.9,
  "smoothed_ssn": 37.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1977-07",
  "ssn": 30.6,
  "smoothed_ssn": 41.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1977-08",
  "ssn": 43,
  "smoothed_ssn": 47.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1977-09",
  "ssn": 62.4,
  "smoothed_ssn": 55.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1977-10",
  "ssn": 62.1,
  "smoothed_ssn": 64.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1977-11",
  "ssn": 41.6,
  "smoothed_ssn": 73.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1977-12",
  "ssn": 61.4,
  "smoothed_ssn": 80.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1978-01",
  "ssn": 73.7,
  "smoothed_ssn": 86.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1978-02",
  "ssn": 132.6,
  "smoothed_ssn": 91.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1978-03",
  "ssn": 108.4,
  "smoothed_ssn": 98.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1978-04",
  "ssn": 141.2,
  "smoothed_ssn": 109,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1978-05",
  "ssn": 117.1,
  "smoothed_ssn": 117.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1978-06",
  "ssn": 134.6,
  "smoothed_ssn": 126.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1978-07",
  "ssn": 99.7,
  "smoothed_ssn": 138,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1978-08",
  "ssn": 82.4,
  "smoothed_ssn": 147.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1978-09",
  "ssn": 195.7,
  "smoothed_ssn": 153.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1978-10",
  "ssn": 177.1,
  "smoothed_ssn": 157.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1978-11",
  "ssn": 138.5,
  "smoothed_ssn": 160.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1978-12",
  "ssn": 173.9,
  "smoothed_ssn": 166.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1979-01",
  "ssn": 235.9,
  "smoothed_ssn": 175.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1979-02",
  "ssn": 194.7,
  "smoothed_ssn": 185.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1979-03",
  "ssn": 195.3,
  "smoothed_ssn": 193.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1979-04",
  "ssn": 143.7,
  "smoothed_ssn": 199.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1979-05",
  "ssn": 190.3,
  "smoothed_ssn": 208.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1979-06",
  "ssn": 211.7,
  "smoothed_ssn": 216.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1979-07",
  "ssn": 225.7,
  "smoothed_ssn": 219.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1979-08",
  "ssn": 201.4,
  "smoothed_ssn": 220.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1979-09",
  "ssn": 266.9,
  "smoothed_ssn": 220.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1979-10",
  "ssn": 263.6,
  "smoothed_ssn": 223.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1979-11",
  "ssn": 259.5,
  "smoothed_ssn": 229.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1979-12",
  "ssn": 249.6,
  "smoothed_ssn": 232.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1980-01",
  "ssn": 226.1,
  "smoothed_ssn": 232,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1980-02",
  "ssn": 219.4,
  "smoothed_ssn": 230.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1980-03",
  "ssn": 178.7,
  "smoothed_ssn": 227.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1980-04",
  "ssn": 232.2,
  "smoothed_ssn": 224.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1980-05",
  "ssn": 254.7,
  "smoothed_ssn": 221.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1980-06",
  "ssn": 222.7,
  "smoothed_ssn": 219.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1980-07",
  "ssn": 192.9,
  "smoothed_ssn": 216.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1980-08",
  "ssn": 191.7,
  "smoothed_ssn": 212,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1980-09",
  "ssn": 219.6,
  "smoothed_ssn": 211.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1980-10",
  "ssn": 233.3,
  "smoothed_ssn": 211.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1980-11",
  "ssn": 209.5,
  "smoothed_ssn": 209.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1980-12",
  "ssn": 246.9,
  "smoothed_ssn": 202.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1981-01",
  "ssn": 156.6,
  "smoothed_ssn": 199.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1981-02",
  "ssn": 189.9,
  "smoothed_ssn": 202.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1981-03",
  "ssn": 196.6,
  "smoothed_ssn": 205.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1981-04",
  "ssn": 225.3,
  "smoothed_ssn": 205.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1981-05",
  "ssn": 194.7,
  "smoothed_ssn": 204.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1981-06",
  "ssn": 131.6,
  "smoothed_ssn": 200.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1981-07",
  "ssn": 205.3,
  "smoothed_ssn": 198.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1981-08",
  "ssn": 242.5,
  "smoothed_ssn": 199.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1981-09",
  "ssn": 245.3,
  "smoothed_ssn": 202.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1981-10",
  "ssn": 216.2,
  "smoothed_ssn": 201.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1981-11",
  "ssn": 186,
  "smoothed_ssn": 196,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1981-12",
  "ssn": 195.4,
  "smoothed_ssn": 194.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1982-01",
  "ssn": 149.8,
  "smoothed_ssn": 192.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1982-02",
  "ssn": 230.9,
  "smoothed_ssn": 186.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1982-03",
  "ssn": 221.1,
  "smoothed_ssn": 180,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1982-04",
  "ssn": 170.3,
  "smoothed_ssn": 173.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1982-05",
  "ssn": 119.3,
  "smoothed_ssn": 167.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1982-06",
  "ssn": 163.7,
  "smoothed_ssn": 164,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1982-07",
  "ssn": 139.4,
  "smoothed_ssn": 161.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1982-08",
  "ssn": 161.9,
  "smoothed_ssn": 153.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1982-09",
  "ssn": 167.4,
  "smoothed_ssn": 141.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1982-10",
  "ssn": 134.3,
  "smoothed_ssn": 133.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1982-11",
  "ssn": 127.5,
  "smoothed_ssn": 131.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1982-12",
  "ssn": 169,
  "smoothed_ssn": 130.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1983-01",
  "ssn": 115.5,
  "smoothed_ssn": 127.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1983-02",
  "ssn": 73.1,
  "smoothed_ssn": 123.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1983-03",
  "ssn": 88.7,
  "smoothed_ssn": 117.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1983-04",
  "ssn": 109.6,
  "smoothed_ssn": 110.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1983-05",
  "ssn": 132.5,
  "smoothed_ssn": 104.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1983-06",
  "ssn": 131.5,
  "smoothed_ssn": 95.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1983-07",
  "ssn": 108.9,
  "smoothed_ssn": 89.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1983-08",
  "ssn": 96,
  "smoothed_ssn": 88.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1983-09",
  "ssn": 69.9,
  "smoothed_ssn": 91.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1983-10",
  "ssn": 72.5,
  "smoothed_ssn": 92,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1983-11",
  "ssn": 45.7,
  "smoothed_ssn": 89.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1983-12",
  "ssn": 45.6,
  "smoothed_ssn": 85.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1984-01",
  "ssn": 74.8,
  "smoothed_ssn": 80.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1984-02",
  "ssn": 110.2,
  "smoothed_ssn": 75.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1984-03",
  "ssn": 116.7,
  "smoothed_ssn": 71.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1984-04",
  "ssn": 90.4,
  "smoothed_ssn": 66.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1984-05",
  "ssn": 96.9,
  "smoothed_ssn": 63.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1984-06",
  "ssn": 65.1,
  "smoothed_ssn": 61.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1984-07",
  "ssn": 55.7,
  "smoothed_ssn": 58.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1984-08",
  "ssn": 35,
  "smoothed_ssn": 52.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1984-09",
  "ssn": 22.6,
  "smoothed_ssn": 44.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1984-10",
  "ssn": 12.6,
  "smoothed_ssn": 37.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1984-11",
  "ssn": 26.5,
  "smoothed_ssn": 31.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1984-12",
  "ssn": 21.4,
  "smoothed_ssn": 27.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1985-01",
  "ssn": 17.8,
  "smoothed_ssn": 25.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1985-02",
  "ssn": 20.7,
  "smoothed_ssn": 23.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1985-03",
  "ssn": 16.9,
  "smoothed_ssn": 21.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1985-04",
  "ssn": 20.4,
  "smoothed_ssn": 21.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1985-05",
  "ssn": 32.4,
  "smoothed_ssn": 21.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1985-06",
  "ssn": 28.3,
  "smoothed_ssn": 20.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1985-07",
  "ssn": 39.9,
  "smoothed_ssn": 19.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1985-08",
  "ssn": 10.1,
  "smoothed_ssn": 19.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1985-09",
  "ssn": 4.3,
  "smoothed_ssn": 19.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1985-10",
  "ssn": 22,
  "smoothed_ssn": 19.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1985-11",
  "ssn": 17.9,
  "smoothed_ssn": 19.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1985-12",
  "ssn": 15.8,
  "smoothed_ssn": 17.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1986-01",
  "ssn": 2.8,
  "smoothed_ssn": 15.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1986-02",
  "ssn": 27.9,
  "smoothed_ssn": 14.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1986-03",
  "ssn": 13.8,
  "smoothed_ssn": 14.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1986-04",
  "ssn": 22.4,
  "smoothed_ssn": 15.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1986-05",
  "ssn": 16.1,
  "smoothed_ssn": 15.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1986-06",
  "ssn": 0.6,
  "smoothed_ssn": 15.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1986-07",
  "ssn": 18.1,
  "smoothed_ssn": 15.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1986-08",
  "ssn": 9.9,
  "smoothed_ssn": 14.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1986-09",
  "ssn": 5.1,
  "smoothed_ssn": 13.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1986-10",
  "ssn": 40.1,
  "smoothed_ssn": 14.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1986-11",
  "ssn": 15.4,
  "smoothed_ssn": 16.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1986-12",
  "ssn": 5.8,
  "smoothed_ssn": 18.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1987-01",
  "ssn": 9.8,
  "smoothed_ssn": 19.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1987-02",
  "ssn": 3.4,
  "smoothed_ssn": 22.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1987-03",
  "ssn": 17.4,
  "smoothed_ssn": 25.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1987-04",
  "ssn": 46,
  "smoothed_ssn": 28,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1987-05",
  "ssn": 39.1,
  "smoothed_ssn": 30.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1987-06",
  "ssn": 18.8,
  "smoothed_ssn": 32.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1987-07",
  "ssn": 38.2,
  "smoothed_ssn": 36.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1987-08",
  "ssn": 47.9,
  "smoothed_ssn": 40.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1987-09",
  "ssn": 42.2,
  "smoothed_ssn": 45.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1987-10",
  "ssn": 63.4,
  "smoothed_ssn": 51,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1987-11",
  "ssn": 48.8,
  "smoothed_ssn": 55.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1987-12",
  "ssn": 29.1,
  "smoothed_ssn": 60.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1988-01",
  "ssn": 70.5,
  "smoothed_ssn": 69.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1988-02",
  "ssn": 45.4,
  "smoothed_ssn": 76.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1988-03",
  "ssn": 91.2,
  "smoothed_ssn": 84.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1988-04",
  "ssn": 108.8,
  "smoothed_ssn": 93,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1988-05",
  "ssn": 74.2,
  "smoothed_ssn": 101.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1988-06",
  "ssn": 124.3,
  "smoothed_ssn": 114.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1988-07",
  "ssn": 131.4,
  "smoothed_ssn": 128.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1988-08",
  "ssn": 139.4,
  "smoothed_ssn": 141.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1988-09",
  "ssn": 142.7,
  "smoothed_ssn": 151.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1988-10",
  "ssn": 156.5,
  "smoothed_ssn": 156.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1988-11",
  "ssn": 156.8,
  "smoothed_ssn": 164.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1988-12",
  "ssn": 231.2,
  "smoothed_ssn": 176.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1989-01",
  "ssn": 210.1,
  "smoothed_ssn": 184.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1989-02",
  "ssn": 208.7,
  "smoothed_ssn": 190.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1989-03",
  "ssn": 170.4,
  "smoothed_ssn": 198,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1989-04",
  "ssn": 166.3,
  "smoothed_ssn": 203.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1989-05",
  "ssn": 195.4,
  "smoothed_ssn": 209.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1989-06",
  "ssn": 284.5,
  "smoothed_ssn": 212.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1989-07",
  "ssn": 180.5,
  "smoothed_ssn": 212,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1989-08",
  "ssn": 232,
  "smoothed_ssn": 211.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1989-09",
  "ssn": 225.1,
  "smoothed_ssn": 210.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1989-10",
  "ssn": 212.2,
  "smoothed_ssn": 212.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1989-11",
  "ssn": 238.2,
  "smoothed_ssn": 212.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1989-12",
  "ssn": 211.4,
  "smoothed_ssn": 206.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1990-01",
  "ssn": 227.4,
  "smoothed_ssn": 201.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1990-02",
  "ssn": 171.8,
  "smoothed_ssn": 202.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1990-03",
  "ssn": 191.7,
  "smoothed_ssn": 200.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1990-04",
  "ssn": 189.7,
  "smoothed_ssn": 198.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1990-05",
  "ssn": 175.2,
  "smoothed_ssn": 195.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1990-06",
  "ssn": 153.3,
  "smoothed_ssn": 192,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1990-07",
  "ssn": 191.1,
  "smoothed_ssn": 190.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1990-08",
  "ssn": 252.1,
  "smoothed_ssn": 191.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1990-09",
  "ssn": 169.1,
  "smoothed_ssn": 194.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1990-10",
  "ssn": 199.4,
  "smoothed_ssn": 195.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1990-11",
  "ssn": 178.8,
  "smoothed_ssn": 195.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1990-12",
  "ssn": 197.1,
  "smoothed_ssn": 197.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1991-01",
  "ssn": 195.3,
  "smoothed_ssn": 202.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1991-02",
  "ssn": 240.3,
  "smoothed_ssn": 204.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1991-03",
  "ssn": 197,
  "smoothed_ssn": 203.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1991-04",
  "ssn": 197.6,
  "smoothed_ssn": 203.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1991-05",
  "ssn": 166.9,
  "smoothed_ssn": 202.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1991-06",
  "ssn": 224.7,
  "smoothed_ssn": 202.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1991-07",
  "ssn": 240.2,
  "smoothed_ssn": 203.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1991-08",
  "ssn": 240.8,
  "smoothed_ssn": 203.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1991-09",
  "ssn": 168.9,
  "smoothed_ssn": 200.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1991-10",
  "ssn": 197.1,
  "smoothed_ssn": 196.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1991-11",
  "ssn": 159.5,
  "smoothed_ssn": 191.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1991-12",
  "ssn": 212.6,
  "smoothed_ssn": 183.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1992-01",
  "ssn": 198.3,
  "smoothed_ssn": 172.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1992-02",
  "ssn": 230.7,
  "smoothed_ssn": 161.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1992-03",
  "ssn": 151,
  "smoothed_ssn": 151.8,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1992-04",
  "ssn": 142.2,
  "smoothed_ssn": 146,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1992-05",
  "ssn": 94.3,
  "smoothed_ssn": 142.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1992-06",
  "ssn": 98.5,
  "smoothed_ssn": 137.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1992-07",
  "ssn": 114.2,
  "smoothed_ssn": 128.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1992-08",
  "ssn": 91.9,
  "smoothed_ssn": 119.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1992-09",
  "ssn": 94,
  "smoothed_ssn": 113,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1992-10",
  "ssn": 133.4,
  "smoothed_ssn": 109,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1992-11",
  "ssn": 129.6,
  "smoothed_ssn": 106.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1992-12",
  "ssn": 122,
  "smoothed_ssn": 104.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1993-01",
  "ssn": 81.4,
  "smoothed_ssn": 101.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1993-02",
  "ssn": 127.8,
  "smoothed_ssn": 99.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1993-03",
  "ssn": 102.4,
  "smoothed_ssn": 95.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1993-04",
  "ssn": 94.4,
  "smoothed_ssn": 90.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1993-05",
  "ssn": 78.8,
  "smoothed_ssn": 84.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1993-06",
  "ssn": 69.6,
  "smoothed_ssn": 78.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1993-07",
  "ssn": 80.4,
  "smoothed_ssn": 76.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1993-08",
  "ssn": 62.5,
  "smoothed_ssn": 73.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1993-09",
  "ssn": 31.2,
  "smoothed_ssn": 68.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1993-10",
  "ssn": 71.1,
  "smoothed_ssn": 63.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1993-11",
  "ssn": 48.2,
  "smoothed_ssn": 58.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1993-12",
  "ssn": 68.4,
  "smoothed_ssn": 55.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1994-01",
  "ssn": 84.9,
  "smoothed_ssn": 52.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1994-02",
  "ssn": 54.9,
  "smoothed_ssn": 50.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1994-03",
  "ssn": 47.5,
  "smoothed_ssn": 49.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1994-04",
  "ssn": 27.4,
  "smoothed_ssn": 49.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1994-05",
  "ssn": 29.8,
  "smoothed_ssn": 48.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1994-06",
  "ssn": 39.7,
  "smoothed_ssn": 46.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1994-07",
  "ssn": 50.6,
  "smoothed_ssn": 42.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1994-08",
  "ssn": 34.3,
  "smoothed_ssn": 40.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1994-09",
  "ssn": 40.5,
  "smoothed_ssn": 39.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1994-10",
  "ssn": 67.1,
  "smoothed_ssn": 39.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1994-11",
  "ssn": 29.5,
  "smoothed_ssn": 38.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1994-12",
  "ssn": 32.2,
  "smoothed_ssn": 37.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1995-01",
  "ssn": 32.6,
  "smoothed_ssn": 35.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1995-02",
  "ssn": 45.8,
  "smoothed_ssn": 33.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1995-03",
  "ssn": 46.3,
  "smoothed_ssn": 32,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1995-04",
  "ssn": 21.6,
  "smoothed_ssn": 29.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1995-05",
  "ssn": 19.4,
  "smoothed_ssn": 27.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1995-06",
  "ssn": 22.5,
  "smoothed_ssn": 25.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1995-07",
  "ssn": 20.4,
  "smoothed_ssn": 24.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1995-08",
  "ssn": 18.2,
  "smoothed_ssn": 22,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1995-09",
  "ssn": 15.7,
  "smoothed_ssn": 19,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1995-10",
  "ssn": 30.6,
  "smoothed_ssn": 17,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1995-11",
  "ssn": 14,
  "smoothed_ssn": 15.9,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1995-12",
  "ssn": 14.9,
  "smoothed_ssn": 15.1,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1996-01",
  "ssn": 13.3,
  "smoothed_ssn": 14.5,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1996-02",
  "ssn": 7.7,
  "smoothed_ssn": 14.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1996-03",
  "ssn": 12.6,
  "smoothed_ssn": 13.7,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1996-04",
  "ssn": 6.8,
  "smoothed_ssn": 12,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1996-05",
  "ssn": 7.6,
  "smoothed_ssn": 11.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1996-06",
  "ssn": 16.5,
  "smoothed_ssn": 11.6,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1996-07",
  "ssn": 11.8,
  "smoothed_ssn": 11.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1996-08",
  "ssn": 19.7,
  "smoothed_ssn": 11.2,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1996-09",
  "ssn": 3,
  "smoothed_ssn": 11.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1996-10",
  "ssn": 0.7,
  "smoothed_ssn": 12,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1996-11",
  "ssn": 24.9,
  "smoothed_ssn": 13.4,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1996-12",
  "ssn": 14,
  "smoothed_ssn": 14.3,
  "observed_swpc_ssn": -1,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1997-01",
  "ssn": 7.4,
  "smoothed_ssn": 14.5,
  "observed_swpc_ssn": 8.68,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1997-02",
  "ssn": 11,
  "smoothed_ssn": 15.2,
  "observed_swpc_ssn": 11.32,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1997-03",
  "ssn": 12.1,
  "smoothed_ssn": 18.3,
  "observed_swpc_ssn": 13.71,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1997-04",
  "ssn": 23,
  "smoothed_ssn": 22,
  "observed_swpc_ssn": 24.47,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1997-05",
  "ssn": 25.4,
  "smoothed_ssn": 24.4,
  "observed_swpc_ssn": 29.61,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1997-06",
  "ssn": 20.8,
  "smoothed_ssn": 27.2,
  "observed_swpc_ssn": 22.07,
  "smoothed_swpc_ssn": -1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1997-07",
  "ssn": 12.9,
  "smoothed_ssn": 30.4,
  "observed_swpc_ssn": 16.97,
  "smoothed_swpc_ssn": 32.5,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1997-08",
  "ssn": 35.7,
  "smoothed_ssn": 33.6,
  "observed_swpc_ssn": 36.13,
  "smoothed_swpc_ssn": 36.1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1997-09",
  "ssn": 59.7,
  "smoothed_ssn": 38.2,
  "observed_swpc_ssn": 59.33,
  "smoothed_swpc_ssn": 40.7,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1997-10",
  "ssn": 32.8,
  "smoothed_ssn": 43.1,
  "observed_swpc_ssn": 33.65,
  "smoothed_swpc_ssn": 45.6,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1997-11",
  "ssn": 50.4,
  "smoothed_ssn": 47.1,
  "observed_swpc_ssn": 53.47,
  "smoothed_swpc_ssn": 49.5,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1997-12",
  "ssn": 55.5,
  "smoothed_ssn": 52,
  "observed_swpc_ssn": 58.29,
  "smoothed_swpc_ssn": 54.3,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1998-01",
  "ssn": 44.5,
  "smoothed_ssn": 58.4,
  "observed_swpc_ssn": 51.84,
  "smoothed_swpc_ssn": 60.7,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1998-02",
  "ssn": 50.2,
  "smoothed_ssn": 65.4,
  "observed_swpc_ssn": 54.36,
  "smoothed_swpc_ssn": 67.5,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1998-03",
  "ssn": 82,
  "smoothed_ssn": 72,
  "observed_swpc_ssn": 81.81,
  "smoothed_swpc_ssn": 73.5,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1998-04",
  "ssn": 70.6,
  "smoothed_ssn": 76.9,
  "observed_swpc_ssn": 73.57,
  "smoothed_swpc_ssn": 77.7,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1998-05",
  "ssn": 74,
  "smoothed_ssn": 80.8,
  "observed_swpc_ssn": 74.29,
  "smoothed_swpc_ssn": 81.5,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1998-06",
  "ssn": 90.5,
  "smoothed_ssn": 85.4,
  "observed_swpc_ssn": 93.57,
  "smoothed_swpc_ssn": 86,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1998-07",
  "ssn": 96.7,
  "smoothed_ssn": 89.8,
  "observed_swpc_ssn": 98.26,
  "smoothed_swpc_ssn": 90.4,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1998-08",
  "ssn": 121.1,
  "smoothed_ssn": 93.5,
  "observed_swpc_ssn": 118.61,
  "smoothed_swpc_ssn": 93.8,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1998-09",
  "ssn": 132,
  "smoothed_ssn": 96.4,
  "observed_swpc_ssn": 118.97,
  "smoothed_swpc_ssn": 96.2,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1998-10",
  "ssn": 78.5,
  "smoothed_ssn": 98.2,
  "observed_swpc_ssn": 77.03,
  "smoothed_swpc_ssn": 97.7,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1998-11",
  "ssn": 97.3,
  "smoothed_ssn": 102.3,
  "observed_swpc_ssn": 99.47,
  "smoothed_swpc_ssn": 101.3,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1998-12",
  "ssn": 119.2,
  "smoothed_ssn": 110.4,
  "observed_swpc_ssn": 120.77,
  "smoothed_swpc_ssn": 108.8,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1999-01",
  "ssn": 86,
  "smoothed_ssn": 118.4,
  "observed_swpc_ssn": 94.26,
  "smoothed_swpc_ssn": 116.6,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1999-02",
  "ssn": 98,
  "smoothed_ssn": 122.5,
  "observed_swpc_ssn": 93.39,
  "smoothed_swpc_ssn": 120.2,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1999-03",
  "ssn": 103.5,
  "smoothed_ssn": 122.3,
  "observed_swpc_ssn": 100.45,
  "smoothed_swpc_ssn": 120.5,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1999-04",
  "ssn": 93.6,
  "smoothed_ssn": 125,
  "observed_swpc_ssn": 92.93,
  "smoothed_swpc_ssn": 123.8,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1999-05",
  "ssn": 149.6,
  "smoothed_ssn": 132.6,
  "observed_swpc_ssn": 140.55,
  "smoothed_swpc_ssn": 131.7,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1999-06",
  "ssn": 207.2,
  "smoothed_ssn": 136.3,
  "observed_swpc_ssn": 207.97,
  "smoothed_swpc_ssn": 136,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1999-07",
  "ssn": 173.5,
  "smoothed_ssn": 138.1,
  "observed_swpc_ssn": 169.19,
  "smoothed_swpc_ssn": 138,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1999-08",
  "ssn": 142.3,
  "smoothed_ssn": 142.9,
  "observed_swpc_ssn": 136.1,
  "smoothed_swpc_ssn": 142.8,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1999-09",
  "ssn": 106.3,
  "smoothed_ssn": 150.5,
  "observed_swpc_ssn": 107.37,
  "smoothed_swpc_ssn": 150,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1999-10",
  "ssn": 168.7,
  "smoothed_ssn": 159.3,
  "observed_swpc_ssn": 167.68,
  "smoothed_swpc_ssn": 158.5,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1999-11",
  "ssn": 188.3,
  "smoothed_ssn": 164.1,
  "observed_swpc_ssn": 199.3,
  "smoothed_swpc_ssn": 164.7,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "1999-12",
  "ssn": 116.8,
  "smoothed_ssn": 164,
  "observed_swpc_ssn": 123.52,
  "smoothed_swpc_ssn": 165.9,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2000-01",
  "ssn": 133.1,
  "smoothed_ssn": 166.1,
  "observed_swpc_ssn": 140.81,
  "smoothed_swpc_ssn": 168,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2000-02",
  "ssn": 165.7,
  "smoothed_ssn": 170.6,
  "observed_swpc_ssn": 161.86,
  "smoothed_swpc_ssn": 172.1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2000-03",
  "ssn": 217.7,
  "smoothed_ssn": 174.3,
  "observed_swpc_ssn": 203.61,
  "smoothed_swpc_ssn": 175.5,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2000-04",
  "ssn": 191.5,
  "smoothed_ssn": 175.2,
  "observed_swpc_ssn": 193.37,
  "smoothed_swpc_ssn": 176.4,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2000-05",
  "ssn": 165.9,
  "smoothed_ssn": 172.9,
  "observed_swpc_ssn": 188.81,
  "smoothed_swpc_ssn": 173.1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2000-06",
  "ssn": 188,
  "smoothed_ssn": 172.7,
  "observed_swpc_ssn": 190.1,
  "smoothed_swpc_ssn": 172,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2000-07",
  "ssn": 244.3,
  "smoothed_ssn": 174.2,
  "observed_swpc_ssn": 236.68,
  "smoothed_swpc_ssn": 173.1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2000-08",
  "ssn": 180.5,
  "smoothed_ssn": 172.8,
  "observed_swpc_ssn": 167,
  "smoothed_swpc_ssn": 171.9,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2000-09",
  "ssn": 156,
  "smoothed_ssn": 168.8,
  "observed_swpc_ssn": 157.87,
  "smoothed_swpc_ssn": 169,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2000-10",
  "ssn": 141.6,
  "smoothed_ssn": 165.3,
  "observed_swpc_ssn": 138.9,
  "smoothed_swpc_ssn": 166.3,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2000-11",
  "ssn": 158.1,
  "smoothed_ssn": 163.1,
  "observed_swpc_ssn": 149.9,
  "smoothed_swpc_ssn": 162.8,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2000-12",
  "ssn": 143.3,
  "smoothed_ssn": 162.7,
  "observed_swpc_ssn": 146.42,
  "smoothed_swpc_ssn": 160.8,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2001-01",
  "ssn": 142.6,
  "smoothed_ssn": 158.3,
  "observed_swpc_ssn": 142.71,
  "smoothed_swpc_ssn": 156.4,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2001-02",
  "ssn": 121.5,
  "smoothed_ssn": 152.5,
  "observed_swpc_ssn": 131,
  "smoothed_swpc_ssn": 151.4,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2001-03",
  "ssn": 165.8,
  "smoothed_ssn": 155.1,
  "observed_swpc_ssn": 166.74,
  "smoothed_swpc_ssn": 154.1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2001-04",
  "ssn": 161.7,
  "smoothed_ssn": 160.7,
  "observed_swpc_ssn": 163.6,
  "smoothed_swpc_ssn": 159.5,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2001-05",
  "ssn": 142.1,
  "smoothed_ssn": 163.7,
  "observed_swpc_ssn": 135.1,
  "smoothed_swpc_ssn": 163.1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2001-06",
  "ssn": 202.9,
  "smoothed_ssn": 167.4,
  "observed_swpc_ssn": 196.67,
  "smoothed_swpc_ssn": 167.3,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2001-07",
  "ssn": 123,
  "smoothed_ssn": 172,
  "observed_swpc_ssn": 124.58,
  "smoothed_swpc_ssn": 172.2,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2001-08",
  "ssn": 161.5,
  "smoothed_ssn": 175.8,
  "observed_swpc_ssn": 159.39,
  "smoothed_swpc_ssn": 176.7,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2001-09",
  "ssn": 238.2,
  "smoothed_ssn": 177.1,
  "observed_swpc_ssn": 229.13,
  "smoothed_swpc_ssn": 178.8,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2001-10",
  "ssn": 194.1,
  "smoothed_ssn": 177.3,
  "observed_swpc_ssn": 197.03,
  "smoothed_swpc_ssn": 179.5,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2001-11",
  "ssn": 176.6,
  "smoothed_ssn": 180.3,
  "observed_swpc_ssn": 178.63,
  "smoothed_swpc_ssn": 183.7,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2001-12",
  "ssn": 213.4,
  "smoothed_ssn": 179.1,
  "observed_swpc_ssn": 217.55,
  "smoothed_swpc_ssn": 184.5,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2002-01",
  "ssn": 184.6,
  "smoothed_ssn": 177.6,
  "observed_swpc_ssn": 189.03,
  "smoothed_swpc_ssn": 184.8,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2002-02",
  "ssn": 170.2,
  "smoothed_ssn": 179.7,
  "observed_swpc_ssn": 194.5,
  "smoothed_swpc_ssn": 188.6,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2002-03",
  "ssn": 147.1,
  "smoothed_ssn": 178.2,
  "observed_swpc_ssn": 153.06,
  "smoothed_swpc_ssn": 189,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2002-04",
  "ssn": 186.9,
  "smoothed_ssn": 174.4,
  "observed_swpc_ssn": 194.9,
  "smoothed_swpc_ssn": 186.2,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2002-05",
  "ssn": 187.5,
  "smoothed_ssn": 171.3,
  "observed_swpc_ssn": 204.13,
  "smoothed_swpc_ssn": 183.6,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2002-06",
  "ssn": 128.8,
  "smoothed_ssn": 166.9,
  "observed_swpc_ssn": 146,
  "smoothed_swpc_ssn": 179.8,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2002-07",
  "ssn": 161,
  "smoothed_ssn": 161.5,
  "observed_swpc_ssn": 183.45,
  "smoothed_swpc_ssn": 175.2,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2002-08",
  "ssn": 175.6,
  "smoothed_ssn": 155.4,
  "observed_swpc_ssn": 190.97,
  "smoothed_swpc_ssn": 169.1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2002-09",
  "ssn": 187.9,
  "smoothed_ssn": 149.5,
  "observed_swpc_ssn": 206.43,
  "smoothed_swpc_ssn": 163.3,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2002-10",
  "ssn": 151.2,
  "smoothed_ssn": 143.9,
  "observed_swpc_ssn": 153.87,
  "smoothed_swpc_ssn": 158.5,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2002-11",
  "ssn": 147.2,
  "smoothed_ssn": 136,
  "observed_swpc_ssn": 159.8,
  "smoothed_swpc_ssn": 150.4,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2002-12",
  "ssn": 135.3,
  "smoothed_ssn": 131.4,
  "observed_swpc_ssn": 144.77,
  "smoothed_swpc_ssn": 144.5,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2003-01",
  "ssn": 133.5,
  "smoothed_ssn": 129.6,
  "observed_swpc_ssn": 150.03,
  "smoothed_swpc_ssn": 141.2,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2003-02",
  "ssn": 75.7,
  "smoothed_ssn": 125.7,
  "observed_swpc_ssn": 87.89,
  "smoothed_swpc_ssn": 135.9,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2003-03",
  "ssn": 100.7,
  "smoothed_ssn": 118.7,
  "observed_swpc_ssn": 119.71,
  "smoothed_swpc_ssn": 127.6,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2003-04",
  "ssn": 97.9,
  "smoothed_ssn": 111.9,
  "observed_swpc_ssn": 114.33,
  "smoothed_swpc_ssn": 120.9,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2003-05",
  "ssn": 86.8,
  "smoothed_ssn": 107,
  "observed_swpc_ssn": 89.61,
  "smoothed_swpc_ssn": 117.1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2003-06",
  "ssn": 118.7,
  "smoothed_ssn": 101.7,
  "observed_swpc_ssn": 118.43,
  "smoothed_swpc_ssn": 111.9,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2003-07",
  "ssn": 128.3,
  "smoothed_ssn": 96,
  "observed_swpc_ssn": 132.84,
  "smoothed_swpc_ssn": 105.3,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2003-08",
  "ssn": 115.4,
  "smoothed_ssn": 92.9,
  "observed_swpc_ssn": 114.32,
  "smoothed_swpc_ssn": 101.2,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2003-09",
  "ssn": 78.5,
  "smoothed_ssn": 91.8,
  "observed_swpc_ssn": 82.57,
  "smoothed_swpc_ssn": 99.1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2003-10",
  "ssn": 97.8,
  "smoothed_ssn": 89.1,
  "observed_swpc_ssn": 118.94,
  "smoothed_swpc_ssn": 95.1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2003-11",
  "ssn": 82.9,
  "smoothed_ssn": 86.9,
  "observed_swpc_ssn": 103.03,
  "smoothed_swpc_ssn": 92.3,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2003-12",
  "ssn": 72.2,
  "smoothed_ssn": 84.1,
  "observed_swpc_ssn": 75.74,
  "smoothed_swpc_ssn": 90.1,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2004-01",
  "ssn": 60.6,
  "smoothed_ssn": 80.1,
  "observed_swpc_ssn": 62.32,
  "smoothed_swpc_ssn": 86.5,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2004-02",
  "ssn": 74.6,
  "smoothed_ssn": 76.4,
  "observed_swpc_ssn": 75.59,
  "smoothed_swpc_ssn": 82.8,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2004-03",
  "ssn": 74.8,
  "smoothed_ssn": 73.2,
  "observed_swpc_ssn": 80.97,
  "smoothed_swpc_ssn": 79.5,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2004-04",
  "ssn": 59.2,
  "smoothed_ssn": 71,
  "observed_swpc_ssn": 59.33,
  "smoothed_swpc_ssn": 76.5,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2004-05",
  "ssn": 72.8,
  "smoothed_ssn": 69.5,
  "observed_swpc_ssn": 77.32,
  "smoothed_swpc_ssn": 73.4,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2004-06",
  "ssn": 66.5,
  "smoothed_ssn": 67.1,
  "observed_swpc_ssn": 77,
  "smoothed_swpc_ssn": 70.3,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2004-07",
  "ssn": 83.8,
  "smoothed_ssn": 64.8,
  "observed_swpc_ssn": 87.81,
  "smoothed_swpc_ssn": 68.2,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2004-08",
  "ssn": 69.7,
  "smoothed_ssn": 63,
  "observed_swpc_ssn": 69.55,
  "smoothed_swpc_ssn": 66.5,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2004-09",
  "ssn": 48.8,
  "smoothed_ssn": 60.2,
  "observed_swpc_ssn": 50,
  "smoothed_swpc_ssn": 63.6,
  "f10.7": -1,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2004-10",
  "ssn": 74.2,
  "smoothed_ssn": 57.9,
  "observed_swpc_ssn": 77.94,
  "smoothed_swpc_ssn": 61.2,
  "f10.7": 137.56,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2004-11",
  "ssn": 70.1,
  "smoothed_ssn": 56.6,
  "observed_swpc_ssn": 70.5,
  "smoothed_swpc_ssn": 59.9,
  "f10.7": 115.98,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2004-12",
  "ssn": 28.9,
  "smoothed_ssn": 55.7,
  "observed_swpc_ssn": 34.74,
  "smoothed_swpc_ssn": 58.7,
  "f10.7": 95.66,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2005-01",
  "ssn": 48.1,
  "smoothed_ssn": 54.5,
  "observed_swpc_ssn": 52,
  "smoothed_swpc_ssn": 57.2,
  "f10.7": 102.86,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2005-02",
  "ssn": 43.5,
  "smoothed_ssn": 53.2,
  "observed_swpc_ssn": 45.36,
  "smoothed_swpc_ssn": 56.3,
  "f10.7": 97.3,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2005-03",
  "ssn": 39.6,
  "smoothed_ssn": 52.3,
  "observed_swpc_ssn": 41,
  "smoothed_swpc_ssn": 55.6,
  "f10.7": 90.04,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2005-04",
  "ssn": 38.7,
  "smoothed_ssn": 49.3,
  "observed_swpc_ssn": 41.5,
  "smoothed_swpc_ssn": 52.5,
  "f10.7": 85.92,
  "smoothed_f10.7": 100
  },
  {
  "time-tag": "2005-05",
  "ssn": 61.9,
  "smoothed_ssn": 45,
  "observed_swpc_ssn": 65.35,
  "smoothed_swpc_ssn": 48.2,
  "f10.7": 101.65,
  "smoothed_f10.7": 96.2
  },
  {
  "time-tag": "2005-06",
  "ssn": 56.8,
  "smoothed_ssn": 44.5,
  "observed_swpc_ssn": 59.77,
  "smoothed_swpc_ssn": 47.7,
  "f10.7": 94.09,
  "smoothed_f10.7": 94.8
  },
  {
  "time-tag": "2005-07",
  "ssn": 62.4,
  "smoothed_ssn": 44.6,
  "observed_swpc_ssn": 68.71,
  "smoothed_swpc_ssn": 47.8,
  "f10.7": 100.64,
  "smoothed_f10.7": 93.8
  },
  {
  "time-tag": "2005-08",
  "ssn": 60.5,
  "smoothed_ssn": 41.9,
  "observed_swpc_ssn": 65.58,
  "smoothed_swpc_ssn": 45.1,
  "f10.7": 98.24,
  "smoothed_f10.7": 92.1
  },
  {
  "time-tag": "2005-09",
  "ssn": 37.2,
  "smoothed_ssn": 39.4,
  "observed_swpc_ssn": 39.2,
  "smoothed_swpc_ssn": 42.6,
  "f10.7": 109.55,
  "smoothed_f10.7": 90.6
  },
  {
  "time-tag": "2005-10",
  "ssn": 13.2,
  "smoothed_ssn": 38.9,
  "observed_swpc_ssn": 12.97,
  "smoothed_swpc_ssn": 42.4,
  "f10.7": 76.71,
  "smoothed_f10.7": 90.1
  },
  {
  "time-tag": "2005-11",
  "ssn": 27.5,
  "smoothed_ssn": 38.4,
  "observed_swpc_ssn": 32.17,
  "smoothed_swpc_ssn": 41.9,
  "f10.7": 86.38,
  "smoothed_f10.7": 89.4
  },
  {
  "time-tag": "2005-12",
  "ssn": 59.3,
  "smoothed_ssn": 36,
  "observed_swpc_ssn": 62.58,
  "smoothed_swpc_ssn": 39.3,
  "f10.7": 90.85,
  "smoothed_f10.7": 87.8
  },
  {
  "time-tag": "2006-01",
  "ssn": 20.9,
  "smoothed_ssn": 33,
  "observed_swpc_ssn": 26.68,
  "smoothed_swpc_ssn": 36,
  "f10.7": 83.32,
  "smoothed_f10.7": 86.1
  },
  {
  "time-tag": "2006-02",
  "ssn": 5.7,
  "smoothed_ssn": 29.7,
  "observed_swpc_ssn": 5.25,
  "smoothed_swpc_ssn": 32.3,
  "f10.7": 76.52,
  "smoothed_f10.7": 84.3
  },
  {
  "time-tag": "2006-03",
  "ssn": 17.3,
  "smoothed_ssn": 27.4,
  "observed_swpc_ssn": 21.26,
  "smoothed_swpc_ssn": 29.9,
  "f10.7": 75.5,
  "smoothed_f10.7": 82.2
  },
  {
  "time-tag": "2006-04",
  "ssn": 50.3,
  "smoothed_ssn": 27,
  "observed_swpc_ssn": 55.17,
  "smoothed_swpc_ssn": 29.4,
  "f10.7": 89.27,
  "smoothed_f10.7": 80.8
  },
  {
  "time-tag": "2006-05",
  "ssn": 37.2,
  "smoothed_ssn": 27.4,
  "observed_swpc_ssn": 39.61,
  "smoothed_swpc_ssn": 29.5,
  "f10.7": 80.83,
  "smoothed_f10.7": 80.7
  },
  {
  "time-tag": "2006-06",
  "ssn": 24.5,
  "smoothed_ssn": 26.2,
  "observed_swpc_ssn": 24.43,
  "smoothed_swpc_ssn": 27.8,
  "f10.7": 76.68,
  "smoothed_f10.7": 80.6
  },
  {
  "time-tag": "2006-07",
  "ssn": 22.2,
  "smoothed_ssn": 25,
  "observed_swpc_ssn": 23.1,
  "smoothed_swpc_ssn": 26.2,
  "f10.7": 75.88,
  "smoothed_f10.7": 80.6
  },
  {
  "time-tag": "2006-08",
  "ssn": 20.8,
  "smoothed_ssn": 25.9,
  "observed_swpc_ssn": 22.81,
  "smoothed_swpc_ssn": 26.8,
  "f10.7": 79.59,
  "smoothed_f10.7": 80.7
  },
  {
  "time-tag": "2006-09",
  "ssn": 23.7,
  "smoothed_ssn": 26,
  "observed_swpc_ssn": 25.2,
  "smoothed_swpc_ssn": 26.8,
  "f10.7": 78.02,
  "smoothed_f10.7": 80.6
  },
  {
  "time-tag": "2006-10",
  "ssn": 14.9,
  "smoothed_ssn": 23.7,
  "observed_swpc_ssn": 15.77,
  "smoothed_swpc_ssn": 24.3,
  "f10.7": 74.43,
  "smoothed_f10.7": 79.8
  },
  {
  "time-tag": "2006-11",
  "ssn": 35.7,
  "smoothed_ssn": 21.1,
  "observed_swpc_ssn": 31.5,
  "smoothed_swpc_ssn": 21.5,
  "f10.7": 86.43,
  "smoothed_f10.7": 78.8
  },
  {
  "time-tag": "2006-12",
  "ssn": 22.3,
  "smoothed_ssn": 20.2,
  "observed_swpc_ssn": 22.19,
  "smoothed_swpc_ssn": 20.5,
  "f10.7": 90.39,
  "smoothed_f10.7": 78.4
  },
  {
  "time-tag": "2007-01",
  "ssn": 29.3,
  "smoothed_ssn": 19.8,
  "observed_swpc_ssn": 28.19,
  "smoothed_swpc_ssn": 20,
  "f10.7": 83.76,
  "smoothed_f10.7": 78.1
  },
  {
  "time-tag": "2007-02",
  "ssn": 18.4,
  "smoothed_ssn": 19,
  "observed_swpc_ssn": 17.29,
  "smoothed_swpc_ssn": 19.2,
  "f10.7": 77.65,
  "smoothed_f10.7": 77.5
  },
  {
  "time-tag": "2007-03",
  "ssn": 7.2,
  "smoothed_ssn": 17.7,
  "observed_swpc_ssn": 9.77,
  "smoothed_swpc_ssn": 17.8,
  "f10.7": 72.24,
  "smoothed_f10.7": 76.6
  },
  {
  "time-tag": "2007-04",
  "ssn": 5.4,
  "smoothed_ssn": 16.4,
  "observed_swpc_ssn": 6.9,
  "smoothed_swpc_ssn": 16.3,
  "f10.7": 72.36,
  "smoothed_f10.7": 75.9
  },
  {
  "time-tag": "2007-05",
  "ssn": 19.5,
  "smoothed_ssn": 14.4,
  "observed_swpc_ssn": 19.77,
  "smoothed_swpc_ssn": 14.5,
  "f10.7": 74.36,
  "smoothed_f10.7": 74.9
  },
  {
  "time-tag": "2007-06",
  "ssn": 21.3,
  "smoothed_ssn": 12.8,
  "observed_swpc_ssn": 20.7,
  "smoothed_swpc_ssn": 13,
  "f10.7": 74.07,
  "smoothed_f10.7": 73.7
  },
  {
  "time-tag": "2007-07",
  "ssn": 15.1,
  "smoothed_ssn": 11.6,
  "observed_swpc_ssn": 15.61,
  "smoothed_swpc_ssn": 11.8,
  "f10.7": 71.48,
  "smoothed_f10.7": 72.7
  },
  {
  "time-tag": "2007-08",
  "ssn": 9.8,
  "smoothed_ssn": 9.9,
  "observed_swpc_ssn": 9.94,
  "smoothed_swpc_ssn": 10.3,
  "f10.7": 69.03,
  "smoothed_f10.7": 72.1
  },
  {
  "time-tag": "2007-09",
  "ssn": 4,
  "smoothed_ssn": 9.6,
  "observed_swpc_ssn": 4.8,
  "smoothed_swpc_ssn": 10,
  "f10.7": 66.98,
  "smoothed_f10.7": 71.8
  },
  {
  "time-tag": "2007-10",
  "ssn": 1.5,
  "smoothed_ssn": 9.9,
  "observed_swpc_ssn": 1.29,
  "smoothed_swpc_ssn": 10.2,
  "f10.7": 67.69,
  "smoothed_f10.7": 71.8
  },
  {
  "time-tag": "2007-11",
  "ssn": 2.8,
  "smoothed_ssn": 9.2,
  "observed_swpc_ssn": 2.5,
  "smoothed_swpc_ssn": 9.5,
  "f10.7": 69.39,
  "smoothed_f10.7": 71.4
  },
  {
  "time-tag": "2007-12",
  "ssn": 17.3,
  "smoothed_ssn": 7.9,
  "observed_swpc_ssn": 16.26,
  "smoothed_swpc_ssn": 8.3,
  "f10.7": 78.21,
  "smoothed_f10.7": 70.8
  },
  {
  "time-tag": "2008-01",
  "ssn": 4.1,
  "smoothed_ssn": 6.6,
  "observed_swpc_ssn": 5.16,
  "smoothed_swpc_ssn": 7,
  "f10.7": 74.02,
  "smoothed_f10.7": 70.2
  },
  {
  "time-tag": "2008-02",
  "ssn": 2.9,
  "smoothed_ssn": 5.6,
  "observed_swpc_ssn": 3.86,
  "smoothed_swpc_ssn": 5.9,
  "f10.7": 71.03,
  "smoothed_f10.7": 69.9
  },
  {
  "time-tag": "2008-03",
  "ssn": 15.5,
  "smoothed_ssn": 5.1,
  "observed_swpc_ssn": 15.87,
  "smoothed_swpc_ssn": 5.4,
  "f10.7": 72.99,
  "smoothed_f10.7": 69.8
  },
  {
  "time-tag": "2008-04",
  "ssn": 3.6,
  "smoothed_ssn": 5.1,
  "observed_swpc_ssn": 4.93,
  "smoothed_swpc_ssn": 5.4,
  "f10.7": 70.15,
  "smoothed_f10.7": 69.8
  },
  {
  "time-tag": "2008-05",
  "ssn": 4.6,
  "smoothed_ssn": 5.4,
  "observed_swpc_ssn": 5.74,
  "smoothed_swpc_ssn": 5.8,
  "f10.7": 68.32,
  "smoothed_f10.7": 69.8
  },
  {
  "time-tag": "2008-06",
  "ssn": 5.2,
  "smoothed_ssn": 4.8,
  "observed_swpc_ssn": 4.27,
  "smoothed_swpc_ssn": 5.3,
  "f10.7": 65.85,
  "smoothed_f10.7": 69.3
  },
  {
  "time-tag": "2008-07",
  "ssn": 0.6,
  "smoothed_ssn": 4,
  "observed_swpc_ssn": 1.1,
  "smoothed_swpc_ssn": 4.6,
  "f10.7": 65.67,
  "smoothed_f10.7": 68.8
  },
  {
  "time-tag": "2008-08",
  "ssn": 0.3,
  "smoothed_ssn": 3.8,
  "observed_swpc_ssn": 0,
  "smoothed_swpc_ssn": 4.4,
  "f10.7": 66.17,
  "smoothed_f10.7": 68.6
  },
  {
  "time-tag": "2008-09",
  "ssn": 1.2,
  "smoothed_ssn": 3.2,
  "observed_swpc_ssn": 1.53,
  "smoothed_swpc_ssn": 3.8,
  "f10.7": 67,
  "smoothed_f10.7": 68.3
  },
  {
  "time-tag": "2008-10",
  "ssn": 4.2,
  "smoothed_ssn": 2.4,
  "observed_swpc_ssn": 5.23,
  "smoothed_swpc_ssn": 3,
  "f10.7": 68.21,
  "smoothed_f10.7": 68.2
  },
  {
  "time-tag": "2008-11",
  "ssn": 6.6,
  "smoothed_ssn": 2.3,
  "observed_swpc_ssn": 6.77,
  "smoothed_swpc_ssn": 2.8,
  "f10.7": 68.53,
  "smoothed_f10.7": 68.2
  },
  {
  "time-tag": "2008-12",
  "ssn": 1,
  "smoothed_ssn": 2.2,
  "observed_swpc_ssn": 1.26,
  "smoothed_swpc_ssn": 2.8,
  "f10.7": 69.05,
  "smoothed_f10.7": 68.4
  },
  {
  "time-tag": "2009-01",
  "ssn": 1.3,
  "smoothed_ssn": 2.5,
  "observed_swpc_ssn": 2.81,
  "smoothed_swpc_ssn": 3,
  "f10.7": 69.7,
  "smoothed_f10.7": 68.6
  },
  {
  "time-tag": "2009-02",
  "ssn": 1.2,
  "smoothed_ssn": 2.7,
  "observed_swpc_ssn": 2.54,
  "smoothed_swpc_ssn": 3.2,
  "f10.7": 69.85,
  "smoothed_f10.7": 68.8
  },
  {
  "time-tag": "2009-03",
  "ssn": 0.6,
  "smoothed_ssn": 2.9,
  "observed_swpc_ssn": 0.77,
  "smoothed_swpc_ssn": 3.4,
  "f10.7": 69.1,
  "smoothed_f10.7": 69
  },
  {
  "time-tag": "2009-04",
  "ssn": 1.2,
  "smoothed_ssn": 3.3,
  "observed_swpc_ssn": 1.27,
  "smoothed_swpc_ssn": 3.7,
  "f10.7": 69.61,
  "smoothed_f10.7": 69.3
  },
  {
  "time-tag": "2009-05",
  "ssn": 2.9,
  "smoothed_ssn": 3.5,
  "observed_swpc_ssn": 3.97,
  "smoothed_swpc_ssn": 3.9,
  "f10.7": 70.35,
  "smoothed_f10.7": 69.7
  },
  {
  "time-tag": "2009-06",
  "ssn": 6.3,
  "smoothed_ssn": 4.1,
  "observed_swpc_ssn": 6.6,
  "smoothed_swpc_ssn": 4.5,
  "f10.7": 68.57,
  "smoothed_f10.7": 70.2
  },
  {
  "time-tag": "2009-07",
  "ssn": 5.5,
  "smoothed_ssn": 5.5,
  "observed_swpc_ssn": 5.06,
  "smoothed_swpc_ssn": 5.9,
  "f10.7": 68.19,
  "smoothed_f10.7": 71
  },
  {
  "time-tag": "2009-08",
  "ssn": 0,
  "smoothed_ssn": 7.4,
  "observed_swpc_ssn": 0.39,
  "smoothed_swpc_ssn": 7.8,
  "f10.7": 67.36,
  "smoothed_f10.7": 72.1
  },
  {
  "time-tag": "2009-09",
  "ssn": 7.1,
  "smoothed_ssn": 9.5,
  "observed_swpc_ssn": 6.73,
  "smoothed_swpc_ssn": 10,
  "f10.7": 70.32,
  "smoothed_f10.7": 73.3
  },
  {
  "time-tag": "2009-10",
  "ssn": 7.7,
  "smoothed_ssn": 10.9,
  "observed_swpc_ssn": 7,
  "smoothed_swpc_ssn": 11.5,
  "f10.7": 72.14,
  "smoothed_f10.7": 74.1
  },
  {
  "time-tag": "2009-11",
  "ssn": 6.9,
  "smoothed_ssn": 11.7,
  "observed_swpc_ssn": 7.7,
  "smoothed_swpc_ssn": 12.5,
  "f10.7": 73.66,
  "smoothed_f10.7": 74.5
  },
  {
  "time-tag": "2009-12",
  "ssn": 16.3,
  "smoothed_ssn": 12.7,
  "observed_swpc_ssn": 15.77,
  "smoothed_swpc_ssn": 13.7,
  "f10.7": 76.84,
  "smoothed_f10.7": 74.8
  },
  {
  "time-tag": "2010-01",
  "ssn": 19.5,
  "smoothed_ssn": 14,
  "observed_swpc_ssn": 21.32,
  "smoothed_swpc_ssn": 14.9,
  "f10.7": 81.31,
  "smoothed_f10.7": 75.5
  },
  {
  "time-tag": "2010-02",
  "ssn": 28.5,
  "smoothed_ssn": 16.1,
  "observed_swpc_ssn": 31,
  "smoothed_swpc_ssn": 16.8,
  "f10.7": 84.74,
  "smoothed_f10.7": 76.4
  },
  {
  "time-tag": "2010-03",
  "ssn": 24,
  "smoothed_ssn": 18.5,
  "observed_swpc_ssn": 25.19,
  "smoothed_swpc_ssn": 19.2,
  "f10.7": 82.96,
  "smoothed_f10.7": 77.4
  },
  {
  "time-tag": "2010-04",
  "ssn": 10.4,
  "smoothed_ssn": 20.8,
  "observed_swpc_ssn": 11.2,
  "smoothed_swpc_ssn": 21.6,
  "f10.7": 75.72,
  "smoothed_f10.7": 78.2
  },
  {
  "time-tag": "2010-05",
  "ssn": 13.9,
  "smoothed_ssn": 23.1,
  "observed_swpc_ssn": 19.97,
  "smoothed_swpc_ssn": 23.9,
  "f10.7": 73.63,
  "smoothed_f10.7": 79
  },
  {
  "time-tag": "2010-06",
  "ssn": 18.8,
  "smoothed_ssn": 24.6,
  "observed_swpc_ssn": 17.97,
  "smoothed_swpc_ssn": 25.4,
  "f10.7": 72.38,
  "smoothed_f10.7": 79.6
  },
  {
  "time-tag": "2010-07",
  "ssn": 25.2,
  "smoothed_ssn": 25.2,
  "observed_swpc_ssn": 23.13,
  "smoothed_swpc_ssn": 26.1,
  "f10.7": 79.6,
  "smoothed_f10.7": 80
  },
  {
  "time-tag": "2010-08",
  "ssn": 29.6,
  "smoothed_ssn": 26.4,
  "observed_swpc_ssn": 28.23,
  "smoothed_swpc_ssn": 27.5,
  "f10.7": 79.16,
  "smoothed_f10.7": 80.5
  },
  {
  "time-tag": "2010-09",
  "ssn": 36.4,
  "smoothed_ssn": 29.5,
  "observed_swpc_ssn": 35.67,
  "smoothed_swpc_ssn": 30.7,
  "f10.7": 80.95,
  "smoothed_f10.7": 82.6
  },
  {
  "time-tag": "2010-10",
  "ssn": 33.6,
  "smoothed_ssn": 34.5,
  "observed_swpc_ssn": 35.03,
  "smoothed_swpc_ssn": 36,
  "f10.7": 81.42,
  "smoothed_f10.7": 85.9
  },
  {
  "time-tag": "2010-11",
  "ssn": 34.4,
  "smoothed_ssn": 39.1,
  "observed_swpc_ssn": 36.17,
  "smoothed_swpc_ssn": 40.7,
  "f10.7": 82.56,
  "smoothed_f10.7": 88.4
  },
  {
  "time-tag": "2010-12",
  "ssn": 24.5,
  "smoothed_ssn": 42.5,
  "observed_swpc_ssn": 22,
  "smoothed_swpc_ssn": 44,
  "f10.7": 84.19,
  "smoothed_f10.7": 90.3
  },
  {
  "time-tag": "2011-01",
  "ssn": 27.3,
  "smoothed_ssn": 45.7,
  "observed_swpc_ssn": 32.19,
  "smoothed_swpc_ssn": 47.4,
  "f10.7": 83.39,
  "smoothed_f10.7": 91.9
  },
  {
  "time-tag": "2011-02",
  "ssn": 48.3,
  "smoothed_ssn": 48.8,
  "observed_swpc_ssn": 53.54,
  "smoothed_swpc_ssn": 50.8,
  "f10.7": 94.55,
  "smoothed_f10.7": 93.4
  },
  {
  "time-tag": "2011-03",
  "ssn": 78.6,
  "smoothed_ssn": 53.8,
  "observed_swpc_ssn": 81.06,
  "smoothed_swpc_ssn": 55.3,
  "f10.7": 124.26,
  "smoothed_f10.7": 96.6
  },
  {
  "time-tag": "2011-04",
  "ssn": 76.1,
  "smoothed_ssn": 61.1,
  "observed_swpc_ssn": 81.73,
  "smoothed_swpc_ssn": 61.6,
  "f10.7": 112.85,
  "smoothed_f10.7": 101.2
  },
  {
  "time-tag": "2011-05",
  "ssn": 58.2,
  "smoothed_ssn": 69.3,
  "observed_swpc_ssn": 61.84,
  "smoothed_swpc_ssn": 69,
  "f10.7": 95.68,
  "smoothed_f10.7": 106.5
  },
  {
  "time-tag": "2011-06",
  "ssn": 56.1,
  "smoothed_ssn": 77.2,
  "observed_swpc_ssn": 55.53,
  "smoothed_swpc_ssn": 76.4,
  "f10.7": 95.86,
  "smoothed_f10.7": 111.8
  },
  {
  "time-tag": "2011-07",
  "ssn": 64.5,
  "smoothed_ssn": 83.6,
  "observed_swpc_ssn": 66.68,
  "smoothed_swpc_ssn": 82.3,
  "f10.7": 94.34,
  "smoothed_f10.7": 116.4
  },
  {
  "time-tag": "2011-08",
  "ssn": 65.8,
  "smoothed_ssn": 86.3,
  "observed_swpc_ssn": 66,
  "smoothed_swpc_ssn": 84.5,
  "f10.7": 101.61,
  "smoothed_f10.7": 119
  },
  {
  "time-tag": "2011-09",
  "ssn": 120.1,
  "smoothed_ssn": 86.6,
  "observed_swpc_ssn": 106.4,
  "smoothed_swpc_ssn": 84.1,
  "f10.7": 135.27,
  "smoothed_f10.7": 119.2
  },
  {
  "time-tag": "2011-10",
  "ssn": 125.7,
  "smoothed_ssn": 87.4,
  "observed_swpc_ssn": 116.1,
  "smoothed_swpc_ssn": 84.1,
  "f10.7": 137.4,
  "smoothed_f10.7": 118.8
  },
  {
  "time-tag": "2011-11",
  "ssn": 139.1,
  "smoothed_ssn": 89.4,
  "observed_swpc_ssn": 131.77,
  "smoothed_swpc_ssn": 85.7,
  "f10.7": 153.5,
  "smoothed_f10.7": 119.9
  },
  {
  "time-tag": "2011-12",
  "ssn": 109.3,
  "smoothed_ssn": 92.5,
  "observed_swpc_ssn": 104.74,
  "smoothed_swpc_ssn": 88.6,
  "f10.7": 141.46,
  "smoothed_f10.7": 122
  },
  {
  "time-tag": "2012-01",
  "ssn": 94.4,
  "smoothed_ssn": 95.5,
  "observed_swpc_ssn": 90.06,
  "smoothed_swpc_ssn": 91.4,
  "f10.7": 134.79,
  "smoothed_f10.7": 124.9
  },
  {
  "time-tag": "2012-02",
  "ssn": 47.8,
  "smoothed_ssn": 98.1,
  "observed_swpc_ssn": 48.48,
  "smoothed_swpc_ssn": 93.6,
  "f10.7": 106.86,
  "smoothed_f10.7": 127.2
  },
  {
  "time-tag": "2012-03",
  "ssn": 86.6,
  "smoothed_ssn": 98.3,
  "observed_swpc_ssn": 77.55,
  "smoothed_swpc_ssn": 93.5,
  "f10.7": 115.71,
  "smoothed_f10.7": 127.3
  },
  {
  "time-tag": "2012-04",
  "ssn": 85.9,
  "smoothed_ssn": 95.1,
  "observed_swpc_ssn": 84.1,
  "smoothed_swpc_ssn": 90.7,
  "f10.7": 113.26,
  "smoothed_f10.7": 126.3
  },
  {
  "time-tag": "2012-05",
  "ssn": 96.5,
  "smoothed_ssn": 90.9,
  "observed_swpc_ssn": 98.74,
  "smoothed_swpc_ssn": 87.2,
  "f10.7": 121.4,
  "smoothed_f10.7": 124.3
  },
  {
  "time-tag": "2012-06",
  "ssn": 92,
  "smoothed_ssn": 86.6,
  "observed_swpc_ssn": 88.63,
  "smoothed_swpc_ssn": 83.6,
  "f10.7": 120.4,
  "smoothed_f10.7": 121.6
  },
  {
  "time-tag": "2012-07",
  "ssn": 100.1,
  "smoothed_ssn": 84.5,
  "observed_swpc_ssn": 99.61,
  "smoothed_swpc_ssn": 82.1,
  "f10.7": 137.61,
  "smoothed_f10.7": 119.9
  },
  {
  "time-tag": "2012-08",
  "ssn": 94.8,
  "smoothed_ssn": 85.1,
  "observed_swpc_ssn": 85.81,
  "smoothed_swpc_ssn": 83,
  "f10.7": 115.86,
  "smoothed_f10.7": 119.4
  },
  {
  "time-tag": "2012-09",
  "ssn": 93.7,
  "smoothed_ssn": 85.3,
  "observed_swpc_ssn": 84.03,
  "smoothed_swpc_ssn": 83.7,
  "f10.7": 123.4,
  "smoothed_f10.7": 119.1
  },
  {
  "time-tag": "2012-10",
  "ssn": 76.5,
  "smoothed_ssn": 85.8,
  "observed_swpc_ssn": 73.52,
  "smoothed_swpc_ssn": 85,
  "f10.7": 123.07,
  "smoothed_f10.7": 119.5
  },
  {
  "time-tag": "2012-11",
  "ssn": 87.6,
  "smoothed_ssn": 87.7,
  "observed_swpc_ssn": 89.2,
  "smoothed_swpc_ssn": 87.3,
  "f10.7": 121.15,
  "smoothed_f10.7": 120.4
  },
  {
  "time-tag": "2012-12",
  "ssn": 56.8,
  "smoothed_ssn": 88.1,
  "observed_swpc_ssn": 60.42,
  "smoothed_swpc_ssn": 88.1,
  "f10.7": 108.26,
  "smoothed_f10.7": 120.4
  },
  {
  "time-tag": "2013-01",
  "ssn": 96.1,
  "smoothed_ssn": 86.8,
  "observed_swpc_ssn": 99.87,
  "smoothed_swpc_ssn": 87.2,
  "f10.7": 126.83,
  "smoothed_f10.7": 119.1
  },
  {
  "time-tag": "2013-02",
  "ssn": 60.9,
  "smoothed_ssn": 86.1,
  "observed_swpc_ssn": 60.07,
  "smoothed_swpc_ssn": 86.8,
  "f10.7": 104.41,
  "smoothed_f10.7": 118.1
  },
  {
  "time-tag": "2013-03",
  "ssn": 78.3,
  "smoothed_ssn": 84.4,
  "observed_swpc_ssn": 81.1,
  "smoothed_swpc_ssn": 85.8,
  "f10.7": 111.36,
  "smoothed_f10.7": 117.2
  },
  {
  "time-tag": "2013-04",
  "ssn": 107.3,
  "smoothed_ssn": 84.3,
  "observed_swpc_ssn": 112.83,
  "smoothed_swpc_ssn": 86.8,
  "f10.7": 124.95,
  "smoothed_f10.7": 116.7
  },
  {
  "time-tag": "2013-05",
  "ssn": 120.2,
  "smoothed_ssn": 87,
  "observed_swpc_ssn": 125.58,
  "smoothed_swpc_ssn": 90.6,
  "f10.7": 131.43,
  "smoothed_f10.7": 118.3
  },
  {
  "time-tag": "2013-06",
  "ssn": 76.7,
  "smoothed_ssn": 90.9,
  "observed_swpc_ssn": 80.17,
  "smoothed_swpc_ssn": 94.5,
  "f10.7": 110.74,
  "smoothed_f10.7": 121.1
  },
  {
  "time-tag": "2013-07",
  "ssn": 86.2,
  "smoothed_ssn": 94.6,
  "observed_swpc_ssn": 86.19,
  "smoothed_swpc_ssn": 98,
  "f10.7": 115.53,
  "smoothed_f10.7": 124.3
  },
  {
  "time-tag": "2013-08",
  "ssn": 91.8,
  "smoothed_ssn": 99,
  "observed_swpc_ssn": 90.23,
  "smoothed_swpc_ssn": 103.9,
  "f10.7": 114.9,
  "smoothed_f10.7": 128.5
  },
  {
  "time-tag": "2013-09",
  "ssn": 54.5,
  "smoothed_ssn": 104.6,
  "observed_swpc_ssn": 55.03,
  "smoothed_swpc_ssn": 111.1,
  "f10.7": 102.83,
  "smoothed_f10.7": 132.9
  },
  {
  "time-tag": "2013-10",
  "ssn": 114.4,
  "smoothed_ssn": 107,
  "observed_swpc_ssn": 127.16,
  "smoothed_swpc_ssn": 114.4,
  "f10.7": 132.86,
  "smoothed_f10.7": 135.3
  },
  {
  "time-tag": "2013-11",
  "ssn": 113.9,
  "smoothed_ssn": 106.9,
  "observed_swpc_ssn": 125.73,
  "smoothed_swpc_ssn": 114.7,
  "f10.7": 148.78,
  "smoothed_f10.7": 136
  },
  {
  "time-tag": "2013-12",
  "ssn": 124.2,
  "smoothed_ssn": 107.6,
  "observed_swpc_ssn": 118.29,
  "smoothed_swpc_ssn": 115.5,
  "f10.7": 148.1,
  "smoothed_f10.7": 136.5
  },
  {
  "time-tag": "2014-01",
  "ssn": 117,
  "smoothed_ssn": 109.3,
  "observed_swpc_ssn": 125.97,
  "smoothed_swpc_ssn": 117.8,
  "f10.7": 162.69,
  "smoothed_f10.7": 137.9
  },
  {
  "time-tag": "2014-02",
  "ssn": 146.1,
  "smoothed_ssn": 110.5,
  "observed_swpc_ssn": 174.61,
  "smoothed_swpc_ssn": 119.6,
  "f10.7": 170.13,
  "smoothed_f10.7": 139.2
  },
  {
  "time-tag": "2014-03",
  "ssn": 128.7,
  "smoothed_ssn": 114.3,
  "observed_swpc_ssn": 141.13,
  "smoothed_swpc_ssn": 123.3,
  "f10.7": 150.5,
  "smoothed_f10.7": 141.4
  },
  {
  "time-tag": "2014-04",
  "ssn": 112.5,
  "smoothed_ssn": 116.4,
  "observed_swpc_ssn": 130.57,
  "smoothed_swpc_ssn": 124.9,
  "f10.7": 143.94,
  "smoothed_f10.7": 144.2
  },
  {
  "time-tag": "2014-05",
  "ssn": 112.5,
  "smoothed_ssn": 115,
  "observed_swpc_ssn": 116.81,
  "smoothed_swpc_ssn": 122.4,
  "f10.7": 130.11,
  "smoothed_f10.7": 145.4
  },
  {
  "time-tag": "2014-06",
  "ssn": 102.9,
  "smoothed_ssn": 114.1,
  "observed_swpc_ssn": 107.77,
  "smoothed_swpc_ssn": 121.5,
  "f10.7": 122.37,
  "smoothed_f10.7": 146.1
  },
  {
  "time-tag": "2014-07",
  "ssn": 100.2,
  "smoothed_ssn": 112.6,
  "observed_swpc_ssn": 113.61,
  "smoothed_swpc_ssn": 120.5,
  "f10.7": 137.85,
  "smoothed_f10.7": 145.7
  },
  {
  "time-tag": "2014-08",
  "ssn": 106.9,
  "smoothed_ssn": 108.3,
  "observed_swpc_ssn": 106.23,
  "smoothed_swpc_ssn": 115.2,
  "f10.7": 124.56,
  "smoothed_f10.7": 143.1
  },
  {
  "time-tag": "2014-09",
  "ssn": 130,
  "smoothed_ssn": 101.9,
  "observed_swpc_ssn": 127.43,
  "smoothed_swpc_ssn": 107.5,
  "f10.7": 146.57,
  "smoothed_f10.7": 140.4
  },
  {
  "time-tag": "2014-10",
  "ssn": 90,
  "smoothed_ssn": 97.3,
  "observed_swpc_ssn": 92.06,
  "smoothed_swpc_ssn": 101.8,
  "f10.7": 154.99,
  "smoothed_f10.7": 138.8
  },
  {
  "time-tag": "2014-11",
  "ssn": 103.6,
  "smoothed_ssn": 94.7,
  "observed_swpc_ssn": 101.87,
  "smoothed_swpc_ssn": 98,
  "f10.7": 155.74,
  "smoothed_f10.7": 137.8
  },
  {
  "time-tag": "2014-12",
  "ssn": 112.9,
  "smoothed_ssn": 92.2,
  "observed_swpc_ssn": 120.03,
  "smoothed_swpc_ssn": 95.3,
  "f10.7": 159.02,
  "smoothed_f10.7": 137.6
  },
  {
  "time-tag": "2015-01",
  "ssn": 93,
  "smoothed_ssn": 89.3,
  "observed_swpc_ssn": 101.26,
  "smoothed_swpc_ssn": 92.2,
  "f10.7": 142,
  "smoothed_f10.7": 136.6
  },
  {
  "time-tag": "2015-02",
  "ssn": 66.7,
  "smoothed_ssn": 86.1,
  "observed_swpc_ssn": 70.68,
  "smoothed_swpc_ssn": 88.4,
  "f10.7": 128.92,
  "smoothed_f10.7": 134.6
  },
  {
  "time-tag": "2015-03",
  "ssn": 54.5,
  "smoothed_ssn": 82.1,
  "observed_swpc_ssn": 61.71,
  "smoothed_swpc_ssn": 84.3,
  "f10.7": 126.89,
  "smoothed_f10.7": 131.9
  },
  {
  "time-tag": "2015-04",
  "ssn": 75.3,
  "smoothed_ssn": 78.9,
  "observed_swpc_ssn": 72.57,
  "smoothed_swpc_ssn": 80.6,
  "f10.7": 129.05,
  "smoothed_f10.7": 127.9
  },
  {
  "time-tag": "2015-05",
  "ssn": 88.8,
  "smoothed_ssn": 76.1,
  "observed_swpc_ssn": 83,
  "smoothed_swpc_ssn": 77.6,
  "f10.7": 120.05,
  "smoothed_f10.7": 123.9
  },
  {
  "time-tag": "2015-06",
  "ssn": 66.5,
  "smoothed_ssn": 72.1,
  "observed_swpc_ssn": 77.37,
  "smoothed_swpc_ssn": 73.2,
  "f10.7": 128.54,
  "smoothed_f10.7": 120
  },
  {
  "time-tag": "2015-07",
  "ssn": 65.8,
  "smoothed_ssn": 68.3,
  "observed_swpc_ssn": 68.45,
  "smoothed_swpc_ssn": 68.3,
  "f10.7": 107,
  "smoothed_f10.7": 116.5
  },
  {
  "time-tag": "2015-08",
  "ssn": 64.4,
  "smoothed_ssn": 66.4,
  "observed_swpc_ssn": 61.68,
  "smoothed_swpc_ssn": 65.6,
  "f10.7": 105.93,
  "smoothed_f10.7": 113.9
  },
  {
  "time-tag": "2015-09",
  "ssn": 78.6,
  "smoothed_ssn": 65.9,
  "observed_swpc_ssn": 72.53,
  "smoothed_swpc_ssn": 64.1,
  "f10.7": 101.99,
  "smoothed_f10.7": 111.3
  },
  {
  "time-tag": "2015-10",
  "ssn": 63.6,
  "smoothed_ssn": 64.3,
  "observed_swpc_ssn": 59.58,
  "smoothed_swpc_ssn": 61.9,
  "f10.7": 104,
  "smoothed_f10.7": 108.4
  },
  {
  "time-tag": "2015-11",
  "ssn": 62.2,
  "smoothed_ssn": 61.2,
  "observed_swpc_ssn": 61.87,
  "smoothed_swpc_ssn": 59.1,
  "f10.7": 109.68,
  "smoothed_f10.7": 105.8
  },
  {
  "time-tag": "2015-12",
  "ssn": 58,
  "smoothed_ssn": 57.8,
  "observed_swpc_ssn": 54.13,
  "smoothed_swpc_ssn": 55.2,
  "f10.7": 112.54,
  "smoothed_f10.7": 102.7
  },
  {
  "time-tag": "2016-01",
  "ssn": 57,
  "smoothed_ssn": 54.4,
  "observed_swpc_ssn": 50.45,
  "smoothed_swpc_ssn": 51.1,
  "f10.7": 103.64,
  "smoothed_f10.7": 99.9
  },
  {
  "time-tag": "2016-02",
  "ssn": 56.4,
  "smoothed_ssn": 52.5,
  "observed_swpc_ssn": 56.07,
  "smoothed_swpc_ssn": 49.2,
  "f10.7": 103.71,
  "smoothed_f10.7": 98.2
  },
  {
  "time-tag": "2016-03",
  "ssn": 54.1,
  "smoothed_ssn": 50.4,
  "observed_swpc_ssn": 40.94,
  "smoothed_swpc_ssn": 47.2,
  "f10.7": 91.43,
  "smoothed_f10.7": 96.7
  },
  {
  "time-tag": "2016-04",
  "ssn": 37.9,
  "smoothed_ssn": 47.8,
  "observed_swpc_ssn": 39.27,
  "smoothed_swpc_ssn": 44.5,
  "f10.7": 93.45,
  "smoothed_f10.7": 95.4
  },
  {
  "time-tag": "2016-05",
  "ssn": 51.5,
  "smoothed_ssn": 44.8,
  "observed_swpc_ssn": 48.9,
  "smoothed_swpc_ssn": 41.6,
  "f10.7": 93.36,
  "smoothed_f10.7": 93.3
  },
  {
  "time-tag": "2016-06",
  "ssn": 20.5,
  "smoothed_ssn": 41.5,
  "observed_swpc_ssn": 17.43,
  "smoothed_swpc_ssn": 38.4,
  "f10.7": 81.95,
  "smoothed_f10.7": 90.5
  },
  {
  "time-tag": "2016-07",
  "ssn": 32.4,
  "smoothed_ssn": 38.5,
  "observed_swpc_ssn": 32.1,
  "smoothed_swpc_ssn": 35.7,
  "f10.7": 86.31,
  "smoothed_f10.7": 87.8
  },
  {
  "time-tag": "2016-08",
  "ssn": 50.2,
  "smoothed_ssn": 36,
  "observed_swpc_ssn": 50.42,
  "smoothed_swpc_ssn": 33.2,
  "f10.7": 85.15,
  "smoothed_f10.7": 85.6
  },
  {
  "time-tag": "2016-09",
  "ssn": 44.6,
  "smoothed_ssn": 33.2,
  "observed_swpc_ssn": 37.4,
  "smoothed_swpc_ssn": 30.7,
  "f10.7": 87.45,
  "smoothed_f10.7": 83.8
  },
  {
  "time-tag": "2016-10",
  "ssn": 33.4,
  "smoothed_ssn": 31.5,
  "observed_swpc_ssn": 29.06,
  "smoothed_swpc_ssn": 29.3,
  "f10.7": 86.15,
  "smoothed_f10.7": 82.6
  },
  {
  "time-tag": "2016-11",
  "ssn": 21.4,
  "smoothed_ssn": 29.9,
  "observed_swpc_ssn": 22.43,
  "smoothed_swpc_ssn": 27.6,
  "f10.7": 78.58,
  "smoothed_f10.7": 81.2
  },
  {
  "time-tag": "2016-12",
  "ssn": 18.5,
  "smoothed_ssn": 28.5,
  "observed_swpc_ssn": 17.06,
  "smoothed_swpc_ssn": 26.3,
  "f10.7": 75.29,
  "smoothed_f10.7": 80.1
  },
  {
  "time-tag": "2017-01",
  "ssn": 26.1,
  "smoothed_ssn": 27.8,
  "observed_swpc_ssn": 23.58,
  "smoothed_swpc_ssn": 25.6,
  "f10.7": 77.37,
  "smoothed_f10.7": 79.5
  },
  {
  "time-tag": "2017-02",
  "ssn": 26.4,
  "smoothed_ssn": 26.5,
  "observed_swpc_ssn": 22.07,
  "smoothed_swpc_ssn": 23.8,
  "f10.7": 76.95,
  "smoothed_f10.7": 78.8
  },
  {
  "time-tag": "2017-03",
  "ssn": 17.7,
  "smoothed_ssn": 25.7,
  "observed_swpc_ssn": 15.61,
  "smoothed_swpc_ssn": 22.9,
  "f10.7": 74.69,
  "smoothed_f10.7": 78.9
  },
  {
  "time-tag": "2017-04",
  "ssn": 32.3,
  "smoothed_ssn": 24.8,
  "observed_swpc_ssn": 30.47,
  "smoothed_swpc_ssn": 22.5,
  "f10.7": 80.91,
  "smoothed_f10.7": 78.8
  },
  {
  "time-tag": "2017-05",
  "ssn": 18.9,
  "smoothed_ssn": 23.3,
  "observed_swpc_ssn": 16.97,
  "smoothed_swpc_ssn": 21.1,
  "f10.7": 73.6,
  "smoothed_f10.7": 78.1
  },
  {
  "time-tag": "2017-06",
  "ssn": 19.2,
  "smoothed_ssn": 22.2,
  "observed_swpc_ssn": 18,
  "smoothed_swpc_ssn": 19.9,
  "f10.7": 74.83,
  "smoothed_f10.7": 77.7
  },
  {
  "time-tag": "2017-07",
  "ssn": 17.8,
  "smoothed_ssn": 21,
  "observed_swpc_ssn": 14.58,
  "smoothed_swpc_ssn": 18.8,
  "f10.7": 77.58,
  "smoothed_f10.7": 77.2
  },
  {
  "time-tag": "2017-08",
  "ssn": 32.6,
  "smoothed_ssn": 19.6,
  "observed_swpc_ssn": 25,
  "smoothed_swpc_ssn": 17.6,
  "f10.7": 78.25,
  "smoothed_f10.7": 76.7
  },
  {
  "time-tag": "2017-09",
  "ssn": 43.7,
  "smoothed_ssn": 18.3,
  "observed_swpc_ssn": 42.27,
  "smoothed_swpc_ssn": 16.6,
  "f10.7": 95.49,
  "smoothed_f10.7": 76.2
  },
  {
  "time-tag": "2017-10",
  "ssn": 13.2,
  "smoothed_ssn": 16.7,
  "observed_swpc_ssn": 12.9,
  "smoothed_swpc_ssn": 15,
  "f10.7": 76.39,
  "smoothed_f10.7": 75.5
  },
  {
  "time-tag": "2017-11",
  "ssn": 5.7,
  "smoothed_ssn": 15.4,
  "observed_swpc_ssn": 5.43,
  "smoothed_swpc_ssn": 13.9,
  "f10.7": 72.28,
  "smoothed_f10.7": 74.9
  },
  {
  "time-tag": "2017-12",
  "ssn": 8.2,
  "smoothed_ssn": 15.1,
  "observed_swpc_ssn": 6.42,
  "smoothed_swpc_ssn": 13.6,
  "f10.7": 71.7,
  "smoothed_f10.7": 74.7
  },
  {
  "time-tag": "2018-01",
  "ssn": 6.8,
  "smoothed_ssn": 14.2,
  "observed_swpc_ssn": 5.84,
  "smoothed_swpc_ssn": 12.8,
  "f10.7": 70.01,
  "smoothed_f10.7": 74.3
  },
  {
  "time-tag": "2018-02",
  "ssn": 10.7,
  "smoothed_ssn": 12.6,
  "observed_swpc_ssn": 11.46,
  "smoothed_swpc_ssn": 11.6,
  "f10.7": 71.63,
  "smoothed_f10.7": 73.6
  },
  {
  "time-tag": "2018-03",
  "ssn": 2.5,
  "smoothed_ssn": 9.9,
  "observed_swpc_ssn": 2.35,
  "smoothed_swpc_ssn": 9.2,
  "f10.7": 68.26,
  "smoothed_f10.7": 72.1
  },
  {
  "time-tag": "2018-04",
  "ssn": 8.9,
  "smoothed_ssn": 7.8,
  "observed_swpc_ssn": 6.77,
  "smoothed_swpc_ssn": 7.2,
  "f10.7": 69.97,
  "smoothed_f10.7": 70.7
  },
  {
  "time-tag": "2018-05",
  "ssn": 13.1,
  "smoothed_ssn": 7.5,
  "observed_swpc_ssn": 13.1,
  "smoothed_swpc_ssn": 6.8,
  "f10.7": 70.95,
  "smoothed_f10.7": 70.2
  },
  {
  "time-tag": "2018-06",
  "ssn": 15.6,
  "smoothed_ssn": 7.2,
  "observed_swpc_ssn": 14.5,
  "smoothed_swpc_ssn": 6.6,
  "f10.7": 72.66,
  "smoothed_f10.7": 70
  },
  {
  "time-tag": "2018-07",
  "ssn": 1.6,
  "smoothed_ssn": 7,
  "observed_swpc_ssn": 0.35,
  "smoothed_swpc_ssn": 6.6,
  "f10.7": 69.61,
  "smoothed_f10.7": 70
  },
  {
  "time-tag": "2018-08",
  "ssn": 8.7,
  "smoothed_ssn": 6.7,
  "observed_swpc_ssn": 8.42,
  "smoothed_swpc_ssn": 6.2,
  "f10.7": 69.05,
  "smoothed_f10.7": 70
  },
  {
  "time-tag": "2018-09",
  "ssn": 3.3,
  "smoothed_ssn": 6.5,
  "observed_swpc_ssn": 2.67,
  "smoothed_swpc_ssn": 6,
  "f10.7": 68.17,
  "smoothed_f10.7": 70.1
  },
  {
  "time-tag": "2018-10",
  "ssn": 4.9,
  "smoothed_ssn": 6.8,
  "observed_swpc_ssn": 4.48,
  "smoothed_swpc_ssn": 6.4,
  "f10.7": 69.56,
  "smoothed_f10.7": 70.4
  },
  {
  "time-tag": "2018-11",
  "ssn": 4.9,
  "smoothed_ssn": 6.7,
  "observed_swpc_ssn": 3.9,
  "smoothed_swpc_ssn": 6.3,
  "f10.7": 69.02,
  "smoothed_f10.7": 70.5
  },
  {
  "time-tag": "2018-12",
  "ssn": 3.1,
  "smoothed_ssn": 6,
  "observed_swpc_ssn": 3.48,
  "smoothed_swpc_ssn": 5.7,
  "f10.7": 70.05,
  "smoothed_f10.7": 70.3
  },
  {
  "time-tag": "2019-01",
  "ssn": 7.7,
  "smoothed_ssn": 5.4,
  "observed_swpc_ssn": 8.29,
  "smoothed_swpc_ssn": 5.2,
  "f10.7": 71.58,
  "smoothed_f10.7": 70
  },
  {
  "time-tag": "2019-02",
  "ssn": 0.8,
  "smoothed_ssn": 5,
  "observed_swpc_ssn": 0,
  "smoothed_swpc_ssn": 4.9,
  "f10.7": 70.59,
  "smoothed_f10.7": 69.9
  },
  {
  "time-tag": "2019-03",
  "ssn": 9.4,
  "smoothed_ssn": 4.6,
  "observed_swpc_ssn": 9.1,
  "smoothed_swpc_ssn": 4.5,
  "f10.7": 71.52,
  "smoothed_f10.7": 69.8
  },
  {
  "time-tag": "2019-04",
  "ssn": 9.1,
  "smoothed_ssn": 4.3,
  "observed_swpc_ssn": 8.5,
  "smoothed_swpc_ssn": 4.2,
  "f10.7": 72.47,
  "smoothed_f10.7": 69.7
  },
  {
  "time-tag": "2019-05",
  "ssn": 9.9,
  "smoothed_ssn": 3.9,
  "observed_swpc_ssn": 9.97,
  "smoothed_swpc_ssn": 3.9,
  "f10.7": 71.32,
  "smoothed_f10.7": 69.6
  },
  {
  "time-tag": "2019-06",
  "ssn": 1.2,
  "smoothed_ssn": 3.7,
  "observed_swpc_ssn": 1.93,
  "smoothed_swpc_ssn": 3.7,
  "f10.7": 68.13,
  "smoothed_f10.7": 69.7
  },
  {
  "time-tag": "2019-07",
  "ssn": 0.9,
  "smoothed_ssn": 3.5,
  "observed_swpc_ssn": 0.74,
  "smoothed_swpc_ssn": 3.6,
  "f10.7": 67.25,
  "smoothed_f10.7": 69.8
  },
  {
  "time-tag": "2019-08",
  "ssn": 0.5,
  "smoothed_ssn": 3.4,
  "observed_swpc_ssn": 0.74,
  "smoothed_swpc_ssn": 3.5,
  "f10.7": 67.05,
  "smoothed_f10.7": 69.8
  },
  {
  "time-tag": "2019-09",
  "ssn": 1.1,
  "smoothed_ssn": 3.1,
  "observed_swpc_ssn": 0.8,
  "smoothed_swpc_ssn": 3.2,
  "f10.7": 68,
  "smoothed_f10.7": 69.8
  },
  {
  "time-tag": "2019-10",
  "ssn": 0.4,
  "smoothed_ssn": 2.6,
  "observed_swpc_ssn": 0.71,
  "smoothed_swpc_ssn": 2.7,
  "f10.7": 67.46,
  "smoothed_f10.7": 69.6
  },
  {
  "time-tag": "2019-11",
  "ssn": 0.5,
  "smoothed_ssn": 2,
  "observed_swpc_ssn": 0.8,
  "smoothed_swpc_ssn": 2.1,
  "f10.7": 70.18,
  "smoothed_f10.7": 69.4
  },
  {
  "time-tag": "2019-12",
  "ssn": 1.5,
  "smoothed_ssn": 1.8,
  "observed_swpc_ssn": 1.87,
  "smoothed_swpc_ssn": 1.9,
  "f10.7": 70.93,
  "smoothed_f10.7": 69.4
  },
  {
  "time-tag": "2020-01",
  "ssn": 6.2,
  "smoothed_ssn": 2.2,
  "observed_swpc_ssn": 5.94,
  "smoothed_swpc_ssn": 2.3,
  "f10.7": 72.32,
  "smoothed_f10.7": 69.5
  },
  {
  "time-tag": "2020-02",
  "ssn": 0.2,
  "smoothed_ssn": 2.7,
  "observed_swpc_ssn": 0.38,
  "smoothed_swpc_ssn": 2.8,
  "f10.7": 70.9,
  "smoothed_f10.7": 69.8
  },
  {
  "time-tag": "2020-03",
  "ssn": 1.5,
  "smoothed_ssn": 3,
  "observed_swpc_ssn": 1.19,
  "smoothed_swpc_ssn": 3.1,
  "f10.7": 70.19,
  "smoothed_f10.7": 70.1
  },
  {
  "time-tag": "2020-04",
  "ssn": 5.2,
  "smoothed_ssn": 3.6,
  "observed_swpc_ssn": 4.83,
  "smoothed_swpc_ssn": 3.6,
  "f10.7": 69.56,
  "smoothed_f10.7": 70.5
  },
  {
  "time-tag": "2020-05",
  "ssn": 0.2,
  "smoothed_ssn": 5.6,
  "observed_swpc_ssn": 0,
  "smoothed_swpc_ssn": 5.3,
  "f10.7": 69.21,
  "smoothed_f10.7": 71.7
  },
  {
  "time-tag": "2020-06",
  "ssn": 5.8,
  "smoothed_ssn": 7.9,
  "observed_swpc_ssn": 5.87,
  "smoothed_swpc_ssn": 7.4,
  "f10.7": 69.7,
  "smoothed_f10.7": 73.2
  },
  {
  "time-tag": "2020-07",
  "ssn": 6.1,
  "smoothed_ssn": 9,
  "observed_swpc_ssn": 6.48,
  "smoothed_swpc_ssn": 8.4,
  "f10.7": 69.47,
  "smoothed_f10.7": 74
  },
  {
  "time-tag": "2020-08",
  "ssn": 7.5,
  "smoothed_ssn": 9.5,
  "observed_swpc_ssn": 7.84,
  "smoothed_swpc_ssn": 9,
  "f10.7": 71.66,
  "smoothed_f10.7": 74.3
  },
  {
  "time-tag": "2020-09",
  "ssn": 0.6,
  "smoothed_ssn": 10.5,
  "observed_swpc_ssn": 0.8,
  "smoothed_swpc_ssn": 10,
  "f10.7": 70.56,
  "smoothed_f10.7": 74.7
  },
  {
  "time-tag": "2020-10",
  "ssn": 14.6,
  "smoothed_ssn": 11.9,
  "observed_swpc_ssn": 13.19,
  "smoothed_swpc_ssn": 11.5,
  "f10.7": 74.59,
  "smoothed_f10.7": 75.2
  },
  {
  "time-tag": "2020-11",
  "ssn": 34.5,
  "smoothed_ssn": 13.6,
  "observed_swpc_ssn": 28.97,
  "smoothed_swpc_ssn": 13.1,
  "f10.7": 90.11,
  "smoothed_f10.7": 75.7
  },
  {
  "time-tag": "2020-12",
  "ssn": 23.1,
  "smoothed_ssn": 15.3,
  "observed_swpc_ssn": 22.52,
  "smoothed_swpc_ssn": 14.7,
  "f10.7": 87.28,
  "smoothed_f10.7": 76.4
  },
  {
  "time-tag": "2021-01",
  "ssn": 10.4,
  "smoothed_ssn": 17.3,
  "observed_swpc_ssn": 11.13,
  "smoothed_swpc_ssn": 16.7,
  "f10.7": 76.07,
  "smoothed_f10.7": 77.3
  },
  {
  "time-tag": "2021-02",
  "ssn": 8.2,
  "smoothed_ssn": 19,
  "observed_swpc_ssn": 8.36,
  "smoothed_swpc_ssn": 18.6,
  "f10.7": 74.32,
  "smoothed_f10.7": 78
  },
  {
  "time-tag": "2021-03",
  "ssn": 17.2,
  "smoothed_ssn": 21.7,
  "observed_swpc_ssn": 17.03,
  "smoothed_swpc_ssn": 21.3,
  "f10.7": 76.48,
  "smoothed_f10.7": 79
  },
  {
  "time-tag": "2021-04",
  "ssn": 24.5,
  "smoothed_ssn": 24.8,
  "observed_swpc_ssn": 24.83,
  "smoothed_swpc_ssn": 24.4,
  "f10.7": 74.74,
  "smoothed_f10.7": 80.3
  },
  {
  "time-tag": "2021-05",
  "ssn": 21.2,
  "smoothed_ssn": 25.8,
  "observed_swpc_ssn": 20.03,
  "smoothed_swpc_ssn": 25.7,
  "f10.7": 75.64,
  "smoothed_f10.7": 80.8
  },
  {
  "time-tag": "2021-06",
  "ssn": 25,
  "smoothed_ssn": 27.6,
  "observed_swpc_ssn": 24.4,
  "smoothed_swpc_ssn": 28,
  "f10.7": 79.81,
  "smoothed_f10.7": 81.3
  },
  {
  "time-tag": "2021-07",
  "ssn": 34.3,
  "smoothed_ssn": 31.4,
  "observed_swpc_ssn": 35.87,
  "smoothed_swpc_ssn": 31.8,
  "f10.7": 80.97,
  "smoothed_f10.7": 83.1
  },
  {
  "time-tag": "2021-08",
  "ssn": 22,
  "smoothed_ssn": 35.4,
  "observed_swpc_ssn": 22.77,
  "smoothed_swpc_ssn": 36.1,
  "f10.7": 77.93,
  "smoothed_f10.7": 85.7
  },
  {
  "time-tag": "2021-09",
  "ssn": 51.3,
  "smoothed_ssn": 40.2,
  "observed_swpc_ssn": 51.93,
  "smoothed_swpc_ssn": 40.7,
  "f10.7": 87.4,
  "smoothed_f10.7": 88.9
  },
  {
  "time-tag": "2021-10",
  "ssn": 37.4,
  "smoothed_ssn": 45.2,
  "observed_swpc_ssn": 36.61,
  "smoothed_swpc_ssn": 45,
  "f10.7": 90.05,
  "smoothed_f10.7": 93
  },
  {
  "time-tag": "2021-11",
  "ssn": 34.8,
  "smoothed_ssn": 50.8,
  "observed_swpc_ssn": 36.03,
  "smoothed_swpc_ssn": 50.2,
  "f10.7": 86.57,
  "smoothed_f10.7": 97.7
  },
  {
  "time-tag": "2021-12",
  "ssn": 67.5,
  "smoothed_ssn": 55.9,
  "observed_swpc_ssn": 69.42,
  "smoothed_swpc_ssn": 55.1,
  "f10.7": 102.94,
  "smoothed_f10.7": 101.7
  },
  {
  "time-tag": "2022-01",
  "ssn": 55.3,
  "smoothed_ssn": 60.1,
  "observed_swpc_ssn": 56.97,
  "smoothed_swpc_ssn": 59.5,
  "f10.7": 104.05,
  "smoothed_f10.7": 105
  },
  {
  "time-tag": "2022-02",
  "ssn": 60.9,
  "smoothed_ssn": 64.7,
  "observed_swpc_ssn": 65.61,
  "smoothed_swpc_ssn": 63.8,
  "f10.7": 109.15,
  "smoothed_f10.7": 108.6
  },
  {
  "time-tag": "2022-03",
  "ssn": 78.6,
  "smoothed_ssn": 68.7,
  "observed_swpc_ssn": 69.06,
  "smoothed_swpc_ssn": 67,
  "f10.7": 117.79,
  "smoothed_f10.7": 112.2
  },
  {
  "time-tag": "2022-04",
  "ssn": 84,
  "smoothed_ssn": 73,
  "observed_swpc_ssn": 76.43,
  "smoothed_swpc_ssn": 70.3,
  "f10.7": 130.63,
  "smoothed_f10.7": 116
  },
  {
  "time-tag": "2022-05",
  "ssn": 96.5,
  "smoothed_ssn": 77.4,
  "observed_swpc_ssn": 92.45,
  "smoothed_swpc_ssn": 73.6,
  "f10.7": 133.98,
  "smoothed_f10.7": 119.3
  },
  {
  "time-tag": "2022-06",
  "ssn": 70.3,
  "smoothed_ssn": 81.1,
  "observed_swpc_ssn": 71.53,
  "smoothed_swpc_ssn": 76.5,
  "f10.7": 116.07,
  "smoothed_f10.7": 122.7
  },
  {
  "time-tag": "2022-07",
  "ssn": 91.4,
  "smoothed_ssn": 86.7,
  "observed_swpc_ssn": 93.03,
  "smoothed_swpc_ssn": 81.4,
  "f10.7": 125.62,
  "smoothed_f10.7": 127.9
  },
  {
  "time-tag": "2022-08",
  "ssn": 74.6,
  "smoothed_ssn": 92.6,
  "observed_swpc_ssn": 69.74,
  "smoothed_swpc_ssn": 87.1,
  "f10.7": 118.13,
  "smoothed_f10.7": 133.8
  },
  {
  "time-tag": "2022-09",
  "ssn": 96,
  "smoothed_ssn": 96.5,
  "observed_swpc_ssn": 82.23,
  "smoothed_swpc_ssn": 91.3,
  "f10.7": 134.69,
  "smoothed_f10.7": 138.1
  },
  {
  "time-tag": "2022-10",
  "ssn": 95.5,
  "smoothed_ssn": 98.9,
  "observed_swpc_ssn": 85.29,
  "smoothed_swpc_ssn": 93.6,
  "f10.7": 132.84,
  "smoothed_f10.7": 140.4
  },
  {
  "time-tag": "2022-11",
  "ssn": 80.5,
  "smoothed_ssn": 101.2,
  "observed_swpc_ssn": 65.1,
  "smoothed_swpc_ssn": 95.7,
  "f10.7": 123.56,
  "smoothed_f10.7": 141.9
  },
  {
  "time-tag": "2022-12",
  "ssn": 112.8,
  "smoothed_ssn": 106.7,
  "observed_swpc_ssn": 110.03,
  "smoothed_swpc_ssn": 100,
  "f10.7": 148.46,
  "smoothed_f10.7": 144.8
  },
  {
  "time-tag": "2023-01",
  "ssn": 144.4,
  "smoothed_ssn": 113.3,
  "observed_swpc_ssn": 133.35,
  "smoothed_swpc_ssn": 105,
  "f10.7": 182.47,
  "smoothed_f10.7": 148.9
  },
  {
  "time-tag": "2023-02",
  "ssn": 111.3,
  "smoothed_ssn": 117.8,
  "observed_swpc_ssn": 126.75,
  "smoothed_swpc_ssn": 108.4,
  "f10.7": 172.09,
  "smoothed_f10.7": 152.5
  },
  {
  "time-tag": "2023-03",
  "ssn": 123.3,
  "smoothed_ssn": 121.1,
  "observed_swpc_ssn": 108.55,
  "smoothed_swpc_ssn": 111.6,
  "f10.7": 157.53,
  "smoothed_f10.7": 154.9
  },
  {
  "time-tag": "2023-04",
  "ssn": 97.6,
  "smoothed_ssn": 122.9,
  "observed_swpc_ssn": 93.67,
  "smoothed_swpc_ssn": 114,
  "f10.7": 145.86,
  "smoothed_f10.7": 156.1
  },
  {
  "time-tag": "2023-05",
  "ssn": 137.4,
  "smoothed_ssn": 124.1,
  "observed_swpc_ssn": 125.77,
  "smoothed_swpc_ssn": 116.1,
  "f10.7": 156.04,
  "smoothed_f10.7": 157.8
  },
  {
  "time-tag": "2023-06",
  "ssn": 160.5,
  "smoothed_ssn": 125.2,
  "observed_swpc_ssn": 140.57,
  "smoothed_swpc_ssn": 117.9,
  "f10.7": 162.39,
  "smoothed_f10.7": 159.5
  },
  {
  "time-tag": "2023-07",
  "ssn": 160,
  "smoothed_ssn": 124.3,
  "observed_swpc_ssn": 143.65,
  "smoothed_swpc_ssn": 117.6,
  "f10.7": 177.53,
  "smoothed_f10.7": 159.2
  },
  {
  "time-tag": "2023-08",
  "ssn": 114.8,
  "smoothed_ssn": 124,
  "observed_swpc_ssn": 99.87,
  "smoothed_swpc_ssn": 116.7,
  "f10.7": 153.92,
  "smoothed_f10.7": 158.5
  },
  {
  "time-tag": "2023-09",
  "ssn": 134.2,
  "smoothed_ssn": -1,
  "observed_swpc_ssn": 129.93,
  "smoothed_swpc_ssn": -1,
  "f10.7": 155.74,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2023-10",
  "ssn": 99.4,
  "smoothed_ssn": -1,
  "observed_swpc_ssn": 94.94,
  "smoothed_swpc_ssn": -1,
  "f10.7": 141.59,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2023-11",
  "ssn": 105.4,
  "smoothed_ssn": -1,
  "observed_swpc_ssn": 105.87,
  "smoothed_swpc_ssn": -1,
  "f10.7": 154.36,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2023-12",
  "ssn": 114.2,
  "smoothed_ssn": -1,
  "observed_swpc_ssn": 113.65,
  "smoothed_swpc_ssn": -1,
  "f10.7": 159.28,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2024-01",
  "ssn": 123,
  "smoothed_ssn": -1,
  "observed_swpc_ssn": 121.77,
  "smoothed_swpc_ssn": -1,
  "f10.7": 163.99,
  "smoothed_f10.7": -1
  },
  {
  "time-tag": "2024-02",
  "ssn": 124.7,
  "smoothed_ssn": -1,
  "observed_swpc_ssn": 116.59,
  "smoothed_swpc_ssn": -1,
  "f10.7": 173.28,
  "smoothed_f10.7": -1
  }];

app.get('/solar-cycle-6-month', (req, res) => {
  fetch('https://services.swpc.noaa.gov/json/solar-cycle/observed-solar-cycle-indices.json', {
    headers: {
      accept: 'application/json'
    },
    signal: AbortSignal.timeout(80000),
  })
  .then(response => response.json())
  .then(data => res.send(data.reverse().slice(0,5)))
  .catch(error => res.send(
    error.cause
  ))
    

})

app.get('/solar-cycle-last-3-years', (req, res) => {
  fetch('https://services.swpc.noaa.gov/json/solar-cycle/observed-solar-cycle-indices.json', {
    headers: {
      accept: 'application/json'
    },
    signal: AbortSignal.timeout(80000),
  })
  .then(response => response.json())
  .then(data => res.send(data.reverse().slice(0,31)))
  .catch(error => res.send(
    error.cause
  ))
    

})

app.listen(port, ()=> {
  console.log("Running ...")
})

