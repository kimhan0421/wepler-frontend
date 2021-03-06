import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Container from "@material-ui/core/Container";
import {Container2,
  Container3,
  Button,
  Line,
  TitleWrap,
  TextDisplay,
  TextDisplay2,
  TextWrap,
  TextWrapNeed,
  TextWrapterm,
  DisplayLine,
  ActivityDisplay 
} from "../HirePlz/WirteStyled"

class Write extends Component {
   state = {
        title: "",
        recruit: "",
        need_member: "",
        start_date: "",
        end_date: "",
        content: "",
        fields: [],
    };
    postBoard = async () => {
      const post = await axios.post("http://localhost:8000/hire_post",{
        title: this.state.title, 
        recruit:this.state.recruit, 
        need_member:this.state.need_member, 
        start_date:this.state.start_date, 
        end_date:this.state.end_date, 
        content:this.state.content, 
        fields:this.state.fields
      });
      
      alert("전송");
      this.setState({
        title: "",
        recruit: "",
        need_member: "",
        start_date: "",
        end_date: "",
        content: "",
        fields: [],
      });
      console.log(post);
    };
    constructor(props) {
      super(props)
      this.handleActivityCheck = this.handleActivityCheck.bind(this)
      this.state = {
          ...this.state,
      }
  }
    handleChange = (e) => {
      const { name} = e.target;
      if(name === 'title'){
        this.setState({
          title : e.target.value,        
        });
      }
      if( name === 'recruit' ){
        this.setState({       
          recruit : e.target.value,
          
        });
      }
      if( name === 'need_member'){
        this.setState({        
          need_member : e.target.value,
          
        });
      }
      if( name === 'start_date'){
        this.setState({        
          start_date : e.target.value,       
        });
      }
      if(name === 'end_date'){
        this.setState({        
          end_date : e.target.value,        
        });
      }
      if(name === 'content'){
        this.setState({       
          content : e.target.value,
        });
      }
           
    };
  
    handleActivityCheck(e) {
      const { name } = e.target;

      // 배열에 값이 있으면
      if (this.state.fields.findIndex((i) => i === name) !== -1) {
          const newHash = this.state.fields.filter((value) => value !== name);
          this.setState({
              ...this.state,
              fields: newHash,
          });
      }
      // 배열에 값이 없으면
      else {
          this.setState({
              ...this.state,
              fields: [...this.state.fields, name],
          });
      }
  }

  render() {
    return (
      <>
        {console.log(this.state)}
        <Container component="main" maxWidth="md">
          <Container2>
            <h2>고용 글 작성하기</h2>
          </Container2>

          <TitleWrap>
            <input
              type="text"
              name="title"
              placeholder="제목을 입력하세요"
              onChange={this.handleChange}
              value={this.state.title}
            />
          </TitleWrap>
          <Container3>
            <TextDisplay>
              <TextDisplay2>
                <div>모집마감일</div>
              </TextDisplay2>
              <input
                type="date"
                name="recruit"
                onChange={this.handleChange}
                value={this.state.recruit}
              />
            </TextDisplay>
            <Line>
              <br />
            </Line>
            <TextDisplay>
              <div>필요인원</div>
              <TextWrapNeed>
                <input
                  type="number"
                  name="need_member"
                  placeholder="ex) 5"
                  onChange={this.handleChange}
                  value={this.state.need_member}
                />
                명
              </TextWrapNeed>
            </TextDisplay>
            <Line>
              <br />
            </Line>
            <div>시작기간 및 종료기간</div>
            <TextWrapterm>
              <TextDisplay>
                <TextDisplay2>시작기간 :</TextDisplay2>
                <input
                  type="date"
                  name="start_date"
                  onChange={this.handleChange}
                  value={this.state.start_date}
                />
                <TextDisplay2>~ 종료기간:</TextDisplay2>
                <input
                  type="date"
                  name="end_date"
                  onChange={this.handleChange}
                  value={this.state.end_date}
                />
              </TextDisplay>
            </TextWrapterm>
            <Line>
              <br />
            </Line>
            
            <div>분야</div> <br />
                <ActivityDisplay>
                    <input
                        type="checkbox"
                        name="education"
                        onChange={this.handleActivityCheck}
                        value={this.state.fields.education}
                    />
                    <div>교육</div>
                    <DisplayLine />
                    <input
                        type="checkbox"
                        name="council"
                        onChange={this.handleActivityCheck}
                        value={this.state.fields.council}
                    />
                    <div>상담</div>
                    <DisplayLine />
                    <input
                        type="checkbox"
                        name="making"
                        onChange={this.handleActivityCheck}
                        value={this.state.fields.making}
                    />
                    <div>메이킹</div>
                    <DisplayLine />
                    <input
                        type="checkbox"
                        name="activity"
                        onChange={this.handleActivityCheck}
                        value={this.state.fields.activity}
                    />
                    <div>야외활동</div>
                </ActivityDisplay>
                <ActivityDisplay>
                    <input
                        type="checkbox"
                        name="culture"
                        onChange={this.handleActivityCheck}
                        value={this.state.fields.culture}
                    />
                    <div>문화</div>
                    <DisplayLine />
                    <input
                        type="checkbox"
                        name="trip"
                        onChange={this.handleActivityCheck}
                        value={this.state.fields.trip}
                    />
                    <div>여행</div>
                    <DisplayLine />
                    <input
                        type="checkbox"
                        name="etc"
                        onChange={this.handleActivityCheck}
                        value={this.state.fields.etc}
                    />
                    <div>기타</div>
                </ActivityDisplay>
                <Line>
                    <br />
                </Line>
            
            <Line>
              <br />
            </Line>
            <div>내용</div>
            <br />
            <TextWrap>
              <textarea
                type="text"
                name="content"
                placeholder="내용을 입력하세요."
                onChange={this.handleChange}
                value={this.state.content}
              />
            </TextWrap>
            <Button>
              <button onClick={this.postBoard}>전송하기 </button>
              <Link to="/plzlist">목록</Link>
            </Button>
          </Container3>
        </Container>
      </>
    );
  }
}

export default Write;
