import React from "react";
import "./modal.scss";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import AccountCircle from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";

const Modal = () => {
  const [close, setClose] = React.useState(true);
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      {close && (
        <div className="modal">
          <div className="modal__content">
            <div className="modal__headerblock">
              <div className="modal__header">Авторизуйтесь</div>
              <CloseIcon
                onClick={() => setClose(!close)}
                className="closeIcon"
              ></CloseIcon>
            </div>
            <div className="select">
              <FormControl variant="standard" className="login">
                <InputLabel className="modal__textLogin" htmlFor="input-with-icon-adornment">
                  Введите логин
                </InputLabel>
                <Input
                  id="input-with-icon-adornment"
                  startAdornment={
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl sx={{ m: 1, width: "26ch" }} variant="standard">
                <InputLabel  className="modal__textPassword" htmlFor="standard-adornment-password">
                  Пароль
                </InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Button variant="contained" className="btn">
                Вход
              </Button>
              <div className="modal__regLink">Хотите зарегистрироваться?</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
