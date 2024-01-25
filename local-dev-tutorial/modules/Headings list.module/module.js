
document.addEventListener('DOMContentLoaded', function () {
  const headingsElement = document.querySelectorAll(".headingPadding .hs_cos_wrapper_type_inline_text");
  const headings = document.querySelectorAll(".headingPadding");       
     
      headings.forEach((e, i) => { 
       const headingsQuantity = Array.from(e.querySelectorAll(".hs_cos_wrapper_type_inline_text"));
  
        if (headingsQuantity.length === 1) {
        headingsQuantity[0].classList.add("singleHeading")
        }
      })

    headingsElement.forEach((elem, i) => {
      if (i % 2 !== 0) {
    elem.classList.add("spacingHeadingSecond");
    }
      })
});