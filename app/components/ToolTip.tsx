'use client'
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import { Tooltip } from "@radix-ui/themes";

const ToolTip = ({toolTipText}:{toolTipText:string}) => {
  return (
    <Tooltip content={toolTipText} className="capitalize" style={{backgroundColor:"#60a5fa",border:"1px solid #60a5ff",fontWeight:"bold"}}>
        <QuestionMarkCircledIcon/>
    </Tooltip>
  );
};

export default ToolTip;
