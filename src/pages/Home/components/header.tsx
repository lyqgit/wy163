import React,{ Component } from 'react'
import './header.scss'

export default class Header extends Component{



  render(){
    return (
      <div className="headerContainer">
        <div className="header">
          <h1 className="headerLeft">
            {/* <span>网易云音乐</span> */}
            <svg className='headerSvg' viewBox="0 0 1238 231" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="logo_white" fill-rule="nonzero"><g id="Group" transform="translate(288.000000, 31.000000)" fill="#FFFFFF"><path d="M225.14,75.724 L343.119,75.724 C346.655,75.724 349.523,72.856 349.523,69.319 L349.523,13.42 C349.523,9.882 346.656,7.014 343.119,7.014 L225.14,7.014 C221.603,7.014 218.736,9.882 218.736,13.42 L218.736,69.319 C218.736,72.856 221.603,75.724 225.14,75.724 Z M234.881,19.827 L333.513,19.827 L333.513,34.964 L234.881,34.964 L234.881,19.827 Z M234.881,47.775 L333.513,47.775 L333.513,62.913 L234.881,62.913 L234.881,47.775 Z" id="Shape"></path><path d="M348.677,88.266 L226.579,88.266 C224.599,88.266 222.729,89.183 221.516,90.75 L208.741,108.577 L196.048,125.972 C195.265,127.045 196.031,128.553 197.36,128.553 L211.423,128.553 C212.544,128.553 213.595,128.018 214.254,127.115 L232.597,102.015 L258.363,102.015 L212.345,165.325 C211.547,166.423 212.331,167.962 213.688,167.962 L227.589,167.962 C228.747,167.962 229.832,167.409 230.512,166.473 L277.367,102.015 L303.675,102.015 L257.619,165.404 C256.845,166.469 257.606,167.962 258.922,167.962 L273.094,167.962 C274.141,167.962 275.125,167.46 275.742,166.613 L322.678,102.015 L331.29,102.015 L339.073,102.035 L339.073,130.829 L339.073,136.167 L339.073,140.994 C339.073,147.044 334.17,151.948 328.122,151.948 L315.022,151.948 C313.976,151.948 312.994,152.449 312.379,153.295 L303.691,165.252 C302.872,166.38 303.677,167.963 305.072,167.963 L328.118,167.963 C343.009,167.963 355.084,155.888 355.084,140.991 L355.084,94.673 C355.083,91.134 352.215,88.266 348.677,88.266 Z" id="Shape"></path><path d="M556.932,68.036 L394.914,68.036 C393.943,68.036 393.154,68.824 393.154,69.795 L393.154,73.979 C393.154,79.189 397.377,83.413 402.586,83.413 L444.741,83.413 L406.251,156.376 C405.303,158.171 404.96,160.274 405.522,162.226 C406.487,165.585 409.51,167.758 412.83,167.758 L542.212,167.758 C544.007,167.758 545.806,167.245 547.204,166.119 C549.994,163.872 550.789,160.166 549.422,157.09 L528.401,116.593 C528.041,115.781 527.236,115.258 526.348,115.258 L514.01,115.258 C512.385,115.258 511.298,116.93 511.957,118.416 L530.166,152.578 L425.414,152.578 L461.902,83.412 L550.002,83.412 C554.794,83.412 558.68,79.527 558.68,74.734 L558.68,69.781 C558.68,68.818 557.897,68.036 556.932,68.036 Z" id="Shape"></path><path d="M416.142,30.062 L535.956,30.062 C540.884,30.062 544.878,26.067 544.878,21.138 L544.878,16.605 C544.878,15.545 544.018,14.686 542.959,14.686 L409.029,14.686 C407.882,14.686 406.955,15.615 406.955,16.761 L406.955,20.873 C406.955,25.948 411.068,30.062 416.142,30.062 Z" id="Shape"></path><path d="M153.048,8.96 L8.111,8.96 C3.69,8.96 0.106,12.545 0.106,16.967 L0.106,166.423 C0.106,167.436 0.929,168.259 1.941,168.259 L14.282,168.259 C15.295,168.259 16.118,167.436 16.118,166.423 L16.118,24.975 L145.043,24.975 L145.043,37.585 L145.043,141.288 C145.043,147.338 140.14,152.243 134.092,152.243 L125.304,152.243 C124.275,152.243 123.308,152.735 122.704,153.567 L113.62,166.071 C112.959,166.981 113.609,168.258 114.734,168.258 L134.089,168.258 C148.737,168.258 160.668,156.511 161.022,141.946 L161.055,141.946 L161.055,37.586 L161.055,16.967 C161.054,12.545 157.469,8.96 153.048,8.96 Z" id="Shape"></path><path d="M117.341,133.327 L131.453,133.327 C132.661,133.327 133.416,132.024 132.817,130.976 L108.615,88.61 L132.817,46.243 C133.416,45.196 132.661,43.892 131.455,43.892 L117.34,43.892 C116.776,43.892 116.255,44.194 115.976,44.683 L99.759,73.068 L83.542,44.683 C83.263,44.194 82.741,43.892 82.178,43.892 L68.065,43.892 C66.858,43.892 66.102,45.196 66.701,46.243 L90.903,88.609 L66.701,130.976 C66.102,132.024 66.859,133.327 68.065,133.327 L82.178,133.327 C82.741,133.327 83.263,133.025 83.542,132.535 L99.759,104.151 L115.976,132.535 C116.257,133.025 116.777,133.327 117.341,133.327 Z" id="Shape"></path><path d="M70.027,89.258 C70.314,88.795 70.373,88.195 70.066,87.656 L45.482,44.683 C45.203,44.194 44.681,43.892 44.118,43.892 L29.84,43.892 C28.633,43.892 27.877,45.196 28.476,46.243 L52.625,88.459 L28.342,130.977 C27.743,132.025 28.5,133.328 29.706,133.328 L43.984,133.328 C44.549,133.328 45.069,133.026 45.348,132.536 L69.996,89.383 C70.018,89.341 70.009,89.299 70.027,89.258 Z" id="Shape"></path><path d="M751.56,60.348 L705.189,60.348 L722.443,30.062 L732.056,30.062 C737.155,30.062 741.288,25.928 741.288,20.828 L741.288,16.489 C741.288,15.494 740.481,14.686 739.485,14.686 L680.216,14.686 L673.013,2.14 C672.344,0.977 671.105,0.259 669.764,0.259 L657.073,0.259 C655.799,0.259 655.002,1.637 655.638,2.742 L662.501,14.687 L602.295,14.687 C601.244,14.687 600.391,15.539 600.391,16.591 L600.391,20.829 C600.391,25.929 604.525,30.063 609.624,30.063 L619.237,30.063 L636.491,60.349 L590.11,60.349 C588.988,60.349 588.078,61.258 588.078,62.381 L588.078,66.576 C588.078,71.629 592.173,75.725 597.224,75.725 L744.666,75.725 C749.602,75.725 753.602,71.723 753.602,66.787 L753.602,62.39 C753.6,61.262 752.687,60.348 751.56,60.348 Z M687.499,60.348 L654.178,60.348 L636.925,30.062 L704.753,30.062 L687.499,60.348 Z" id="Shape"></path><path d="M726.61,88.266 L704.819,88.266 L615.067,88.266 C610.823,88.266 607.38,91.709 607.38,95.955 L607.38,160.275 C607.38,164.519 610.823,167.963 615.067,167.963 L726.61,167.963 C730.854,167.963 734.297,164.52 734.297,160.275 L734.297,116.813 L734.297,95.955 C734.297,91.709 730.854,88.266 726.61,88.266 Z M718.285,153.743 L623.457,153.743 L623.457,135.224 L718.285,135.224 L718.285,153.743 Z M718.285,116.812 L718.285,121.004 L623.457,121.004 L623.457,102.485 L704.819,102.485 L718.285,102.485 L718.285,116.812 Z" id="Shape"></path><path d="M944.067,79.044 L944.067,74.526 C944.067,73.622 943.335,72.89 942.431,72.89 L877.728,72.89 L877.728,39.705 C877.728,38.696 876.91,37.877 875.9,37.877 L870.891,37.877 C865.824,37.877 861.715,41.986 861.715,47.054 L861.715,72.889 L808.375,72.889 L813.729,32.593 C859.199,30.416 905.533,24.899 924.423,22.479 C929.282,21.856 932.695,17.387 932.014,12.535 L931.322,7.608 C931.204,6.767 930.453,6.176 929.612,6.291 C919.62,7.644 861.416,15.295 806.552,17.521 C802.781,17.674 799.678,20.548 799.231,24.299 L792.092,79.673 C791.836,81.854 792.52,84.039 793.981,85.682 C795.44,87.323 797.531,88.265 799.727,88.265 L861.716,88.265 L861.716,141.002 C861.716,147.054 856.813,151.959 850.762,151.959 L847.96,151.959 C846.829,151.959 845.766,152.502 845.103,153.421 L836.76,164.986 C835.862,166.232 836.752,167.973 838.289,167.973 L850.761,167.973 C865.654,167.973 877.727,155.898 877.727,141.001 L877.727,88.264 L934.845,88.264 C939.939,88.266 944.067,84.138 944.067,79.044 Z" id="Shape"></path><path d="M834.801,102.485 L823.581,102.485 C820.493,102.485 817.625,104.027 815.94,106.616 C808.225,118.468 797.397,139.751 786.721,156.722 C785.802,158.183 786.816,160.076 788.543,160.076 L798.743,160.076 C801.815,160.076 804.729,158.558 806.363,155.955 C818.41,136.748 829.701,115.809 836.143,104.927 C836.786,103.841 836.063,102.485 834.801,102.485 Z" id="Shape"></path><path d="M948.759,156.722 C938.085,139.752 927.257,118.468 919.54,106.616 C917.855,104.027 914.989,102.485 911.899,102.485 L900.678,102.485 C899.417,102.485 898.694,103.84 899.336,104.926 C905.779,115.808 917.069,136.748 929.118,155.954 C930.75,158.557 933.666,160.075 936.738,160.075 L946.937,160.075 C948.665,160.076 949.679,158.183 948.759,156.722 Z" id="Shape"></path></g><g id="Group"><path d="M177.66,0.259 L52.34,0.259 C23.553,0.259 0,23.812 0,52.599 L0,177.919 C0,206.706 23.553,230.259 52.34,230.259 L177.66,230.259 C206.447,230.259 230,206.706 230,177.919 L230,52.599 C230,23.812 206.447,0.259 177.66,0.259 Z" id="Shape" fill="#FFFFFF"></path><path d="M139.287,71.199 C138.652,68.792 137.686,65.115 136.946,62.354 C136.384,60.317 136.125,58.003 136.725,55.942 C136.893,55.363 137.151,54.842 137.436,54.312 C138.675,52.011 140.99,50.423 143.559,49.997 C144.725,49.804 145.923,49.863 147.065,50.164 C148.262,50.48 149.39,51.045 150.376,51.789 C151.408,52.569 152.216,53.577 153.158,54.453 C154.685,55.878 156.732,56.75 158.984,56.75 C163.705,56.75 167.533,52.922 167.533,48.202 C167.533,46.801 167.193,45.481 166.596,44.316 C166.544,44.215 166.49,44.113 166.433,44.012 C166.395,43.946 166.356,43.878 166.316,43.812 C165.36,42.201 163.978,40.802 162.553,39.579 C159.814,37.226 156.58,35.45 153.142,34.355 C151.525,33.839 149.859,33.474 148.173,33.281 C144.462,32.855 140.67,33.243 137.124,34.416 C123.148,39.03 116.445,52.056 120.452,66.839 C120.848,68.318 121.533,70.928 121.894,72.287 C118.903,72.93 115.934,73.809 113.019,74.932 C99.367,80.189 88.532,91.863 84.743,105.4 C83.396,110.215 82.934,115.206 83.373,120.239 C84.32,131.114 90.121,141.245 98.887,147.334 C107.146,153.072 117.025,154.756 126.713,152.085 C133.57,150.191 139.666,146.116 143.878,140.612 C150.543,131.906 152.531,120.463 149.475,108.394 C148.363,104.003 146.963,99.125 145.611,94.405 C145.12,92.7 144.63,90.987 144.149,89.289 C149.945,90.78 155.29,93.6 159.634,97.658 C174.725,111.753 177.634,136.031 166.399,154.135 C156.532,170.037 137.311,180.311 117.433,180.311 C83.913,180.311 56.643,153.042 56.643,119.524 C56.643,116.547 56.874,113.534 57.328,110.576 C57.693,108.19 58.208,105.811 58.856,103.5 C59.496,101.222 60.279,98.956 61.184,96.771 C62.084,94.599 63.119,92.465 64.266,90.418 C65.399,88.39 66.672,86.402 68.043,84.506 C69.399,82.629 70.888,80.806 72.462,79.089 C74.031,77.377 75.718,75.74 77.475,74.218 C79.23,72.699 81.097,71.264 83.021,69.952 C84.952,68.635 86.979,67.422 89.047,66.343 C90.182,65.752 91.332,65.196 92.501,64.68 C93.128,64.402 93.762,64.136 94.399,63.881 C98.785,62.133 100.922,57.161 99.174,52.775 C97.427,48.389 92.456,46.248 88.068,48.003 C87.24,48.333 86.417,48.681 85.578,49.049 C84.074,49.716 82.59,50.429 81.137,51.19 C78.483,52.575 75.881,54.132 73.398,55.823 C70.93,57.505 68.538,59.344 66.287,61.295 C64.037,63.243 61.872,65.344 59.864,67.537 C57.843,69.737 55.937,72.076 54.193,74.483 C52.435,76.914 50.804,79.467 49.35,82.068 C47.878,84.694 46.546,87.438 45.39,90.227 C44.225,93.042 43.217,95.955 42.397,98.886 C41.564,101.854 40.903,104.914 40.432,107.978 C39.845,111.794 39.547,115.68 39.547,119.524 C39.547,162.469 74.487,197.405 117.431,197.405 C143.088,197.405 168.01,183.958 180.921,163.147 C196.629,137.84 192.582,105.043 171.299,85.165 C162.586,77.026 151.244,72.252 139.287,71.199 Z M130.304,130.222 C128.342,132.785 125.447,134.7 122.159,135.609 C116.13,137.267 111.479,135.267 108.641,133.296 C103.994,130.069 100.915,124.63 100.4,118.756 C100.142,115.779 100.41,112.837 101.203,110.008 C103.566,101.568 110.446,94.241 119.161,90.884 C121.501,89.984 123.885,89.301 126.279,88.832 C127.186,92.181 128.184,95.663 129.176,99.121 C130.516,103.787 131.844,108.409 132.902,112.59 C134.138,117.47 134.691,124.491 130.304,130.222 Z" id="Shape" fill="#DD001B"></path></g></g></g></svg>
          </h1>
          <div className="headerRight">
            <span>下载APP</span>
          </div>
        </div>
      </div>
    )
  }
}