function getImportedArray(rArray){var i=0;var ns=0;var c="";var oArray=[];while(i<rArray.length){c=rArray[i];if(c==","||c=="\n"){if(ns!=-4){oArray.push(Number(rArray.substr(ns,i-ns)));}ns=-4;}else if(ns==-4){ns=i;}i++;}oArray.push(Number(rArray.substr(ns,i-ns)));return oArray;}