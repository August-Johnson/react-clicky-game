(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,image:"images/card-image-R.png"},{id:2,image:"images/card-image-W.png"},{id:3,image:"images/card-image-B.png"},{id:4,image:"images/card-image-Y.jpg"},{id:5,image:"images/card-image-J.png"},{id:6,image:"images/card-image-N.png"},{id:7,image:"images/card-image-P.jpg"},{id:8,image:"images/card-image-R2.jpg"},{id:9,image:"images/card-image-C.png"},{id:10,image:"images/card-image-N2.png"},{id:11,image:"images/card-image-E.jpg"},{id:12,image:"images/card-image-M.jpg"}]},,,function(e,a,t){e.exports=t(19)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(8),s=t.n(c),i=(t(15),t(1)),o=t(2),l=t(4),m=t(3),d=t(5);t(16);var g=function(e){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark text-white fixed-top"},r.a.createElement("div",{className:"col-0 col-sm-0 col-md-1 col-lg-1 col-xl-1"}),r.a.createElement("div",{className:"col-3 col-sm-3"},r.a.createElement("h1",null,"Clicky Game")),r.a.createElement("div",{className:"col-4 col-sm-3"},r.a.createElement("h2",{style:{color:e.messageColor}},e.message)),r.a.createElement("div",{className:"col-4 col-sm-5"},r.a.createElement("h3",{className:"score-display"},"Score:",e.score," | Highscore: ",r.a.createElement("span",{className:e.highscore>0?"highscore-display":""},e.highscore))))};t(17);var u=function(){return r.a.createElement("div",{className:"clicky-game-header"},r.a.createElement("h2",null,"Clicky Game!"),r.a.createElement("p",null,"Click on an image to earn points, but don't click on any more than once!"))};var h=function(e){return r.a.createElement("div",{className:"container"},e.children)};var p=function(e){return r.a.createElement("div",{className:"row"},e.children)},f=(t(18),function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(l.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={clicked:!1},t.handleClick=function(){t.state.clicked?(t.props.handleLoseCondition(),t.resetCardState(t.props.cardArr)):(t.props.handleCorrectGuess(),t.setState({clicked:!0})),t.props.shuffleCards()},t.resetCardState=function(e){e.forEach(function(){return t.setState({clicked:!1})})},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-4 col-sm-3 col-md-3 col-lg-3 col-xl-3"},r.a.createElement("div",{className:"card",id:"card-".concat(this.props.id),style:{backgroundImage:"url(".concat(this.props.image,")")},onClick:this.handleClick}))}}]),a}(n.Component)),C=t(6),v=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(l.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={gameCards:C,tempCardArrangement:[],message:"Click an image to begin!",messageColor:"#FFFFFF",score:0,highscore:0},t.shuffleCards=function(){for(var e,a,n=t.state.gameCards,r=n.length;r>0;)a=Math.floor(Math.random()*r),e=n[r-=1],n[r]=n[a],n[a]=e;t.setState({tempCardArrangement:n})},t.handleLoseCondition=function(){t.setState({score:0,message:"You Guessed Incorrectly!",messageColor:"#FF0000"})},t.handleCorrectGuess=function(){t.setState({score:t.state.score+1,message:"You Guessed Correctly!",messageColor:"#32CD32"})},t.handleWinCondition=function(){return 12===t.state.score?t.setState({message:"You Win! Click an image to play again!",messageColor:"#FFFFFF",score:0}):""},t.highscoreCheck=function(){return t.state.score>t.state.highscore&&t.setState({highscore:t.state.score})},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){this.shuffleCards(),console.log(C)}},{key:"componentDidUpdate",value:function(){this.highscoreCheck(),this.handleWinCondition()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(g,{message:this.state.message,messageColor:this.state.messageColor,score:this.state.score,highscore:this.state.highscore}),r.a.createElement(u,null),r.a.createElement(h,null,r.a.createElement(p,null,this.state.tempCardArrangement.map(function(a){return r.a.createElement(f,{key:a.id,id:a.id,image:a.image,cardArr:e.state.gameCards,shuffleCards:e.shuffleCards,handleLoseCondition:e.handleLoseCondition,handleCorrectGuess:e.handleCorrectGuess})}))))}}]),a}(n.Component);var E=function(){return r.a.createElement(v,null)};s.a.render(r.a.createElement(E,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.d296ebc2.chunk.js.map