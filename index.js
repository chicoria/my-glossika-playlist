

// A comment.
// writer.comment('I am a comment');

// An empty line.
// writer.write(); // blank line

// A playlist item, usually a path or url.

  var fs = require('fs');


var MY_M3U_FILE = "18-weeks.m3u";
var SOURCE_TARGET_LANGUAGE = "ENDE";
var AUDIO_SOURCE_DIR = "";

var GMS = "GMS";
var GSR = "GSR" ;
var F1 = "F1";
var F2 = "F2";
var F3 = "F3";
//ENDE-F1-GMS
//GMS-A
//GMS-B
//GMS-C
//ENDE-F1-GSR
var writer = require('m3u').writer();


var Converter=require("csvtojson").Converter;
var converter=new Converter({
  // delimiter: [" "],
  noheader:true
});


function debug(obj){
  //console.log(obj) ;
}
var jsonMap = new Map();
converter.transform=function(json,row,index){
    //console.log(json["field1"]);
    if (json["field1"].includes("Week") ){
      return ;
    }
    json["rowIndex"]=index;
    let arr = json["field1"].split(" ");
    jsonMap.set(index+1,arr );

    /* some other examples:
    delete json["myfield"]; //remove a field
    json["dateOfBirth"]=new Date(json["dateOfBirth"]); // convert a field type
    */
    for (var i = 0; i < arr.length; i++) {
      console.log(arr[i]);

        let path = SOURCE_TARGET_LANGUAGE;
        let fileName =   SOURCE_TARGET_LANGUAGE;
        let textToTrim = "";
        let fileNumberText = "";


        debug("textToTrim=" + textToTrim) ;

        if(arr[i].includes("F1") ){
           path = path+"-F1-";
           fileName = fileName +"-F1-" ;
           textToTrim = textToTrim + "F1";
           debug("textToTrim=" + textToTrim) ;
        }
        if(arr[i].includes("F2") ){
           path = path+"-F2-";
           fileName = fileName +"-F2-" ;
            textToTrim = textToTrim + "F2";
            debug("textToTrim=" + textToTrim) ;
        }
        if(arr[i].includes("F3") ){
           path = path+"-F3-";
           fileName = fileName +"-F3-" ;
           textToTrim = textToTrim + "F2";
           debug("textToTrim=" + textToTrim) ;
        }

        if(arr[i].includes("GMS")){

           path = path+"GMS/" ;

           debug("textToTrim=" + textToTrim) ;

           if(arr[i].includes("GMS­A­") ){
              path = path + "GMS-A/" ;
              fileName = fileName +"GMS-A-" ;
              textToTrim = textToTrim + "A";
           }
           if(arr[i].includes("GMS­B") ){
              path = path  + "GMS-B/" ;
              fileName = fileName +"GMS-B-" ;
              textToTrim = textToTrim + "B";
           }
           if(arr[i].includes("GMS­C") ){
              path = path + "GMS-C/" ;
              fileName = fileName +"GMS-C-" ;
              textToTrim = textToTrim + "C";
           }
           debug("textToTrim=" + textToTrim) ;

           fileNumberText = arr[i].substring(arr[i].length -4);
           debug("fileNumberText=" + fileNumberText) ;

           fileName = fileName + fileNumberText;
        }

        if(arr[i].includes("GSR")){
           path = path + "GSR/" ;
           fileName = fileName +"GSR-DAY" ;
           textToTrim = textToTrim + "GSRDAY";
           debug("textToTrim=" + textToTrim) ;

           fileNumberText = arr[i].substring(arr[i].length -3);
           fileName = fileName + fileNumberText;

           debug("fileNumberText=" + fileNumberText) ;
        }

        fileName = fileName + ".mp3";
         debug("fileName=" + fileName) ;

        let finalPath = path + fileName ;



        writer.file( finalPath);
    }
    //---- second level folder






};

converter.fromFile("./18weeks.txt",function(err,result){
  //all result rows will add a field 'rowIndex' indicating the row number of the csv data:
  /*
  [{
    field1:value1,
    rowIndex: 0
 }]
  */
    // console.log(JSON.stringify(result));
    // console.log(jsonMap);
    //console.log(writer.toString());


  fs.writeFile(MY_M3U_FILE, writer.toString(), function(err) {
      if(err) {
          return console.log(err);
      }

      console.log("The file was saved!");
  });
});
