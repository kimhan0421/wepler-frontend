import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { createMuiTheme, withStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#C9AA79",
    },
    secondary: {
      main: "#F2D4CA",
    },
  },
});

const Big = styled.div`
  padding-left: 25%;
  padding-right: 25%;
`;

const TextTitle = styled.div`
  padding-top: 10px;
  font-weight: bold;
  font-size: 25px;
`;

const ActivityDisplay = styled.div`
  display: flex;
  margin: 30px;
  line-height: 1.5;
  input {
    width: 10%;
  }
`;

const ActivityBox = styled.div`
  padding: 5px 5px;
  border-radius: 5px;
  border: 2px solid #c9aa79;
  background-color: #ffffff;
  color: #404a41;
  margin-right: 20px;
  display: flex;
  &:hover {
    background-color: #f2d4ca;
  }
`;

const TextQuestion = styled.div`
  padding-top: 30px;
  font-size: 20px;
  font-weight: bold;
`;

const TextDisplayWhen = styled.div`
  display: flex;
  font-size: 20px;
  line-height: 1.5;
  label {
    padding-right: 20px;
  }
`;

const TextDisplay = styled.div`
  margin-bottom: 30px;
  display: flex;
  font-size: 20px;
  line-height: 1.5;
  label {
    padding-right: 20px;
  }
`;

const styles = {
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
};

const PlzPresenter = ({
  handleWhenRadio,
  handleBelongRadio,
  handleChange,
  handelinfoChange,
  handleActivity,
  postBoard,
  classes,
  plz_name,
  plz_email,
  plz_password,
  plz_phonenumber,
  plz_address_big,
  plz_address_small,
  plz_when_learn,
  plz_belong,
  plz_fields,
}) => (
  <>
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <TextTitle>Plz(플리즈) - 회원가입</TextTitle>
      </div>
    </Container>
    <Big>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="md">
          <div className={classes.paper}>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextQuestion>이름</TextQuestion>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextQuestion>이메일</TextQuestion>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="plz_name"
                    label="이름"
                    name="plz_name"
                    autoComplete="plz_name"
                    onChange={handelinfoChange}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="plz_email"
                    label="이메일 주소"
                    name="plz_email"
                    autoComplete="plz_email"
                    onChange={handelinfoChange}
                  />
                </Grid>
                <Grid item xs={10}>
                  <TextQuestion>비밀번호</TextQuestion>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="plz_password"
                    label="비밀번호"
                    type="plz_password"
                    id="plz_password"
                    autoComplete="current-password"
                    onChange={handelinfoChange}
                  />
                </Grid>

                <Grid item xs={10}>
                  <TextQuestion>전화번호</TextQuestion>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="plz_number"
                    label="전화번호"
                    name="plz_number"
                    autoComplete="plz_number"
                    onChange={handelinfoChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextQuestion>주소</TextQuestion>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <select
                    name="plus_address_big"
                    defaultValue="지역을 선택하세요"
                    onChange={handelinfoChange}
                  >
                    <option disabled>지역을 선택하세요</option>
                    <option value="seoul">서울</option>
                    <option value="gyeonggi">경기도</option>
                  </select>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <TextField
                    required
                    fullWidth
                    id="plz_address_small"
                    label="나머지 주소"
                    name="plz_address_small"
                    autoComplete="plz_address_small"
                    onChange={handelinfoChange}
                  />
                </Grid>
              </Grid>
              <Grid>
                <TextQuestion>원하는 재능 나눔 분야</TextQuestion>
                <ActivityDisplay>
                  <ActivityBox>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="education"
                          onChange={handleActivity}
                          value={plz_fields.education}
                          color="primary"
                        />
                      }
                      label="교육"
                    />
                  </ActivityBox>
                  <ActivityBox>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="council"
                          onChange={handleActivity}
                          value={plz_fields.council}
                          color="primary"
                        />
                      }
                      label="상담"
                    />
                  </ActivityBox>
                  <ActivityBox>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="making"
                          onChange={handleActivity}
                          value={plz_fields.making}
                          color="primary"
                        />
                      }
                      label="메이킹"
                    />
                  </ActivityBox>
                  <ActivityBox>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="activity"
                          onChange={handleActivity}
                          value={plz_fields.activity}
                          color="primary"
                        />
                      }
                      label="야외활동"
                    />
                  </ActivityBox>
                  <ActivityBox>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="culture"
                          onChange={handleActivity}
                          value={plz_fields.culture}
                          color="primary"
                        />
                      }
                      label="문화"
                    />
                  </ActivityBox>
                </ActivityDisplay>
                <ActivityDisplay>
                  <ActivityBox>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="trip"
                          onChange={handleActivity}
                          value={plz_fields.trip}
                          color="primary"
                        />
                      }
                      label="여행"
                    />
                  </ActivityBox>
                  <ActivityBox>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="etc"
                          onChange={handleActivity}
                          value={plz_fields.etc}
                          color="primary"
                        />
                      }
                      label="기타"
                    />
                  </ActivityBox>
                </ActivityDisplay>
              </Grid>

              <TextQuestion>언제 배우고 싶으신가요?</TextQuestion>
              <TextDisplayWhen>
                <label>
                  <input
                    type="radio"
                    name="when_learn"
                    value="regularly"
                    checked={["regularly"]}
                    onChange={handleWhenRadio}
                  />
                  정기적으로 배우고 싶어요
                </label>
              </TextDisplayWhen>
              <TextDisplayWhen>
                <label>
                  <input
                    type="radio"
                    name="when_learn"
                    value="specific"
                    checked={["specific"]}
                    onChange={handleWhenRadio}
                  />
                  특정한 날에만 배우고 싶어요
                </label>
              </TextDisplayWhen>
              <TextDisplayWhen>
                <label>
                  <input
                    type="radio"
                    name="when_learn"
                    value="thinking"
                    checked={["thinking"]}
                    onChange={handleWhenRadio}
                  />
                  생각중이에요
                </label>
              </TextDisplayWhen>
              <TextQuestion>개인 혹은 단체 이신가요?</TextQuestion>

              <TextDisplay>
                <label>
                  <input
                    type="radio"
                    name="belong"
                    value="individual"
                    checked={["individual"]}
                    onChange={handleBelongRadio}
                  />
                  개인
                </label>
                <label>
                  <input
                    type="radio"
                    name="belong"
                    value="group"
                    checked={["group"]}
                    onChange={handleBelongRadio}
                  />
                  단체
                </label>
              </TextDisplay>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
              >
                회원가입
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="/Signin" variant="body2">
                    이미 계정이 있으신가요?
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={5} />
        </Container>
      </ThemeProvider>
    </Big>
  </>
);

export default withStyles(styles)(PlzPresenter);
