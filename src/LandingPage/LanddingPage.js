import Header from "./Header/Header";
import Body from "./Body/Body";
import Footer from "./Footer";
import "./Landdingpage.scss"
function LanddingPage() {
  
  return (
    <div>
       <Header></Header>
      <div className="container">
        <Body></Body>
        <Footer></Footer> 
      </div> 
      
    </div>
  );
}
export default LanddingPage;
