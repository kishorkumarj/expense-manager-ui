import { Divider as AndtDivider } from "antd";

const Divider = ({
  marginTop,
  marginBottom
}:{
  marginTop?: number,
  marginBottom?: number
}) => {

  const style: any = {
    marginTop: `${marginTop? marginTop : 0}px`,
    marginBottom: `${marginBottom? marginBottom : 0}px`,
  };

  console.log(style)
  return <AndtDivider style={style}/>
}

export default Divider;