let str = "IED123456";
const systemInfo = {
  type: "IEC104",
  version: "GridStandard",
  connected: false,
  registered: false,
};
const protocol = [
  {
    id: 1,
    name: "IEC104",
    access_version: "GridStandard",
    access_params: [
      {
        desc: "IP地址",
        param_key: "IP",
        type: "string",
      },
      {
        desc: "端口",
        param_key: "Port",
        type: "int",
      },
      {
        desc: "公共地址",
        param_key: "Coa",
        type: "int",
      },
      {
        desc: "公共地址字节数",
        param_key: "CoaSize",
        type: "int",
      },
      {
        desc: "传送原因字节数",
        param_key: "CauseSize",
        type: "int",
      },
      {
        desc: "点号地址字节数",
        param_key: "IoaSize",
        type: "int",
      },
    ],
    mapper_params: [
      {
        desc: "点号地址",
        param_key: "Ioa",
        type: "int",
      },
    ],
    topology_extensible: false,
    biz_url: "localhost:50053",
    as_url: "0.0.0.0:50060",
  },
  {
    id: 2,
    name: "ModbusRTU",
    access_version: "Standard",
    access_params: [
      {
        desc: "串口名",
        param_key: "Port",
        type: "string",
      },
      {
        desc: "波特率",
        param_key: "BaudRate",
        type: "int",
      },
      {
        desc: "数据位",
        param_key: "DataBit",
        type: "int",
      },
      {
        desc: "奇偶校验",
        param_key: "Parity",
        type: "string",
      },
      {
        desc: "停止位",
        param_key: "StopBit",
        type: "int",
      },
      {
        desc: "字节端序",
        param_key: "Endian",
        type: "int",
      },
    ],
    mapper_params: [
      {
        desc: "从站地址",
        param_key: "SlaveID",
        type: "int",
      },
      {
        desc: "功能码",
        param_key: "FuncCode",
        type: "int",
      },
      {
        desc: "寄存器起始地址",
        param_key: "StartAddr",
        type: "int",
      },
      {
        desc: "寄存器数量",
        param_key: "RegNum",
        type: "int",
      },
      {
        desc: "DO寄存器地址",
        param_key: "StartReg",
        type: "int",
      },
      {
        desc: "DO寄存器数量",
        param_key: "RegCnt",
        type: "int",
      },
    ],
    topology_extensible: false,
    biz_url: "localhost:50080",
    as_url: "0.0.0.0:50061",
  },
  {
    id: 5,
    name: "IEC61850",
    access_version: "GridStandard",
    access_params: [
      {
        desc: "IED名称",
        param_key: "ArName",
        type: "string",
      },
      {
        desc: "IP地址",
        param_key: "IP",
        type: "string",
      },
      {
        desc: "端口",
        param_key: "Port",
        type: "int",
      },
    ],
    mapper_params: [
      {
        desc: "逻辑设备",
        param_key: "LdName",
        type: "string",
      },
      {
        desc: "逻辑节点",
        param_key: "LnInst",
        type: "string",
      },
      {
        desc: "数据对象",
        param_key: "DO",
        type: "string",
      },
    ],
    topology_extensible: false,
    biz_url: "localhost:55391",
    as_url: "0.0.0.0:50062",
  },
];
const _protocol = protocol.filter((i) => {
    // console.log(i)
  return i.name == systemInfo.type && i.access_version == systemInfo.version;
});
console.log(_protocol);
