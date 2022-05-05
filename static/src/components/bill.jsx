import { Container } from "react-bootstrap"

export const Bill =()=>{
    return <div>
        <br />
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
         <img src="data:image/jpeg;base64,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" alt="" />
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
               <div>Rep.Date/Time : 26-04-2022 01:16 pm</div>
     
           </div>
          </div>
{/* ----------------------------------------------------------------- */}
<hr />
{/* -----------------------actual report----------------------------- */}
<div className="title_2nd">WHOLE ABDOMEN</div>


<div className="report_result">
<div><strong>LIVER</strong> shows <i>mild enlargement (17.6cm) with</i> normal hepatic parenchymal echotexture.Intrahepatic biliary radicles, canaliculi,vascular structures appear normal in echopattern. No evidence of any SOL seen.</div>
<div><strong>GALL BLADDER</strong> is well visualized.No evidence of intraluminal Calculi seen.</div>

<div><strong>COMMON BILE DUCT</strong> Smooth in outline. Measures within normal limit(0.29cm). No evedience of intraductal Pathology seen. </div>
<div><strong>PORTAL VEIN</strong> measures within normal limit</div>
<div><strong>PANCREAS</strong> normal in echotexture and relarionship.<strong>Body</strong> measures 1.51cm approx</div>
<div><strong>SPLEEN</strong> shows normal parenchymal echotexture(8.88cm).No Cystic or solid mass lesion noted.</div>

<div><strong>STOMACH</strong> shows <i>Thickened antral folds with Rugeal coarsening.</i></div>
<div><strong>KIDNEYS</strong> normal in size,shape, position and echopattern.<strong>Right Kidney</strong> measures 9.55cm x 4.96cm appx.<strong>Left Kidney</strong>measures 9.57cm x 5.17cm appx. Cortico-medullary differentiation is well maintained,<i>showing a Tiny Crystal at its upper pole.</i>No evidence of any SOL seen. Perinephric areas are normal.</div>
<div><strong>URETERS</strong> show normal echoanatomy.No intraluminal Calculi noted.</div>
<div><strong>URINARY BLADDER</strong> is well visualized,<i>soft low-levl echoes (debris) seen in its dependent part.</i>No evidence of any Calculi or SOL seen</div>
<div><strong>PROSTATE</strong> shows normal echopattern with intact capsule.<strong>Prostatic Volume</strong> measures 10.8ml approx.</div>

{/* --------------------result of the report-------------------------- */}
<div><i><b><u>Impression :</u></b></i></div>
<div className="bottom_Result">
<ul className="dots">
    <li><b>Mild Hepatomegaly.</b></li>
    <li><b>Gastritis.</b></li>
    <li><b>Tiny Left Renal Concretion.</b></li>
    <li><b>Urinary Sludges.</b></li>
</ul>
{/* -----------------------------right sight last logo and slogan------------------------- */}
<div className="last_box">
    <img className="last_img" src="https://image3.mouthshut.com/images/imagesp/925591980s.jpg" alt="" />
   
   <div className="last_line"></div> <div className="slogan"><i>"Ultrasound scan & Imaging methods has technical limitations as well as inaccurarices inherent to human or mechanical error.It should always be viewed in this perspective.This report is not valid for medicoegal purpose."</i></div>
</div>
</div>

</div>
{/* ----------------------- */}

      </div>



{/* ---------------------------- */}

  </div>
        </Container>
    </div>
}