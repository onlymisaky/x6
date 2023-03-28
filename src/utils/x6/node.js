const ports = {
  groups: {
    top: {
      position: 'top',
      attrs: {
        circle: {
          r: 4,
          magnet: true,
          stroke: '#5F95FF',
          strokeWidth: 1,
          fill: '#fff',
          style: {
            visibility: 'hidden',
          },
        },
      },
    },
    right: {
      position: 'right',
      attrs: {
        circle: {
          r: 4,
          magnet: true,
          stroke: '#5F95FF',
          strokeWidth: 1,
          fill: '#fff',
          style: {
            visibility: 'hidden',
          },
        },
      },
    },
    bottom: {
      position: 'bottom',
      attrs: {
        circle: {
          r: 4,
          magnet: true,
          stroke: '#5F95FF',
          strokeWidth: 1,
          fill: '#fff',
          style: {
            visibility: 'hidden',
          },
        },
      },
    },
    left: {
      position: 'left',
      attrs: {
        circle: {
          r: 4,
          magnet: true,
          stroke: '#5F95FF',
          strokeWidth: 1,
          fill: '#fff',
          style: {
            visibility: 'hidden',
          },
        },
      },
    },
  },
  items: [
    {
      group: 'top',
    },
    {
      group: 'right',
    },
    {
      group: 'bottom',
    },
    {
      group: 'left',
    },
  ],
};

/** *** */

const rect = {
  inherit: 'rect',
  width: 66,
  height: 36,
  attrs: {
    body: {
      strokeWidth: 1,
      stroke: '#5F95FF',
      fill: '#EFF4FF',
    },
    text: {
      fontSize: 12,
      fill: '#262626',
    },
  },
  ports: { ...ports },
};

const polygon = {
  inherit: 'polygon',
  width: 66,
  height: 36,
  attrs: {
    body: {
      strokeWidth: 1,
      stroke: '#5F95FF',
      fill: '#EFF4FF',
    },
    text: {
      fontSize: 12,
      fill: '#262626',
    },
  },
  ports: {
    ...ports,
    items: [
      {
        group: 'top',
      },
      {
        group: 'bottom',
      },
    ],
  },
};

const circle = {
  inherit: 'circle',
  width: 45,
  height: 45,
  attrs: {
    body: {
      strokeWidth: 1,
      stroke: '#5F95FF',
      fill: '#EFF4FF',
    },
    text: {
      fontSize: 12,
      fill: '#262626',
    },
  },
  ports: { ...ports },
};

/** *** */

const start = {
  shape: 'custom-rect',
  // label: '开始',
  label: 'WEB',
  attrs: {
    body: {
      rx: 20,
      ry: 26,
    },
  },
};

const process = {
  shape: 'custom-rect',
  // label: '过程',
  label: 'SOURCE',
};

const optionalProcess = {
  shape: 'custom-rect',
  attrs: {
    body: {
      rx: 6,
      ry: 6,
    },
  },
  // label: '可选过程',
  label: 'LOCAL',
};

// eslint-disable-next-line no-unused-vars
const policy = {
  shape: 'custom-polygon',
  attrs: {
    body: {
      refPoints: '0,10 10,0 20,10 10,20',
    },
  },
  label: '决策',
};

// eslint-disable-next-line no-unused-vars
const data = {
  shape: 'custom-polygon',
  attrs: {
    body: {
      refPoints: '10,0 40,0 30,20 0,20',
    },
  },
  label: '数据',
};

// eslint-disable-next-line no-unused-vars
const connect = {
  shape: 'custom-circle',
  label: '连接',
};

export const registerNodes = {
  'custom-rect': rect,
  'custom-polygon': polygon,
  'custom-circle': circle,
};

export const createNodes = [
  start,
  process,
  optionalProcess,
  // policy,
  // data,
  // connect,
];
