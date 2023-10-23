import { theme } from "@/theme";
import { Button } from "@mui/material";

type Props = {
  type?: "button" | "reset" | "submit";
  name?: string;
} & Record<string, any>;

const CustomButton = (props: Props) => {
  const { type, name, ...restProps } = props;
  return (
    <Button
      type={type ? type : "button"}
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        borderRadius: 1.5,
        p: 1.5,
        fontWeight: 500,
        lineHeight: 1.5,
        background: theme.palette.secondary.main + " !important",
        color: "#fff",
        "&.Mui-disabled": {
          color: "#666666",
          background: "#cccccc !important",
        },
      }}
      {...restProps}
    >
      {name}
    </Button>
  );
};

export default CustomButton;
