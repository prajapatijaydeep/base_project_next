import { theme } from "@/theme";
import { FormHelperText, InputBase, Stack } from "@mui/material";

const InputTextField = (props: any) => {
  const {
    id,
    name,
    type,
    placeholder,
    error,
    value,
    setValue,
    StartIcon,
    EndIcon,
    setVisibility,
    visibility,
    revert,
    ...restProps
  } = props;

  let defaultColor = "white";
  if (revert) {
    defaultColor = "black";
  }

  return (
    <>
      <Stack
        className={`flex flex-row gap-5 items-center w-full rounded-md border-0 py-2 px-2.5 bg-${defaultColor} bg-opacity-5`}
      >
        {StartIcon && <StartIcon className={`text-${defaultColor} text-lg`} />}
        <InputBase
          onChange={setValue}
          placeholder={placeholder ?? "Enter your text here"}
          sx={{
            flexGrow: 1,
            color: theme.palette.common.white,
            fontSize: "0.875rem",
            lineHeight: "1.5rem",
            letterSpacing: "0.04rem",
            input: {
              "&::placeholder": {
                opacity: 1,
                letterSpacing: "0.04rem",
                color: theme.palette.grey[400],
              },
            },
          }}
          {...restProps}
        />
        {EndIcon && (
          <EndIcon
            onClick={() => setVisibility(!visibility)}
            className={`text-${defaultColor} text-lg cursor-pointer`}
          />
        )}
      </Stack>
      {error && (
        <FormHelperText error focused>
          {error}
        </FormHelperText>
      )}
    </>
  );
};

export default InputTextField;
