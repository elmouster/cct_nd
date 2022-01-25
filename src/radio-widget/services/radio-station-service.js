export const fetchStations = (params) => {
    return new Promise((resolve) => {
        return resolve([
            {
                title: "labas rytas",
                wave: 66.6,
                pictureUrl: "D.png"
            },
            {
                title: "laba diena",
                wave: 99.9,
                pictureUrl: "R.png"
            },
            {
                title: "laba vakara",
                wave: 101.1,
                pictureUrl: "V.png"
            },
            {
                title: "labanakt",
                wave: 112.9,
                pictureUrl: "L.png"
            }
        ])
    })
  };    
  