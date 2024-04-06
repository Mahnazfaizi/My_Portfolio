import React from 'react';
import './skill.css';
import {CircularProgressbar,buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ProgressBar from '@ramonak/react-progress-bar';
import { useTranslation } from 'react-i18next';



const data = [
    {
      id : 1,
      tooltip:'100%',
      title :'HTML',
      percentage:'100'
     
    
    },
  
    {
      id : 2,
      tooltip:'95%',
      title :'CSS',
      percentage:'95'

    
    },
    {
      id : 3,
      tooltip:'90%',
      title :'Bootstrap',
      percentage:'90'
    
    
    },
    {
      id : 4,
      tooltip:'80%',
      title :'Javascript',
      percentage:'80'
     
    
    },
    {
      id : 5,
      tooltip:'75%',
      title :'React JS',
      percentage:'75'
   
    
    },
    {
      id : 6,
      tooltip:'45%',
      title :'Angular JS',
      percentage:'45'
   
    
    },

  ]

  const data1 = [
    {
      id : 1,
      tooltip:'65%',
      title :'PHP',
     percentage:'65'
     
    
    },
  
    {
      id : 2,
      tooltip:'60%',
      title :'MySQL',
      percentage:'60'
    
    },
    {
      id : 3,
      tooltip:'75%',
      title :'Java',
      percentage:'75'
    
    },
    {
      id : 4,
      tooltip:'60%',
      title :'SpringBoot',
      percentage:'60'
     
    
    },
    {
      id : 5,
      tooltip:'45%',
      title :'Django',
      percentage:'45'
   
    
    },
    {
      id : 6,
      tooltip:'40%',
      title :'Laravel',
      percentage:'40'
   
    
    },

  ]

const Skill=()=>{
  const {t} = useTranslation();
    return(

        <section id="skills">
             <h5>{t("skills")}</h5>
            <h2>{t("my_skills")}</h2>
            <div className="container skill__container">
            <div className="skill__frontend">
                    <h3>{t("front_end")}</h3>
            {
              data.map(({id , tooltip, title,percentage})=>{
                return(
                    
                    <div  key={id} className="skill__box ">
              <span className="tooltip">{tooltip}</span>
                <span className="title">{title}</span>
              
                        <ProgressBar bgColor={'#12f7ff'}  completed={percentage} animateOnRender={true}  height={8} isLabelVisible={false}/>
                        </div>
                )
              })
            }
             </div>
          
                <div className="skill__backend">
                <h3>{t("back_end")}</h3>
                <div className='skill__cir'>
                {
              data1.map(({id , tooltip , title,percentage})=>{
                return(
                    
                    <div  key={id} className="skill__box">
                       <span className="title2">{title}</span>
                        <CircularProgressbar  strokeWidth={6} text={tooltip} value={percentage} styles={buildStyles({
                          pathColor:'#12f7ff',
                          textColor:'#ffffff',
                          textSize:'14px'
                        })}/>
                      
                    </div>
                   
                )
              })
            }
            </div>
                </div>
            </div>
        </section>
    )
}


export default Skill;