'use client'
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import { Tooltip } from "@radix-ui/themes";

const ToolTip = ({toolTipText,className}:{toolTipText:string,className?:string}) => {
  return (
    <Tooltip content={toolTipText} className={`${className} capitalize`} style={{backgroundColor:"#60a5fa",border:"1px solid #60a5ff",fontWeight:"bold"}}>
        <QuestionMarkCircledIcon/>
    </Tooltip>
  );
};

export default ToolTip;
