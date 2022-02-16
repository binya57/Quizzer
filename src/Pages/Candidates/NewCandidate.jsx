import { default as MuiAvatar } from "@mui/material/Avatar";
import { default as MuiButton } from "@mui/material/Button";
import { default as MuiCssBaseline } from "@mui/material/CssBaseline";
import { default as MuiTextField } from "@mui/material/TextField";
import { default as MuiFormControlLabel } from "@mui/material/FormControlLabel";
import { default as MuiCheckbox } from "@mui/material/Checkbox";
import { default as MuiBox } from "@mui/material/Box";
import { default as MuiLockOutlinedIcon } from "@mui/icons-material/LockOutlined";
import { default as MuiTypography } from "@mui/material/Typography";
import { default as MuiContainer } from "@mui/material/Container";
import { alpha, styled } from "@mui/material/styles";
import { MuiPerson } from "../../Components/Icons";
import { useState } from "react";
import { default as MuiFormGroup } from "@mui/material/FormGroup";
import Candidate from "../../models/Candidate";
let candidId = 0;

const NewCandidate = () => {
  const [formsValues, setFormsValues] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    formsValues[name] = value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormsValues({});

    const newCandidate = new Candidate({ ...formsValues, id: candidId++ });
    const currentCandidates = localStorage.getItem("candidates");
    if (!currentCandidates)
      localStorage.setItem("candidates", JSON.stringify([newCandidate]));
    else
      localStorage.setItem(
        "candidates",
        JSON.stringify([...JSON.parse(currentCandidates), newCandidate])
      );
  };

  return (
    <RectangleWrapper>
      <MuiBox
        sx={{
          display: "flex",
          alignItems: "center",
          width: "25%",
          justifyContent: "space-evenly",
          margin: "5% 0 1% 10%",
        }}
      >
        <MuiAvatar
          sx={{
            width: "5em",
            height: "5em",
          }}
        ></MuiAvatar>
        <MuiTypography variant="h6">Create a New Candidate</MuiTypography>
      </MuiBox>
      <MuiBox component="form" onSubmit={handleSubmit}>
        <MuiFormGroup sx={{ width: "20%", marginLeft: "20%" }}>
          <MuiTextField
            margin="normal"
            required={true}
            id="cand-fname"
            label="first name"
            name="fName"
            autoFocus
            value={formsValues.fName}
            onChange={handleChange}
          />
          <MuiTextField
            margin="normal"
            required={true}
            id="cand-fname"
            label="last name"
            name="lName"
            value={formsValues.lName}
            onChange={handleChange}
          />
          <MuiButton
            type="submit"
            variant="contained"
            sx={{ m: "5% auto", width: "50%" }}
          >
            Create
          </MuiButton>
        </MuiFormGroup>
      </MuiBox>
    </RectangleWrapper>
  );
};

const RectangleWrapper = styled(MuiBox, { component: "div" })(({ theme }) => ({
  width: "75%",
  height: "80%",
  border: "1px solid",
  margin: "2% 0 0 5%",
  position: "relative",
}));

export default NewCandidate;
