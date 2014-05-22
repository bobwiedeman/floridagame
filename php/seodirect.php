<?php
//$parms =$_GET['bb'];
$parms = explode("/", trim($_GET['seo']));
var_dump($parms);
if($parms[1] !== 'golf'){
       header("Location: http://propertyappraiser.com/default.html");

} else {
    if(sizeof($parms) == 4){
        @readfile('../golf/index.html');
//        header("Location: http://propertyappraiser.com/pa02".'/seofiles/'.trim($parms[2]).'-'.trim($parms[3]).'.html');
    } else {
//        header("Location: http://propertyappraiser.com/pa02".'/seofiles/'.trim($parms[2]).'.html');

        @readfile('../golf/index.html');
    }
}
//echo trim($parms[2]).'_'.trim(str_replace(' ','-',$parms[3])).'_'.trim($parms[4]).'.html';
?>
