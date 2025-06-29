#  *unlock scandinavia*
![unlock scandinavia](/assets/markdownShootscreen/amIresponsive.png)



## Introduction 
Ready for a quick challenge? This quiz is all about Scandinavia! Answer fun questions on topics like IKEA, capital cities (think Stockholm and Oslo), coffee culture, and even recycling. Discover interesting facts about Sweden, Denmark, and Norway. It's a simple, fun way to test what you know about these cool countries!

 


## Features

   - **Header.**

     Short web **head** clearly direct users, helping them immediately understand their location on the site.**The image of a metro escalator** in a Scandinavian capital serves as a powerful visual invitation for the quiz. Its concise heading and striking imagery are designed to grab attention and encourage users to immediately begin their experience. **The paragraph** invites users to an interactive and easy-to-use quiz making it an accessible and engaging way to explore the region.  

     ![Header](/assets/markdownShootscreen/headerImg.png)  

   - **Start Quiz Workflow.**  

     Users must submit their name to begin the quiz. Upon submission (either by clicking the button or pressing Enter), the submit button will disappear.

     ![Submit](/assets/markdownShootscreen/submition.png)

   - **Wecome Message & Fade.**  
    
     After submitting their name, a personalized welcome message will appear, including the user's submitted name to create a welcoming feel. This message will fade out after 4 seconds, adding a subtle and mysterious touch to the user experience.  

     ![Welcome Message](/assets/markdownShootscreen/welcomeMessage.png)

   - **Quiz questions.**  
      
     Test your knowledge with questions on general Scandinavian facts and important cultural insights.

     ![questions](/assets/markdownShootscreen/questions.png)  

   - **Interactive Answer Buttons.**  
 
      
     Users select their answers by clicking on interactive buttons. These buttons are styled with background and font colors carefully chosen to reflect the distinct national palettes of Denmark, Sweden, and Norway, creating a visually cohesive and regionally representative user interface for most answers. but **not all**, answers.
     
     ![Answer buttons](/assets/markdownShootscreen/answerButtons.png)

   - **Score.**
  
      Your score is presented with simple, iconic visuals. See your score represented by a **green icon** and your incorrect answers by a **red icon**, making your performance easy to understand at a glance.  

      ![score](/assets/markdownShootscreen/score.png)  

   - **Result Message.**  
  
     After completing the quiz, a result message will appear, clearly displaying your score out of 10. This gives you an immediate understanding of your performance.
     
     ![Result Message](/assets/markdownShootscreen/resulteMessage.png)

   - **Play Again.** 
     
     A Play Again button makes it easy to restart the game and enjoy another round.  

     ![Play Agian](/assets/markdownShootscreen/playAgainButton.png)

## WireFrame.

   - **Starting the quiz.**  
   
     ![Start page](/assets/markdownShootscreen/wireFrameStart.png)  

   - **After Name Submission.**  
     
     ![Name submission](/assets/markdownShootscreen/wireFrameSubmit.png)

   - **During Quiz.**    

     ![During Quiz](/assets/markdownShootscreen/wireFramesQuiz.png)  

   - **At the End of Quiz.**  
 
     ![Resulte](/assets/markdownShootscreen/wireFrameResulte.png)






## Testing
 
- Browser: Google ChromeVersion 137.0.7151.120 (Official Build) (64-bit).
- Operating System:  Windows 11 pro 64-bit  x64-based processor
* ### Manul Testing
        
    1. #### Responsive Testing
            
 



         | Element      | Default (Mobile)  |  @media (min-width: 768px) (Tablets)     | @media (min-width: 1024px) (Laptops) |  @media (min-width: 1440px) (Large Desktops) | @media (min-width: 2560px) (XL Desktops/4K) | Explanation/Purpose          |
         |:-------------:|:--------------:|:-------------:|:-------------:|:------------------:| :---------------: |:-------------------| 
         | body            |    font-size: initial       |    font-size: initial   |  font-size: initial     |    font-size: x-large    | font-size: 40px | To ensure text readability and proportionate scaling across increasingly larger screens, preventing content from appearing too small on high-resolution displays.             |
         |  h1          | font-size: 40px|font-size: 40px|font-size: 40px|font-size: 40px     | font-size: 80px   |Maintains prominence and legibility of the main title, scaling up significantly for ultra-large displays to match the overall increased UI size.    | 
         | #heroImage   |  width: 100%, height: 200px  |  height: 400px   |height: 400px| height: 600px |height: 1100px | Leverages increased vertical screen real estate on larger devices to display a more impactful hero section, maintaining visual presence without being overwhelming.  |
         | #question    |  height: 6vh, width: auto  margin-left: auto   margin-right: auto  |    height: 4vh, width: 650px         |   height: 4vh, width: 650px     |   height: 5vh, width: 1190px       | height: 6vh, width: 1190px    |The height adjusts to provide sufficient space for question text while optimizing vertical layout. Width increases to utilize horizontal space, auto margins center the content. The 6vh minimum height (on mobile and XL) is crucial to prevent content overflow from obscuring interactive buttons below.|
         | #answer0/1/2 (Buttons) |   width: 6em, height: 2.8em, font-size: 1em     |  width: 8em, height: 3em, font-size: 1.1em|  width: 9em, height: 3.5em, font-size: 1.2em|   font-size: 20px, height: 2.5em |font-size: 25px, height: 2.5em | Ensures buttons are easily tappable/clickable and comfortably accommodate varying answer text lengths. Sizes and font sizes increase proportionally with screen size for better usability and visual balance.   |
         |.copyRight    |font-size: medium|font-size: medium|font-size: medium|font-size: medium|font-size: 20px   |font-size: 30px   |Increases legibility of copyright information on larger displays, ensuring it remains readable without being disproportionately small.|


    
    
    2. #### DevTools JS
            
    

    | Type of Error                                |   Reason / Reasons| Solution       | 
    |:-------------------------------------------: |:-----------------:|:------------------:|
    | SyntaxError : Unexpected token.  | The answer button shares an ID with another element due to a copy-paste error.| Ensure each button is assigned a unique and appropriate ID. |
    | Attempting to read the 'trim' property of a null value when retrieving the username.| Incorrectly referencing *ariaValueMax* instead of *value* due to a typing error. | Reference the correct *value* property. |
    | ReferenceError : get is not defined at welcomeUser | Typographical error in *get.getElementById* | Remove *get.* Remove from the element reference.|
    |Incorrect answer provided for question number six. | The solution references an incorrect *index number* within the *correct* property.|Provide the correct index number within the *correct* property.|  


## Code Validation

   -  HTML Validation  

      |Type of Error            |Reason / Reasons  |  Solution|
      |---------                   |-------        |-------|
      |   Error: Bad value       | The *width* attribute on the *img* element has an invalid value of *"100%"*, as it expects a digit instead of a percentage.      |   Relocate the *width* attribute to the CSS file.    |

      ![W3C HTML ](/assets/MarkdownShootscreen/wcHtmlValidator.png )


   -  CSS Validation.  
        No Error found! 

      ![W3C CSS](/assets/MarkdownShootscreen/wcCssValidator.png )


   -  JSHint JavaScript Validator  
          No Error found.
       
       ![JSHint ](/assets/MarkdownShootscreen/jsHintValidator.png )



## Lighthouse Testing

  ![Lighthouse perfomrance](/assets/MarkdownShootscreen/lighthousePerfomrance.png)

## Colour Test

 [dequeUniversity](https://dequeuniversity.com/)


  ![dequeuniversity](/assets/MarkdownShootscreen/colourContrastAnalyzer.png)






## Deployment
- I started the project by creating a new git repo with git init then i used git add . to add changes to the staging area, then i committed them with `git commit -m "succinct message" and then pushed to the remote repo Github with git push.  
- Access your GitHub repository and navigate to Settings.  
- In the left sidebar, select Pages :  
    - In the left sidebar, select Pages > Under Build and deployment > Source, choose: 
    - Branch: main.  
    - Folder: /(root).  
    - Click Save to initiate deployment.  
    - GitHub will automatically refresh and display a green deployment notification when complete.  
    - live site will be available at: [unlock scandinavia](https://omarazzawi.github.io/Unlock_Scandinavia/)



## Credits. 
  - Content  

     - Grateful to [Code Institute](https://codeinstitute.net/se/?utm_term=code%20institute&utm_campaign=CI%20-%20SWE%20-%20Search%20-%20Brand&utm_source=adwords&utm_medium=ppc&hsa_acc=8983321581&hsa_cam=14660337051&hsa_grp=134087657984&hsa_ad=635849372549&hsa_src=g&hsa_tgt=kwd-319867646331&hsa_kw=code%20institute&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gad_source=1&gad_campaignid=14660337051&gbraid=0AAAAADnKut-6Y9g9cgk6Wzc542RUm22ie&gclid=Cj0KCQjwsNnCBhDRARIsAEzia4B1jfvdlvr8dplkrdaKAUMz2geRAdmqK_VzMus2yw75pvB8vef8oGwaAu-OEALw_wcB) for providing invaluable study materials and knowledge.
     - I am deeply grateful to [Mr. Spencer Barriball](https://www.linkedin.com/in/spencerbarriball/) for his mentorship and profound insights. His guidance not only introduced me to new perspectives on design but also provided a comprehensive understanding of quiz game development – from how it works to the essential steps for building one, complete with practical examples. His expertise was truly a cornerstone of this endeavor.
     - javascript document, event and function by [Bro code](https://www.youtube.com/@BroCodez).
     - Assisted by [Gemini AI](https://gemini.google.com/app) ,[DeepSeek](https://www.deepseek.com/en), [OpenAI](https://openai.com/) for invaluable text editing, suggestions, and rewriting.  
     - Manual testing vs Automation testing for beginners by: [ Codemify ](https://www.youtube.com/watch?v=-uOTt8s7ngk). 
     - JavaScript Course for Beginners by [Mosh](https://www.youtube.com/@programmingwithmosh).
     - [w3school](https://www.w3schools.com/).
     - Icons sourced from Font [Awesome](https://fontawesome.com/kits).  
     - Colours selections made with the aid of [Color Picker](https://imagecolorpicker.com/). 
     - Favicon icon generously provided by cube29 [Flaticon](https://www.flaticon.com/authors/cube29).
     - Favicon generated using Favicon.io.
     - The hero image by: [Bogdan Giurca](https://www.pexels.com/@bogdan-giurca-1141359795/).  
  

  






  



  




        


         

      

