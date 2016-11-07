;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-sousuo" viewBox="0 0 1000 1000">'+
      ''+
      '<path d="M864.5282 808.5048l-251.3122-236.0699c37.3832-41.6028 61.5808-95.5942 65.4794-155.7374 9.2241-142.2945-98.6553-265.1252-240.9558-274.349-142.3005-9.2237-265.1364 98.6511-274.3605 240.9456s98.6553 265.1252 240.9558 274.349c67.559 4.379 130.7189-17.649 179.4279-57.2092l252.9851 237.6419c4.8269 4.5349 9.9727 1.0603 15.0864-4.383l9.2601-9.8573C866.2091 818.3921 869.3551 813.0398 864.5282 808.5048zM406.5334 623.7371c-123.5744-8.0106-217.2568-114.6762-209.2469-238.2455s114.6811-217.2477 238.2555-209.2381c123.5744 8.0106 217.2568 114.6762 209.2469 238.2455S530.1069 631.7477 406.5334 623.7371z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-shezhi" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M848.2028 624.638c61.7667 0 111.9928-50.2538 111.9928-111.9928 0-61.7667-50.2262-111.9949-111.9928-111.9949h-19.414016c-3.9373-11.1831-8.448-22.1194-13.4779-32.7014l13.6704-13.698c21.0811-21.0801 32.7025-49.2165 32.7025-79.1828 0-29.995-11.6214-58.1028-32.7025-79.1839-21.0801-21.1098-49.2165-32.7035-79.1839-32.7035-29.9704 0-58.1048 11.5937-79.1818 32.7035l-13.6704 13.6714c-10.6107-5.033-21.5214-9.5437-32.7311-13.481v-19.412992c0-61.7656-50.2292-111.9939-111.9949-111.9939-61.7636 0-111.9928 50.2282-111.9928 111.9939v19.412992c-11.2118 3.9373-22.1225 8.448-32.7322 13.481l-13.6714-13.6714c-21.077-21.1098-49.2124-32.7035-79.1828-32.7035-29.9663 0-58.0987 11.5937-79.1839 32.7035-21.076 21.0801-32.7014 49.1889-32.7014 79.1839 0 29.9674 11.6255 58.1028 32.7014 79.1828l13.6714 13.6704c-5.0289 10.6097-9.5406 21.5194-13.4779 32.7291h-19.414016c-61.7636 0-111.9928 50.2282-111.9928 111.9949 0 61.739 50.2292 111.9928 111.9928 111.9928h19.414016c3.9373 11.2118 8.449 22.1215 13.4779 32.7291l-13.6714 13.6714c-21.076 21.0811-32.7014 49.1909-32.7014 79.1849 0 29.996 11.6255 58.1028 32.7014 79.1828 21.0852 21.078 49.2175 32.7035 79.1839 32.7035 29.9715 0 58.1059-11.6255 79.1828-32.7035l13.6714-13.6704c10.6097 5.0309 21.5204 9.5119 32.7322 13.4789v19.416064c0 61.7359 50.2292 111.9928 111.9928 111.9928 61.7656 0 111.9949-50.2569 111.9949-111.9928v-19.416064c11.2097-3.967 22.1204-8.448 32.7311-13.5045l13.6704 13.695c21.077 21.078 49.2124 32.7035 79.1818 32.7035 29.9674 0 58.1038-11.6255 79.1839-32.7035 21.0811-21.0801 32.7025-49.1868 32.7025-79.1828 0-29.994-11.6214-58.1038-32.7025-79.1849l-13.6704-13.698c5.0299-10.6076 9.5406-21.5194 13.4779-32.7025H848.202752zM789.3873 710.6294c10.5277 10.5001 16.297 24.5555 16.297 39.594 0 15.0108-5.7692 29.0673-16.297 39.5909-21.0504 21.0278-58.1294 21.0278-79.1808 0l-43.1186-43.1452-18.4842 10.3629c-18.647 10.4172-38.826 18.7556-60.0177 24.7695l-20.3694 5.7723v61.057024c0 30.8675-25.1279 55.9933-55.9985 55.9933s-55.9985-25.1259-55.9985-55.9933v-61.057024l-20.3674-5.7723c-21.2183-6.0416-41.4259-14.3534-60.0156-24.7695l-18.4852-10.3363-43.1206 43.1176c-21.0534 21.0278-58.1294 21.0278-79.1828 0-10.5267-10.5236-16.2939-24.5801-16.2939-39.5909 0-15.0385 5.7672-29.0939 16.2939-39.594l43.1176-43.1165-10.3588-18.4852c-10.3916-18.5907-18.7054-38.7697-24.746-60.0412l-5.7733-20.3448h-61.053951999999995c-30.8695 0-55.9954-25.1279-55.9954-55.9964 0-30.8705 25.1249-55.9985 55.9954-55.9985h61.053951999999995l5.7733-20.3704c6.0406-21.2449 14.3544-41.4505 24.746-60.0156l10.3588-18.4832-43.1176-43.1186c-10.5267-10.5277-16.2939-24.5811-16.2939-39.5919 0-15.0395 5.7672-29.0939 16.2939-39.5919 21.0545-21.0278 58.1304-21.0278 79.1828 0l43.1206 43.1176 18.4852-10.3608c18.5897-10.3905 38.7983-18.731 60.0156-24.746l20.3674-5.7702v-61.056000000000004c0-30.8951 25.1279-55.9964 55.9985-55.9964s55.9985 25.1013 55.9985 55.9964v61.056000000000004l20.3694 5.7702c21.1917 6.016 41.3706 14.3278 60.0177 24.7716l18.4842 10.3352 43.1186-43.1176c21.0524-21.0278 58.1315-21.0278 79.1808 0 10.5277 10.498 16.297 24.5524 16.297 39.5919 0 15.0108-5.7692 29.0642-16.297 39.5919l-43.0909 43.1186 10.3076 18.4832c10.4479 18.6737 18.7832 38.8813 24.7706 60.0156l5.7733 20.3704h61.053951999999995c30.8695 0 55.9974 25.1279 55.9974 55.9985 0 30.8685-25.1279 55.9964-55.9974 55.9964h-61.053951999999995l-5.7733 20.3448c-5.9884 21.161-14.3227 41.342-24.7706 60.0412l-10.3076 18.4852L789.3873 710.6294zM512.2181 344.6528c-92.6372 0-167.9913 75.3551-167.9913 167.9923 0 92.6351 75.3541 167.9913 167.9913 167.9913s167.9913-75.3562 167.9913-167.9913C680.2094 420.0079 604.8553 344.6528 512.2181 344.6528zM512.2181 624.638c-61.7636 0-111.9928-50.2538-111.9928-111.9928 0-61.7667 50.2292-111.9949 111.9928-111.9949 61.7656 0 111.9949 50.2282 111.9949 111.9949C624.213 574.3841 573.9848 624.638 512.2181 624.638z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-start" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0zM512 960c-247.424 0-448-200.576-448-448s200.576-448 448-448 448 200.576 448 448S759.424 960 512 960z"  ></path>'+
      ''+
      '<path d="M384 256 768 512 384 768Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-xiazai" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M495.897106 752.797251c0.645733 0.937348 1.371286 1.836835 2.202245 2.669806 0.831982 0.829901 1.727412 1.551332 2.660705 2.194992 0.096195 0.065492 0.184203 0.140193 0.279374 0.203638 0.083915 0.058328 0.173969 0.104377 0.25993 0.157589 3.006597 1.956561 6.588315 3.103688 10.441221 3.103688 3.855976 0 7.437694-1.147126 10.441221-3.103688 0.085961-0.054235 0.176016-0.102331 0.261977-0.157589 0.096195-0.064468 0.186249-0.138146 0.279374-0.203638 0.933293-0.64366 1.828723-1.36509 2.660705-2.194992 0.833005-0.832971 1.558559-1.732457 2.204292-2.671852l304.705998-304.71091c7.400854-7.383154 7.400854-19.394722 0-26.797319-7.400854-7.421017-19.413937-7.421017-26.814791 0L530.931429 695.823656l0-529.530258c0-10.605545-8.582821-19.188015-19.187777-19.188015s-19.189824 8.582469-19.189824 19.188015l0 529.530258L218.005898 421.286975c-7.401877-7.421017-19.414961-7.421017-26.815814 0-7.401877 7.399527-7.401877 19.414165 0 26.797319L495.897106 752.797251zM876.332912 837.879022 147.152344 837.879022c-10.60598 0-19.188801 8.582469-19.188801 19.189038 0 10.587126 8.582821 19.186991 19.188801 19.186991l729.180568 0c10.58756 0 19.189824-8.599865 19.189824-19.186991C895.522736 846.461491 886.920472 837.879022 876.332912 837.879022z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-music" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M676.92544 558.08c-52.36736 0-94.94528 43.06944-94.94528 96.01024s42.57792 96.01024 94.94528 96.01024c45.95712 0 84.33664-33.19808 93.04064-77.12768 1.16736-2.58048 1.88416-5.38624 1.88416-8.3968L771.85024 217.6c0-6.18496-2.80576-12.04224-7.59808-15.91296-4.79232-3.8912-11.07968-5.44768-17.16224-4.096l-383.56992 81.92c-9.44128 2.00704-16.19968 10.36288-16.19968 20.02944l0 378.14272c-15.33952-10.77248-33.91488-17.18272-53.98528-17.18272-52.34688 0-94.9248 43.06944-94.9248 96.01024s42.57792 96.01024 94.9248 96.01024c52.36736 0 94.94528-43.06944 94.94528-96.01024 0-2.29376-0.512-4.44416-0.67584-6.67648 0.18432-1.1264 0.67584-2.12992 0.67584-3.31776L388.28032 438.96832l342.60992-73.17504 0 209.48992C715.53024 564.49024 696.97536 558.08 676.92544 558.08zM676.92544 709.12c-29.75744 0-53.98528-24.69888-53.98528-55.05024s24.22784-55.05024 53.98528-55.05024 53.9648 24.69888 53.9648 55.05024S706.68288 709.12 676.92544 709.12zM293.31456 811.52c-29.75744 0-53.9648-24.69888-53.9648-55.05024s24.20736-55.05024 53.9648-55.05024 53.98528 24.69888 53.98528 55.05024S323.072 811.52 293.31456 811.52zM388.25984 397.08672l0-81.01888 342.60992-73.15456 0 80.9984L388.25984 397.08672z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-ttpodicon" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M815.045407 826.541813c-18.198218-20.869307-76.860685-88.349187-110.542175-127.250172l68.990106 0L773.493338 185.452759l84.138744 0 0 513.839905 67.838838 0C892.265287 737.579665 834.40001 804.258297 815.045407 826.541813z"  ></path>'+
      ''+
      '<path d="M64.491463 689.618327l483.5468 0 0 58.014298-483.5468 0 0-58.014298Z"  ></path>'+
      ''+
      '<path d="M64.491463 456.056873l576.145571 0 0 58.014298-576.145571 0 0-58.014298Z"  ></path>'+
      ''+
      '<path d="M64.491463 222.490304l576.145571 0 0 58.014298-576.145571 0 0-58.014298Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-xin" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M872.411 355.813c-23.328-86.678-92.829-137.823-184.419-137.547-68.947 0.394-131.25 42.898-171.47 116.857-40.735-73.78-105.733-116.746-174.149-116.925-92.628 0.598-158.901 50.898-181.836 137.932-6.113 23.198-6.251 48.103-6.432 76.931l-0.005 2.731c-1.009 156.7 337.494 420.239 351.909 431.361 3.294 2.544 7.188 3.787 11.070 3.787 5.422 0 10.783-2.407 14.366-7.046 6.124-7.895 4.675-19.303-3.261-25.434-94.201-72.859-338.559-287.198-337.815-402.464l0.005-2.731c0.16-26.389 0.304-49.166 5.222-67.902 25.258-95.813 102.957-110.623 147.014-110.901h0.853c55.635 0 109.026 37.796 142.979 101.271 4.29 8.004 13.216 24.688 30.175 24.688h0.090c16.985-0.035 26.033-17.29 29.879-24.615 33.686-64.041 85.312-100.951 141.618-101.271h1.062c36.468 0 121.321 11.12 148.115 110.724 5.298 19.623 5.439 43.57 5.613 72.295 0.459 67.339-81.914 178.381-231.918 312.741-7.456 6.658-8.096 18.13-1.422 25.61 6.7 7.471 18.173 8.080 25.61 1.421 111.681-100.034 244.671-240.19 243.999-340.962-0.194-30.255-0.354-56.398-6.859-80.551z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-mima" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M510.8672 526.813381c-29.501918 0-53.407374 23.903409-53.407374 53.408397 0 15.816221 6.875594 30.021757 17.802458 39.800471l0 49.206702c0 19.665899 15.940041 35.606962 35.605939 35.606962 19.661805 0 35.605939-15.941064 35.605939-35.606962l0-49.206702c10.926864-9.778714 17.803481-23.984251 17.803481-39.800471C564.27662 550.71679 540.370141 526.813381 510.8672 526.813381L510.8672 526.813381zM760.108774 366.596376l-35.606962 0 0-89.010243c0-117.993345-95.637174-213.626425-213.634612-213.626425s-213.634612 95.633081-213.634612 213.626425l0 89.010243-35.605939 0c-49.167816 0-89.014336 39.84652-89.014336 89.010243l0 338.243631c0 49.15963 39.84652 89.00615 89.014336 89.00615l498.481102 0c49.148373 0 89.014336-39.84345 89.014336-89.00615l0-338.243631C849.123111 406.441872 809.256124 366.596376 760.108774 366.596376L760.108774 366.596376zM510.8672 99.564623c98.31619 0 178.028673 79.70839 178.028673 178.020486l0 89.010243L332.862064 366.595352l0-89.010243-0.023536 0C332.838527 179.273013 412.552034 99.564623 510.8672 99.564623L510.8672 99.564623zM813.516148 793.846156c0 29.501918-23.906479 53.404304-53.407374 53.404304L261.627672 847.25046c-29.502941 0-53.408397-23.902386-53.408397-53.404304L208.219275 455.606619c0-29.502941 23.906479-53.408397 53.408397-53.408397l498.481102 0c29.501918 0 53.407374 23.906479 53.407374 53.408397L813.516148 793.846156 813.516148 793.846156zM813.516148 793.846156"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-shangyishou" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512.00512 839.69024c-5.32992 0-10.569728-2.079744-14.485504-5.998592l-307.2-307.2c-7.999488-7.991296-7.999488-20.970496 0-28.959744l307.2-307.2c5.844992-5.869568 14.66368-7.629824 22.315008-4.440064 7.655424 3.16928 12.645376 10.62912 12.645376 18.919424l0 153.6c0 11.31008-9.16992 20.48-20.48 20.48s-20.48-9.16992-20.48-20.48L491.52 254.260224 233.765888 512.01024 491.52 769.760256 491.52 665.61024c0-11.31008 9.16992-20.48 20.48-20.48 11.309056 0 20.48 9.16992 20.48 20.48l0 153.6c0 8.291328-4.989952 15.750144-12.644352 18.921472C517.306368 839.180288 514.639872 839.69024 512.00512 839.69024z"  ></path>'+
      ''+
      '<path d="M819.206144 839.69024c-5.32992 0-10.569728-2.079744-14.485504-5.998592l-307.2-307.2c-7.999488-7.991296-7.999488-20.970496 0-28.959744l307.2-307.2c5.850112-5.869568 14.675968-7.629824 22.316032-4.440064 7.653376 3.16928 12.643328 10.62912 12.643328 18.919424l0 614.4c0 8.291328-4.989952 15.750144-12.644352 18.921472C824.506368 839.180288 821.839872 839.69024 819.206144 839.69024zM540.965888 512.01024 798.72 769.760256 798.72 254.260224 540.965888 512.01024z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-xiayishou" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M511.99488 839.69024c5.32992 0 10.569728-2.079744 14.485504-5.998592l307.2-307.2c7.999488-7.991296 7.999488-20.970496 0-28.959744l-307.2-307.2c-5.846016-5.869568-14.664704-7.629824-22.316032-4.440064C496.509952 189.060096 491.52 196.519936 491.52 204.81024l0 153.6c0 11.31008 9.16992 20.48 20.48 20.48s20.48-9.16992 20.48-20.48L532.48 254.260224 790.234112 512.01024 532.48 769.760256 532.48 665.61024c0-11.31008-9.16992-20.48-20.48-20.48-11.309056 0-20.48 9.16992-20.48 20.48l0 153.6c0 8.291328 4.989952 15.750144 12.644352 18.921472C506.693632 839.180288 509.360128 839.69024 511.99488 839.69024z"  ></path>'+
      ''+
      '<path d="M196.964352 838.129664C189.309952 834.960384 184.32 827.49952 184.32 819.21024l0-614.4c0-8.290304 4.989952-15.750144 12.644352-18.920448 7.640064-3.18976 16.46592-1.429504 22.316032 4.440064l307.2 307.2c7.999488 7.990272 7.999488 20.970496 0 28.959744l-307.2 307.2c-3.915776 3.919872-9.155584 5.998592-14.485504 5.998592C202.160128 839.69024 199.493632 839.180288 196.964352 838.129664zM225.28 254.260224l0 515.500032L483.034112 512.01024 225.28 254.260224z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-ok" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M900.090411 269.432429l-19.401886-19.402909c-10.722202-10.720156-28.085662-10.720156-38.806841 0L414.969595 676.93854 182.118316 444.088284c-10.720156-10.721179-28.087709-10.721179-38.806841 0l-19.402909 19.401886c-10.720156 10.720156-10.720156 28.086685 0 38.806841l252.128321 252.151857c0.038886 0.038886 0.073678 0.078795 0.11154 0.11768l19.405979 19.401886c10.720156 10.722202 28.112268 10.722202 38.804794 0l19.430538-19.401886c0.179079-0.180102 0.347924-0.366344 0.521886-0.550539l445.777763-445.76446C910.810566 297.532417 910.810566 280.152585 900.090411 269.432429z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-xinxi" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M149.208277 895.679449l21.282722-170.267918c-60.423161-64.795748-93.597725-145.611356-93.597725-228.475622 0-203.257264 195.184401-368.615359 435.106726-368.615359s435.106726 165.358095 435.106726 368.615359-195.184401 368.615359-435.106726 368.615359c-70.603011 0-140.484591-14.635325-202.669886-42.388413L149.208277 895.679449zM512 162.694429c-220.964554 0-400.732847 149.941987-400.732847 334.24148 0 76.444043 31.822776 151.20884 89.602737 210.524784l5.765307 5.924943-15.70161 125.664048 111.287619-50.402947 6.184863 13.662161 8.030907-13.687744c59.491952 27.836999 127.115096 42.556235 195.562001 42.556235 220.964554 0 400.732847-149.941987 400.732847-334.24148S732.964554 162.694429 512 162.694429zM394.660548 516.945639c0 14.693654-11.912307 26.605961-26.605961 26.605961s-26.605961-11.912307-26.605961-26.605961 11.912307-26.605961 26.605961-26.605961S394.660548 502.251985 394.660548 516.945639zM535.876804 516.945639c0 14.693654-11.912307 26.605961-26.605961 26.605961-14.693654 0-26.605961-11.912307-26.605961-26.605961s11.912307-26.605961 26.605961-26.605961C523.964496 490.339678 535.876804 502.251985 535.876804 516.945639zM677.093059 516.945639c0 14.693654-11.912307 26.605961-26.605961 26.605961-14.693654 0-26.605961-11.912307-26.605961-26.605961s11.912307-26.605961 26.605961-26.605961C665.180751 490.339678 677.093059 502.251985 677.093059 516.945639z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-zhanghao" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M775.88 123.336l-520.72 0c-32.72 0-59.336 26.616-59.336 59.336l0 668.664c0 32.712 26.616 59.328 59.336 59.328l520.72 0c32.72 0 59.336-26.616 59.336-59.328L835.216 182.664C835.216 149.952 808.6 123.336 775.88 123.336zM795.216 851.328c0 10.656-8.672 19.328-19.336 19.328l-520.72 0c-10.664 0-19.336-8.672-19.336-19.328L235.824 717.288l504.04 0c11.048 0 20-8.952 20-20s-8.952-20-20-20L235.824 677.288 235.824 182.664c0-10.664 8.672-19.336 19.336-19.336l520.72 0c10.664 0 19.336 8.672 19.336 19.336L795.216 851.328z"  ></path>'+
      ''+
      '<path d="M573.112 199.544 432.16 199.544c-11.048 0-20 8.952-20 20s8.952 20 20 20l140.952 0c11.048 0 20-8.952 20-20S584.16 199.544 573.112 199.544z"  ></path>'+
      ''+
      '<path d="M514.008 766.096c-19.968 0-36.152 16.208-36.152 36.184 0 19.928 16.184 36.136 36.152 36.136 19.96 0 36.144-16.2 36.144-36.136C550.152 782.304 533.968 766.096 514.008 766.096z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-userinfo" viewBox="0 0 1025 1024">'+
      ''+
      '<path d="M1024 513.024c0-282.112-229.888-512-512-512-282.624 0-512 229.888-512 512 0 146.944 61.952 279.04 161.28 372.736l-0.512 0.512 12.8 11.264c13.312 11.776 27.136 22.528 41.472 32.768 1.024 1.024 2.048 1.536 3.584 2.56 5.12 3.584 10.24 7.168 15.36 10.24 3.072 2.048 6.144 4.096 9.216 5.632 3.072 2.048 6.656 4.096 9.728 5.632 4.096 2.56 8.192 4.608 12.288 7.168 2.048 1.024 4.096 2.048 6.144 3.072 5.12 2.56 10.752 5.632 15.872 8.192 0.512 0.512 1.536 0.512 2.048 1.024 6.656 3.072 12.8 6.144 19.456 8.704 0.512 0 0.512 0.512 1.024 0.512 6.656 3.072 13.824 5.632 20.992 8.192 0 0 0 0 0 0 35.328 13.312 72.704 23.04 111.104 28.16 0 0 0 0 0 0 7.168 1.024 14.848 2.048 22.016 2.56 0.512 0 1.024 0 2.048 0 7.168 0.512 14.336 1.024 21.504 1.536 0.512 0 1.536 0 2.048 0 7.168 0.512 14.336 0.512 22.016 0.512 7.168 0 14.336 0 22.016-0.512 0.512 0 1.536 0 2.048 0 7.168-0.512 14.336-1.024 21.504-1.536 0.512 0 1.024 0 1.536 0 62.464-5.632 121.344-22.528 175.616-48.64 0 0 0.512 0 0.512-0.512 6.144-3.072 12.288-6.144 17.92-9.216 1.024-0.512 2.048-1.024 3.072-1.536 5.12-2.56 10.24-5.632 15.36-8.704 2.048-1.024 3.584-2.048 5.632-3.584 4.608-2.56 8.704-5.632 13.312-8.192 2.56-1.536 5.12-3.072 7.68-5.12 3.584-2.56 7.68-5.12 11.264-7.68 3.072-2.048 6.144-4.096 8.704-6.656 1.536-1.536 3.584-2.56 5.12-4.096 4.608-3.584 9.216-7.168 13.824-11.264 0.512-0.512 1.024-1.024 1.536-1.536 3.584-3.072 7.68-6.144 11.264-9.216l12.8-11.264-0.512-0.512C962.048 792.576 1024 659.968 1024 513.024zM34.816 513.024c0-263.168 214.016-476.672 477.184-476.672 263.168 0 477.184 214.016 477.184 476.672 0 136.192-57.344 259.584-149.504 346.624-33.792-32.768-85.504-59.904-146.944-76.8-27.648-12.288-33.792-15.36-40.96-20.992l-7.68-7.168c-11.264-10.752-17.408-16.896-19.456-33.28l0-73.216c19.456-23.04 32.256-53.248 44.544-93.184 16.384-6.144 32.768-27.136 38.4-50.176 5.632-25.088 3.072-46.08-6.656-57.856 27.136-101.888 23.04-188.928-11.776-234.496-17.92-24.064-44.544-36.864-75.776-36.864-3.072-2.56-4.608-5.12-7.168-8.192-12.288-16.896-25.6-28.672-82.944-28.672l-6.144 0c-68.608 0-120.832 20.48-155.136 61.44C317.952 252.416 305.664 335.872 324.608 448.512c-8.192 11.776-10.752 31.232-6.144 54.784 4.096 22.016 17.92 41.472 33.28 49.664 14.848 44.032 30.72 74.24 48.64 94.72 1.024 33.28 1.536 70.656 0 77.824-2.048 10.24-7.68 19.968-17.408 29.696-9.216 9.216-22.016 16.384-48.128 26.624-64 17.408-116.736 45.056-151.04 77.824C92.672 772.608 34.816 649.728 34.816 513.024zM806.912 887.808c-1.024 0.512-1.536 1.536-2.56 2.048-4.608 3.584-9.216 7.168-14.336 10.752-1.536 1.024-3.072 2.048-4.608 3.584-3.584 2.56-7.168 5.12-10.752 7.168-2.56 1.536-5.632 3.584-8.192 5.12-2.048 1.536-4.096 2.56-6.656 4.096-4.096 2.56-8.192 5.12-12.8 7.68-1.536 1.024-3.072 1.536-4.608 2.56-5.12 2.56-9.728 5.12-14.848 7.68-0.512 0.512-1.024 0.512-1.536 1.024-53.76 27.136-112.128 44.032-172.544 49.152-0.512 0-1.024 0-1.536 0-6.144 0.512-12.288 1.024-18.432 1.024-1.024 0-2.048 0-2.56 0-6.144 0-12.8 0.512-18.944 0.512-6.144 0-12.8 0-18.944-0.512-1.024 0-2.048 0-2.56 0-6.144-0.512-12.288-0.512-18.432-1.024-0.512 0-1.024 0-1.536 0-47.104-4.096-93.184-15.36-136.704-32.768 0 0-0.512 0-0.512 0-6.144-2.56-12.288-5.12-17.92-7.68-0.512 0-0.512-0.512-1.024-0.512-5.12-2.56-10.24-5.12-15.36-7.68-1.024-0.512-2.048-1.024-3.072-1.536-4.608-2.56-9.216-4.608-13.824-7.168-2.048-1.024-4.096-2.048-6.144-3.584-4.096-2.048-7.68-4.608-11.264-6.656-2.56-1.536-5.12-3.072-7.68-5.12-1.536-1.024-3.072-2.048-4.608-3.072-5.12-3.072-9.728-6.656-14.336-9.728-0.512-0.512-1.536-1.024-2.048-1.536-8.192-5.632-16.384-11.776-24.064-18.432 29.696-28.16 76.8-51.712 135.68-68.096 28.672-11.264 46.592-19.968 61.44-34.816 14.848-14.848 24.064-30.72 27.136-48.128 2.56-14.848 1.024-74.24 0.512-91.648l0-6.656-4.608-5.12c-17.408-17.408-32.256-47.104-48.128-94.208l-1.024-12.288-13.312 0.512c-3.072-1.536-12.8-11.264-15.36-25.6-2.56-12.288-1.536-21.504-0.512-25.6l11.776-2.048-3.072-17.408c-19.456-106.496-10.24-183.296 27.648-228.864 27.136-32.256 70.144-49.152 128-49.152l6.144 0c44.032 0 48.64 6.656 54.272 14.336 4.096 5.632 9.728 13.312 21.504 20.48l4.608 2.56 9.728-0.512c20.992 0 36.352 7.68 48.128 22.528 28.672 37.888 29.696 120.832 2.56 216.064l-2.56 16.896 13.312 4.096c1.024 4.096 1.536 13.312-1.024 26.112-2.56 10.752-8.192 18.432-12.8 22.528l-14.336-10.752-7.168 24.576c-12.288 43.008-25.088 75.776-44.544 96.256l-5.12 5.12 0 89.088c3.584 30.72 16.896 43.52 30.208 55.808l8.192 8.192c12.288 10.24 22.016 14.336 52.736 28.16 56.832 15.872 102.912 39.424 132.096 67.072C811.008 884.736 808.96 886.272 806.912 887.808z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-menue" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M960 576 64 576c-35.2 0-64-28.8-64-64 0-35.2 28.8-64 64-64l896 0c35.2 0 64 28.8 64 64C1024 547.2 995.2 576 960 576zM960 200 64 200c-35.2 0-64-28.8-64-64 0-35.2 28.8-64 64-64l896 0c35.2 0 64 28.8 64 64C1024 171.2 995.2 200 960 200zM64 824l896 0c35.2 0 64 28.8 64 64 0 35.2-28.8 64-64 64L64 952c-35.2 0-64-28.8-64-64C0 852.8 28.8 824 64 824z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-stop" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512 1024c-281.6 0-512-230.4-512-512s230.4-512 512-512 512 230.4 512 512S793.6 1024 512 1024zM512 57.6C262.4 57.6 57.6 262.4 57.6 512s204.8 454.4 454.4 454.4 454.4-204.8 454.4-454.4S761.6 57.6 512 57.6z"  ></path>'+
      ''+
      '<path d="M320 320l384 0 0 384-384 0 0-384Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-page-prev" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M634.307 194.018l-292.925 292.822c-1.032 0.723-2.064 1.548-2.993 2.477-4.645 4.645-6.916 10.734-6.812 16.824-0.103 6.090 2.168 12.179 6.812 16.824 0.929 0.929 1.962 1.755 2.993 2.477l292.925 292.925c9.083 9.083 24.049 9.083 33.132 0s9.083-24.049 0-33.132l-279.094-279.094 279.094-278.991c9.083-9.083 9.083-24.049 0-33.132s-24.049-9.083-33.132 0z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-xiangyou" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M320 230.8 361.4 192 704 512 361.4 832 320 793.4 621 512Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-radom" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M113.314277 403.985938l187.662077 0c49.690726 0 97.101525 21.3564 130.073474 58.591443 7.382131 8.335852 17.656125 12.590759 27.979238 12.590759 8.803503 0 17.640776-3.093455 24.749684-9.388834 15.44476-13.676487 16.877389-37.284161 3.201925-52.728922-47.143717-53.237505-114.939799-83.771939-186.005344-83.771939L113.314277 329.278445c-20.629853 0-37.352723 16.723893-37.352723 37.352723C75.960531 387.262044 92.684424 403.985938 113.314277 403.985938z"  ></path>'+
      ''+
      '<path d="M910.683676 751.325737 723.023646 751.325737c-49.690726 0-97.101525-21.3564-130.073474-58.592466-13.677511-15.448854-37.286208-16.875343-52.728922-3.201925-15.445784 13.677511-16.877389 37.284161-3.201925 52.728922 47.143717 53.237505 114.939799 83.770915 186.005344 83.770915l187.661054 0c20.629853 0 37.353746-16.72287 37.353746-37.352723S931.314553 751.325737 910.683676 751.325737z"  ></path>'+
      ''+
      '<path d="M723.023646 403.985938l97.482195 0-67.545372 67.545372c-14.586207 14.58723-14.586207 38.237883 0 52.825113 7.294127 7.294127 16.854876 10.940167 26.41358 10.940167s19.119453-3.64604 26.41358-10.940167l131.310651-131.311675c0 0 0 0 0 0 0.877997-0.877997 1.710968-1.802042 2.498914-2.76395 0.064468-0.078795 0.12382-0.159636 0.187265-0.23843 0.706081-0.87595 1.376347-1.783623 2.001587-2.723018 0.083911-0.12689 0.163729-0.255827 0.246617-0.384763 0.583285-0.899486 1.131777-1.823532 1.64036-2.774183 0.072655-0.137123 0.13917-0.274246 0.210801-0.412392 0.491187-0.952698 0.946558-1.926886 1.356904-2.924609 0.047072-0.113587 0.090051-0.228197 0.137123-0.342808 0.405229-1.01819 0.77055-2.056845 1.088798-3.115967 0.023536-0.083911 0.046049-0.168846 0.070608-0.252757 0.314155-1.073448 0.583285-2.165316 0.799202-3.27765 0.013303-0.064468 0.022513-0.12996 0.035816-0.194428 0.208754-1.109264 0.376577-2.234901 0.48607-3.375887 0.007163-0.057305 0.00921-0.113587 0.014326-0.169869 0.104377-1.139963 0.165776-2.293229 0.165776-3.460822 0-1.167592-0.062422-2.320858-0.165776-3.459798-0.005117-0.056282-0.007163-0.112564-0.014326-0.169869-0.10847-1.14201-0.277316-2.266623-0.48607-3.375887-0.013303-0.064468-0.022513-0.12996-0.035816-0.194428-0.215918-1.112334-0.48607-2.204202-0.799202-3.27765-0.024559-0.083911-0.047072-0.168846-0.070608-0.252757-0.319272-1.059122-0.683569-2.097778-1.090844-3.115967-0.045025-0.11461-0.088004-0.229221-0.135076-0.341784-0.410346-0.998747-0.865717-1.972934-1.356904-2.925632-0.071631-0.138146-0.138146-0.275269-0.210801-0.412392-0.50756-0.950651-1.056052-1.87572-1.64036-2.774183-0.082888-0.128937-0.162706-0.257873-0.246617-0.384763-0.62524-0.939395-1.295506-1.846044-2.001587-2.723018-0.063445-0.078795-0.122797-0.159636-0.187265-0.23843-0.788969-0.961908-1.620917-1.885953-2.498914-2.76395 0-0.001023 0-0.001023 0-0.001023l-131.310651-131.311675c-14.591323-14.589276-38.238906-14.58723-52.826136 0-14.586207 14.58723-14.586207 38.237883 0 52.825113l67.545372 67.545372-97.482195 0c-136.955208 0-248.37688 111.420649-248.37688 248.375857 0 95.762017-77.908394 173.671435-173.670411 173.671435L113.314277 751.327784c-20.629853 0-37.352723 16.723893-37.352723 37.353746s16.723893 37.352723 37.352723 37.352723l187.662077 0c136.955208 0 248.37688-111.421672 248.37688-248.377904C549.353235 481.893308 627.261629 403.985938 723.023646 403.985938z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-circulation" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M873.439 305.081c-55.271-55.271-128.756-85.71-206.919-85.71h-307.108v-58.746c0-18.762-12.896-25.785-28.656-15.605l-141.383 91.312c-15.76 10.177-15.606 26.591 0.342 36.471l140.7 87.165c15.95 9.881 28.997 2.614 28.997-16.147v-58.458h307.107c124.969 0 226.638 101.669 226.638 226.638 0 20.663-2.774 41.126-8.244 60.819-4.878 17.558 5.401 35.745 22.959 40.623 2.955 0.821 5.926 1.213 8.851 1.213 14.451 0 27.715-9.569 31.773-24.172 7.069-25.444 10.653-51.85 10.653-78.483 0.001-78.164-30.437-151.65-85.708-206.919zM818.958 751.197l-140.7-87.165c-15.95-9.881-28.997-2.614-28.997 16.147v58.458h-331.6c-124.967 0-226.638-101.668-226.638-226.638 0-43.791 12.502-86.275 36.153-122.86 9.894-15.303 5.508-35.73-9.794-45.622-15.305-9.895-35.73-5.508-45.623 9.795-30.569 47.282-46.726 102.156-46.726 158.687 0 78.163 30.439 151.649 85.709 206.919 55.271 55.269 128.756 85.709 206.919 85.709h331.599v58.746c0 18.762 12.896 25.785 28.656 15.605l141.385-91.311c15.759-10.177 15.606-26.591-0.342-36.471z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-player" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M513.98 77.186c-239.613 0-433.882 194.255-433.882 433.882s194.255 433.882 433.882 433.882c239.613 0 433.882-194.255 433.882-433.882s-194.255-433.882-433.882-433.882zM513.98 886.271c-207.233 0-375.209-167.991-375.209-375.209s167.991-375.209 375.209-375.209c207.233 0 375.209 167.991 375.209 375.209s-167.991 375.209-375.209 375.209z"  ></path>'+
      ''+
      '<path d="M393.732 359.575c0-16.363 14.002-29.651 30.196-29.651 16.672 0 30.196 13.76 30.196 29.651v302.94c0 16.363-14.002 29.651-30.196 29.651-16.672 0-30.196-13.76-30.196-29.651v-302.94z"  ></path>'+
      ''+
      '<path d="M574.854 359.575c0-16.363 14.002-29.651 30.196-29.651 16.672 0 30.196 13.76 30.196 29.651v302.94c0 16.363-14.002 29.651-30.196 29.651-16.672 0-30.196-13.76-30.196-29.651v-302.94z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
