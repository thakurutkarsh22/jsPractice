// css selector performance

// https://stackoverflow.com/questions/5797014/why-do-browsers-match-css-selectors-from-right-to-left
// https://csswizardry.com/2011/09/writing-efficient-css-selectors/



// specificty 
// ... ? 






// -------------------- units 


// 3 rules for % for containing block

// 1.   ViewPort  < ---------------- Element  || position: fixed // elemen
// 2.  position any expect static ancestor -  ancestor's content + padding < ---------------- Element  || position: absolute
// 3. block level element ancestor  ancestor content only     < ---------------- Element || position: static, relative


// Font size

// rem em can get affected from browser font size  em derives calculation from actual size inherited
// em multiplies to the previously inherited sizes could create problem
// this is the problem solved by REM // hre R stands for root element which is html element 


// viewport 
// vh assumes value of one of the lowest of vw vh using vmin 