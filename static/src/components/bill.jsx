import { Container } from "react-bootstrap"

export const Bill =()=>{
    return <div>
        <Container className="container_full">
        {/* ---------------------top div------------------------- */}
        <div className="top_part">
  
    <img  className="logo" src="https://static.ambitionbox.com/alpha/company/photos/logos/st-johns-medical-college-hospital.jpg"/>
    <div className="address">
        <p >St. John’s National Academy of Health Sciences,
Sarjapur Road, Bangalore - 560034,
Karnataka, India.
Tel : +91 080 22065000 / 5001,</p>
    </div>
   
        </div>


{/* ----------------------red line------------------------------------ */}
        <div className="red_line"></div>

{/* ----------------------------------------------------------------- */}

{/* ------------------------sonography title------------------------------------------ */}
<div className="title">SONOGRAPHY REPORT</div>
  <div className="body_part">

      <div className="left_part">
          <img src="https://assets.cureus.com/uploads/figure/file/60674/lightbox_40a30b60566a11e9859dbd01dfadac61-Image-1b--A-line.png" alt="" />
          <img src="https://post.healthline.com/wp-content/uploads/2019/10/pregnancy-checkups-tests_thumb.jpg" alt="" />
          <img src="https://i.ytimg.com/vi/hSrLrXHWTrg/maxresdefault.jpg" alt="" />
          <img src="https://ars.els-cdn.com/content/image/1-s2.0-S1751722218301392-gr7.jpg" alt="" />
          <img src="https://stjohns.co.in/wp-content/uploads/2016/04/DSC_0468-400x400.jpg" alt="" />
         
      </div>
      <div className="right_part">
          {/* ---------------------top part---------------------- */}
          <div className="name_info">
           <div className="name_left">
               <div>Patient Name : Mr. Reyya Harish</div>
               
               <div>Age/Sex : 25-Y / Male</div>
                <div>Consultant : Dr. Sandhya S</div>
           </div>

           <div className="name_right">
           <div>SL No. : 28</div>
           <div>Regn.Date : 26-04-2022</div>
               <div>Rep.Date/Time : 26-04-2022 01:16</div>
     
           </div>
          </div>
{/* ----------------------------------------------------------------- */}
<hr />
{/* -----------------------actual report----------------------------- */}
<div className="title_2nd">WHOLE ABDOMEN</div>


<div className="report_result">
<div><strong>LIVER</strong> shows mild enlargement (17.6cm) with normal hepatic parenchymal echotexture.Intrahepatic biliary radicles, canaliculi,vascular structures appear normal in echopattern. No evidence of any SOL seen.</div>
<div><strong>GALL BLADDER</strong>is well visualized.No evidence of intraluminal Calculi seen.</div>
<div><strong>COMMON BILE DUCT</strong></div>
<div><strong>PORTAL VEIN</strong></div>
<div><strong>PANCREAS</strong></div>
<div><strong>SPLEEN</strong></div>
<div><strong>STOMACH</strong></div>
<div><strong>KIDNEYS</strong></div>
<div><strong>URETERS</strong></div>
<div><strong>URINARY BLADDER</strong></div>
<div><strong>PROSTATE</strong></div>





</div>


      </div>





  </div>
        </Container>
    </div>
}