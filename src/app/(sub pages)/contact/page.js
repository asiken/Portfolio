import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Form from "@/components/contact/Form";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's contact page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
           MICHAEL OLUNGA FOUNDATION
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
          <p>Introduction:</p>
         
The Michael Olunga Foundation (MOF) stands as a beacon of hope and opportunity for the youth of Kenya. Spearheaded by the renowned footballer Michael Olunga, this foundation is not just about nurturing football talent but also about instilling values, providing education, and creating pathways for success.
          </p>
        </div>
      </article>



      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
           
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
          <p>Football Development:</p>
One of the cornerstones of MOF is its commitment to football development. The MOF U-17 team's participation in prestigious international tournaments like the Gothia Cup in Sweden showcases not only the talent nurtured but also the opportunities created for young footballers. By partnering with esteemed institutions like the Swedish Football League Association, MOF ensures exposure to high-quality competition, enabling youth players to grow and excel on a global stage.
          </p>
        </div>
      </article>
    
      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
           
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
         <p>Academic Partnership:</p> 
MOF understands the importance of holistic development. Through strategic collaborations with schools such as Agoro Sare, St. Mary's School Yala, and Kisumu Day, MOF integrates academic excellence with sports mentoring. These partnerships not only provide educational scholarships but also offer a nurturing environment where young talents can thrive both academically and athletically.
          </p>
        </div>
      </article>
    
    
      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
          
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
          <p>Foundation's Vision:</p>
At its core, the Michael Olunga Foundation envisions a future where every Kenyan youth has the opportunity to explore their talents and achieve greatness. Through its thematic approach encompassing football, social engagement, wellness, and education, MOF aims to uplift communities and change narratives. The foundation's patron, Michael Olunga, believes in the transformative power of sports and education, envisioning a Kenya where talent is nurtured and communities thrive.
          </p>
        </div>
      </article>
    
      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
           
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
         <p>Scholarship Program:</p> 
Recognizing education as a fundamental right and a key driver of economic growth, the foundation established a scholarship program to support needy students. By providing financial aid alongside mentorship opportunities, MOF ensures that education remains accessible to all, regardless of socioeconomic background. The success of the scholarship fund in 2019 underscores the foundation's commitment to creating a brighter future for Kenya's youth.
          </p>
        </div>
      </article>
    
    
      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
          <p>Focus on Infrastructure and Co-curricular Activities:</p>
Beyond scholarships, MOF acknowledges the challenges faced by the education system, including poor infrastructure and limited access to co-curricular activities. With a focus on bridging these gaps, the foundation plans to invest in infrastructure development and promote holistic education through arts and sports. By nurturing well-rounded individuals, MOF aims to empower the next generation of leaders and changemakers.
          </p>
        </div>
      </article>
   
   
      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
          <p>Conclusion:</p>
In a nation where talent abounds but opportunities are scarce, the Michael Olunga Foundation stands as a beacon of hope, inspiring youth to dream big and reach for the stars. Through its multifaceted approach to football development, academic partnership, and community engagement, MOF is not just shaping the future of football but also transforming lives and building a brighter tomorrow for Kenya.
          </p>
        </div>
      </article>
   
   
   
   
   
   
   
   
    </>
  );
}
