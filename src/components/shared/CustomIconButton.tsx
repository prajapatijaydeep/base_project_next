import { Button, IconButton, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

type Props = {
  handleEvent?: () => void;
  Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  style?: string;
} & Record<string, any>;

const CustomButton = (props: Props) => {
  const { handleEvent, Icon, style, ...restProps } = props;
  return (
    <IconButton
      onClick={handleEvent ? handleEvent : undefined}
      className={`px-3 bg-white rounded-md ${style}`}
      {...restProps}
    >
      {Icon && <Icon className="text-black text-2xl" />}
    </IconButton>
  );
};

export default CustomButton;
