import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Nav from "components/nav";
import Home from "routes/Home";
import Weplers from "routes/Weplers";
import HirePlus from "routes/Hire/HirePlus";
import HirePlz from "routes/Hire/HirePlz";
import Review from "routes/Review";
import Education from "routes/Education";
import HireMember from "routes/Hire/HireMember";
import Signup from "routes/Signup";
import Signin from "routes/Signin";
import PlzSignup from "routes/SignUpDetail/Plz";
import PlusSignup from "routes/SignUpDetail/Plus";
import HirePlzList from "components/Bord/HirePlz/List";
import HirePlzWrite from "components/Bord/HirePlz/Write";
import HirePlzRead from "components/Bord/HirePlz/Read";
import SeoulMem from "components/Areas/Plus/Seoul/SeoulMem";
import SeoulDetail from "components/Areas/Plus/Seoul/SeoulDetail";
import GyeonggiMem from "components/Areas/Plus/Gyeonggi/GyenggiMem";
import IncheonMem from "components/Areas/Plus/Incheon/IncheonMem";
import ReviewViewPlz from "components/Reviews/Plz/view";
import ReviewViewPlus from "components/Reviews/Plus/view";
import PlusActivityapply from "components/MyPages/PlusMypage/PlusMypagelist/PlusActivityapply";
import PlusActivityend from "components/MyPages/PlusMypage/PlusMypagelist/PlusActivityend";
import PlusActivityprogress from "components/MyPages/PlusMypage/PlusMypagelist/PlusActivityprogress";
import PlusInfoactivity from "components/MyPages/PlusMypage/PlusMypagelist/PlusInfoactivity";
import PlusInfobasic from "components/MyPages/PlusMypage/PlusMypagelist/PlusInfobasic";
import Plusactivityhistory from "components/MyPages/PlusMypage/PlusMypagelist/Plusactivityhistory";
import PlzActivityapply from "components/MyPages/PlzMypage/PlzMypagelist/PlzActivityapply";
import PlzActivityend from "components/MyPages/PlzMypage/PlzMypagelist/PlzActivityend";
import PlzActivityprogress from "components/MyPages/PlzMypage/PlzMypagelist/PlzActivityprogress";
import PlzInfoactivity from "components/MyPages/PlzMypage/PlzMypagelist/PlzInfoactivity";
import PlzInfobasic from "components/MyPages/PlzMypage/PlzMypagelist/PlzInfobasic";
import Plzactivityhistory from "components/MyPages/PlzMypage/PlzMypagelist/Plzactivityhistory";

export default () => (
  <Router>
    <>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/weplers" exact component={Weplers} />
        <Route path="/hire" exact component={HireMember} />
        <Route path="/review" exact component={Review} />
        <Route path="/education" exact component={Education} />
        <Route path="/areaplus" exact component={HirePlus} />
        <Route path="/areaplz" exact component={HirePlz} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/plzlist" exact component={HirePlzList} />
        <Route path="/plzread" exact component={HirePlzRead} />
        <Route path="/plzwrite" exact component={HirePlzWrite} />
        <Route path="/reviewplzlist" exact component={ReviewViewPlz} />
        <Route path="/reviewpluslist" exact component={ReviewViewPlus} />
        <Route path="/signuplz" exact component={PlzSignup} />
        <Route path="/signuplus" exact component={PlusSignup} />
        {/* 플러스 회원 */}
        <Route path="/plusseoul" exact component={SeoulMem} />
        <Route path="/plusseoulde" exact component={SeoulDetail} />
        <Route path="/plusgyeong" exact component={GyeonggiMem} />
        <Route path="/plusinch" exact component={IncheonMem} />
        {/* 플리즈 회원 마이페이지 */}
        <Route path="/plzactivityapply" exact component={PlzActivityapply} />
        <Route path="/plzactivityend" exact component={PlzActivityend} />
        <Route
          path="/Plzactivityhistory"
          exact
          component={Plzactivityhistory}
        />

        <Route
          path="/plzactivityprogress"
          exact
          component={PlzActivityprogress}
        />
        <Route path="/plzinfoactivity" exact component={PlzInfoactivity} />
        <Route path="/plzinfobasic" exact component={PlzInfobasic} />
        {/* 플러스 회원 마이페이지 */}
        <Route path="/plusactivityapply" exact component={PlusActivityapply} />
        <Route path="/plusactivityend" exact component={PlusActivityend} />
        <Route
          path="/Plusactivityhistory"
          exact
          component={Plusactivityhistory}
        />
        <Route
          path="/plusactivityprogress"
          exact
          component={PlusActivityprogress}
        />
        <Route path="/plusinfoactivity" exact component={PlusInfoactivity} />
        <Route path="/plusinfobasic" exact component={PlusInfobasic} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
