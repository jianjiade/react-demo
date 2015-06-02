/**
 * Created by iu2fish on 15/6/2.
 */
var list = [2,5,3,5,7,9,12,57,3,6];

function sort(a) {
    if (!a.isArray()){
        return;
    } else {
        var m, n, temp;
        for(m = 0; n < a.length - 1; m ++){
            for(n = 0; n < a.length - 1 - m; n ++) {
                if(a[m] > a[m + 1]){
                    temp = a[m];
                    a[m] = a[m+1];
                    a[m+1] = temp;
                }
            }
        }
        console.log(a);
    }
}

sort(list);