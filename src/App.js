import logo from './logo.svg';
import './App.css';

/* 생활코딩 4.컴포넌트 만들기 */
// 사용자 정의를 설정할 때 대문자로 활용할 것
function Header() {
  return <header>
    <h1><a href="">React</a></h1> {
    /* return으로 <header><h1><a href="">React</a></h1></header>가 들어가면 
    function app에서 <header></header>를 적어주면 설정했는 부분이 들어간다. */}
  </header>
}
/* 쉽게설명해서 function Header(){}부분에서 만들어서 function App()부분에서 
   결과물이 출력되게 찍어줬다고 생각하면 됨 */
  // 생산성을 극도로 끌어올리기 위한 하나의 방안
function App() {
  return (
    <div>
      <header></header>
      <header></header>
      <header></header>
      <nav>
        <ol>
          <li><a href="/read/1">html</a></li>
          <li><a href="/read/2">css</a></li>
          <li><a href="/read/3">js</a></li>
        </ol>
      </nav>
      <article>
        <h2>Welcome</h2>
        Hello, WEB
      </article>
    </div>
  );
}

export default App;

/* 생활코딩 5. props */ // React에서 속성을 prop이라고 부른다.
function Header1(props) {
  return <header>
    <h1><a href="/">WEB</a></h1>
  </header>
}
function Nav() {
  return <nav>
    <ol>
      <li><a href="/read/1">html</a></li>
      <li><a href="/read/2">css</a></li>
      <li><a href="/read/3">js</a></li>
    </ol>
  </nav>
}
function Article() {
  return <article>
    <h2>Welcome</h2>
    Hello, WEB
  </article>
}
function App() {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}