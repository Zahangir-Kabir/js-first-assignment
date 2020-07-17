//FEET TO MILE CONVERTER

function feetToMile (feet){
    var mile = feet / 5280;

    return mile;
}

var convertRuslt = feetToMile(5280);
console.log(convertRuslt);



//WOOD CALCULATOR

function woodCalculator (chair, table, bed){
    var wchair = 4;
    var wtable = 3;
    var wbed = 5;
    var chairwood= 0;
    var tablewood = 0;
    var bedwood = 0;
    
    if (chair){
        chairwood = wchair*chair;
    }
    

    if (table){
        tablewood = wtable*table;
    }
   
    if (bed){
        bedwood = wbed*bed;
    }

    return chairwood+tablewood+bedwood;
}
console.log(woodCalculator(2,3,5));



// BRICK CALCULATOR

function brickCaculator (floor){
    var height1 = 0;
    var height2 = 0;
    var height3 = 0;
    var brick1 = 0;
    var brick2 = 0;
    var brick3 = 0;
    var base1 = 15;
    var base2 = 12;
    var base3 = 10;
    var slab1 = 10;
    var slab2 = 20;

    if(floor<=slab1){
        height1=base1*floor;
        brick1 =height1*1000;
        }
    if(floor>slab1 && floor<=slab2){
        brick1 =slab1*base1*1000;
        height2 = base2*(floor-slab1);
        brick2 = height2*1000;

       }

    if(floor>slab2){
        height1=base1*slab1;   
        brick1 =height1*1000; 
        height2 = base2*(slab2-slab1); 
        brick2 = height2*1000; 
        height3 = base3*(floor-slab2);
        brick3 = height3*1000;
       }
       return brick1+brick2+brick3;
       //return height1+ height2+height3;
}

    console.log (brickCaculator(30));





// TINY FRIENDS
function tinyFriends (tinyName){
    
    var smallest = tinyName[0];
    
    for (var i=0;  i<tinyName.length;  i++){
        var smallName=tinyName[i];
        if (smallName<smallest){
            smallest = smallName;
        }
    }
    return smallest;
}

var smallestNames = tinyFriends (["Alomgir", "Abir", "kamal","Nurul"]);
console.log(smallestNames);