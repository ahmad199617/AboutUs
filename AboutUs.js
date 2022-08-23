document.addEventListener("DOMContentLoaded", function(){
        
    {myVar = setTimeout(showPagex, 1500);}
    {myVar = setTimeout(showPage, 1000);}
    
    
    function showPage() {
    document.getElementById("LoadingID").style.opacity = "0%";}
    
    function showPagex() {
    document.getElementById("LoadingID").style.display = "none";}  
    
    
    
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    

                    
    




   
    {
    $('[lang="tr"]').show();
    $('[lang="en"]').hide();
    $('[lang="ar"]').hide();}    
   
    var lang=localStorage.getItem('lang');
    localStorage.getItem('lang');   
    if(lang==("en")){
    $('[lang="en"]').show();
    $('[lang="tr"]').hide();
    $('[lang="ar"]').hide();}
    
    
    if(lang==("tr")){
    $('[lang="tr"]').show();
    $('[lang="en"]').hide();
    $('[lang="ar"]').hide();}
    
    if(lang==("ar")){
    $('[lang="ar"]').show();
    $('[lang="en"]').hide();
    $('[lang="tr"]').hide();}});


    


    
    $(document).ready(function () {
        $('#switch-lang-en').click(function() {
            $('[lang="tr"]').hide();
            $('[lang="en"]').show();
            $('[lang="ar"]').hide();
            localStorage.setItem('lang', 'en');
        });
    });
    

    $(document).ready(function () {
        $('#switch-lang-tr').click(function() {
            $('[lang="tr"]').show();
            $('[lang="en"]').hide();
            $('[lang="ar"]').hide();
            localStorage.setItem('lang', 'tr');
        });
    });


    $(document).ready(function () {
        $('#switch-lang-ar').click(function() {
            $('[lang="ar"]').show();
            $('[lang="en"]').hide();
            $('[lang="tr"]').hide();
            localStorage.setItem('lang', 'ar');
        });
    });


    function setlangEN(){                   
            
        $('[lang="tr"]').hide();
        $('[lang="en"]').show();
        $('[lang="ar"]').hide();
        localStorage.setItem('lang', 'en');

        }
        function setlangTR(){
            $('[lang="tr"]').show();
            $('[lang="en"]').hide();
            $('[lang="ar"]').hide();
            localStorage.setItem('lang', 'tr');

        }

        function setlangAR(){
            $('[lang="ar"]').show();
            $('[lang="en"]').hide();
            $('[lang="tr"]').hide();
            localStorage.setItem('lang', 'ar');

        }


        function buttonCAR1 (){
            document.querySelector(".DIV-CAR-1").style.opacity="100%";
            document.querySelector(".DIV-CAR-1").style.zIndex = "10";
            document.querySelector(".BUTTON-CAR-1").style.backgroundColor="#1A4990";
            document.querySelector(".BUTTON-CAR-1").style.borderStyle="none";
            
            document.querySelector(".DIV-CAR-2").style.opacity="0%";
            document.querySelector(".DIV-CAR-2").style.zIndex = "-1";
            document.querySelector(".BUTTON-CAR-2").style.backgroundColor="#ffffff";
            document.querySelector(".BUTTON-CAR-2").style.borderStyle="solid";
            
            document.querySelector(".DIV-CAR-3").style.opacity="0%";
            document.querySelector(".DIV-CAR-3").style.zIndex = "-1";
            document.querySelector(".BUTTON-CAR-3").style.backgroundColor="#ffffff";
            document.querySelector(".BUTTON-CAR-3").style.borderStyle="solid";

            document.querySelector(".DIV-CAR-4").style.opacity="0%";
            document.querySelector(".DIV-CAR-4").style.zIndex = "-1";
            document.querySelector(".BUTTON-CAR-4").style.backgroundColor="#ffffff";
            document.querySelector(".BUTTON-CAR-4").style.borderStyle="solid";

            document.querySelector(".DIV-CAR-5").style.opacity="0%";
            document.querySelector(".DIV-CAR-5").style.zIndex = "-1";
            document.querySelector(".BUTTON-CAR-5").style.backgroundColor="#ffffff";
            document.querySelector(".BUTTON-CAR-5").style.borderStyle="solid";
        }

        function buttonCAR2 (){
            document.querySelector(".DIV-CAR-1").style.opacity="0%";
            document.querySelector(".DIV-CAR-1").style.zIndex = "-1";
            document.querySelector(".BUTTON-CAR-1").style.backgroundColor="#ffffff";
            document.querySelector(".BUTTON-CAR-1").style.borderStyle="solid";
            
            document.querySelector(".DIV-CAR-2").style.opacity="100%";
            document.querySelector(".DIV-CAR-2").style.zIndex = "-1";
            document.querySelector(".BUTTON-CAR-2").style.backgroundColor="#1A4990";
            document.querySelector(".BUTTON-CAR-2").style.borderStyle="none";

            document.querySelector(".DIV-CAR-3").style.opacity="0%";
            document.querySelector(".DIV-CAR-3").style.zIndex = "-1";
            document.querySelector(".BUTTON-CAR-3").style.backgroundColor="#ffffff";
            document.querySelector(".BUTTON-CAR-3").style.borderStyle="solid";

            document.querySelector(".DIV-CAR-4").style.opacity="0%";
            document.querySelector(".DIV-CAR-4").style.zIndex = "-1";
            document.querySelector(".BUTTON-CAR-4").style.backgroundColor="#ffffff";
            document.querySelector(".BUTTON-CAR-4").style.borderStyle="solid";

            document.querySelector(".DIV-CAR-5").style.opacity="0%";
            document.querySelector(".DIV-CAR-5").style.zIndex = "-1";
            document.querySelector(".BUTTON-CAR-5").style.backgroundColor="#ffffff";
            document.querySelector(".BUTTON-CAR-5").style.borderStyle="solid";
        }
        
        function buttonCAR3 (){
            document.querySelector(".DIV-CAR-1").style.opacity="0%";
            document.querySelector(".DIV-CAR-1").style.zIndex = "-1";
            document.querySelector(".BUTTON-CAR-1").style.backgroundColor="#ffffff";
            document.querySelector(".BUTTON-CAR-1").style.borderStyle="solid";
            
            document.querySelector(".DIV-CAR-2").style.opacity="0%";
            document.querySelector(".DIV-CAR-2").style.zIndex = "-1";
            document.querySelector(".BUTTON-CAR-2").style.backgroundColor="#ffffff";
            document.querySelector(".BUTTON-CAR-2").style.borderStyle="solid";
            
            document.querySelector(".DIV-CAR-3").style.opacity="100%";
            document.querySelector(".DIV-CAR-3").style.zIndex = "10";
            document.querySelector(".BUTTON-CAR-3").style.backgroundColor="#1A4990";
            document.querySelector(".BUTTON-CAR-3").style.borderStyle="none";

            document.querySelector(".DIV-CAR-4").style.opacity="0%";
            document.querySelector(".DIV-CAR-4").style.zIndex = "-1";
            document.querySelector(".BUTTON-CAR-4").style.backgroundColor="#ffffff";
            document.querySelector(".BUTTON-CAR-4").style.borderStyle="solid";

            document.querySelector(".DIV-CAR-5").style.opacity="0%";
            document.querySelector(".DIV-CAR-5").style.zIndex = "-1";
            document.querySelector(".BUTTON-CAR-5").style.backgroundColor="#ffffff";
            document.querySelector(".BUTTON-CAR-5").style.borderStyle="solid";
        }
        
        function buttonCAR4 (){
            document.querySelector(".DIV-CAR-1").style.opacity="0%";
            document.querySelector(".DIV-CAR-1").style.zIndex = "-1";
            document.querySelector(".BUTTON-CAR-1").style.backgroundColor="#ffffff";
            document.querySelector(".BUTTON-CAR-1").style.borderStyle="solid";
            
            document.querySelector(".DIV-CAR-2").style.opacity="0%";
            document.querySelector(".DIV-CAR-2").style.zIndex = "-1";
            document.querySelector(".BUTTON-CAR-2").style.backgroundColor="#ffffff";
            document.querySelector(".BUTTON-CAR-2").style.borderStyle="solid";
            
            document.querySelector(".DIV-CAR-3").style.opacity="0%";
            document.querySelector(".DIV-CAR-3").style.zIndex = "-1";
            document.querySelector(".BUTTON-CAR-3").style.backgroundColor="#ffffff";
            document.querySelector(".BUTTON-CAR-3").style.borderStyle="solid";

            document.querySelector(".DIV-CAR-4").style.opacity="100%";
            document.querySelector(".DIV-CAR-4").style.zIndex = "10";
            document.querySelector(".BUTTON-CAR-4").style.backgroundColor="#1A4990";
            document.querySelector(".BUTTON-CAR-4").style.borderStyle="none";

            document.querySelector(".DIV-CAR-5").style.opacity="0%";
            document.querySelector(".DIV-CAR-5").style.zIndex = "-1";
            document.querySelector(".BUTTON-CAR-5").style.backgroundColor="#ffffff";
            document.querySelector(".BUTTON-CAR-5").style.borderStyle="solid";
        }
        
        function buttonCAR5 (){
            document.querySelector(".DIV-CAR-1").style.opacity="0%";
            document.querySelector(".DIV-CAR-1").style.zIndex = "-1";
            document.querySelector(".BUTTON-CAR-1").style.backgroundColor="#ffffff";
            document.querySelector(".BUTTON-CAR-1").style.borderStyle="solid";
            
            document.querySelector(".DIV-CAR-2").style.opacity="0%";
            document.querySelector(".DIV-CAR-2").style.zIndex = "-1";
            document.querySelector(".BUTTON-CAR-2").style.backgroundColor="#ffffff";
            document.querySelector(".BUTTON-CAR-2").style.borderStyle="solid";

            document.querySelector(".DIV-CAR-3").style.opacity="0%";
            document.querySelector(".DIV-CAR-3").style.zIndex = "-1";
            document.querySelector(".BUTTON-CAR-3").style.backgroundColor="#ffffff";
            document.querySelector(".BUTTON-CAR-3").style.borderStyle="solid";

            document.querySelector(".DIV-CAR-4").style.opacity="0%";
            document.querySelector(".DIV-CAR-4").style.zIndex = "-1";
            document.querySelector(".BUTTON-CAR-4").style.backgroundColor="#ffffff";
            document.querySelector(".BUTTON-CAR-4").style.borderStyle="solid";

            document.querySelector(".DIV-CAR-5").style.opacity="100%";
            document.querySelector(".DIV-CAR-5").style.zIndex = "10";
            document.querySelector(".BUTTON-CAR-5").style.backgroundColor="#1A4990";
            document.querySelector(".BUTTON-CAR-5").style.borderStyle="none";
        }



        
        
        


























        
        
        
        function setIMG(IMGURL) {
            
            
            var imglink=IMGURL
                       
            
            $('.imgXX').css({'content' : 'url(' + imglink + ')'});
            $('.backgrund').css({'opacity': '100%'});
            $('.backgrund').css({'z-index': '1000'});
            
           
    
            
        }
    
           document.querySelector(".closex").addEventListener("click", close, false);
           
           document.querySelector(".backgrund-black").addEventListener("click", close, false);
        
        
            function close() {
            
            
            {myVar  = setTimeout(zindex, 300);}
            
            
            $('.backgrund').css({'opacity': '0%'});
            }
    
            
            
            
            function zindex() {
                $('.backgrund').css({'z-index': '-1000'});
    
    
    
            }
    

