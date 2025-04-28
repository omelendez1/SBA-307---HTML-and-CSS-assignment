 /*login dropdown for class nAccount
 */
    function toggleDropdown() {
        const dropdown = document.getElementById("accountDropdown");
        // Toggle the display of the dropdown
        dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
    }
 
 
 
 /**
    options in right column needs to be updated with new workout suggestions
  */
  // Function to update content based on selected option

  function updateContent() {
    var selectedOption = document.getElementById("workout-select").value;
    var contentDiv = document.getElementById("content");

    if (selectedOption === "upper1") {
      contentDiv.innerHTML = "<h3>Bench Press</h3><p style='text-indent: 20px;'>Bench press variations target different parts of the chest, shoulders, and triceps by adjusting grip width, bench angle, or equipment."+
        "Incline presses emphasize the upper chest, decline presses focus on the lower chest, and close-grip presses shift work to the triceps. " +
        "Using a variety of bench press forms ensures balanced muscle development and prevents training plateaus. </p>" +
        
        "<iframe width='560' height='315' src='https://www.youtube.com/embed/lJ2o89kcnxY?si=NGwpsbHk4Fa0L-LO' title='YouTube video player' frameborder='0' allow='accelerometer; "+
        "autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>"+
        "<h1>test</h1>";

    } else if (selectedOption === "upper2") {
      contentDiv.innerHTML = "<h3>Barbell Rows</h3><p style='text-indent: 20px;'>Barbell row variations strengthen the back, particularly the lats, rhomboids, and traps. "+
      "Changing grip width, grip style (overhand or underhand), and torso angle targets different parts of the back and arms."+
      "Using various rowing techniques ensures balanced upper-body development and improved pulling strength."+
      "</p>" +

      "<iframe width='560' height='315' src='https://www.youtube.com/embed/6FZHJGzMFEc?si=CSbYptsSxqhIiYZV' title='YouTube video player' frameborder='0' allow='accelerometer; "+
      "autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>";
      
      
    } else if (selectedOption === "lower1") {
      contentDiv.innerHTML = "<h3>Barbell Squats</h3><p>Barbell squat variations, such as high-bar, low-bar, and front squats, target the quads, glutes, hamstrings, and lower back "+
       "differently. The position of the barbell (high on the traps, lower on the back, or in front of the body) changes the angle of the movement and muscle engagement. By incorporating"+
       " various squat forms, athletes can improve overall lower-body strength and correct muscle imbalances.</p>" +

       "<iframe width='560' height='315' src='https://www.youtube.com/embed/MM9ObaAPcv4?si=Z3ATbpF1_sJ1doOK' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write;"+
       " encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>";


    } else {
      contentDiv.innerHTML = "Please select an option from the dropdown above to see the content change.";
    }
  }
